import{d as i,j as o,S as h}from"./useThemable-e7da91f2.js";import{F as k}from"./FormField-4cb6705c.js";import{I as g}from"./Icon-acc4c785.js";import{T as f}from"./index-a681288b.js";import{V as y}from"./index-a84da5e7.js";import{T as x}from"./index-4ef9436f.js";import"./index-4ab02870.js";import"./_commonjsHelpers-de833af9.js";import"./useBeforeRemove-76977176.js";import"./useDispatch-644f677a.js";import"./bottomSheet-9ba84781.js";import"./Row-fb894198.js";import"./mapMainAxisAlignment-e13c2957.js";import"./layoutStyles-768eb547.js";import"./index-610f912e.js";import"./index-9d475cdf.js";import"./Animated-79809011.js";import"./invariant-4e558dfc.js";import"./extends-98964cd2.js";import"./index-ffecbde1.js";import"./index-abe419cd.js";import"./index-a5a81c39.js";import"./types-e7c584cc.js";import"./useDeviceContext-f2885708.js";import"./index-5e2383f8.js";import"./useTheme-e00f6261.js";import"./index-7e8d53f4.js";const t=({accessibilityLabel:e,label:d,labelPosition:m="end",onValueChange:p,testID:u,value:a})=>{const n=i(C),b=i(V);return o(f,{accessibilityLabel:e,accessibilityLanguage:"nl-NL",accessibilityRole:"checkbox",accessibilityState:{selected:a},onPress:p,testID:u,...b,children:o(k,{label:d,labelPosition:m,children:o(y,{style:[n.checkbox,a&&n.checked],children:!!a&&o(g,{color:"inverse",name:"checkmark"})})})})},C=({color:e})=>h.create({checkbox:{width:24,aspectRatio:1,padding:2,borderWidth:2,borderColor:e.control.checked.background,backgroundColor:e.control.default.background},checked:{backgroundColor:e.control.checked.background}}),V=({color:e})=>({underlayColor:e.box.background.white});try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"end"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const X={component:t,argTypes:{onValueChange:{action:"onValueChange"}}},r={args:{label:o(x,{children:"Ik ga akkoord met de voorwaarden"}),labelPosition:"end",value:!1}};var l,c,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: <Text>Ik ga akkoord met de voorwaarden</Text>,
    labelPosition: 'end',
    value: false
  }
}`,...(s=(c=r.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const Y=["Default"];export{r as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Checkbox.stories-e53b5b9a.js.map
