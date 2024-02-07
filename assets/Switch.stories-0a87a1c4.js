import{j as e}from"./base-color-46461b55.js";import{r as h}from"./index-76fb7be0.js";import{F as g}from"./FormField-c92067e1.js";import{u as k}from"./useTheme-fb1b80de.js";import{P as w}from"./index-5fe204ca.js";import{S as y}from"./index-4ce9cef5.js";import{T as _}from"./index-2d407a0d.js";import"./_commonjsHelpers-de833af9.js";import"./bottomSheet-31c33708.js";import"./useThemable-ec4d1a05.js";import"./index-d3ea75b5.js";import"./useDispatch-2fe5ae05.js";import"./index-ed640e0d.js";import"./Row-ce855e9e.js";import"./mapMainAxisAlignment-e13c2957.js";import"./layoutStyles-441e6bb4.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";const t=({accessibilityLabel:o="",disabled:i=!1,label:m,labelPosition:p="start",onChange:n,testID:u,value:s,wrapper:b=h.Fragment,...f})=>{const{color:a}=k();return e(w,{accessibilityHint:"Dubbel tik om onderdeel aan of uit te zetten",accessibilityLabel:`${o} onderdeel staat ${s?"aan":"uit"}`,accessibilityLanguage:"nl-NL",accessibilityRole:"button","aria-disabled":i,onPress:n,testID:u,children:e(b,{children:e(g,{label:m,labelPosition:p,children:e(y,{accessibilityElementsHidden:!0,importantForAccessibility:"no-hide-descendants",ios_backgroundColor:a.control.switch.track.background.off,onChange:n,thumbColor:a.control.switch.thumb.background[i?"disabled":"enabled"],trackColor:{false:a.control.switch.track.background.off,true:a.control.switch.track.background.on},value:s,...f})})})})};try{t.displayName="Switch",t.__docgenInfo={description:"Wraps a switch with its label in a row and takes care of accessibility.",displayName:"Switch",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"start"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(() => void)"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"ElementType"}}}}}catch{}const z={component:t,argTypes:{onValueChange:{action:"onValueChange"}}},r={args:{label:e(_,{children:"Ik ga akkoord met de voorwaarden"}),labelPosition:"end",value:!0}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: <Text>Ik ga akkoord met de voorwaarden</Text>,
    labelPosition: 'end',
    value: true
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const A=["Default"];export{r as Default,A as __namedExportsOrder,z as default};
