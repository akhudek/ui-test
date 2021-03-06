(defproject ui-test "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"

  :dependencies [[cljsjs/react "15.0.2-0"]
                 [cljsjs/react-dom "15.0.2-0"]
                 [cljsjs/react-dom-server "15.0.2-0"]
                 [devcards "0.2.1-7"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [prismatic/dommy "1.1.0"]
                 [reagent "0.6.0-rc"]
                 [sablono "0.7.1"]]

  :plugins [[lein-figwheel "0.5.3-2"]
            [lein-cljsbuild "1.1.3" :exclusions [org.clojure/clojure]]
            [lein-auto "0.1.2"]
            [lein-sassc "0.10.4"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "resources/public/css/ui_test_style.css"
                                    "target"]

  :source-paths ["src"]

  :sassc [{:src         "src/scss/ui_test_style.scss"
           :output-to   "resources/public/css/ui_test_style.css"
           :style       "compressed"
           :import-path "src/scss"}]

  :auto ["sassc" {:file-pattern #"\.(scss)$"}]
  
  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true } ;; <- note this
                        :compiler { :main       "ui-test.core"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/ui_test_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "ui-test.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/ui_test.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "ui-test.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/ui_test.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] })
