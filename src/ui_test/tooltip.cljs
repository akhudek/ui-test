(ns ui-test.tooltip
  (:require
    [dommy.core :as dom]
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

;; This example is a bit ugly, but I couldn't see a better way. Follow the previous
;; om implementation, this uses a single "tooltip" element that gets reused for every
;; tooltip. However, instead of writing it as a mixin, it now wraps the component
;; you want the tooltip on.

;; Additionally, it supports fading in by first positioning the tooltip, then
;; subsequently toggling a class that initiates the fade in. Fading out is a bit
;; more complex, as if you move the tip out of position before the fade is done you
;; won't see the fade. So far this, we use a second timer that moves the tooltip back
;; to the initial off screen position after a delay. It's also possible to tweak this
;; so that it only has a delay on mouse-leave, and instantly moves on component
;; destruction.

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
  [message]
  (let [node (r/atom nil)]
    (fn []
      (r/create-class
        {:component-will-unmount
         #(reset-tooltip!)
         :component-did-mount
         (fn [this] (reset! node (r/dom-node this)))
         :reagent-render
         (fn [component]
           [:div {:on-mouse-enter #(start-timer! (fn []
                                                   (swap! tooltip-state assoc :msg message)
                                                   (set-position! @node)))
                  :on-mouse-leave #(reset-tooltip!)}
            component])}))))

(defn example-div
  [msg]
  [:div (str "I have a tooltip" msg)])

(defcard tooltip-base
  "This renders the base tooltip. It's positioned as *fixed* so that it always offsets from the
  root page. There is only one div per tooltip and it's resued for all tips since you can only
  have one tip open at a time."
  (r/as-element [tooltip-base]))

(defcard tooltip-example
  (r/as-element
    [:div [(with-tooltip "A helpful message.") [example-div "foo"]]]))
