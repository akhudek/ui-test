(ns ui-test.checkbox
  (:require
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defn checkbox
  []
  (fn [checked?]
    [:input {:type "checkbox"
             :checked checked?}]))

(defn checkbox-example* []
  (let [data   (r/atom true)]
    (fn []
      [:div
       [checkbox @data]])))

(defcard checkbox-example (r/as-element [checkbox-example*]))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

