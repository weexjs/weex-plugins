// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=191)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(4),o=n(10);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(7),o=n(29),i=n(23),a=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(48),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(21)("wks"),o=n(11),i=n(0).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){var r=n(34),o=n(14);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(4).f,o=n(1),i=n(6)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(21)("keys"),o=n(11);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(12),i=n(16),a=n(25),u=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(6)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(9),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(12),i=n(45),a=n(3),u=function(t,e,n){var s,c,f,l=t&u.F,p=t&u.G,d=t&u.S,m=t&u.P,v=t&u.B,y=t&u.W,h=p?o:o[e]||(o[e]={}),g=h.prototype,b=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(s in n)(c=!l&&b&&void 0!==b[s])&&s in h||(f=c?b[s]:n[s],h[s]=p&&"function"!=typeof b[s]?n[s]:v&&c?i(f,r):y&&b[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?i(Function.call,f):f,m&&((h.virtual||(h.virtual={}))[s]=f,t&u.R&&g&&!g[s]&&a(g,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){t.exports=!n(2)&&!n(8)(function(){return 7!=Object.defineProperty(n(27)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(16),o=n(28),i=n(35),a=n(3),u=n(1),s=n(15),c=n(50),f=n(19),l=n(56),p=n(6)("iterator"),d=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,n,v,y,h,g){c(n,e,v);var b,_,w,x=function(t){if(!d&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",j="values"==y,O=!1,C=t.prototype,P=C[p]||C["@@iterator"]||y&&C[y],M=P||x(y),k=y?j?x("entries"):M:void 0,E="Array"==e?C.entries||P:P;if(E&&(w=l(E.call(new t)))!==Object.prototype&&w.next&&(f(w,S,!0),r||u(w,p)||a(w,p,m)),j&&P&&"values"!==P.name&&(O=!0,M=function(){return P.call(this)}),r&&!g||!d&&!O&&C[p]||a(C,p,M),s[e]=M,s[S]=m,y)if(b={values:j?M:x("values"),keys:h?M:x("keys"),entries:k},g)for(_ in b)_ in C||i(C,_,b[_]);else o(o.P+o.F*(d||O),e,b);return b}},function(t,e,n){var r=n(7),o=n(53),i=n(14),a=n(20)("IE_PROTO"),u=function(){},s=function(){var t,e=n(27)("iframe"),r=i.length;for(e.style.display="none",n(47).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(34),o=n(14).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=n(5),i=n(44)(!1),a=n(20)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";var r=n(39),o=n.n(r),i={isNative:"object"!==("undefined"==typeof window?"undefined":o()(window)),platform:weex.config.env.platform,deviceWidth:weex.config.env.deviceWidth,deviceHeight:weex.config.env.deviceHeight,cdnUri:"http://cdn.instapp.io/nat/",get baseUrl(){var t=void 0,e=weex.config.bundleUrl,n=e.indexOf("file://assets/")>-1,r=e.indexOf("file:///")>-1;if(n)t="file://assets/dist/";else if(r)t=e.substring(0,e.lastIndexOf("/")+1);else{var o="localhost:8080",i=/\/\/([^\/]+?)\//.exec(e);o=i&&i.length>=2?i[1]:o,t="http://"+o+"/dist/"}return t}};e.a=i},function(t,e,n){t.exports={default:n(40),__esModule:!0}},function(t,e,n){t.exports={default:n(41),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(38),i=r(o),a=n(37),u=r(a),s="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===s(i.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,e,n){n(64),n(62),n(65),n(66),t.exports=n(12).Symbol},function(t,e,n){n(63),n(67),t.exports=n(25).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(5),o=n(59),i=n(58);t.exports=function(t){return function(e,n,a){var u,s=r(e),c=o(s.length),f=i(a,c);if(t&&n!=n){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(42);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(17),o=n(33),i=n(18);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),s=i.f,c=0;u.length>c;)s.call(t,a=u[c++])&&e.push(a);return e}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(26);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(26);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(31),o=n(10),i=n(19),a={};n(3)(a,n(6)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(11)("meta"),o=n(9),i=n(1),a=n(4).f,u=0,s=Object.isExtensible||function(){return!0},c=!n(8)(function(){return s(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},d=function(t){return c&&m.NEED&&s(t)&&!i(t,r)&&f(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(4),o=n(7),i=n(17);t.exports=n(2)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,s=0;u>s;)r.f(t,n=a[s++],e[n]);return t}},function(t,e,n){var r=n(18),o=n(10),i=n(5),a=n(23),u=n(1),s=n(29),c=Object.getOwnPropertyDescriptor;e.f=n(2)?c:function(t,e){if(t=i(t),e=a(e,!0),s)try{return c(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(5),o=n(32).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,e,n){var r=n(1),o=n(60),i=n(20)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(22),o=n(13);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),s=r(n),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(22),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(43),o=n(51),i=n(15),a=n(5);t.exports=n(30)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r=n(57)(!0);n(30)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(0),o=n(1),i=n(2),a=n(28),u=n(35),s=n(52).KEY,c=n(8),f=n(21),l=n(19),p=n(11),d=n(6),m=n(25),v=n(24),y=n(46),h=n(49),g=n(7),b=n(5),_=n(23),w=n(10),x=n(31),S=n(55),j=n(54),O=n(4),C=n(17),P=j.f,M=O.f,k=S.f,E=r.Symbol,L=r.JSON,F=L&&L.stringify,T=d("_hidden"),I=d("toPrimitive"),R={}.propertyIsEnumerable,B=f("symbol-registry"),z=f("symbols"),A=f("op-symbols"),N=Object.prototype,W="function"==typeof E,U=r.QObject,D=!U||!U.prototype||!U.prototype.findChild,V=i&&c(function(){return 7!=x(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=P(N,e);r&&delete N[e],M(t,e,n),r&&t!==N&&M(N,e,r)}:M,G=function(t){var e=z[t]=x(E.prototype);return e._k=t,e},q=W&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},H=function(t,e,n){return t===N&&H(A,e,n),g(t),e=_(e,!0),g(n),o(z,e)?(n.enumerable?(o(t,T)&&t[T][e]&&(t[T][e]=!1),n=x(n,{enumerable:w(0,!1)})):(o(t,T)||M(t,T,w(1,{})),t[T][e]=!0),V(t,e,n)):M(t,e,n)},J=function(t,e){g(t);for(var n,r=y(e=b(e)),o=0,i=r.length;i>o;)H(t,n=r[o++],e[n]);return t},$=function(t,e){return void 0===e?x(t):J(x(t),e)},K=function(t){var e=R.call(this,t=_(t,!0));return!(this===N&&o(z,t)&&!o(A,t))&&(!(e||!o(this,t)||!o(z,t)||o(this,T)&&this[T][t])||e)},Y=function(t,e){if(t=b(t),e=_(e,!0),t!==N||!o(z,e)||o(A,e)){var n=P(t,e);return!n||!o(z,e)||o(t,T)&&t[T][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=k(b(t)),r=[],i=0;n.length>i;)o(z,e=n[i++])||e==T||e==s||r.push(e);return r},X=function(t){for(var e,n=t===N,r=k(n?A:b(t)),i=[],a=0;r.length>a;)!o(z,e=r[a++])||n&&!o(N,e)||i.push(z[e]);return i};W||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===N&&e.call(A,n),o(this,T)&&o(this[T],t)&&(this[T][t]=!1),V(this,t,w(1,n))};return i&&D&&V(N,t,{configurable:!0,set:e}),G(t)},u(E.prototype,"toString",function(){return this._k}),j.f=Y,O.f=H,n(32).f=S.f=Q,n(18).f=K,n(33).f=X,i&&!n(16)&&u(N,"propertyIsEnumerable",K,!0),m.f=function(t){return G(d(t))}),a(a.G+a.W+a.F*!W,{Symbol:E});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var et=C(d.store),nt=0;et.length>nt;)v(et[nt++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=E(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){D=!0},useSimple:function(){D=!1}}),a(a.S+a.F*!W,"Object",{create:$,defineProperty:H,defineProperties:J,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),L&&a(a.S+a.F*(!W||c(function(){var t=E();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!q(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&h(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,F.apply(L,r)}}}),E.prototype[I]||n(3)(E.prototype,I,E.prototype.valueOf),l(E,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(24)("asyncIterator")},function(t,e,n){n(24)("observable")},function(t,e,n){n(61);for(var r=n(0),o=n(3),i=n(15),a=n(6)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var c=u[s],f=r[c],l=f&&f.prototype;l&&!l[a]&&o(l,a,c),i[c]=i.Array}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36);e.default={name:"status-bar",data:function(){return{platform:r.a.platform,style:{backgroundColor:this.backgroundColor}}},props:{backgroundColor:{type:String,default:"#fff"}}}},function(t,e){t.exports={bar:{width:750,height:40,backgroundColor:"#ffffff"}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"iOS"===t.platform?n("div",{staticClass:["bar"],style:t.style}):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,,,,function(t,e,n){var r,o,i=[];i.push(n(69)),r=n(68);var a=n(70);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/dzc/que/ucar/weexjs/weex-plugins/src/layout/status-bar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-47a792d8",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),o=weex.requireModule("navigator");e.default={name:"module",data:function(){return{cdnUri:r.a.cdnUri,baseUrl:r.a.baseUrl}},props:{name:{type:String,required:!0},functions:{type:Array,required:!0}},methods:{push:function(t){o.push({url:this.baseUrl+t})}}}},function(t,e){t.exports={"c-primary":{color:"#3D83FB"},"c-ink":{color:"#333333"},"fz-24":{fontSize:24},"fz-32":{fontSize:32},"fz-72":{fontSize:72},"bottom-line":{borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#dddddd"},button:{backgroundImage:"linear-gradient(to bottom, #3D83FB, #3370FF)",height:84,paddingLeft:64,paddingRight:64,borderRadius:42,border:0,outline:0,alignItems:"center",justifyContent:"center"},"button-txt":{fontSize:32,fontWeight:"600",color:"#ffffff"},module:{marginLeft:48,marginRight:48,marginBottom:48},title:{color:"#333333",fontSize:32,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#dddddd",fontWeight:"200",paddingTop:8,paddingBottom:20},cell:{borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#dddddd",height:84,paddingLeft:24,paddingRight:12,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},arrow:{width:15,height:27},name:{color:"#333333",fontSize:32,fontWeight:"700"}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["module"]},[n("text",{staticClass:["title"]},[t._v(t._s(t.name))]),t._l(t.functions,function(e){return n("div",{staticClass:["cell"],on:{click:function(n){t.push(e.path)}}},[n("text",{staticClass:["name"]},[t._v(t._s(e.name))]),n("image",{staticClass:["arrow"],attrs:{src:t.cdnUri+"arrow.png"}})])})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),o=n(188),i=n(77),a=n.n(i),u=n(189),s=n.n(u);e.default={data:function(){return{cdnUri:r.a.cdnUri,baseUrl:r.a.baseUrl,modules:o.a}},components:{StatusBar:a.a,Module:s.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports={"c-primary":{color:"#3D83FB"},"c-ink":{color:"#333333"},"fz-24":{fontSize:24},"fz-32":{fontSize:32},"fz-72":{fontSize:72},"bottom-line":{borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#dddddd"},button:{backgroundImage:"linear-gradient(to bottom, #3D83FB, #3370FF)",height:84,paddingLeft:64,paddingRight:64,borderRadius:42,border:0,outline:0,alignItems:"center",justifyContent:"center"},"button-txt":{fontSize:32,fontWeight:"600",color:"#ffffff"},logo:{width:82,height:84,marginTop:32,marginLeft:48,marginBottom:18},"app-name":{height:100,marginLeft:48,marginRight:48,marginBottom:48,flexDirection:"row",alignItems:"center"},bold:{color:"#333333",fontSize:72,fontWeight:"700"},light:{color:"#333333",fontSize:72,fontWeight:"200",marginLeft:24}}},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("status-bar"),n("list",{attrs:{showScrollbar:!1}},[n("cell",{appendAsTree:!0,attrs:{append:"tree"}},[n("image",{staticClass:["logo"],attrs:{src:t.cdnUri+"logo.png"}}),t._m(0)]),t._l(t.modules,function(t){return n("cell",{appendAsTree:!0,attrs:{append:"tree"}},[n("module",{attrs:{name:t.name,functions:t.functions}})],1)})],2)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app-name"]},[n("text",{staticClass:["bold"]},[t._v("Nat")]),n("text",{staticClass:["light"]},[t._v("Explorer")])])}]},t.exports.render._withStripped=!0},,,,,,,,,,,function(t,e,n){"use strict";var r=[{name:"Communication",functions:[{name:"Call",path:"views/communication/call.js"},{name:"Mail",path:"views/communication/mail.js"},{name:"Sms",path:"views/communication/sms.js"}]},{name:"Media",functions:[{name:"Image",path:"views/media/image.js"},{name:"Audio",path:"views/media/audio.js"},{name:"Video",path:"views/media/video.js"}]},{name:"Camera",functions:[{name:"Capture Image",path:"views/camera/captureImage.js"},{name:"Capture Video",path:"views/camera/captureVideo.js"}]},{name:"Recorder",functions:[{name:"Recorder",path:"views/recorder/recorder.js"}]},{name:"Modal",functions:[{name:"Alert",path:"views/modal/alert.js"},{name:"Confirm",path:"views/modal/confirm.js"},{name:"Prompt",path:"views/modal/prompt.js"},{name:"Toast",path:"views/modal/toast.js"}]},{name:"Network",functions:[{name:"Fetch",path:"views/network/fetch.js",hints:"stream"},{name:"download",path:"views/network/download.js",hints:"transfer"},{name:"upload",path:"views/network/upload.js",hints:"transfer"}]},{name:"Geolocation",functions:[{name:"Geolocation",path:"views/geolocation/geolocation.js",hints:"geo"}]},{name:"Sensor",functions:[{name:"Accelerometer",path:"views/sensor/accelerometer.js"},{name:"Compass",path:"views/sensor/compass.js"}]},{name:"Device",functions:[{name:"Info",path:"views/device/info.js"},{name:"Network",path:"views/device/network.js"},{name:"Vibration",path:"views/device/vibration.js"},{name:"Screen",path:"views/device/screen.js"},{name:"Volume",path:"views/device/volume.js"},{name:"Battery",path:"views/device/battery.js"}]}];e.a=r},function(t,e,n){var r,o,i=[];i.push(n(108)),r=n(107);var a=n(109);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/dzc/que/ucar/weexjs/weex-plugins/src/components/module.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-59c9025c",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},,function(t,e,n){var r,o,i=[];i.push(n(151)),r=n(110);var a=n(177);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/dzc/que/ucar/weexjs/weex-plugins/src/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-6c3323a9",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)}]);