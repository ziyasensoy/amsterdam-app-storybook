import{j as l}from"./index-1401012c.js";import{B as m}from"./Button-142e3d3e.js";import{R as p}from"./Row-c9008bad.js";import{u as d}from"./useOpenMailUrl-599b568f.js";import{a as c}from"./accessibleText-50b2b39a.js";import{P as g}from"./invariant-f1a82cf7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-18244955.js";import"./usePiwikTrackCustomEventFromProps-9f958d64.js";import"./slugs-4cdcac98.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./development-fba0c344.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./useSentry-eca49495.js";import"./logging-a19d7dfe.js";import"./callBound-55a1829f.js";import"./index-019f64a5.js";import"./extends-98964cd2.js";import"./index-e1b95cde.js";import"./config-55b2a55c.js";import"./Icon-8dd435b7.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./types-e7c584cc.js";import"./useDeviceContext-20251673.js";import"./index-5aae214f.js";import"./useTheme-d3d4836a.js";import"./useThemable-f2f23b4f.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-37b6bf7b.js";const v=e=>e.replaceAll("."," punt "),r=({email:e,subject:n,...u})=>{const s=d();return l(p,{children:l(m,{...u,accessibilityLabel:c("Stuur een e-mail naar",g.OS==="ios"?v(e):e),ellipsizeMode:"tail",iconName:"email",label:e,onPress:()=>{s(e,n)}})})};try{r.displayName="EmailButton",r.__docgenInfo={description:"",displayName:"EmailButton",props:{email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"string"}},subject:{defaultValue:null,description:"",name:"subject",required:!1,type:{name:"string"}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"secondary"'}]}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}}}}}catch{}const re={component:r,argTypes:{onPress:{action:"onPress"}}},a={args:{email:"ontwikkelingzeeburgereiland@amsterdam.nl",subject:"Vraag over zeeburg."}};var t,i,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    email: 'ontwikkelingzeeburgereiland@amsterdam.nl',
    subject: 'Vraag over zeeburg.'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const le=["Default"];export{a as Default,le as __namedExportsOrder,re as default};
