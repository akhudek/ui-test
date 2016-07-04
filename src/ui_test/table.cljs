(ns ui-test.table
  (:require
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

;; Multiselect? Has 1 item of state per row.
;; Table has list of rows.
;; List has list of things.
;; Input to multiselect is list?

(defn table-row
  [row]
  (println row)
  [:div.row (:name row)])

(defn table
  [opts]
  (let [s {:text (r/atom "")}]
    {:state {}
     :render
     (fn [rows]
       [:div.table
        (for [row rows] ^{:key row} [table-row row])])}))

(defn example-data
  [n]
  (mapv #(hash-map :name (str "Entry " %)) (range n)))

(defn table-example* []
  (let [data   (r/atom (example-data 20))
        table1 (table {})]
    (fn []
      [:div
       [:button {:on-click #(reset! data (example-data 10))} "10"]
       [:button {:on-click #(reset! data (example-data 50))} "50"]
       [:button {:on-click #(reset! data (example-data 100))} "100"]
       [:button {:on-click #(reset! data (example-data 1000))} "1000"]
       [:button {:on-click #(swap! data assoc 2 {:name "new row"})} "update row 3"]
       [(:render table1) @data]])))

(defcard table-example (r/as-element [table-example*]))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

