// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28955 = cljs.core._EQ_;
var expr__28956 = (function (){var or__18445__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28959){if((e28959 instanceof Error)){
var e = e28959;
return false;
} else {
throw e28959;

}
}})();
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28955.call(null,"true",expr__28956))){
return true;
} else {
if(cljs.core.truth_(pred__28955.call(null,"false",expr__28956))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28956)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28961){if((e28961 instanceof Error)){
var e = e28961;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28961;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19522__auto__ = [];
var len__19515__auto___28963 = arguments.length;
var i__19516__auto___28964 = (0);
while(true){
if((i__19516__auto___28964 < len__19515__auto___28963)){
args__19522__auto__.push((arguments[i__19516__auto___28964]));

var G__28965 = (i__19516__auto___28964 + (1));
i__19516__auto___28964 = G__28965;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((0) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19523__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28962){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28962));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28966){
var map__28969 = p__28966;
var map__28969__$1 = ((((!((map__28969 == null)))?((((map__28969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28969):map__28969);
var message = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18445__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18433__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18433__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18433__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22157__auto___29131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___29131,ch){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___29131,ch){
return (function (state_29100){
var state_val_29101 = (state_29100[(1)]);
if((state_val_29101 === (7))){
var inst_29096 = (state_29100[(2)]);
var state_29100__$1 = state_29100;
var statearr_29102_29132 = state_29100__$1;
(statearr_29102_29132[(2)] = inst_29096);

(statearr_29102_29132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (1))){
var state_29100__$1 = state_29100;
var statearr_29103_29133 = state_29100__$1;
(statearr_29103_29133[(2)] = null);

(statearr_29103_29133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (4))){
var inst_29053 = (state_29100[(7)]);
var inst_29053__$1 = (state_29100[(2)]);
var state_29100__$1 = (function (){var statearr_29104 = state_29100;
(statearr_29104[(7)] = inst_29053__$1);

return statearr_29104;
})();
if(cljs.core.truth_(inst_29053__$1)){
var statearr_29105_29134 = state_29100__$1;
(statearr_29105_29134[(1)] = (5));

} else {
var statearr_29106_29135 = state_29100__$1;
(statearr_29106_29135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (15))){
var inst_29060 = (state_29100[(8)]);
var inst_29075 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29060);
var inst_29076 = cljs.core.first.call(null,inst_29075);
var inst_29077 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29076);
var inst_29078 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29077)].join('');
var inst_29079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29078);
var state_29100__$1 = state_29100;
var statearr_29107_29136 = state_29100__$1;
(statearr_29107_29136[(2)] = inst_29079);

(statearr_29107_29136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (13))){
var inst_29084 = (state_29100[(2)]);
var state_29100__$1 = state_29100;
var statearr_29108_29137 = state_29100__$1;
(statearr_29108_29137[(2)] = inst_29084);

(statearr_29108_29137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (6))){
var state_29100__$1 = state_29100;
var statearr_29109_29138 = state_29100__$1;
(statearr_29109_29138[(2)] = null);

(statearr_29109_29138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (17))){
var inst_29082 = (state_29100[(2)]);
var state_29100__$1 = state_29100;
var statearr_29110_29139 = state_29100__$1;
(statearr_29110_29139[(2)] = inst_29082);

(statearr_29110_29139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (3))){
var inst_29098 = (state_29100[(2)]);
var state_29100__$1 = state_29100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29100__$1,inst_29098);
} else {
if((state_val_29101 === (12))){
var inst_29059 = (state_29100[(9)]);
var inst_29073 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29059,opts);
var state_29100__$1 = state_29100;
if(cljs.core.truth_(inst_29073)){
var statearr_29111_29140 = state_29100__$1;
(statearr_29111_29140[(1)] = (15));

} else {
var statearr_29112_29141 = state_29100__$1;
(statearr_29112_29141[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (2))){
var state_29100__$1 = state_29100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29100__$1,(4),ch);
} else {
if((state_val_29101 === (11))){
var inst_29060 = (state_29100[(8)]);
var inst_29065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29066 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29060);
var inst_29067 = cljs.core.async.timeout.call(null,(1000));
var inst_29068 = [inst_29066,inst_29067];
var inst_29069 = (new cljs.core.PersistentVector(null,2,(5),inst_29065,inst_29068,null));
var state_29100__$1 = state_29100;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29100__$1,(14),inst_29069);
} else {
if((state_val_29101 === (9))){
var inst_29060 = (state_29100[(8)]);
var inst_29086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29087 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29060);
var inst_29088 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29087);
var inst_29089 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29088)].join('');
var inst_29090 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29089);
var state_29100__$1 = (function (){var statearr_29113 = state_29100;
(statearr_29113[(10)] = inst_29086);

return statearr_29113;
})();
var statearr_29114_29142 = state_29100__$1;
(statearr_29114_29142[(2)] = inst_29090);

(statearr_29114_29142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (5))){
var inst_29053 = (state_29100[(7)]);
var inst_29055 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29056 = (new cljs.core.PersistentArrayMap(null,2,inst_29055,null));
var inst_29057 = (new cljs.core.PersistentHashSet(null,inst_29056,null));
var inst_29058 = figwheel.client.focus_msgs.call(null,inst_29057,inst_29053);
var inst_29059 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29058);
var inst_29060 = cljs.core.first.call(null,inst_29058);
var inst_29061 = figwheel.client.autoload_QMARK_.call(null);
var state_29100__$1 = (function (){var statearr_29115 = state_29100;
(statearr_29115[(8)] = inst_29060);

(statearr_29115[(9)] = inst_29059);

return statearr_29115;
})();
if(cljs.core.truth_(inst_29061)){
var statearr_29116_29143 = state_29100__$1;
(statearr_29116_29143[(1)] = (8));

} else {
var statearr_29117_29144 = state_29100__$1;
(statearr_29117_29144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (14))){
var inst_29071 = (state_29100[(2)]);
var state_29100__$1 = state_29100;
var statearr_29118_29145 = state_29100__$1;
(statearr_29118_29145[(2)] = inst_29071);

(statearr_29118_29145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (16))){
var state_29100__$1 = state_29100;
var statearr_29119_29146 = state_29100__$1;
(statearr_29119_29146[(2)] = null);

(statearr_29119_29146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (10))){
var inst_29092 = (state_29100[(2)]);
var state_29100__$1 = (function (){var statearr_29120 = state_29100;
(statearr_29120[(11)] = inst_29092);

return statearr_29120;
})();
var statearr_29121_29147 = state_29100__$1;
(statearr_29121_29147[(2)] = null);

(statearr_29121_29147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (8))){
var inst_29059 = (state_29100[(9)]);
var inst_29063 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29059,opts);
var state_29100__$1 = state_29100;
if(cljs.core.truth_(inst_29063)){
var statearr_29122_29148 = state_29100__$1;
(statearr_29122_29148[(1)] = (11));

} else {
var statearr_29123_29149 = state_29100__$1;
(statearr_29123_29149[(1)] = (12));

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
});})(c__22157__auto___29131,ch))
;
return ((function (switch__22045__auto__,c__22157__auto___29131,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22046__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22046__auto____0 = (function (){
var statearr_29127 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29127[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22046__auto__);

(statearr_29127[(1)] = (1));

return statearr_29127;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22046__auto____1 = (function (state_29100){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_29100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e29128){if((e29128 instanceof Object)){
var ex__22049__auto__ = e29128;
var statearr_29129_29150 = state_29100;
(statearr_29129_29150[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29151 = state_29100;
state_29100 = G__29151;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22046__auto__ = function(state_29100){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22046__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22046__auto____1.call(this,state_29100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22046__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22046__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___29131,ch))
})();
var state__22159__auto__ = (function (){var statearr_29130 = f__22158__auto__.call(null);
(statearr_29130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___29131);

return statearr_29130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___29131,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29152_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29152_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29159 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29159){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29158 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29158;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29157;
}}catch (e29156){if((e29156 instanceof Error)){
var e = e29156;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29159], null));
} else {
var e = e29156;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29159))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29160){
var map__29167 = p__29160;
var map__29167__$1 = ((((!((map__29167 == null)))?((((map__29167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29167):map__29167);
var opts = map__29167__$1;
var build_id = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29167,map__29167__$1,opts,build_id){
return (function (p__29169){
var vec__29170 = p__29169;
var map__29171 = cljs.core.nth.call(null,vec__29170,(0),null);
var map__29171__$1 = ((((!((map__29171 == null)))?((((map__29171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29171):map__29171);
var msg = map__29171__$1;
var msg_name = cljs.core.get.call(null,map__29171__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29170,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29170,map__29171,map__29171__$1,msg,msg_name,_,map__29167,map__29167__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29170,map__29171,map__29171__$1,msg,msg_name,_,map__29167,map__29167__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29167,map__29167__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29177){
var vec__29178 = p__29177;
var map__29179 = cljs.core.nth.call(null,vec__29178,(0),null);
var map__29179__$1 = ((((!((map__29179 == null)))?((((map__29179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29179):map__29179);
var msg = map__29179__$1;
var msg_name = cljs.core.get.call(null,map__29179__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29178,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29181){
var map__29191 = p__29181;
var map__29191__$1 = ((((!((map__29191 == null)))?((((map__29191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var on_compile_warning = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29191,map__29191__$1,on_compile_warning,on_compile_fail){
return (function (p__29193){
var vec__29194 = p__29193;
var map__29195 = cljs.core.nth.call(null,vec__29194,(0),null);
var map__29195__$1 = ((((!((map__29195 == null)))?((((map__29195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);
var msg = map__29195__$1;
var msg_name = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29194,(1));
var pred__29197 = cljs.core._EQ_;
var expr__29198 = msg_name;
if(cljs.core.truth_(pred__29197.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29198))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29197.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29198))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29191,map__29191__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__,msg_hist,msg_names,msg){
return (function (state_29406){
var state_val_29407 = (state_29406[(1)]);
if((state_val_29407 === (7))){
var inst_29334 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29334)){
var statearr_29408_29454 = state_29406__$1;
(statearr_29408_29454[(1)] = (8));

} else {
var statearr_29409_29455 = state_29406__$1;
(statearr_29409_29455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (20))){
var inst_29400 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29410_29456 = state_29406__$1;
(statearr_29410_29456[(2)] = inst_29400);

(statearr_29410_29456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (27))){
var inst_29396 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29411_29457 = state_29406__$1;
(statearr_29411_29457[(2)] = inst_29396);

(statearr_29411_29457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (1))){
var inst_29327 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29327)){
var statearr_29412_29458 = state_29406__$1;
(statearr_29412_29458[(1)] = (2));

} else {
var statearr_29413_29459 = state_29406__$1;
(statearr_29413_29459[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (24))){
var inst_29398 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29414_29460 = state_29406__$1;
(statearr_29414_29460[(2)] = inst_29398);

(statearr_29414_29460[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (4))){
var inst_29404 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29406__$1,inst_29404);
} else {
if((state_val_29407 === (15))){
var inst_29402 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29415_29461 = state_29406__$1;
(statearr_29415_29461[(2)] = inst_29402);

(statearr_29415_29461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (21))){
var inst_29361 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29416_29462 = state_29406__$1;
(statearr_29416_29462[(2)] = inst_29361);

(statearr_29416_29462[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (31))){
var inst_29385 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29385)){
var statearr_29417_29463 = state_29406__$1;
(statearr_29417_29463[(1)] = (34));

} else {
var statearr_29418_29464 = state_29406__$1;
(statearr_29418_29464[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (32))){
var inst_29394 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29419_29465 = state_29406__$1;
(statearr_29419_29465[(2)] = inst_29394);

(statearr_29419_29465[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (33))){
var inst_29383 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29420_29466 = state_29406__$1;
(statearr_29420_29466[(2)] = inst_29383);

(statearr_29420_29466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (13))){
var inst_29348 = figwheel.client.heads_up.clear.call(null);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(16),inst_29348);
} else {
if((state_val_29407 === (22))){
var inst_29365 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29366 = figwheel.client.heads_up.append_message.call(null,inst_29365);
var state_29406__$1 = state_29406;
var statearr_29421_29467 = state_29406__$1;
(statearr_29421_29467[(2)] = inst_29366);

(statearr_29421_29467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (36))){
var inst_29392 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29422_29468 = state_29406__$1;
(statearr_29422_29468[(2)] = inst_29392);

(statearr_29422_29468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (29))){
var inst_29376 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29423_29469 = state_29406__$1;
(statearr_29423_29469[(2)] = inst_29376);

(statearr_29423_29469[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (6))){
var inst_29329 = (state_29406[(7)]);
var state_29406__$1 = state_29406;
var statearr_29424_29470 = state_29406__$1;
(statearr_29424_29470[(2)] = inst_29329);

(statearr_29424_29470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (28))){
var inst_29372 = (state_29406[(2)]);
var inst_29373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29374 = figwheel.client.heads_up.display_warning.call(null,inst_29373);
var state_29406__$1 = (function (){var statearr_29425 = state_29406;
(statearr_29425[(8)] = inst_29372);

return statearr_29425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(29),inst_29374);
} else {
if((state_val_29407 === (25))){
var inst_29370 = figwheel.client.heads_up.clear.call(null);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(28),inst_29370);
} else {
if((state_val_29407 === (34))){
var inst_29387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(37),inst_29387);
} else {
if((state_val_29407 === (17))){
var inst_29354 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29426_29471 = state_29406__$1;
(statearr_29426_29471[(2)] = inst_29354);

(statearr_29426_29471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (3))){
var inst_29346 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29346)){
var statearr_29427_29472 = state_29406__$1;
(statearr_29427_29472[(1)] = (13));

} else {
var statearr_29428_29473 = state_29406__$1;
(statearr_29428_29473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (12))){
var inst_29342 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29429_29474 = state_29406__$1;
(statearr_29429_29474[(2)] = inst_29342);

(statearr_29429_29474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (2))){
var inst_29329 = (state_29406[(7)]);
var inst_29329__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29406__$1 = (function (){var statearr_29430 = state_29406;
(statearr_29430[(7)] = inst_29329__$1);

return statearr_29430;
})();
if(cljs.core.truth_(inst_29329__$1)){
var statearr_29431_29475 = state_29406__$1;
(statearr_29431_29475[(1)] = (5));

} else {
var statearr_29432_29476 = state_29406__$1;
(statearr_29432_29476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (23))){
var inst_29368 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29368)){
var statearr_29433_29477 = state_29406__$1;
(statearr_29433_29477[(1)] = (25));

} else {
var statearr_29434_29478 = state_29406__$1;
(statearr_29434_29478[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (35))){
var state_29406__$1 = state_29406;
var statearr_29435_29479 = state_29406__$1;
(statearr_29435_29479[(2)] = null);

(statearr_29435_29479[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (19))){
var inst_29363 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29363)){
var statearr_29436_29480 = state_29406__$1;
(statearr_29436_29480[(1)] = (22));

} else {
var statearr_29437_29481 = state_29406__$1;
(statearr_29437_29481[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (11))){
var inst_29338 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29438_29482 = state_29406__$1;
(statearr_29438_29482[(2)] = inst_29338);

(statearr_29438_29482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (9))){
var inst_29340 = figwheel.client.heads_up.clear.call(null);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(12),inst_29340);
} else {
if((state_val_29407 === (5))){
var inst_29331 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29406__$1 = state_29406;
var statearr_29439_29483 = state_29406__$1;
(statearr_29439_29483[(2)] = inst_29331);

(statearr_29439_29483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (14))){
var inst_29356 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29356)){
var statearr_29440_29484 = state_29406__$1;
(statearr_29440_29484[(1)] = (18));

} else {
var statearr_29441_29485 = state_29406__$1;
(statearr_29441_29485[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (26))){
var inst_29378 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29378)){
var statearr_29442_29486 = state_29406__$1;
(statearr_29442_29486[(1)] = (30));

} else {
var statearr_29443_29487 = state_29406__$1;
(statearr_29443_29487[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (16))){
var inst_29350 = (state_29406[(2)]);
var inst_29351 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29352 = figwheel.client.heads_up.display_exception.call(null,inst_29351);
var state_29406__$1 = (function (){var statearr_29444 = state_29406;
(statearr_29444[(9)] = inst_29350);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(17),inst_29352);
} else {
if((state_val_29407 === (30))){
var inst_29380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29381 = figwheel.client.heads_up.display_warning.call(null,inst_29380);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(33),inst_29381);
} else {
if((state_val_29407 === (10))){
var inst_29344 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29445_29488 = state_29406__$1;
(statearr_29445_29488[(2)] = inst_29344);

(statearr_29445_29488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (18))){
var inst_29358 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29359 = figwheel.client.heads_up.display_exception.call(null,inst_29358);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(21),inst_29359);
} else {
if((state_val_29407 === (37))){
var inst_29389 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29446_29489 = state_29406__$1;
(statearr_29446_29489[(2)] = inst_29389);

(statearr_29446_29489[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (8))){
var inst_29336 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(11),inst_29336);
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
});})(c__22157__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22045__auto__,c__22157__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto____0 = (function (){
var statearr_29450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29450[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto__);

(statearr_29450[(1)] = (1));

return statearr_29450;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto____1 = (function (state_29406){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_29406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e29451){if((e29451 instanceof Object)){
var ex__22049__auto__ = e29451;
var statearr_29452_29490 = state_29406;
(statearr_29452_29490[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29491 = state_29406;
state_29406 = G__29491;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto__ = function(state_29406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto____1.call(this,state_29406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__,msg_hist,msg_names,msg))
})();
var state__22159__auto__ = (function (){var statearr_29453 = f__22158__auto__.call(null);
(statearr_29453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_29453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__,msg_hist,msg_names,msg))
);

return c__22157__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22157__auto___29554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___29554,ch){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___29554,ch){
return (function (state_29537){
var state_val_29538 = (state_29537[(1)]);
if((state_val_29538 === (1))){
var state_29537__$1 = state_29537;
var statearr_29539_29555 = state_29537__$1;
(statearr_29539_29555[(2)] = null);

(statearr_29539_29555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (2))){
var state_29537__$1 = state_29537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29537__$1,(4),ch);
} else {
if((state_val_29538 === (3))){
var inst_29535 = (state_29537[(2)]);
var state_29537__$1 = state_29537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29537__$1,inst_29535);
} else {
if((state_val_29538 === (4))){
var inst_29525 = (state_29537[(7)]);
var inst_29525__$1 = (state_29537[(2)]);
var state_29537__$1 = (function (){var statearr_29540 = state_29537;
(statearr_29540[(7)] = inst_29525__$1);

return statearr_29540;
})();
if(cljs.core.truth_(inst_29525__$1)){
var statearr_29541_29556 = state_29537__$1;
(statearr_29541_29556[(1)] = (5));

} else {
var statearr_29542_29557 = state_29537__$1;
(statearr_29542_29557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (5))){
var inst_29525 = (state_29537[(7)]);
var inst_29527 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29525);
var state_29537__$1 = state_29537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29537__$1,(8),inst_29527);
} else {
if((state_val_29538 === (6))){
var state_29537__$1 = state_29537;
var statearr_29543_29558 = state_29537__$1;
(statearr_29543_29558[(2)] = null);

(statearr_29543_29558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (7))){
var inst_29533 = (state_29537[(2)]);
var state_29537__$1 = state_29537;
var statearr_29544_29559 = state_29537__$1;
(statearr_29544_29559[(2)] = inst_29533);

(statearr_29544_29559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (8))){
var inst_29529 = (state_29537[(2)]);
var state_29537__$1 = (function (){var statearr_29545 = state_29537;
(statearr_29545[(8)] = inst_29529);

return statearr_29545;
})();
var statearr_29546_29560 = state_29537__$1;
(statearr_29546_29560[(2)] = null);

(statearr_29546_29560[(1)] = (2));


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
});})(c__22157__auto___29554,ch))
;
return ((function (switch__22045__auto__,c__22157__auto___29554,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22046__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22046__auto____0 = (function (){
var statearr_29550 = [null,null,null,null,null,null,null,null,null];
(statearr_29550[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22046__auto__);

(statearr_29550[(1)] = (1));

return statearr_29550;
});
var figwheel$client$heads_up_plugin_$_state_machine__22046__auto____1 = (function (state_29537){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_29537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e29551){if((e29551 instanceof Object)){
var ex__22049__auto__ = e29551;
var statearr_29552_29561 = state_29537;
(statearr_29552_29561[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29562 = state_29537;
state_29537 = G__29562;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22046__auto__ = function(state_29537){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22046__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22046__auto____1.call(this,state_29537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22046__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22046__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___29554,ch))
})();
var state__22159__auto__ = (function (){var statearr_29553 = f__22158__auto__.call(null);
(statearr_29553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___29554);

return statearr_29553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___29554,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__){
return (function (state_29583){
var state_val_29584 = (state_29583[(1)]);
if((state_val_29584 === (1))){
var inst_29578 = cljs.core.async.timeout.call(null,(3000));
var state_29583__$1 = state_29583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29583__$1,(2),inst_29578);
} else {
if((state_val_29584 === (2))){
var inst_29580 = (state_29583[(2)]);
var inst_29581 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29583__$1 = (function (){var statearr_29585 = state_29583;
(statearr_29585[(7)] = inst_29580);

return statearr_29585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29583__$1,inst_29581);
} else {
return null;
}
}
});})(c__22157__auto__))
;
return ((function (switch__22045__auto__,c__22157__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22046__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22046__auto____0 = (function (){
var statearr_29589 = [null,null,null,null,null,null,null,null];
(statearr_29589[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22046__auto__);

(statearr_29589[(1)] = (1));

return statearr_29589;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22046__auto____1 = (function (state_29583){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_29583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e29590){if((e29590 instanceof Object)){
var ex__22049__auto__ = e29590;
var statearr_29591_29593 = state_29583;
(statearr_29591_29593[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29594 = state_29583;
state_29583 = G__29594;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22046__auto__ = function(state_29583){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22046__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22046__auto____1.call(this,state_29583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22046__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22046__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__))
})();
var state__22159__auto__ = (function (){var statearr_29592 = f__22158__auto__.call(null);
(statearr_29592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_29592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__))
);

return c__22157__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29595){
var map__29602 = p__29595;
var map__29602__$1 = ((((!((map__29602 == null)))?((((map__29602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29602):map__29602);
var ed = map__29602__$1;
var formatted_exception = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29604_29608 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29605_29609 = null;
var count__29606_29610 = (0);
var i__29607_29611 = (0);
while(true){
if((i__29607_29611 < count__29606_29610)){
var msg_29612 = cljs.core._nth.call(null,chunk__29605_29609,i__29607_29611);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29612);

var G__29613 = seq__29604_29608;
var G__29614 = chunk__29605_29609;
var G__29615 = count__29606_29610;
var G__29616 = (i__29607_29611 + (1));
seq__29604_29608 = G__29613;
chunk__29605_29609 = G__29614;
count__29606_29610 = G__29615;
i__29607_29611 = G__29616;
continue;
} else {
var temp__4657__auto___29617 = cljs.core.seq.call(null,seq__29604_29608);
if(temp__4657__auto___29617){
var seq__29604_29618__$1 = temp__4657__auto___29617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29604_29618__$1)){
var c__19256__auto___29619 = cljs.core.chunk_first.call(null,seq__29604_29618__$1);
var G__29620 = cljs.core.chunk_rest.call(null,seq__29604_29618__$1);
var G__29621 = c__19256__auto___29619;
var G__29622 = cljs.core.count.call(null,c__19256__auto___29619);
var G__29623 = (0);
seq__29604_29608 = G__29620;
chunk__29605_29609 = G__29621;
count__29606_29610 = G__29622;
i__29607_29611 = G__29623;
continue;
} else {
var msg_29624 = cljs.core.first.call(null,seq__29604_29618__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29624);

var G__29625 = cljs.core.next.call(null,seq__29604_29618__$1);
var G__29626 = null;
var G__29627 = (0);
var G__29628 = (0);
seq__29604_29608 = G__29625;
chunk__29605_29609 = G__29626;
count__29606_29610 = G__29627;
i__29607_29611 = G__29628;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29629){
var map__29632 = p__29629;
var map__29632__$1 = ((((!((map__29632 == null)))?((((map__29632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29632):map__29632);
var w = map__29632__$1;
var message = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18433__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18433__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18433__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29640 = cljs.core.seq.call(null,plugins);
var chunk__29641 = null;
var count__29642 = (0);
var i__29643 = (0);
while(true){
if((i__29643 < count__29642)){
var vec__29644 = cljs.core._nth.call(null,chunk__29641,i__29643);
var k = cljs.core.nth.call(null,vec__29644,(0),null);
var plugin = cljs.core.nth.call(null,vec__29644,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29646 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29640,chunk__29641,count__29642,i__29643,pl_29646,vec__29644,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29646.call(null,msg_hist);
});})(seq__29640,chunk__29641,count__29642,i__29643,pl_29646,vec__29644,k,plugin))
);
} else {
}

var G__29647 = seq__29640;
var G__29648 = chunk__29641;
var G__29649 = count__29642;
var G__29650 = (i__29643 + (1));
seq__29640 = G__29647;
chunk__29641 = G__29648;
count__29642 = G__29649;
i__29643 = G__29650;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29640);
if(temp__4657__auto__){
var seq__29640__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29640__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__29640__$1);
var G__29651 = cljs.core.chunk_rest.call(null,seq__29640__$1);
var G__29652 = c__19256__auto__;
var G__29653 = cljs.core.count.call(null,c__19256__auto__);
var G__29654 = (0);
seq__29640 = G__29651;
chunk__29641 = G__29652;
count__29642 = G__29653;
i__29643 = G__29654;
continue;
} else {
var vec__29645 = cljs.core.first.call(null,seq__29640__$1);
var k = cljs.core.nth.call(null,vec__29645,(0),null);
var plugin = cljs.core.nth.call(null,vec__29645,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29655 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29640,chunk__29641,count__29642,i__29643,pl_29655,vec__29645,k,plugin,seq__29640__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29655.call(null,msg_hist);
});})(seq__29640,chunk__29641,count__29642,i__29643,pl_29655,vec__29645,k,plugin,seq__29640__$1,temp__4657__auto__))
);
} else {
}

var G__29656 = cljs.core.next.call(null,seq__29640__$1);
var G__29657 = null;
var G__29658 = (0);
var G__29659 = (0);
seq__29640 = G__29656;
chunk__29641 = G__29657;
count__29642 = G__29658;
i__29643 = G__29659;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29660 = [];
var len__19515__auto___29663 = arguments.length;
var i__19516__auto___29664 = (0);
while(true){
if((i__19516__auto___29664 < len__19515__auto___29663)){
args29660.push((arguments[i__19516__auto___29664]));

var G__29665 = (i__19516__auto___29664 + (1));
i__19516__auto___29664 = G__29665;
continue;
} else {
}
break;
}

var G__29662 = args29660.length;
switch (G__29662) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29660.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19522__auto__ = [];
var len__19515__auto___29671 = arguments.length;
var i__19516__auto___29672 = (0);
while(true){
if((i__19516__auto___29672 < len__19515__auto___29671)){
args__19522__auto__.push((arguments[i__19516__auto___29672]));

var G__29673 = (i__19516__auto___29672 + (1));
i__19516__auto___29672 = G__29673;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((0) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19523__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29668){
var map__29669 = p__29668;
var map__29669__$1 = ((((!((map__29669 == null)))?((((map__29669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29669):map__29669);
var opts = map__29669__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29667){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29667));
});

//# sourceMappingURL=client.js.map?rel=1467412223420