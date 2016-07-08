(ns ui-test.input
  (:require
    [dommy.core :as dom]
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true]
    [ui-test.component :as c])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

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

(defn simple-input2
  [state initial-value opts]
  (reset! state {:text initial-value})
  (fn []
    [:input {:class (or (:class opts) "")
             :type (or (:type opts) "text")
             :on-blur #(when-let [f (:on-blur opts)] (f % state))
             :value (:text @state)
             :on-change #(swap! state assoc :text (-> % .-target .-value))}]))

(defcard simple-input-example2
  (let [input-state (r/atom nil)]
    (r/as-element [simple-input2 input-state "fooo" {}])))

(defcard login-example2
  (let [input1 (r/atom nil)
        input2 (r/atom nil)]
    (r/as-element
      [:div
       [simple-input2 input1 "" {}]
       [simple-input2 input2 "" {:type "password"}]
       [:button {:on-click #(do
                             (println "submitting")
                             (println (:text @input1))
                             (println (:text @input2)))} "Login"]])))
