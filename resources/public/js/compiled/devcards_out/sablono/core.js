// Compiled by ClojureScript 1.8.51 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25441__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25440 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__25440,(0),null);
var body = cljs.core.nthnext.call(null,vec__25440,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25442__i = 0, G__25442__a = new Array(arguments.length -  0);
while (G__25442__i < G__25442__a.length) {G__25442__a[G__25442__i] = arguments[G__25442__i + 0]; ++G__25442__i;}
  args = new cljs.core.IndexedSeq(G__25442__a,0);
} 
return G__25441__delegate.call(this,args);};
G__25441.cljs$lang$maxFixedArity = 0;
G__25441.cljs$lang$applyTo = (function (arglist__25443){
var args = cljs.core.seq(arglist__25443);
return G__25441__delegate(args);
});
G__25441.cljs$core$IFn$_invoke$arity$variadic = G__25441__delegate;
return G__25441;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19225__auto__ = (function sablono$core$update_arglists_$_iter__25448(s__25449){
return (new cljs.core.LazySeq(null,(function (){
var s__25449__$1 = s__25449;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25449__$1);
if(temp__4657__auto__){
var s__25449__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25449__$2)){
var c__19223__auto__ = cljs.core.chunk_first.call(null,s__25449__$2);
var size__19224__auto__ = cljs.core.count.call(null,c__19223__auto__);
var b__25451 = cljs.core.chunk_buffer.call(null,size__19224__auto__);
if((function (){var i__25450 = (0);
while(true){
if((i__25450 < size__19224__auto__)){
var args = cljs.core._nth.call(null,c__19223__auto__,i__25450);
cljs.core.chunk_append.call(null,b__25451,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25452 = (i__25450 + (1));
i__25450 = G__25452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25451),sablono$core$update_arglists_$_iter__25448.call(null,cljs.core.chunk_rest.call(null,s__25449__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25451),null);
}
} else {
var args = cljs.core.first.call(null,s__25449__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25448.call(null,cljs.core.rest.call(null,s__25449__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19225__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19522__auto__ = [];
var len__19515__auto___25458 = arguments.length;
var i__19516__auto___25459 = (0);
while(true){
if((i__19516__auto___25459 < len__19515__auto___25458)){
args__19522__auto__.push((arguments[i__19516__auto___25459]));

var G__25460 = (i__19516__auto___25459 + (1));
i__19516__auto___25459 = G__25460;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((0) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19523__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19225__auto__ = (function sablono$core$iter__25454(s__25455){
return (new cljs.core.LazySeq(null,(function (){
var s__25455__$1 = s__25455;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25455__$1);
if(temp__4657__auto__){
var s__25455__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25455__$2)){
var c__19223__auto__ = cljs.core.chunk_first.call(null,s__25455__$2);
var size__19224__auto__ = cljs.core.count.call(null,c__19223__auto__);
var b__25457 = cljs.core.chunk_buffer.call(null,size__19224__auto__);
if((function (){var i__25456 = (0);
while(true){
if((i__25456 < size__19224__auto__)){
var style = cljs.core._nth.call(null,c__19223__auto__,i__25456);
cljs.core.chunk_append.call(null,b__25457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25461 = (i__25456 + (1));
i__25456 = G__25461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25457),sablono$core$iter__25454.call(null,cljs.core.chunk_rest.call(null,s__25455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25457),null);
}
} else {
var style = cljs.core.first.call(null,s__25455__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25454.call(null,cljs.core.rest.call(null,s__25455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19225__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25453){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25453));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25462 = (function sablono$core$link_to25462(var_args){
var args__19522__auto__ = [];
var len__19515__auto___25465 = arguments.length;
var i__19516__auto___25466 = (0);
while(true){
if((i__19516__auto___25466 < len__19515__auto___25465)){
args__19522__auto__.push((arguments[i__19516__auto___25466]));

var G__25467 = (i__19516__auto___25466 + (1));
i__19516__auto___25466 = G__25467;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((1) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25462.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19523__auto__);
});

sablono.core.link_to25462.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25462.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25462.cljs$lang$applyTo = (function (seq25463){
var G__25464 = cljs.core.first.call(null,seq25463);
var seq25463__$1 = cljs.core.next.call(null,seq25463);
return sablono.core.link_to25462.cljs$core$IFn$_invoke$arity$variadic(G__25464,seq25463__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25462);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25468 = (function sablono$core$mail_to25468(var_args){
var args__19522__auto__ = [];
var len__19515__auto___25473 = arguments.length;
var i__19516__auto___25474 = (0);
while(true){
if((i__19516__auto___25474 < len__19515__auto___25473)){
args__19522__auto__.push((arguments[i__19516__auto___25474]));

var G__25475 = (i__19516__auto___25474 + (1));
i__19516__auto___25474 = G__25475;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((1) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25468.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19523__auto__);
});

sablono.core.mail_to25468.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25471){
var vec__25472 = p__25471;
var content = cljs.core.nth.call(null,vec__25472,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18445__auto__ = content;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25468.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25468.cljs$lang$applyTo = (function (seq25469){
var G__25470 = cljs.core.first.call(null,seq25469);
var seq25469__$1 = cljs.core.next.call(null,seq25469);
return sablono.core.mail_to25468.cljs$core$IFn$_invoke$arity$variadic(G__25470,seq25469__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25468);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25476 = (function sablono$core$unordered_list25476(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19225__auto__ = (function sablono$core$unordered_list25476_$_iter__25481(s__25482){
return (new cljs.core.LazySeq(null,(function (){
var s__25482__$1 = s__25482;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25482__$1);
if(temp__4657__auto__){
var s__25482__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25482__$2)){
var c__19223__auto__ = cljs.core.chunk_first.call(null,s__25482__$2);
var size__19224__auto__ = cljs.core.count.call(null,c__19223__auto__);
var b__25484 = cljs.core.chunk_buffer.call(null,size__19224__auto__);
if((function (){var i__25483 = (0);
while(true){
if((i__25483 < size__19224__auto__)){
var x = cljs.core._nth.call(null,c__19223__auto__,i__25483);
cljs.core.chunk_append.call(null,b__25484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25485 = (i__25483 + (1));
i__25483 = G__25485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25484),sablono$core$unordered_list25476_$_iter__25481.call(null,cljs.core.chunk_rest.call(null,s__25482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25484),null);
}
} else {
var x = cljs.core.first.call(null,s__25482__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25476_$_iter__25481.call(null,cljs.core.rest.call(null,s__25482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19225__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25476);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25486 = (function sablono$core$ordered_list25486(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19225__auto__ = (function sablono$core$ordered_list25486_$_iter__25491(s__25492){
return (new cljs.core.LazySeq(null,(function (){
var s__25492__$1 = s__25492;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25492__$1);
if(temp__4657__auto__){
var s__25492__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25492__$2)){
var c__19223__auto__ = cljs.core.chunk_first.call(null,s__25492__$2);
var size__19224__auto__ = cljs.core.count.call(null,c__19223__auto__);
var b__25494 = cljs.core.chunk_buffer.call(null,size__19224__auto__);
if((function (){var i__25493 = (0);
while(true){
if((i__25493 < size__19224__auto__)){
var x = cljs.core._nth.call(null,c__19223__auto__,i__25493);
cljs.core.chunk_append.call(null,b__25494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25495 = (i__25493 + (1));
i__25493 = G__25495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25494),sablono$core$ordered_list25486_$_iter__25491.call(null,cljs.core.chunk_rest.call(null,s__25492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25494),null);
}
} else {
var x = cljs.core.first.call(null,s__25492__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25486_$_iter__25491.call(null,cljs.core.rest.call(null,s__25492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19225__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25486);
/**
 * Create an image element.
 */
sablono.core.image25496 = (function sablono$core$image25496(var_args){
var args25497 = [];
var len__19515__auto___25500 = arguments.length;
var i__19516__auto___25501 = (0);
while(true){
if((i__19516__auto___25501 < len__19515__auto___25500)){
args25497.push((arguments[i__19516__auto___25501]));

var G__25502 = (i__19516__auto___25501 + (1));
i__19516__auto___25501 = G__25502;
continue;
} else {
}
break;
}

var G__25499 = args25497.length;
switch (G__25499) {
case 1:
return sablono.core.image25496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25497.length)].join('')));

}
});

sablono.core.image25496.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25496.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25496.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25496);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25504_SHARP_,p2__25505_SHARP_){
return [cljs.core.str(p1__25504_SHARP_),cljs.core.str("["),cljs.core.str(p2__25505_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25506_SHARP_,p2__25507_SHARP_){
return [cljs.core.str(p1__25506_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25507_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18445__auto__ = value;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25508 = (function sablono$core$color_field25508(var_args){
var args25509 = [];
var len__19515__auto___25576 = arguments.length;
var i__19516__auto___25577 = (0);
while(true){
if((i__19516__auto___25577 < len__19515__auto___25576)){
args25509.push((arguments[i__19516__auto___25577]));

var G__25578 = (i__19516__auto___25577 + (1));
i__19516__auto___25577 = G__25578;
continue;
} else {
}
break;
}

var G__25511 = args25509.length;
switch (G__25511) {
case 1:
return sablono.core.color_field25508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25509.length)].join('')));

}
});

sablono.core.color_field25508.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.color_field25508.call(null,name__25429__auto__,null);
});

sablono.core.color_field25508.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.color_field25508.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25508);

/**
 * Creates a date input field.
 */
sablono.core.date_field25512 = (function sablono$core$date_field25512(var_args){
var args25513 = [];
var len__19515__auto___25580 = arguments.length;
var i__19516__auto___25581 = (0);
while(true){
if((i__19516__auto___25581 < len__19515__auto___25580)){
args25513.push((arguments[i__19516__auto___25581]));

var G__25582 = (i__19516__auto___25581 + (1));
i__19516__auto___25581 = G__25582;
continue;
} else {
}
break;
}

var G__25515 = args25513.length;
switch (G__25515) {
case 1:
return sablono.core.date_field25512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25513.length)].join('')));

}
});

sablono.core.date_field25512.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.date_field25512.call(null,name__25429__auto__,null);
});

sablono.core.date_field25512.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.date_field25512.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25512);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25516 = (function sablono$core$datetime_field25516(var_args){
var args25517 = [];
var len__19515__auto___25584 = arguments.length;
var i__19516__auto___25585 = (0);
while(true){
if((i__19516__auto___25585 < len__19515__auto___25584)){
args25517.push((arguments[i__19516__auto___25585]));

var G__25586 = (i__19516__auto___25585 + (1));
i__19516__auto___25585 = G__25586;
continue;
} else {
}
break;
}

var G__25519 = args25517.length;
switch (G__25519) {
case 1:
return sablono.core.datetime_field25516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25517.length)].join('')));

}
});

sablono.core.datetime_field25516.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.datetime_field25516.call(null,name__25429__auto__,null);
});

sablono.core.datetime_field25516.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.datetime_field25516.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25516);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25520 = (function sablono$core$datetime_local_field25520(var_args){
var args25521 = [];
var len__19515__auto___25588 = arguments.length;
var i__19516__auto___25589 = (0);
while(true){
if((i__19516__auto___25589 < len__19515__auto___25588)){
args25521.push((arguments[i__19516__auto___25589]));

var G__25590 = (i__19516__auto___25589 + (1));
i__19516__auto___25589 = G__25590;
continue;
} else {
}
break;
}

var G__25523 = args25521.length;
switch (G__25523) {
case 1:
return sablono.core.datetime_local_field25520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25521.length)].join('')));

}
});

sablono.core.datetime_local_field25520.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.datetime_local_field25520.call(null,name__25429__auto__,null);
});

sablono.core.datetime_local_field25520.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.datetime_local_field25520.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25520);

/**
 * Creates a email input field.
 */
sablono.core.email_field25524 = (function sablono$core$email_field25524(var_args){
var args25525 = [];
var len__19515__auto___25592 = arguments.length;
var i__19516__auto___25593 = (0);
while(true){
if((i__19516__auto___25593 < len__19515__auto___25592)){
args25525.push((arguments[i__19516__auto___25593]));

var G__25594 = (i__19516__auto___25593 + (1));
i__19516__auto___25593 = G__25594;
continue;
} else {
}
break;
}

var G__25527 = args25525.length;
switch (G__25527) {
case 1:
return sablono.core.email_field25524.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25525.length)].join('')));

}
});

sablono.core.email_field25524.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.email_field25524.call(null,name__25429__auto__,null);
});

sablono.core.email_field25524.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.email_field25524.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25524);

/**
 * Creates a file input field.
 */
sablono.core.file_field25528 = (function sablono$core$file_field25528(var_args){
var args25529 = [];
var len__19515__auto___25596 = arguments.length;
var i__19516__auto___25597 = (0);
while(true){
if((i__19516__auto___25597 < len__19515__auto___25596)){
args25529.push((arguments[i__19516__auto___25597]));

var G__25598 = (i__19516__auto___25597 + (1));
i__19516__auto___25597 = G__25598;
continue;
} else {
}
break;
}

var G__25531 = args25529.length;
switch (G__25531) {
case 1:
return sablono.core.file_field25528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25529.length)].join('')));

}
});

sablono.core.file_field25528.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.file_field25528.call(null,name__25429__auto__,null);
});

sablono.core.file_field25528.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.file_field25528.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25528);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25532 = (function sablono$core$hidden_field25532(var_args){
var args25533 = [];
var len__19515__auto___25600 = arguments.length;
var i__19516__auto___25601 = (0);
while(true){
if((i__19516__auto___25601 < len__19515__auto___25600)){
args25533.push((arguments[i__19516__auto___25601]));

var G__25602 = (i__19516__auto___25601 + (1));
i__19516__auto___25601 = G__25602;
continue;
} else {
}
break;
}

var G__25535 = args25533.length;
switch (G__25535) {
case 1:
return sablono.core.hidden_field25532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25533.length)].join('')));

}
});

sablono.core.hidden_field25532.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.hidden_field25532.call(null,name__25429__auto__,null);
});

sablono.core.hidden_field25532.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.hidden_field25532.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25532);

/**
 * Creates a month input field.
 */
sablono.core.month_field25536 = (function sablono$core$month_field25536(var_args){
var args25537 = [];
var len__19515__auto___25604 = arguments.length;
var i__19516__auto___25605 = (0);
while(true){
if((i__19516__auto___25605 < len__19515__auto___25604)){
args25537.push((arguments[i__19516__auto___25605]));

var G__25606 = (i__19516__auto___25605 + (1));
i__19516__auto___25605 = G__25606;
continue;
} else {
}
break;
}

var G__25539 = args25537.length;
switch (G__25539) {
case 1:
return sablono.core.month_field25536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25537.length)].join('')));

}
});

sablono.core.month_field25536.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.month_field25536.call(null,name__25429__auto__,null);
});

sablono.core.month_field25536.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.month_field25536.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25536);

/**
 * Creates a number input field.
 */
sablono.core.number_field25540 = (function sablono$core$number_field25540(var_args){
var args25541 = [];
var len__19515__auto___25608 = arguments.length;
var i__19516__auto___25609 = (0);
while(true){
if((i__19516__auto___25609 < len__19515__auto___25608)){
args25541.push((arguments[i__19516__auto___25609]));

var G__25610 = (i__19516__auto___25609 + (1));
i__19516__auto___25609 = G__25610;
continue;
} else {
}
break;
}

var G__25543 = args25541.length;
switch (G__25543) {
case 1:
return sablono.core.number_field25540.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25540.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25541.length)].join('')));

}
});

sablono.core.number_field25540.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.number_field25540.call(null,name__25429__auto__,null);
});

sablono.core.number_field25540.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.number_field25540.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25540);

/**
 * Creates a password input field.
 */
sablono.core.password_field25544 = (function sablono$core$password_field25544(var_args){
var args25545 = [];
var len__19515__auto___25612 = arguments.length;
var i__19516__auto___25613 = (0);
while(true){
if((i__19516__auto___25613 < len__19515__auto___25612)){
args25545.push((arguments[i__19516__auto___25613]));

var G__25614 = (i__19516__auto___25613 + (1));
i__19516__auto___25613 = G__25614;
continue;
} else {
}
break;
}

var G__25547 = args25545.length;
switch (G__25547) {
case 1:
return sablono.core.password_field25544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25545.length)].join('')));

}
});

sablono.core.password_field25544.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.password_field25544.call(null,name__25429__auto__,null);
});

sablono.core.password_field25544.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.password_field25544.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25544);

/**
 * Creates a range input field.
 */
sablono.core.range_field25548 = (function sablono$core$range_field25548(var_args){
var args25549 = [];
var len__19515__auto___25616 = arguments.length;
var i__19516__auto___25617 = (0);
while(true){
if((i__19516__auto___25617 < len__19515__auto___25616)){
args25549.push((arguments[i__19516__auto___25617]));

var G__25618 = (i__19516__auto___25617 + (1));
i__19516__auto___25617 = G__25618;
continue;
} else {
}
break;
}

var G__25551 = args25549.length;
switch (G__25551) {
case 1:
return sablono.core.range_field25548.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25548.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25549.length)].join('')));

}
});

sablono.core.range_field25548.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.range_field25548.call(null,name__25429__auto__,null);
});

sablono.core.range_field25548.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.range_field25548.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25548);

/**
 * Creates a search input field.
 */
sablono.core.search_field25552 = (function sablono$core$search_field25552(var_args){
var args25553 = [];
var len__19515__auto___25620 = arguments.length;
var i__19516__auto___25621 = (0);
while(true){
if((i__19516__auto___25621 < len__19515__auto___25620)){
args25553.push((arguments[i__19516__auto___25621]));

var G__25622 = (i__19516__auto___25621 + (1));
i__19516__auto___25621 = G__25622;
continue;
} else {
}
break;
}

var G__25555 = args25553.length;
switch (G__25555) {
case 1:
return sablono.core.search_field25552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25553.length)].join('')));

}
});

sablono.core.search_field25552.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.search_field25552.call(null,name__25429__auto__,null);
});

sablono.core.search_field25552.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.search_field25552.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25552);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25556 = (function sablono$core$tel_field25556(var_args){
var args25557 = [];
var len__19515__auto___25624 = arguments.length;
var i__19516__auto___25625 = (0);
while(true){
if((i__19516__auto___25625 < len__19515__auto___25624)){
args25557.push((arguments[i__19516__auto___25625]));

var G__25626 = (i__19516__auto___25625 + (1));
i__19516__auto___25625 = G__25626;
continue;
} else {
}
break;
}

var G__25559 = args25557.length;
switch (G__25559) {
case 1:
return sablono.core.tel_field25556.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25556.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25557.length)].join('')));

}
});

sablono.core.tel_field25556.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.tel_field25556.call(null,name__25429__auto__,null);
});

sablono.core.tel_field25556.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.tel_field25556.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25556);

/**
 * Creates a text input field.
 */
sablono.core.text_field25560 = (function sablono$core$text_field25560(var_args){
var args25561 = [];
var len__19515__auto___25628 = arguments.length;
var i__19516__auto___25629 = (0);
while(true){
if((i__19516__auto___25629 < len__19515__auto___25628)){
args25561.push((arguments[i__19516__auto___25629]));

var G__25630 = (i__19516__auto___25629 + (1));
i__19516__auto___25629 = G__25630;
continue;
} else {
}
break;
}

var G__25563 = args25561.length;
switch (G__25563) {
case 1:
return sablono.core.text_field25560.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25560.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25561.length)].join('')));

}
});

sablono.core.text_field25560.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.text_field25560.call(null,name__25429__auto__,null);
});

sablono.core.text_field25560.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.text_field25560.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25560);

/**
 * Creates a time input field.
 */
sablono.core.time_field25564 = (function sablono$core$time_field25564(var_args){
var args25565 = [];
var len__19515__auto___25632 = arguments.length;
var i__19516__auto___25633 = (0);
while(true){
if((i__19516__auto___25633 < len__19515__auto___25632)){
args25565.push((arguments[i__19516__auto___25633]));

var G__25634 = (i__19516__auto___25633 + (1));
i__19516__auto___25633 = G__25634;
continue;
} else {
}
break;
}

var G__25567 = args25565.length;
switch (G__25567) {
case 1:
return sablono.core.time_field25564.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25564.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25565.length)].join('')));

}
});

sablono.core.time_field25564.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.time_field25564.call(null,name__25429__auto__,null);
});

sablono.core.time_field25564.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.time_field25564.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25564);

/**
 * Creates a url input field.
 */
sablono.core.url_field25568 = (function sablono$core$url_field25568(var_args){
var args25569 = [];
var len__19515__auto___25636 = arguments.length;
var i__19516__auto___25637 = (0);
while(true){
if((i__19516__auto___25637 < len__19515__auto___25636)){
args25569.push((arguments[i__19516__auto___25637]));

var G__25638 = (i__19516__auto___25637 + (1));
i__19516__auto___25637 = G__25638;
continue;
} else {
}
break;
}

var G__25571 = args25569.length;
switch (G__25571) {
case 1:
return sablono.core.url_field25568.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25568.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25569.length)].join('')));

}
});

sablono.core.url_field25568.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.url_field25568.call(null,name__25429__auto__,null);
});

sablono.core.url_field25568.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.url_field25568.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25568);

/**
 * Creates a week input field.
 */
sablono.core.week_field25572 = (function sablono$core$week_field25572(var_args){
var args25573 = [];
var len__19515__auto___25640 = arguments.length;
var i__19516__auto___25641 = (0);
while(true){
if((i__19516__auto___25641 < len__19515__auto___25640)){
args25573.push((arguments[i__19516__auto___25641]));

var G__25642 = (i__19516__auto___25641 + (1));
i__19516__auto___25641 = G__25642;
continue;
} else {
}
break;
}

var G__25575 = args25573.length;
switch (G__25575) {
case 1:
return sablono.core.week_field25572.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25572.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25573.length)].join('')));

}
});

sablono.core.week_field25572.cljs$core$IFn$_invoke$arity$1 = (function (name__25429__auto__){
return sablono.core.week_field25572.call(null,name__25429__auto__,null);
});

sablono.core.week_field25572.cljs$core$IFn$_invoke$arity$2 = (function (name__25429__auto__,value__25430__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25429__auto__,value__25430__auto__);
});

sablono.core.week_field25572.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25572);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25644 = (function sablono$core$check_box25644(var_args){
var args25645 = [];
var len__19515__auto___25648 = arguments.length;
var i__19516__auto___25649 = (0);
while(true){
if((i__19516__auto___25649 < len__19515__auto___25648)){
args25645.push((arguments[i__19516__auto___25649]));

var G__25650 = (i__19516__auto___25649 + (1));
i__19516__auto___25649 = G__25650;
continue;
} else {
}
break;
}

var G__25647 = args25645.length;
switch (G__25647) {
case 1:
return sablono.core.check_box25644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25644.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25645.length)].join('')));

}
});

sablono.core.check_box25644.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25644.call(null,name,null);
});

sablono.core.check_box25644.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25644.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box25644.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18445__auto__ = value;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25644.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25644);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25652 = (function sablono$core$radio_button25652(var_args){
var args25653 = [];
var len__19515__auto___25656 = arguments.length;
var i__19516__auto___25657 = (0);
while(true){
if((i__19516__auto___25657 < len__19515__auto___25656)){
args25653.push((arguments[i__19516__auto___25657]));

var G__25658 = (i__19516__auto___25657 + (1));
i__19516__auto___25657 = G__25658;
continue;
} else {
}
break;
}

var G__25655 = args25653.length;
switch (G__25655) {
case 1:
return sablono.core.radio_button25652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25652.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25653.length)].join('')));

}
});

sablono.core.radio_button25652.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25652.call(null,group,null);
});

sablono.core.radio_button25652.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25652.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button25652.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18445__auto__ = value;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25652.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25652);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25660 = (function sablono$core$select_options25660(coll){
var iter__19225__auto__ = (function sablono$core$select_options25660_$_iter__25669(s__25670){
return (new cljs.core.LazySeq(null,(function (){
var s__25670__$1 = s__25670;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25670__$1);
if(temp__4657__auto__){
var s__25670__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25670__$2)){
var c__19223__auto__ = cljs.core.chunk_first.call(null,s__25670__$2);
var size__19224__auto__ = cljs.core.count.call(null,c__19223__auto__);
var b__25672 = cljs.core.chunk_buffer.call(null,size__19224__auto__);
if((function (){var i__25671 = (0);
while(true){
if((i__25671 < size__19224__auto__)){
var x = cljs.core._nth.call(null,c__19223__auto__,i__25671);
cljs.core.chunk_append.call(null,b__25672,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25675 = x;
var text = cljs.core.nth.call(null,vec__25675,(0),null);
var val = cljs.core.nth.call(null,vec__25675,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25675,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25660.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25677 = (i__25671 + (1));
i__25671 = G__25677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25672),sablono$core$select_options25660_$_iter__25669.call(null,cljs.core.chunk_rest.call(null,s__25670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25672),null);
}
} else {
var x = cljs.core.first.call(null,s__25670__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25676 = x;
var text = cljs.core.nth.call(null,vec__25676,(0),null);
var val = cljs.core.nth.call(null,vec__25676,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25676,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25660.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25660_$_iter__25669.call(null,cljs.core.rest.call(null,s__25670__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19225__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25660);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25678 = (function sablono$core$drop_down25678(var_args){
var args25679 = [];
var len__19515__auto___25682 = arguments.length;
var i__19516__auto___25683 = (0);
while(true){
if((i__19516__auto___25683 < len__19515__auto___25682)){
args25679.push((arguments[i__19516__auto___25683]));

var G__25684 = (i__19516__auto___25683 + (1));
i__19516__auto___25683 = G__25684;
continue;
} else {
}
break;
}

var G__25681 = args25679.length;
switch (G__25681) {
case 2:
return sablono.core.drop_down25678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25678.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25679.length)].join('')));

}
});

sablono.core.drop_down25678.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25678.call(null,name,options,null);
});

sablono.core.drop_down25678.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25678.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25678);
/**
 * Creates a text area element.
 */
sablono.core.text_area25686 = (function sablono$core$text_area25686(var_args){
var args25687 = [];
var len__19515__auto___25690 = arguments.length;
var i__19516__auto___25691 = (0);
while(true){
if((i__19516__auto___25691 < len__19515__auto___25690)){
args25687.push((arguments[i__19516__auto___25691]));

var G__25692 = (i__19516__auto___25691 + (1));
i__19516__auto___25691 = G__25692;
continue;
} else {
}
break;
}

var G__25689 = args25687.length;
switch (G__25689) {
case 1:
return sablono.core.text_area25686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25687.length)].join('')));

}
});

sablono.core.text_area25686.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25686.call(null,name,null);
});

sablono.core.text_area25686.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18445__auto__ = value;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area25686.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25686);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25694 = (function sablono$core$label25694(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25694);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25695 = (function sablono$core$submit_button25695(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25695);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25696 = (function sablono$core$reset_button25696(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25696);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25697 = (function sablono$core$form_to25697(var_args){
var args__19522__auto__ = [];
var len__19515__auto___25702 = arguments.length;
var i__19516__auto___25703 = (0);
while(true){
if((i__19516__auto___25703 < len__19515__auto___25702)){
args__19522__auto__.push((arguments[i__19516__auto___25703]));

var G__25704 = (i__19516__auto___25703 + (1));
i__19516__auto___25703 = G__25704;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((1) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25697.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19523__auto__);
});

sablono.core.form_to25697.cljs$core$IFn$_invoke$arity$variadic = (function (p__25700,body){
var vec__25701 = p__25700;
var method = cljs.core.nth.call(null,vec__25701,(0),null);
var action = cljs.core.nth.call(null,vec__25701,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25697.cljs$lang$maxFixedArity = (1);

sablono.core.form_to25697.cljs$lang$applyTo = (function (seq25698){
var G__25699 = cljs.core.first.call(null,seq25698);
var seq25698__$1 = cljs.core.next.call(null,seq25698);
return sablono.core.form_to25697.cljs$core$IFn$_invoke$arity$variadic(G__25699,seq25698__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25697);

//# sourceMappingURL=core.js.map?rel=1467412219788