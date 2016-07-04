(ns ui-test.tooltip
  (:require
    [dommy.core :as dom]
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true]
    [ui-test.component :as c])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(def initial-state {:top -1000 :left -1000 :msg "" :positioned false :visible false})
(def tooltip-state (r/atom initial-state))
(def tooltip-timer (r/atom nil))
(def tooltip-delay 500)
(def tooltip-hide-delay 500) ;; needs to match css
(def tooltip-hide-timer (r/atom nil))

(defn tooltip-base
  "The base tooltip component shared by all tooltips. This should
  be mounted as close to the body as possible."
  []
  (when (and (:positioned @tooltip-state) (not (:visible @tooltip-state)))
    (swap! tooltip-state assoc :visible true))
  [:div.tooltip {:style {:position "fixed"
                         :top (:top @tooltip-state)
                         :left (:left @tooltip-state)
                         :background "black"
                         :color "white"}
                 :class (if (:visible @tooltip-state) "show" "")}
   (:msg @tooltip-state)])

(defn start-timer!
  [f]
  (reset! tooltip-timer (.setTimeout js/window f tooltip-delay))
  (when-let [id @tooltip-hide-timer]
    (.clearTimeout js/window id)))

(defn start-hide-timer!
  []
  (reset! tooltip-hide-timer (.setTimeout js/window #(reset! tooltip-state initial-state) tooltip-hide-delay)))

(defn stop-timer!
  []
  (.clearTimeout js/window @tooltip-timer))

(defn set-position!
  "Set the position of the tooltip based on the supplied element."
  [el]
  (let [rect (dom/bounding-client-rect el)]
    (swap! tooltip-state assoc :top (- (:top rect) 20) :left (:left rect) :positioned true)))

(defn reset-tooltip!
  "Reset the tooltip to initial conditions."
  []
  (stop-timer!)
  (swap! tooltip-state assoc :visible false :positioned false)
  (start-hide-timer!))

(defn with-tooltip
  [component message]
  (let [node (r/atom nil)]
    (c/->Component
     (:state component)
       (fn []
        (r/create-class
          {:component-will-unmount
           #(reset-tooltip!)
           :component-did-mount
           (fn [this] (reset! node (r/dom-node this)))
           :component-did-update
           (fn [this old-argv]
             (println @tooltip-state))
           :reagent-render
           (fn [& args]
             [:div {:on-mouse-enter #(start-timer! (fn []
                                                     (swap! tooltip-state assoc :msg message)
                                                     (set-position! @node)))
                    :on-mouse-leave #(reset-tooltip!)}
              (apply c/render component args)])})))))

(defn example-div
  []
  (c/->Component nil (fn [] [:div "I have a tooltip"])))

(defcard tooltip-base
  "This renders the base tooltip. It's positioned as *fixed* so that it always offsets from the
  root page. There is only one div per tooltip and it's resued for all tips since you can only
  have one tip open at a time."
  (r/as-element [tooltip-base]))

(defcard tooltip-example
  (let [my-comp (-> (example-div)
                    (with-tooltip "A helpful message."))]
    (r/as-element
      [:div (c/render my-comp)])))
