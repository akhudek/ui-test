// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28467_28481 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28468_28482 = null;
var count__28469_28483 = (0);
var i__28470_28484 = (0);
while(true){
if((i__28470_28484 < count__28469_28483)){
var f_28485 = cljs.core._nth.call(null,chunk__28468_28482,i__28470_28484);
cljs.core.println.call(null,"  ",f_28485);

var G__28486 = seq__28467_28481;
var G__28487 = chunk__28468_28482;
var G__28488 = count__28469_28483;
var G__28489 = (i__28470_28484 + (1));
seq__28467_28481 = G__28486;
chunk__28468_28482 = G__28487;
count__28469_28483 = G__28488;
i__28470_28484 = G__28489;
continue;
} else {
var temp__4657__auto___28490 = cljs.core.seq.call(null,seq__28467_28481);
if(temp__4657__auto___28490){
var seq__28467_28491__$1 = temp__4657__auto___28490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28467_28491__$1)){
var c__19256__auto___28492 = cljs.core.chunk_first.call(null,seq__28467_28491__$1);
var G__28493 = cljs.core.chunk_rest.call(null,seq__28467_28491__$1);
var G__28494 = c__19256__auto___28492;
var G__28495 = cljs.core.count.call(null,c__19256__auto___28492);
var G__28496 = (0);
seq__28467_28481 = G__28493;
chunk__28468_28482 = G__28494;
count__28469_28483 = G__28495;
i__28470_28484 = G__28496;
continue;
} else {
var f_28497 = cljs.core.first.call(null,seq__28467_28491__$1);
cljs.core.println.call(null,"  ",f_28497);

var G__28498 = cljs.core.next.call(null,seq__28467_28491__$1);
var G__28499 = null;
var G__28500 = (0);
var G__28501 = (0);
seq__28467_28481 = G__28498;
chunk__28468_28482 = G__28499;
count__28469_28483 = G__28500;
i__28470_28484 = G__28501;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28502 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18445__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28502);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28502)))?cljs.core.second.call(null,arglists_28502):arglists_28502));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28471 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28472 = null;
var count__28473 = (0);
var i__28474 = (0);
while(true){
if((i__28474 < count__28473)){
var vec__28475 = cljs.core._nth.call(null,chunk__28472,i__28474);
var name = cljs.core.nth.call(null,vec__28475,(0),null);
var map__28476 = cljs.core.nth.call(null,vec__28475,(1),null);
var map__28476__$1 = ((((!((map__28476 == null)))?((((map__28476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28476):map__28476);
var doc = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28503 = seq__28471;
var G__28504 = chunk__28472;
var G__28505 = count__28473;
var G__28506 = (i__28474 + (1));
seq__28471 = G__28503;
chunk__28472 = G__28504;
count__28473 = G__28505;
i__28474 = G__28506;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28471);
if(temp__4657__auto__){
var seq__28471__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28471__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__28471__$1);
var G__28507 = cljs.core.chunk_rest.call(null,seq__28471__$1);
var G__28508 = c__19256__auto__;
var G__28509 = cljs.core.count.call(null,c__19256__auto__);
var G__28510 = (0);
seq__28471 = G__28507;
chunk__28472 = G__28508;
count__28473 = G__28509;
i__28474 = G__28510;
continue;
} else {
var vec__28478 = cljs.core.first.call(null,seq__28471__$1);
var name = cljs.core.nth.call(null,vec__28478,(0),null);
var map__28479 = cljs.core.nth.call(null,vec__28478,(1),null);
var map__28479__$1 = ((((!((map__28479 == null)))?((((map__28479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28479):map__28479);
var doc = cljs.core.get.call(null,map__28479__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28479__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28511 = cljs.core.next.call(null,seq__28471__$1);
var G__28512 = null;
var G__28513 = (0);
var G__28514 = (0);
seq__28471 = G__28511;
chunk__28472 = G__28512;
count__28473 = G__28513;
i__28474 = G__28514;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1467412222357