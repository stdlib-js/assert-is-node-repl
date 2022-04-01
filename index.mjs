// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-node@esm/index.mjs";var t,e={exports:{}};t=e,t.exports=function(){return t};var n=r,s=e.exports,o=function(){return(new Error).stack},i=/^repl$|^<repl>$/,a=/at REPLServer/;var p=function(){var r,t;if(!n)return!1;for(t=s();t;){if(i.test(t.id))return!0;t=t.parent}return!!(r=o())&&a.test(r)};export{p as default};
//# sourceMappingURL=index.mjs.map
