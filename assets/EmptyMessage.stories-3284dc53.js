import{a as l,j as o}from"./useThemable-f30bc085.js";import{S as c}from"./SingleSelectable-36100fc6.js";import{P as d}from"./Paragraph-9326dc7a.js";import{T as u}from"./Title-56f4a277.js";import{u as g}from"./useAccessibilityAnnounce-54c73e58.js";import{D as f}from"./duration-6591c38b.js";import{a as y}from"./accessibleText-50b2b39a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-c2b660c2.js";import"./index-ccfb1f0c.js";import"./useIsScreenReaderEnabled-fa910e4a.js";import"./useSentry-02887f2a.js";import"./logging-a5858441.js";import"./development-c52112ae.js";import"./index-fca5dbaa.js";import"./index-a1c2f77b.js";const s=({showTitle:t=!0,testID:p,text:r})=>{const a=t?"Helaas …":"";return g(`${a} ${r}`,f.normal),l(c,{accessibilityLabel:y(a,r),accessibilityLanguage:"nl-NL",testID:p,children:[!!t&&o(u,{level:"h3",text:a}),o(d,{children:r})]})};try{s.displayName="EmptyMessage",s.__docgenInfo={description:"",displayName:"EmptyMessage",props:{showTitle:{defaultValue:{value:"true"},description:"",name:"showTitle",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const z={component:s},e={args:{text:"We hebben geen werkzaamheden gevonden voor dit adres."}};var i,n,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'We hebben geen werkzaamheden gevonden voor dit adres.'
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,z as default};
