import{r as p}from"./index-76fb7be0.js";import{c as y}from"./_commonjsHelpers-de833af9.js";var x="DELAY",T="ERROR",M="LONG_PRESS_DETECTED",m="NOT_RESPONDER",D="RESPONDER_ACTIVE_LONG_PRESS_START",A="RESPONDER_ACTIVE_PRESS_START",b="RESPONDER_INACTIVE_PRESS_START",re="RESPONDER_GRANT",O="RESPONDER_RELEASE",k="RESPONDER_TERMINATED",V=Object.freeze({NOT_RESPONDER:{DELAY:T,RESPONDER_GRANT:b,RESPONDER_RELEASE:T,RESPONDER_TERMINATED:T,LONG_PRESS_DETECTED:T},RESPONDER_INACTIVE_PRESS_START:{DELAY:A,RESPONDER_GRANT:T,RESPONDER_RELEASE:m,RESPONDER_TERMINATED:m,LONG_PRESS_DETECTED:T},RESPONDER_ACTIVE_PRESS_START:{DELAY:T,RESPONDER_GRANT:T,RESPONDER_RELEASE:m,RESPONDER_TERMINATED:m,LONG_PRESS_DETECTED:D},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:T,RESPONDER_GRANT:T,RESPONDER_RELEASE:m,RESPONDER_TERMINATED:m,LONG_PRESS_DETECTED:D},ERROR:{DELAY:m,RESPONDER_GRANT:b,RESPONDER_RELEASE:m,RESPONDER_TERMINATED:m,LONG_PRESS_DETECTED:m}}),Q=e=>e.getAttribute("role"),L=e=>e.tagName.toLowerCase(),U=e=>e===A||e===D,v=e=>Q(e)==="button",Y=e=>e===b||e===A||e===D,te=e=>e===k||e===O,H=e=>{var t=e.key,o=e.target,u=t===" "||t==="Spacebar",n=L(o)==="button"||v(o);return t==="Enter"||u&&n},ne=450,ae=50;class ie{constructor(t){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=m,this.configure(t)}configure(t){this._config=t}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var t=(n,f)=>{n.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=m,this._isPointerTouch=n.nativeEvent.type==="touchstart",this._receiveSignal(re,n);var l=N(this._config.delayPressStart,0,ae);f!==!1&&l>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(x,n)},l):this._receiveSignal(x,n);var E=N(this._config.delayLongPress,10,ne);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(n)},E+l)},o=n=>{this._receiveSignal(O,n)},u=n=>{var f=this._config.onPress,l=n.target;if(this._touchState!==m&&H(n)){o(n),document.removeEventListener("keyup",u);var E=l.getAttribute("role"),g=L(l),R=E==="link"||g==="a"||g==="button"||g==="input"||g==="select"||g==="textarea";f!=null&&!R&&f(n)}};return{onStartShouldSetResponder:n=>{var f=this._config.disabled;return f&&v(n.currentTarget)&&n.stopPropagation(),f==null?!0:!f},onKeyDown:n=>{var f=this._config.disabled,l=n.key,E=n.target;if(!f&&H(n)){this._touchState===m&&(t(n,!1),document.addEventListener("keyup",u));var g=l===" "||l==="Spacebar",R=Q(E),h=R==="button"||R==="menuitem";g&&h&&L(E)!=="button"&&n.preventDefault(),n.stopPropagation()}},onResponderGrant:n=>t(n),onResponderMove:n=>{this._config.onPressMove!=null&&this._config.onPressMove(n);var f=B(n);if(this._touchActivatePosition!=null){var l=this._touchActivatePosition.pageX-f.pageX,E=this._touchActivatePosition.pageY-f.pageY;Math.hypot(l,E)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:n=>o(n),onResponderTerminate:n=>{n.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(k,n)},onResponderTerminationRequest:n=>{var f=this._config,l=f.cancelable,E=f.disabled,g=f.onLongPress;return!E&&g!=null&&this._isPointerTouch&&n.nativeEvent.type==="contextmenu"?!1:l??!0},onClick:n=>{var f=this._config,l=f.disabled,E=f.onPress;l?v(n.currentTarget)&&n.stopPropagation():(n.stopPropagation(),this._longPressDispatched||this._selectionTerminated?n.preventDefault():E!=null&&n.altKey===!1&&E(n))},onContextMenu:n=>{var f=this._config,l=f.disabled,E=f.onLongPress;l?v(n.currentTarget)&&n.stopPropagation():E!=null&&this._isPointerTouch&&!n.defaultPrevented&&(n.preventDefault(),n.stopPropagation())}}}_receiveSignal(t,o){var u=this._touchState,n=null;V[u]!=null&&(n=V[u][t]),!(this._touchState===m&&t===O)&&(n==null||n===T?console.error("PressResponder: Invalid signal "+t+" for state "+u+" on responder"):u!==n&&(this._performTransitionSideEffects(u,n,t,o),this._touchState=n))}_performTransitionSideEffects(t,o,u,n){if(te(u)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),Y(t)&&u===M){var f=this._config.onLongPress;f!=null&&n.nativeEvent.key==null&&(f(n),this._longPressDispatched=!0)}var l=U(t),E=U(o);if(!l&&E?this._activate(n):l&&!E&&this._deactivate(n),Y(t)&&u===O){var g=this._config,R=g.onLongPress,h=g.onPress;if(h!=null){var S=R!=null&&t===D;S||!E&&!l&&(this._activate(n),this._deactivate(n))}}this._cancelPressDelayTimeout()}_activate(t){var o=this._config,u=o.onPressChange,n=o.onPressStart,f=B(t);this._touchActivatePosition={pageX:f.pageX,pageY:f.pageY},n!=null&&n(t),u!=null&&u(!0)}_deactivate(t){var o=this._config,u=o.onPressChange,n=o.onPressEnd;function f(){n!=null&&n(t),u!=null&&u(!1)}var l=N(this._config.delayPressEnd);l>0?this._pressOutDelayTimeout=setTimeout(()=>{f()},l):f()}_handleLongPress(t){(this._touchState===A||this._touchState===D)&&this._receiveSignal(M,t)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function N(e,t,o){return t===void 0&&(t=0),o===void 0&&(o=0),Math.max(t,e??o)}function B(e){var t=e.nativeEvent,o=t.changedTouches,u=t.touches;return u!=null&&u.length>0?u[0]:o!=null&&o.length>0?o[0]:e.nativeEvent}function be(e,t){var o=p.useRef(null);o.current==null&&(o.current=new ie(t));var u=o.current;return p.useEffect(()=>{u.configure(t)},[t,u]),p.useEffect(()=>()=>{u.reset()},[u]),p.useDebugValue(t),u.getEventHandlers()}function se(){return{type:"GO_BACK"}}function oe(){if(typeof(arguments.length<=0?void 0:arguments[0])=="string")return{type:"NAVIGATE",payload:{name:arguments.length<=0?void 0:arguments[0],params:arguments.length<=1?void 0:arguments[1]}};{const e=(arguments.length<=0?void 0:arguments[0])||{};if(!e.hasOwnProperty("key")&&!e.hasOwnProperty("name"))throw new Error("You need to specify name or key when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.");return{type:"NAVIGATE",payload:e}}}function ce(e){return{type:"RESET",payload:e}}function ue(e){return{type:"SET_PARAMS",payload:{params:e}}}const fe=Object.freeze(Object.defineProperty({__proto__:null,goBack:se,navigate:oe,reset:ce,setParams:ue},Symbol.toStringTag,{value:"Module"})),le="The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";function Le(){const e=[...Object.keys(fe),"addListener","removeListener","resetRoot","dispatch","isFocused","canGoBack","getRootState","getState","getParent","getCurrentRoute","getCurrentOptions"],t={},o=(f,l)=>{t[f]&&(t[f]=t[f].filter(E=>E!==l))};let u=null;return{get current(){return u},set current(f){u=f,f!=null&&Object.entries(t).forEach(l=>{let[E,g]=l;g.forEach(R=>{f.addListener(E,R)})})},isReady:()=>u==null?!1:u.isReady(),...e.reduce((f,l)=>(f[l]=function(){for(var E=arguments.length,g=new Array(E),R=0;R<E;R++)g[R]=arguments[R];if(u==null)switch(l){case"addListener":{const[h,S]=g;return t[h]=t[h]||[],t[h].push(S),()=>o(h,S)}case"removeListener":{const[h,S]=g;o(h,S);break}default:console.error(le)}else return u[l](...g)},f),{})}}var de={},Ee=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),Z="%[a-f0-9]{2}",q=new RegExp("("+Z+")|([^%]+?)","gi"),z=new RegExp("("+Z+")+","gi");function F(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;var o=e.slice(0,t),u=e.slice(t);return Array.prototype.concat.call([],F(o),F(u))}function he(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(q)||[],o=1;o<t.length;o++)e=F(t,o).join(""),t=e.match(q)||[];return e}}function _e(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},o=z.exec(e);o;){try{t[o[0]]=decodeURIComponent(o[0])}catch{var u=he(o[0]);u!==o[0]&&(t[o[0]]=u)}o=z.exec(e)}t["%C2"]="�";for(var n=Object.keys(t),f=0;f<n.length;f++){var l=n[f];e=e.replace(new RegExp(l,"g"),t[l])}return e}var ge=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return _e(e)}},Re=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];const o=e.indexOf(t);return o===-1?[e]:[e.slice(0,o),e.slice(o+t.length)]},Se=function(e,t){for(var o={},u=Object.keys(e),n=Array.isArray(t),f=0;f<u.length;f++){var l=u[f],E=e[l];(n?t.indexOf(l)!==-1:t(l,E,e))&&(o[l]=E)}return o};(function(e){const t=Ee,o=ge,u=Re,n=Se,f=r=>r==null,l=Symbol("encodeFragmentIdentifier");function E(r){switch(r.arrayFormat){case"index":return a=>(s,i)=>{const c=s.length;return i===void 0||r.skipNull&&i===null||r.skipEmptyString&&i===""?s:i===null?[...s,[h(a,r),"[",c,"]"].join("")]:[...s,[h(a,r),"[",h(c,r),"]=",h(i,r)].join("")]};case"bracket":return a=>(s,i)=>i===void 0||r.skipNull&&i===null||r.skipEmptyString&&i===""?s:i===null?[...s,[h(a,r),"[]"].join("")]:[...s,[h(a,r),"[]=",h(i,r)].join("")];case"colon-list-separator":return a=>(s,i)=>i===void 0||r.skipNull&&i===null||r.skipEmptyString&&i===""?s:i===null?[...s,[h(a,r),":list="].join("")]:[...s,[h(a,r),":list=",h(i,r)].join("")];case"comma":case"separator":case"bracket-separator":{const a=r.arrayFormat==="bracket-separator"?"[]=":"=";return s=>(i,c)=>c===void 0||r.skipNull&&c===null||r.skipEmptyString&&c===""?i:(c=c===null?"":c,i.length===0?[[h(s,r),a,h(c,r)].join("")]:[[i,h(c,r)].join(r.arrayFormatSeparator)])}default:return a=>(s,i)=>i===void 0||r.skipNull&&i===null||r.skipEmptyString&&i===""?s:i===null?[...s,h(a,r)]:[...s,[h(a,r),"=",h(i,r)].join("")]}}function g(r){let a;switch(r.arrayFormat){case"index":return(s,i,c)=>{if(a=/\[(\d*)\]$/.exec(s),s=s.replace(/\[\d*\]$/,""),!a){c[s]=i;return}c[s]===void 0&&(c[s]={}),c[s][a[1]]=i};case"bracket":return(s,i,c)=>{if(a=/(\[\])$/.exec(s),s=s.replace(/\[\]$/,""),!a){c[s]=i;return}if(c[s]===void 0){c[s]=[i];return}c[s]=[].concat(c[s],i)};case"colon-list-separator":return(s,i,c)=>{if(a=/(:list)$/.exec(s),s=s.replace(/:list$/,""),!a){c[s]=i;return}if(c[s]===void 0){c[s]=[i];return}c[s]=[].concat(c[s],i)};case"comma":case"separator":return(s,i,c)=>{const _=typeof i=="string"&&i.includes(r.arrayFormatSeparator),d=typeof i=="string"&&!_&&S(i,r).includes(r.arrayFormatSeparator);i=d?S(i,r):i;const P=_||d?i.split(r.arrayFormatSeparator).map(ee=>S(ee,r)):i===null?i:S(i,r);c[s]=P};case"bracket-separator":return(s,i,c)=>{const _=/(\[\])$/.test(s);if(s=s.replace(/\[\]$/,""),!_){c[s]=i&&S(i,r);return}const d=i===null?[]:i.split(r.arrayFormatSeparator).map(P=>S(P,r));if(c[s]===void 0){c[s]=d;return}c[s]=[].concat(c[s],d)};default:return(s,i,c)=>{if(c[s]===void 0){c[s]=i;return}c[s]=[].concat(c[s],i)}}}function R(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function h(r,a){return a.encode?a.strict?t(r):encodeURIComponent(r):r}function S(r,a){return a.decode?o(r):r}function I(r){return Array.isArray(r)?r.sort():typeof r=="object"?I(Object.keys(r)).sort((a,s)=>Number(a)-Number(s)).map(a=>r[a]):r}function j(r){const a=r.indexOf("#");return a!==-1&&(r=r.slice(0,a)),r}function W(r){let a="";const s=r.indexOf("#");return s!==-1&&(a=r.slice(s)),a}function w(r){r=j(r);const a=r.indexOf("?");return a===-1?"":r.slice(a+1)}function G(r,a){return a.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):a.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function $(r,a){a=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},a),R(a.arrayFormatSeparator);const s=g(a),i=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return i;for(const c of r.split("&")){if(c==="")continue;let[_,d]=u(a.decode?c.replace(/\+/g," "):c,"=");d=d===void 0?null:["comma","separator","bracket-separator"].includes(a.arrayFormat)?d:S(d,a),s(S(_,a),d,i)}for(const c of Object.keys(i)){const _=i[c];if(typeof _=="object"&&_!==null)for(const d of Object.keys(_))_[d]=G(_[d],a);else i[c]=G(_,a)}return a.sort===!1?i:(a.sort===!0?Object.keys(i).sort():Object.keys(i).sort(a.sort)).reduce((c,_)=>{const d=i[_];return d&&typeof d=="object"&&!Array.isArray(d)?c[_]=I(d):c[_]=d,c},Object.create(null))}e.extract=w,e.parse=$,e.stringify=(r,a)=>{if(!r)return"";a=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},a),R(a.arrayFormatSeparator);const s=d=>a.skipNull&&f(r[d])||a.skipEmptyString&&r[d]==="",i=E(a),c={};for(const d of Object.keys(r))s(d)||(c[d]=r[d]);const _=Object.keys(c);return a.sort!==!1&&_.sort(a.sort),_.map(d=>{const P=r[d];return P===void 0?"":P===null?h(d,a):Array.isArray(P)?P.length===0&&a.arrayFormat==="bracket-separator"?h(d,a)+"[]":P.reduce(i(d),[]).join("&"):h(d,a)+"="+h(P,a)}).filter(d=>d.length>0).join("&")},e.parseUrl=(r,a)=>{a=Object.assign({decode:!0},a);const[s,i]=u(r,"#");return Object.assign({url:s.split("?")[0]||"",query:$(w(r),a)},a&&a.parseFragmentIdentifier&&i?{fragmentIdentifier:S(i,a)}:{})},e.stringifyUrl=(r,a)=>{a=Object.assign({encode:!0,strict:!0,[l]:!0},a);const s=j(r.url).split("?")[0]||"",i=e.extract(r.url),c=e.parse(i,{sort:!1}),_=Object.assign(c,r.query);let d=e.stringify(_,a);d&&(d=`?${d}`);let P=W(r.url);return r.fragmentIdentifier&&(P=`#${a[l]?h(r.fragmentIdentifier,a):r.fragmentIdentifier}`),`${s}${d}${P}`},e.pick=(r,a,s)=>{s=Object.assign({parseFragmentIdentifier:!0,[l]:!1},s);const{url:i,query:c,fragmentIdentifier:_}=e.parseUrl(r,s);return e.stringifyUrl({url:i,query:n(c,a),fragmentIdentifier:_},s)},e.exclude=(r,a,s)=>{const i=Array.isArray(a)?c=>!a.includes(c):(c,_)=>!a(c,_);return e.pick(r,i,s)}})(de);var J={},C={};Object.defineProperty(C,"__esModule",{value:!0});var K=p,me=typeof document<"u"?K.useLayoutEffect:K.useEffect;C.default=me;var Pe=y&&y.__createBinding||(Object.create?function(e,t,o,u){u===void 0&&(u=o);var n=Object.getOwnPropertyDescriptor(t,o);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,u,n)}:function(e,t,o,u){u===void 0&&(u=o),e[u]=t[o]}),Te=y&&y.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ye=y&&y.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)&&Pe(t,e,o);return Te(t,e),t},pe=y&&y.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(J,"__esModule",{value:!0});var X=ye(p),De=pe(C);function Oe(e){var t=X.useRef(e),o=X.useRef(function(){for(var n=[],f=0;f<arguments.length;f++)n[f]=arguments[f];return t.current.apply(this,n)}).current;return(0,De.default)(function(){t.current=e}),o}J.default=Oe;var ve=(e=>(e.about="about",e.address="address",e["construction-work"]="construction-work",e["construction-work-editor"]="construction-work-editor",e.contact="contact",e.home="home",e.onboarding="onboarding",e["open-waste-container"]="open-waste-container",e.redirects="redirects",e["report-problem"]="report-problem",e.user="user",e["waste-guide"]="waste-guide",e))(ve||{});export{fe as C,ve as M,le as N,Le as c,de as q,ce as r,be as u};
