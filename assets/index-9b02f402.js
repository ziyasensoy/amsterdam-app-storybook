import{c as u}from"./base-color-46461b55.js";function c(){return new Promise((e,t)=>{e(!0)})}var n=u&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null;function d(){return new Promise((e,t)=>{e(n?n.matches:!0)})}function v(e){n!=null&&(n.addEventListener!=null?n.addEventListener("change",e):n.addListener(e))}function f(e){n!=null&&(n.removeEventListener!=null?n.removeEventListener("change",e):n.removeListener(e))}var o={},s={isScreenReaderEnabled:c,isReduceMotionEnabled:d,fetch:c,addEventListener:function(t,i){if(t==="reduceMotionChanged"){if(!n)return;var r=a=>{i(a.matches)};v(r),o[i]=r}return{remove:()=>s.removeEventListener(t,i)}},setAccessibilityFocus:function(t){},announceForAccessibility:function(t){},removeEventListener:function(t,i){if(t==="reduceMotionChanged"){var r=o[i];if(!r||!n)return;f(r)}}};const l=s;export{l as A};
