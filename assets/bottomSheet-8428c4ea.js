import{c as s,R as t,u as n}from"./useThemable-f30bc085.js";import{r as i}from"./index-76fb7be0.js";import{u as c}from"./useDispatch-d5c6168f.js";const m=s({name:t.bottomSheet,initialState:{isOpen:!1},reducers:{closeBottomSheet:e=>({...e,isOpen:!1}),openBottomSheet:e=>({...e,isOpen:!0}),toggleBottomSheet:e=>({...e,isOpen:!e.isOpen})}}),{closeBottomSheet:p,openBottomSheet:r,toggleBottomSheet:a}=m.actions,O=()=>{const e=c();return{isOpen:n(o=>o[t.bottomSheet].isOpen),...i.useMemo(()=>({close:()=>e(p()),open:()=>e(r()),toggle:()=>e(a())}),[e])}};export{m as b,O as u};
