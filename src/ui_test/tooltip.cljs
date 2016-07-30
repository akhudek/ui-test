(ns ui-test.tooltip
  (:require
    [dommy.core :as dom :refer-macros [sel1]]
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
(def tooltip-delay 500)
(def tooltip-hide-delay 500) ;; needs to match css
(def default-opts {:position :top})

(defn tooltip-base
  "The base tooltip component shared by all tooltips. This should
  be mounted as close to the body as possible."
  [base-id tooltip-state message]
  (when (and (:positioned @tooltip-state) (not (:visible @tooltip-state)))
    (swap! tooltip-state assoc :visible true))
  [:div.tooltip {:id base-id
                 :style {:position "fixed"
                         :top (:top @tooltip-state)
                         :left (:left @tooltip-state)
                         :background "black"
                         :color "white"}
                 :class (if (:visible @tooltip-state) "show" "")}
   message])

(defn start-timer!
  [tooltip-timer tooltip-hide-timer f]
  (reset! tooltip-timer (.setTimeout js/window f tooltip-delay))
  (when-let [id @tooltip-hide-timer]
    (.clearTimeout js/window id)))

(defn start-hide-timer!
  [tooltip-state tooltip-hide-timer]
  (reset! tooltip-hide-timer (.setTimeout js/window #(reset! tooltip-state initial-state) tooltip-hide-delay)))

(defn stop-timer!
  [tooltip-timer]
  (.clearTimeout js/window @tooltip-timer))

(defn set-position!
  "Set the position of the tooltip based on the supplied element."
  [tooltip-state opts base-id el]
  (let [tgt-rect (dom/bounding-client-rect el)
        tip-rect (dom/bounding-client-rect (sel1 (str "#" base-id)))]
    (case (:position opts)
      :top
      (swap! tooltip-state assoc
             :top (- (:top tgt-rect) (:height tip-rect))
             :left (- (+ (:left tgt-rect) (/ (:width tgt-rect) 2.0)) (/ (:width tip-rect) 2.0))
             :positioned true))))

(defn reset-tooltip!
  "Reset the tooltip to initial conditions."
  [tooltip-timer tooltip-hide-timer tooltip-state]
  (stop-timer! tooltip-timer)
  (swap! tooltip-state assoc :visible false :positioned false)
  (start-hide-timer! tooltip-state tooltip-hide-timer))

(defn with-tooltip
  [message opts]
  (let [node          (r/atom nil)
        tooltip-state (r/atom initial-state)
        tooltip-timer (r/atom nil)
        tooltip-hide-timer (r/atom nil)
        base-id       (str "_" (random-uuid))
        opts          (merge default-opts opts)]
    (fn []
      (r/create-class
        {:component-will-unmount
         #(reset-tooltip! tooltip-timer tooltip-hide-timer tooltip-state)
         :component-did-mount
         (fn [this] (reset! node (r/dom-node this)))
         :reagent-render
         (fn [component]
           [:div {:on-mouse-enter #(start-timer!
                                    tooltip-timer
                                    tooltip-hide-timer
                                    (fn []
                                      (swap! tooltip-state assoc :msg message)
                                      (set-position! tooltip-state opts base-id @node)))
                  :on-mouse-leave #(reset-tooltip! tooltip-timer tooltip-hide-timer tooltip-state)}
            [tooltip-base base-id tooltip-state message]
            component])}))))

(defn example-div
  [msg]
  [:div (str "I have a tooltip" msg)])

(defcard tooltip-example
  (r/as-element
    [:div [with-tooltip "A helpful message." {}
           [example-div "foo"]]]))
