/*! For license information please see bundle.js.LICENSE.txt */
!function(){var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){h[r]=t,h[r+1]=e,2===(r+=2)&&(i?i(v):w())};var c="undefined"!=typeof window?window:void 0,u=c||{},a=u.MutationObserver||u.WebKitMutationObserver,l="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function f(){var t=setTimeout;return function(){return t(v,1)}}var h=new Array(1e3);function v(){for(var t=0;t<r;t+=2)(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0;r=0}var _,p,m,y,w=void 0;function g(t,e){var n=this,r=new this.constructor(S);void 0===r[E]&&P(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return C(o,r,i,n._result)}))}else M(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(S);return q(e,t),e}w=l?function(){return process.nextTick(v)}:a?(p=0,m=new a(v),y=document.createTextNode(""),m.observe(y,{characterData:!0}),function(){y.data=p=++p%2}):d?((_=new MessageChannel).port1.onmessage=v,function(){return _.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(v)}:f()}catch(t){return f()}}():f();var E=Math.random().toString(36).substring(2);function S(){}var A=void 0;function L(e,n,r){n.constructor===e.constructor&&r===g&&n.constructor.resolve===b?function(t,e){1===e._state?x(t,e._result):2===e._state?j(t,e._result):M(e,void 0,(function(e){return q(t,e)}),(function(e){return j(t,e)}))}(e,n):void 0===r?x(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?q(t,n):x(t,n))}),(function(e){r||(r=!0,j(t,e))}),t._label);!r&&o&&(r=!0,j(t,o))}),t)}(e,n,r):x(e,n)}function q(t,e){if(t===e)j(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)x(t,e);else{var n=void 0;try{n=e.then}catch(e){return void j(t,e)}L(t,e,n)}var r,o}function T(t){t._onerror&&t._onerror(t._result),k(t)}function x(t,e){t._state===A&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(k,t))}function j(t,e){t._state===A&&(t._state=2,t._result=e,s(T,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&s(k,t)}function k(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?C(n,r,o,i):o(i);t._subscribers.length=0}}function C(e,n,r,o){var i=t(r),s=void 0,c=void 0,u=!0;if(i){try{s=r(o)}catch(t){u=!1,c=t}if(n===s)return void j(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==A||(i&&u?q(n,s):!1===u?j(n,c):1===e?x(n,s):2===e&&j(n,s))}var O=0;function P(t){t[E]=O++,t._state=void 0,t._result=void 0,t._subscribers=[]}var D=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(S),this.promise[E]||P(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?x(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&x(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===A&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===g&&t._state!==A)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===B){var c=new n(S);s?j(c,i):L(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===A&&(this._remaining--,2===t?j(r,n):this._result[e]=n),0===this._remaining&&x(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var B=function(){function e(t){this[E]=O++,this._result=this._state=void 0,this._subscribers=[],S!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){q(t,e)}),(function(e){j(t,e)}))}catch(e){j(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return B.prototype.then=g,B.all=function(t){return new D(this,t).promise},B.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},B.resolve=b,B.reject=function(t){var e=new this(S);return j(e,t),e},B._setScheduler=function(t){i=t},B._setAsap=function(t){s=t},B._asap=s,B.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=B},B.Promise=B,B}()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(702).polyfill(),document.addEventListener("DOMContentLoaded",(()=>{(function(t,e,n,r){const o=document.querySelectorAll(t),i=document.querySelectorAll(e),s=n,c=r;let u=0;o.forEach((t=>{t.addEventListener("click",(t=>{var e;!function(t,e,n){e.forEach((e=>{e.classList.remove(n),t.classList.add(n)})),e.forEach(((t,e)=>{t.classList.contains(n)&&(u=e)}))}(t.target,o,s),e=c,i.forEach(((t,n)=>{t.classList.add(e),n==u&&t.classList.remove(e)}))}))}))})(".choose__buttons_button",".choose__img","choose__activ","choose__hideImg"),function(t,e,n,r,o,i){const s=document.querySelectorAll(t),c=document.querySelector(e),u=document.querySelector(n),a=document.querySelector(r),l=document.querySelector(o),d=i;function f(t,e){t.classList.add(e),document.body.style.overflow=""}s.forEach((t=>{t.addEventListener("touchstart",(()=>{var t,e;t=a,e=d,u.classList.remove(e),document.body.style.overflow="hidden",l.focus(),t.reset()}))})),c.addEventListener("touchstart",(()=>{f(u,d)})),u.addEventListener("touchstart",(t=>{t.target===u&&f(u,d)})),window.addEventListener("keydown",(t=>{"Escape"===t.code&&f(u,d)}))}(".order",".modal__close",".modal",".modal__form",".focus","hide"),function(t,e,n,r,o,i,s){const c=document.querySelector(t),u=document.querySelectorAll(e),a=document.querySelector(o),l=document.querySelectorAll(i),d=document.querySelector(r);let f;function h(t,e){!function(t){t.forEach((t=>{""!=t.value?t.classList.remove(s):(f=!1,t.classList.add(s))}))}(e),!0===f?(v("Отправка..."),setTimeout((()=>{window.location.href=n}),2e3)):v("Заполните поле")}function v(t){const e=document.createElement("p");e.innerHTML=`${t}`,d.append(e),setTimeout((()=>{e.innerHTML="",d.append(e)}),3e3)}c.addEventListener("submit",(t=>{t.preventDefault(),f=!0,h(0,u)})),a.addEventListener("submit",(t=>{t.preventDefault(),f=!0,h(0,l)}))}(".modal__form",".modal__input","thanks.html",".form__status",".form__feedback",".form__input","error"),function(t,e,n,r,o,i,s,c,u){const a=document.querySelectorAll(t),l=document.querySelector(e),d=document.querySelector(n),f=document.querySelector(r),h=document.querySelector(o),v=document.querySelector(i),_=window.getComputedStyle(h).width;let p=1,m=0;function y(t){return+t.replace(/\D/g,"")}v.style.width=100*a.length+"%",v.style.display="flex",v.style.transition="0.5s all",h.style.cssText="\n                                        overflow: hidden;\n                                        position: relative;\n                                        z-index: 1;\n        ",a.forEach((t=>{t.style.width=_}));const w=document.createElement("div"),g=[];w.classList.add(s),l.append(w);for(let t=0;t<a.length;t++){const e=document.createElement("button");e.setAttribute("data-slide-to",t+1),e.classList.add(c),0==t&&(e.style.opacity=1),w.append(e),g.push(e),E()}function b(){v.style.transform=`translateX(-${m}px)`}function E(){g.forEach((t=>t.classList.remove(u))),g[p-1].classList.add(u)}f.addEventListener("click",(()=>{m==y(_)*(a.length-1)?m=0:m+=y(_),b(),p==a.length?p=1:p++,E()})),d.addEventListener("click",(()=>{0==m?m=y(_)*(a.length-1):m-=y(_),b(),1==p?p=a.length:p--,E()})),g.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");p=e,m=y(_)*(e-1),b(),E()}))}))}(".review__slider_item",".review__slider",".review__slider_leftBtn",".review__slider_rightBtn",".review__slider_wrapper",".review_slider_inner","review__sliderBtns","review__sliderBtn","choose__activ")}))}()}();
//# sourceMappingURL=bundle.js.map