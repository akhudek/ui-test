// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18445__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18445__auto__){
return or__18445__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18445__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27251_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27251_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27256 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27257 = null;
var count__27258 = (0);
var i__27259 = (0);
while(true){
if((i__27259 < count__27258)){
var n = cljs.core._nth.call(null,chunk__27257,i__27259);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27260 = seq__27256;
var G__27261 = chunk__27257;
var G__27262 = count__27258;
var G__27263 = (i__27259 + (1));
seq__27256 = G__27260;
chunk__27257 = G__27261;
count__27258 = G__27262;
i__27259 = G__27263;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27256);
if(temp__4657__auto__){
var seq__27256__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27256__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__27256__$1);
var G__27264 = cljs.core.chunk_rest.call(null,seq__27256__$1);
var G__27265 = c__19256__auto__;
var G__27266 = cljs.core.count.call(null,c__19256__auto__);
var G__27267 = (0);
seq__27256 = G__27264;
chunk__27257 = G__27265;
count__27258 = G__27266;
i__27259 = G__27267;
continue;
} else {
var n = cljs.core.first.call(null,seq__27256__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27268 = cljs.core.next.call(null,seq__27256__$1);
var G__27269 = null;
var G__27270 = (0);
var G__27271 = (0);
seq__27256 = G__27268;
chunk__27257 = G__27269;
count__27258 = G__27270;
i__27259 = G__27271;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27310_27317 = cljs.core.seq.call(null,deps);
var chunk__27311_27318 = null;
var count__27312_27319 = (0);
var i__27313_27320 = (0);
while(true){
if((i__27313_27320 < count__27312_27319)){
var dep_27321 = cljs.core._nth.call(null,chunk__27311_27318,i__27313_27320);
topo_sort_helper_STAR_.call(null,dep_27321,(depth + (1)),state);

var G__27322 = seq__27310_27317;
var G__27323 = chunk__27311_27318;
var G__27324 = count__27312_27319;
var G__27325 = (i__27313_27320 + (1));
seq__27310_27317 = G__27322;
chunk__27311_27318 = G__27323;
count__27312_27319 = G__27324;
i__27313_27320 = G__27325;
continue;
} else {
var temp__4657__auto___27326 = cljs.core.seq.call(null,seq__27310_27317);
if(temp__4657__auto___27326){
var seq__27310_27327__$1 = temp__4657__auto___27326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27310_27327__$1)){
var c__19256__auto___27328 = cljs.core.chunk_first.call(null,seq__27310_27327__$1);
var G__27329 = cljs.core.chunk_rest.call(null,seq__27310_27327__$1);
var G__27330 = c__19256__auto___27328;
var G__27331 = cljs.core.count.call(null,c__19256__auto___27328);
var G__27332 = (0);
seq__27310_27317 = G__27329;
chunk__27311_27318 = G__27330;
count__27312_27319 = G__27331;
i__27313_27320 = G__27332;
continue;
} else {
var dep_27333 = cljs.core.first.call(null,seq__27310_27327__$1);
topo_sort_helper_STAR_.call(null,dep_27333,(depth + (1)),state);

var G__27334 = cljs.core.next.call(null,seq__27310_27327__$1);
var G__27335 = null;
var G__27336 = (0);
var G__27337 = (0);
seq__27310_27317 = G__27334;
chunk__27311_27318 = G__27335;
count__27312_27319 = G__27336;
i__27313_27320 = G__27337;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27314){
var vec__27316 = p__27314;
var x = cljs.core.nth.call(null,vec__27316,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27316,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27316,x,xs,get_deps__$1){
return (function (p1__27272_SHARP_){
return clojure.set.difference.call(null,p1__27272_SHARP_,x);
});})(vec__27316,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27350 = cljs.core.seq.call(null,provides);
var chunk__27351 = null;
var count__27352 = (0);
var i__27353 = (0);
while(true){
if((i__27353 < count__27352)){
var prov = cljs.core._nth.call(null,chunk__27351,i__27353);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27354_27362 = cljs.core.seq.call(null,requires);
var chunk__27355_27363 = null;
var count__27356_27364 = (0);
var i__27357_27365 = (0);
while(true){
if((i__27357_27365 < count__27356_27364)){
var req_27366 = cljs.core._nth.call(null,chunk__27355_27363,i__27357_27365);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27366,prov);

var G__27367 = seq__27354_27362;
var G__27368 = chunk__27355_27363;
var G__27369 = count__27356_27364;
var G__27370 = (i__27357_27365 + (1));
seq__27354_27362 = G__27367;
chunk__27355_27363 = G__27368;
count__27356_27364 = G__27369;
i__27357_27365 = G__27370;
continue;
} else {
var temp__4657__auto___27371 = cljs.core.seq.call(null,seq__27354_27362);
if(temp__4657__auto___27371){
var seq__27354_27372__$1 = temp__4657__auto___27371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27354_27372__$1)){
var c__19256__auto___27373 = cljs.core.chunk_first.call(null,seq__27354_27372__$1);
var G__27374 = cljs.core.chunk_rest.call(null,seq__27354_27372__$1);
var G__27375 = c__19256__auto___27373;
var G__27376 = cljs.core.count.call(null,c__19256__auto___27373);
var G__27377 = (0);
seq__27354_27362 = G__27374;
chunk__27355_27363 = G__27375;
count__27356_27364 = G__27376;
i__27357_27365 = G__27377;
continue;
} else {
var req_27378 = cljs.core.first.call(null,seq__27354_27372__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27378,prov);

var G__27379 = cljs.core.next.call(null,seq__27354_27372__$1);
var G__27380 = null;
var G__27381 = (0);
var G__27382 = (0);
seq__27354_27362 = G__27379;
chunk__27355_27363 = G__27380;
count__27356_27364 = G__27381;
i__27357_27365 = G__27382;
continue;
}
} else {
}
}
break;
}

var G__27383 = seq__27350;
var G__27384 = chunk__27351;
var G__27385 = count__27352;
var G__27386 = (i__27353 + (1));
seq__27350 = G__27383;
chunk__27351 = G__27384;
count__27352 = G__27385;
i__27353 = G__27386;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27350);
if(temp__4657__auto__){
var seq__27350__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27350__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__27350__$1);
var G__27387 = cljs.core.chunk_rest.call(null,seq__27350__$1);
var G__27388 = c__19256__auto__;
var G__27389 = cljs.core.count.call(null,c__19256__auto__);
var G__27390 = (0);
seq__27350 = G__27387;
chunk__27351 = G__27388;
count__27352 = G__27389;
i__27353 = G__27390;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27350__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27358_27391 = cljs.core.seq.call(null,requires);
var chunk__27359_27392 = null;
var count__27360_27393 = (0);
var i__27361_27394 = (0);
while(true){
if((i__27361_27394 < count__27360_27393)){
var req_27395 = cljs.core._nth.call(null,chunk__27359_27392,i__27361_27394);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27395,prov);

var G__27396 = seq__27358_27391;
var G__27397 = chunk__27359_27392;
var G__27398 = count__27360_27393;
var G__27399 = (i__27361_27394 + (1));
seq__27358_27391 = G__27396;
chunk__27359_27392 = G__27397;
count__27360_27393 = G__27398;
i__27361_27394 = G__27399;
continue;
} else {
var temp__4657__auto___27400__$1 = cljs.core.seq.call(null,seq__27358_27391);
if(temp__4657__auto___27400__$1){
var seq__27358_27401__$1 = temp__4657__auto___27400__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27358_27401__$1)){
var c__19256__auto___27402 = cljs.core.chunk_first.call(null,seq__27358_27401__$1);
var G__27403 = cljs.core.chunk_rest.call(null,seq__27358_27401__$1);
var G__27404 = c__19256__auto___27402;
var G__27405 = cljs.core.count.call(null,c__19256__auto___27402);
var G__27406 = (0);
seq__27358_27391 = G__27403;
chunk__27359_27392 = G__27404;
count__27360_27393 = G__27405;
i__27361_27394 = G__27406;
continue;
} else {
var req_27407 = cljs.core.first.call(null,seq__27358_27401__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27407,prov);

var G__27408 = cljs.core.next.call(null,seq__27358_27401__$1);
var G__27409 = null;
var G__27410 = (0);
var G__27411 = (0);
seq__27358_27391 = G__27408;
chunk__27359_27392 = G__27409;
count__27360_27393 = G__27410;
i__27361_27394 = G__27411;
continue;
}
} else {
}
}
break;
}

var G__27412 = cljs.core.next.call(null,seq__27350__$1);
var G__27413 = null;
var G__27414 = (0);
var G__27415 = (0);
seq__27350 = G__27412;
chunk__27351 = G__27413;
count__27352 = G__27414;
i__27353 = G__27415;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27420_27424 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27421_27425 = null;
var count__27422_27426 = (0);
var i__27423_27427 = (0);
while(true){
if((i__27423_27427 < count__27422_27426)){
var ns_27428 = cljs.core._nth.call(null,chunk__27421_27425,i__27423_27427);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27428);

var G__27429 = seq__27420_27424;
var G__27430 = chunk__27421_27425;
var G__27431 = count__27422_27426;
var G__27432 = (i__27423_27427 + (1));
seq__27420_27424 = G__27429;
chunk__27421_27425 = G__27430;
count__27422_27426 = G__27431;
i__27423_27427 = G__27432;
continue;
} else {
var temp__4657__auto___27433 = cljs.core.seq.call(null,seq__27420_27424);
if(temp__4657__auto___27433){
var seq__27420_27434__$1 = temp__4657__auto___27433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27420_27434__$1)){
var c__19256__auto___27435 = cljs.core.chunk_first.call(null,seq__27420_27434__$1);
var G__27436 = cljs.core.chunk_rest.call(null,seq__27420_27434__$1);
var G__27437 = c__19256__auto___27435;
var G__27438 = cljs.core.count.call(null,c__19256__auto___27435);
var G__27439 = (0);
seq__27420_27424 = G__27436;
chunk__27421_27425 = G__27437;
count__27422_27426 = G__27438;
i__27423_27427 = G__27439;
continue;
} else {
var ns_27440 = cljs.core.first.call(null,seq__27420_27434__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27440);

var G__27441 = cljs.core.next.call(null,seq__27420_27434__$1);
var G__27442 = null;
var G__27443 = (0);
var G__27444 = (0);
seq__27420_27424 = G__27441;
chunk__27421_27425 = G__27442;
count__27422_27426 = G__27443;
i__27423_27427 = G__27444;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18445__auto__ = goog.require__;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27445__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27446__i = 0, G__27446__a = new Array(arguments.length -  0);
while (G__27446__i < G__27446__a.length) {G__27446__a[G__27446__i] = arguments[G__27446__i + 0]; ++G__27446__i;}
  args = new cljs.core.IndexedSeq(G__27446__a,0);
} 
return G__27445__delegate.call(this,args);};
G__27445.cljs$lang$maxFixedArity = 0;
G__27445.cljs$lang$applyTo = (function (arglist__27447){
var args = cljs.core.seq(arglist__27447);
return G__27445__delegate(args);
});
G__27445.cljs$core$IFn$_invoke$arity$variadic = G__27445__delegate;
return G__27445;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27449 = cljs.core._EQ_;
var expr__27450 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27449.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27450))){
var path_parts = ((function (pred__27449,expr__27450){
return (function (p1__27448_SHARP_){
return clojure.string.split.call(null,p1__27448_SHARP_,/[\/\\]/);
});})(pred__27449,expr__27450))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27449,expr__27450){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27452){if((e27452 instanceof Error)){
var e = e27452;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27452;

}
}})());
});
;})(path_parts,sep,root,pred__27449,expr__27450))
} else {
if(cljs.core.truth_(pred__27449.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27450))){
return ((function (pred__27449,expr__27450){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27449,expr__27450){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27449,expr__27450))
);

return deferred.addErrback(((function (deferred,pred__27449,expr__27450){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27449,expr__27450))
);
});
;})(pred__27449,expr__27450))
} else {
return ((function (pred__27449,expr__27450){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27449,expr__27450))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27453,callback){
var map__27456 = p__27453;
var map__27456__$1 = ((((!((map__27456 == null)))?((((map__27456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27456):map__27456);
var file_msg = map__27456__$1;
var request_url = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27456,map__27456__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27456,map__27456__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__){
return (function (state_27480){
var state_val_27481 = (state_27480[(1)]);
if((state_val_27481 === (7))){
var inst_27476 = (state_27480[(2)]);
var state_27480__$1 = state_27480;
var statearr_27482_27502 = state_27480__$1;
(statearr_27482_27502[(2)] = inst_27476);

(statearr_27482_27502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (1))){
var state_27480__$1 = state_27480;
var statearr_27483_27503 = state_27480__$1;
(statearr_27483_27503[(2)] = null);

(statearr_27483_27503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (4))){
var inst_27460 = (state_27480[(7)]);
var inst_27460__$1 = (state_27480[(2)]);
var state_27480__$1 = (function (){var statearr_27484 = state_27480;
(statearr_27484[(7)] = inst_27460__$1);

return statearr_27484;
})();
if(cljs.core.truth_(inst_27460__$1)){
var statearr_27485_27504 = state_27480__$1;
(statearr_27485_27504[(1)] = (5));

} else {
var statearr_27486_27505 = state_27480__$1;
(statearr_27486_27505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (6))){
var state_27480__$1 = state_27480;
var statearr_27487_27506 = state_27480__$1;
(statearr_27487_27506[(2)] = null);

(statearr_27487_27506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (3))){
var inst_27478 = (state_27480[(2)]);
var state_27480__$1 = state_27480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27480__$1,inst_27478);
} else {
if((state_val_27481 === (2))){
var state_27480__$1 = state_27480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27480__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27481 === (11))){
var inst_27472 = (state_27480[(2)]);
var state_27480__$1 = (function (){var statearr_27488 = state_27480;
(statearr_27488[(8)] = inst_27472);

return statearr_27488;
})();
var statearr_27489_27507 = state_27480__$1;
(statearr_27489_27507[(2)] = null);

(statearr_27489_27507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (9))){
var inst_27464 = (state_27480[(9)]);
var inst_27466 = (state_27480[(10)]);
var inst_27468 = inst_27466.call(null,inst_27464);
var state_27480__$1 = state_27480;
var statearr_27490_27508 = state_27480__$1;
(statearr_27490_27508[(2)] = inst_27468);

(statearr_27490_27508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (5))){
var inst_27460 = (state_27480[(7)]);
var inst_27462 = figwheel.client.file_reloading.blocking_load.call(null,inst_27460);
var state_27480__$1 = state_27480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27480__$1,(8),inst_27462);
} else {
if((state_val_27481 === (10))){
var inst_27464 = (state_27480[(9)]);
var inst_27470 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27464);
var state_27480__$1 = state_27480;
var statearr_27491_27509 = state_27480__$1;
(statearr_27491_27509[(2)] = inst_27470);

(statearr_27491_27509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (8))){
var inst_27460 = (state_27480[(7)]);
var inst_27466 = (state_27480[(10)]);
var inst_27464 = (state_27480[(2)]);
var inst_27465 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27466__$1 = cljs.core.get.call(null,inst_27465,inst_27460);
var state_27480__$1 = (function (){var statearr_27492 = state_27480;
(statearr_27492[(9)] = inst_27464);

(statearr_27492[(10)] = inst_27466__$1);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27466__$1)){
var statearr_27493_27510 = state_27480__$1;
(statearr_27493_27510[(1)] = (9));

} else {
var statearr_27494_27511 = state_27480__$1;
(statearr_27494_27511[(1)] = (10));

}

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
});})(c__22157__auto__))
;
return ((function (switch__22045__auto__,c__22157__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22046__auto__ = null;
var figwheel$client$file_reloading$state_machine__22046__auto____0 = (function (){
var statearr_27498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27498[(0)] = figwheel$client$file_reloading$state_machine__22046__auto__);

(statearr_27498[(1)] = (1));

return statearr_27498;
});
var figwheel$client$file_reloading$state_machine__22046__auto____1 = (function (state_27480){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_27480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e27499){if((e27499 instanceof Object)){
var ex__22049__auto__ = e27499;
var statearr_27500_27512 = state_27480;
(statearr_27500_27512[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27513 = state_27480;
state_27480 = G__27513;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22046__auto__ = function(state_27480){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22046__auto____1.call(this,state_27480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22046__auto____0;
figwheel$client$file_reloading$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22046__auto____1;
return figwheel$client$file_reloading$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__))
})();
var state__22159__auto__ = (function (){var statearr_27501 = f__22158__auto__.call(null);
(statearr_27501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_27501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__))
);

return c__22157__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27514,callback){
var map__27517 = p__27514;
var map__27517__$1 = ((((!((map__27517 == null)))?((((map__27517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27517):map__27517);
var file_msg = map__27517__$1;
var namespace = cljs.core.get.call(null,map__27517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27517,map__27517__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27517,map__27517__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27519){
var map__27522 = p__27519;
var map__27522__$1 = ((((!((map__27522 == null)))?((((map__27522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27522):map__27522);
var file_msg = map__27522__$1;
var namespace = cljs.core.get.call(null,map__27522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18433__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18433__auto__){
var or__18445__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
var or__18445__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18445__auto____$1)){
return or__18445__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18433__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27524,callback){
var map__27527 = p__27524;
var map__27527__$1 = ((((!((map__27527 == null)))?((((map__27527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27527):map__27527);
var file_msg = map__27527__$1;
var request_url = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22157__auto___27615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___27615,out){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___27615,out){
return (function (state_27597){
var state_val_27598 = (state_27597[(1)]);
if((state_val_27598 === (1))){
var inst_27575 = cljs.core.nth.call(null,files,(0),null);
var inst_27576 = cljs.core.nthnext.call(null,files,(1));
var inst_27577 = files;
var state_27597__$1 = (function (){var statearr_27599 = state_27597;
(statearr_27599[(7)] = inst_27577);

(statearr_27599[(8)] = inst_27576);

(statearr_27599[(9)] = inst_27575);

return statearr_27599;
})();
var statearr_27600_27616 = state_27597__$1;
(statearr_27600_27616[(2)] = null);

(statearr_27600_27616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (2))){
var inst_27577 = (state_27597[(7)]);
var inst_27580 = (state_27597[(10)]);
var inst_27580__$1 = cljs.core.nth.call(null,inst_27577,(0),null);
var inst_27581 = cljs.core.nthnext.call(null,inst_27577,(1));
var inst_27582 = (inst_27580__$1 == null);
var inst_27583 = cljs.core.not.call(null,inst_27582);
var state_27597__$1 = (function (){var statearr_27601 = state_27597;
(statearr_27601[(11)] = inst_27581);

(statearr_27601[(10)] = inst_27580__$1);

return statearr_27601;
})();
if(inst_27583){
var statearr_27602_27617 = state_27597__$1;
(statearr_27602_27617[(1)] = (4));

} else {
var statearr_27603_27618 = state_27597__$1;
(statearr_27603_27618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (3))){
var inst_27595 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27597__$1,inst_27595);
} else {
if((state_val_27598 === (4))){
var inst_27580 = (state_27597[(10)]);
var inst_27585 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27580);
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27597__$1,(7),inst_27585);
} else {
if((state_val_27598 === (5))){
var inst_27591 = cljs.core.async.close_BANG_.call(null,out);
var state_27597__$1 = state_27597;
var statearr_27604_27619 = state_27597__$1;
(statearr_27604_27619[(2)] = inst_27591);

(statearr_27604_27619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (6))){
var inst_27593 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
var statearr_27605_27620 = state_27597__$1;
(statearr_27605_27620[(2)] = inst_27593);

(statearr_27605_27620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (7))){
var inst_27581 = (state_27597[(11)]);
var inst_27587 = (state_27597[(2)]);
var inst_27588 = cljs.core.async.put_BANG_.call(null,out,inst_27587);
var inst_27577 = inst_27581;
var state_27597__$1 = (function (){var statearr_27606 = state_27597;
(statearr_27606[(7)] = inst_27577);

(statearr_27606[(12)] = inst_27588);

return statearr_27606;
})();
var statearr_27607_27621 = state_27597__$1;
(statearr_27607_27621[(2)] = null);

(statearr_27607_27621[(1)] = (2));


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
});})(c__22157__auto___27615,out))
;
return ((function (switch__22045__auto__,c__22157__auto___27615,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto____0 = (function (){
var statearr_27611 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27611[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto__);

(statearr_27611[(1)] = (1));

return statearr_27611;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto____1 = (function (state_27597){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_27597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e27612){if((e27612 instanceof Object)){
var ex__22049__auto__ = e27612;
var statearr_27613_27622 = state_27597;
(statearr_27613_27622[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27623 = state_27597;
state_27597 = G__27623;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto__ = function(state_27597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto____1.call(this,state_27597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___27615,out))
})();
var state__22159__auto__ = (function (){var statearr_27614 = f__22158__auto__.call(null);
(statearr_27614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___27615);

return statearr_27614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___27615,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27624,opts){
var map__27628 = p__27624;
var map__27628__$1 = ((((!((map__27628 == null)))?((((map__27628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27628):map__27628);
var eval_body__$1 = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18433__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18433__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18433__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27630){var e = e27630;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27631_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27631_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27636){
var vec__27637 = p__27636;
var k = cljs.core.nth.call(null,vec__27637,(0),null);
var v = cljs.core.nth.call(null,vec__27637,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27638){
var vec__27639 = p__27638;
var k = cljs.core.nth.call(null,vec__27639,(0),null);
var v = cljs.core.nth.call(null,vec__27639,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27643,p__27644){
var map__27891 = p__27643;
var map__27891__$1 = ((((!((map__27891 == null)))?((((map__27891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27891):map__27891);
var opts = map__27891__$1;
var before_jsload = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27892 = p__27644;
var map__27892__$1 = ((((!((map__27892 == null)))?((((map__27892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27892):map__27892);
var msg = map__27892__$1;
var files = cljs.core.get.call(null,map__27892__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27892__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27892__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28045){
var state_val_28046 = (state_28045[(1)]);
if((state_val_28046 === (7))){
var inst_27908 = (state_28045[(7)]);
var inst_27909 = (state_28045[(8)]);
var inst_27907 = (state_28045[(9)]);
var inst_27906 = (state_28045[(10)]);
var inst_27914 = cljs.core._nth.call(null,inst_27907,inst_27909);
var inst_27915 = figwheel.client.file_reloading.eval_body.call(null,inst_27914,opts);
var inst_27916 = (inst_27909 + (1));
var tmp28047 = inst_27908;
var tmp28048 = inst_27907;
var tmp28049 = inst_27906;
var inst_27906__$1 = tmp28049;
var inst_27907__$1 = tmp28048;
var inst_27908__$1 = tmp28047;
var inst_27909__$1 = inst_27916;
var state_28045__$1 = (function (){var statearr_28050 = state_28045;
(statearr_28050[(7)] = inst_27908__$1);

(statearr_28050[(8)] = inst_27909__$1);

(statearr_28050[(9)] = inst_27907__$1);

(statearr_28050[(11)] = inst_27915);

(statearr_28050[(10)] = inst_27906__$1);

return statearr_28050;
})();
var statearr_28051_28137 = state_28045__$1;
(statearr_28051_28137[(2)] = null);

(statearr_28051_28137[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (20))){
var inst_27949 = (state_28045[(12)]);
var inst_27957 = figwheel.client.file_reloading.sort_files.call(null,inst_27949);
var state_28045__$1 = state_28045;
var statearr_28052_28138 = state_28045__$1;
(statearr_28052_28138[(2)] = inst_27957);

(statearr_28052_28138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (27))){
var state_28045__$1 = state_28045;
var statearr_28053_28139 = state_28045__$1;
(statearr_28053_28139[(2)] = null);

(statearr_28053_28139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (1))){
var inst_27898 = (state_28045[(13)]);
var inst_27895 = before_jsload.call(null,files);
var inst_27896 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27897 = (function (){return ((function (inst_27898,inst_27895,inst_27896,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27640_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27640_SHARP_);
});
;})(inst_27898,inst_27895,inst_27896,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27898__$1 = cljs.core.filter.call(null,inst_27897,files);
var inst_27899 = cljs.core.not_empty.call(null,inst_27898__$1);
var state_28045__$1 = (function (){var statearr_28054 = state_28045;
(statearr_28054[(14)] = inst_27895);

(statearr_28054[(15)] = inst_27896);

(statearr_28054[(13)] = inst_27898__$1);

return statearr_28054;
})();
if(cljs.core.truth_(inst_27899)){
var statearr_28055_28140 = state_28045__$1;
(statearr_28055_28140[(1)] = (2));

} else {
var statearr_28056_28141 = state_28045__$1;
(statearr_28056_28141[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (24))){
var state_28045__$1 = state_28045;
var statearr_28057_28142 = state_28045__$1;
(statearr_28057_28142[(2)] = null);

(statearr_28057_28142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (39))){
var inst_27999 = (state_28045[(16)]);
var state_28045__$1 = state_28045;
var statearr_28058_28143 = state_28045__$1;
(statearr_28058_28143[(2)] = inst_27999);

(statearr_28058_28143[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (46))){
var inst_28040 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28059_28144 = state_28045__$1;
(statearr_28059_28144[(2)] = inst_28040);

(statearr_28059_28144[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (4))){
var inst_27943 = (state_28045[(2)]);
var inst_27944 = cljs.core.List.EMPTY;
var inst_27945 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27944);
var inst_27946 = (function (){return ((function (inst_27943,inst_27944,inst_27945,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27641_SHARP_){
var and__18433__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27641_SHARP_);
if(cljs.core.truth_(and__18433__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27641_SHARP_));
} else {
return and__18433__auto__;
}
});
;})(inst_27943,inst_27944,inst_27945,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27947 = cljs.core.filter.call(null,inst_27946,files);
var inst_27948 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27949 = cljs.core.concat.call(null,inst_27947,inst_27948);
var state_28045__$1 = (function (){var statearr_28060 = state_28045;
(statearr_28060[(17)] = inst_27943);

(statearr_28060[(12)] = inst_27949);

(statearr_28060[(18)] = inst_27945);

return statearr_28060;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28061_28145 = state_28045__$1;
(statearr_28061_28145[(1)] = (16));

} else {
var statearr_28062_28146 = state_28045__$1;
(statearr_28062_28146[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (15))){
var inst_27933 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28063_28147 = state_28045__$1;
(statearr_28063_28147[(2)] = inst_27933);

(statearr_28063_28147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (21))){
var inst_27959 = (state_28045[(19)]);
var inst_27959__$1 = (state_28045[(2)]);
var inst_27960 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27959__$1);
var state_28045__$1 = (function (){var statearr_28064 = state_28045;
(statearr_28064[(19)] = inst_27959__$1);

return statearr_28064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28045__$1,(22),inst_27960);
} else {
if((state_val_28046 === (31))){
var inst_28043 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28045__$1,inst_28043);
} else {
if((state_val_28046 === (32))){
var inst_27999 = (state_28045[(16)]);
var inst_28004 = inst_27999.cljs$lang$protocol_mask$partition0$;
var inst_28005 = (inst_28004 & (64));
var inst_28006 = inst_27999.cljs$core$ISeq$;
var inst_28007 = (inst_28005) || (inst_28006);
var state_28045__$1 = state_28045;
if(cljs.core.truth_(inst_28007)){
var statearr_28065_28148 = state_28045__$1;
(statearr_28065_28148[(1)] = (35));

} else {
var statearr_28066_28149 = state_28045__$1;
(statearr_28066_28149[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (40))){
var inst_28020 = (state_28045[(20)]);
var inst_28019 = (state_28045[(2)]);
var inst_28020__$1 = cljs.core.get.call(null,inst_28019,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28021 = cljs.core.get.call(null,inst_28019,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28022 = cljs.core.not_empty.call(null,inst_28020__$1);
var state_28045__$1 = (function (){var statearr_28067 = state_28045;
(statearr_28067[(21)] = inst_28021);

(statearr_28067[(20)] = inst_28020__$1);

return statearr_28067;
})();
if(cljs.core.truth_(inst_28022)){
var statearr_28068_28150 = state_28045__$1;
(statearr_28068_28150[(1)] = (41));

} else {
var statearr_28069_28151 = state_28045__$1;
(statearr_28069_28151[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (33))){
var state_28045__$1 = state_28045;
var statearr_28070_28152 = state_28045__$1;
(statearr_28070_28152[(2)] = false);

(statearr_28070_28152[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (13))){
var inst_27919 = (state_28045[(22)]);
var inst_27923 = cljs.core.chunk_first.call(null,inst_27919);
var inst_27924 = cljs.core.chunk_rest.call(null,inst_27919);
var inst_27925 = cljs.core.count.call(null,inst_27923);
var inst_27906 = inst_27924;
var inst_27907 = inst_27923;
var inst_27908 = inst_27925;
var inst_27909 = (0);
var state_28045__$1 = (function (){var statearr_28071 = state_28045;
(statearr_28071[(7)] = inst_27908);

(statearr_28071[(8)] = inst_27909);

(statearr_28071[(9)] = inst_27907);

(statearr_28071[(10)] = inst_27906);

return statearr_28071;
})();
var statearr_28072_28153 = state_28045__$1;
(statearr_28072_28153[(2)] = null);

(statearr_28072_28153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (22))){
var inst_27967 = (state_28045[(23)]);
var inst_27959 = (state_28045[(19)]);
var inst_27962 = (state_28045[(24)]);
var inst_27963 = (state_28045[(25)]);
var inst_27962__$1 = (state_28045[(2)]);
var inst_27963__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27962__$1);
var inst_27964 = (function (){var all_files = inst_27959;
var res_SINGLEQUOTE_ = inst_27962__$1;
var res = inst_27963__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27967,inst_27959,inst_27962,inst_27963,inst_27962__$1,inst_27963__$1,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27642_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27642_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27967,inst_27959,inst_27962,inst_27963,inst_27962__$1,inst_27963__$1,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27965 = cljs.core.filter.call(null,inst_27964,inst_27962__$1);
var inst_27966 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27967__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27966);
var inst_27968 = cljs.core.not_empty.call(null,inst_27967__$1);
var state_28045__$1 = (function (){var statearr_28073 = state_28045;
(statearr_28073[(26)] = inst_27965);

(statearr_28073[(23)] = inst_27967__$1);

(statearr_28073[(24)] = inst_27962__$1);

(statearr_28073[(25)] = inst_27963__$1);

return statearr_28073;
})();
if(cljs.core.truth_(inst_27968)){
var statearr_28074_28154 = state_28045__$1;
(statearr_28074_28154[(1)] = (23));

} else {
var statearr_28075_28155 = state_28045__$1;
(statearr_28075_28155[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (36))){
var state_28045__$1 = state_28045;
var statearr_28076_28156 = state_28045__$1;
(statearr_28076_28156[(2)] = false);

(statearr_28076_28156[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (41))){
var inst_28020 = (state_28045[(20)]);
var inst_28024 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28025 = cljs.core.map.call(null,inst_28024,inst_28020);
var inst_28026 = cljs.core.pr_str.call(null,inst_28025);
var inst_28027 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28026)].join('');
var inst_28028 = figwheel.client.utils.log.call(null,inst_28027);
var state_28045__$1 = state_28045;
var statearr_28077_28157 = state_28045__$1;
(statearr_28077_28157[(2)] = inst_28028);

(statearr_28077_28157[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (43))){
var inst_28021 = (state_28045[(21)]);
var inst_28031 = (state_28045[(2)]);
var inst_28032 = cljs.core.not_empty.call(null,inst_28021);
var state_28045__$1 = (function (){var statearr_28078 = state_28045;
(statearr_28078[(27)] = inst_28031);

return statearr_28078;
})();
if(cljs.core.truth_(inst_28032)){
var statearr_28079_28158 = state_28045__$1;
(statearr_28079_28158[(1)] = (44));

} else {
var statearr_28080_28159 = state_28045__$1;
(statearr_28080_28159[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (29))){
var inst_27965 = (state_28045[(26)]);
var inst_27999 = (state_28045[(16)]);
var inst_27967 = (state_28045[(23)]);
var inst_27959 = (state_28045[(19)]);
var inst_27962 = (state_28045[(24)]);
var inst_27963 = (state_28045[(25)]);
var inst_27995 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27998 = (function (){var all_files = inst_27959;
var res_SINGLEQUOTE_ = inst_27962;
var res = inst_27963;
var files_not_loaded = inst_27965;
var dependencies_that_loaded = inst_27967;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27965,inst_27999,inst_27967,inst_27959,inst_27962,inst_27963,inst_27995,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27997){
var map__28081 = p__27997;
var map__28081__$1 = ((((!((map__28081 == null)))?((((map__28081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28081):map__28081);
var namespace = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27965,inst_27999,inst_27967,inst_27959,inst_27962,inst_27963,inst_27995,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27999__$1 = cljs.core.group_by.call(null,inst_27998,inst_27965);
var inst_28001 = (inst_27999__$1 == null);
var inst_28002 = cljs.core.not.call(null,inst_28001);
var state_28045__$1 = (function (){var statearr_28083 = state_28045;
(statearr_28083[(28)] = inst_27995);

(statearr_28083[(16)] = inst_27999__$1);

return statearr_28083;
})();
if(inst_28002){
var statearr_28084_28160 = state_28045__$1;
(statearr_28084_28160[(1)] = (32));

} else {
var statearr_28085_28161 = state_28045__$1;
(statearr_28085_28161[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (44))){
var inst_28021 = (state_28045[(21)]);
var inst_28034 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28021);
var inst_28035 = cljs.core.pr_str.call(null,inst_28034);
var inst_28036 = [cljs.core.str("not required: "),cljs.core.str(inst_28035)].join('');
var inst_28037 = figwheel.client.utils.log.call(null,inst_28036);
var state_28045__$1 = state_28045;
var statearr_28086_28162 = state_28045__$1;
(statearr_28086_28162[(2)] = inst_28037);

(statearr_28086_28162[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (6))){
var inst_27940 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28087_28163 = state_28045__$1;
(statearr_28087_28163[(2)] = inst_27940);

(statearr_28087_28163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (28))){
var inst_27965 = (state_28045[(26)]);
var inst_27992 = (state_28045[(2)]);
var inst_27993 = cljs.core.not_empty.call(null,inst_27965);
var state_28045__$1 = (function (){var statearr_28088 = state_28045;
(statearr_28088[(29)] = inst_27992);

return statearr_28088;
})();
if(cljs.core.truth_(inst_27993)){
var statearr_28089_28164 = state_28045__$1;
(statearr_28089_28164[(1)] = (29));

} else {
var statearr_28090_28165 = state_28045__$1;
(statearr_28090_28165[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (25))){
var inst_27963 = (state_28045[(25)]);
var inst_27979 = (state_28045[(2)]);
var inst_27980 = cljs.core.not_empty.call(null,inst_27963);
var state_28045__$1 = (function (){var statearr_28091 = state_28045;
(statearr_28091[(30)] = inst_27979);

return statearr_28091;
})();
if(cljs.core.truth_(inst_27980)){
var statearr_28092_28166 = state_28045__$1;
(statearr_28092_28166[(1)] = (26));

} else {
var statearr_28093_28167 = state_28045__$1;
(statearr_28093_28167[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (34))){
var inst_28014 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
if(cljs.core.truth_(inst_28014)){
var statearr_28094_28168 = state_28045__$1;
(statearr_28094_28168[(1)] = (38));

} else {
var statearr_28095_28169 = state_28045__$1;
(statearr_28095_28169[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (17))){
var state_28045__$1 = state_28045;
var statearr_28096_28170 = state_28045__$1;
(statearr_28096_28170[(2)] = recompile_dependents);

(statearr_28096_28170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (3))){
var state_28045__$1 = state_28045;
var statearr_28097_28171 = state_28045__$1;
(statearr_28097_28171[(2)] = null);

(statearr_28097_28171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (12))){
var inst_27936 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28098_28172 = state_28045__$1;
(statearr_28098_28172[(2)] = inst_27936);

(statearr_28098_28172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (2))){
var inst_27898 = (state_28045[(13)]);
var inst_27905 = cljs.core.seq.call(null,inst_27898);
var inst_27906 = inst_27905;
var inst_27907 = null;
var inst_27908 = (0);
var inst_27909 = (0);
var state_28045__$1 = (function (){var statearr_28099 = state_28045;
(statearr_28099[(7)] = inst_27908);

(statearr_28099[(8)] = inst_27909);

(statearr_28099[(9)] = inst_27907);

(statearr_28099[(10)] = inst_27906);

return statearr_28099;
})();
var statearr_28100_28173 = state_28045__$1;
(statearr_28100_28173[(2)] = null);

(statearr_28100_28173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (23))){
var inst_27965 = (state_28045[(26)]);
var inst_27967 = (state_28045[(23)]);
var inst_27959 = (state_28045[(19)]);
var inst_27962 = (state_28045[(24)]);
var inst_27963 = (state_28045[(25)]);
var inst_27970 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27972 = (function (){var all_files = inst_27959;
var res_SINGLEQUOTE_ = inst_27962;
var res = inst_27963;
var files_not_loaded = inst_27965;
var dependencies_that_loaded = inst_27967;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27965,inst_27967,inst_27959,inst_27962,inst_27963,inst_27970,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27971){
var map__28101 = p__27971;
var map__28101__$1 = ((((!((map__28101 == null)))?((((map__28101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);
var request_url = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27965,inst_27967,inst_27959,inst_27962,inst_27963,inst_27970,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27973 = cljs.core.reverse.call(null,inst_27967);
var inst_27974 = cljs.core.map.call(null,inst_27972,inst_27973);
var inst_27975 = cljs.core.pr_str.call(null,inst_27974);
var inst_27976 = figwheel.client.utils.log.call(null,inst_27975);
var state_28045__$1 = (function (){var statearr_28103 = state_28045;
(statearr_28103[(31)] = inst_27970);

return statearr_28103;
})();
var statearr_28104_28174 = state_28045__$1;
(statearr_28104_28174[(2)] = inst_27976);

(statearr_28104_28174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (35))){
var state_28045__$1 = state_28045;
var statearr_28105_28175 = state_28045__$1;
(statearr_28105_28175[(2)] = true);

(statearr_28105_28175[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (19))){
var inst_27949 = (state_28045[(12)]);
var inst_27955 = figwheel.client.file_reloading.expand_files.call(null,inst_27949);
var state_28045__$1 = state_28045;
var statearr_28106_28176 = state_28045__$1;
(statearr_28106_28176[(2)] = inst_27955);

(statearr_28106_28176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (11))){
var state_28045__$1 = state_28045;
var statearr_28107_28177 = state_28045__$1;
(statearr_28107_28177[(2)] = null);

(statearr_28107_28177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (9))){
var inst_27938 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28108_28178 = state_28045__$1;
(statearr_28108_28178[(2)] = inst_27938);

(statearr_28108_28178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (5))){
var inst_27908 = (state_28045[(7)]);
var inst_27909 = (state_28045[(8)]);
var inst_27911 = (inst_27909 < inst_27908);
var inst_27912 = inst_27911;
var state_28045__$1 = state_28045;
if(cljs.core.truth_(inst_27912)){
var statearr_28109_28179 = state_28045__$1;
(statearr_28109_28179[(1)] = (7));

} else {
var statearr_28110_28180 = state_28045__$1;
(statearr_28110_28180[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (14))){
var inst_27919 = (state_28045[(22)]);
var inst_27928 = cljs.core.first.call(null,inst_27919);
var inst_27929 = figwheel.client.file_reloading.eval_body.call(null,inst_27928,opts);
var inst_27930 = cljs.core.next.call(null,inst_27919);
var inst_27906 = inst_27930;
var inst_27907 = null;
var inst_27908 = (0);
var inst_27909 = (0);
var state_28045__$1 = (function (){var statearr_28111 = state_28045;
(statearr_28111[(32)] = inst_27929);

(statearr_28111[(7)] = inst_27908);

(statearr_28111[(8)] = inst_27909);

(statearr_28111[(9)] = inst_27907);

(statearr_28111[(10)] = inst_27906);

return statearr_28111;
})();
var statearr_28112_28181 = state_28045__$1;
(statearr_28112_28181[(2)] = null);

(statearr_28112_28181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (45))){
var state_28045__$1 = state_28045;
var statearr_28113_28182 = state_28045__$1;
(statearr_28113_28182[(2)] = null);

(statearr_28113_28182[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (26))){
var inst_27965 = (state_28045[(26)]);
var inst_27967 = (state_28045[(23)]);
var inst_27959 = (state_28045[(19)]);
var inst_27962 = (state_28045[(24)]);
var inst_27963 = (state_28045[(25)]);
var inst_27982 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27984 = (function (){var all_files = inst_27959;
var res_SINGLEQUOTE_ = inst_27962;
var res = inst_27963;
var files_not_loaded = inst_27965;
var dependencies_that_loaded = inst_27967;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27965,inst_27967,inst_27959,inst_27962,inst_27963,inst_27982,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27983){
var map__28114 = p__27983;
var map__28114__$1 = ((((!((map__28114 == null)))?((((map__28114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28114):map__28114);
var namespace = cljs.core.get.call(null,map__28114__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27965,inst_27967,inst_27959,inst_27962,inst_27963,inst_27982,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27985 = cljs.core.map.call(null,inst_27984,inst_27963);
var inst_27986 = cljs.core.pr_str.call(null,inst_27985);
var inst_27987 = figwheel.client.utils.log.call(null,inst_27986);
var inst_27988 = (function (){var all_files = inst_27959;
var res_SINGLEQUOTE_ = inst_27962;
var res = inst_27963;
var files_not_loaded = inst_27965;
var dependencies_that_loaded = inst_27967;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27965,inst_27967,inst_27959,inst_27962,inst_27963,inst_27982,inst_27984,inst_27985,inst_27986,inst_27987,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27965,inst_27967,inst_27959,inst_27962,inst_27963,inst_27982,inst_27984,inst_27985,inst_27986,inst_27987,state_val_28046,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27989 = setTimeout(inst_27988,(10));
var state_28045__$1 = (function (){var statearr_28116 = state_28045;
(statearr_28116[(33)] = inst_27987);

(statearr_28116[(34)] = inst_27982);

return statearr_28116;
})();
var statearr_28117_28183 = state_28045__$1;
(statearr_28117_28183[(2)] = inst_27989);

(statearr_28117_28183[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (16))){
var state_28045__$1 = state_28045;
var statearr_28118_28184 = state_28045__$1;
(statearr_28118_28184[(2)] = reload_dependents);

(statearr_28118_28184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (38))){
var inst_27999 = (state_28045[(16)]);
var inst_28016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27999);
var state_28045__$1 = state_28045;
var statearr_28119_28185 = state_28045__$1;
(statearr_28119_28185[(2)] = inst_28016);

(statearr_28119_28185[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (30))){
var state_28045__$1 = state_28045;
var statearr_28120_28186 = state_28045__$1;
(statearr_28120_28186[(2)] = null);

(statearr_28120_28186[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (10))){
var inst_27919 = (state_28045[(22)]);
var inst_27921 = cljs.core.chunked_seq_QMARK_.call(null,inst_27919);
var state_28045__$1 = state_28045;
if(inst_27921){
var statearr_28121_28187 = state_28045__$1;
(statearr_28121_28187[(1)] = (13));

} else {
var statearr_28122_28188 = state_28045__$1;
(statearr_28122_28188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (18))){
var inst_27953 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
if(cljs.core.truth_(inst_27953)){
var statearr_28123_28189 = state_28045__$1;
(statearr_28123_28189[(1)] = (19));

} else {
var statearr_28124_28190 = state_28045__$1;
(statearr_28124_28190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (42))){
var state_28045__$1 = state_28045;
var statearr_28125_28191 = state_28045__$1;
(statearr_28125_28191[(2)] = null);

(statearr_28125_28191[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (37))){
var inst_28011 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28126_28192 = state_28045__$1;
(statearr_28126_28192[(2)] = inst_28011);

(statearr_28126_28192[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (8))){
var inst_27919 = (state_28045[(22)]);
var inst_27906 = (state_28045[(10)]);
var inst_27919__$1 = cljs.core.seq.call(null,inst_27906);
var state_28045__$1 = (function (){var statearr_28127 = state_28045;
(statearr_28127[(22)] = inst_27919__$1);

return statearr_28127;
})();
if(inst_27919__$1){
var statearr_28128_28193 = state_28045__$1;
(statearr_28128_28193[(1)] = (10));

} else {
var statearr_28129_28194 = state_28045__$1;
(statearr_28129_28194[(1)] = (11));

}

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
});})(c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22045__auto__,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto____0 = (function (){
var statearr_28133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28133[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto__);

(statearr_28133[(1)] = (1));

return statearr_28133;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto____1 = (function (state_28045){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_28045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e28134){if((e28134 instanceof Object)){
var ex__22049__auto__ = e28134;
var statearr_28135_28195 = state_28045;
(statearr_28135_28195[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28196 = state_28045;
state_28045 = G__28196;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto__ = function(state_28045){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto____1.call(this,state_28045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22159__auto__ = (function (){var statearr_28136 = f__22158__auto__.call(null);
(statearr_28136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_28136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__,map__27891,map__27891__$1,opts,before_jsload,on_jsload,reload_dependents,map__27892,map__27892__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22157__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28199,link){
var map__28202 = p__28199;
var map__28202__$1 = ((((!((map__28202 == null)))?((((map__28202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28202):map__28202);
var file = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28202,map__28202__$1,file){
return (function (p1__28197_SHARP_,p2__28198_SHARP_){
if(cljs.core._EQ_.call(null,p1__28197_SHARP_,p2__28198_SHARP_)){
return p1__28197_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28202,map__28202__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28208){
var map__28209 = p__28208;
var map__28209__$1 = ((((!((map__28209 == null)))?((((map__28209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28209):map__28209);
var match_length = cljs.core.get.call(null,map__28209__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28209__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28204_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28204_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28211 = [];
var len__19515__auto___28214 = arguments.length;
var i__19516__auto___28215 = (0);
while(true){
if((i__19516__auto___28215 < len__19515__auto___28214)){
args28211.push((arguments[i__19516__auto___28215]));

var G__28216 = (i__19516__auto___28215 + (1));
i__19516__auto___28215 = G__28216;
continue;
} else {
}
break;
}

var G__28213 = args28211.length;
switch (G__28213) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28211.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28218_SHARP_,p2__28219_SHARP_){
return cljs.core.assoc.call(null,p1__28218_SHARP_,cljs.core.get.call(null,p2__28219_SHARP_,key),p2__28219_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28220){
var map__28223 = p__28220;
var map__28223__$1 = ((((!((map__28223 == null)))?((((map__28223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28223):map__28223);
var f_data = map__28223__$1;
var file = cljs.core.get.call(null,map__28223__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28225,files_msg){
var map__28232 = p__28225;
var map__28232__$1 = ((((!((map__28232 == null)))?((((map__28232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28232):map__28232);
var opts = map__28232__$1;
var on_cssload = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28234_28238 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28235_28239 = null;
var count__28236_28240 = (0);
var i__28237_28241 = (0);
while(true){
if((i__28237_28241 < count__28236_28240)){
var f_28242 = cljs.core._nth.call(null,chunk__28235_28239,i__28237_28241);
figwheel.client.file_reloading.reload_css_file.call(null,f_28242);

var G__28243 = seq__28234_28238;
var G__28244 = chunk__28235_28239;
var G__28245 = count__28236_28240;
var G__28246 = (i__28237_28241 + (1));
seq__28234_28238 = G__28243;
chunk__28235_28239 = G__28244;
count__28236_28240 = G__28245;
i__28237_28241 = G__28246;
continue;
} else {
var temp__4657__auto___28247 = cljs.core.seq.call(null,seq__28234_28238);
if(temp__4657__auto___28247){
var seq__28234_28248__$1 = temp__4657__auto___28247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28234_28248__$1)){
var c__19256__auto___28249 = cljs.core.chunk_first.call(null,seq__28234_28248__$1);
var G__28250 = cljs.core.chunk_rest.call(null,seq__28234_28248__$1);
var G__28251 = c__19256__auto___28249;
var G__28252 = cljs.core.count.call(null,c__19256__auto___28249);
var G__28253 = (0);
seq__28234_28238 = G__28250;
chunk__28235_28239 = G__28251;
count__28236_28240 = G__28252;
i__28237_28241 = G__28253;
continue;
} else {
var f_28254 = cljs.core.first.call(null,seq__28234_28248__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28254);

var G__28255 = cljs.core.next.call(null,seq__28234_28248__$1);
var G__28256 = null;
var G__28257 = (0);
var G__28258 = (0);
seq__28234_28238 = G__28255;
chunk__28235_28239 = G__28256;
count__28236_28240 = G__28257;
i__28237_28241 = G__28258;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28232,map__28232__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28232,map__28232__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467412222176