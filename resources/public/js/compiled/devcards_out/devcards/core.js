// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__18445__auto__ = (function (){var and__18433__auto__ = typeof Symbol !== 'undefined';
if(and__18433__auto__){
var and__18433__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18433__auto____$1){
var and__18433__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18433__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18433__auto____$2;
}
} else {
return and__18433__auto____$1;
}
} else {
return and__18433__auto__;
}
})();
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__26501_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__26501_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args26502 = [];
var len__19515__auto___26505 = arguments.length;
var i__19516__auto___26506 = (0);
while(true){
if((i__19516__auto___26506 < len__19515__auto___26505)){
args26502.push((arguments[i__19516__auto___26506]));

var G__26507 = (i__19516__auto___26506 + (1));
i__19516__auto___26506 = G__26507;
continue;
} else {
}
break;
}

var G__26504 = args26502.length;
switch (G__26504) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26502.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__18433__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18433__auto__){
var map__26515 = c;
var map__26515__$1 = ((((!((map__26515 == null)))?((((map__26515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26515):map__26515);
var path = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18433__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__25747__auto___26521 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__18445__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__25747__auto___26521);
}

var seq__26517_26522 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26518_26523 = null;
var count__26519_26524 = (0);
var i__26520_26525 = (0);
while(true){
if((i__26520_26525 < count__26519_26524)){
var property__25748__auto___26526 = cljs.core._nth.call(null,chunk__26518_26523,i__26520_26525);
if(cljs.core.truth_((base__25747__auto___26521[property__25748__auto___26526]))){
(devcards.core.CodeHighlight.prototype[property__25748__auto___26526] = (base__25747__auto___26521[property__25748__auto___26526]));
} else {
}

var G__26527 = seq__26517_26522;
var G__26528 = chunk__26518_26523;
var G__26529 = count__26519_26524;
var G__26530 = (i__26520_26525 + (1));
seq__26517_26522 = G__26527;
chunk__26518_26523 = G__26528;
count__26519_26524 = G__26529;
i__26520_26525 = G__26530;
continue;
} else {
var temp__4657__auto___26531 = cljs.core.seq.call(null,seq__26517_26522);
if(temp__4657__auto___26531){
var seq__26517_26532__$1 = temp__4657__auto___26531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26517_26532__$1)){
var c__19256__auto___26533 = cljs.core.chunk_first.call(null,seq__26517_26532__$1);
var G__26534 = cljs.core.chunk_rest.call(null,seq__26517_26532__$1);
var G__26535 = c__19256__auto___26533;
var G__26536 = cljs.core.count.call(null,c__19256__auto___26533);
var G__26537 = (0);
seq__26517_26522 = G__26534;
chunk__26518_26523 = G__26535;
count__26519_26524 = G__26536;
i__26520_26525 = G__26537;
continue;
} else {
var property__25748__auto___26538 = cljs.core.first.call(null,seq__26517_26532__$1);
if(cljs.core.truth_((base__25747__auto___26521[property__25748__auto___26538]))){
(devcards.core.CodeHighlight.prototype[property__25748__auto___26538] = (base__25747__auto___26521[property__25748__auto___26538]));
} else {
}

var G__26539 = cljs.core.next.call(null,seq__26517_26532__$1);
var G__26540 = null;
var G__26541 = (0);
var G__26542 = (0);
seq__26517_26522 = G__26539;
chunk__26518_26523 = G__26540;
count__26519_26524 = G__26541;
i__26520_26525 = G__26542;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__19370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19372__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19373__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19374__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19374__auto__,method_table__19370__auto__,prefer_table__19371__auto__,method_cache__19372__auto__,cached_hierarchy__19373__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26543){
var map__26544 = p__26543;
var map__26544__$1 = ((((!((map__26544 == null)))?((((map__26544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26544):map__26544);
var content = cljs.core.get.call(null,map__26544__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__26546){
var map__26547 = p__26546;
var map__26547__$1 = ((((!((map__26547 == null)))?((((map__26547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26547):map__26547);
var block = map__26547__$1;
var content = cljs.core.get.call(null,map__26547__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19522__auto__ = [];
var len__19515__auto___26550 = arguments.length;
var i__19516__auto___26551 = (0);
while(true){
if((i__19516__auto___26551 < len__19515__auto___26550)){
args__19522__auto__.push((arguments[i__19516__auto___26551]));

var G__26552 = (i__19516__auto___26551 + (1));
i__19516__auto___26551 = G__26552;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((0) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19523__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",{"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}, "key": "devcards-markdown-error"},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq26549){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26549));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__26554 = devcards.system.devcards_rendered_card_class;
var G__26554__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__26554),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__26554);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__26554__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__26554__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args26555 = [];
var len__19515__auto___26563 = arguments.length;
var i__19516__auto___26564 = (0);
while(true){
if((i__19516__auto___26564 < len__19515__auto___26563)){
args26555.push((arguments[i__19516__auto___26564]));

var G__26565 = (i__19516__auto___26564 + (1));
i__19516__auto___26564 = G__26565;
continue;
} else {
}
break;
}

var G__26557 = args26555.length;
switch (G__26557) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26555.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__26558 = card;
var map__26558__$1 = ((((!((map__26558 == null)))?((((map__26558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26558):map__26558);
var path = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__26558,map__26558__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__26558,map__26558__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs26560 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26560))?sablono.interpreter.attributes.call(null,attrs26560):null),((cljs.core.map_QMARK_.call(null,attrs26560))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26560)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__19108__auto__ = (((this$ == null))?null:this$);
var m__19109__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,this$,devcard_opts);
} else {
var m__19109__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__19108__auto__ = (((this$ == null))?null:this$);
var m__19109__auto__ = (devcards.core._devcard[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,this$,devcard_opts);
} else {
var m__19109__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__25747__auto___26572 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs26567 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26567))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs26567)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs26567))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26567)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__25747__auto___26572);
}

var seq__26568_26573 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26569_26574 = null;
var count__26570_26575 = (0);
var i__26571_26576 = (0);
while(true){
if((i__26571_26576 < count__26570_26575)){
var property__25748__auto___26577 = cljs.core._nth.call(null,chunk__26569_26574,i__26571_26576);
if(cljs.core.truth_((base__25747__auto___26572[property__25748__auto___26577]))){
(devcards.core.DontUpdate.prototype[property__25748__auto___26577] = (base__25747__auto___26572[property__25748__auto___26577]));
} else {
}

var G__26578 = seq__26568_26573;
var G__26579 = chunk__26569_26574;
var G__26580 = count__26570_26575;
var G__26581 = (i__26571_26576 + (1));
seq__26568_26573 = G__26578;
chunk__26569_26574 = G__26579;
count__26570_26575 = G__26580;
i__26571_26576 = G__26581;
continue;
} else {
var temp__4657__auto___26582 = cljs.core.seq.call(null,seq__26568_26573);
if(temp__4657__auto___26582){
var seq__26568_26583__$1 = temp__4657__auto___26582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26568_26583__$1)){
var c__19256__auto___26584 = cljs.core.chunk_first.call(null,seq__26568_26583__$1);
var G__26585 = cljs.core.chunk_rest.call(null,seq__26568_26583__$1);
var G__26586 = c__19256__auto___26584;
var G__26587 = cljs.core.count.call(null,c__19256__auto___26584);
var G__26588 = (0);
seq__26568_26573 = G__26585;
chunk__26569_26574 = G__26586;
count__26570_26575 = G__26587;
i__26571_26576 = G__26588;
continue;
} else {
var property__25748__auto___26589 = cljs.core.first.call(null,seq__26568_26583__$1);
if(cljs.core.truth_((base__25747__auto___26572[property__25748__auto___26589]))){
(devcards.core.DontUpdate.prototype[property__25748__auto___26589] = (base__25747__auto___26572[property__25748__auto___26589]));
} else {
}

var G__26590 = cljs.core.next.call(null,seq__26568_26583__$1);
var G__26591 = null;
var G__26592 = (0);
var G__26593 = (0);
seq__26568_26573 = G__26590;
chunk__26569_26574 = G__26591;
count__26570_26575 = G__26592;
i__26571_26576 = G__26593;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__18445__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",{"key": "devcards-main-section"},sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__19279__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__19279__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__19279__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__19279__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19279__auto____$3);
})(),x__19279__auto____$2);
})(),x__19279__auto____$1);
})(),x__19279__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__25747__auto___26600 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__18445__auto__ = (function (){var and__18433__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18433__auto__)){
return this$.state;
} else {
return and__18433__auto__;
}
})();
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__18433__auto__ = data_atom;
if(cljs.core.truth_(and__18433__auto__)){
return id;
} else {
return and__18433__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__25747__auto___26600);
}

var seq__26596_26601 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26597_26602 = null;
var count__26598_26603 = (0);
var i__26599_26604 = (0);
while(true){
if((i__26599_26604 < count__26598_26603)){
var property__25748__auto___26605 = cljs.core._nth.call(null,chunk__26597_26602,i__26599_26604);
if(cljs.core.truth_((base__25747__auto___26600[property__25748__auto___26605]))){
(devcards.core.DevcardBase.prototype[property__25748__auto___26605] = (base__25747__auto___26600[property__25748__auto___26605]));
} else {
}

var G__26606 = seq__26596_26601;
var G__26607 = chunk__26597_26602;
var G__26608 = count__26598_26603;
var G__26609 = (i__26599_26604 + (1));
seq__26596_26601 = G__26606;
chunk__26597_26602 = G__26607;
count__26598_26603 = G__26608;
i__26599_26604 = G__26609;
continue;
} else {
var temp__4657__auto___26610 = cljs.core.seq.call(null,seq__26596_26601);
if(temp__4657__auto___26610){
var seq__26596_26611__$1 = temp__4657__auto___26610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26596_26611__$1)){
var c__19256__auto___26612 = cljs.core.chunk_first.call(null,seq__26596_26611__$1);
var G__26613 = cljs.core.chunk_rest.call(null,seq__26596_26611__$1);
var G__26614 = c__19256__auto___26612;
var G__26615 = cljs.core.count.call(null,c__19256__auto___26612);
var G__26616 = (0);
seq__26596_26601 = G__26613;
chunk__26597_26602 = G__26614;
count__26598_26603 = G__26615;
i__26599_26604 = G__26616;
continue;
} else {
var property__25748__auto___26617 = cljs.core.first.call(null,seq__26596_26611__$1);
if(cljs.core.truth_((base__25747__auto___26600[property__25748__auto___26617]))){
(devcards.core.DevcardBase.prototype[property__25748__auto___26617] = (base__25747__auto___26600[property__25748__auto___26617]));
} else {
}

var G__26618 = cljs.core.next.call(null,seq__26596_26611__$1);
var G__26619 = null;
var G__26620 = (0);
var G__26621 = (0);
seq__26596_26601 = G__26618;
chunk__26597_26602 = G__26619;
count__26598_26603 = G__26620;
i__26599_26604 = G__26621;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__25747__auto___26626 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18433__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18433__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18433__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__25747__auto___26626);
}

var seq__26622_26627 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26623_26628 = null;
var count__26624_26629 = (0);
var i__26625_26630 = (0);
while(true){
if((i__26625_26630 < count__26624_26629)){
var property__25748__auto___26631 = cljs.core._nth.call(null,chunk__26623_26628,i__26625_26630);
if(cljs.core.truth_((base__25747__auto___26626[property__25748__auto___26631]))){
(devcards.core.DomComponent.prototype[property__25748__auto___26631] = (base__25747__auto___26626[property__25748__auto___26631]));
} else {
}

var G__26632 = seq__26622_26627;
var G__26633 = chunk__26623_26628;
var G__26634 = count__26624_26629;
var G__26635 = (i__26625_26630 + (1));
seq__26622_26627 = G__26632;
chunk__26623_26628 = G__26633;
count__26624_26629 = G__26634;
i__26625_26630 = G__26635;
continue;
} else {
var temp__4657__auto___26636 = cljs.core.seq.call(null,seq__26622_26627);
if(temp__4657__auto___26636){
var seq__26622_26637__$1 = temp__4657__auto___26636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26622_26637__$1)){
var c__19256__auto___26638 = cljs.core.chunk_first.call(null,seq__26622_26637__$1);
var G__26639 = cljs.core.chunk_rest.call(null,seq__26622_26637__$1);
var G__26640 = c__19256__auto___26638;
var G__26641 = cljs.core.count.call(null,c__19256__auto___26638);
var G__26642 = (0);
seq__26622_26627 = G__26639;
chunk__26623_26628 = G__26640;
count__26624_26629 = G__26641;
i__26625_26630 = G__26642;
continue;
} else {
var property__25748__auto___26643 = cljs.core.first.call(null,seq__26622_26637__$1);
if(cljs.core.truth_((base__25747__auto___26626[property__25748__auto___26643]))){
(devcards.core.DomComponent.prototype[property__25748__auto___26643] = (base__25747__auto___26626[property__25748__auto___26643]));
} else {
}

var G__26644 = cljs.core.next.call(null,seq__26622_26637__$1);
var G__26645 = null;
var G__26646 = (0);
var G__26647 = (0);
seq__26622_26627 = G__26644;
chunk__26623_26628 = G__26645;
count__26624_26629 = G__26646;
i__26625_26630 = G__26647;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18445__auto__ = x === true;
if(or__18445__auto__){
return or__18445__auto__;
} else {
var or__18445__auto____$1 = x === false;
if(or__18445__auto____$1){
return or__18445__auto____$1;
} else {
var or__18445__auto____$2 = (x == null);
if(or__18445__auto____$2){
return or__18445__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18445__auto__ = typeof x === 'string';
if(or__18445__auto__){
return or__18445__auto__;
} else {
var or__18445__auto____$1 = (x == null);
if(or__18445__auto____$1){
return or__18445__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18445__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__26648_SHARP_){
return !(p1__26648_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__26657 = opts;
var map__26657__$1 = ((((!((map__26657 == null)))?((((map__26657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26657):map__26657);
var name = cljs.core.get.call(null,map__26657__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__26657__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__26657__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__26657__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18445__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18445__auto__){
return or__18445__auto__;
} else {
var or__18445__auto____$1 = (options == null);
if(or__18445__auto____$1){
return or__18445__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18445__auto__ = (initial_data == null);
if(or__18445__auto__){
return or__18445__auto__;
} else {
var or__18445__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18445__auto____$1){
return or__18445__auto____$1;
} else {
var or__18445__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18445__auto____$2){
return or__18445__auto____$2;
} else {
var or__18445__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18445__auto____$3){
return or__18445__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__26657,map__26657__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__26649_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__26649_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__26657,map__26657__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs26665 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs26665))?sablono.interpreter.attributes.call(null,attrs26665):null),((cljs.core.map_QMARK_.call(null,attrs26665))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26665)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs26669 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26669))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs26669)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs26669))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26669)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs26670 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26670))?sablono.interpreter.attributes.call(null,attrs26670):null),((cljs.core.map_QMARK_.call(null,attrs26670))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26670)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs26671 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26671))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs26671)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs26671))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26671)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__26672_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__26672_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19067__auto__,k__19068__auto__){
var self__ = this;
var this__19067__auto____$1 = this;
return cljs.core._lookup.call(null,this__19067__auto____$1,k__19068__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19069__auto__,k26674,else__19070__auto__){
var self__ = this;
var this__19069__auto____$1 = this;
var G__26676 = (((k26674 instanceof cljs.core.Keyword))?k26674.fqn:null);
switch (G__26676) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26674,else__19070__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19081__auto__,writer__19082__auto__,opts__19083__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
var pr_pair__19084__auto__ = ((function (this__19081__auto____$1){
return (function (keyval__19085__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19082__auto__,cljs.core.pr_writer,""," ","",opts__19083__auto__,keyval__19085__auto__);
});})(this__19081__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19082__auto__,pr_pair__19084__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26673){
var self__ = this;
var G__26673__$1 = this;
return (new cljs.core.RecordIter((0),G__26673__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19065__auto__){
var self__ = this;
var this__19065__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19061__auto__){
var self__ = this;
var this__19061__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19071__auto__){
var self__ = this;
var this__19071__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19062__auto__){
var self__ = this;
var this__19062__auto____$1 = this;
var h__18880__auto__ = self__.__hash;
if(!((h__18880__auto__ == null))){
return h__18880__auto__;
} else {
var h__18880__auto____$1 = cljs.core.hash_imap.call(null,this__19062__auto____$1);
self__.__hash = h__18880__auto____$1;

return h__18880__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19063__auto__,other__19064__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18433__auto__ = other__19064__auto__;
if(cljs.core.truth_(and__18433__auto__)){
var and__18433__auto____$1 = (this__19063__auto____$1.constructor === other__19064__auto__.constructor);
if(and__18433__auto____$1){
return cljs.core.equiv_map.call(null,this__19063__auto____$1,other__19064__auto__);
} else {
return and__18433__auto____$1;
}
} else {
return and__18433__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19076__auto__,k__19077__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19077__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19076__auto____$1),self__.__meta),k__19077__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19077__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19074__auto__,k__19075__auto__,G__26673){
var self__ = this;
var this__19074__auto____$1 = this;
var pred__26677 = cljs.core.keyword_identical_QMARK_;
var expr__26678 = k__19075__auto__;
if(cljs.core.truth_(pred__26677.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26678))){
return (new devcards.core.IdentiyOptions(G__26673,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19075__auto__,G__26673),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19066__auto__,G__26673){
var self__ = this;
var this__19066__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__26673,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19072__auto__,entry__19073__auto__){
var self__ = this;
var this__19072__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19073__auto__)){
return cljs.core._assoc.call(null,this__19072__auto____$1,cljs.core._nth.call(null,entry__19073__auto__,(0)),cljs.core._nth.call(null,entry__19073__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19072__auto____$1,entry__19073__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19101__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19101__auto__,writer__19102__auto__){
return cljs.core._write.call(null,writer__19102__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__26675){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26675),null,cljs.core.dissoc.call(null,G__26675,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__26681){
var map__26684 = p__26681;
var map__26684__$1 = ((((!((map__26684 == null)))?((((map__26684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26684):map__26684);
var devcard_opts = map__26684__$1;
var options = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__26684,map__26684__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__26684,map__26684__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19067__auto__,k__19068__auto__){
var self__ = this;
var this__19067__auto____$1 = this;
return cljs.core._lookup.call(null,this__19067__auto____$1,k__19068__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19069__auto__,k26687,else__19070__auto__){
var self__ = this;
var this__19069__auto____$1 = this;
var G__26689 = (((k26687 instanceof cljs.core.Keyword))?k26687.fqn:null);
switch (G__26689) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26687,else__19070__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19081__auto__,writer__19082__auto__,opts__19083__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
var pr_pair__19084__auto__ = ((function (this__19081__auto____$1){
return (function (keyval__19085__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19082__auto__,cljs.core.pr_writer,""," ","",opts__19083__auto__,keyval__19085__auto__);
});})(this__19081__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19082__auto__,pr_pair__19084__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26686){
var self__ = this;
var G__26686__$1 = this;
return (new cljs.core.RecordIter((0),G__26686__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19065__auto__){
var self__ = this;
var this__19065__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19061__auto__){
var self__ = this;
var this__19061__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19071__auto__){
var self__ = this;
var this__19071__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19062__auto__){
var self__ = this;
var this__19062__auto____$1 = this;
var h__18880__auto__ = self__.__hash;
if(!((h__18880__auto__ == null))){
return h__18880__auto__;
} else {
var h__18880__auto____$1 = cljs.core.hash_imap.call(null,this__19062__auto____$1);
self__.__hash = h__18880__auto____$1;

return h__18880__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19063__auto__,other__19064__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18433__auto__ = other__19064__auto__;
if(cljs.core.truth_(and__18433__auto__)){
var and__18433__auto____$1 = (this__19063__auto____$1.constructor === other__19064__auto__.constructor);
if(and__18433__auto____$1){
return cljs.core.equiv_map.call(null,this__19063__auto____$1,other__19064__auto__);
} else {
return and__18433__auto____$1;
}
} else {
return and__18433__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19076__auto__,k__19077__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19077__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19076__auto____$1),self__.__meta),k__19077__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19077__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19074__auto__,k__19075__auto__,G__26686){
var self__ = this;
var this__19074__auto____$1 = this;
var pred__26690 = cljs.core.keyword_identical_QMARK_;
var expr__26691 = k__19075__auto__;
if(cljs.core.truth_(pred__26690.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26691))){
return (new devcards.core.AtomLikeOptions(G__26686,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19075__auto__,G__26686),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19066__auto__,G__26686){
var self__ = this;
var this__19066__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__26686,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19072__auto__,entry__19073__auto__){
var self__ = this;
var this__19072__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19073__auto__)){
return cljs.core._assoc.call(null,this__19072__auto____$1,cljs.core._nth.call(null,entry__19073__auto__,(0)),cljs.core._nth.call(null,entry__19073__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19072__auto____$1,entry__19073__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19101__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19101__auto__,writer__19102__auto__){
return cljs.core._write.call(null,writer__19102__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__26688){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26688),null,cljs.core.dissoc.call(null,G__26688,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19067__auto__,k__19068__auto__){
var self__ = this;
var this__19067__auto____$1 = this;
return cljs.core._lookup.call(null,this__19067__auto____$1,k__19068__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19069__auto__,k26697,else__19070__auto__){
var self__ = this;
var this__19069__auto____$1 = this;
var G__26699 = (((k26697 instanceof cljs.core.Keyword))?k26697.fqn:null);
switch (G__26699) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26697,else__19070__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19081__auto__,writer__19082__auto__,opts__19083__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
var pr_pair__19084__auto__ = ((function (this__19081__auto____$1){
return (function (keyval__19085__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19082__auto__,cljs.core.pr_writer,""," ","",opts__19083__auto__,keyval__19085__auto__);
});})(this__19081__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19082__auto__,pr_pair__19084__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26696){
var self__ = this;
var G__26696__$1 = this;
return (new cljs.core.RecordIter((0),G__26696__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19065__auto__){
var self__ = this;
var this__19065__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19061__auto__){
var self__ = this;
var this__19061__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19071__auto__){
var self__ = this;
var this__19071__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19062__auto__){
var self__ = this;
var this__19062__auto____$1 = this;
var h__18880__auto__ = self__.__hash;
if(!((h__18880__auto__ == null))){
return h__18880__auto__;
} else {
var h__18880__auto____$1 = cljs.core.hash_imap.call(null,this__19062__auto____$1);
self__.__hash = h__18880__auto____$1;

return h__18880__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19063__auto__,other__19064__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18433__auto__ = other__19064__auto__;
if(cljs.core.truth_(and__18433__auto__)){
var and__18433__auto____$1 = (this__19063__auto____$1.constructor === other__19064__auto__.constructor);
if(and__18433__auto____$1){
return cljs.core.equiv_map.call(null,this__19063__auto____$1,other__19064__auto__);
} else {
return and__18433__auto____$1;
}
} else {
return and__18433__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19076__auto__,k__19077__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19077__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19076__auto____$1),self__.__meta),k__19077__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19077__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19074__auto__,k__19075__auto__,G__26696){
var self__ = this;
var this__19074__auto____$1 = this;
var pred__26700 = cljs.core.keyword_identical_QMARK_;
var expr__26701 = k__19075__auto__;
if(cljs.core.truth_(pred__26700.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26701))){
return (new devcards.core.EdnLikeOptions(G__26696,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19075__auto__,G__26696),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19066__auto__,G__26696){
var self__ = this;
var this__19066__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__26696,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19072__auto__,entry__19073__auto__){
var self__ = this;
var this__19072__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19073__auto__)){
return cljs.core._assoc.call(null,this__19072__auto____$1,cljs.core._nth.call(null,entry__19073__auto__,(0)),cljs.core._nth.call(null,entry__19073__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19072__auto____$1,entry__19073__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19101__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19101__auto__,writer__19102__auto__){
return cljs.core._write.call(null,writer__19102__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__26698){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26698),null,cljs.core.dissoc.call(null,G__26698,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18433__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18433__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__18433__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__26715 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__26715 == null))){
if((false) || (G__26715.devcards$core$IDevcard$)){
return true;
} else {
if((!G__26715.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__26715);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__26715);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__26718 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__26718__$1 = ((((!((map__26718 == null)))?((((map__26718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26718):map__26718);
var history = cljs.core.get.call(null,map__26718__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26718__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26722 = cljs.core.deref.call(null,history_atom);
var map__26722__$1 = ((((!((map__26722 == null)))?((((map__26722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26722):map__26722);
var history = cljs.core.get.call(null,map__26722__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26722__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26726 = cljs.core.deref.call(null,history_atom);
var map__26726__$1 = ((((!((map__26726 == null)))?((((map__26726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26726):map__26726);
var history = cljs.core.get.call(null,map__26726__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26726__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26730 = cljs.core.deref.call(null,history_atom);
var map__26730__$1 = ((((!((map__26730 == null)))?((((map__26730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26730):map__26730);
var history = cljs.core.get.call(null,map__26730__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__19279__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19279__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__18433__auto__ = data_atom;
if(cljs.core.truth_(and__18433__auto__)){
return id;
} else {
return and__18433__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__26732){
var map__26733 = p__26732;
var map__26733__$1 = ((((!((map__26733 == null)))?((((map__26733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26733):map__26733);
var ha = map__26733__$1;
var pointer = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__18445__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__18445__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom, "key": "devcards-history-control-bar"});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_26748 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_26748;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19372__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19373__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19374__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19374__auto__,method_table__19370__auto__,prefer_table__19371__auto__,method_cache__19372__auto__,cached_hierarchy__19373__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs26749 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26749))?sablono.interpreter.attributes.call(null,attrs26749):null),((cljs.core.map_QMARK_.call(null,attrs26749))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26749)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__26750,body){
var map__26754 = p__26750;
var map__26754__$1 = ((((!((map__26754 == null)))?((((map__26754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26754):map__26754);
var message = cljs.core.get.call(null,map__26754__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs26756 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26756))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs26756)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs26756))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26756)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__26757){
var map__26765 = p__26757;
var map__26765__$1 = ((((!((map__26765 == null)))?((((map__26765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26765):map__26765);
var m = map__26765__$1;
var expected = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs26767 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26767))?sablono.interpreter.attributes.call(null,attrs26767):null),((cljs.core.map_QMARK_.call(null,attrs26767))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26767),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs26774 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs26774))?sablono.interpreter.attributes.call(null,attrs26774):null),((cljs.core.map_QMARK_.call(null,attrs26774))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26774)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs26775 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26775))?sablono.interpreter.attributes.call(null,attrs26775):null),((cljs.core.map_QMARK_.call(null,attrs26775))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26775)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__26776){
var map__26777 = p__26776;
var map__26777__$1 = ((((!((map__26777 == null)))?((((map__26777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26777):map__26777);
var testing_contexts = cljs.core.get.call(null,map__26777__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs26779 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__26777,map__26777__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__26777,map__26777__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__19279__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19279__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26779))?sablono.interpreter.attributes.call(null,attrs26779):null),((cljs.core.map_QMARK_.call(null,attrs26779))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26779)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs26786 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__26787,p__26788){
var map__26789 = p__26787;
var map__26789__$1 = ((((!((map__26789 == null)))?((((map__26789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26789):map__26789);
var last_context = cljs.core.get.call(null,map__26789__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__26789__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__26790 = p__26788;
var i = cljs.core.nth.call(null,vec__26790,(0),null);
var t = cljs.core.nth.call(null,vec__26790,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__19279__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19279__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26786))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs26786)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs26786))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26786)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__26804){
var map__26805 = p__26804;
var map__26805__$1 = ((((!((map__26805 == null)))?((((map__26805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26805):map__26805);
var type = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__26803 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__26803__$1 = ((((!((map__26803 == null)))?((((map__26803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26803):map__26803);
var fail = cljs.core.get.call(null,map__26803__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__26803__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__26803__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1){
return (function (p__26808){
var map__26809 = p__26808;
var map__26809__$1 = ((((!((map__26809 == null)))?((((map__26809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26809):map__26809);
var type = cljs.core.get.call(null,map__26809__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1){
return (function (p__26811){
var map__26812 = p__26811;
var map__26812__$1 = ((((!((map__26812 == null)))?((((map__26812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26812):map__26812);
var type = cljs.core.get.call(null,map__26812__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__26803,map__26803__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18445__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__){
return (function (state_26900){
var state_val_26901 = (state_26900[(1)]);
if((state_val_26901 === (7))){
var state_26900__$1 = state_26900;
var statearr_26902_26951 = state_26900__$1;
(statearr_26902_26951[(2)] = false);

(statearr_26902_26951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (20))){
var inst_26841 = (state_26900[(7)]);
var inst_26860 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26841);
var state_26900__$1 = state_26900;
var statearr_26903_26952 = state_26900__$1;
(statearr_26903_26952[(2)] = inst_26860);

(statearr_26903_26952[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (27))){
var inst_26875 = (state_26900[(8)]);
var inst_26865 = (state_26900[(9)]);
var inst_26879 = inst_26865.call(null,inst_26875);
var state_26900__$1 = state_26900;
var statearr_26904_26953 = state_26900__$1;
(statearr_26904_26953[(2)] = inst_26879);

(statearr_26904_26953[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (1))){
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26900__$1,(2),devcards.core.test_channel);
} else {
if((state_val_26901 === (24))){
var state_26900__$1 = state_26900;
var statearr_26905_26954 = state_26900__$1;
(statearr_26905_26954[(2)] = null);

(statearr_26905_26954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (4))){
var state_26900__$1 = state_26900;
var statearr_26906_26955 = state_26900__$1;
(statearr_26906_26955[(2)] = false);

(statearr_26906_26955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (15))){
var state_26900__$1 = state_26900;
var statearr_26907_26956 = state_26900__$1;
(statearr_26907_26956[(2)] = false);

(statearr_26907_26956[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (21))){
var inst_26841 = (state_26900[(7)]);
var state_26900__$1 = state_26900;
var statearr_26908_26957 = state_26900__$1;
(statearr_26908_26957[(2)] = inst_26841);

(statearr_26908_26957[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (13))){
var inst_26898 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26900__$1,inst_26898);
} else {
if((state_val_26901 === (22))){
var inst_26864 = (state_26900[(10)]);
var inst_26863 = (state_26900[(2)]);
var inst_26864__$1 = cljs.core.get.call(null,inst_26863,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26865 = cljs.core.get.call(null,inst_26863,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_26900__$1 = (function (){var statearr_26909 = state_26900;
(statearr_26909[(9)] = inst_26865);

(statearr_26909[(10)] = inst_26864__$1);

return statearr_26909;
})();
if(cljs.core.truth_(inst_26864__$1)){
var statearr_26910_26958 = state_26900__$1;
(statearr_26910_26958[(1)] = (23));

} else {
var statearr_26911_26959 = state_26900__$1;
(statearr_26911_26959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (29))){
var inst_26889 = (state_26900[(2)]);
var inst_26890 = cljs.test.clear_env_BANG_.call(null);
var state_26900__$1 = (function (){var statearr_26912 = state_26900;
(statearr_26912[(11)] = inst_26890);

(statearr_26912[(12)] = inst_26889);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26900__$1,(30),devcards.core.test_channel);
} else {
if((state_val_26901 === (6))){
var state_26900__$1 = state_26900;
var statearr_26913_26960 = state_26900__$1;
(statearr_26913_26960[(2)] = true);

(statearr_26913_26960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (28))){
var inst_26865 = (state_26900[(9)]);
var inst_26881 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_26882 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_26883 = cljs.core.PersistentHashMap.fromArrays(inst_26881,inst_26882);
var inst_26884 = devcards.core.collect_test.call(null,inst_26883);
var inst_26885 = cljs.test.get_current_env.call(null);
var inst_26886 = cljs.core.assoc.call(null,inst_26885,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_26887 = inst_26865.call(null,inst_26886);
var state_26900__$1 = (function (){var statearr_26914 = state_26900;
(statearr_26914[(13)] = inst_26884);

return statearr_26914;
})();
var statearr_26915_26961 = state_26900__$1;
(statearr_26915_26961[(2)] = inst_26887);

(statearr_26915_26961[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (25))){
var inst_26896 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26916_26962 = state_26900__$1;
(statearr_26916_26962[(2)] = inst_26896);

(statearr_26916_26962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (17))){
var state_26900__$1 = state_26900;
var statearr_26917_26963 = state_26900__$1;
(statearr_26917_26963[(2)] = true);

(statearr_26917_26963[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (3))){
var inst_26818 = (state_26900[(14)]);
var inst_26823 = inst_26818.cljs$lang$protocol_mask$partition0$;
var inst_26824 = (inst_26823 & (64));
var inst_26825 = inst_26818.cljs$core$ISeq$;
var inst_26826 = (inst_26824) || (inst_26825);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26826)){
var statearr_26918_26964 = state_26900__$1;
(statearr_26918_26964[(1)] = (6));

} else {
var statearr_26919_26965 = state_26900__$1;
(statearr_26919_26965[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (12))){
var inst_26841 = (state_26900[(7)]);
var inst_26845 = (inst_26841 == null);
var inst_26846 = cljs.core.not.call(null,inst_26845);
var state_26900__$1 = state_26900;
if(inst_26846){
var statearr_26920_26966 = state_26900__$1;
(statearr_26920_26966[(1)] = (14));

} else {
var statearr_26921_26967 = state_26900__$1;
(statearr_26921_26967[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (2))){
var inst_26818 = (state_26900[(14)]);
var inst_26818__$1 = (state_26900[(2)]);
var inst_26820 = (inst_26818__$1 == null);
var inst_26821 = cljs.core.not.call(null,inst_26820);
var state_26900__$1 = (function (){var statearr_26922 = state_26900;
(statearr_26922[(14)] = inst_26818__$1);

return statearr_26922;
})();
if(inst_26821){
var statearr_26923_26968 = state_26900__$1;
(statearr_26923_26968[(1)] = (3));

} else {
var statearr_26924_26969 = state_26900__$1;
(statearr_26924_26969[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (23))){
var inst_26868 = (state_26900[(15)]);
var inst_26864 = (state_26900[(10)]);
var inst_26868__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_26869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26870 = devcards.core.run_card_tests.call(null,inst_26864);
var inst_26871 = [inst_26870,inst_26868__$1];
var inst_26872 = (new cljs.core.PersistentVector(null,2,(5),inst_26869,inst_26871,null));
var state_26900__$1 = (function (){var statearr_26925 = state_26900;
(statearr_26925[(15)] = inst_26868__$1);

return statearr_26925;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26900__$1,(26),inst_26872);
} else {
if((state_val_26901 === (19))){
var inst_26855 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26926_26970 = state_26900__$1;
(statearr_26926_26970[(2)] = inst_26855);

(statearr_26926_26970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (11))){
var inst_26818 = (state_26900[(14)]);
var inst_26838 = (state_26900[(2)]);
var inst_26839 = cljs.core.get.call(null,inst_26838,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26840 = cljs.core.get.call(null,inst_26838,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_26841 = inst_26818;
var state_26900__$1 = (function (){var statearr_26927 = state_26900;
(statearr_26927[(7)] = inst_26841);

(statearr_26927[(16)] = inst_26839);

(statearr_26927[(17)] = inst_26840);

return statearr_26927;
})();
var statearr_26928_26971 = state_26900__$1;
(statearr_26928_26971[(2)] = null);

(statearr_26928_26971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (9))){
var inst_26818 = (state_26900[(14)]);
var inst_26835 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26818);
var state_26900__$1 = state_26900;
var statearr_26929_26972 = state_26900__$1;
(statearr_26929_26972[(2)] = inst_26835);

(statearr_26929_26972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (5))){
var inst_26833 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26833)){
var statearr_26930_26973 = state_26900__$1;
(statearr_26930_26973[(1)] = (9));

} else {
var statearr_26931_26974 = state_26900__$1;
(statearr_26931_26974[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (14))){
var inst_26841 = (state_26900[(7)]);
var inst_26848 = inst_26841.cljs$lang$protocol_mask$partition0$;
var inst_26849 = (inst_26848 & (64));
var inst_26850 = inst_26841.cljs$core$ISeq$;
var inst_26851 = (inst_26849) || (inst_26850);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26851)){
var statearr_26932_26975 = state_26900__$1;
(statearr_26932_26975[(1)] = (17));

} else {
var statearr_26933_26976 = state_26900__$1;
(statearr_26933_26976[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (26))){
var inst_26868 = (state_26900[(15)]);
var inst_26874 = (state_26900[(2)]);
var inst_26875 = cljs.core.nth.call(null,inst_26874,(0),null);
var inst_26876 = cljs.core.nth.call(null,inst_26874,(1),null);
var inst_26877 = cljs.core.not_EQ_.call(null,inst_26876,inst_26868);
var state_26900__$1 = (function (){var statearr_26934 = state_26900;
(statearr_26934[(8)] = inst_26875);

return statearr_26934;
})();
if(inst_26877){
var statearr_26935_26977 = state_26900__$1;
(statearr_26935_26977[(1)] = (27));

} else {
var statearr_26936_26978 = state_26900__$1;
(statearr_26936_26978[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (16))){
var inst_26858 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26858)){
var statearr_26937_26979 = state_26900__$1;
(statearr_26937_26979[(1)] = (20));

} else {
var statearr_26938_26980 = state_26900__$1;
(statearr_26938_26980[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (30))){
var inst_26892 = (state_26900[(2)]);
var inst_26841 = inst_26892;
var state_26900__$1 = (function (){var statearr_26939 = state_26900;
(statearr_26939[(7)] = inst_26841);

return statearr_26939;
})();
var statearr_26940_26981 = state_26900__$1;
(statearr_26940_26981[(2)] = null);

(statearr_26940_26981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (10))){
var inst_26818 = (state_26900[(14)]);
var state_26900__$1 = state_26900;
var statearr_26941_26982 = state_26900__$1;
(statearr_26941_26982[(2)] = inst_26818);

(statearr_26941_26982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (18))){
var state_26900__$1 = state_26900;
var statearr_26942_26983 = state_26900__$1;
(statearr_26942_26983[(2)] = false);

(statearr_26942_26983[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (8))){
var inst_26830 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26943_26984 = state_26900__$1;
(statearr_26943_26984[(2)] = inst_26830);

(statearr_26943_26984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22157__auto__))
;
return ((function (switch__22045__auto__,c__22157__auto__){
return (function() {
var devcards$core$state_machine__22046__auto__ = null;
var devcards$core$state_machine__22046__auto____0 = (function (){
var statearr_26947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26947[(0)] = devcards$core$state_machine__22046__auto__);

(statearr_26947[(1)] = (1));

return statearr_26947;
});
var devcards$core$state_machine__22046__auto____1 = (function (state_26900){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_26900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e26948){if((e26948 instanceof Object)){
var ex__22049__auto__ = e26948;
var statearr_26949_26985 = state_26900;
(statearr_26949_26985[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26986 = state_26900;
state_26900 = G__26986;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
devcards$core$state_machine__22046__auto__ = function(state_26900){
switch(arguments.length){
case 0:
return devcards$core$state_machine__22046__auto____0.call(this);
case 1:
return devcards$core$state_machine__22046__auto____1.call(this,state_26900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__22046__auto____0;
devcards$core$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__22046__auto____1;
return devcards$core$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__))
})();
var state__22159__auto__ = (function (){var statearr_26950 = f__22158__auto__.call(null);
(statearr_26950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_26950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__))
);

return c__22157__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__25747__auto___26991 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__25747__auto___26991);
}

var seq__26987_26992 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26988_26993 = null;
var count__26989_26994 = (0);
var i__26990_26995 = (0);
while(true){
if((i__26990_26995 < count__26989_26994)){
var property__25748__auto___26996 = cljs.core._nth.call(null,chunk__26988_26993,i__26990_26995);
if(cljs.core.truth_((base__25747__auto___26991[property__25748__auto___26996]))){
(devcards.core.TestDevcard.prototype[property__25748__auto___26996] = (base__25747__auto___26991[property__25748__auto___26996]));
} else {
}

var G__26997 = seq__26987_26992;
var G__26998 = chunk__26988_26993;
var G__26999 = count__26989_26994;
var G__27000 = (i__26990_26995 + (1));
seq__26987_26992 = G__26997;
chunk__26988_26993 = G__26998;
count__26989_26994 = G__26999;
i__26990_26995 = G__27000;
continue;
} else {
var temp__4657__auto___27001 = cljs.core.seq.call(null,seq__26987_26992);
if(temp__4657__auto___27001){
var seq__26987_27002__$1 = temp__4657__auto___27001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26987_27002__$1)){
var c__19256__auto___27003 = cljs.core.chunk_first.call(null,seq__26987_27002__$1);
var G__27004 = cljs.core.chunk_rest.call(null,seq__26987_27002__$1);
var G__27005 = c__19256__auto___27003;
var G__27006 = cljs.core.count.call(null,c__19256__auto___27003);
var G__27007 = (0);
seq__26987_26992 = G__27004;
chunk__26988_26993 = G__27005;
count__26989_26994 = G__27006;
i__26990_26995 = G__27007;
continue;
} else {
var property__25748__auto___27008 = cljs.core.first.call(null,seq__26987_27002__$1);
if(cljs.core.truth_((base__25747__auto___26991[property__25748__auto___27008]))){
(devcards.core.TestDevcard.prototype[property__25748__auto___27008] = (base__25747__auto___26991[property__25748__auto___27008]));
} else {
}

var G__27009 = cljs.core.next.call(null,seq__26987_27002__$1);
var G__27010 = null;
var G__27011 = (0);
var G__27012 = (0);
seq__26987_26992 = G__27009;
chunk__26988_26993 = G__27010;
count__26989_26994 = G__27011;
i__26990_26995 = G__27012;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19522__auto__ = [];
var len__19515__auto___27017 = arguments.length;
var i__19516__auto___27018 = (0);
while(true){
if((i__19516__auto___27018 < len__19515__auto___27017)){
args__19522__auto__.push((arguments[i__19516__auto___27018]));

var G__27019 = (i__19516__auto___27018 + (1));
i__19516__auto___27018 = G__27019;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((0) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19523__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core27014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core27014 = (function (test_thunks,meta27015){
this.test_thunks = test_thunks;
this.meta27015 = meta27015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core27014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27016,meta27015__$1){
var self__ = this;
var _27016__$1 = this;
return (new devcards.core.t_devcards$core27014(self__.test_thunks,meta27015__$1));
});

devcards.core.t_devcards$core27014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27016){
var self__ = this;
var _27016__$1 = this;
return self__.meta27015;
});

devcards.core.t_devcards$core27014.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core27014.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core27014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta27015","meta27015",1964774165,null)], null);
});

devcards.core.t_devcards$core27014.cljs$lang$type = true;

devcards.core.t_devcards$core27014.cljs$lang$ctorStr = "devcards.core/t_devcards$core27014";

devcards.core.t_devcards$core27014.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"devcards.core/t_devcards$core27014");
});

devcards.core.__GT_t_devcards$core27014 = (function devcards$core$__GT_t_devcards$core27014(test_thunks__$1,meta27015){
return (new devcards.core.t_devcards$core27014(test_thunks__$1,meta27015));
});

}

return (new devcards.core.t_devcards$core27014(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq27013){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27013));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs27021 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27021))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27021)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs27021))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27021)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs27023 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27023))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27023)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs27023))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27023)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__){
return (function (state_27053){
var state_val_27054 = (state_27053[(1)]);
if((state_val_27054 === (1))){
var inst_27044 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(2),inst_27044);
} else {
if((state_val_27054 === (2))){
var inst_27046 = (state_27053[(2)]);
var inst_27047 = cljs.core.async.timeout.call(null,(100));
var state_27053__$1 = (function (){var statearr_27055 = state_27053;
(statearr_27055[(7)] = inst_27046);

return statearr_27055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(3),inst_27047);
} else {
if((state_val_27054 === (3))){
var inst_27049 = (state_27053[(2)]);
var inst_27050 = (function (){return ((function (inst_27049,state_val_27054,c__22157__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_27049,state_val_27054,c__22157__auto__))
})();
var inst_27051 = setTimeout(inst_27050,(0));
var state_27053__$1 = (function (){var statearr_27056 = state_27053;
(statearr_27056[(8)] = inst_27049);

return statearr_27056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27053__$1,inst_27051);
} else {
return null;
}
}
}
});})(c__22157__auto__))
;
return ((function (switch__22045__auto__,c__22157__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__22046__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__22046__auto____0 = (function (){
var statearr_27060 = [null,null,null,null,null,null,null,null,null];
(statearr_27060[(0)] = devcards$core$mount_namespace_$_state_machine__22046__auto__);

(statearr_27060[(1)] = (1));

return statearr_27060;
});
var devcards$core$mount_namespace_$_state_machine__22046__auto____1 = (function (state_27053){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_27053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e27061){if((e27061 instanceof Object)){
var ex__22049__auto__ = e27061;
var statearr_27062_27064 = state_27053;
(statearr_27062_27064[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27065 = state_27053;
state_27053 = G__27065;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__22046__auto__ = function(state_27053){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__22046__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__22046__auto____1.call(this,state_27053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__22046__auto____0;
devcards$core$mount_namespace_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__22046__auto____1;
return devcards$core$mount_namespace_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__))
})();
var state__22159__auto__ = (function (){var statearr_27063 = f__22158__auto__.call(null);
(statearr_27063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_27063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__))
);

return c__22157__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1467412221297