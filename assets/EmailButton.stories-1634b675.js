import{j as t}from"./useThemable-f30bc085.js";import{B as p}from"./Button-42321f1d.js";import{R as u}from"./Row-6615ad7f.js";import{u as d}from"./useOpenMailUrl-1f566757.js";import{a as c}from"./accessibleText-50b2b39a.js";import{P as f}from"./index-9f48cdb1.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./config-55b2a55c.js";import"./Icon-665a7dd4.js";import"./index-0a8a0804.js";import"./index-9d475cdf.js";import"./Animated-c2918ca3.js";import"./extends-98964cd2.js";import"./index-c2b660c2.js";import"./NativeEventEmitter-e48f6778.js";import"./index-4aecf1db.js";import"./index-ccfb1f0c.js";import"./types-e7c584cc.js";import"./useDeviceContext-18951bae.js";import"./index-fca5dbaa.js";import"./index-b6575df8.js";import"./useTheme-6ad20d8d.js";import"./index-a38d3ef2.js";import"./index-56eca6dc.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useSentry-02887f2a.js";import"./logging-a5858441.js";import"./development-c52112ae.js";import"./index-ce5d66ca.js";const b=e=>e.replaceAll("."," punt "),a=({email:e,subject:n,...m})=>{const s=d();return t(u,{children:t(p,{...m,accessibilityLabel:c("Stuur een e-mail naar",f.OS==="ios"?b(e):e),ellipsizeMode:"tail",iconName:"email",label:e,onPress:()=>{s(e,n)}})})};try{a.displayName="EmailButton",a.__docgenInfo={description:"",displayName:"EmailButton",props:{email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"string"}},subject:{defaultValue:null,description:"",name:"subject",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const K={component:a,argTypes:{onPress:{action:"onPress"}}},r={args:{email:"ontwikkelingzeeburgereiland@amsterdam.nl",subject:"Vraag over zeeburg."}};var i,o,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    email: 'ontwikkelingzeeburgereiland@amsterdam.nl',
    subject: 'Vraag over zeeburg.'
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,K as default};
