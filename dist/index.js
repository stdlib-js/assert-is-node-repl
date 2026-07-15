"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var s=t(function(D,a){
function o(){return a}a.exports=o
});var u=t(function(L,i){
function p(){var e=new Error;return e.stack}i.exports=p
});var c=t(function(O,n){
var f=require('@stdlib/assert-is-node/dist'),E=s(),R=u(),l=/^repl$|^<repl>$/,_=/at REPLServer/;function k(){var e,r;if(!f)return!1;for(r=E();r;){if(l.test(r.id))return!0;r=r.parent}return e=R(),e?_.test(e):!1}n.exports=k
});var q=c();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
