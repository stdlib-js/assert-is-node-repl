"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(x,a){
function v(){return a}a.exports=v
});var u=t(function(D,i){
function o(){var e=new Error;return e.stack}i.exports=o
});var c=t(function(L,n){
var p=require('@stdlib/assert-is-node/dist'),f=s(),E=u(),R=/^repl$|^<repl>$/,l=/at REPLServer/;function _(){var e,r;if(!p)return!1;for(r=f();r;){if(R.test(r.id))return!0;r=r.parent}return e=E(),e?l.test(e):!1}n.exports=_
});var k=c();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
