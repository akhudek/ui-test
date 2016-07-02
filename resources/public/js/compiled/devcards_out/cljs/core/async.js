// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22202 = [];
var len__19515__auto___22208 = arguments.length;
var i__19516__auto___22209 = (0);
while(true){
if((i__19516__auto___22209 < len__19515__auto___22208)){
args22202.push((arguments[i__19516__auto___22209]));

var G__22210 = (i__19516__auto___22209 + (1));
i__19516__auto___22209 = G__22210;
continue;
} else {
}
break;
}

var G__22204 = args22202.length;
switch (G__22204) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22202.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22205 = (function (f,blockable,meta22206){
this.f = f;
this.blockable = blockable;
this.meta22206 = meta22206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22207,meta22206__$1){
var self__ = this;
var _22207__$1 = this;
return (new cljs.core.async.t_cljs$core$async22205(self__.f,self__.blockable,meta22206__$1));
});

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22207){
var self__ = this;
var _22207__$1 = this;
return self__.meta22206;
});

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22206","meta22206",1317456138,null)], null);
});

cljs.core.async.t_cljs$core$async22205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22205";

cljs.core.async.t_cljs$core$async22205.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async22205");
});

cljs.core.async.__GT_t_cljs$core$async22205 = (function cljs$core$async$__GT_t_cljs$core$async22205(f__$1,blockable__$1,meta22206){
return (new cljs.core.async.t_cljs$core$async22205(f__$1,blockable__$1,meta22206));
});

}

return (new cljs.core.async.t_cljs$core$async22205(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22214 = [];
var len__19515__auto___22217 = arguments.length;
var i__19516__auto___22218 = (0);
while(true){
if((i__19516__auto___22218 < len__19515__auto___22217)){
args22214.push((arguments[i__19516__auto___22218]));

var G__22219 = (i__19516__auto___22218 + (1));
i__19516__auto___22218 = G__22219;
continue;
} else {
}
break;
}

var G__22216 = args22214.length;
switch (G__22216) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22214.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22221 = [];
var len__19515__auto___22224 = arguments.length;
var i__19516__auto___22225 = (0);
while(true){
if((i__19516__auto___22225 < len__19515__auto___22224)){
args22221.push((arguments[i__19516__auto___22225]));

var G__22226 = (i__19516__auto___22225 + (1));
i__19516__auto___22225 = G__22226;
continue;
} else {
}
break;
}

var G__22223 = args22221.length;
switch (G__22223) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22221.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22228 = [];
var len__19515__auto___22231 = arguments.length;
var i__19516__auto___22232 = (0);
while(true){
if((i__19516__auto___22232 < len__19515__auto___22231)){
args22228.push((arguments[i__19516__auto___22232]));

var G__22233 = (i__19516__auto___22232 + (1));
i__19516__auto___22232 = G__22233;
continue;
} else {
}
break;
}

var G__22230 = args22228.length;
switch (G__22230) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22228.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22235 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22235);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22235,ret){
return (function (){
return fn1.call(null,val_22235);
});})(val_22235,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22236 = [];
var len__19515__auto___22239 = arguments.length;
var i__19516__auto___22240 = (0);
while(true){
if((i__19516__auto___22240 < len__19515__auto___22239)){
args22236.push((arguments[i__19516__auto___22240]));

var G__22241 = (i__19516__auto___22240 + (1));
i__19516__auto___22240 = G__22241;
continue;
} else {
}
break;
}

var G__22238 = args22236.length;
switch (G__22238) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22236.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19360__auto___22243 = n;
var x_22244 = (0);
while(true){
if((x_22244 < n__19360__auto___22243)){
(a[x_22244] = (0));

var G__22245 = (x_22244 + (1));
x_22244 = G__22245;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22246 = (i + (1));
i = G__22246;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22250 = (function (alt_flag,flag,meta22251){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22251 = meta22251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22252,meta22251__$1){
var self__ = this;
var _22252__$1 = this;
return (new cljs.core.async.t_cljs$core$async22250(self__.alt_flag,self__.flag,meta22251__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22252){
var self__ = this;
var _22252__$1 = this;
return self__.meta22251;
});})(flag))
;

cljs.core.async.t_cljs$core$async22250.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22250.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22251","meta22251",526380058,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22250";

cljs.core.async.t_cljs$core$async22250.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async22250");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22250 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22250(alt_flag__$1,flag__$1,meta22251){
return (new cljs.core.async.t_cljs$core$async22250(alt_flag__$1,flag__$1,meta22251));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22250(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22256 = (function (alt_handler,flag,cb,meta22257){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22257 = meta22257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22258,meta22257__$1){
var self__ = this;
var _22258__$1 = this;
return (new cljs.core.async.t_cljs$core$async22256(self__.alt_handler,self__.flag,self__.cb,meta22257__$1));
});

cljs.core.async.t_cljs$core$async22256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22258){
var self__ = this;
var _22258__$1 = this;
return self__.meta22257;
});

cljs.core.async.t_cljs$core$async22256.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22257","meta22257",-358022645,null)], null);
});

cljs.core.async.t_cljs$core$async22256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22256";

cljs.core.async.t_cljs$core$async22256.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async22256");
});

cljs.core.async.__GT_t_cljs$core$async22256 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22256(alt_handler__$1,flag__$1,cb__$1,meta22257){
return (new cljs.core.async.t_cljs$core$async22256(alt_handler__$1,flag__$1,cb__$1,meta22257));
});

}

return (new cljs.core.async.t_cljs$core$async22256(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22259_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22259_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22260_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22260_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18445__auto__ = wport;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22261 = (i + (1));
i = G__22261;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18445__auto__ = ret;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18433__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18433__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18433__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19522__auto__ = [];
var len__19515__auto___22267 = arguments.length;
var i__19516__auto___22268 = (0);
while(true){
if((i__19516__auto___22268 < len__19515__auto___22267)){
args__19522__auto__.push((arguments[i__19516__auto___22268]));

var G__22269 = (i__19516__auto___22268 + (1));
i__19516__auto___22268 = G__22269;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((1) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19523__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22264){
var map__22265 = p__22264;
var map__22265__$1 = ((((!((map__22265 == null)))?((((map__22265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22265):map__22265);
var opts = map__22265__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22262){
var G__22263 = cljs.core.first.call(null,seq22262);
var seq22262__$1 = cljs.core.next.call(null,seq22262);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22263,seq22262__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22270 = [];
var len__19515__auto___22320 = arguments.length;
var i__19516__auto___22321 = (0);
while(true){
if((i__19516__auto___22321 < len__19515__auto___22320)){
args22270.push((arguments[i__19516__auto___22321]));

var G__22322 = (i__19516__auto___22321 + (1));
i__19516__auto___22321 = G__22322;
continue;
} else {
}
break;
}

var G__22272 = args22270.length;
switch (G__22272) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22270.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22157__auto___22324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___22324){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___22324){
return (function (state_22296){
var state_val_22297 = (state_22296[(1)]);
if((state_val_22297 === (7))){
var inst_22292 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
var statearr_22298_22325 = state_22296__$1;
(statearr_22298_22325[(2)] = inst_22292);

(statearr_22298_22325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (1))){
var state_22296__$1 = state_22296;
var statearr_22299_22326 = state_22296__$1;
(statearr_22299_22326[(2)] = null);

(statearr_22299_22326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (4))){
var inst_22275 = (state_22296[(7)]);
var inst_22275__$1 = (state_22296[(2)]);
var inst_22276 = (inst_22275__$1 == null);
var state_22296__$1 = (function (){var statearr_22300 = state_22296;
(statearr_22300[(7)] = inst_22275__$1);

return statearr_22300;
})();
if(cljs.core.truth_(inst_22276)){
var statearr_22301_22327 = state_22296__$1;
(statearr_22301_22327[(1)] = (5));

} else {
var statearr_22302_22328 = state_22296__$1;
(statearr_22302_22328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (13))){
var state_22296__$1 = state_22296;
var statearr_22303_22329 = state_22296__$1;
(statearr_22303_22329[(2)] = null);

(statearr_22303_22329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (6))){
var inst_22275 = (state_22296[(7)]);
var state_22296__$1 = state_22296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22296__$1,(11),to,inst_22275);
} else {
if((state_val_22297 === (3))){
var inst_22294 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22296__$1,inst_22294);
} else {
if((state_val_22297 === (12))){
var state_22296__$1 = state_22296;
var statearr_22304_22330 = state_22296__$1;
(statearr_22304_22330[(2)] = null);

(statearr_22304_22330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (2))){
var state_22296__$1 = state_22296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22296__$1,(4),from);
} else {
if((state_val_22297 === (11))){
var inst_22285 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
if(cljs.core.truth_(inst_22285)){
var statearr_22305_22331 = state_22296__$1;
(statearr_22305_22331[(1)] = (12));

} else {
var statearr_22306_22332 = state_22296__$1;
(statearr_22306_22332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (9))){
var state_22296__$1 = state_22296;
var statearr_22307_22333 = state_22296__$1;
(statearr_22307_22333[(2)] = null);

(statearr_22307_22333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (5))){
var state_22296__$1 = state_22296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22308_22334 = state_22296__$1;
(statearr_22308_22334[(1)] = (8));

} else {
var statearr_22309_22335 = state_22296__$1;
(statearr_22309_22335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (14))){
var inst_22290 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
var statearr_22310_22336 = state_22296__$1;
(statearr_22310_22336[(2)] = inst_22290);

(statearr_22310_22336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (10))){
var inst_22282 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
var statearr_22311_22337 = state_22296__$1;
(statearr_22311_22337[(2)] = inst_22282);

(statearr_22311_22337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (8))){
var inst_22279 = cljs.core.async.close_BANG_.call(null,to);
var state_22296__$1 = state_22296;
var statearr_22312_22338 = state_22296__$1;
(statearr_22312_22338[(2)] = inst_22279);

(statearr_22312_22338[(1)] = (10));


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
});})(c__22157__auto___22324))
;
return ((function (switch__22045__auto__,c__22157__auto___22324){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_22316 = [null,null,null,null,null,null,null,null];
(statearr_22316[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_22316[(1)] = (1));

return statearr_22316;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_22296){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22317){if((e22317 instanceof Object)){
var ex__22049__auto__ = e22317;
var statearr_22318_22339 = state_22296;
(statearr_22318_22339[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22340 = state_22296;
state_22296 = G__22340;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_22296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_22296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___22324))
})();
var state__22159__auto__ = (function (){var statearr_22319 = f__22158__auto__.call(null);
(statearr_22319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___22324);

return statearr_22319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___22324))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22524){
var vec__22525 = p__22524;
var v = cljs.core.nth.call(null,vec__22525,(0),null);
var p = cljs.core.nth.call(null,vec__22525,(1),null);
var job = vec__22525;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22157__auto___22707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___22707,res,vec__22525,v,p,job,jobs,results){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___22707,res,vec__22525,v,p,job,jobs,results){
return (function (state_22530){
var state_val_22531 = (state_22530[(1)]);
if((state_val_22531 === (1))){
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22530__$1,(2),res,v);
} else {
if((state_val_22531 === (2))){
var inst_22527 = (state_22530[(2)]);
var inst_22528 = cljs.core.async.close_BANG_.call(null,res);
var state_22530__$1 = (function (){var statearr_22532 = state_22530;
(statearr_22532[(7)] = inst_22527);

return statearr_22532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22530__$1,inst_22528);
} else {
return null;
}
}
});})(c__22157__auto___22707,res,vec__22525,v,p,job,jobs,results))
;
return ((function (switch__22045__auto__,c__22157__auto___22707,res,vec__22525,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0 = (function (){
var statearr_22536 = [null,null,null,null,null,null,null,null];
(statearr_22536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__);

(statearr_22536[(1)] = (1));

return statearr_22536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1 = (function (state_22530){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22537){if((e22537 instanceof Object)){
var ex__22049__auto__ = e22537;
var statearr_22538_22708 = state_22530;
(statearr_22538_22708[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22709 = state_22530;
state_22530 = G__22709;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = function(state_22530){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1.call(this,state_22530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___22707,res,vec__22525,v,p,job,jobs,results))
})();
var state__22159__auto__ = (function (){var statearr_22539 = f__22158__auto__.call(null);
(statearr_22539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___22707);

return statearr_22539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___22707,res,vec__22525,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22540){
var vec__22541 = p__22540;
var v = cljs.core.nth.call(null,vec__22541,(0),null);
var p = cljs.core.nth.call(null,vec__22541,(1),null);
var job = vec__22541;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19360__auto___22710 = n;
var __22711 = (0);
while(true){
if((__22711 < n__19360__auto___22710)){
var G__22542_22712 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22542_22712) {
case "compute":
var c__22157__auto___22714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22711,c__22157__auto___22714,G__22542_22712,n__19360__auto___22710,jobs,results,process,async){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (__22711,c__22157__auto___22714,G__22542_22712,n__19360__auto___22710,jobs,results,process,async){
return (function (state_22555){
var state_val_22556 = (state_22555[(1)]);
if((state_val_22556 === (1))){
var state_22555__$1 = state_22555;
var statearr_22557_22715 = state_22555__$1;
(statearr_22557_22715[(2)] = null);

(statearr_22557_22715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22556 === (2))){
var state_22555__$1 = state_22555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22555__$1,(4),jobs);
} else {
if((state_val_22556 === (3))){
var inst_22553 = (state_22555[(2)]);
var state_22555__$1 = state_22555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22555__$1,inst_22553);
} else {
if((state_val_22556 === (4))){
var inst_22545 = (state_22555[(2)]);
var inst_22546 = process.call(null,inst_22545);
var state_22555__$1 = state_22555;
if(cljs.core.truth_(inst_22546)){
var statearr_22558_22716 = state_22555__$1;
(statearr_22558_22716[(1)] = (5));

} else {
var statearr_22559_22717 = state_22555__$1;
(statearr_22559_22717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22556 === (5))){
var state_22555__$1 = state_22555;
var statearr_22560_22718 = state_22555__$1;
(statearr_22560_22718[(2)] = null);

(statearr_22560_22718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22556 === (6))){
var state_22555__$1 = state_22555;
var statearr_22561_22719 = state_22555__$1;
(statearr_22561_22719[(2)] = null);

(statearr_22561_22719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22556 === (7))){
var inst_22551 = (state_22555[(2)]);
var state_22555__$1 = state_22555;
var statearr_22562_22720 = state_22555__$1;
(statearr_22562_22720[(2)] = inst_22551);

(statearr_22562_22720[(1)] = (3));


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
});})(__22711,c__22157__auto___22714,G__22542_22712,n__19360__auto___22710,jobs,results,process,async))
;
return ((function (__22711,switch__22045__auto__,c__22157__auto___22714,G__22542_22712,n__19360__auto___22710,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0 = (function (){
var statearr_22566 = [null,null,null,null,null,null,null];
(statearr_22566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__);

(statearr_22566[(1)] = (1));

return statearr_22566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1 = (function (state_22555){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22567){if((e22567 instanceof Object)){
var ex__22049__auto__ = e22567;
var statearr_22568_22721 = state_22555;
(statearr_22568_22721[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22722 = state_22555;
state_22555 = G__22722;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = function(state_22555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1.call(this,state_22555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__;
})()
;})(__22711,switch__22045__auto__,c__22157__auto___22714,G__22542_22712,n__19360__auto___22710,jobs,results,process,async))
})();
var state__22159__auto__ = (function (){var statearr_22569 = f__22158__auto__.call(null);
(statearr_22569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___22714);

return statearr_22569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(__22711,c__22157__auto___22714,G__22542_22712,n__19360__auto___22710,jobs,results,process,async))
);


break;
case "async":
var c__22157__auto___22723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22711,c__22157__auto___22723,G__22542_22712,n__19360__auto___22710,jobs,results,process,async){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (__22711,c__22157__auto___22723,G__22542_22712,n__19360__auto___22710,jobs,results,process,async){
return (function (state_22582){
var state_val_22583 = (state_22582[(1)]);
if((state_val_22583 === (1))){
var state_22582__$1 = state_22582;
var statearr_22584_22724 = state_22582__$1;
(statearr_22584_22724[(2)] = null);

(statearr_22584_22724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (2))){
var state_22582__$1 = state_22582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22582__$1,(4),jobs);
} else {
if((state_val_22583 === (3))){
var inst_22580 = (state_22582[(2)]);
var state_22582__$1 = state_22582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22582__$1,inst_22580);
} else {
if((state_val_22583 === (4))){
var inst_22572 = (state_22582[(2)]);
var inst_22573 = async.call(null,inst_22572);
var state_22582__$1 = state_22582;
if(cljs.core.truth_(inst_22573)){
var statearr_22585_22725 = state_22582__$1;
(statearr_22585_22725[(1)] = (5));

} else {
var statearr_22586_22726 = state_22582__$1;
(statearr_22586_22726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (5))){
var state_22582__$1 = state_22582;
var statearr_22587_22727 = state_22582__$1;
(statearr_22587_22727[(2)] = null);

(statearr_22587_22727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (6))){
var state_22582__$1 = state_22582;
var statearr_22588_22728 = state_22582__$1;
(statearr_22588_22728[(2)] = null);

(statearr_22588_22728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (7))){
var inst_22578 = (state_22582[(2)]);
var state_22582__$1 = state_22582;
var statearr_22589_22729 = state_22582__$1;
(statearr_22589_22729[(2)] = inst_22578);

(statearr_22589_22729[(1)] = (3));


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
});})(__22711,c__22157__auto___22723,G__22542_22712,n__19360__auto___22710,jobs,results,process,async))
;
return ((function (__22711,switch__22045__auto__,c__22157__auto___22723,G__22542_22712,n__19360__auto___22710,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0 = (function (){
var statearr_22593 = [null,null,null,null,null,null,null];
(statearr_22593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__);

(statearr_22593[(1)] = (1));

return statearr_22593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1 = (function (state_22582){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22594){if((e22594 instanceof Object)){
var ex__22049__auto__ = e22594;
var statearr_22595_22730 = state_22582;
(statearr_22595_22730[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22731 = state_22582;
state_22582 = G__22731;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = function(state_22582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1.call(this,state_22582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__;
})()
;})(__22711,switch__22045__auto__,c__22157__auto___22723,G__22542_22712,n__19360__auto___22710,jobs,results,process,async))
})();
var state__22159__auto__ = (function (){var statearr_22596 = f__22158__auto__.call(null);
(statearr_22596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___22723);

return statearr_22596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(__22711,c__22157__auto___22723,G__22542_22712,n__19360__auto___22710,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22732 = (__22711 + (1));
__22711 = G__22732;
continue;
} else {
}
break;
}

var c__22157__auto___22733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___22733,jobs,results,process,async){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___22733,jobs,results,process,async){
return (function (state_22618){
var state_val_22619 = (state_22618[(1)]);
if((state_val_22619 === (1))){
var state_22618__$1 = state_22618;
var statearr_22620_22734 = state_22618__$1;
(statearr_22620_22734[(2)] = null);

(statearr_22620_22734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (2))){
var state_22618__$1 = state_22618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22618__$1,(4),from);
} else {
if((state_val_22619 === (3))){
var inst_22616 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22618__$1,inst_22616);
} else {
if((state_val_22619 === (4))){
var inst_22599 = (state_22618[(7)]);
var inst_22599__$1 = (state_22618[(2)]);
var inst_22600 = (inst_22599__$1 == null);
var state_22618__$1 = (function (){var statearr_22621 = state_22618;
(statearr_22621[(7)] = inst_22599__$1);

return statearr_22621;
})();
if(cljs.core.truth_(inst_22600)){
var statearr_22622_22735 = state_22618__$1;
(statearr_22622_22735[(1)] = (5));

} else {
var statearr_22623_22736 = state_22618__$1;
(statearr_22623_22736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (5))){
var inst_22602 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22618__$1 = state_22618;
var statearr_22624_22737 = state_22618__$1;
(statearr_22624_22737[(2)] = inst_22602);

(statearr_22624_22737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (6))){
var inst_22599 = (state_22618[(7)]);
var inst_22604 = (state_22618[(8)]);
var inst_22604__$1 = cljs.core.async.chan.call(null,(1));
var inst_22605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22606 = [inst_22599,inst_22604__$1];
var inst_22607 = (new cljs.core.PersistentVector(null,2,(5),inst_22605,inst_22606,null));
var state_22618__$1 = (function (){var statearr_22625 = state_22618;
(statearr_22625[(8)] = inst_22604__$1);

return statearr_22625;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22618__$1,(8),jobs,inst_22607);
} else {
if((state_val_22619 === (7))){
var inst_22614 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
var statearr_22626_22738 = state_22618__$1;
(statearr_22626_22738[(2)] = inst_22614);

(statearr_22626_22738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (8))){
var inst_22604 = (state_22618[(8)]);
var inst_22609 = (state_22618[(2)]);
var state_22618__$1 = (function (){var statearr_22627 = state_22618;
(statearr_22627[(9)] = inst_22609);

return statearr_22627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22618__$1,(9),results,inst_22604);
} else {
if((state_val_22619 === (9))){
var inst_22611 = (state_22618[(2)]);
var state_22618__$1 = (function (){var statearr_22628 = state_22618;
(statearr_22628[(10)] = inst_22611);

return statearr_22628;
})();
var statearr_22629_22739 = state_22618__$1;
(statearr_22629_22739[(2)] = null);

(statearr_22629_22739[(1)] = (2));


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
});})(c__22157__auto___22733,jobs,results,process,async))
;
return ((function (switch__22045__auto__,c__22157__auto___22733,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0 = (function (){
var statearr_22633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__);

(statearr_22633[(1)] = (1));

return statearr_22633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1 = (function (state_22618){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22634){if((e22634 instanceof Object)){
var ex__22049__auto__ = e22634;
var statearr_22635_22740 = state_22618;
(statearr_22635_22740[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22741 = state_22618;
state_22618 = G__22741;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = function(state_22618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1.call(this,state_22618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___22733,jobs,results,process,async))
})();
var state__22159__auto__ = (function (){var statearr_22636 = f__22158__auto__.call(null);
(statearr_22636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___22733);

return statearr_22636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___22733,jobs,results,process,async))
);


var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__,jobs,results,process,async){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__,jobs,results,process,async){
return (function (state_22674){
var state_val_22675 = (state_22674[(1)]);
if((state_val_22675 === (7))){
var inst_22670 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22676_22742 = state_22674__$1;
(statearr_22676_22742[(2)] = inst_22670);

(statearr_22676_22742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (20))){
var state_22674__$1 = state_22674;
var statearr_22677_22743 = state_22674__$1;
(statearr_22677_22743[(2)] = null);

(statearr_22677_22743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (1))){
var state_22674__$1 = state_22674;
var statearr_22678_22744 = state_22674__$1;
(statearr_22678_22744[(2)] = null);

(statearr_22678_22744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (4))){
var inst_22639 = (state_22674[(7)]);
var inst_22639__$1 = (state_22674[(2)]);
var inst_22640 = (inst_22639__$1 == null);
var state_22674__$1 = (function (){var statearr_22679 = state_22674;
(statearr_22679[(7)] = inst_22639__$1);

return statearr_22679;
})();
if(cljs.core.truth_(inst_22640)){
var statearr_22680_22745 = state_22674__$1;
(statearr_22680_22745[(1)] = (5));

} else {
var statearr_22681_22746 = state_22674__$1;
(statearr_22681_22746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (15))){
var inst_22652 = (state_22674[(8)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22674__$1,(18),to,inst_22652);
} else {
if((state_val_22675 === (21))){
var inst_22665 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22682_22747 = state_22674__$1;
(statearr_22682_22747[(2)] = inst_22665);

(statearr_22682_22747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (13))){
var inst_22667 = (state_22674[(2)]);
var state_22674__$1 = (function (){var statearr_22683 = state_22674;
(statearr_22683[(9)] = inst_22667);

return statearr_22683;
})();
var statearr_22684_22748 = state_22674__$1;
(statearr_22684_22748[(2)] = null);

(statearr_22684_22748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (6))){
var inst_22639 = (state_22674[(7)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22674__$1,(11),inst_22639);
} else {
if((state_val_22675 === (17))){
var inst_22660 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22660)){
var statearr_22685_22749 = state_22674__$1;
(statearr_22685_22749[(1)] = (19));

} else {
var statearr_22686_22750 = state_22674__$1;
(statearr_22686_22750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (3))){
var inst_22672 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22674__$1,inst_22672);
} else {
if((state_val_22675 === (12))){
var inst_22649 = (state_22674[(10)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22674__$1,(14),inst_22649);
} else {
if((state_val_22675 === (2))){
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22674__$1,(4),results);
} else {
if((state_val_22675 === (19))){
var state_22674__$1 = state_22674;
var statearr_22687_22751 = state_22674__$1;
(statearr_22687_22751[(2)] = null);

(statearr_22687_22751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (11))){
var inst_22649 = (state_22674[(2)]);
var state_22674__$1 = (function (){var statearr_22688 = state_22674;
(statearr_22688[(10)] = inst_22649);

return statearr_22688;
})();
var statearr_22689_22752 = state_22674__$1;
(statearr_22689_22752[(2)] = null);

(statearr_22689_22752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (9))){
var state_22674__$1 = state_22674;
var statearr_22690_22753 = state_22674__$1;
(statearr_22690_22753[(2)] = null);

(statearr_22690_22753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (5))){
var state_22674__$1 = state_22674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22691_22754 = state_22674__$1;
(statearr_22691_22754[(1)] = (8));

} else {
var statearr_22692_22755 = state_22674__$1;
(statearr_22692_22755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (14))){
var inst_22652 = (state_22674[(8)]);
var inst_22654 = (state_22674[(11)]);
var inst_22652__$1 = (state_22674[(2)]);
var inst_22653 = (inst_22652__$1 == null);
var inst_22654__$1 = cljs.core.not.call(null,inst_22653);
var state_22674__$1 = (function (){var statearr_22693 = state_22674;
(statearr_22693[(8)] = inst_22652__$1);

(statearr_22693[(11)] = inst_22654__$1);

return statearr_22693;
})();
if(inst_22654__$1){
var statearr_22694_22756 = state_22674__$1;
(statearr_22694_22756[(1)] = (15));

} else {
var statearr_22695_22757 = state_22674__$1;
(statearr_22695_22757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (16))){
var inst_22654 = (state_22674[(11)]);
var state_22674__$1 = state_22674;
var statearr_22696_22758 = state_22674__$1;
(statearr_22696_22758[(2)] = inst_22654);

(statearr_22696_22758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (10))){
var inst_22646 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22697_22759 = state_22674__$1;
(statearr_22697_22759[(2)] = inst_22646);

(statearr_22697_22759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (18))){
var inst_22657 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22698_22760 = state_22674__$1;
(statearr_22698_22760[(2)] = inst_22657);

(statearr_22698_22760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (8))){
var inst_22643 = cljs.core.async.close_BANG_.call(null,to);
var state_22674__$1 = state_22674;
var statearr_22699_22761 = state_22674__$1;
(statearr_22699_22761[(2)] = inst_22643);

(statearr_22699_22761[(1)] = (10));


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
});})(c__22157__auto__,jobs,results,process,async))
;
return ((function (switch__22045__auto__,c__22157__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0 = (function (){
var statearr_22703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__);

(statearr_22703[(1)] = (1));

return statearr_22703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1 = (function (state_22674){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22704){if((e22704 instanceof Object)){
var ex__22049__auto__ = e22704;
var statearr_22705_22762 = state_22674;
(statearr_22705_22762[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22763 = state_22674;
state_22674 = G__22763;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__ = function(state_22674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1.call(this,state_22674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__,jobs,results,process,async))
})();
var state__22159__auto__ = (function (){var statearr_22706 = f__22158__auto__.call(null);
(statearr_22706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_22706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__,jobs,results,process,async))
);

return c__22157__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22764 = [];
var len__19515__auto___22767 = arguments.length;
var i__19516__auto___22768 = (0);
while(true){
if((i__19516__auto___22768 < len__19515__auto___22767)){
args22764.push((arguments[i__19516__auto___22768]));

var G__22769 = (i__19516__auto___22768 + (1));
i__19516__auto___22768 = G__22769;
continue;
} else {
}
break;
}

var G__22766 = args22764.length;
switch (G__22766) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22764.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22771 = [];
var len__19515__auto___22774 = arguments.length;
var i__19516__auto___22775 = (0);
while(true){
if((i__19516__auto___22775 < len__19515__auto___22774)){
args22771.push((arguments[i__19516__auto___22775]));

var G__22776 = (i__19516__auto___22775 + (1));
i__19516__auto___22775 = G__22776;
continue;
} else {
}
break;
}

var G__22773 = args22771.length;
switch (G__22773) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22771.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22778 = [];
var len__19515__auto___22831 = arguments.length;
var i__19516__auto___22832 = (0);
while(true){
if((i__19516__auto___22832 < len__19515__auto___22831)){
args22778.push((arguments[i__19516__auto___22832]));

var G__22833 = (i__19516__auto___22832 + (1));
i__19516__auto___22832 = G__22833;
continue;
} else {
}
break;
}

var G__22780 = args22778.length;
switch (G__22780) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22778.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22157__auto___22835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___22835,tc,fc){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___22835,tc,fc){
return (function (state_22806){
var state_val_22807 = (state_22806[(1)]);
if((state_val_22807 === (7))){
var inst_22802 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22808_22836 = state_22806__$1;
(statearr_22808_22836[(2)] = inst_22802);

(statearr_22808_22836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (1))){
var state_22806__$1 = state_22806;
var statearr_22809_22837 = state_22806__$1;
(statearr_22809_22837[(2)] = null);

(statearr_22809_22837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (4))){
var inst_22783 = (state_22806[(7)]);
var inst_22783__$1 = (state_22806[(2)]);
var inst_22784 = (inst_22783__$1 == null);
var state_22806__$1 = (function (){var statearr_22810 = state_22806;
(statearr_22810[(7)] = inst_22783__$1);

return statearr_22810;
})();
if(cljs.core.truth_(inst_22784)){
var statearr_22811_22838 = state_22806__$1;
(statearr_22811_22838[(1)] = (5));

} else {
var statearr_22812_22839 = state_22806__$1;
(statearr_22812_22839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (13))){
var state_22806__$1 = state_22806;
var statearr_22813_22840 = state_22806__$1;
(statearr_22813_22840[(2)] = null);

(statearr_22813_22840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (6))){
var inst_22783 = (state_22806[(7)]);
var inst_22789 = p.call(null,inst_22783);
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22789)){
var statearr_22814_22841 = state_22806__$1;
(statearr_22814_22841[(1)] = (9));

} else {
var statearr_22815_22842 = state_22806__$1;
(statearr_22815_22842[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (3))){
var inst_22804 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22806__$1,inst_22804);
} else {
if((state_val_22807 === (12))){
var state_22806__$1 = state_22806;
var statearr_22816_22843 = state_22806__$1;
(statearr_22816_22843[(2)] = null);

(statearr_22816_22843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (2))){
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22806__$1,(4),ch);
} else {
if((state_val_22807 === (11))){
var inst_22783 = (state_22806[(7)]);
var inst_22793 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22806__$1,(8),inst_22793,inst_22783);
} else {
if((state_val_22807 === (9))){
var state_22806__$1 = state_22806;
var statearr_22817_22844 = state_22806__$1;
(statearr_22817_22844[(2)] = tc);

(statearr_22817_22844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (5))){
var inst_22786 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22787 = cljs.core.async.close_BANG_.call(null,fc);
var state_22806__$1 = (function (){var statearr_22818 = state_22806;
(statearr_22818[(8)] = inst_22786);

return statearr_22818;
})();
var statearr_22819_22845 = state_22806__$1;
(statearr_22819_22845[(2)] = inst_22787);

(statearr_22819_22845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (14))){
var inst_22800 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22820_22846 = state_22806__$1;
(statearr_22820_22846[(2)] = inst_22800);

(statearr_22820_22846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (10))){
var state_22806__$1 = state_22806;
var statearr_22821_22847 = state_22806__$1;
(statearr_22821_22847[(2)] = fc);

(statearr_22821_22847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (8))){
var inst_22795 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22795)){
var statearr_22822_22848 = state_22806__$1;
(statearr_22822_22848[(1)] = (12));

} else {
var statearr_22823_22849 = state_22806__$1;
(statearr_22823_22849[(1)] = (13));

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
});})(c__22157__auto___22835,tc,fc))
;
return ((function (switch__22045__auto__,c__22157__auto___22835,tc,fc){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_22827 = [null,null,null,null,null,null,null,null,null];
(statearr_22827[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_22827[(1)] = (1));

return statearr_22827;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_22806){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22828){if((e22828 instanceof Object)){
var ex__22049__auto__ = e22828;
var statearr_22829_22850 = state_22806;
(statearr_22829_22850[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22851 = state_22806;
state_22806 = G__22851;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_22806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_22806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___22835,tc,fc))
})();
var state__22159__auto__ = (function (){var statearr_22830 = f__22158__auto__.call(null);
(statearr_22830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___22835);

return statearr_22830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___22835,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__){
return (function (state_22915){
var state_val_22916 = (state_22915[(1)]);
if((state_val_22916 === (7))){
var inst_22911 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22917_22938 = state_22915__$1;
(statearr_22917_22938[(2)] = inst_22911);

(statearr_22917_22938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (1))){
var inst_22895 = init;
var state_22915__$1 = (function (){var statearr_22918 = state_22915;
(statearr_22918[(7)] = inst_22895);

return statearr_22918;
})();
var statearr_22919_22939 = state_22915__$1;
(statearr_22919_22939[(2)] = null);

(statearr_22919_22939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (4))){
var inst_22898 = (state_22915[(8)]);
var inst_22898__$1 = (state_22915[(2)]);
var inst_22899 = (inst_22898__$1 == null);
var state_22915__$1 = (function (){var statearr_22920 = state_22915;
(statearr_22920[(8)] = inst_22898__$1);

return statearr_22920;
})();
if(cljs.core.truth_(inst_22899)){
var statearr_22921_22940 = state_22915__$1;
(statearr_22921_22940[(1)] = (5));

} else {
var statearr_22922_22941 = state_22915__$1;
(statearr_22922_22941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (6))){
var inst_22902 = (state_22915[(9)]);
var inst_22898 = (state_22915[(8)]);
var inst_22895 = (state_22915[(7)]);
var inst_22902__$1 = f.call(null,inst_22895,inst_22898);
var inst_22903 = cljs.core.reduced_QMARK_.call(null,inst_22902__$1);
var state_22915__$1 = (function (){var statearr_22923 = state_22915;
(statearr_22923[(9)] = inst_22902__$1);

return statearr_22923;
})();
if(inst_22903){
var statearr_22924_22942 = state_22915__$1;
(statearr_22924_22942[(1)] = (8));

} else {
var statearr_22925_22943 = state_22915__$1;
(statearr_22925_22943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (3))){
var inst_22913 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22915__$1,inst_22913);
} else {
if((state_val_22916 === (2))){
var state_22915__$1 = state_22915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22915__$1,(4),ch);
} else {
if((state_val_22916 === (9))){
var inst_22902 = (state_22915[(9)]);
var inst_22895 = inst_22902;
var state_22915__$1 = (function (){var statearr_22926 = state_22915;
(statearr_22926[(7)] = inst_22895);

return statearr_22926;
})();
var statearr_22927_22944 = state_22915__$1;
(statearr_22927_22944[(2)] = null);

(statearr_22927_22944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (5))){
var inst_22895 = (state_22915[(7)]);
var state_22915__$1 = state_22915;
var statearr_22928_22945 = state_22915__$1;
(statearr_22928_22945[(2)] = inst_22895);

(statearr_22928_22945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (10))){
var inst_22909 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22929_22946 = state_22915__$1;
(statearr_22929_22946[(2)] = inst_22909);

(statearr_22929_22946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (8))){
var inst_22902 = (state_22915[(9)]);
var inst_22905 = cljs.core.deref.call(null,inst_22902);
var state_22915__$1 = state_22915;
var statearr_22930_22947 = state_22915__$1;
(statearr_22930_22947[(2)] = inst_22905);

(statearr_22930_22947[(1)] = (10));


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
});})(c__22157__auto__))
;
return ((function (switch__22045__auto__,c__22157__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22046__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22046__auto____0 = (function (){
var statearr_22934 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22934[(0)] = cljs$core$async$reduce_$_state_machine__22046__auto__);

(statearr_22934[(1)] = (1));

return statearr_22934;
});
var cljs$core$async$reduce_$_state_machine__22046__auto____1 = (function (state_22915){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22935){if((e22935 instanceof Object)){
var ex__22049__auto__ = e22935;
var statearr_22936_22948 = state_22915;
(statearr_22936_22948[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22949 = state_22915;
state_22915 = G__22949;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22046__auto__ = function(state_22915){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22046__auto____1.call(this,state_22915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22046__auto____0;
cljs$core$async$reduce_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22046__auto____1;
return cljs$core$async$reduce_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__))
})();
var state__22159__auto__ = (function (){var statearr_22937 = f__22158__auto__.call(null);
(statearr_22937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_22937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__))
);

return c__22157__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22950 = [];
var len__19515__auto___23002 = arguments.length;
var i__19516__auto___23003 = (0);
while(true){
if((i__19516__auto___23003 < len__19515__auto___23002)){
args22950.push((arguments[i__19516__auto___23003]));

var G__23004 = (i__19516__auto___23003 + (1));
i__19516__auto___23003 = G__23004;
continue;
} else {
}
break;
}

var G__22952 = args22950.length;
switch (G__22952) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22950.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__){
return (function (state_22977){
var state_val_22978 = (state_22977[(1)]);
if((state_val_22978 === (7))){
var inst_22959 = (state_22977[(2)]);
var state_22977__$1 = state_22977;
var statearr_22979_23006 = state_22977__$1;
(statearr_22979_23006[(2)] = inst_22959);

(statearr_22979_23006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (1))){
var inst_22953 = cljs.core.seq.call(null,coll);
var inst_22954 = inst_22953;
var state_22977__$1 = (function (){var statearr_22980 = state_22977;
(statearr_22980[(7)] = inst_22954);

return statearr_22980;
})();
var statearr_22981_23007 = state_22977__$1;
(statearr_22981_23007[(2)] = null);

(statearr_22981_23007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (4))){
var inst_22954 = (state_22977[(7)]);
var inst_22957 = cljs.core.first.call(null,inst_22954);
var state_22977__$1 = state_22977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22977__$1,(7),ch,inst_22957);
} else {
if((state_val_22978 === (13))){
var inst_22971 = (state_22977[(2)]);
var state_22977__$1 = state_22977;
var statearr_22982_23008 = state_22977__$1;
(statearr_22982_23008[(2)] = inst_22971);

(statearr_22982_23008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (6))){
var inst_22962 = (state_22977[(2)]);
var state_22977__$1 = state_22977;
if(cljs.core.truth_(inst_22962)){
var statearr_22983_23009 = state_22977__$1;
(statearr_22983_23009[(1)] = (8));

} else {
var statearr_22984_23010 = state_22977__$1;
(statearr_22984_23010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (3))){
var inst_22975 = (state_22977[(2)]);
var state_22977__$1 = state_22977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22977__$1,inst_22975);
} else {
if((state_val_22978 === (12))){
var state_22977__$1 = state_22977;
var statearr_22985_23011 = state_22977__$1;
(statearr_22985_23011[(2)] = null);

(statearr_22985_23011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (2))){
var inst_22954 = (state_22977[(7)]);
var state_22977__$1 = state_22977;
if(cljs.core.truth_(inst_22954)){
var statearr_22986_23012 = state_22977__$1;
(statearr_22986_23012[(1)] = (4));

} else {
var statearr_22987_23013 = state_22977__$1;
(statearr_22987_23013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (11))){
var inst_22968 = cljs.core.async.close_BANG_.call(null,ch);
var state_22977__$1 = state_22977;
var statearr_22988_23014 = state_22977__$1;
(statearr_22988_23014[(2)] = inst_22968);

(statearr_22988_23014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (9))){
var state_22977__$1 = state_22977;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22989_23015 = state_22977__$1;
(statearr_22989_23015[(1)] = (11));

} else {
var statearr_22990_23016 = state_22977__$1;
(statearr_22990_23016[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (5))){
var inst_22954 = (state_22977[(7)]);
var state_22977__$1 = state_22977;
var statearr_22991_23017 = state_22977__$1;
(statearr_22991_23017[(2)] = inst_22954);

(statearr_22991_23017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (10))){
var inst_22973 = (state_22977[(2)]);
var state_22977__$1 = state_22977;
var statearr_22992_23018 = state_22977__$1;
(statearr_22992_23018[(2)] = inst_22973);

(statearr_22992_23018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22978 === (8))){
var inst_22954 = (state_22977[(7)]);
var inst_22964 = cljs.core.next.call(null,inst_22954);
var inst_22954__$1 = inst_22964;
var state_22977__$1 = (function (){var statearr_22993 = state_22977;
(statearr_22993[(7)] = inst_22954__$1);

return statearr_22993;
})();
var statearr_22994_23019 = state_22977__$1;
(statearr_22994_23019[(2)] = null);

(statearr_22994_23019[(1)] = (2));


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
});})(c__22157__auto__))
;
return ((function (switch__22045__auto__,c__22157__auto__){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_22998 = [null,null,null,null,null,null,null,null];
(statearr_22998[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_22998[(1)] = (1));

return statearr_22998;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_22977){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_22977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e22999){if((e22999 instanceof Object)){
var ex__22049__auto__ = e22999;
var statearr_23000_23020 = state_22977;
(statearr_23000_23020[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23021 = state_22977;
state_22977 = G__23021;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_22977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_22977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__))
})();
var state__22159__auto__ = (function (){var statearr_23001 = f__22158__auto__.call(null);
(statearr_23001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_23001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__))
);

return c__22157__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19108__auto__ = (((_ == null))?null:_);
var m__19109__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,_);
} else {
var m__19109__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19109__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,ch);
} else {
var m__19109__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m);
} else {
var m__19109__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23243 = (function (mult,ch,cs,meta23244){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23244 = meta23244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23245,meta23244__$1){
var self__ = this;
var _23245__$1 = this;
return (new cljs.core.async.t_cljs$core$async23243(self__.mult,self__.ch,self__.cs,meta23244__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23245){
var self__ = this;
var _23245__$1 = this;
return self__.meta23244;
});})(cs))
;

cljs.core.async.t_cljs$core$async23243.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23243.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23243.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23243.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23243.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23243.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23244","meta23244",-1860703902,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23243";

cljs.core.async.t_cljs$core$async23243.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async23243");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23243 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23243(mult__$1,ch__$1,cs__$1,meta23244){
return (new cljs.core.async.t_cljs$core$async23243(mult__$1,ch__$1,cs__$1,meta23244));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23243(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22157__auto___23464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___23464,cs,m,dchan,dctr,done){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___23464,cs,m,dchan,dctr,done){
return (function (state_23376){
var state_val_23377 = (state_23376[(1)]);
if((state_val_23377 === (7))){
var inst_23372 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23378_23465 = state_23376__$1;
(statearr_23378_23465[(2)] = inst_23372);

(statearr_23378_23465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (20))){
var inst_23277 = (state_23376[(7)]);
var inst_23287 = cljs.core.first.call(null,inst_23277);
var inst_23288 = cljs.core.nth.call(null,inst_23287,(0),null);
var inst_23289 = cljs.core.nth.call(null,inst_23287,(1),null);
var state_23376__$1 = (function (){var statearr_23379 = state_23376;
(statearr_23379[(8)] = inst_23288);

return statearr_23379;
})();
if(cljs.core.truth_(inst_23289)){
var statearr_23380_23466 = state_23376__$1;
(statearr_23380_23466[(1)] = (22));

} else {
var statearr_23381_23467 = state_23376__$1;
(statearr_23381_23467[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (27))){
var inst_23324 = (state_23376[(9)]);
var inst_23319 = (state_23376[(10)]);
var inst_23248 = (state_23376[(11)]);
var inst_23317 = (state_23376[(12)]);
var inst_23324__$1 = cljs.core._nth.call(null,inst_23317,inst_23319);
var inst_23325 = cljs.core.async.put_BANG_.call(null,inst_23324__$1,inst_23248,done);
var state_23376__$1 = (function (){var statearr_23382 = state_23376;
(statearr_23382[(9)] = inst_23324__$1);

return statearr_23382;
})();
if(cljs.core.truth_(inst_23325)){
var statearr_23383_23468 = state_23376__$1;
(statearr_23383_23468[(1)] = (30));

} else {
var statearr_23384_23469 = state_23376__$1;
(statearr_23384_23469[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (1))){
var state_23376__$1 = state_23376;
var statearr_23385_23470 = state_23376__$1;
(statearr_23385_23470[(2)] = null);

(statearr_23385_23470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (24))){
var inst_23277 = (state_23376[(7)]);
var inst_23294 = (state_23376[(2)]);
var inst_23295 = cljs.core.next.call(null,inst_23277);
var inst_23257 = inst_23295;
var inst_23258 = null;
var inst_23259 = (0);
var inst_23260 = (0);
var state_23376__$1 = (function (){var statearr_23386 = state_23376;
(statearr_23386[(13)] = inst_23258);

(statearr_23386[(14)] = inst_23259);

(statearr_23386[(15)] = inst_23257);

(statearr_23386[(16)] = inst_23294);

(statearr_23386[(17)] = inst_23260);

return statearr_23386;
})();
var statearr_23387_23471 = state_23376__$1;
(statearr_23387_23471[(2)] = null);

(statearr_23387_23471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (39))){
var state_23376__$1 = state_23376;
var statearr_23391_23472 = state_23376__$1;
(statearr_23391_23472[(2)] = null);

(statearr_23391_23472[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (4))){
var inst_23248 = (state_23376[(11)]);
var inst_23248__$1 = (state_23376[(2)]);
var inst_23249 = (inst_23248__$1 == null);
var state_23376__$1 = (function (){var statearr_23392 = state_23376;
(statearr_23392[(11)] = inst_23248__$1);

return statearr_23392;
})();
if(cljs.core.truth_(inst_23249)){
var statearr_23393_23473 = state_23376__$1;
(statearr_23393_23473[(1)] = (5));

} else {
var statearr_23394_23474 = state_23376__$1;
(statearr_23394_23474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (15))){
var inst_23258 = (state_23376[(13)]);
var inst_23259 = (state_23376[(14)]);
var inst_23257 = (state_23376[(15)]);
var inst_23260 = (state_23376[(17)]);
var inst_23273 = (state_23376[(2)]);
var inst_23274 = (inst_23260 + (1));
var tmp23388 = inst_23258;
var tmp23389 = inst_23259;
var tmp23390 = inst_23257;
var inst_23257__$1 = tmp23390;
var inst_23258__$1 = tmp23388;
var inst_23259__$1 = tmp23389;
var inst_23260__$1 = inst_23274;
var state_23376__$1 = (function (){var statearr_23395 = state_23376;
(statearr_23395[(13)] = inst_23258__$1);

(statearr_23395[(14)] = inst_23259__$1);

(statearr_23395[(15)] = inst_23257__$1);

(statearr_23395[(17)] = inst_23260__$1);

(statearr_23395[(18)] = inst_23273);

return statearr_23395;
})();
var statearr_23396_23475 = state_23376__$1;
(statearr_23396_23475[(2)] = null);

(statearr_23396_23475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (21))){
var inst_23298 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23400_23476 = state_23376__$1;
(statearr_23400_23476[(2)] = inst_23298);

(statearr_23400_23476[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (31))){
var inst_23324 = (state_23376[(9)]);
var inst_23328 = done.call(null,null);
var inst_23329 = cljs.core.async.untap_STAR_.call(null,m,inst_23324);
var state_23376__$1 = (function (){var statearr_23401 = state_23376;
(statearr_23401[(19)] = inst_23328);

return statearr_23401;
})();
var statearr_23402_23477 = state_23376__$1;
(statearr_23402_23477[(2)] = inst_23329);

(statearr_23402_23477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (32))){
var inst_23316 = (state_23376[(20)]);
var inst_23318 = (state_23376[(21)]);
var inst_23319 = (state_23376[(10)]);
var inst_23317 = (state_23376[(12)]);
var inst_23331 = (state_23376[(2)]);
var inst_23332 = (inst_23319 + (1));
var tmp23397 = inst_23316;
var tmp23398 = inst_23318;
var tmp23399 = inst_23317;
var inst_23316__$1 = tmp23397;
var inst_23317__$1 = tmp23399;
var inst_23318__$1 = tmp23398;
var inst_23319__$1 = inst_23332;
var state_23376__$1 = (function (){var statearr_23403 = state_23376;
(statearr_23403[(20)] = inst_23316__$1);

(statearr_23403[(21)] = inst_23318__$1);

(statearr_23403[(22)] = inst_23331);

(statearr_23403[(10)] = inst_23319__$1);

(statearr_23403[(12)] = inst_23317__$1);

return statearr_23403;
})();
var statearr_23404_23478 = state_23376__$1;
(statearr_23404_23478[(2)] = null);

(statearr_23404_23478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (40))){
var inst_23344 = (state_23376[(23)]);
var inst_23348 = done.call(null,null);
var inst_23349 = cljs.core.async.untap_STAR_.call(null,m,inst_23344);
var state_23376__$1 = (function (){var statearr_23405 = state_23376;
(statearr_23405[(24)] = inst_23348);

return statearr_23405;
})();
var statearr_23406_23479 = state_23376__$1;
(statearr_23406_23479[(2)] = inst_23349);

(statearr_23406_23479[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (33))){
var inst_23335 = (state_23376[(25)]);
var inst_23337 = cljs.core.chunked_seq_QMARK_.call(null,inst_23335);
var state_23376__$1 = state_23376;
if(inst_23337){
var statearr_23407_23480 = state_23376__$1;
(statearr_23407_23480[(1)] = (36));

} else {
var statearr_23408_23481 = state_23376__$1;
(statearr_23408_23481[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (13))){
var inst_23267 = (state_23376[(26)]);
var inst_23270 = cljs.core.async.close_BANG_.call(null,inst_23267);
var state_23376__$1 = state_23376;
var statearr_23409_23482 = state_23376__$1;
(statearr_23409_23482[(2)] = inst_23270);

(statearr_23409_23482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (22))){
var inst_23288 = (state_23376[(8)]);
var inst_23291 = cljs.core.async.close_BANG_.call(null,inst_23288);
var state_23376__$1 = state_23376;
var statearr_23410_23483 = state_23376__$1;
(statearr_23410_23483[(2)] = inst_23291);

(statearr_23410_23483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (36))){
var inst_23335 = (state_23376[(25)]);
var inst_23339 = cljs.core.chunk_first.call(null,inst_23335);
var inst_23340 = cljs.core.chunk_rest.call(null,inst_23335);
var inst_23341 = cljs.core.count.call(null,inst_23339);
var inst_23316 = inst_23340;
var inst_23317 = inst_23339;
var inst_23318 = inst_23341;
var inst_23319 = (0);
var state_23376__$1 = (function (){var statearr_23411 = state_23376;
(statearr_23411[(20)] = inst_23316);

(statearr_23411[(21)] = inst_23318);

(statearr_23411[(10)] = inst_23319);

(statearr_23411[(12)] = inst_23317);

return statearr_23411;
})();
var statearr_23412_23484 = state_23376__$1;
(statearr_23412_23484[(2)] = null);

(statearr_23412_23484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (41))){
var inst_23335 = (state_23376[(25)]);
var inst_23351 = (state_23376[(2)]);
var inst_23352 = cljs.core.next.call(null,inst_23335);
var inst_23316 = inst_23352;
var inst_23317 = null;
var inst_23318 = (0);
var inst_23319 = (0);
var state_23376__$1 = (function (){var statearr_23413 = state_23376;
(statearr_23413[(20)] = inst_23316);

(statearr_23413[(27)] = inst_23351);

(statearr_23413[(21)] = inst_23318);

(statearr_23413[(10)] = inst_23319);

(statearr_23413[(12)] = inst_23317);

return statearr_23413;
})();
var statearr_23414_23485 = state_23376__$1;
(statearr_23414_23485[(2)] = null);

(statearr_23414_23485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (43))){
var state_23376__$1 = state_23376;
var statearr_23415_23486 = state_23376__$1;
(statearr_23415_23486[(2)] = null);

(statearr_23415_23486[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (29))){
var inst_23360 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23416_23487 = state_23376__$1;
(statearr_23416_23487[(2)] = inst_23360);

(statearr_23416_23487[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (44))){
var inst_23369 = (state_23376[(2)]);
var state_23376__$1 = (function (){var statearr_23417 = state_23376;
(statearr_23417[(28)] = inst_23369);

return statearr_23417;
})();
var statearr_23418_23488 = state_23376__$1;
(statearr_23418_23488[(2)] = null);

(statearr_23418_23488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (6))){
var inst_23308 = (state_23376[(29)]);
var inst_23307 = cljs.core.deref.call(null,cs);
var inst_23308__$1 = cljs.core.keys.call(null,inst_23307);
var inst_23309 = cljs.core.count.call(null,inst_23308__$1);
var inst_23310 = cljs.core.reset_BANG_.call(null,dctr,inst_23309);
var inst_23315 = cljs.core.seq.call(null,inst_23308__$1);
var inst_23316 = inst_23315;
var inst_23317 = null;
var inst_23318 = (0);
var inst_23319 = (0);
var state_23376__$1 = (function (){var statearr_23419 = state_23376;
(statearr_23419[(30)] = inst_23310);

(statearr_23419[(20)] = inst_23316);

(statearr_23419[(29)] = inst_23308__$1);

(statearr_23419[(21)] = inst_23318);

(statearr_23419[(10)] = inst_23319);

(statearr_23419[(12)] = inst_23317);

return statearr_23419;
})();
var statearr_23420_23489 = state_23376__$1;
(statearr_23420_23489[(2)] = null);

(statearr_23420_23489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (28))){
var inst_23316 = (state_23376[(20)]);
var inst_23335 = (state_23376[(25)]);
var inst_23335__$1 = cljs.core.seq.call(null,inst_23316);
var state_23376__$1 = (function (){var statearr_23421 = state_23376;
(statearr_23421[(25)] = inst_23335__$1);

return statearr_23421;
})();
if(inst_23335__$1){
var statearr_23422_23490 = state_23376__$1;
(statearr_23422_23490[(1)] = (33));

} else {
var statearr_23423_23491 = state_23376__$1;
(statearr_23423_23491[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (25))){
var inst_23318 = (state_23376[(21)]);
var inst_23319 = (state_23376[(10)]);
var inst_23321 = (inst_23319 < inst_23318);
var inst_23322 = inst_23321;
var state_23376__$1 = state_23376;
if(cljs.core.truth_(inst_23322)){
var statearr_23424_23492 = state_23376__$1;
(statearr_23424_23492[(1)] = (27));

} else {
var statearr_23425_23493 = state_23376__$1;
(statearr_23425_23493[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (34))){
var state_23376__$1 = state_23376;
var statearr_23426_23494 = state_23376__$1;
(statearr_23426_23494[(2)] = null);

(statearr_23426_23494[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (17))){
var state_23376__$1 = state_23376;
var statearr_23427_23495 = state_23376__$1;
(statearr_23427_23495[(2)] = null);

(statearr_23427_23495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (3))){
var inst_23374 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23376__$1,inst_23374);
} else {
if((state_val_23377 === (12))){
var inst_23303 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23428_23496 = state_23376__$1;
(statearr_23428_23496[(2)] = inst_23303);

(statearr_23428_23496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (2))){
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23376__$1,(4),ch);
} else {
if((state_val_23377 === (23))){
var state_23376__$1 = state_23376;
var statearr_23429_23497 = state_23376__$1;
(statearr_23429_23497[(2)] = null);

(statearr_23429_23497[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (35))){
var inst_23358 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23430_23498 = state_23376__$1;
(statearr_23430_23498[(2)] = inst_23358);

(statearr_23430_23498[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (19))){
var inst_23277 = (state_23376[(7)]);
var inst_23281 = cljs.core.chunk_first.call(null,inst_23277);
var inst_23282 = cljs.core.chunk_rest.call(null,inst_23277);
var inst_23283 = cljs.core.count.call(null,inst_23281);
var inst_23257 = inst_23282;
var inst_23258 = inst_23281;
var inst_23259 = inst_23283;
var inst_23260 = (0);
var state_23376__$1 = (function (){var statearr_23431 = state_23376;
(statearr_23431[(13)] = inst_23258);

(statearr_23431[(14)] = inst_23259);

(statearr_23431[(15)] = inst_23257);

(statearr_23431[(17)] = inst_23260);

return statearr_23431;
})();
var statearr_23432_23499 = state_23376__$1;
(statearr_23432_23499[(2)] = null);

(statearr_23432_23499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (11))){
var inst_23277 = (state_23376[(7)]);
var inst_23257 = (state_23376[(15)]);
var inst_23277__$1 = cljs.core.seq.call(null,inst_23257);
var state_23376__$1 = (function (){var statearr_23433 = state_23376;
(statearr_23433[(7)] = inst_23277__$1);

return statearr_23433;
})();
if(inst_23277__$1){
var statearr_23434_23500 = state_23376__$1;
(statearr_23434_23500[(1)] = (16));

} else {
var statearr_23435_23501 = state_23376__$1;
(statearr_23435_23501[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (9))){
var inst_23305 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23436_23502 = state_23376__$1;
(statearr_23436_23502[(2)] = inst_23305);

(statearr_23436_23502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (5))){
var inst_23255 = cljs.core.deref.call(null,cs);
var inst_23256 = cljs.core.seq.call(null,inst_23255);
var inst_23257 = inst_23256;
var inst_23258 = null;
var inst_23259 = (0);
var inst_23260 = (0);
var state_23376__$1 = (function (){var statearr_23437 = state_23376;
(statearr_23437[(13)] = inst_23258);

(statearr_23437[(14)] = inst_23259);

(statearr_23437[(15)] = inst_23257);

(statearr_23437[(17)] = inst_23260);

return statearr_23437;
})();
var statearr_23438_23503 = state_23376__$1;
(statearr_23438_23503[(2)] = null);

(statearr_23438_23503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (14))){
var state_23376__$1 = state_23376;
var statearr_23439_23504 = state_23376__$1;
(statearr_23439_23504[(2)] = null);

(statearr_23439_23504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (45))){
var inst_23366 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23440_23505 = state_23376__$1;
(statearr_23440_23505[(2)] = inst_23366);

(statearr_23440_23505[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (26))){
var inst_23308 = (state_23376[(29)]);
var inst_23362 = (state_23376[(2)]);
var inst_23363 = cljs.core.seq.call(null,inst_23308);
var state_23376__$1 = (function (){var statearr_23441 = state_23376;
(statearr_23441[(31)] = inst_23362);

return statearr_23441;
})();
if(inst_23363){
var statearr_23442_23506 = state_23376__$1;
(statearr_23442_23506[(1)] = (42));

} else {
var statearr_23443_23507 = state_23376__$1;
(statearr_23443_23507[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (16))){
var inst_23277 = (state_23376[(7)]);
var inst_23279 = cljs.core.chunked_seq_QMARK_.call(null,inst_23277);
var state_23376__$1 = state_23376;
if(inst_23279){
var statearr_23444_23508 = state_23376__$1;
(statearr_23444_23508[(1)] = (19));

} else {
var statearr_23445_23509 = state_23376__$1;
(statearr_23445_23509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (38))){
var inst_23355 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23446_23510 = state_23376__$1;
(statearr_23446_23510[(2)] = inst_23355);

(statearr_23446_23510[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (30))){
var state_23376__$1 = state_23376;
var statearr_23447_23511 = state_23376__$1;
(statearr_23447_23511[(2)] = null);

(statearr_23447_23511[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (10))){
var inst_23258 = (state_23376[(13)]);
var inst_23260 = (state_23376[(17)]);
var inst_23266 = cljs.core._nth.call(null,inst_23258,inst_23260);
var inst_23267 = cljs.core.nth.call(null,inst_23266,(0),null);
var inst_23268 = cljs.core.nth.call(null,inst_23266,(1),null);
var state_23376__$1 = (function (){var statearr_23448 = state_23376;
(statearr_23448[(26)] = inst_23267);

return statearr_23448;
})();
if(cljs.core.truth_(inst_23268)){
var statearr_23449_23512 = state_23376__$1;
(statearr_23449_23512[(1)] = (13));

} else {
var statearr_23450_23513 = state_23376__$1;
(statearr_23450_23513[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (18))){
var inst_23301 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23451_23514 = state_23376__$1;
(statearr_23451_23514[(2)] = inst_23301);

(statearr_23451_23514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (42))){
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23376__$1,(45),dchan);
} else {
if((state_val_23377 === (37))){
var inst_23335 = (state_23376[(25)]);
var inst_23248 = (state_23376[(11)]);
var inst_23344 = (state_23376[(23)]);
var inst_23344__$1 = cljs.core.first.call(null,inst_23335);
var inst_23345 = cljs.core.async.put_BANG_.call(null,inst_23344__$1,inst_23248,done);
var state_23376__$1 = (function (){var statearr_23452 = state_23376;
(statearr_23452[(23)] = inst_23344__$1);

return statearr_23452;
})();
if(cljs.core.truth_(inst_23345)){
var statearr_23453_23515 = state_23376__$1;
(statearr_23453_23515[(1)] = (39));

} else {
var statearr_23454_23516 = state_23376__$1;
(statearr_23454_23516[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (8))){
var inst_23259 = (state_23376[(14)]);
var inst_23260 = (state_23376[(17)]);
var inst_23262 = (inst_23260 < inst_23259);
var inst_23263 = inst_23262;
var state_23376__$1 = state_23376;
if(cljs.core.truth_(inst_23263)){
var statearr_23455_23517 = state_23376__$1;
(statearr_23455_23517[(1)] = (10));

} else {
var statearr_23456_23518 = state_23376__$1;
(statearr_23456_23518[(1)] = (11));

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
});})(c__22157__auto___23464,cs,m,dchan,dctr,done))
;
return ((function (switch__22045__auto__,c__22157__auto___23464,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22046__auto__ = null;
var cljs$core$async$mult_$_state_machine__22046__auto____0 = (function (){
var statearr_23460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23460[(0)] = cljs$core$async$mult_$_state_machine__22046__auto__);

(statearr_23460[(1)] = (1));

return statearr_23460;
});
var cljs$core$async$mult_$_state_machine__22046__auto____1 = (function (state_23376){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_23376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e23461){if((e23461 instanceof Object)){
var ex__22049__auto__ = e23461;
var statearr_23462_23519 = state_23376;
(statearr_23462_23519[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23520 = state_23376;
state_23376 = G__23520;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22046__auto__ = function(state_23376){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22046__auto____1.call(this,state_23376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22046__auto____0;
cljs$core$async$mult_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22046__auto____1;
return cljs$core$async$mult_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___23464,cs,m,dchan,dctr,done))
})();
var state__22159__auto__ = (function (){var statearr_23463 = f__22158__auto__.call(null);
(statearr_23463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___23464);

return statearr_23463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___23464,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23521 = [];
var len__19515__auto___23524 = arguments.length;
var i__19516__auto___23525 = (0);
while(true){
if((i__19516__auto___23525 < len__19515__auto___23524)){
args23521.push((arguments[i__19516__auto___23525]));

var G__23526 = (i__19516__auto___23525 + (1));
i__19516__auto___23525 = G__23526;
continue;
} else {
}
break;
}

var G__23523 = args23521.length;
switch (G__23523) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23521.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,ch);
} else {
var m__19109__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,ch);
} else {
var m__19109__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m);
} else {
var m__19109__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,state_map);
} else {
var m__19109__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,mode);
} else {
var m__19109__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19522__auto__ = [];
var len__19515__auto___23538 = arguments.length;
var i__19516__auto___23539 = (0);
while(true){
if((i__19516__auto___23539 < len__19515__auto___23538)){
args__19522__auto__.push((arguments[i__19516__auto___23539]));

var G__23540 = (i__19516__auto___23539 + (1));
i__19516__auto___23539 = G__23540;
continue;
} else {
}
break;
}

var argseq__19523__auto__ = ((((3) < args__19522__auto__.length))?(new cljs.core.IndexedSeq(args__19522__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19523__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23532){
var map__23533 = p__23532;
var map__23533__$1 = ((((!((map__23533 == null)))?((((map__23533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23533):map__23533);
var opts = map__23533__$1;
var statearr_23535_23541 = state;
(statearr_23535_23541[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23533,map__23533__$1,opts){
return (function (val){
var statearr_23536_23542 = state;
(statearr_23536_23542[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23533,map__23533__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23537_23543 = state;
(statearr_23537_23543[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23528){
var G__23529 = cljs.core.first.call(null,seq23528);
var seq23528__$1 = cljs.core.next.call(null,seq23528);
var G__23530 = cljs.core.first.call(null,seq23528__$1);
var seq23528__$2 = cljs.core.next.call(null,seq23528__$1);
var G__23531 = cljs.core.first.call(null,seq23528__$2);
var seq23528__$3 = cljs.core.next.call(null,seq23528__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23529,G__23530,G__23531,seq23528__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23707 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23708){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23708 = meta23708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23709,meta23708__$1){
var self__ = this;
var _23709__$1 = this;
return (new cljs.core.async.t_cljs$core$async23707(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23708__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23709){
var self__ = this;
var _23709__$1 = this;
return self__.meta23708;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23708","meta23708",-2007050151,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23707";

cljs.core.async.t_cljs$core$async23707.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async23707");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23707 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23707(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23708){
return (new cljs.core.async.t_cljs$core$async23707(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23708));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23707(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22157__auto___23870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___23870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___23870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23807){
var state_val_23808 = (state_23807[(1)]);
if((state_val_23808 === (7))){
var inst_23725 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23809_23871 = state_23807__$1;
(statearr_23809_23871[(2)] = inst_23725);

(statearr_23809_23871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (20))){
var inst_23737 = (state_23807[(7)]);
var state_23807__$1 = state_23807;
var statearr_23810_23872 = state_23807__$1;
(statearr_23810_23872[(2)] = inst_23737);

(statearr_23810_23872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (27))){
var state_23807__$1 = state_23807;
var statearr_23811_23873 = state_23807__$1;
(statearr_23811_23873[(2)] = null);

(statearr_23811_23873[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (1))){
var inst_23713 = (state_23807[(8)]);
var inst_23713__$1 = calc_state.call(null);
var inst_23715 = (inst_23713__$1 == null);
var inst_23716 = cljs.core.not.call(null,inst_23715);
var state_23807__$1 = (function (){var statearr_23812 = state_23807;
(statearr_23812[(8)] = inst_23713__$1);

return statearr_23812;
})();
if(inst_23716){
var statearr_23813_23874 = state_23807__$1;
(statearr_23813_23874[(1)] = (2));

} else {
var statearr_23814_23875 = state_23807__$1;
(statearr_23814_23875[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (24))){
var inst_23781 = (state_23807[(9)]);
var inst_23767 = (state_23807[(10)]);
var inst_23760 = (state_23807[(11)]);
var inst_23781__$1 = inst_23760.call(null,inst_23767);
var state_23807__$1 = (function (){var statearr_23815 = state_23807;
(statearr_23815[(9)] = inst_23781__$1);

return statearr_23815;
})();
if(cljs.core.truth_(inst_23781__$1)){
var statearr_23816_23876 = state_23807__$1;
(statearr_23816_23876[(1)] = (29));

} else {
var statearr_23817_23877 = state_23807__$1;
(statearr_23817_23877[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (4))){
var inst_23728 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23728)){
var statearr_23818_23878 = state_23807__$1;
(statearr_23818_23878[(1)] = (8));

} else {
var statearr_23819_23879 = state_23807__$1;
(statearr_23819_23879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (15))){
var inst_23754 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23754)){
var statearr_23820_23880 = state_23807__$1;
(statearr_23820_23880[(1)] = (19));

} else {
var statearr_23821_23881 = state_23807__$1;
(statearr_23821_23881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (21))){
var inst_23759 = (state_23807[(12)]);
var inst_23759__$1 = (state_23807[(2)]);
var inst_23760 = cljs.core.get.call(null,inst_23759__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23761 = cljs.core.get.call(null,inst_23759__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23762 = cljs.core.get.call(null,inst_23759__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23807__$1 = (function (){var statearr_23822 = state_23807;
(statearr_23822[(13)] = inst_23761);

(statearr_23822[(12)] = inst_23759__$1);

(statearr_23822[(11)] = inst_23760);

return statearr_23822;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23807__$1,(22),inst_23762);
} else {
if((state_val_23808 === (31))){
var inst_23789 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23789)){
var statearr_23823_23882 = state_23807__$1;
(statearr_23823_23882[(1)] = (32));

} else {
var statearr_23824_23883 = state_23807__$1;
(statearr_23824_23883[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (32))){
var inst_23766 = (state_23807[(14)]);
var state_23807__$1 = state_23807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23807__$1,(35),out,inst_23766);
} else {
if((state_val_23808 === (33))){
var inst_23759 = (state_23807[(12)]);
var inst_23737 = inst_23759;
var state_23807__$1 = (function (){var statearr_23825 = state_23807;
(statearr_23825[(7)] = inst_23737);

return statearr_23825;
})();
var statearr_23826_23884 = state_23807__$1;
(statearr_23826_23884[(2)] = null);

(statearr_23826_23884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (13))){
var inst_23737 = (state_23807[(7)]);
var inst_23744 = inst_23737.cljs$lang$protocol_mask$partition0$;
var inst_23745 = (inst_23744 & (64));
var inst_23746 = inst_23737.cljs$core$ISeq$;
var inst_23747 = (inst_23745) || (inst_23746);
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23747)){
var statearr_23827_23885 = state_23807__$1;
(statearr_23827_23885[(1)] = (16));

} else {
var statearr_23828_23886 = state_23807__$1;
(statearr_23828_23886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (22))){
var inst_23766 = (state_23807[(14)]);
var inst_23767 = (state_23807[(10)]);
var inst_23765 = (state_23807[(2)]);
var inst_23766__$1 = cljs.core.nth.call(null,inst_23765,(0),null);
var inst_23767__$1 = cljs.core.nth.call(null,inst_23765,(1),null);
var inst_23768 = (inst_23766__$1 == null);
var inst_23769 = cljs.core._EQ_.call(null,inst_23767__$1,change);
var inst_23770 = (inst_23768) || (inst_23769);
var state_23807__$1 = (function (){var statearr_23829 = state_23807;
(statearr_23829[(14)] = inst_23766__$1);

(statearr_23829[(10)] = inst_23767__$1);

return statearr_23829;
})();
if(cljs.core.truth_(inst_23770)){
var statearr_23830_23887 = state_23807__$1;
(statearr_23830_23887[(1)] = (23));

} else {
var statearr_23831_23888 = state_23807__$1;
(statearr_23831_23888[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (36))){
var inst_23759 = (state_23807[(12)]);
var inst_23737 = inst_23759;
var state_23807__$1 = (function (){var statearr_23832 = state_23807;
(statearr_23832[(7)] = inst_23737);

return statearr_23832;
})();
var statearr_23833_23889 = state_23807__$1;
(statearr_23833_23889[(2)] = null);

(statearr_23833_23889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (29))){
var inst_23781 = (state_23807[(9)]);
var state_23807__$1 = state_23807;
var statearr_23834_23890 = state_23807__$1;
(statearr_23834_23890[(2)] = inst_23781);

(statearr_23834_23890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (6))){
var state_23807__$1 = state_23807;
var statearr_23835_23891 = state_23807__$1;
(statearr_23835_23891[(2)] = false);

(statearr_23835_23891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (28))){
var inst_23777 = (state_23807[(2)]);
var inst_23778 = calc_state.call(null);
var inst_23737 = inst_23778;
var state_23807__$1 = (function (){var statearr_23836 = state_23807;
(statearr_23836[(15)] = inst_23777);

(statearr_23836[(7)] = inst_23737);

return statearr_23836;
})();
var statearr_23837_23892 = state_23807__$1;
(statearr_23837_23892[(2)] = null);

(statearr_23837_23892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (25))){
var inst_23803 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23838_23893 = state_23807__$1;
(statearr_23838_23893[(2)] = inst_23803);

(statearr_23838_23893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (34))){
var inst_23801 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23839_23894 = state_23807__$1;
(statearr_23839_23894[(2)] = inst_23801);

(statearr_23839_23894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (17))){
var state_23807__$1 = state_23807;
var statearr_23840_23895 = state_23807__$1;
(statearr_23840_23895[(2)] = false);

(statearr_23840_23895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (3))){
var state_23807__$1 = state_23807;
var statearr_23841_23896 = state_23807__$1;
(statearr_23841_23896[(2)] = false);

(statearr_23841_23896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (12))){
var inst_23805 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23807__$1,inst_23805);
} else {
if((state_val_23808 === (2))){
var inst_23713 = (state_23807[(8)]);
var inst_23718 = inst_23713.cljs$lang$protocol_mask$partition0$;
var inst_23719 = (inst_23718 & (64));
var inst_23720 = inst_23713.cljs$core$ISeq$;
var inst_23721 = (inst_23719) || (inst_23720);
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23721)){
var statearr_23842_23897 = state_23807__$1;
(statearr_23842_23897[(1)] = (5));

} else {
var statearr_23843_23898 = state_23807__$1;
(statearr_23843_23898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (23))){
var inst_23766 = (state_23807[(14)]);
var inst_23772 = (inst_23766 == null);
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23772)){
var statearr_23844_23899 = state_23807__$1;
(statearr_23844_23899[(1)] = (26));

} else {
var statearr_23845_23900 = state_23807__$1;
(statearr_23845_23900[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (35))){
var inst_23792 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23792)){
var statearr_23846_23901 = state_23807__$1;
(statearr_23846_23901[(1)] = (36));

} else {
var statearr_23847_23902 = state_23807__$1;
(statearr_23847_23902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (19))){
var inst_23737 = (state_23807[(7)]);
var inst_23756 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23737);
var state_23807__$1 = state_23807;
var statearr_23848_23903 = state_23807__$1;
(statearr_23848_23903[(2)] = inst_23756);

(statearr_23848_23903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (11))){
var inst_23737 = (state_23807[(7)]);
var inst_23741 = (inst_23737 == null);
var inst_23742 = cljs.core.not.call(null,inst_23741);
var state_23807__$1 = state_23807;
if(inst_23742){
var statearr_23849_23904 = state_23807__$1;
(statearr_23849_23904[(1)] = (13));

} else {
var statearr_23850_23905 = state_23807__$1;
(statearr_23850_23905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (9))){
var inst_23713 = (state_23807[(8)]);
var state_23807__$1 = state_23807;
var statearr_23851_23906 = state_23807__$1;
(statearr_23851_23906[(2)] = inst_23713);

(statearr_23851_23906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (5))){
var state_23807__$1 = state_23807;
var statearr_23852_23907 = state_23807__$1;
(statearr_23852_23907[(2)] = true);

(statearr_23852_23907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (14))){
var state_23807__$1 = state_23807;
var statearr_23853_23908 = state_23807__$1;
(statearr_23853_23908[(2)] = false);

(statearr_23853_23908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (26))){
var inst_23767 = (state_23807[(10)]);
var inst_23774 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23767);
var state_23807__$1 = state_23807;
var statearr_23854_23909 = state_23807__$1;
(statearr_23854_23909[(2)] = inst_23774);

(statearr_23854_23909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (16))){
var state_23807__$1 = state_23807;
var statearr_23855_23910 = state_23807__$1;
(statearr_23855_23910[(2)] = true);

(statearr_23855_23910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (38))){
var inst_23797 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23856_23911 = state_23807__$1;
(statearr_23856_23911[(2)] = inst_23797);

(statearr_23856_23911[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (30))){
var inst_23761 = (state_23807[(13)]);
var inst_23767 = (state_23807[(10)]);
var inst_23760 = (state_23807[(11)]);
var inst_23784 = cljs.core.empty_QMARK_.call(null,inst_23760);
var inst_23785 = inst_23761.call(null,inst_23767);
var inst_23786 = cljs.core.not.call(null,inst_23785);
var inst_23787 = (inst_23784) && (inst_23786);
var state_23807__$1 = state_23807;
var statearr_23857_23912 = state_23807__$1;
(statearr_23857_23912[(2)] = inst_23787);

(statearr_23857_23912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (10))){
var inst_23713 = (state_23807[(8)]);
var inst_23733 = (state_23807[(2)]);
var inst_23734 = cljs.core.get.call(null,inst_23733,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23735 = cljs.core.get.call(null,inst_23733,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23736 = cljs.core.get.call(null,inst_23733,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23737 = inst_23713;
var state_23807__$1 = (function (){var statearr_23858 = state_23807;
(statearr_23858[(16)] = inst_23734);

(statearr_23858[(17)] = inst_23736);

(statearr_23858[(18)] = inst_23735);

(statearr_23858[(7)] = inst_23737);

return statearr_23858;
})();
var statearr_23859_23913 = state_23807__$1;
(statearr_23859_23913[(2)] = null);

(statearr_23859_23913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (18))){
var inst_23751 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23860_23914 = state_23807__$1;
(statearr_23860_23914[(2)] = inst_23751);

(statearr_23860_23914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (37))){
var state_23807__$1 = state_23807;
var statearr_23861_23915 = state_23807__$1;
(statearr_23861_23915[(2)] = null);

(statearr_23861_23915[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (8))){
var inst_23713 = (state_23807[(8)]);
var inst_23730 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23713);
var state_23807__$1 = state_23807;
var statearr_23862_23916 = state_23807__$1;
(statearr_23862_23916[(2)] = inst_23730);

(statearr_23862_23916[(1)] = (10));


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
});})(c__22157__auto___23870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22045__auto__,c__22157__auto___23870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22046__auto__ = null;
var cljs$core$async$mix_$_state_machine__22046__auto____0 = (function (){
var statearr_23866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23866[(0)] = cljs$core$async$mix_$_state_machine__22046__auto__);

(statearr_23866[(1)] = (1));

return statearr_23866;
});
var cljs$core$async$mix_$_state_machine__22046__auto____1 = (function (state_23807){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_23807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e23867){if((e23867 instanceof Object)){
var ex__22049__auto__ = e23867;
var statearr_23868_23917 = state_23807;
(statearr_23868_23917[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23918 = state_23807;
state_23807 = G__23918;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22046__auto__ = function(state_23807){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22046__auto____1.call(this,state_23807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22046__auto____0;
cljs$core$async$mix_$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22046__auto____1;
return cljs$core$async$mix_$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___23870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22159__auto__ = (function (){var statearr_23869 = f__22158__auto__.call(null);
(statearr_23869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___23870);

return statearr_23869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___23870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19108__auto__ = (((p == null))?null:p);
var m__19109__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19109__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19108__auto__ = (((p == null))?null:p);
var m__19109__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,p,v,ch);
} else {
var m__19109__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23919 = [];
var len__19515__auto___23922 = arguments.length;
var i__19516__auto___23923 = (0);
while(true){
if((i__19516__auto___23923 < len__19515__auto___23922)){
args23919.push((arguments[i__19516__auto___23923]));

var G__23924 = (i__19516__auto___23923 + (1));
i__19516__auto___23923 = G__23924;
continue;
} else {
}
break;
}

var G__23921 = args23919.length;
switch (G__23921) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23919.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19108__auto__ = (((p == null))?null:p);
var m__19109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,p);
} else {
var m__19109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19108__auto__ = (((p == null))?null:p);
var m__19109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,p,v);
} else {
var m__19109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23927 = [];
var len__19515__auto___24052 = arguments.length;
var i__19516__auto___24053 = (0);
while(true){
if((i__19516__auto___24053 < len__19515__auto___24052)){
args23927.push((arguments[i__19516__auto___24053]));

var G__24054 = (i__19516__auto___24053 + (1));
i__19516__auto___24053 = G__24054;
continue;
} else {
}
break;
}

var G__23929 = args23927.length;
switch (G__23929) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23927.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18445__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18445__auto__,mults){
return (function (p1__23926_SHARP_){
if(cljs.core.truth_(p1__23926_SHARP_.call(null,topic))){
return p1__23926_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23926_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18445__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23930 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23931){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23931 = meta23931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23932,meta23931__$1){
var self__ = this;
var _23932__$1 = this;
return (new cljs.core.async.t_cljs$core$async23930(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23931__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23932){
var self__ = this;
var _23932__$1 = this;
return self__.meta23931;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23930.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23931","meta23931",-2001645119,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23930";

cljs.core.async.t_cljs$core$async23930.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async23930");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23930 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23930(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23931){
return (new cljs.core.async.t_cljs$core$async23930(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23931));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23930(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22157__auto___24056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___24056,mults,ensure_mult,p){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___24056,mults,ensure_mult,p){
return (function (state_24004){
var state_val_24005 = (state_24004[(1)]);
if((state_val_24005 === (7))){
var inst_24000 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
var statearr_24006_24057 = state_24004__$1;
(statearr_24006_24057[(2)] = inst_24000);

(statearr_24006_24057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (20))){
var state_24004__$1 = state_24004;
var statearr_24007_24058 = state_24004__$1;
(statearr_24007_24058[(2)] = null);

(statearr_24007_24058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (1))){
var state_24004__$1 = state_24004;
var statearr_24008_24059 = state_24004__$1;
(statearr_24008_24059[(2)] = null);

(statearr_24008_24059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (24))){
var inst_23983 = (state_24004[(7)]);
var inst_23992 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23983);
var state_24004__$1 = state_24004;
var statearr_24009_24060 = state_24004__$1;
(statearr_24009_24060[(2)] = inst_23992);

(statearr_24009_24060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (4))){
var inst_23935 = (state_24004[(8)]);
var inst_23935__$1 = (state_24004[(2)]);
var inst_23936 = (inst_23935__$1 == null);
var state_24004__$1 = (function (){var statearr_24010 = state_24004;
(statearr_24010[(8)] = inst_23935__$1);

return statearr_24010;
})();
if(cljs.core.truth_(inst_23936)){
var statearr_24011_24061 = state_24004__$1;
(statearr_24011_24061[(1)] = (5));

} else {
var statearr_24012_24062 = state_24004__$1;
(statearr_24012_24062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (15))){
var inst_23977 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
var statearr_24013_24063 = state_24004__$1;
(statearr_24013_24063[(2)] = inst_23977);

(statearr_24013_24063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (21))){
var inst_23997 = (state_24004[(2)]);
var state_24004__$1 = (function (){var statearr_24014 = state_24004;
(statearr_24014[(9)] = inst_23997);

return statearr_24014;
})();
var statearr_24015_24064 = state_24004__$1;
(statearr_24015_24064[(2)] = null);

(statearr_24015_24064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (13))){
var inst_23959 = (state_24004[(10)]);
var inst_23961 = cljs.core.chunked_seq_QMARK_.call(null,inst_23959);
var state_24004__$1 = state_24004;
if(inst_23961){
var statearr_24016_24065 = state_24004__$1;
(statearr_24016_24065[(1)] = (16));

} else {
var statearr_24017_24066 = state_24004__$1;
(statearr_24017_24066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (22))){
var inst_23989 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
if(cljs.core.truth_(inst_23989)){
var statearr_24018_24067 = state_24004__$1;
(statearr_24018_24067[(1)] = (23));

} else {
var statearr_24019_24068 = state_24004__$1;
(statearr_24019_24068[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (6))){
var inst_23985 = (state_24004[(11)]);
var inst_23935 = (state_24004[(8)]);
var inst_23983 = (state_24004[(7)]);
var inst_23983__$1 = topic_fn.call(null,inst_23935);
var inst_23984 = cljs.core.deref.call(null,mults);
var inst_23985__$1 = cljs.core.get.call(null,inst_23984,inst_23983__$1);
var state_24004__$1 = (function (){var statearr_24020 = state_24004;
(statearr_24020[(11)] = inst_23985__$1);

(statearr_24020[(7)] = inst_23983__$1);

return statearr_24020;
})();
if(cljs.core.truth_(inst_23985__$1)){
var statearr_24021_24069 = state_24004__$1;
(statearr_24021_24069[(1)] = (19));

} else {
var statearr_24022_24070 = state_24004__$1;
(statearr_24022_24070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (25))){
var inst_23994 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
var statearr_24023_24071 = state_24004__$1;
(statearr_24023_24071[(2)] = inst_23994);

(statearr_24023_24071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (17))){
var inst_23959 = (state_24004[(10)]);
var inst_23968 = cljs.core.first.call(null,inst_23959);
var inst_23969 = cljs.core.async.muxch_STAR_.call(null,inst_23968);
var inst_23970 = cljs.core.async.close_BANG_.call(null,inst_23969);
var inst_23971 = cljs.core.next.call(null,inst_23959);
var inst_23945 = inst_23971;
var inst_23946 = null;
var inst_23947 = (0);
var inst_23948 = (0);
var state_24004__$1 = (function (){var statearr_24024 = state_24004;
(statearr_24024[(12)] = inst_23947);

(statearr_24024[(13)] = inst_23946);

(statearr_24024[(14)] = inst_23945);

(statearr_24024[(15)] = inst_23970);

(statearr_24024[(16)] = inst_23948);

return statearr_24024;
})();
var statearr_24025_24072 = state_24004__$1;
(statearr_24025_24072[(2)] = null);

(statearr_24025_24072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (3))){
var inst_24002 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24004__$1,inst_24002);
} else {
if((state_val_24005 === (12))){
var inst_23979 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
var statearr_24026_24073 = state_24004__$1;
(statearr_24026_24073[(2)] = inst_23979);

(statearr_24026_24073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (2))){
var state_24004__$1 = state_24004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24004__$1,(4),ch);
} else {
if((state_val_24005 === (23))){
var state_24004__$1 = state_24004;
var statearr_24027_24074 = state_24004__$1;
(statearr_24027_24074[(2)] = null);

(statearr_24027_24074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (19))){
var inst_23985 = (state_24004[(11)]);
var inst_23935 = (state_24004[(8)]);
var inst_23987 = cljs.core.async.muxch_STAR_.call(null,inst_23985);
var state_24004__$1 = state_24004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24004__$1,(22),inst_23987,inst_23935);
} else {
if((state_val_24005 === (11))){
var inst_23959 = (state_24004[(10)]);
var inst_23945 = (state_24004[(14)]);
var inst_23959__$1 = cljs.core.seq.call(null,inst_23945);
var state_24004__$1 = (function (){var statearr_24028 = state_24004;
(statearr_24028[(10)] = inst_23959__$1);

return statearr_24028;
})();
if(inst_23959__$1){
var statearr_24029_24075 = state_24004__$1;
(statearr_24029_24075[(1)] = (13));

} else {
var statearr_24030_24076 = state_24004__$1;
(statearr_24030_24076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (9))){
var inst_23981 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
var statearr_24031_24077 = state_24004__$1;
(statearr_24031_24077[(2)] = inst_23981);

(statearr_24031_24077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (5))){
var inst_23942 = cljs.core.deref.call(null,mults);
var inst_23943 = cljs.core.vals.call(null,inst_23942);
var inst_23944 = cljs.core.seq.call(null,inst_23943);
var inst_23945 = inst_23944;
var inst_23946 = null;
var inst_23947 = (0);
var inst_23948 = (0);
var state_24004__$1 = (function (){var statearr_24032 = state_24004;
(statearr_24032[(12)] = inst_23947);

(statearr_24032[(13)] = inst_23946);

(statearr_24032[(14)] = inst_23945);

(statearr_24032[(16)] = inst_23948);

return statearr_24032;
})();
var statearr_24033_24078 = state_24004__$1;
(statearr_24033_24078[(2)] = null);

(statearr_24033_24078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (14))){
var state_24004__$1 = state_24004;
var statearr_24037_24079 = state_24004__$1;
(statearr_24037_24079[(2)] = null);

(statearr_24037_24079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (16))){
var inst_23959 = (state_24004[(10)]);
var inst_23963 = cljs.core.chunk_first.call(null,inst_23959);
var inst_23964 = cljs.core.chunk_rest.call(null,inst_23959);
var inst_23965 = cljs.core.count.call(null,inst_23963);
var inst_23945 = inst_23964;
var inst_23946 = inst_23963;
var inst_23947 = inst_23965;
var inst_23948 = (0);
var state_24004__$1 = (function (){var statearr_24038 = state_24004;
(statearr_24038[(12)] = inst_23947);

(statearr_24038[(13)] = inst_23946);

(statearr_24038[(14)] = inst_23945);

(statearr_24038[(16)] = inst_23948);

return statearr_24038;
})();
var statearr_24039_24080 = state_24004__$1;
(statearr_24039_24080[(2)] = null);

(statearr_24039_24080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (10))){
var inst_23947 = (state_24004[(12)]);
var inst_23946 = (state_24004[(13)]);
var inst_23945 = (state_24004[(14)]);
var inst_23948 = (state_24004[(16)]);
var inst_23953 = cljs.core._nth.call(null,inst_23946,inst_23948);
var inst_23954 = cljs.core.async.muxch_STAR_.call(null,inst_23953);
var inst_23955 = cljs.core.async.close_BANG_.call(null,inst_23954);
var inst_23956 = (inst_23948 + (1));
var tmp24034 = inst_23947;
var tmp24035 = inst_23946;
var tmp24036 = inst_23945;
var inst_23945__$1 = tmp24036;
var inst_23946__$1 = tmp24035;
var inst_23947__$1 = tmp24034;
var inst_23948__$1 = inst_23956;
var state_24004__$1 = (function (){var statearr_24040 = state_24004;
(statearr_24040[(12)] = inst_23947__$1);

(statearr_24040[(13)] = inst_23946__$1);

(statearr_24040[(17)] = inst_23955);

(statearr_24040[(14)] = inst_23945__$1);

(statearr_24040[(16)] = inst_23948__$1);

return statearr_24040;
})();
var statearr_24041_24081 = state_24004__$1;
(statearr_24041_24081[(2)] = null);

(statearr_24041_24081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (18))){
var inst_23974 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
var statearr_24042_24082 = state_24004__$1;
(statearr_24042_24082[(2)] = inst_23974);

(statearr_24042_24082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (8))){
var inst_23947 = (state_24004[(12)]);
var inst_23948 = (state_24004[(16)]);
var inst_23950 = (inst_23948 < inst_23947);
var inst_23951 = inst_23950;
var state_24004__$1 = state_24004;
if(cljs.core.truth_(inst_23951)){
var statearr_24043_24083 = state_24004__$1;
(statearr_24043_24083[(1)] = (10));

} else {
var statearr_24044_24084 = state_24004__$1;
(statearr_24044_24084[(1)] = (11));

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
});})(c__22157__auto___24056,mults,ensure_mult,p))
;
return ((function (switch__22045__auto__,c__22157__auto___24056,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_24048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24048[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_24048[(1)] = (1));

return statearr_24048;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_24004){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24049){if((e24049 instanceof Object)){
var ex__22049__auto__ = e24049;
var statearr_24050_24085 = state_24004;
(statearr_24050_24085[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24086 = state_24004;
state_24004 = G__24086;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_24004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_24004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___24056,mults,ensure_mult,p))
})();
var state__22159__auto__ = (function (){var statearr_24051 = f__22158__auto__.call(null);
(statearr_24051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___24056);

return statearr_24051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___24056,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24087 = [];
var len__19515__auto___24090 = arguments.length;
var i__19516__auto___24091 = (0);
while(true){
if((i__19516__auto___24091 < len__19515__auto___24090)){
args24087.push((arguments[i__19516__auto___24091]));

var G__24092 = (i__19516__auto___24091 + (1));
i__19516__auto___24091 = G__24092;
continue;
} else {
}
break;
}

var G__24089 = args24087.length;
switch (G__24089) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24087.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24094 = [];
var len__19515__auto___24097 = arguments.length;
var i__19516__auto___24098 = (0);
while(true){
if((i__19516__auto___24098 < len__19515__auto___24097)){
args24094.push((arguments[i__19516__auto___24098]));

var G__24099 = (i__19516__auto___24098 + (1));
i__19516__auto___24098 = G__24099;
continue;
} else {
}
break;
}

var G__24096 = args24094.length;
switch (G__24096) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24094.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24101 = [];
var len__19515__auto___24172 = arguments.length;
var i__19516__auto___24173 = (0);
while(true){
if((i__19516__auto___24173 < len__19515__auto___24172)){
args24101.push((arguments[i__19516__auto___24173]));

var G__24174 = (i__19516__auto___24173 + (1));
i__19516__auto___24173 = G__24174;
continue;
} else {
}
break;
}

var G__24103 = args24101.length;
switch (G__24103) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24101.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22157__auto___24176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___24176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___24176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24142){
var state_val_24143 = (state_24142[(1)]);
if((state_val_24143 === (7))){
var state_24142__$1 = state_24142;
var statearr_24144_24177 = state_24142__$1;
(statearr_24144_24177[(2)] = null);

(statearr_24144_24177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (1))){
var state_24142__$1 = state_24142;
var statearr_24145_24178 = state_24142__$1;
(statearr_24145_24178[(2)] = null);

(statearr_24145_24178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (4))){
var inst_24106 = (state_24142[(7)]);
var inst_24108 = (inst_24106 < cnt);
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24108)){
var statearr_24146_24179 = state_24142__$1;
(statearr_24146_24179[(1)] = (6));

} else {
var statearr_24147_24180 = state_24142__$1;
(statearr_24147_24180[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (15))){
var inst_24138 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24148_24181 = state_24142__$1;
(statearr_24148_24181[(2)] = inst_24138);

(statearr_24148_24181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (13))){
var inst_24131 = cljs.core.async.close_BANG_.call(null,out);
var state_24142__$1 = state_24142;
var statearr_24149_24182 = state_24142__$1;
(statearr_24149_24182[(2)] = inst_24131);

(statearr_24149_24182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (6))){
var state_24142__$1 = state_24142;
var statearr_24150_24183 = state_24142__$1;
(statearr_24150_24183[(2)] = null);

(statearr_24150_24183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (3))){
var inst_24140 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24142__$1,inst_24140);
} else {
if((state_val_24143 === (12))){
var inst_24128 = (state_24142[(8)]);
var inst_24128__$1 = (state_24142[(2)]);
var inst_24129 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24128__$1);
var state_24142__$1 = (function (){var statearr_24151 = state_24142;
(statearr_24151[(8)] = inst_24128__$1);

return statearr_24151;
})();
if(cljs.core.truth_(inst_24129)){
var statearr_24152_24184 = state_24142__$1;
(statearr_24152_24184[(1)] = (13));

} else {
var statearr_24153_24185 = state_24142__$1;
(statearr_24153_24185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (2))){
var inst_24105 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24106 = (0);
var state_24142__$1 = (function (){var statearr_24154 = state_24142;
(statearr_24154[(9)] = inst_24105);

(statearr_24154[(7)] = inst_24106);

return statearr_24154;
})();
var statearr_24155_24186 = state_24142__$1;
(statearr_24155_24186[(2)] = null);

(statearr_24155_24186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (11))){
var inst_24106 = (state_24142[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24142,(10),Object,null,(9));
var inst_24115 = chs__$1.call(null,inst_24106);
var inst_24116 = done.call(null,inst_24106);
var inst_24117 = cljs.core.async.take_BANG_.call(null,inst_24115,inst_24116);
var state_24142__$1 = state_24142;
var statearr_24156_24187 = state_24142__$1;
(statearr_24156_24187[(2)] = inst_24117);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (9))){
var inst_24106 = (state_24142[(7)]);
var inst_24119 = (state_24142[(2)]);
var inst_24120 = (inst_24106 + (1));
var inst_24106__$1 = inst_24120;
var state_24142__$1 = (function (){var statearr_24157 = state_24142;
(statearr_24157[(7)] = inst_24106__$1);

(statearr_24157[(10)] = inst_24119);

return statearr_24157;
})();
var statearr_24158_24188 = state_24142__$1;
(statearr_24158_24188[(2)] = null);

(statearr_24158_24188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (5))){
var inst_24126 = (state_24142[(2)]);
var state_24142__$1 = (function (){var statearr_24159 = state_24142;
(statearr_24159[(11)] = inst_24126);

return statearr_24159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24142__$1,(12),dchan);
} else {
if((state_val_24143 === (14))){
var inst_24128 = (state_24142[(8)]);
var inst_24133 = cljs.core.apply.call(null,f,inst_24128);
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24142__$1,(16),out,inst_24133);
} else {
if((state_val_24143 === (16))){
var inst_24135 = (state_24142[(2)]);
var state_24142__$1 = (function (){var statearr_24160 = state_24142;
(statearr_24160[(12)] = inst_24135);

return statearr_24160;
})();
var statearr_24161_24189 = state_24142__$1;
(statearr_24161_24189[(2)] = null);

(statearr_24161_24189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (10))){
var inst_24110 = (state_24142[(2)]);
var inst_24111 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24142__$1 = (function (){var statearr_24162 = state_24142;
(statearr_24162[(13)] = inst_24110);

return statearr_24162;
})();
var statearr_24163_24190 = state_24142__$1;
(statearr_24163_24190[(2)] = inst_24111);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (8))){
var inst_24124 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24164_24191 = state_24142__$1;
(statearr_24164_24191[(2)] = inst_24124);

(statearr_24164_24191[(1)] = (5));


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
});})(c__22157__auto___24176,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22045__auto__,c__22157__auto___24176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_24168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24168[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_24168[(1)] = (1));

return statearr_24168;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_24142){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24169){if((e24169 instanceof Object)){
var ex__22049__auto__ = e24169;
var statearr_24170_24192 = state_24142;
(statearr_24170_24192[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24193 = state_24142;
state_24142 = G__24193;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_24142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_24142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___24176,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22159__auto__ = (function (){var statearr_24171 = f__22158__auto__.call(null);
(statearr_24171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___24176);

return statearr_24171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___24176,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24195 = [];
var len__19515__auto___24251 = arguments.length;
var i__19516__auto___24252 = (0);
while(true){
if((i__19516__auto___24252 < len__19515__auto___24251)){
args24195.push((arguments[i__19516__auto___24252]));

var G__24253 = (i__19516__auto___24252 + (1));
i__19516__auto___24252 = G__24253;
continue;
} else {
}
break;
}

var G__24197 = args24195.length;
switch (G__24197) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24195.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22157__auto___24255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___24255,out){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___24255,out){
return (function (state_24227){
var state_val_24228 = (state_24227[(1)]);
if((state_val_24228 === (7))){
var inst_24206 = (state_24227[(7)]);
var inst_24207 = (state_24227[(8)]);
var inst_24206__$1 = (state_24227[(2)]);
var inst_24207__$1 = cljs.core.nth.call(null,inst_24206__$1,(0),null);
var inst_24208 = cljs.core.nth.call(null,inst_24206__$1,(1),null);
var inst_24209 = (inst_24207__$1 == null);
var state_24227__$1 = (function (){var statearr_24229 = state_24227;
(statearr_24229[(7)] = inst_24206__$1);

(statearr_24229[(9)] = inst_24208);

(statearr_24229[(8)] = inst_24207__$1);

return statearr_24229;
})();
if(cljs.core.truth_(inst_24209)){
var statearr_24230_24256 = state_24227__$1;
(statearr_24230_24256[(1)] = (8));

} else {
var statearr_24231_24257 = state_24227__$1;
(statearr_24231_24257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (1))){
var inst_24198 = cljs.core.vec.call(null,chs);
var inst_24199 = inst_24198;
var state_24227__$1 = (function (){var statearr_24232 = state_24227;
(statearr_24232[(10)] = inst_24199);

return statearr_24232;
})();
var statearr_24233_24258 = state_24227__$1;
(statearr_24233_24258[(2)] = null);

(statearr_24233_24258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (4))){
var inst_24199 = (state_24227[(10)]);
var state_24227__$1 = state_24227;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24227__$1,(7),inst_24199);
} else {
if((state_val_24228 === (6))){
var inst_24223 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
var statearr_24234_24259 = state_24227__$1;
(statearr_24234_24259[(2)] = inst_24223);

(statearr_24234_24259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (3))){
var inst_24225 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24227__$1,inst_24225);
} else {
if((state_val_24228 === (2))){
var inst_24199 = (state_24227[(10)]);
var inst_24201 = cljs.core.count.call(null,inst_24199);
var inst_24202 = (inst_24201 > (0));
var state_24227__$1 = state_24227;
if(cljs.core.truth_(inst_24202)){
var statearr_24236_24260 = state_24227__$1;
(statearr_24236_24260[(1)] = (4));

} else {
var statearr_24237_24261 = state_24227__$1;
(statearr_24237_24261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (11))){
var inst_24199 = (state_24227[(10)]);
var inst_24216 = (state_24227[(2)]);
var tmp24235 = inst_24199;
var inst_24199__$1 = tmp24235;
var state_24227__$1 = (function (){var statearr_24238 = state_24227;
(statearr_24238[(11)] = inst_24216);

(statearr_24238[(10)] = inst_24199__$1);

return statearr_24238;
})();
var statearr_24239_24262 = state_24227__$1;
(statearr_24239_24262[(2)] = null);

(statearr_24239_24262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (9))){
var inst_24207 = (state_24227[(8)]);
var state_24227__$1 = state_24227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24227__$1,(11),out,inst_24207);
} else {
if((state_val_24228 === (5))){
var inst_24221 = cljs.core.async.close_BANG_.call(null,out);
var state_24227__$1 = state_24227;
var statearr_24240_24263 = state_24227__$1;
(statearr_24240_24263[(2)] = inst_24221);

(statearr_24240_24263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (10))){
var inst_24219 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
var statearr_24241_24264 = state_24227__$1;
(statearr_24241_24264[(2)] = inst_24219);

(statearr_24241_24264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (8))){
var inst_24206 = (state_24227[(7)]);
var inst_24208 = (state_24227[(9)]);
var inst_24199 = (state_24227[(10)]);
var inst_24207 = (state_24227[(8)]);
var inst_24211 = (function (){var cs = inst_24199;
var vec__24204 = inst_24206;
var v = inst_24207;
var c = inst_24208;
return ((function (cs,vec__24204,v,c,inst_24206,inst_24208,inst_24199,inst_24207,state_val_24228,c__22157__auto___24255,out){
return (function (p1__24194_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24194_SHARP_);
});
;})(cs,vec__24204,v,c,inst_24206,inst_24208,inst_24199,inst_24207,state_val_24228,c__22157__auto___24255,out))
})();
var inst_24212 = cljs.core.filterv.call(null,inst_24211,inst_24199);
var inst_24199__$1 = inst_24212;
var state_24227__$1 = (function (){var statearr_24242 = state_24227;
(statearr_24242[(10)] = inst_24199__$1);

return statearr_24242;
})();
var statearr_24243_24265 = state_24227__$1;
(statearr_24243_24265[(2)] = null);

(statearr_24243_24265[(1)] = (2));


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
});})(c__22157__auto___24255,out))
;
return ((function (switch__22045__auto__,c__22157__auto___24255,out){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_24247 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24247[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_24247[(1)] = (1));

return statearr_24247;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_24227){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24248){if((e24248 instanceof Object)){
var ex__22049__auto__ = e24248;
var statearr_24249_24266 = state_24227;
(statearr_24249_24266[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24267 = state_24227;
state_24227 = G__24267;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_24227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_24227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___24255,out))
})();
var state__22159__auto__ = (function (){var statearr_24250 = f__22158__auto__.call(null);
(statearr_24250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___24255);

return statearr_24250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___24255,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24268 = [];
var len__19515__auto___24317 = arguments.length;
var i__19516__auto___24318 = (0);
while(true){
if((i__19516__auto___24318 < len__19515__auto___24317)){
args24268.push((arguments[i__19516__auto___24318]));

var G__24319 = (i__19516__auto___24318 + (1));
i__19516__auto___24318 = G__24319;
continue;
} else {
}
break;
}

var G__24270 = args24268.length;
switch (G__24270) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24268.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22157__auto___24321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___24321,out){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___24321,out){
return (function (state_24294){
var state_val_24295 = (state_24294[(1)]);
if((state_val_24295 === (7))){
var inst_24276 = (state_24294[(7)]);
var inst_24276__$1 = (state_24294[(2)]);
var inst_24277 = (inst_24276__$1 == null);
var inst_24278 = cljs.core.not.call(null,inst_24277);
var state_24294__$1 = (function (){var statearr_24296 = state_24294;
(statearr_24296[(7)] = inst_24276__$1);

return statearr_24296;
})();
if(inst_24278){
var statearr_24297_24322 = state_24294__$1;
(statearr_24297_24322[(1)] = (8));

} else {
var statearr_24298_24323 = state_24294__$1;
(statearr_24298_24323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24295 === (1))){
var inst_24271 = (0);
var state_24294__$1 = (function (){var statearr_24299 = state_24294;
(statearr_24299[(8)] = inst_24271);

return statearr_24299;
})();
var statearr_24300_24324 = state_24294__$1;
(statearr_24300_24324[(2)] = null);

(statearr_24300_24324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24295 === (4))){
var state_24294__$1 = state_24294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24294__$1,(7),ch);
} else {
if((state_val_24295 === (6))){
var inst_24289 = (state_24294[(2)]);
var state_24294__$1 = state_24294;
var statearr_24301_24325 = state_24294__$1;
(statearr_24301_24325[(2)] = inst_24289);

(statearr_24301_24325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24295 === (3))){
var inst_24291 = (state_24294[(2)]);
var inst_24292 = cljs.core.async.close_BANG_.call(null,out);
var state_24294__$1 = (function (){var statearr_24302 = state_24294;
(statearr_24302[(9)] = inst_24291);

return statearr_24302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24294__$1,inst_24292);
} else {
if((state_val_24295 === (2))){
var inst_24271 = (state_24294[(8)]);
var inst_24273 = (inst_24271 < n);
var state_24294__$1 = state_24294;
if(cljs.core.truth_(inst_24273)){
var statearr_24303_24326 = state_24294__$1;
(statearr_24303_24326[(1)] = (4));

} else {
var statearr_24304_24327 = state_24294__$1;
(statearr_24304_24327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24295 === (11))){
var inst_24271 = (state_24294[(8)]);
var inst_24281 = (state_24294[(2)]);
var inst_24282 = (inst_24271 + (1));
var inst_24271__$1 = inst_24282;
var state_24294__$1 = (function (){var statearr_24305 = state_24294;
(statearr_24305[(8)] = inst_24271__$1);

(statearr_24305[(10)] = inst_24281);

return statearr_24305;
})();
var statearr_24306_24328 = state_24294__$1;
(statearr_24306_24328[(2)] = null);

(statearr_24306_24328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24295 === (9))){
var state_24294__$1 = state_24294;
var statearr_24307_24329 = state_24294__$1;
(statearr_24307_24329[(2)] = null);

(statearr_24307_24329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24295 === (5))){
var state_24294__$1 = state_24294;
var statearr_24308_24330 = state_24294__$1;
(statearr_24308_24330[(2)] = null);

(statearr_24308_24330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24295 === (10))){
var inst_24286 = (state_24294[(2)]);
var state_24294__$1 = state_24294;
var statearr_24309_24331 = state_24294__$1;
(statearr_24309_24331[(2)] = inst_24286);

(statearr_24309_24331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24295 === (8))){
var inst_24276 = (state_24294[(7)]);
var state_24294__$1 = state_24294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24294__$1,(11),out,inst_24276);
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
});})(c__22157__auto___24321,out))
;
return ((function (switch__22045__auto__,c__22157__auto___24321,out){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_24313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24313[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_24313[(1)] = (1));

return statearr_24313;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_24294){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24314){if((e24314 instanceof Object)){
var ex__22049__auto__ = e24314;
var statearr_24315_24332 = state_24294;
(statearr_24315_24332[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24333 = state_24294;
state_24294 = G__24333;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_24294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_24294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___24321,out))
})();
var state__22159__auto__ = (function (){var statearr_24316 = f__22158__auto__.call(null);
(statearr_24316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___24321);

return statearr_24316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___24321,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24341 = (function (map_LT_,f,ch,meta24342){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24342 = meta24342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24343,meta24342__$1){
var self__ = this;
var _24343__$1 = this;
return (new cljs.core.async.t_cljs$core$async24341(self__.map_LT_,self__.f,self__.ch,meta24342__$1));
});

cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24343){
var self__ = this;
var _24343__$1 = this;
return self__.meta24342;
});

cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24344 = (function (map_LT_,f,ch,meta24342,_,fn1,meta24345){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24342 = meta24342;
this._ = _;
this.fn1 = fn1;
this.meta24345 = meta24345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24346,meta24345__$1){
var self__ = this;
var _24346__$1 = this;
return (new cljs.core.async.t_cljs$core$async24344(self__.map_LT_,self__.f,self__.ch,self__.meta24342,self__._,self__.fn1,meta24345__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24346){
var self__ = this;
var _24346__$1 = this;
return self__.meta24345;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24334_SHARP_){
return f1.call(null,(((p1__24334_SHARP_ == null))?null:self__.f.call(null,p1__24334_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24344.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24342","meta24342",-377036233,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24341","cljs.core.async/t_cljs$core$async24341",-2078207465,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24345","meta24345",1081832453,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24344";

cljs.core.async.t_cljs$core$async24344.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async24344");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24344 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24344(map_LT___$1,f__$1,ch__$1,meta24342__$1,___$2,fn1__$1,meta24345){
return (new cljs.core.async.t_cljs$core$async24344(map_LT___$1,f__$1,ch__$1,meta24342__$1,___$2,fn1__$1,meta24345));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24344(self__.map_LT_,self__.f,self__.ch,self__.meta24342,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18433__auto__ = ret;
if(cljs.core.truth_(and__18433__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18433__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24342","meta24342",-377036233,null)], null);
});

cljs.core.async.t_cljs$core$async24341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24341";

cljs.core.async.t_cljs$core$async24341.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async24341");
});

cljs.core.async.__GT_t_cljs$core$async24341 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24341(map_LT___$1,f__$1,ch__$1,meta24342){
return (new cljs.core.async.t_cljs$core$async24341(map_LT___$1,f__$1,ch__$1,meta24342));
});

}

return (new cljs.core.async.t_cljs$core$async24341(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24350 = (function (map_GT_,f,ch,meta24351){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24351 = meta24351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24352,meta24351__$1){
var self__ = this;
var _24352__$1 = this;
return (new cljs.core.async.t_cljs$core$async24350(self__.map_GT_,self__.f,self__.ch,meta24351__$1));
});

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24352){
var self__ = this;
var _24352__$1 = this;
return self__.meta24351;
});

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24351","meta24351",1542069447,null)], null);
});

cljs.core.async.t_cljs$core$async24350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24350";

cljs.core.async.t_cljs$core$async24350.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async24350");
});

cljs.core.async.__GT_t_cljs$core$async24350 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24350(map_GT___$1,f__$1,ch__$1,meta24351){
return (new cljs.core.async.t_cljs$core$async24350(map_GT___$1,f__$1,ch__$1,meta24351));
});

}

return (new cljs.core.async.t_cljs$core$async24350(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24356 = (function (filter_GT_,p,ch,meta24357){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24357 = meta24357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24358,meta24357__$1){
var self__ = this;
var _24358__$1 = this;
return (new cljs.core.async.t_cljs$core$async24356(self__.filter_GT_,self__.p,self__.ch,meta24357__$1));
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24358){
var self__ = this;
var _24358__$1 = this;
return self__.meta24357;
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24357","meta24357",-863697096,null)], null);
});

cljs.core.async.t_cljs$core$async24356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24356";

cljs.core.async.t_cljs$core$async24356.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async24356");
});

cljs.core.async.__GT_t_cljs$core$async24356 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24356(filter_GT___$1,p__$1,ch__$1,meta24357){
return (new cljs.core.async.t_cljs$core$async24356(filter_GT___$1,p__$1,ch__$1,meta24357));
});

}

return (new cljs.core.async.t_cljs$core$async24356(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24359 = [];
var len__19515__auto___24403 = arguments.length;
var i__19516__auto___24404 = (0);
while(true){
if((i__19516__auto___24404 < len__19515__auto___24403)){
args24359.push((arguments[i__19516__auto___24404]));

var G__24405 = (i__19516__auto___24404 + (1));
i__19516__auto___24404 = G__24405;
continue;
} else {
}
break;
}

var G__24361 = args24359.length;
switch (G__24361) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24359.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22157__auto___24407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___24407,out){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___24407,out){
return (function (state_24382){
var state_val_24383 = (state_24382[(1)]);
if((state_val_24383 === (7))){
var inst_24378 = (state_24382[(2)]);
var state_24382__$1 = state_24382;
var statearr_24384_24408 = state_24382__$1;
(statearr_24384_24408[(2)] = inst_24378);

(statearr_24384_24408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24383 === (1))){
var state_24382__$1 = state_24382;
var statearr_24385_24409 = state_24382__$1;
(statearr_24385_24409[(2)] = null);

(statearr_24385_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24383 === (4))){
var inst_24364 = (state_24382[(7)]);
var inst_24364__$1 = (state_24382[(2)]);
var inst_24365 = (inst_24364__$1 == null);
var state_24382__$1 = (function (){var statearr_24386 = state_24382;
(statearr_24386[(7)] = inst_24364__$1);

return statearr_24386;
})();
if(cljs.core.truth_(inst_24365)){
var statearr_24387_24410 = state_24382__$1;
(statearr_24387_24410[(1)] = (5));

} else {
var statearr_24388_24411 = state_24382__$1;
(statearr_24388_24411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24383 === (6))){
var inst_24364 = (state_24382[(7)]);
var inst_24369 = p.call(null,inst_24364);
var state_24382__$1 = state_24382;
if(cljs.core.truth_(inst_24369)){
var statearr_24389_24412 = state_24382__$1;
(statearr_24389_24412[(1)] = (8));

} else {
var statearr_24390_24413 = state_24382__$1;
(statearr_24390_24413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24383 === (3))){
var inst_24380 = (state_24382[(2)]);
var state_24382__$1 = state_24382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24382__$1,inst_24380);
} else {
if((state_val_24383 === (2))){
var state_24382__$1 = state_24382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24382__$1,(4),ch);
} else {
if((state_val_24383 === (11))){
var inst_24372 = (state_24382[(2)]);
var state_24382__$1 = state_24382;
var statearr_24391_24414 = state_24382__$1;
(statearr_24391_24414[(2)] = inst_24372);

(statearr_24391_24414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24383 === (9))){
var state_24382__$1 = state_24382;
var statearr_24392_24415 = state_24382__$1;
(statearr_24392_24415[(2)] = null);

(statearr_24392_24415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24383 === (5))){
var inst_24367 = cljs.core.async.close_BANG_.call(null,out);
var state_24382__$1 = state_24382;
var statearr_24393_24416 = state_24382__$1;
(statearr_24393_24416[(2)] = inst_24367);

(statearr_24393_24416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24383 === (10))){
var inst_24375 = (state_24382[(2)]);
var state_24382__$1 = (function (){var statearr_24394 = state_24382;
(statearr_24394[(8)] = inst_24375);

return statearr_24394;
})();
var statearr_24395_24417 = state_24382__$1;
(statearr_24395_24417[(2)] = null);

(statearr_24395_24417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24383 === (8))){
var inst_24364 = (state_24382[(7)]);
var state_24382__$1 = state_24382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24382__$1,(11),out,inst_24364);
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
});})(c__22157__auto___24407,out))
;
return ((function (switch__22045__auto__,c__22157__auto___24407,out){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_24399 = [null,null,null,null,null,null,null,null,null];
(statearr_24399[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_24399[(1)] = (1));

return statearr_24399;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_24382){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24400){if((e24400 instanceof Object)){
var ex__22049__auto__ = e24400;
var statearr_24401_24418 = state_24382;
(statearr_24401_24418[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24419 = state_24382;
state_24382 = G__24419;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_24382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_24382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___24407,out))
})();
var state__22159__auto__ = (function (){var statearr_24402 = f__22158__auto__.call(null);
(statearr_24402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___24407);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___24407,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24420 = [];
var len__19515__auto___24423 = arguments.length;
var i__19516__auto___24424 = (0);
while(true){
if((i__19516__auto___24424 < len__19515__auto___24423)){
args24420.push((arguments[i__19516__auto___24424]));

var G__24425 = (i__19516__auto___24424 + (1));
i__19516__auto___24424 = G__24425;
continue;
} else {
}
break;
}

var G__24422 = args24420.length;
switch (G__24422) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24420.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto__){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto__){
return (function (state_24592){
var state_val_24593 = (state_24592[(1)]);
if((state_val_24593 === (7))){
var inst_24588 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24594_24635 = state_24592__$1;
(statearr_24594_24635[(2)] = inst_24588);

(statearr_24594_24635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (20))){
var inst_24558 = (state_24592[(7)]);
var inst_24569 = (state_24592[(2)]);
var inst_24570 = cljs.core.next.call(null,inst_24558);
var inst_24544 = inst_24570;
var inst_24545 = null;
var inst_24546 = (0);
var inst_24547 = (0);
var state_24592__$1 = (function (){var statearr_24595 = state_24592;
(statearr_24595[(8)] = inst_24546);

(statearr_24595[(9)] = inst_24547);

(statearr_24595[(10)] = inst_24544);

(statearr_24595[(11)] = inst_24545);

(statearr_24595[(12)] = inst_24569);

return statearr_24595;
})();
var statearr_24596_24636 = state_24592__$1;
(statearr_24596_24636[(2)] = null);

(statearr_24596_24636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (1))){
var state_24592__$1 = state_24592;
var statearr_24597_24637 = state_24592__$1;
(statearr_24597_24637[(2)] = null);

(statearr_24597_24637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (4))){
var inst_24533 = (state_24592[(13)]);
var inst_24533__$1 = (state_24592[(2)]);
var inst_24534 = (inst_24533__$1 == null);
var state_24592__$1 = (function (){var statearr_24598 = state_24592;
(statearr_24598[(13)] = inst_24533__$1);

return statearr_24598;
})();
if(cljs.core.truth_(inst_24534)){
var statearr_24599_24638 = state_24592__$1;
(statearr_24599_24638[(1)] = (5));

} else {
var statearr_24600_24639 = state_24592__$1;
(statearr_24600_24639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (15))){
var state_24592__$1 = state_24592;
var statearr_24604_24640 = state_24592__$1;
(statearr_24604_24640[(2)] = null);

(statearr_24604_24640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (21))){
var state_24592__$1 = state_24592;
var statearr_24605_24641 = state_24592__$1;
(statearr_24605_24641[(2)] = null);

(statearr_24605_24641[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (13))){
var inst_24546 = (state_24592[(8)]);
var inst_24547 = (state_24592[(9)]);
var inst_24544 = (state_24592[(10)]);
var inst_24545 = (state_24592[(11)]);
var inst_24554 = (state_24592[(2)]);
var inst_24555 = (inst_24547 + (1));
var tmp24601 = inst_24546;
var tmp24602 = inst_24544;
var tmp24603 = inst_24545;
var inst_24544__$1 = tmp24602;
var inst_24545__$1 = tmp24603;
var inst_24546__$1 = tmp24601;
var inst_24547__$1 = inst_24555;
var state_24592__$1 = (function (){var statearr_24606 = state_24592;
(statearr_24606[(8)] = inst_24546__$1);

(statearr_24606[(14)] = inst_24554);

(statearr_24606[(9)] = inst_24547__$1);

(statearr_24606[(10)] = inst_24544__$1);

(statearr_24606[(11)] = inst_24545__$1);

return statearr_24606;
})();
var statearr_24607_24642 = state_24592__$1;
(statearr_24607_24642[(2)] = null);

(statearr_24607_24642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (22))){
var state_24592__$1 = state_24592;
var statearr_24608_24643 = state_24592__$1;
(statearr_24608_24643[(2)] = null);

(statearr_24608_24643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (6))){
var inst_24533 = (state_24592[(13)]);
var inst_24542 = f.call(null,inst_24533);
var inst_24543 = cljs.core.seq.call(null,inst_24542);
var inst_24544 = inst_24543;
var inst_24545 = null;
var inst_24546 = (0);
var inst_24547 = (0);
var state_24592__$1 = (function (){var statearr_24609 = state_24592;
(statearr_24609[(8)] = inst_24546);

(statearr_24609[(9)] = inst_24547);

(statearr_24609[(10)] = inst_24544);

(statearr_24609[(11)] = inst_24545);

return statearr_24609;
})();
var statearr_24610_24644 = state_24592__$1;
(statearr_24610_24644[(2)] = null);

(statearr_24610_24644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (17))){
var inst_24558 = (state_24592[(7)]);
var inst_24562 = cljs.core.chunk_first.call(null,inst_24558);
var inst_24563 = cljs.core.chunk_rest.call(null,inst_24558);
var inst_24564 = cljs.core.count.call(null,inst_24562);
var inst_24544 = inst_24563;
var inst_24545 = inst_24562;
var inst_24546 = inst_24564;
var inst_24547 = (0);
var state_24592__$1 = (function (){var statearr_24611 = state_24592;
(statearr_24611[(8)] = inst_24546);

(statearr_24611[(9)] = inst_24547);

(statearr_24611[(10)] = inst_24544);

(statearr_24611[(11)] = inst_24545);

return statearr_24611;
})();
var statearr_24612_24645 = state_24592__$1;
(statearr_24612_24645[(2)] = null);

(statearr_24612_24645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (3))){
var inst_24590 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24592__$1,inst_24590);
} else {
if((state_val_24593 === (12))){
var inst_24578 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24613_24646 = state_24592__$1;
(statearr_24613_24646[(2)] = inst_24578);

(statearr_24613_24646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (2))){
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24592__$1,(4),in$);
} else {
if((state_val_24593 === (23))){
var inst_24586 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24614_24647 = state_24592__$1;
(statearr_24614_24647[(2)] = inst_24586);

(statearr_24614_24647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (19))){
var inst_24573 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24615_24648 = state_24592__$1;
(statearr_24615_24648[(2)] = inst_24573);

(statearr_24615_24648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (11))){
var inst_24558 = (state_24592[(7)]);
var inst_24544 = (state_24592[(10)]);
var inst_24558__$1 = cljs.core.seq.call(null,inst_24544);
var state_24592__$1 = (function (){var statearr_24616 = state_24592;
(statearr_24616[(7)] = inst_24558__$1);

return statearr_24616;
})();
if(inst_24558__$1){
var statearr_24617_24649 = state_24592__$1;
(statearr_24617_24649[(1)] = (14));

} else {
var statearr_24618_24650 = state_24592__$1;
(statearr_24618_24650[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (9))){
var inst_24580 = (state_24592[(2)]);
var inst_24581 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24592__$1 = (function (){var statearr_24619 = state_24592;
(statearr_24619[(15)] = inst_24580);

return statearr_24619;
})();
if(cljs.core.truth_(inst_24581)){
var statearr_24620_24651 = state_24592__$1;
(statearr_24620_24651[(1)] = (21));

} else {
var statearr_24621_24652 = state_24592__$1;
(statearr_24621_24652[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (5))){
var inst_24536 = cljs.core.async.close_BANG_.call(null,out);
var state_24592__$1 = state_24592;
var statearr_24622_24653 = state_24592__$1;
(statearr_24622_24653[(2)] = inst_24536);

(statearr_24622_24653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (14))){
var inst_24558 = (state_24592[(7)]);
var inst_24560 = cljs.core.chunked_seq_QMARK_.call(null,inst_24558);
var state_24592__$1 = state_24592;
if(inst_24560){
var statearr_24623_24654 = state_24592__$1;
(statearr_24623_24654[(1)] = (17));

} else {
var statearr_24624_24655 = state_24592__$1;
(statearr_24624_24655[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (16))){
var inst_24576 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24625_24656 = state_24592__$1;
(statearr_24625_24656[(2)] = inst_24576);

(statearr_24625_24656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (10))){
var inst_24547 = (state_24592[(9)]);
var inst_24545 = (state_24592[(11)]);
var inst_24552 = cljs.core._nth.call(null,inst_24545,inst_24547);
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24592__$1,(13),out,inst_24552);
} else {
if((state_val_24593 === (18))){
var inst_24558 = (state_24592[(7)]);
var inst_24567 = cljs.core.first.call(null,inst_24558);
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24592__$1,(20),out,inst_24567);
} else {
if((state_val_24593 === (8))){
var inst_24546 = (state_24592[(8)]);
var inst_24547 = (state_24592[(9)]);
var inst_24549 = (inst_24547 < inst_24546);
var inst_24550 = inst_24549;
var state_24592__$1 = state_24592;
if(cljs.core.truth_(inst_24550)){
var statearr_24626_24657 = state_24592__$1;
(statearr_24626_24657[(1)] = (10));

} else {
var statearr_24627_24658 = state_24592__$1;
(statearr_24627_24658[(1)] = (11));

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
});})(c__22157__auto__))
;
return ((function (switch__22045__auto__,c__22157__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22046__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22046__auto____0 = (function (){
var statearr_24631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24631[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22046__auto__);

(statearr_24631[(1)] = (1));

return statearr_24631;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22046__auto____1 = (function (state_24592){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24632){if((e24632 instanceof Object)){
var ex__22049__auto__ = e24632;
var statearr_24633_24659 = state_24592;
(statearr_24633_24659[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24660 = state_24592;
state_24592 = G__24660;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22046__auto__ = function(state_24592){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22046__auto____1.call(this,state_24592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22046__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22046__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto__))
})();
var state__22159__auto__ = (function (){var statearr_24634 = f__22158__auto__.call(null);
(statearr_24634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto__);

return statearr_24634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto__))
);

return c__22157__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24661 = [];
var len__19515__auto___24664 = arguments.length;
var i__19516__auto___24665 = (0);
while(true){
if((i__19516__auto___24665 < len__19515__auto___24664)){
args24661.push((arguments[i__19516__auto___24665]));

var G__24666 = (i__19516__auto___24665 + (1));
i__19516__auto___24665 = G__24666;
continue;
} else {
}
break;
}

var G__24663 = args24661.length;
switch (G__24663) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24661.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24668 = [];
var len__19515__auto___24671 = arguments.length;
var i__19516__auto___24672 = (0);
while(true){
if((i__19516__auto___24672 < len__19515__auto___24671)){
args24668.push((arguments[i__19516__auto___24672]));

var G__24673 = (i__19516__auto___24672 + (1));
i__19516__auto___24672 = G__24673;
continue;
} else {
}
break;
}

var G__24670 = args24668.length;
switch (G__24670) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24668.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24675 = [];
var len__19515__auto___24726 = arguments.length;
var i__19516__auto___24727 = (0);
while(true){
if((i__19516__auto___24727 < len__19515__auto___24726)){
args24675.push((arguments[i__19516__auto___24727]));

var G__24728 = (i__19516__auto___24727 + (1));
i__19516__auto___24727 = G__24728;
continue;
} else {
}
break;
}

var G__24677 = args24675.length;
switch (G__24677) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24675.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22157__auto___24730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___24730,out){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___24730,out){
return (function (state_24701){
var state_val_24702 = (state_24701[(1)]);
if((state_val_24702 === (7))){
var inst_24696 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24703_24731 = state_24701__$1;
(statearr_24703_24731[(2)] = inst_24696);

(statearr_24703_24731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (1))){
var inst_24678 = null;
var state_24701__$1 = (function (){var statearr_24704 = state_24701;
(statearr_24704[(7)] = inst_24678);

return statearr_24704;
})();
var statearr_24705_24732 = state_24701__$1;
(statearr_24705_24732[(2)] = null);

(statearr_24705_24732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (4))){
var inst_24681 = (state_24701[(8)]);
var inst_24681__$1 = (state_24701[(2)]);
var inst_24682 = (inst_24681__$1 == null);
var inst_24683 = cljs.core.not.call(null,inst_24682);
var state_24701__$1 = (function (){var statearr_24706 = state_24701;
(statearr_24706[(8)] = inst_24681__$1);

return statearr_24706;
})();
if(inst_24683){
var statearr_24707_24733 = state_24701__$1;
(statearr_24707_24733[(1)] = (5));

} else {
var statearr_24708_24734 = state_24701__$1;
(statearr_24708_24734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (6))){
var state_24701__$1 = state_24701;
var statearr_24709_24735 = state_24701__$1;
(statearr_24709_24735[(2)] = null);

(statearr_24709_24735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (3))){
var inst_24698 = (state_24701[(2)]);
var inst_24699 = cljs.core.async.close_BANG_.call(null,out);
var state_24701__$1 = (function (){var statearr_24710 = state_24701;
(statearr_24710[(9)] = inst_24698);

return statearr_24710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24701__$1,inst_24699);
} else {
if((state_val_24702 === (2))){
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24701__$1,(4),ch);
} else {
if((state_val_24702 === (11))){
var inst_24681 = (state_24701[(8)]);
var inst_24690 = (state_24701[(2)]);
var inst_24678 = inst_24681;
var state_24701__$1 = (function (){var statearr_24711 = state_24701;
(statearr_24711[(7)] = inst_24678);

(statearr_24711[(10)] = inst_24690);

return statearr_24711;
})();
var statearr_24712_24736 = state_24701__$1;
(statearr_24712_24736[(2)] = null);

(statearr_24712_24736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (9))){
var inst_24681 = (state_24701[(8)]);
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24701__$1,(11),out,inst_24681);
} else {
if((state_val_24702 === (5))){
var inst_24678 = (state_24701[(7)]);
var inst_24681 = (state_24701[(8)]);
var inst_24685 = cljs.core._EQ_.call(null,inst_24681,inst_24678);
var state_24701__$1 = state_24701;
if(inst_24685){
var statearr_24714_24737 = state_24701__$1;
(statearr_24714_24737[(1)] = (8));

} else {
var statearr_24715_24738 = state_24701__$1;
(statearr_24715_24738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (10))){
var inst_24693 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24716_24739 = state_24701__$1;
(statearr_24716_24739[(2)] = inst_24693);

(statearr_24716_24739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (8))){
var inst_24678 = (state_24701[(7)]);
var tmp24713 = inst_24678;
var inst_24678__$1 = tmp24713;
var state_24701__$1 = (function (){var statearr_24717 = state_24701;
(statearr_24717[(7)] = inst_24678__$1);

return statearr_24717;
})();
var statearr_24718_24740 = state_24701__$1;
(statearr_24718_24740[(2)] = null);

(statearr_24718_24740[(1)] = (2));


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
});})(c__22157__auto___24730,out))
;
return ((function (switch__22045__auto__,c__22157__auto___24730,out){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_24722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24722[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_24722[(1)] = (1));

return statearr_24722;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_24701){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24723){if((e24723 instanceof Object)){
var ex__22049__auto__ = e24723;
var statearr_24724_24741 = state_24701;
(statearr_24724_24741[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24742 = state_24701;
state_24701 = G__24742;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_24701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_24701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___24730,out))
})();
var state__22159__auto__ = (function (){var statearr_24725 = f__22158__auto__.call(null);
(statearr_24725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___24730);

return statearr_24725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___24730,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24743 = [];
var len__19515__auto___24813 = arguments.length;
var i__19516__auto___24814 = (0);
while(true){
if((i__19516__auto___24814 < len__19515__auto___24813)){
args24743.push((arguments[i__19516__auto___24814]));

var G__24815 = (i__19516__auto___24814 + (1));
i__19516__auto___24814 = G__24815;
continue;
} else {
}
break;
}

var G__24745 = args24743.length;
switch (G__24745) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24743.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22157__auto___24817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___24817,out){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___24817,out){
return (function (state_24783){
var state_val_24784 = (state_24783[(1)]);
if((state_val_24784 === (7))){
var inst_24779 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24785_24818 = state_24783__$1;
(statearr_24785_24818[(2)] = inst_24779);

(statearr_24785_24818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (1))){
var inst_24746 = (new Array(n));
var inst_24747 = inst_24746;
var inst_24748 = (0);
var state_24783__$1 = (function (){var statearr_24786 = state_24783;
(statearr_24786[(7)] = inst_24747);

(statearr_24786[(8)] = inst_24748);

return statearr_24786;
})();
var statearr_24787_24819 = state_24783__$1;
(statearr_24787_24819[(2)] = null);

(statearr_24787_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (4))){
var inst_24751 = (state_24783[(9)]);
var inst_24751__$1 = (state_24783[(2)]);
var inst_24752 = (inst_24751__$1 == null);
var inst_24753 = cljs.core.not.call(null,inst_24752);
var state_24783__$1 = (function (){var statearr_24788 = state_24783;
(statearr_24788[(9)] = inst_24751__$1);

return statearr_24788;
})();
if(inst_24753){
var statearr_24789_24820 = state_24783__$1;
(statearr_24789_24820[(1)] = (5));

} else {
var statearr_24790_24821 = state_24783__$1;
(statearr_24790_24821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (15))){
var inst_24773 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24791_24822 = state_24783__$1;
(statearr_24791_24822[(2)] = inst_24773);

(statearr_24791_24822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (13))){
var state_24783__$1 = state_24783;
var statearr_24792_24823 = state_24783__$1;
(statearr_24792_24823[(2)] = null);

(statearr_24792_24823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (6))){
var inst_24748 = (state_24783[(8)]);
var inst_24769 = (inst_24748 > (0));
var state_24783__$1 = state_24783;
if(cljs.core.truth_(inst_24769)){
var statearr_24793_24824 = state_24783__$1;
(statearr_24793_24824[(1)] = (12));

} else {
var statearr_24794_24825 = state_24783__$1;
(statearr_24794_24825[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (3))){
var inst_24781 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24783__$1,inst_24781);
} else {
if((state_val_24784 === (12))){
var inst_24747 = (state_24783[(7)]);
var inst_24771 = cljs.core.vec.call(null,inst_24747);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24783__$1,(15),out,inst_24771);
} else {
if((state_val_24784 === (2))){
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24783__$1,(4),ch);
} else {
if((state_val_24784 === (11))){
var inst_24763 = (state_24783[(2)]);
var inst_24764 = (new Array(n));
var inst_24747 = inst_24764;
var inst_24748 = (0);
var state_24783__$1 = (function (){var statearr_24795 = state_24783;
(statearr_24795[(7)] = inst_24747);

(statearr_24795[(10)] = inst_24763);

(statearr_24795[(8)] = inst_24748);

return statearr_24795;
})();
var statearr_24796_24826 = state_24783__$1;
(statearr_24796_24826[(2)] = null);

(statearr_24796_24826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (9))){
var inst_24747 = (state_24783[(7)]);
var inst_24761 = cljs.core.vec.call(null,inst_24747);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24783__$1,(11),out,inst_24761);
} else {
if((state_val_24784 === (5))){
var inst_24747 = (state_24783[(7)]);
var inst_24756 = (state_24783[(11)]);
var inst_24748 = (state_24783[(8)]);
var inst_24751 = (state_24783[(9)]);
var inst_24755 = (inst_24747[inst_24748] = inst_24751);
var inst_24756__$1 = (inst_24748 + (1));
var inst_24757 = (inst_24756__$1 < n);
var state_24783__$1 = (function (){var statearr_24797 = state_24783;
(statearr_24797[(12)] = inst_24755);

(statearr_24797[(11)] = inst_24756__$1);

return statearr_24797;
})();
if(cljs.core.truth_(inst_24757)){
var statearr_24798_24827 = state_24783__$1;
(statearr_24798_24827[(1)] = (8));

} else {
var statearr_24799_24828 = state_24783__$1;
(statearr_24799_24828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (14))){
var inst_24776 = (state_24783[(2)]);
var inst_24777 = cljs.core.async.close_BANG_.call(null,out);
var state_24783__$1 = (function (){var statearr_24801 = state_24783;
(statearr_24801[(13)] = inst_24776);

return statearr_24801;
})();
var statearr_24802_24829 = state_24783__$1;
(statearr_24802_24829[(2)] = inst_24777);

(statearr_24802_24829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (10))){
var inst_24767 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24803_24830 = state_24783__$1;
(statearr_24803_24830[(2)] = inst_24767);

(statearr_24803_24830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (8))){
var inst_24747 = (state_24783[(7)]);
var inst_24756 = (state_24783[(11)]);
var tmp24800 = inst_24747;
var inst_24747__$1 = tmp24800;
var inst_24748 = inst_24756;
var state_24783__$1 = (function (){var statearr_24804 = state_24783;
(statearr_24804[(7)] = inst_24747__$1);

(statearr_24804[(8)] = inst_24748);

return statearr_24804;
})();
var statearr_24805_24831 = state_24783__$1;
(statearr_24805_24831[(2)] = null);

(statearr_24805_24831[(1)] = (2));


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
});})(c__22157__auto___24817,out))
;
return ((function (switch__22045__auto__,c__22157__auto___24817,out){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_24809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24809[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_24809[(1)] = (1));

return statearr_24809;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_24783){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24810){if((e24810 instanceof Object)){
var ex__22049__auto__ = e24810;
var statearr_24811_24832 = state_24783;
(statearr_24811_24832[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24833 = state_24783;
state_24783 = G__24833;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_24783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_24783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___24817,out))
})();
var state__22159__auto__ = (function (){var statearr_24812 = f__22158__auto__.call(null);
(statearr_24812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___24817);

return statearr_24812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___24817,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24834 = [];
var len__19515__auto___24908 = arguments.length;
var i__19516__auto___24909 = (0);
while(true){
if((i__19516__auto___24909 < len__19515__auto___24908)){
args24834.push((arguments[i__19516__auto___24909]));

var G__24910 = (i__19516__auto___24909 + (1));
i__19516__auto___24909 = G__24910;
continue;
} else {
}
break;
}

var G__24836 = args24834.length;
switch (G__24836) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24834.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22157__auto___24912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22157__auto___24912,out){
return (function (){
var f__22158__auto__ = (function (){var switch__22045__auto__ = ((function (c__22157__auto___24912,out){
return (function (state_24878){
var state_val_24879 = (state_24878[(1)]);
if((state_val_24879 === (7))){
var inst_24874 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
var statearr_24880_24913 = state_24878__$1;
(statearr_24880_24913[(2)] = inst_24874);

(statearr_24880_24913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (1))){
var inst_24837 = [];
var inst_24838 = inst_24837;
var inst_24839 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24878__$1 = (function (){var statearr_24881 = state_24878;
(statearr_24881[(7)] = inst_24839);

(statearr_24881[(8)] = inst_24838);

return statearr_24881;
})();
var statearr_24882_24914 = state_24878__$1;
(statearr_24882_24914[(2)] = null);

(statearr_24882_24914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (4))){
var inst_24842 = (state_24878[(9)]);
var inst_24842__$1 = (state_24878[(2)]);
var inst_24843 = (inst_24842__$1 == null);
var inst_24844 = cljs.core.not.call(null,inst_24843);
var state_24878__$1 = (function (){var statearr_24883 = state_24878;
(statearr_24883[(9)] = inst_24842__$1);

return statearr_24883;
})();
if(inst_24844){
var statearr_24884_24915 = state_24878__$1;
(statearr_24884_24915[(1)] = (5));

} else {
var statearr_24885_24916 = state_24878__$1;
(statearr_24885_24916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (15))){
var inst_24868 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
var statearr_24886_24917 = state_24878__$1;
(statearr_24886_24917[(2)] = inst_24868);

(statearr_24886_24917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (13))){
var state_24878__$1 = state_24878;
var statearr_24887_24918 = state_24878__$1;
(statearr_24887_24918[(2)] = null);

(statearr_24887_24918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (6))){
var inst_24838 = (state_24878[(8)]);
var inst_24863 = inst_24838.length;
var inst_24864 = (inst_24863 > (0));
var state_24878__$1 = state_24878;
if(cljs.core.truth_(inst_24864)){
var statearr_24888_24919 = state_24878__$1;
(statearr_24888_24919[(1)] = (12));

} else {
var statearr_24889_24920 = state_24878__$1;
(statearr_24889_24920[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (3))){
var inst_24876 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24878__$1,inst_24876);
} else {
if((state_val_24879 === (12))){
var inst_24838 = (state_24878[(8)]);
var inst_24866 = cljs.core.vec.call(null,inst_24838);
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24878__$1,(15),out,inst_24866);
} else {
if((state_val_24879 === (2))){
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24878__$1,(4),ch);
} else {
if((state_val_24879 === (11))){
var inst_24842 = (state_24878[(9)]);
var inst_24846 = (state_24878[(10)]);
var inst_24856 = (state_24878[(2)]);
var inst_24857 = [];
var inst_24858 = inst_24857.push(inst_24842);
var inst_24838 = inst_24857;
var inst_24839 = inst_24846;
var state_24878__$1 = (function (){var statearr_24890 = state_24878;
(statearr_24890[(7)] = inst_24839);

(statearr_24890[(11)] = inst_24858);

(statearr_24890[(12)] = inst_24856);

(statearr_24890[(8)] = inst_24838);

return statearr_24890;
})();
var statearr_24891_24921 = state_24878__$1;
(statearr_24891_24921[(2)] = null);

(statearr_24891_24921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (9))){
var inst_24838 = (state_24878[(8)]);
var inst_24854 = cljs.core.vec.call(null,inst_24838);
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24878__$1,(11),out,inst_24854);
} else {
if((state_val_24879 === (5))){
var inst_24839 = (state_24878[(7)]);
var inst_24842 = (state_24878[(9)]);
var inst_24846 = (state_24878[(10)]);
var inst_24846__$1 = f.call(null,inst_24842);
var inst_24847 = cljs.core._EQ_.call(null,inst_24846__$1,inst_24839);
var inst_24848 = cljs.core.keyword_identical_QMARK_.call(null,inst_24839,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24849 = (inst_24847) || (inst_24848);
var state_24878__$1 = (function (){var statearr_24892 = state_24878;
(statearr_24892[(10)] = inst_24846__$1);

return statearr_24892;
})();
if(cljs.core.truth_(inst_24849)){
var statearr_24893_24922 = state_24878__$1;
(statearr_24893_24922[(1)] = (8));

} else {
var statearr_24894_24923 = state_24878__$1;
(statearr_24894_24923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (14))){
var inst_24871 = (state_24878[(2)]);
var inst_24872 = cljs.core.async.close_BANG_.call(null,out);
var state_24878__$1 = (function (){var statearr_24896 = state_24878;
(statearr_24896[(13)] = inst_24871);

return statearr_24896;
})();
var statearr_24897_24924 = state_24878__$1;
(statearr_24897_24924[(2)] = inst_24872);

(statearr_24897_24924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (10))){
var inst_24861 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
var statearr_24898_24925 = state_24878__$1;
(statearr_24898_24925[(2)] = inst_24861);

(statearr_24898_24925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (8))){
var inst_24842 = (state_24878[(9)]);
var inst_24846 = (state_24878[(10)]);
var inst_24838 = (state_24878[(8)]);
var inst_24851 = inst_24838.push(inst_24842);
var tmp24895 = inst_24838;
var inst_24838__$1 = tmp24895;
var inst_24839 = inst_24846;
var state_24878__$1 = (function (){var statearr_24899 = state_24878;
(statearr_24899[(7)] = inst_24839);

(statearr_24899[(14)] = inst_24851);

(statearr_24899[(8)] = inst_24838__$1);

return statearr_24899;
})();
var statearr_24900_24926 = state_24878__$1;
(statearr_24900_24926[(2)] = null);

(statearr_24900_24926[(1)] = (2));


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
});})(c__22157__auto___24912,out))
;
return ((function (switch__22045__auto__,c__22157__auto___24912,out){
return (function() {
var cljs$core$async$state_machine__22046__auto__ = null;
var cljs$core$async$state_machine__22046__auto____0 = (function (){
var statearr_24904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24904[(0)] = cljs$core$async$state_machine__22046__auto__);

(statearr_24904[(1)] = (1));

return statearr_24904;
});
var cljs$core$async$state_machine__22046__auto____1 = (function (state_24878){
while(true){
var ret_value__22047__auto__ = (function (){try{while(true){
var result__22048__auto__ = switch__22045__auto__.call(null,state_24878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22048__auto__;
}
break;
}
}catch (e24905){if((e24905 instanceof Object)){
var ex__22049__auto__ = e24905;
var statearr_24906_24927 = state_24878;
(statearr_24906_24927[(5)] = ex__22049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24928 = state_24878;
state_24878 = G__24928;
continue;
} else {
return ret_value__22047__auto__;
}
break;
}
});
cljs$core$async$state_machine__22046__auto__ = function(state_24878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22046__auto____1.call(this,state_24878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22046__auto____0;
cljs$core$async$state_machine__22046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22046__auto____1;
return cljs$core$async$state_machine__22046__auto__;
})()
;})(switch__22045__auto__,c__22157__auto___24912,out))
})();
var state__22159__auto__ = (function (){var statearr_24907 = f__22158__auto__.call(null);
(statearr_24907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22157__auto___24912);

return statearr_24907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22159__auto__);
});})(c__22157__auto___24912,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1467412219012