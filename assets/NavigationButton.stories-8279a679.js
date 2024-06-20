import{j as e}from"./index-9d7eb5a2.js";import{P as y}from"./Pressable-88cf4eb3.js";import{B as x}from"./Box-eac773ca.js";import{R as _}from"./Row-1a77dc83.js";import{I as l}from"./Icon-9f428153.js";import{T as k}from"./Title-1a08eeae.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-33ec4b69.js";import"./usePiwikTrackCustomEventFromProps-237cd7b6.js";import"./version-3b86b29f.js";import"./index-d8f1eb60.js";import"./NativeEventEmitter-d842fddb.js";import"./index-7ad04130.js";import"./TextAncestorContext-3b992cff.js";import"./development-5b00fac8.js";import"./redux-toolkit.esm-cb9067f1.js";import"./useSentry-30fb6861.js";import"./index-467b4a8a.js";import"./callBound-c4e9bae7.js";import"./___vite-browser-external_commonjs-proxy-698e55bb.js";import"./index-a92e0614.js";import"./extends-34e645d9.js";import"./index-b1a24850.js";import"./useThemable-e2fb66d4.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./layoutStyles-605143e0.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-b21a90e4.js";import"./index-9d475cdf.js";import"./Animated-27d1e0d7.js";import"./index-57ba1d72.js";import"./index-169dd17a.js";import"./types-65ac26c5.js";import"./useDeviceContext-b75c8e9f.js";import"./index-5b2ab920.js";import"./useTheme-c7eb6588.js";const i=({direction:t="forward",iconSize:n="lg",label:g,onPress:v,testID:o,accessibilityRole:f="link",accessibilityLanguage:b="nl-NL"})=>e.jsx(y,{accessibilityLanguage:b,accessibilityRole:f,onPress:v,testID:o,children:e.jsx(x,{insetHorizontal:"md",insetVertical:"sm",children:e.jsxs(_,{align:"between",gutter:"md",valign:"center",children:[t==="backward"&&e.jsx(l,{color:"link",name:"chevron-left",size:n,testID:`${o}Icon`}),e.jsx(k,{color:"link",level:"h5",text:g}),t==="forward"&&e.jsx(l,{color:"link",name:"chevron-right",size:n,testID:`${o}Icon`})]})})});try{i.displayName="NavigationButton",i.__docgenInfo={description:"",displayName:"NavigationButton",props:{accessibilityLanguage:{defaultValue:{value:"nl-NL"},description:"",name:"accessibilityLanguage",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:{value:"link"},description:"",name:"accessibilityRole",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'}]}},direction:{defaultValue:{value:"forward"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"backward"'},{value:'"forward"'}]}},iconSize:{defaultValue:{value:"lg"},description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"ml"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const le={component:i,argTypes:{onPress:{action:"onPress"}}},r={args:{label:"Label"}},a={args:{direction:"backward",label:"Vorige"}};var s,m,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    direction: 'backward',
    label: 'Vorige'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const se=["Default","Previous"];export{r as Default,a as Previous,se as __namedExportsOrder,le as default};
