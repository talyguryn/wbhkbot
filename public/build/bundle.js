var wbhkbot=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return c}),r.d(t,"getFieldData",function(){return s});var n={"[object HTMLCollection]":!0,"[object NodeList]":!0,"[object RadioNodeList]":!0},o={button:!0,fieldset:!0,reset:!0,submit:!0},a={checkbox:!0,radio:!0},i=/^\s+|\s+$/g,l=Array.prototype.slice,u=Object.prototype.toString;function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{trim:!1};if(!e)throw new Error("A form is required by getFormData, was given form="+e);for(var r={},n=void 0,a=[],i={},l=0,u=e.elements.length;l<u;l++){var c=e.elements[l];o[c.type]||c.disabled||(n=c.name||c.id)&&!i[n]&&(a.push(n),i[n]=!0)}for(var f=0,d=a.length;f<d;f++){var p=s(e,n=a[f],t);null!=p&&(r[n]=p)}return r}function s(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{trim:!1};if(!e)throw new Error("A form is required by getFieldData, was given form="+e);if(!t&&"[object String]"!==u.call(t))throw new Error("A field name is required by getFieldData, was given fieldName="+t);var o=e.elements[t];if(!o||o.disabled)return null;if(!n[u.call(o)])return f(o,r.trim);for(var a=[],i=!0,l=0,c=o.length;l<c;l++)if(!o[l].disabled){i&&"radio"!==o[l].type&&(i=!1);var s=f(o[l],r.trim);null!=s&&(a=a.concat(s))}return i&&1===a.length?a[0]:a.length>0?a:null}function f(e,t){var r=null,n=e.type;if("select-one"===n)return e.options.length&&(r=e.options[e.selectedIndex].value),r;if("select-multiple"===n){r=[];for(var o=0,u=e.options.length;o<u;o++)e.options[o].selected&&r.push(e.options[o].value);return 0===r.length&&(r=null),r}return"file"===n&&"files"in e?(e.multiple?0===(r=l.call(e.files)).length&&(r=null):r=e.files[0],r):(a[n]?e.checked&&(r=e.value):r=t?e.value.replace(i,""):e.value,r)}c.getFieldData=s},function(e,t,r){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";e.exports={call:function(e){if(e&&e.url){var t=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),r=e.progress||null,n=e.success||function(){},o=e.error||function(){},a=e.before||null,i=e.after?e.after.bind(null,e.data):null;if(e.async=!0,e.type=e.type||"GET",e.data=e.data||"",e["content-type"]=e["content-type"]||"application/json; charset=utf-8","GET"===e.type&&e.data&&(e.url=/\?/.test(e.url)?e.url+"&"+e.data:e.url+"?"+e.data),e.withCredentials&&(t.withCredentials=!0),a&&"function"==typeof a&&!1===a(e.data))return;if(t.open(e.type,e.url,e.async),!function(e){return e instanceof FormData}(e.data)){var l=new FormData;for(var u in e.data)l.append(u,e.data[u]);e.data=l}r&&"function"==typeof r&&t.upload.addEventListener("progress",function(e){var t=parseInt(e.loaded/e.total*100);r(t)},!1),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.onreadystatechange=function(){if(4===t.readyState){var e=t.responseText;try{e=JSON.parse(e)}catch(e){}200===t.status?n(e):o(e),i&&"function"==typeof i&&i()}},t.send(e.data)}}}}])},function(e,t,r){const n=r(1),o=r(0).default;class a{static getForm(){let e=document.querySelector("form");return o(e)}sendForm(){let e=a.getForm();n.call({type:"POST",url:"?",data:e,before:function(){},success:function(e){console.log(e)},error:function(e){console.log(e)},after:function(){}})}generateCurl(){let e=a.getForm(),t=`curl -X POST ${window.location.href}`;for(let r in e){let n=e[r];if(n&&n.length){t+=` -d '${r}=${JSON.stringify(n).slice(1,-1)}'`}}return console.log(t),t}}e.exports=new a}]);