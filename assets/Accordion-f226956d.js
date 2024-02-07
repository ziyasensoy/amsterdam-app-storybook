import{j as a,S as w,a as u,F as f}from"./base-color-46461b55.js";import{r as s}from"./index-76fb7be0.js";import{P as S}from"./Pressable-d082986b.js";import{B as v}from"./Box-366c85a8.js";import{C as A}from"./Column-6b56ff60.js";import{a as V}from"./useThemable-ec4d1a05.js";import{V as k}from"./index-ed640e0d.js";import{R as q}from"./Row-ce855e9e.js";import{S as N}from"./Size-f88a6055.js";import{I as T}from"./Icon-93cdf638.js";import{T as P}from"./Title-3cc03269.js";import{u as j}from"./useTheme-fb1b80de.js";import{P as E}from"./index-fda7d940.js";const c=({width:e,height:t})=>{const n=V(I({width:e,height:t}));return a(k,{style:n.gutter})},I=({width:e,height:t})=>({size:n})=>w.create({gutter:{width:e&&n.spacing[e],height:t&&n.spacing[t]}});try{c.displayName="Gutter",c.__docgenInfo={description:"",displayName:"Gutter",props:{height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}}}}}catch{}const $=({children:e})=>u(f,{children:[a(v,{insetHorizontal:"md",children:e}),a(c,{height:"md"})]}),m=({icon:e,title:t})=>a(v,{grow:!0,children:u(q,{align:"between",gutter:"md",valign:"start",children:[a(P,{color:"link",level:"h5",numberOfLines:3,text:t}),e]})}),p=({grow:e,initiallyExpanded:t,isExpandable:n=!0,onChangeExpanded:o,children:h,title:l})=>{const[r,g]=s.useState(!!t),x=r?"chevron-up":"chevron-down",{text:y}=j(),d=s.useCallback(i=>{g(i),o==null||o(i)},[o]),b=s.useMemo(()=>{const i=r?"Uitgevouwen":"Samengevouwen",_=E.OS==="android"?`${l}`:`${l}, dubbeltik om de inhoud te ${r?"verbergen":"bekijken"}`;return`${i}, ${_}.`},[r,l]);return n?u(A,{grow:e,children:[a(S,{accessibilityActions:[{name:"activate",label:r?"het verbergen van de inhoud":"het bekijken van de inhoud"}],accessibilityLabel:b,accessibilityLanguage:"nl-NL",onAccessibilityAction:i=>{i.nativeEvent.actionName==="activate"&&d(!r)},onPress:()=>d(!r),children:a(m,{icon:a(N,{height:y.lineHeight.h5,children:a(T,{color:"link",name:x,size:"lg"})}),title:l})}),!!r&&a($,{children:a(f,{children:h})})]}):a(m,{title:l})};try{p.displayName="Accordion",p.__docgenInfo={description:"",displayName:"Accordion",props:{grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},initiallyExpanded:{defaultValue:null,description:"",name:"initiallyExpanded",required:!1,type:{name:"boolean"}},isExpandable:{defaultValue:{value:"true"},description:"",name:"isExpandable",required:!1,type:{name:"boolean"}},onChangeExpanded:{defaultValue:null,description:"",name:"onChangeExpanded",required:!1,type:{name:"((state: boolean) => void)"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{p as A};
