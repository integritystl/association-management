!function(e){function t(t){for(var n,c,a=t[0],u=t[1],f=t[2],l=0,d=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,f||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=__webpack_require__(__webpack_require__.s=r[0]))}return e}var n={},o={15:0},i=[];function __webpack_require__(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.m=e,__webpack_require__.c=n,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="";var c=window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=a;i.push([570,0]),r()}({1:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"b",(function(){return v})),r.d(t,"i",(function(){return y})),r.d(t,"j",(function(){return m})),r.d(t,"k",(function(){return w})),r.d(t,"c",(function(){return S})),r.d(t,"l",(function(){return D})),r.d(t,"m",(function(){return A})),r.d(t,"n",(function(){return N})),r.d(t,"o",(function(){return T})),r.d(t,"p",(function(){return x})),r.d(t,"q",(function(){return U})),r.d(t,"r",(function(){return L})),r.d(t,"s",(function(){return q}));var n=r(94);void 0===e.googlesitekit&&(e.googlesitekit={});var o=e.googlesitekit._element||n,i=o.Children,c=o.cloneElement,a=o.Component,u=o.concatChildren,s=o.createContext,f=o.createElement,l=o.createInterpolateElement,d=o.createPortal,p=o.createRef,g=o.findDOMNode,b=o.forwardRef,v=o.Fragment,O=o.isEmptyElement,y=o.isValidElement,m=o.lazy,h=o.memo,_=o.Platform,j=o.RawHTML,w=o.render,k=o.renderToString,E=o.StrictMode,S=o.Suspense,P=o.switchChildrenNodeName,I=o.unmountComponentAtNode,D=o.useCallback,A=o.useContext,R=o.useDebugValue,N=o.useEffect,C=o.useImperativeHandle,T=o.useLayoutEffect,x=o.useMemo,U=o.useReducer,L=o.useRef,q=o.useState;void 0===e.googlesitekit._element&&(e.googlesitekit._element={Children:i,cloneElement:c,Component:a,concatChildren:u,createContext:s,createElement:f,createInterpolateElement:l,createPortal:d,createRef:p,findDOMNode:g,forwardRef:b,Fragment:v,isEmptyElement:O,isValidElement:y,lazy:m,memo:h,Platform:_,RawHTML:j,render:w,renderToString:k,StrictMode:E,Suspense:S,switchChildrenNodeName:P,unmountComponentAtNode:I,useCallback:D,useContext:A,useDebugValue:R,useEffect:N,useImperativeHandle:C,useLayoutEffect:T,useMemo:x,useReducer:U,useRef:L,useState:q})}).call(this,r(16))},105:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return v}));var n=r(4),o=r.n(n),i=r(10),c=r.n(i),a=r(19),u=r.n(a),s=r(39),f=r.n(s),l=r(12),d=r.n(l),p=r(42);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i.client,s=void 0===a||a,l=i.server,g=void 0===l||l,v=i.storeName,O=void 0===v?void 0:v;u()(t,"type is required."),u()(r,"identifier is required."),u()(n,"datapoint is required.");var y=O||"".concat(t,"/").concat(r),m={serverNotifications:g?void 0:{},clientNotifications:s?void 0:{}},h=Object(p.a)({baseName:"getNotifications",controlCallback:function(){return f.a.get(t,r,n)},reducerCallback:function(e,t){return b(b({},e),{},{serverNotifications:t.reduce((function(e,t){return b(b({},e),{},c()({},t.id,t))}),{})})}}),_={addNotification:function(e){return u()(e,"notification is required."),{payload:{notification:e},type:"ADD_NOTIFICATION"}},removeNotification:function(e){return u()(e,"id is required."),{payload:{id:e},type:"REMOVE_NOTIFICATION"}}},j={},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,r=arguments.length>1?arguments[1]:void 0,n=r.type,o=r.payload;switch(n){case"ADD_NOTIFICATION":var i=o.notification;return b(b({},t),{},{clientNotifications:b(b({},t.clientNotifications||{}),{},c()({},i.id,i))});case"REMOVE_NOTIFICATION":var a=o.id;if(void 0===t.clientNotifications||void 0===t.clientNotifications[a])return void 0!==t.serverNotifications&&void 0!==t.serverNotifications[a]&&e.console.warn('Cannot remove server-side notification with ID "'.concat(a,'"; this may be changed in a future release.')),b({},t);var u=b({},t.clientNotifications);return delete u[a],b(b({},t),{},{clientNotifications:u});default:return b({},t)}},k={getNotifications:o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.actions.fetchGetNotifications();case 2:case"end":return e.stop()}}),e)}))};g||delete k.getNotifications;var E={getNotifications:function(e){var t=e.serverNotifications,r=e.clientNotifications;return void 0===t&&void 0===r?t:Object.values(b(b({},t||{}),r||{}))}},S=d.a.combineStores(h,{INITIAL_STATE:m,actions:_,controls:j,reducer:w,resolvers:k,selectors:E});return b(b({},S),{},{STORE_NAME:y})}}).call(this,r(16))},116:function(e,t,r){"use strict";(function(e){var n=r(4),o=r.n(n),i=r(10),c=r.n(i),a=r(19),u=r.n(a),s=r(41),f=r(12),l=r.n(f),d=r(24);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=l.a.createRegistrySelector,v={connectURL:void 0,user:void 0,verified:void 0},O={receiveConnectURL:function(e){return u()(e,"connectURL is required."),{payload:{connectURL:e},type:"RECEIVE_CONNECT_URL"}},receiveUserInfo:function(e){return u()(e,"userInfo is required."),{payload:{user:e},type:"RECEIVE_USER_INFO"}},receiveUserIsVerified:function(e){return u()(void 0!==e,"userIsVerified is required."),{payload:{verified:e},type:"RECEIVE_USER_IS_VERIFIED"}}},y={getConnectURL:o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.commonActions.getRegistry();case 2:if(r=t.sent,!(0,r.select)(d.b).getConnectURL()){t.next=6;break}return t.abrupt("return");case 6:if(e._googlesitekitUserData){t.next=9;break}return e.console.error("Could not load core/user info."),t.abrupt("return");case 9:return n=e._googlesitekitUserData.connectURL,t.next=12,O.receiveConnectURL(n);case 12:case"end":return t.stop()}}),t)})),getUser:o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.commonActions.getRegistry();case 2:if(r=t.sent,void 0===(0,r.select)(d.b).getUser()){t.next=6;break}return t.abrupt("return");case 6:if(e._googlesitekitUserData){t.next=9;break}return e.console.error("Could not load core/user info."),t.abrupt("return");case 9:return n=e._googlesitekitUserData.user,t.next=12,O.receiveUserInfo(n);case 12:case"end":return t.stop()}}),t)})),isVerified:o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.commonActions.getRegistry();case 2:if(r=t.sent,void 0===(0,r.select)(d.b).isVerified()){t.next=6;break}return t.abrupt("return");case 6:if(e._googlesitekitUserData){t.next=9;break}return e.console.error("Could not load core/user info."),t.abrupt("return");case 9:return n=e._googlesitekitUserData.verified,t.next=12,O.receiveUserIsVerified(n);case 12:case"end":return t.stop()}}),t)}))},m={getUser:function(e){return e.user},getConnectURL:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.additionalScopes,n=void 0===r?[]:r,o=t.redirectURL,i=void 0===o?void 0:o,c=e.connectURL,a={redirect:i};if(void 0!==c)return(null==n?void 0:n.length)?Object(s.a)(c,g(g({},a),{},{additional_scopes:n})):Object(s.a)(c,a)},getID:b((function(e){return function(){var t=e(d.b).getUser();return void 0!==t?t.id:t}})),getName:b((function(e){return function(){var t=e(d.b).getUser();return void 0!==t?t.name:t}})),getEmail:b((function(e){return function(){var t=e(d.b).getUser();return void 0!==t?t.email:t}})),getPicture:b((function(e){return function(){var t=e(d.b).getUser();return void 0!==t?t.picture:t}})),isVerified:function(e){return e.verified}};t.a={INITIAL_STATE:v,actions:O,controls:{},reducer:function(e,t){var r=t.type,n=t.payload;switch(r){case"RECEIVE_CONNECT_URL":var o=n.connectURL;return g(g({},e),{},{connectURL:o});case"RECEIVE_USER_INFO":var i=n.user;return g(g({},e),{},{user:i});case"RECEIVE_USER_IS_VERIFIED":var c=n.verified;return g(g({},e),{},{verified:c});default:return g({},e)}},resolvers:y,selectors:m}}).call(this,r(16))},12:function(e,t){e.exports=googlesitekit.data},14:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return a})),r.d(t,"g",(function(){return u})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return p})),r.d(t,"c",(function(){return g}));var n=r(92);void 0===e.googlesitekit&&(e.googlesitekit={});var o=e.googlesitekit._hooks||n,i=o.addAction,c=o.addFilter,a=o.removeAction,u=o.removeFilter,s=o.hasAction,f=o.hasFilter,l=o.removeAllActions,d=o.removeAllFilters,p=o.doAction,g=o.applyFilters,b=o.currentAction,v=o.currentFilter,O=o.doingAction,y=o.doingFilter,m=o.didAction,h=o.didFilter,_=o.actions,j=o.filters;void 0===e.googlesitekit._hooks&&(e.googlesitekit._hooks={addAction:i,addFilter:c,removeAction:a,removeFilter:u,hasAction:s,hasFilter:f,removeAllActions:l,removeAllFilters:d,doAction:p,applyFilters:g,currentAction:b,currentFilter:v,doingAction:O,doingFilter:y,didAction:m,didFilter:h,actions:_,filters:j})}).call(this,r(16))},22:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return a}));var n=r(78),o=r.n(n),i=r(1),c=function(e){return function(t){return function FilteredComponent(r){return Object(i.f)(i.b,{},"",Object(i.f)(t,r),e)}}},a=function(t,r){return function(n){return function InnerComponent(i){return e.createElement(t,o()({},i,r,{OriginalComponent:n}))}}}}).call(this,r(11))},24:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n="core/user",o="missing_required_scopes"},32:function(e,t,r){"use strict";(function(e,n){r(1);var o=r(2),i=r.n(o),c=r(18),a=r.n(c),u=function SvgIcon(t){var r=t.id,o=t.className,i=t.height,c=t.width,u="".concat(e._googlesitekitLegacyData.admin.assetsRoot,"svg/svg.svg");return n.createElement("svg",{className:a()("svg",o),height:i,width:c},n.createElement("use",{xlinkHref:"".concat(u,"#").concat(r)}))};u.propTypes={id:i.a.string.isRequired,className:i.a.string,height:i.a.string,width:i.a.string},u.defaultProps={className:"",height:20,width:20},t.a=u}).call(this,r(16),r(11))},33:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n="_googlesitekitDataLayer",o="data-googlesitekit-gtag"},39:function(e,t){e.exports=googlesitekit.api},40:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return f}));var n,o=r(6),i=r.n(o),c=r(7),a=r.n(c),u=function(t){var r=e[t];if(!r)return!1;try{var n="__storage_test__";return r.setItem(n,n),r.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==r.length}},s=function(){function NullStorage(){i()(this,NullStorage)}return a()(NullStorage,[{key:"key",value:function(){return null}},{key:"getItem",value:function(){return null}},{key:"setItem",value:function(){}},{key:"removeItem",value:function(){}},{key:"clear",value:function(){}},{key:"length",get:function(){return 0}}]),NullStorage}(),f=function(){return n||(n=u("sessionStorage")?e.sessionStorage:u("localStorage")?e.localStorage:new s),n}}).call(this,r(16))},42:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return O}));var n=r(4),o=r.n(n),i=r(10),c=r.n(i),a=r(19),u=r.n(a),s=r(98),f=r.n(s),l=r(62),d=r(5);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){return g({},e)},v=function(){return{}},O=function(t){var r,n,i=t.baseName,a=t.controlCallback,s=t.reducerCallback,p=void 0===s?b:s,O=t.argsToParams,y=void 0===O?v:O;u()(i,"baseName is required."),u()("function"==typeof a,"controlCallback is required and must be a function."),u()("function"==typeof p,"reducerCallback must be a function."),u()("function"==typeof y,"argsToParams must be a function.");try{y(),n=!1}catch(e){n=!0}var m=Object(l.b)(i),h=Object(l.a)(i),_="FETCH_".concat(h),j="START_".concat(_),w="FINISH_".concat(_),k="CATCH_".concat(_),E="RECEIVE_".concat(h),S="fetch".concat(m),P="receive".concat(m),I="isFetching".concat(m),D=c()({},I,{}),A=(r={},c()(r,S,o.a.mark((function t(){var r,n,i,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,i=y.apply(void 0,c),t.next=9;break;case 4:return t.prev=4,t.t0=t.catch(0),e.console.error(t.t0.message),n=t.t0,t.abrupt("return",{response:r,error:n});case 9:return t.next=11,{payload:{params:i},type:j};case 11:return t.prev=11,t.next=14,{payload:{params:i},type:_};case 14:return r=t.sent,t.next=17,A[P](r,i);case 17:return t.next=19,{payload:{params:i},type:w};case 19:t.next=26;break;case 21:return t.prev=21,t.t1=t.catch(11),n=t.t1,t.next=26,{payload:{error:n,params:i},type:k};case 26:return t.abrupt("return",{response:r,error:n});case 27:case"end":return t.stop()}}),t,null,[[0,4],[11,21]])}))),c()(r,P,(function(e,t){return u()(void 0!==e,"response is required."),n?u()(f()(t),"params is required."):t={},{payload:{response:e,params:t},type:E}})),r),R=c()({},_,(function(e){var t=e.payload;return a(t.params)})),N=c()({},I,(function(e){if(void 0===e[I])return!1;var t;try{for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];t=y.apply(void 0,n)}catch(e){return!1}return!!e[I][Object(d.w)(t)]}));return{INITIAL_STATE:D,actions:A,controls:R,reducer:function(e,t){var r=t.type,n=t.payload;switch(r){case j:var o=n.params;return g(g({},e),{},c()({},I,g(g({},e[I]),{},c()({},Object(d.w)(o),!0))));case E:var i=n.response,a=n.params;return p(e,i,a);case w:var u=n.params;return g(g({},e),{},c()({},I,g(g({},e[I]),{},c()({},Object(d.w)(u),!1))));case k:var s=n.error,f=n.params;return g(g({},e),{},c()({error:s},I,g(g({},e[I]),{},c()({},Object(d.w)(f),!1))));default:return g({},e)}},resolvers:{},selectors:N}}}).call(this,r(16))},5:function(e,t,r){"use strict";(function(e,n){r.d(t,"t",(function(){return D})),r.d(t,"r",(function(){return A})),r.d(t,"o",(function(){return N})),r.d(t,"s",(function(){return C})),r.d(t,"i",(function(){return T})),r.d(t,"c",(function(){return x})),r.d(t,"g",(function(){return U})),r.d(t,"k",(function(){return L})),r.d(t,"m",(function(){return q})),r.d(t,"n",(function(){return F})),r.d(t,"y",(function(){return M})),r.d(t,"b",(function(){return V})),r.d(t,"v",(function(){return H})),r.d(t,"f",(function(){return G})),r.d(t,"q",(function(){return z})),r.d(t,"j",(function(){return J}));var o=r(4),i=r.n(o),c=r(15),a=r.n(c),u=r(10),s=r.n(u),f=r(45),l=r.n(f),d=r(34),p=r.n(d),g=(r(1),r(13)),b=r(14),v=r(0),O=r(41),y=r(137),m=r(32);r.d(t,"a",(function(){return m.a}));var h=r(50);r.d(t,"x",(function(){return h.c}));var _=r(22),j=r(54);r.d(t,"u",(function(){return j.a}));var w=r(57);r.d(t,"w",(function(){return w.a}));var k=r(55);r.d(t,"d",(function(){return k.b})),r.d(t,"l",(function(){return k.c}));r(40);var E=r(58);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"p",(function(){return E.a})),r.d(t,"e",(function(){return _.a})),r.d(t,"h",(function(){return _.b}));var I=function(e){return 1e6<=e?Math.round(e/1e5)/10:1e4<=e?Math.round(e/1e3):1e3<=e?Math.round(e/100)/10:e},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Object(g.isFinite)(e)?e:Number(e),Object(g.isFinite)(e)||(console.warn("Invalid number",e,p()(e)),e=0),t)return A(e,{style:"currency",currency:t});var r={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=e?Object(v.sprintf)(// translators: %s: an abbreviated number in millions.
Object(v.__)("%sM","google-site-kit"),A(I(e),e%10==0?{}:r)):1e4<=e?Object(v.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),A(I(e))):1e3<=e?Object(v.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),A(I(e),e%10==0?{}:r)):e.toString()},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.locale,n=void 0===r?R():r,o=l()(t,["locale"]);return new Intl.NumberFormat(n,o).format(e)},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=Object(g.get)(t,["_googlesitekitLegacyData","locale","","lang"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language},N=function(e){switch(e){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},C=function(e){if(e=parseInt(e,10),isNaN(e)||0===e)return"0.0s";var t={};return t.hours=Math.floor(e/60/60),t.minutes=Math.floor(e/60%60),t.seconds=Math.floor(e%60),((t.hours?t.hours+"h ":"")+(t.minutes?t.minutes+"m ":"")+(t.seconds?t.seconds+"s ":"")).trim()},T=function(e,t){var r=1e3*N("day"),n=e.getTime(),o=t.getTime();return Math.round(Math.abs(n-o)/r)},x=function(e,t){if("0"===e||0===e||isNaN(e))return"";var r=((t-e)/e*100).toFixed(1);return isNaN(r)||"Infinity"===r?"":r},U=function(e,t){return Object(g.map)(e,(function(e,r){return[e[0],e[t]||(0===r?"":0)]}))},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._googlesitekitLegacyData,r=t.modules;return r?Object.keys(r).reduce((function(e,t){return"object"!==p()(r[t])||void 0===r[t].slug||void 0===r[t].name||r[t].slug!==t?e:P(P({},e),{},s()({},t,r[t]))}),{}):{}},q=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e._googlesitekitLegacyData,o=n.admin,i=o.connectURL,c=o.adminRoot,a=n.setup.needReauthenticate,u=L(n)[t].screenID,s="pagespeed-insights"===t?{notification:"authentication_success",reAuth:void 0}:{},f=Object(O.a)(c,P({page:t&&r&&u?u:"googlesitekit-dashboard",slug:t,reAuth:r},s));if(!a)return f;var l=encodeURIComponent(Object(y.a)(f));return f=c+"?"+l,Object(O.a)(i,{redirect:f,status:r})},F=function(t,r){var n=e._googlesitekitLegacyData.admin.adminRoot;return t||(t="googlesitekit-dashboard"),r=P({page:t},r),Object(O.a)(n,r)},M=function(e){try{return JSON.parse(e)&&!!e}catch(e){return!1}},V=function(){var e=a()(i.a.mark((function e(t,r,n){var o,c,a,u,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>3&&void 0!==s[3]?s[3]:h.c,c=s.length>4&&void 0!==s[4]?s[4]:L,e.next=4,t.setModuleActive(r,n);case 4:return a=e.sent,(u=c())[r]&&(u[r].active=n),e.next=9,o("".concat(r,"_setup"),n?"module_activate":"module_deactivate",r);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(b.b)("googlesitekit.ErrorNotification","googlesitekit.ErrorNotification",Object(_.b)(e,t),1)},G=function(e){if(!e)return"";var t=e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/(\\)/g,"");return Object(g.unescape)(t)};function z(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"33",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"33",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(e._googlesitekitLegacyData){var a=n.createElement(m.a,{id:t,width:o,height:i,className:c});return r?a=n.createElement(m.a,{id:"".concat(t,"-disabled"),width:o,height:i,className:c}):"pagespeed-insights"===t&&(a=n.createElement("img",{src:e._googlesitekitLegacyData.admin.assetsRoot+"images/icon-pagespeed.png",width:o,alt:"",className:c})),a}}function J(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e._googlesitekitBaseData,n=r.blogPrefix,o=r.isNetworkMode;return o?t:n+t}}).call(this,r(16),r(11))},50:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return d}));var n=r(63),o=e._googlesitekitBaseData||{},i=o.isFirstAdmin,c=o.trackingAllowed,a={isFirstAdmin:i,trackingEnabled:o.trackingEnabled,trackingID:o.trackingID,referenceSiteURL:o.referenceSiteURL,userIDHash:o.userIDHash},u=Object(n.a)(a),s=u.enableTracking,f=u.disableTracking,l=u.isTrackingEnabled,d=u.trackEvent;function p(e){e?s():f()}!0===c&&p(l())}).call(this,r(16))},52:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(33);function o(e){return function(){e[n.a]=e[n.a]||[],e[n.a].push(arguments)}}},54:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(72),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:n.a.sanitize(e,t)}}},55:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l}));var n=r(38),o=r.n(n),i=r(0);function c(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=null,r=null,n=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),o=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(n&&o)return!1;if(t=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),r=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===t&&null===r)return!1;var c=document.createElement("span");c.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(e));var a=document.createElement("span");a.setAttribute("class","plugin-count"),a.setAttribute("aria-hidden","true"),a.textContent=e;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(i.sprintf)(
/* translators: %d is the number of notifications */
Object(i._n)("%d notification","%d notifications",e,"google-site-kit"),e),c.appendChild(a),c.appendChild(u),t&&null===n&&t.appendChild(c),r&&null===o&&r.appendChild(c),c},s=function(){e.localStorage&&e.localStorage.clear(),e.sessionStorage&&e.sessionStorage.clear()},f=function(e){for(var t=location.search.substr(1).split("&"),r={},n=0;n<t.length;n++)r[t[n].split("=")[0]]=decodeURIComponent(t[n].split("=")[1]);return e?r.hasOwnProperty(e)?decodeURIComponent(r[e].replace(/\+/g," ")):"":r},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,r=new URL(t.href);if(e)return r.searchParams&&r.searchParams.get?r.searchParams.get(e):f(e);var n,i={},a=c(r.searchParams.entries());try{for(a.s();!(n=a.n()).done;){var u=o()(n.value,2),s=u[0],l=u[1];i[s]=l}}catch(e){a.e(e)}finally{a.f()}return i}}).call(this,r(16))},57:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(34),o=r.n(n),i=r(97),c=r.n(i),a=function(e){return c()(JSON.stringify(function e(t){var r={};return Object.keys(t).sort().forEach((function(n){var i=t[n];i&&"object"===o()(i)&&!Array.isArray(i)&&(i=e(i)),r[n]=i})),r}(e)))}},570:function(e,t,r){"use strict";r.r(t);r(93)},58:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return u}));var n=r(45),o=r.n(n),i=r(13),c=r(0);function a(){Object(c.setLocaleData)(e._googlesitekitLegacyData.locale,"google-site-kit")}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.locale,n=void 0===r?s():r,i=o()(t,["locale"]);return new Intl.NumberFormat(n,i).format(e)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=Object(i.get)(t,["_googlesitekitLegacyData","locale","","lang"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language}}).call(this,r(16))},62:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},o=function(e){return e.replace(/([a-z0-9]{1})([A-Z]{1})/g,"$1_$2").toUpperCase()}},63:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return f}));var n=r(10),o=r.n(n),i=r(64),c=r(65);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function f(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=u(u({},s),t);return n.referenceSiteURL&&(n.referenceSiteURL=n.referenceSiteURL.toString().replace(/\/+$/,"")),{enableTracking:Object(i.a)(n,r),disableTracking:function(){n.trackingEnabled=!1},isTrackingEnabled:function(){return!!n.trackingEnabled},trackEvent:Object(c.a)(n,r)}}}).call(this,r(16))},64:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i}));var n=r(52),o=r(33);function i(t,r){var i=Object(n.a)(r);return function(){t.trackingEnabled=!0;var r=e.document;if(!r.querySelector("script[".concat(o.b,"]"))){var n=r.createElement("script");n.setAttribute(o.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID,"&l=").concat(o.a),r.head.appendChild(n),i("js",new Date),i("config",t.trackingID)}}}}).call(this,r(16))},65:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return d}));var n=r(4),o=r.n(n),i=r(10),c=r.n(i),a=r(15),u=r.n(a),s=r(52);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(t,r){var n=Object(s.a)(r);return function(){var r=u()(o.a.mark((function r(i,c){var a,u,s,f,d,p,g,b,v=arguments;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=v.length>2&&void 0!==v[2]?v[2]:"",u=v.length>3&&void 0!==v[3]?v[3]:"",s=t.isFirstAdmin,f=t.referenceSiteURL,d=t.trackingEnabled,p=t.trackingID,g=t.userIDHash,d){r.next=5;break}return r.abrupt("return");case 5:return b={send_to:p,event_category:i,event_label:a,event_value:u,dimension1:f,dimension2:s?"true":"false",dimension3:g},r.abrupt("return",new Promise((function(t){var r=setTimeout((function(){e.console.warn('Tracking event "'.concat(c,'" (category "').concat(i,'") took too long to fire.')),t()}),1e3);n("event",c,l(l({},b),{},{event_callback:function(){clearTimeout(r),t()}}))})));case 7:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}}).call(this,r(16))},72:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o}));var n=r(96),o=r.n(n)()(e)}).call(this,r(16))},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return l.b}));var n=r(12),o=r.n(n),i=r(4),c=r.n(i),a=r(10),u=r.n(a),s=r(39),f=r.n(s),l=r(24),d=r(42);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=o.a.createRegistrySelector,v=Object(d.a)({baseName:"getAuthentication",controlCallback:function(){return f.a.get("core","user","authentication",void 0,{useCache:!1})},reducerCallback:function(e,t){return g(g({},e),{},{authentication:t})}}),O={authentication:void 0},y={getAuthentication:c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.commonActions.getRegistry();case 2:if(t=e.sent,(0,t.select)(l.b).getAuthentication()){e.next=7;break}return e.next=7,v.actions.fetchGetAuthentication();case 7:case"end":return e.stop()}}),e)}))},m={getAuthentication:function(e){return e.authentication},hasScope:b((function(e){return function(t,r){var n=e(l.b).getGrantedScopes(t);if(void 0!==n)return n.includes(r)}})),isAuthenticated:b((function(e){return function(){return(e(l.b).getAuthentication()||{}).authenticated}})),getGrantedScopes:b((function(e){return function(){return(e(l.b).getAuthentication()||{}).grantedScopes}})),getRequiredScopes:b((function(e){return function(){return(e(l.b).getAuthentication()||{}).requiredScopes}})),getUnsatisfiedScopes:b((function(e){return function(){return(e(l.b).getAuthentication()||{}).unsatisfiedScopes}})),needsReauthentication:b((function(e){return function(){return(e(l.b).getAuthentication()||{}).needsReauthentication}}))},h=o.a.combineStores(v,{INITIAL_STATE:O,resolvers:y,selectors:m}),_=(h.INITIAL_STATE,h.actions,h.controls,h.reducer,h.resolvers,h.selectors,h),j=r(19),w=r.n(j);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={INITIAL_STATE:{dateRange:"last-28-days"},actions:{setDateRange:function(e){return w()(e,"Date range slug is required."),{type:"SET_DATE_RANGE",payload:{slug:e}}}},controls:{},reducer:function(e,t){var r=t.type,n=t.payload;switch(r){case"SET_DATE_RANGE":return E(E({},e),{},{dateRange:n.slug});default:return E({},e)}},resolvers:{},selectors:{getDateRange:function(e){return e.dateRange}}};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=o.a.createRegistrySelector,A=Object(d.a)({baseName:"disconnect",controlCallback:function(){return f.a.set("core","user","disconnect")},reducerCallback:function(e,t){return I(I({},e),{},{disconnected:t})}}),R={disconnected:void 0},N={disconnect:c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.actions.fetchDisconnect();case 2:case"end":return e.stop()}}),e)}))},C={isDoingDisconnect:D((function(e){return function(){return e(l.b).isFetchingDisconnect()}}))},T=o.a.combineStores(A,{INITIAL_STATE:R,actions:N,selectors:C}),x=(T.INITIAL_STATE,T.actions,T.controls,T.reducer,T.resolvers,T.selectors,T);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var L={INITIAL_STATE:{error:void 0},actions:{},controls:{},reducer:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)},resolvers:{},selectors:{getError:function(e){return e.error}}},q=r(105),F=Object(q.a)("core","user","notifications",{server:!1});function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H={INITIAL_STATE:{permissionError:null},actions:{clearPermissionScopeError:function(){return{payload:{},type:"CLEAR_PERMISSION_SCOPE_ERROR"}},setPermissionScopeError:function(e){return w()(e,"permissionError is required."),{payload:{permissionError:e},type:"SET_PERMISSION_SCOPE_ERROR"}}},controls:{},reducer:function(e,t){var r=t.type,n=t.payload;switch(r){case"CLEAR_PERMISSION_SCOPE_ERROR":return V(V({},e),{},{permissionError:null});case"SET_PERMISSION_SCOPE_ERROR":var o=n.permissionError;return V(V({},e),{},{permissionError:o});default:return V({},e)}},resolvers:{},selectors:{getPermissionScopeError:function(e){return e.permissionError}}},G=r(116),z=o.a.combineStores(o.a.commonStore,_,S,x,L,F,H,G.a);z.INITIAL_STATE,z.actions,z.controls,z.reducer,z.resolvers,z.selectors;o.a.registerStore(l.b,z)}});