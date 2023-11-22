import{d as y,j as e,a as o,S as w}from"./useThemable-e7da91f2.js";import{P as T}from"./Pressable-1037f128.js";import{B as b}from"./Box-7fddeafd.js";import{C as x}from"./Column-2e4ad1b0.js";import{R as s}from"./Row-fb894198.js";import{I as c}from"./Icon-acc4c785.js";import{P as _}from"./Paragraph-bbac7c4d.js";import{T as N}from"./Title-3a715e8a.js";import{a as V}from"./accessibleText-50b2b39a.js";import{V as q}from"./index-a84da5e7.js";import"./index-4ab02870.js";import"./_commonjsHelpers-de833af9.js";import"./index-64488648.js";import"./extends-98964cd2.js";import"./index-7e8d53f4.js";import"./layoutStyles-768eb547.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-610f912e.js";import"./index-9d475cdf.js";import"./Animated-79809011.js";import"./invariant-4e558dfc.js";import"./index-ffecbde1.js";import"./index-abe419cd.js";import"./index-a5a81c39.js";import"./index-4ef9436f.js";import"./types-e7c584cc.js";import"./useDeviceContext-f2885708.js";import"./index-5e2383f8.js";import"./useTheme-e00f6261.js";const n=({isError:a=!1,iconName:d,onPress:h,text:l,title:i,titleIconName:u,testID:r="",accessibilityRole:g="button",...f})=>{const k=y(B);return e(T,{accessibilityLabel:V(i,typeof l=="string"?l:""),accessibilityLanguage:"nl-NL",accessibilityRole:g,grow:!0,onPress:h,testID:r,...f,children:e(b,{insetHorizontal:"md",insetVertical:"sm",children:o(s,{gutter:"md",children:[e(q,{style:k.height,children:e(c,{color:"link",name:d,size:"xl"})}),o(x,{align:"center",grow:!0,children:[o(s,{gutter:"sm",valign:"center",children:[e(N,{color:"link",level:"h5",testID:`${r}Title`,text:i}),!!u&&e(c,{color:"link",name:u})]}),typeof l=="string"?e(_,{color:a?"warning":void 0,testID:`${r}Text`,variant:"small",children:l}):l]})]})})})},B=({text:a})=>w.create({height:{justifyContent:"center",height:a.lineHeight.h5+a.lineHeight.small}});try{n.displayName="TopTaskButton",n.__docgenInfo={description:"",displayName:"TopTaskButton",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleIconName:{defaultValue:null,description:"",name:"titleIconName",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}}}}}catch{}const re={component:n,argTypes:{onPress:{action:"onPress"}}},t={args:{iconName:"email",text:"Reactie binnen 1 werkdag",title:"Contactformulier"}};var v,m,p;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconName: 'email',
    text: 'Reactie binnen 1 werkdag',
    title: 'Contactformulier'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const oe=["Default"];export{t as Default,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=TopTaskButton.stories-356ab53d.js.map
