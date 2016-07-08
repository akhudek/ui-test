(ns ui-test.core
  (:require
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true]
    [ui-test.component :as c]
    ui-test.checkbox
    ui-test.input
    ui-test.dropdown
    ui-test.table
    ui-test.tooltip)
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
