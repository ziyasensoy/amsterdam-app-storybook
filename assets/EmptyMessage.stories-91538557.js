import{a as l,j as s}from"./index-1401012c.js";import{S as c}from"./SingleSelectable-a6d5becd.js";import{P as d}from"./Paragraph-12a38325.js";import{T as u}from"./Title-02e42c3d.js";import{u as g}from"./useAccessibilityAnnounce-3d03aea1.js";import{D as f}from"./duration-6591c38b.js";import{a as y}from"./accessibleText-50b2b39a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-e1b95cde.js";import"./TextAncestorContext-63ed7f56.js";import"./useThemable-a5fed888.js";import"./index-d3ea75b5.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./base-color-0322ee5e.js";import"./index-e39fa516.js";import"./useIsScreenReaderEnabled-2519e2ac.js";import"./useSentry-b9ec55cc.js";import"./logging-e6f6b7aa.js";import"./development-c7ad5cf4.js";import"./index-14cede91.js";import"./callBound-55a1829f.js";import"./index-8ad79f0b.js";const o=({showTitle:t=!0,testID:p,text:r})=>{const a=t?"Helaas …":"";return g(`${a} ${r}`,f.normal),l(c,{accessibilityLabel:y(a,r),accessibilityLanguage:"nl-NL",testID:p,children:[!!t&&s(u,{level:"h3",text:a}),s(d,{children:r})]})};try{o.displayName="EmptyMessage",o.__docgenInfo={description:"",displayName:"EmptyMessage",props:{showTitle:{defaultValue:{value:"true"},description:"",name:"showTitle",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const H={component:o},e={args:{text:"We hebben geen werkzaamheden gevonden voor dit adres."}};var i,n,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'We hebben geen werkzaamheden gevonden voor dit adres.'
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,H as default};
