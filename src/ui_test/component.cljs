(ns ui-test.component)

(defrecord Component [state render-fn])

(defn render
  [component & args]
  (apply vector (:render-fn component) args))
