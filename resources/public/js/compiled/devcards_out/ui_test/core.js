// Compiled by ClojureScript 1.8.51 {}
goog.provide('ui_test.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
ui_test.core.simple_input = (function ui_test$core$simple_input(initial_value,opts){
var s = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),reagent.core.atom.call(null,initial_value)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),s,new cljs.core.Keyword(null,"render","render",-1408033454),((function (s){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__18445__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__18445__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (s){
return (function (p1__29687_SHARP_){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-blur","on-blur",814300747).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null,p1__29687_SHARP_,s);
} else {
return null;
}
});})(s))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s){
return (function (p1__29688_SHARP_){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(s),p1__29688_SHARP_.target.value);
});})(s))
], null)], null);
});})(s))
], null);
});
ui_test.core.input_with_icon = (function ui_test$core$input_with_icon(icon,opts){
var input = ui_test.core.simple_input.call(null,"",opts);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(input),new cljs.core.Keyword(null,"render","render",-1408033454),((function (input){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),icon], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(input)], null)], null);
});})(input))
], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui_test.core","ui_test.core",-488192151),new cljs.core.Keyword(null,"simple-input-example","simple-input-example",1601196144)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simple-input-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var input = ui_test.core.simple_input.call(null,"fooo",cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(input)], null));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui_test.core","ui_test.core",-488192151),new cljs.core.Keyword(null,"login-example","login-example",-1811923508)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"login-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var input1 = ui_test.core.input_with_icon.call(null,"user",cljs.core.PersistentArrayMap.EMPTY);
var input2 = ui_test.core.input_with_icon.call(null,"pass",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"password"], null));
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(input1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(input2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input1,input2){
return (function (){
cljs.core.println.call(null,"submitting");

cljs.core.println.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(input1))));

return cljs.core.println.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(input2))));
});})(input1,input2))
], null),"Login"], null)], null));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
ui_test.core.main = (function ui_test$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
ui_test.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1467412408360