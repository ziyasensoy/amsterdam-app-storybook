import{j as e,a as f}from"./index-1401012c.js";import{P as h}from"./Pressable-3373ea01.js";import{c as g}from"./config-55b2a55c.js";import{R as k}from"./Row-b2f4e37d.js";import{S as b}from"./Size-71a5dbac.js";import{I as y}from"./Icon-16a5e8e0.js";import{P as x}from"./Phrase-ec317b87.js";import{D as a}from"./types-e7c584cc.js";import{u as d}from"./useTheme-8e94b012.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-2fe3af06.js";import"./usePiwikTrackCustomEventFromProps-e922e993.js";import"./getCurrentModuleSlugFromNavigationRootState-894d5e8f.js";import"./slugs-f10b10b9.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./development-c7ad5cf4.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./index-e454650f.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./useSentry-b9ec55cc.js";import"./logging-e6f6b7aa.js";import"./callBound-55a1829f.js";import"./index-7b22aaaf.js";import"./extends-98964cd2.js";import"./index-e1b95cde.js";import"./Box-b01705ae.js";import"./layoutStyles-ee44dbe0.js";import"./useThemable-a5fed888.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./useDeviceContext-20251673.js";import"./index-5aae214f.js";const o=({direction:r,external:n})=>{const{text:p}=d(),t=n?"external-link":r===a.left?"chevron-left":"chevron-right";return e(b,{height:p.lineHeight.body,children:e(y,{color:"link",name:t})})},m=({label:r,onPress:n,testID:p,variant:t="default"})=>{const{text:u}=d();return e(h,{accessibilityLabel:t==="external"?r+", opent in webbrowser":r,accessibilityRole:"link",hitSlop:(g.minTouchSize-u.lineHeight.body)/2,onPress:n,testID:p,children:f(k,{gutter:"sm",children:[t==="external"&&e(o,{external:!0}),t==="backward"&&e(o,{direction:a.left}),t==="default"&&e(o,{direction:a.right}),e(x,{color:"link",children:r}),t==="forward"&&e(o,{direction:a.right})]})})};try{m.displayName="Link",m.__docgenInfo={description:"",displayName:"Link",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"backward"'},{value:'"forward"'},{value:'"external"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const le={component:m},i=r=>e(m,{...r});i.args={label:"Klik mij ik ben een link",variant:"default"};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Link {...args} />",...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ce=["Default"];export{i as Default,ce as __namedExportsOrder,le as default};
