import{r as u}from"./index-e67e0a49.js";import{j as x}from"./useThemable-3e929d60.js";import{P as a}from"./index-fff9359c.js";import{E as R}from"./EventEmitter-2b0932c2.js";import{i as h}from"./invariant-ea487af3.js";import{N as l}from"./index-3a994bc6.js";import{a as A}from"./_commonjsHelpers-de833af9.js";import{u as B}from"./index-fbc2157a.js";const s=new R;class m{constructor(e){a.OS==="ios"&&(h(e!=null,"`new NativeEventEmitter()` requires a non-null argument."),this._nativeModule=e)}addListener(e,r,n){var i;(i=this._nativeModule)==null||i.addListener(e);var o=s.addListener(e,r,n);return{remove:()=>{if(o!=null){var y;(y=this._nativeModule)==null||y.removeListeners(1),o.remove(),o=null}}}}removeListener(e,r){var n;(n=this._nativeModule)==null||n.removeListeners(1),s.removeListener(e,r)}emit(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];s.emit(e,...n)}removeAllListeners(e){var r;h(e!=null,"`NativeEventEmitter.removeAllListener()` requires a non-null argument."),(r=this._nativeModule)==null||r.removeListeners(this.listenerCount(e)),s.removeAllListeners(e)}listenerCount(e){return s.listenerCount(e)}}new m(l.RNDeviceInfo);const d=new m(l.RNDeviceInfo);let v=!1,S=-1,c={};const f=t=>{const{level:e,charging:r,chargingtime:n,dischargingtime:i}=t;return{batteryLevel:e,lowPowerMode:!1,batteryState:e===1?"full":r?"charging":"unplugged",chargingtime:n,dischargingtime:i}},D=()=>window.performance&&window.performance.memory?window.performance.memory.jsHeapSizeLimit:-1,P=()=>document.referrer,L=()=>!!navigator.onLine,M=()=>window.navigator.userAgent,C=()=>!!navigator.geolocation,I=()=>navigator.deviceMemory?navigator.deviceMemory*1e9:-1,E=()=>window.performance&&window.performance.memory?window.performance.memory.usedJSHeapSize:-1,T=()=>{typeof navigator>"u"||!navigator.getBattery||navigator.getBattery().then(t=>{v=t.charging,t.addEventListener("chargingchange",()=>{const{charging:e}=t;v=e,c=f(t),d.emit("RNDeviceInfo_powerStateDidChange",c)}),t.addEventListener("levelchange",()=>{const{level:e}=t;S=e,c=f(t),d.emit("RNDeviceInfo_batteryLevelDidChange",e),e<.2&&d.emit("RNDeviceInfo_batteryLevelIsLow",e)})})},k=()=>{const t=window.navigator.userAgent,e=window.navigator.platform,r=["Macintosh","MacIntel","MacPPC","Mac68K"],n=["Win32","Win64","Windows","WinCE"],i=["iPhone","iPad","iPod"];let o=e;return r.indexOf(e)!==-1?o="Mac OS":i.indexOf(e)!==-1?o="iOS":n.indexOf(e)!==-1?o="Windows":/Android/.test(t)?o="Android":!o&&/Linux/.test(e)&&(o="Linux"),o};T();const j=async()=>P(),q=async()=>M(),F=async()=>navigator.getBattery?navigator.getBattery().then(t=>t.charging):!1,W=()=>v,U=async()=>navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?navigator.mediaDevices.enumerateDevices().then(t=>!!t.find(e=>e.kind==="videoinput")):!1,$=()=>(console.log("[react-native-device-info] isCameraPresentSync not supported - please use isCameraPresent"),!1),V=async()=>navigator.getBattery?navigator.getBattery().then(t=>t.level):-1,z=()=>S,H=async()=>C(),G=async()=>L(),J=async()=>k(),X=async()=>navigator.storage&&navigator.storage.estimate?navigator.storage.estimate().then(({quota:t})=>t):-1,Y=()=>(console.log("[react-native-device-info] getTotalDiskCapacitySync not supported - please use getTotalDiskCapacity"),-1),Q=async()=>navigator.storage&&navigator.storage.estimate?navigator.storage.estimate().then(({quota:t,usage:e})=>t-e):-1,Z=()=>(console.log("[react-native-device-info] getFreeDiskStorageSync not supported - please use getFreeDiskStorage"),-1),K=async()=>D(),ee=async()=>E(),te=async()=>I(),ne=async()=>navigator.getBattery?navigator.getBattery().then(t=>f(t)):{},re=()=>c,ie=Object.freeze(Object.defineProperty({__proto__:null,getBaseOs:J,getBatteryLevel:V,getBatteryLevelSync:z,getFreeDiskStorage:Q,getFreeDiskStorageSync:Z,getInstallReferrer:j,getInstallReferrerSync:P,getMaxMemory:K,getMaxMemorySync:D,getPowerState:ne,getPowerStateSync:re,getTotalDiskCapacity:X,getTotalDiskCapacitySync:Y,getTotalMemory:te,getTotalMemorySync:I,getUsedMemory:ee,getUsedMemorySync:E,getUserAgent:q,getUserAgentSync:M,isAirplaneMode:G,isAirplaneModeSync:L,isBatteryCharging:F,isBatteryChargingSync:W,isCameraPresent:U,isCameraPresentSync:$,isLocationEnabled:H,isLocationEnabledSync:C},Symbol.toStringTag,{value:"Module"})),oe=A(ie);let p=l.RNDeviceInfo;(a.OS==="web"||a.OS==="dom")&&(p=oe);if(!p&&(a.OS==="android"||a.OS==="ios"||a.OS==="web"||a.OS==="dom"))throw new Error("react-native-device-info: NativeModule.RNDeviceInfo is null. To fix this issue try these steps:\n  • For react-native <= 0.59: Run `react-native link react-native-device-info` in the project root.\n  • Rebuild and re-run the app.\n  • If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n  If none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-device-info/react-native-device-info");const N=p;let g={};function ae(t,e,r){let n={};return t.filter(i=>a.OS==i).forEach(i=>n[i]=e),a.select({...n,default:r})}function _({getter:t,supportedPlatforms:e,defaultValue:r,memoKey:n}){if(n&&g[n]!=null)return g[n];{const i=ae(e,t,()=>r)();return n&&(g[n]=i),i}}const pe=()=>_({defaultValue:"unknown",memoKey:"uniqueId",supportedPlatforms:["android","ios","windows"],getter:()=>N.uniqueId}),se=()=>_({defaultValue:!1,supportedPlatforms:["android","ios","windows"],memoKey:"tablet",getter:()=>N.isTablet});new m(l.RNDeviceInfo);const b={fontScale:1,height:640,isLandscape:!1,isPortrait:!0,isTablet:!1,isTallPhone:!0,scale:1,width:360},O=u.createContext(b),w=({children:t})=>{const[e,r]=u.useState(b),n=B();return u.useEffect(()=>{r({isLandscape:n.height<n.width,isPortrait:n.height>=n.width,isTablet:se(),isTallPhone:n.height/n.width>2,...n})},[n]),x(O.Provider,{value:e,children:t})};try{w.displayName="DeviceProvider",w.__docgenInfo={description:"",displayName:"DeviceProvider",props:{}}}catch{}const ye=()=>u.useContext(O);export{w as D,m as N,s as R,pe as g,ye as u};
//# sourceMappingURL=useDeviceContext-11966046.js.map
