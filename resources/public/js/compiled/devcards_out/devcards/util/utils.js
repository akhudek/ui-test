// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__19431__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20717_20719 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20718_20720 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20717_20719,_STAR_print_fn_STAR_20718_20720,sb__19431__auto__){
return (function (x__19432__auto__){
return sb__19431__auto__.append(x__19432__auto__);
});})(_STAR_print_newline_STAR_20717_20719,_STAR_print_fn_STAR_20718_20720,sb__19431__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20718_20720;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20717_20719;
}
return [cljs.core.str(sb__19431__auto__)].join('');
}catch (e20715){if((e20715 instanceof Error)){
var e1 = e20715;
try{return obj.toString();
}catch (e20716){if((e20716 instanceof Error)){
var e2 = e20716;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e20716;

}
}} else {
throw e20715;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_20722 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_20722;
}});

//# sourceMappingURL=utils.js.map?rel=1467412216270