(ns ui-test.dropdown
  (:require
    [dommy.core :as dom]
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true]
    [ui-test.component :as c])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))



(defn dropdown-field
  [selected is-open]
  [:div.dropdown-field-wrapper {:on-click #(swap! is-open not)}
   [:span.dropdown-field selected]
   [:span.icon]])

(defn dropdown-list
  [selected items is-open]
  [:ul {:class (if @is-open "is-open")}
   (for [item items]
     [:li {:on-click #(reset! selected item)} item])])

(defn dropdown
  [items]
  (let [selected (r/atom (first items))
        is-open (r/atom false)]
    (fn []
      [:div
       [dropdown-field @selected is-open]
       [dropdown-list selected items is-open]])))

(defcard dropdown-example
  (r/as-element
    [:div
     [dropdown ["a" "b" "c" "d" "e" "foo"]]]))
