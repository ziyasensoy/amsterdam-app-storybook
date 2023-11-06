import{j as t,a as g,d as x,S}from"./useThemable-05c0eaf9.js";import{P as V}from"./Pressable-0794f821.js";import{S as k}from"./SingleSelectable-24ccb719.js";import{T as s}from"./Triangle-a84292d8.js";import{C as P}from"./Column-5f32e9df.js";import{R as D}from"./Row-46e03241.js";import{P as j}from"./Paragraph-2d491c50.js";import{P as r,D as l}from"./types-e7c584cc.js";import{u as q}from"./useAccessibilityFocus-1b1a6fc9.js";import"./index-e67e0a49.js";import"./_commonjsHelpers-de833af9.js";import"./Box-1774252d.js";import"./layoutStyles-96daf10f.js";import"./index-df3ac05d.js";import"./index-fc5a9d02.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./index-6d568fd1.js";import"./index-9d475cdf.js";import"./Center-6633c52d.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-320be36c.js";import"./development-0f9f5b22.js";import"./index-cacef664.js";import"./index-e76bff40.js";import"./index-9f1e8595.js";import"./setFocusDelay-a0daccc8.js";import"./index-775c65ba.js";import"./invariant-ea487af3.js";import"./EventEmitter-2b0932c2.js";const C=e=>({[r.above]:l.down,[r.below]:l.up,[r.before]:l.right,[r.after]:l.left})[e],N=({testID:e,text:o})=>{const c=x(O),n=typeof o=="string"?[o]:o;return t(k,{accessibilityRole:"text",accessible:!1,style:c.tooltip,testID:e,children:t(P,{gutter:"sm",children:n.map((i,u)=>t(j,{color:"inverse",testID:e&&u===0?`${e}Paragraph`:void 0,variant:"small",children:i},i))})})},d=({accessibilityLabel:e,accessibilityLanguage:o="nl-NL",isOpen:c,placement:n,testID:i,text:u,onPress:T})=>{const a={direction:C(n)},_=q();return c?t(V,{accessibilityLabel:e,accessibilityLanguage:o,insetHorizontal:"lg",onPress:T,ref:_,children:g(D,{children:[n===r.after&&t(s,{...a}),g(P,{children:[n===r.below&&t(s,{...a}),t(N,{testID:i,text:u}),n===r.above&&t(s,{...a})]}),n===r.before&&t(s,{...a})]})}):null},O=({color:e,size:o})=>S.create({tooltip:{padding:o.spacing.md,backgroundColor:e.background.inverse}});try{d.displayName="Tooltip",d.__docgenInfo={description:"",displayName:"Tooltip",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"above"'},{value:'"after"'},{value:'"before"'},{value:'"below"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const me={component:d},p={args:{placement:r.below,text:"We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld."}},m={args:{placement:r.below,text:["Tip!","Vul het formulier in en win een parkeervergunning."]}};var f,b,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: 'We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld.'
  }
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,h,w;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: ['Tip!', 'Vul het formulier in en win een parkeervergunning.']
  }
}`,...(w=(h=m.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const ce=["Default","Multiline"];export{p as Default,m as Multiline,ce as __namedExportsOrder,me as default};
//# sourceMappingURL=Tooltip.stories-5d562aaa.js.map
