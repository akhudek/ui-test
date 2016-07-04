(ns ui-test.core
  (:require
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true]
    [ui-test.component :as c]
    ui-test.table
    ui-test.checkbox
    ui-test.tooltip)
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

#_(defn simple-input []
  (let [text (r/atom "")]
    (fn []
      [:input {:type "text"
               :value @text
               :on-change #(reset! text (-> % .-target .-value))}])))

(defn simple-input
  [initial-value opts]
  (let [s {:text (r/atom initial-value)}]
    (c/->Component
      s
     (fn []
       [:input {:class (or (:class opts) "")
                :type (or (:type opts) "text")
                :on-blur #(when-let [f (:on-blur opts)] (f % s))
                :value @(:text s)
                :on-change #(reset! (:text s) (-> % .-target .-value))}]))))

(defn input-with-icon
  [icon opts]
  (let [input (simple-input "" opts)]
    (c/->Component
      (:state input)
      (fn [] [:div [:div icon] (c/render input)]))))

(defcard simple-input-example
  (let [input (simple-input "fooo" {})]
    (r/as-element (c/render input))))

(defcard login-example
  (let [;input1 (simple-input "" {:on-blur (fn [e s] (println "blur" s))})
        input1 (input-with-icon "user" {})
        input2 (input-with-icon "pass" {:type "password"})]
    (r/as-element
      [:div
       (c/render input1)
       (c/render input2)
       [:button {:on-click #(do
                             (println "submitting")
                             (println @(:text (:state input1)))
                             (println @(:text (:state input2))))} "Login"]])))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
