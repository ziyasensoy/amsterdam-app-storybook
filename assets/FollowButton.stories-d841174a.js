import{j as t}from"./index-1401012c.js";import{r as n}from"./index-76fb7be0.js";import{B as u}from"./Button-1a16ff5f.js";import"./_commonjsHelpers-de833af9.js";import"./config-55b2a55c.js";import"./Row-99740ecb.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useThemable-27d8c265.js";import"./index-d3ea75b5.js";import"./base-color-66d0fb4c.js";import"./index-8aec880e.js";import"./Icon-3c24a75f.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-3c47de32.js";import"./invariant-f1a82cf7.js";import"./extends-98964cd2.js";import"./index-240c6d7a.js";import"./NativeEventEmitter-7be6cb46.js";import"./index-8fe1e389.js";import"./index-83a31e41.js";import"./types-e7c584cc.js";import"./useDeviceContext-904ab82a.js";import"./index-3d7f4c33.js";import"./index-d983c834.js";import"./index-5aae214f.js";import"./useTheme-7821b5d5.js";import"./index-393588f7.js";import"./index-56eca6dc.js";const l=({followed:o,onPress:e,...r})=>{const p=n.useCallback(()=>e(!1),[e]),c=n.useCallback(()=>e(!0),[e]);return o?t(u,{iconName:"checkmark",label:"Volgend",onPress:c,variant:"primary",...r}):t(u,{iconName:"enlarge",label:"Volgen",onPress:p,variant:"secondary",...r})};try{l.displayName="FollowButton",l.__docgenInfo={description:"",displayName:"FollowButton",props:{followed:{defaultValue:null,description:"",name:"followed",required:!0,type:{name:"boolean"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"(followed: boolean) => void"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"secondary"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}}}}}catch{}const G={component:l,argTypes:{onPress:{action:"onPress"}}},a={args:{followed:!1}};var i,s,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    followed: false
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,G as default};
