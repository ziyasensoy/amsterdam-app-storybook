import{c as o,R as p}from"./useThemable-05c0eaf9.js";import{r as m}from"./index-e67e0a49.js";import{A as a,L as A}from"./index-b674d122.js";import{A as E}from"./index-9f1e8595.js";const M=({onChange:e,onForeground:s,onBackground:i,onInactive:t}={})=>{const[r,c]=m.useState(a.currentState);return m.useEffect(()=>{const R=f=>{r!=="active"&&f==="active"?s==null||s():r!=="inactive"&&f==="inactive"?t==null||t():r!=="background"&&f==="background"&&(i==null||i()),e==null||e(f),c(f)},S=a.addEventListener("change",R);return()=>S.remove()},[e,s,i,t,r]),r};let u;const N=({callback:e,callbackAfterAppStateChange:s=!0}={},i=[])=>(M({onForeground:()=>{E.isReduceMotionEnabled().then(t=>{u=t,s&&(e==null||e(t))})}}),m.useEffect(()=>{E.isReduceMotionEnabled().then(t=>{u=t,e==null||e(t)})},i),u),d={},y=o({name:p.alert,initialState:d,reducers:{resetAlert:()=>d,setAlert:(e,{payload:s})=>(u||A.configureNext(A.Presets.easeInEaseOut),s)}}),{resetAlert:O,setAlert:P}=y.actions,_=e=>e[p.alert];export{P as a,y as b,O as r,_ as s,N as u};
//# sourceMappingURL=alert-6bdb3e53.js.map
