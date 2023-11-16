import{a as vt}from"./_commonjsHelpers-de833af9.js";import{I as ae,b as C,S,_ as p,q as ve,r as H,w as y,U as F,p as mt,J as St,K as ft,v as _t,L as Pt,i as Tt}from"./useThemable-a2d360f8.js";import{f as gt}from"./index-19f2d8d7.js";import{a as re,r as i,R as A,b as pt}from"./index-4ab02870.js";import{i as M,N as yt,P as bt}from"./invariant-0f383fd5.js";import{A as Ot}from"./index-d7045b27.js";import{A as Nt,L as Dt}from"./index-aae143a2.js";import{_ as b}from"./extends-98964cd2.js";import{V as m}from"./index-f84ead45.js";import{A as Ct,L as At}from"./index-fd41659f.js";import{D as It,u as Lt}from"./index-4e98821d.js";import{d as Mt,I as me,A as wt,E as kt,F as Vt,R as xt,S as Gt,a as Ht,V as Bt}from"./Animated-5f17a040.js";import{I as $e,P as $t}from"./index-fba83115.js";import{u as Ye}from"./index-7e8d53f4.js";import{T as Fe}from"./index-90f7f46c.js";import{P as Yt}from"./index-4cb24ae1.js";import{S as Ft}from"./index-dd497dc3.js";import{T as zt}from"./index-24f89d6a.js";import{T as Ut}from"./index-fab3bc94.js";import{R as jt,N as Wt}from"./index-cf0105b9.js";var ze,Ue,ye=re;Ue=ye.createRoot,ze=ye.hydrateRoot;const oe=re.unmountComponentAtNode;function Xt(e,t){return ae(t),ze(t,e)}function Kt(e,t){ae(t);var n=Ue(t);return n.render(e),n}function Zt(e,t,n){return ae(t),re.hydrate(e,t,n),{unmount:function(){return oe(t)}}}function je(e,t,n){return ae(t),re.render(e,t,n),{unmount:function(){return oe(t)}}}function qt(){return C&&window.matchMedia!=null?window.matchMedia("(prefers-color-scheme: dark)"):null}var k=qt(),X=new WeakMap,Jt={getColorScheme(){return k&&k.matches?"dark":"light"},addChangeListener(e){var t=X.get(e);t||(t=r=>{var a=r.matches;e({colorScheme:a?"dark":"light"})},X.set(e,t)),k&&k.addListener(t);function n(){var r=X.get(e);k&&r&&k.removeListener(r),X.delete(e)}return{remove:n}}};const Ee=Jt;var Qt=i.createContext(null),We=i.forwardRef((e,t)=>{var n=e.children,r=e.WrapperComponent,a=i.createElement(m,{children:n,key:1,style:be.appContainer});return r&&(a=i.createElement(r,null,a)),i.createElement(Qt.Provider,{value:e.rootTag},i.createElement(m,{ref:t,style:be.appContainer},a))});We.displayName="AppContainer";const Xe=We;var be=S.create({appContainer:{flex:1,pointerEvents:"box-none"}});function en(e,t,n,r){var a=r.hydrate,o=r.initialProps,s=r.mode,c=r.rootTag,u=a?s==="concurrent"?Xt:Zt:s==="concurrent"?Kt:je;return M(c,"Expect to have a valid rootTag, instead got ",c),u(A.createElement(Xe,{WrapperComponent:t,ref:n,rootTag:c},A.createElement(e,o)),c)}function tn(e,t,n){var r=A.createElement(Xe,{WrapperComponent:n,rootTag:{}},A.createElement(e,t)),a=o=>{var s=S.getSheet();return A.createElement("style",b({},o,{dangerouslySetInnerHTML:{__html:s.textContent},id:s.id}))};return{element:r,getStyleElement:a}}var Oe={},D={},le=e=>e(),Y;class te{static getAppKeys(){return Object.keys(D)}static getApplication(t,n){return M(D[t]&&D[t].getApplication,"Application "+t+" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent."),D[t].getApplication(n)}static registerComponent(t,n){return D[t]={getApplication:r=>tn(le(n),r?r.initialProps:Oe,Y&&Y(r)),run:r=>en(le(n),Y&&Y(r),r.callback,{hydrate:r.hydrate||!1,initialProps:r.initialProps||Oe,mode:r.mode||"concurrent",rootTag:r.rootTag})},t}static registerConfig(t){t.forEach(n=>{var r=n.appKey,a=n.component,o=n.run;o?te.registerRunnable(r,o):(M(a,"No component provider passed in"),te.registerComponent(r,a))})}static registerRunnable(t,n){return D[t]={run:n},t}static runApplication(t,n){return M(D[t]&&D[t].run,'Application "'+t+'" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.'),D[t].run(n)}static setComponentProviderInstrumentationHook(t){le=t}static setWrapperComponentProvider(t){Y=t}static unmountApplicationComponentAtRootTag(t){oe(t)}}function ce(){}var nn={exitApp:ce,addEventListener(){return console.error("BackHandler is not supported on web and should not be used."),{remove:ce}},removeEventListener:ce};const an=nn;var ue;class rn{static isAvailable(){return ue===void 0&&(ue=typeof document.queryCommandSupported=="function"&&document.queryCommandSupported("copy")),ue}static getString(){return Promise.resolve("")}static setString(t){var n=!1,r=document.body;if(r){var a=document.createElement("span");a.textContent=t,a.style.opacity="0",a.style.position="absolute",a.style.whiteSpace="pre-wrap",a.style.userSelect="auto",r.appendChild(a);var o=window.getSelection();o.removeAllRanges();var s=document.createRange();s.selectNodeContents(a),o.addRange(s);try{document.execCommand("copy"),n=!0}catch{}o.removeAllRanges(),r.removeChild(a)}return n}}var on={allowRTL(){},forceRTL(){},getConstants(){return{isRTL:!1}}};const sn=on;var ln={addListener(){return{remove:()=>{}}},dismiss(){Mt()},removeAllListeners(){},removeListener(){}};const cn=ln;var L={centroidDimension:function(t,n,r,a){var o=t.touchBank,s=0,c=0,u=t.numberActiveTouches===1?t.touchBank[t.indexOfSingleActiveTouch]:null;if(u!==null)u.touchActive&&u.currentTimeStamp>n&&(s+=a&&r?u.currentPageX:a&&!r?u.currentPageY:!a&&r?u.previousPageX:u.previousPageY,c=1);else for(var d=0;d<o.length;d++){var E=o[d];if(E!=null&&E.touchActive&&E.currentTimeStamp>=n){var h=void 0;a&&r?h=E.currentPageX:a&&!r?h=E.currentPageY:!a&&r?h=E.previousPageX:h=E.previousPageY,s+=h,c++}}return c>0?s/c:L.noCentroid},currentCentroidXOfTouchesChangedAfter:function(t,n){return L.centroidDimension(t,n,!0,!0)},currentCentroidYOfTouchesChangedAfter:function(t,n){return L.centroidDimension(t,n,!1,!0)},previousCentroidXOfTouchesChangedAfter:function(t,n){return L.centroidDimension(t,n,!0,!1)},previousCentroidYOfTouchesChangedAfter:function(t,n){return L.centroidDimension(t,n,!1,!1)},currentCentroidX:function(t){return L.centroidDimension(t,0,!0,!0)},currentCentroidY:function(t){return L.centroidDimension(t,0,!1,!0)},noCentroid:-1};const B=L;var Ne=B.currentCentroidXOfTouchesChangedAfter,De=B.currentCentroidYOfTouchesChangedAfter,un=B.previousCentroidXOfTouchesChangedAfter,dn=B.previousCentroidYOfTouchesChangedAfter,En=B.currentCentroidX,hn=B.currentCentroidY,V={_initializeGestureState(e){e.moveX=0,e.moveY=0,e.x0=0,e.y0=0,e.dx=0,e.dy=0,e.vx=0,e.vy=0,e.numberActiveTouches=0,e._accountsForMovesUpTo=0},_updateGestureStateOnMove(e,t){e.numberActiveTouches=t.numberActiveTouches,e.moveX=Ne(t,e._accountsForMovesUpTo),e.moveY=De(t,e._accountsForMovesUpTo);var n=e._accountsForMovesUpTo,r=un(t,n),a=Ne(t,n),o=dn(t,n),s=De(t,n),c=e.dx+(a-r),u=e.dy+(s-o),d=t.mostRecentTimeStamp-e._accountsForMovesUpTo;e.vx=(c-e.dx)/d,e.vy=(u-e.dy)/d,e.dx=c,e.dy=u,e._accountsForMovesUpTo=t.mostRecentTimeStamp},create(e){var t={handle:null,shouldCancelClick:!1,timeout:null},n={stateID:Math.random(),moveX:0,moveY:0,x0:0,y0:0,dx:0,dy:0,vx:0,vy:0,numberActiveTouches:0,_accountsForMovesUpTo:0},r={onStartShouldSetResponder(a){return e.onStartShouldSetPanResponder==null?!1:e.onStartShouldSetPanResponder(a,n)},onMoveShouldSetResponder(a){return e.onMoveShouldSetPanResponder==null?!1:e.onMoveShouldSetPanResponder(a,n)},onStartShouldSetResponderCapture(a){return a.nativeEvent.touches.length===1&&V._initializeGestureState(n),n.numberActiveTouches=a.touchHistory.numberActiveTouches,e.onStartShouldSetPanResponderCapture!=null?e.onStartShouldSetPanResponderCapture(a,n):!1},onMoveShouldSetResponderCapture(a){var o=a.touchHistory;return n._accountsForMovesUpTo===o.mostRecentTimeStamp?!1:(V._updateGestureStateOnMove(n,o),e.onMoveShouldSetPanResponderCapture?e.onMoveShouldSetPanResponderCapture(a,n):!1)},onResponderGrant(a){return t.handle||(t.handle=me.createInteractionHandle()),t.timeout&&Rn(t),t.shouldCancelClick=!0,n.x0=En(a.touchHistory),n.y0=hn(a.touchHistory),n.dx=0,n.dy=0,e.onPanResponderGrant&&e.onPanResponderGrant(a,n),e.onShouldBlockNativeResponder==null?!0:e.onShouldBlockNativeResponder(a,n)},onResponderReject(a){K(t,e.onPanResponderReject,a,n)},onResponderRelease(a){K(t,e.onPanResponderRelease,a,n),Ce(t),V._initializeGestureState(n)},onResponderStart(a){var o=a.touchHistory;n.numberActiveTouches=o.numberActiveTouches,e.onPanResponderStart&&e.onPanResponderStart(a,n)},onResponderMove(a){var o=a.touchHistory;n._accountsForMovesUpTo!==o.mostRecentTimeStamp&&(V._updateGestureStateOnMove(n,o),e.onPanResponderMove&&e.onPanResponderMove(a,n))},onResponderEnd(a){var o=a.touchHistory;n.numberActiveTouches=o.numberActiveTouches,K(t,e.onPanResponderEnd,a,n)},onResponderTerminate(a){K(t,e.onPanResponderTerminate,a,n),Ce(t),V._initializeGestureState(n)},onResponderTerminationRequest(a){return e.onPanResponderTerminationRequest==null?!0:e.onPanResponderTerminationRequest(a,n)},onClickCapture:a=>{t.shouldCancelClick===!0&&(a.stopPropagation(),a.preventDefault())}};return{panHandlers:r,getInteractionHandle(){return t.handle}}}};function K(e,t,n,r){e.handle&&(me.clearInteractionHandle(e.handle),e.handle=null),t&&t(n,r)}function Rn(e){clearTimeout(e.timeout)}function Ce(e){e.timeout=setTimeout(()=>{e.shouldCancelClick=!1},250)}const vn=V;class mn{static share(t,n){return n===void 0&&(n={}),M(typeof t=="object"&&t!==null,"Content to share must be a valid object"),M(typeof t.url=="string"||typeof t.message=="string","At least one of URL and message is required"),M(typeof n=="object"&&n!==null,"Options must be a valid object"),M(!t.title||typeof t.title=="string","Invalid title: title should be a string."),window.navigator.share!==void 0?window.navigator.share({title:t.title,text:t.message,url:t.url}):Promise.reject(new Error("Share is not supported in this browser"))}static get sharedAction(){return"sharedAction"}static get dismissedAction(){return"dismissedAction"}}const Sn=mn;var Ae=e=>{"vibrate"in window.navigator&&window.navigator.vibrate(e)},fn={cancel(){Ae(0)},vibrate(e){e===void 0&&(e=400),Ae(e)}};const _n=fn;var Pn=["animating","color","hidesWhenStopped","size","style"],Ie=e=>i.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e}),Ke=i.forwardRef((e,t)=>{var n=e.animating,r=n===void 0?!0:n,a=e.color,o=a===void 0?"#1976D2":a,s=e.hidesWhenStopped,c=s===void 0?!0:s,u=e.size,d=u===void 0?"small":u,E=e.style,h=p(e,Pn),R=i.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},Ie({stroke:o,opacity:.2}),Ie({stroke:o,strokeDasharray:80,strokeDashoffset:60}));return i.createElement(m,b({},h,{"aria-valuemax":1,"aria-valuemin":0,ref:t,role:"progressbar",style:[Z.container,E]}),i.createElement(m,{children:R,style:[typeof d=="number"?{height:d,width:d}:Tn[d],Z.animation,!r&&Z.animationPause,!r&&c&&Z.hidesWhenStopped]}))});Ke.displayName="ActivityIndicator";var Z=S.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),Tn=S.create({small:{width:20,height:20},large:{width:36,height:36}});const gn=Ke;var pn=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function yn(e,t){var n=e.activeOpacity,r=e.delayPressIn,a=e.delayPressOut,o=e.delayLongPress,s=e.disabled,c=e.focusable,u=e.onLongPress,d=e.onPress,E=e.onPressIn,h=e.onPressOut,R=e.rejectResponderTermination,v=e.style,P=p(e,pn),f=i.useRef(null),O=ve(t,f),N=i.useState("0s"),se=N[0],fe=N[1],_e=i.useState(null),Pe=_e[0],Te=_e[1],j=i.useCallback((T,W)=>{Te(T),fe(W?W/1e3+"s":"0s")},[Te,fe]),ge=i.useCallback(T=>{j(n??.2,T)},[n,j]),pe=i.useCallback(T=>{j(null,T)},[j]),ht=i.useMemo(()=>({cancelable:!R,disabled:s,delayLongPress:o,delayPressStart:r,delayPressEnd:a,onLongPress:u,onPress:d,onPressStart(T){var W=T.dispatchConfig!=null?T.dispatchConfig.registrationName==="onResponderGrant":T.type==="keydown";ge(W?0:150),E!=null&&E(T)},onPressEnd(T){pe(250),h!=null&&h(T)}}),[o,r,a,s,u,d,E,h,R,ge,pe]),Rt=Ye(f,ht);return i.createElement(m,b({},P,Rt,{accessibilityDisabled:s,focusable:!s&&c!==!1,pointerEvents:s?"box-none":void 0,ref:O,style:[Le.root,!s&&Le.actionable,v,Pe!=null&&{opacity:Pe},{transitionDuration:se}]}))}var Le=S.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),Ze=i.memo(i.forwardRef(yn));Ze.displayName="TouchableOpacity";const qe=Ze;var Je=i.forwardRef((e,t)=>{var n=e.accessibilityLabel,r=e.color,a=e.disabled,o=e.onPress,s=e.testID,c=e.title;return i.createElement(qe,{accessibilityLabel:n,accessibilityRole:"button",disabled:a,focusable:!a,onPress:o,ref:t,style:[q.button,r&&{backgroundColor:r},a&&q.buttonDisabled],testID:s},i.createElement(Fe,{style:[q.text,a&&q.textDisabled]},c))});Je.displayName="Button";var q=S.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const bn=Je;var On=["aria-readonly","color","disabled","onChange","onValueChange","readOnly","style","value"],Qe=i.forwardRef((e,t)=>{var n=e["aria-readonly"],r=e.color,a=e.disabled,o=e.onChange,s=e.onValueChange,c=e.readOnly,u=e.style,d=e.value,E=p(e,On);function h(P){var f=P.nativeEvent.target.checked;P.nativeEvent.value=f,o&&o(P),s&&s(f)}var R=i.createElement(m,{style:[I.fakeControl,d&&I.fakeControlChecked,d&&r&&{backgroundColor:r,borderColor:r},a&&I.fakeControlDisabled,d&&a&&I.fakeControlCheckedAndDisabled]}),v=H("input",{checked:d,disabled:a,onChange:h,readOnly:c===!0||n===!0||E.accessibilityReadOnly===!0,ref:t,style:[I.nativeControl,I.cursorInherit],type:"checkbox"});return i.createElement(m,b({},E,{"aria-disabled":a,"aria-readonly":n,style:[I.root,u,a&&I.cursorDefault]}),R,v)});Qe.displayName="CheckBox";var I=S.create({root:{cursor:"pointer",height:16,userSelect:"none",width:16},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},fakeControl:{alignItems:"center",backgroundColor:"#fff",borderColor:"#657786",borderRadius:2,borderStyle:"solid",borderWidth:2,height:"100%",justifyContent:"center",width:"100%"},fakeControlChecked:{backgroundColor:"#009688",backgroundImage:'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',backgroundRepeat:"no-repeat",borderColor:"#009688"},fakeControlDisabled:{borderColor:"#CCD6DD"},fakeControlCheckedAndDisabled:{backgroundColor:"#AAB8C2",borderColor:"#AAB8C2"},nativeControl:y(y({},S.absoluteFillObject),{},{height:"100%",margin:0,appearance:"none",padding:0,width:"100%"})});const Nn=Qe;var Dn=["children","style","imageStyle","imageRef"],Cn={},et=i.forwardRef((e,t)=>{var n=e.children,r=e.style,a=r===void 0?Cn:r,o=e.imageStyle,s=e.imageRef,c=p(e,Dn),u=S.flatten(a),d=u.height,E=u.width;return i.createElement(m,{ref:t,style:a},i.createElement($e,b({},c,{ref:s,style:[{width:E,height:d,zIndex:-1},S.absoluteFill,o]})),n)});et.displayName="ImageBackground";const An=et;var In=["behavior","contentContainerStyle","keyboardVerticalOffset"];class Ln extends i.Component{constructor(){super(...arguments),this.frame=null,this.onLayout=t=>{this.frame=t.nativeEvent.layout}}relativeKeyboardHeight(t){var n=this.frame;if(!n||!t)return 0;var r=t.screenY-(this.props.keyboardVerticalOffset||0);return Math.max(n.y+n.height-r,0)}onKeyboardChange(t){}render(){var t=this.props;t.behavior,t.contentContainerStyle,t.keyboardVerticalOffset;var n=p(t,In);return i.createElement(m,b({onLayout:this.onLayout},n))}}const Mn=Ln;function wn(e){var t=e.children,n=i.useRef(null);if(C&&!n.current){var r=document.createElement("div");r&&document.body&&(document.body.appendChild(r),n.current=r)}return i.useEffect(()=>{if(C)return()=>{document.body&&n.current&&(document.body.removeChild(n.current),n.current=null)}},[]),n.current&&C?pt.createPortal(t,n.current):null}var Me=300;function kn(e,t){return e==="slide"?t?xn:Gn:e==="fade"?t?Hn:Bn:t?_.container:_.hidden}function Vn(e){var t=e.animationType,n=e.children,r=e.onDismiss,a=e.onShow,o=e.visible,s=i.useState(!1),c=s[0],u=s[1],d=i.useRef(!1),E=i.useRef(!1),h=t&&t!=="none",R=i.useCallback(v=>{v&&v.currentTarget!==v.target||(o?a&&a():u(!1))},[a,o]);return i.useEffect(()=>{E.current&&!c&&r&&r(),E.current=c},[c,r]),i.useEffect(()=>{o&&u(!0),o!==d.current&&!h&&R(),d.current=o},[h,o,R]),c||o?H("div",{style:c?kn(t,o):_.hidden,onAnimationEnd:R,children:n}):null}var _=S.create({container:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999},animatedIn:{animationDuration:Me+"ms",animationTimingFunction:"ease-in"},animatedOut:{pointerEvents:"none",animationDuration:Me+"ms",animationTimingFunction:"ease-out"},fadeIn:{opacity:1,animationKeyframes:{"0%":{opacity:0},"100%":{opacity:1}}},fadeOut:{opacity:0,animationKeyframes:{"0%":{opacity:1},"100%":{opacity:0}}},slideIn:{transform:"translateY(0%)",animationKeyframes:{"0%":{transform:"translateY(100%)"},"100%":{transform:"translateY(0%)"}}},slideOut:{transform:"translateY(100%)",animationKeyframes:{"0%":{transform:"translateY(0%)"},"100%":{transform:"translateY(100%)"}}},hidden:{opacity:0}}),xn=[_.container,_.animatedIn,_.slideIn],Gn=[_.container,_.animatedOut,_.slideOut],Hn=[_.container,_.animatedIn,_.fadeIn],Bn=[_.container,_.animatedOut,_.fadeOut],$n=["active","children","onRequestClose","transparent"],Yn=i.forwardRef((e,t)=>{var n=e.active,r=e.children,a=e.onRequestClose,o=e.transparent,s=p(e,$n);i.useEffect(()=>{if(C){var u=d=>{n&&d.key==="Escape"&&(d.stopPropagation(),a&&a())};return document.addEventListener("keyup",u,!1),()=>document.removeEventListener("keyup",u,!1)}},[n,a]);var c=i.useMemo(()=>[J.modal,o?J.modalTransparent:J.modalOpaque],[o]);return i.createElement(m,b({},s,{"aria-modal":!0,ref:t,role:n?"dialog":null,style:c}),i.createElement(m,{style:J.container},r))}),J=S.create({modal:{position:"fixed",top:0,right:0,bottom:0,left:0},modalTransparent:{backgroundColor:"transparent"},modalOpaque:{backgroundColor:"white"},container:{top:0,flex:1}});const Fn=Yn;var we=()=>H("div",{role:"none",tabIndex:0,style:jn.focusBracket});function tt(e){if(!C)return!1;try{e.focus()}catch{}return document.activeElement===e}function nt(e){for(var t=0;t<e.childNodes.length;t++){var n=e.childNodes[t];if(tt(n)||nt(n))return!0}return!1}function at(e){for(var t=e.childNodes.length-1;t>=0;t--){var n=e.childNodes[t];if(tt(n)||at(n))return!0}return!1}var zn=e=>{var t=e.active,n=e.children,r=i.useRef(),a=i.useRef({trapFocusInProgress:!1,lastFocusedElement:null});return i.useEffect(()=>{if(C){var o=()=>{if(!(r.current==null||a.current.trapFocusInProgress||!t)){try{if(a.current.trapFocusInProgress=!0,document.activeElement instanceof Node&&!r.current.contains(document.activeElement)){var s=nt(r.current);a.current.lastFocusedElement===document.activeElement&&(s=at(r.current)),!s&&r.current!=null&&document.activeElement&&F.focus(r.current)}}finally{a.current.trapFocusInProgress=!1}a.current.lastFocusedElement=document.activeElement}};return o(),document.addEventListener("focus",o,!0),()=>document.removeEventListener("focus",o,!0)}},[t]),i.useEffect(function(){if(C){var o=document.activeElement;return function(){o&&document.contains(o)&&F.focus(o)}}},[]),i.createElement(i.Fragment,null,i.createElement(we,null),i.createElement(m,{ref:r},n),i.createElement(we,null))};const Un=zn;var jn=S.create({focusBracket:{outlineStyle:"none"}}),Wn=["animationType","children","onDismiss","onRequestClose","onShow","transparent","visible"],Xn=0,w=[],x={};function rt(){if(w.length!==0){var e=w[w.length-1];w.forEach(t=>{t in x&&x[t](t===e)})}}function he(e){e in x&&(x[e](!1),delete x[e]);var t=w.indexOf(e);t!==-1&&(w.splice(t,1),rt())}function Kn(e,t){he(e),w.push(e),x[e]=t,rt()}var Zn=i.forwardRef((e,t)=>{var n=e.animationType,r=e.children,a=e.onDismiss,o=e.onRequestClose,s=e.onShow,c=e.transparent,u=e.visible,d=u===void 0?!0:u,E=p(e,Wn),h=i.useMemo(()=>Xn++,[]),R=i.useState(!1),v=R[0],P=R[1],f=i.useCallback(()=>{he(h),a&&a()},[h,a]),O=i.useCallback(()=>{Kn(h,P),s&&s()},[h,s]);return i.useEffect(()=>()=>he(h),[h]),i.createElement(wn,null,i.createElement(Vn,{animationType:n,onDismiss:f,onShow:O,visible:d},i.createElement(Un,{active:v},i.createElement(Fn,b({},E,{active:v,onRequestClose:o,ref:t,transparent:c}),r))))});const qn=Zn;function Jn(e){var t=e.color,n=e.label,r=e.testID,a=e.value,o={color:t};return H("option",{children:n,style:o,testID:r,value:a})}var Qn=["children","enabled","onValueChange","selectedValue","style","testID","itemStyle","mode","prompt"],ot=i.forwardRef((e,t)=>{var n=e.children,r=e.enabled,a=e.onValueChange,o=e.selectedValue,s=e.style,c=e.testID;e.itemStyle,e.mode,e.prompt;var u=p(e,Qn),d=i.useRef(null);function E(P){var f=P.target,O=f.selectedIndex,N=f.value;a&&a(N,O)}var h=y({children:n,disabled:r===!1?!0:void 0,onChange:E,style:[ea.initial,s],testID:c,value:o},u),R=mt(h),v=ve(d,R,t);return h.ref=v,H("select",h)});ot.Item=Jn;var ea=S.create({initial:{fontFamily:"System",fontSize:"inherit",margin:0}});const ta=ot;var na=["color","indeterminate","progress","trackColor","style"],it=i.forwardRef((e,t)=>{var n=e.color,r=n===void 0?"#1976D2":n,a=e.indeterminate,o=a===void 0?!1:a,s=e.progress,c=s===void 0?0:s,u=e.trackColor,d=u===void 0?"transparent":u,E=e.style,h=p(e,na),R=c*100,v=o?"25%":R+"%";return i.createElement(m,b({},h,{"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":o?null:R,ref:t,role:"progressbar",style:[de.track,E,{backgroundColor:d}]}),i.createElement(m,{style:[{backgroundColor:r,width:v},de.progress,o&&de.animation]}))});it.displayName="ProgressBar";var de=S.create({track:{forcedColorAdjust:"none",height:5,overflow:"hidden",userSelect:"none",zIndex:0},progress:{forcedColorAdjust:"none",height:"100%",zIndex:-1},animation:{animationDuration:"1s",animationKeyframes:[{"0%":{transform:"translateX(-100%)"},"100%":{transform:"translateX(400%)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"}});const aa=it;var ra=["style"],Q=function(){return C&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env"}(),st=i.forwardRef((e,t)=>{var n=e.style,r=p(e,ra);return i.createElement(m,b({},r,{ref:t,style:[oa.root,n]}))});st.displayName="SafeAreaView";var oa=S.create({root:{paddingTop:Q+"(safe-area-inset-top)",paddingRight:Q+"(safe-area-inset-right)",paddingBottom:Q+"(safe-area-inset-bottom)",paddingLeft:Q+"(safe-area-inset-left)"}});const ia=st;var z=()=>{};function $(){return null}$.setBackgroundColor=z;$.setBarStyle=z;$.setHidden=z;$.setNetworkActivityIndicatorVisible=z;$.setTranslucent=z;var lt=function(t,n){var r=this;if(r.instancePool.length){var a=r.instancePool.pop();return r.call(a,t,n),a}else return new r(t,n)},sa=function(t){var n=this;t.destructor(),n.instancePool.length<n.poolSize&&n.instancePool.push(t)},la=10,ca=lt,ua=function(t,n){var r=t;return r.instancePool=[],r.getPooled=n||ca,r.poolSize||(r.poolSize=la),r.release=sa,r},da={addPoolingTo:ua,twoArgumentPooler:lt};const ie=da;var Ea=ie.twoArgumentPooler;function G(e,t){this.width=e,this.height=t}G.prototype.destructor=function(){this.width=null,this.height=null};G.getPooledFromElement=function(e){return G.getPooled(e.offsetWidth,e.offsetHeight)};ie.addPoolingTo(G,Ea);var ha=ie.twoArgumentPooler;function ne(e,t){this.left=e,this.top=t}ne.prototype.destructor=function(){this.left=null,this.top=null};ie.addPoolingTo(ne,ha);var ke=e=>{var t=e.touches,n=e.changedTouches,r=t&&t.length>0,a=n&&n.length>0;return!r&&a?n[0]:r?t[0]:e},l={NOT_RESPONDER:"NOT_RESPONDER",RESPONDER_INACTIVE_PRESS_IN:"RESPONDER_INACTIVE_PRESS_IN",RESPONDER_INACTIVE_PRESS_OUT:"RESPONDER_INACTIVE_PRESS_OUT",RESPONDER_ACTIVE_PRESS_IN:"RESPONDER_ACTIVE_PRESS_IN",RESPONDER_ACTIVE_PRESS_OUT:"RESPONDER_ACTIVE_PRESS_OUT",RESPONDER_ACTIVE_LONG_PRESS_IN:"RESPONDER_ACTIVE_LONG_PRESS_IN",RESPONDER_ACTIVE_LONG_PRESS_OUT:"RESPONDER_ACTIVE_LONG_PRESS_OUT",ERROR:"ERROR"},Se={NOT_RESPONDER:!1,RESPONDER_INACTIVE_PRESS_IN:!1,RESPONDER_INACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_PRESS_IN:!1,RESPONDER_ACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_LONG_PRESS_IN:!1,RESPONDER_ACTIVE_LONG_PRESS_OUT:!1,ERROR:!1},Ve=y(y({},Se),{},{RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0}),xe=y(y({},Se),{},{RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),Ge=y(y({},Se),{},{RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),g={DELAY:"DELAY",RESPONDER_GRANT:"RESPONDER_GRANT",RESPONDER_RELEASE:"RESPONDER_RELEASE",RESPONDER_TERMINATED:"RESPONDER_TERMINATED",ENTER_PRESS_RECT:"ENTER_PRESS_RECT",LEAVE_PRESS_RECT:"LEAVE_PRESS_RECT",LONG_PRESS_DETECTED:"LONG_PRESS_DETECTED"},He={NOT_RESPONDER:{DELAY:l.ERROR,RESPONDER_GRANT:l.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:l.ERROR,RESPONDER_TERMINATED:l.ERROR,ENTER_PRESS_RECT:l.ERROR,LEAVE_PRESS_RECT:l.ERROR,LONG_PRESS_DETECTED:l.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:l.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:l.ERROR,RESPONDER_RELEASE:l.NOT_RESPONDER,RESPONDER_TERMINATED:l.NOT_RESPONDER,ENTER_PRESS_RECT:l.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:l.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:l.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:l.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:l.ERROR,RESPONDER_RELEASE:l.NOT_RESPONDER,RESPONDER_TERMINATED:l.NOT_RESPONDER,ENTER_PRESS_RECT:l.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:l.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:l.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:l.ERROR,RESPONDER_GRANT:l.ERROR,RESPONDER_RELEASE:l.NOT_RESPONDER,RESPONDER_TERMINATED:l.NOT_RESPONDER,ENTER_PRESS_RECT:l.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:l.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:l.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:l.ERROR,RESPONDER_GRANT:l.ERROR,RESPONDER_RELEASE:l.NOT_RESPONDER,RESPONDER_TERMINATED:l.NOT_RESPONDER,ENTER_PRESS_RECT:l.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:l.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:l.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:l.ERROR,RESPONDER_GRANT:l.ERROR,RESPONDER_RELEASE:l.NOT_RESPONDER,RESPONDER_TERMINATED:l.NOT_RESPONDER,ENTER_PRESS_RECT:l.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:l.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:l.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:l.ERROR,RESPONDER_GRANT:l.ERROR,RESPONDER_RELEASE:l.NOT_RESPONDER,RESPONDER_TERMINATED:l.NOT_RESPONDER,ENTER_PRESS_RECT:l.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:l.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:l.ERROR},error:{DELAY:l.NOT_RESPONDER,RESPONDER_GRANT:l.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:l.NOT_RESPONDER,RESPONDER_TERMINATED:l.NOT_RESPONDER,ENTER_PRESS_RECT:l.NOT_RESPONDER,LEAVE_PRESS_RECT:l.NOT_RESPONDER,LONG_PRESS_DETECTED:l.NOT_RESPONDER}},Re=130,ee=20,Ra=500,Be=Ra-Re,va=10,U={componentDidMount:function(){var t=this.getTouchableNode&&this.getTouchableNode();t&&t.addEventListener&&(this._touchableBlurListener=n=>{this._isTouchableKeyboardActive&&(this.state.touchable.touchState&&this.state.touchable.touchState!==l.NOT_RESPONDER&&this.touchableHandleResponderTerminate({nativeEvent:n}),this._isTouchableKeyboardActive=!1)},t.addEventListener("blur",this._touchableBlurListener))},componentWillUnmount:function(){var t=this.getTouchableNode&&this.getTouchableNode();t&&t.addEventListener&&t.removeEventListener("blur",this._touchableBlurListener),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressInLocation=null,this.state.touchable.responderID=null},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(t){var n=t.currentTarget;t.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=l.NOT_RESPONDER,this.state.touchable.responderID=n,this._receiveSignal(g.RESPONDER_GRANT,t);var r=this.touchableGetHighlightDelayMS!==void 0?Math.max(this.touchableGetHighlightDelayMS(),0):Re;r=isNaN(r)?Re:r,r!==0?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,t),r):this._handleDelay(t);var a=this.touchableGetLongPressDelayMS!==void 0?Math.max(this.touchableGetLongPressDelayMS(),10):Be;a=isNaN(a)?Be:a,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,t),a+r)},touchableHandleResponderRelease:function(t){this.pressInLocation=null,this._receiveSignal(g.RESPONDER_RELEASE,t)},touchableHandleResponderTerminate:function(t){this.pressInLocation=null,this._receiveSignal(g.RESPONDER_TERMINATED,t)},touchableHandleResponderMove:function(t){if(this.state.touchable.positionOnActivate){var n=this.state.touchable.positionOnActivate,r=this.state.touchable.dimensionsOnActivate,a=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:ee,right:ee,top:ee,bottom:ee},o=a.left,s=a.top,c=a.right,u=a.bottom,d=this.touchableGetHitSlop?this.touchableGetHitSlop():null;d&&(o+=d.left||0,s+=d.top||0,c+=d.right||0,u+=d.bottom||0);var E=ke(t.nativeEvent),h=E&&E.pageX,R=E&&E.pageY;if(this.pressInLocation){var v=this._getDistanceBetweenPoints(h,R,this.pressInLocation.pageX,this.pressInLocation.pageY);v>va&&this._cancelLongPressDelayTimeout()}var P=h>n.left-o&&R>n.top-s&&h<n.left+r.width+c&&R<n.top+r.height+u;if(P){var f=this.state.touchable.touchState;this._receiveSignal(g.ENTER_PRESS_RECT,t);var O=this.state.touchable.touchState;O===l.RESPONDER_INACTIVE_PRESS_IN&&f!==l.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(g.LEAVE_PRESS_RECT,t)}},touchableHandleFocus:function(t){this.props.onFocus&&this.props.onFocus(t)},touchableHandleBlur:function(t){this.props.onBlur&&this.props.onBlur(t)},_remeasureMetricsOnActivation:function(){var t=this.state.touchable.responderID;t!=null&&F.measure(t,this._handleQueryLayout)},_handleQueryLayout:function(t,n,r,a,o,s){!t&&!n&&!r&&!a&&!o&&!s||(this.state.touchable.positionOnActivate&&ne.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&G.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=ne.getPooled(o,s),this.state.touchable.dimensionsOnActivate=G.getPooled(r,a))},_handleDelay:function(t){this.touchableDelayTimeout=null,this._receiveSignal(g.DELAY,t)},_handleLongDelay:function(t){this.longPressDelayTimeout=null;var n=this.state.touchable.touchState;n!==l.RESPONDER_ACTIVE_PRESS_IN&&n!==l.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error("Attempted to transition from state `"+n+"` to `"+l.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(g.LONG_PRESS_DETECTED,t)},_receiveSignal:function(t,n){var r=this.state.touchable.responderID,a=this.state.touchable.touchState,o=He[a]&&He[a][t];if(!(!r&&t===g.RESPONDER_RELEASE)){if(!o)throw new Error("Unrecognized signal `"+t+"` or state `"+a+"` for Touchable responder `"+r+"`");if(o===l.ERROR)throw new Error("Touchable cannot transition from `"+a+"` to `"+t+"` for responder `"+r+"`");a!==o&&(this._performSideEffectsForTransition(a,o,t,n),this.state.touchable.touchState=o)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(t){return t===l.RESPONDER_ACTIVE_PRESS_IN||t===l.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(t){var n=ke(t.nativeEvent),r=n&&n.pageX,a=n&&n.pageY,o=n&&n.locationX,s=n&&n.locationY;this.pressInLocation={pageX:r,pageY:a,locationX:o,locationY:s}},_getDistanceBetweenPoints:function(t,n,r,a){var o=t-r,s=n-a;return Math.sqrt(o*o+s*s)},_performSideEffectsForTransition:function(t,n,r,a){var o=this._isHighlight(t),s=this._isHighlight(n),c=r===g.RESPONDER_TERMINATED||r===g.RESPONDER_RELEASE;c&&this._cancelLongPressDelayTimeout();var u=t===l.NOT_RESPONDER&&n===l.RESPONDER_INACTIVE_PRESS_IN,d=!Ve[t]&&Ve[n];if((u||d)&&this._remeasureMetricsOnActivation(),xe[t]&&r===g.LONG_PRESS_DETECTED&&this.touchableHandleLongPress&&this.touchableHandleLongPress(a),s&&!o?this._startHighlight(a):!s&&o&&this._endHighlight(a),xe[t]&&r===g.RESPONDER_RELEASE){var E=!!this.props.onLongPress,h=Ge[t]&&(!E||!this.touchableLongPressCancelsPress()),R=!Ge[t]||h;R&&this.touchableHandlePress&&(!s&&!o&&(this._startHighlight(a),this._endHighlight(a)),this.touchableHandlePress(a))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_playTouchSound:function(){F.playTouchSound()},_startHighlight:function(t){this._savePressInLocation(t),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(t)},_endHighlight:function(t){this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout(()=>{this.touchableHandleActivePressOut(t)},this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(t))},touchableHandleKeyEvent:function(t){var n=t.type,r=t.key;(r==="Enter"||r===" ")&&(n==="keydown"?this._isTouchableKeyboardActive||(!this.state.touchable.touchState||this.state.touchable.touchState===l.NOT_RESPONDER)&&(this.touchableHandleResponderGrant(t),this._isTouchableKeyboardActive=!0):n==="keyup"&&this._isTouchableKeyboardActive&&this.state.touchable.touchState&&this.state.touchable.touchState!==l.NOT_RESPONDER&&(this.touchableHandleResponderRelease(t),this._isTouchableKeyboardActive=!1),t.stopPropagation(),r==="Enter"&&ft.propsToAriaRole(this.props)==="link"||t.preventDefault())},withoutDefaultFocusAndBlur:{}};U.touchableHandleFocus;U.touchableHandleBlur;var ma=p(U,["touchableHandleFocus","touchableHandleBlur"]);U.withoutDefaultFocusAndBlur=ma;var ct={Mixin:U,TOUCH_TARGET_DEBUG:!1,renderDebugView:e=>{var t=e.color,n=e.hitSlop;if(!ct.TOUCH_TARGET_DEBUG)return null;var r={};n=n||{top:0,bottom:0,left:0,right:0};for(var a in n)r[a]=-n[a];var o=St(t);if(typeof o!="number")return null;var s="#"+("00000000"+o.toString(16)).substr(-8);return A.createElement(m,{pointerEvents:"none",style:y({position:"absolute",borderColor:s.slice(0,-2)+"55",borderWidth:1,borderStyle:"dashed",backgroundColor:s.slice(0,-2)+"0F"},r)})}};const Sa=ct;class fa extends A.Component{render(){return A.createElement(m,{style:[_a,this.props.style]},this.props.children)}}var _a={};const ut=fa;var Pa={accessibilityDisabled:!0,accessibilityLabel:!0,accessibilityLiveRegion:!0,accessibilityRole:!0,accessibilityState:!0,accessibilityValue:!0,children:!0,disabled:!0,focusable:!0,nativeID:!0,onBlur:!0,onFocus:!0,onLayout:!0,testID:!0},Ta=e=>_t(e,Pa);function ga(e,t){var n=e.delayPressIn,r=e.delayPressOut,a=e.delayLongPress,o=e.disabled,s=e.focusable,c=e.onLongPress,u=e.onPress,d=e.onPressIn,E=e.onPressOut,h=e.rejectResponderTermination,R=i.useRef(null),v=i.useMemo(()=>({cancelable:!h,disabled:o,delayLongPress:a,delayPressStart:n,delayPressEnd:r,onLongPress:c,onPress:u,onPressStart:d,onPressEnd:E}),[o,n,r,a,c,u,d,E,h]),P=Ye(R,v),f=i.Children.only(e.children),O=[f.props.children],N=Ta(e);N.accessibilityDisabled=o,N.focusable=!o&&s!==!1,N.ref=ve(t,R,f.ref);var se=Object.assign(N,P);return i.cloneElement(f,se,...O)}var dt=i.memo(i.forwardRef(ga));dt.displayName="TouchableWithoutFeedback";const pa=dt;function Et(e){return A.createElement(ut,e)}Et.ignoreWarnings=()=>{};var ya={ignoreLogs(){},ignoreAllLogs(){},uninstall(){},install(){}};const ba=ya;function Oa(){var e=i.useState(Ee.getColorScheme()),t=e[0],n=e[1];return i.useEffect(()=>{function r(s){n(s.colorScheme)}var a=Ee.addChangeListener(r),o=a.remove;return o}),t}const Na=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityInfo:Ot,ActivityIndicator:gn,Alert:Nt,Animated:wt,AppRegistry:te,AppState:Ct,Appearance:Ee,BackHandler:an,Button:bn,CheckBox:Nn,Clipboard:rn,DeviceEventEmitter:jt,Dimensions:It,Easing:kt,FlatList:Vt,I18nManager:sn,Image:$e,ImageBackground:An,InteractionManager:me,Keyboard:cn,KeyboardAvoidingView:Mn,LayoutAnimation:At,Linking:Dt,LogBox:ba,Modal:qn,NativeEventEmitter:Wt,NativeModules:yt,PanResponder:vn,Picker:ta,PixelRatio:$t,Platform:bt,Pressable:Yt,ProgressBar:aa,RefreshControl:xt,SafeAreaView:ia,ScrollView:Gt,SectionList:Ht,Share:Sn,StatusBar:$,StyleSheet:S,Switch:Ft,Text:Fe,TextInput:zt,Touchable:Sa,TouchableHighlight:Ut,TouchableNativeFeedback:ut,TouchableOpacity:qe,TouchableWithoutFeedback:pa,UIManager:F,Vibration:_n,View:m,VirtualizedList:Bt,YellowBox:Et,findNodeHandle:gt,processColor:Pt,render:je,unmountComponentAtNode:oe,unstable_createElement:H,useColorScheme:Oa,useLocaleContext:Tt,useWindowDimensions:Lt},Symbol.toStringTag,{value:"Module"})),Xa=vt(Na);export{an as B,sn as I,Xa as r};
//# sourceMappingURL=index-fcfc745d.js.map
