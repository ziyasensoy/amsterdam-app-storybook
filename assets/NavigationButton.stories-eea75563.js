import{j as e,a as b}from"./useThemable-3e929d60.js";import{P as y}from"./Pressable-5cefa5a0.js";import{B as _}from"./Box-6076363d.js";import{R as k}from"./Row-3c3de604.js";import{I as l}from"./Icon-8b738e47.js";import{T as w}from"./Title-26c9ffaf.js";import"./index-e67e0a49.js";import"./_commonjsHelpers-de833af9.js";import"./index-38d82cdc.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./index-e43da3a9.js";import"./layoutStyles-8ea7d70c.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-5635b59f.js";import"./index-9d475cdf.js";import"./Animated-7b69864b.js";import"./index-fff9359c.js";import"./invariant-ea487af3.js";import"./index-fbc2157a.js";import"./index-efd68e52.js";import"./EventEmitter-2b0932c2.js";import"./useDeviceContext-11966046.js";import"./index-3a994bc6.js";import"./index-09471745.js";import"./index-eaef2ea0.js";import"./types-e7c584cc.js";import"./useTheme-7795845d.js";const t=({direction:o="forward",iconSize:i="lg",label:d,onPress:v,testID:f,accessibilityRole:g="link"})=>e(y,{accessibilityRole:g,onPress:v,testID:f,children:e(_,{insetHorizontal:"md",insetVertical:"sm",children:b(k,{align:"between",gutter:"md",valign:"center",children:[o==="backward"&&e(l,{color:"link",name:"chevron-left",size:i}),e(w,{color:"link",level:"h5",text:d}),o==="forward"&&e(l,{color:"link",name:"chevron-right",size:i})]})})});try{t.displayName="NavigationButton",t.__docgenInfo={description:"",displayName:"NavigationButton",props:{accessibilityRole:{defaultValue:{value:"link"},description:"",name:"accessibilityRole",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"button"'}]}},direction:{defaultValue:{value:"forward"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"backward"'},{value:'"forward"'}]}},iconSize:{defaultValue:{value:"lg"},description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"ml"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const X={component:t,argTypes:{onPress:{action:"onPress"}}},r={args:{label:"Label"}},a={args:{direction:"backward",label:"Vorige"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,u,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    direction: 'backward',
    label: 'Vorige'
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const Y=["Default","Previous"];export{r as Default,a as Previous,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=NavigationButton.stories-eea75563.js.map
