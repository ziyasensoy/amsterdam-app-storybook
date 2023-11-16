import{a as d,j as s}from"./useThemable-2475a59d.js";import{r as f}from"./index-e67e0a49.js";import{S as _}from"./SingleSelectable-ed2f1a54.js";import{C as y}from"./Column-6aedf4aa.js";import{R as g}from"./Row-082dc951.js";import{P as I}from"./Phrase-9ec43387.js";import{L}from"./ListItemMarker-fc3b229e.js";import{a as h}from"./accessibleText-50b2b39a.js";import"./_commonjsHelpers-de833af9.js";import"./index-e7f07afd.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-b1caaf39.js";import"./config-55b2a55c.js";import"./useDeviceContext-c133351c.js";import"./index-d84c4c7f.js";import"./invariant-df383171.js";import"./index-96692132.js";const m=({text:e,marker:t})=>d(g,{children:[s(L,{marker:t}),s(I,{children:e})]});try{m.displayName="ListItem",m.__docgenInfo={description:"",displayName:"ListItem",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},marker:{defaultValue:null,description:"",name:"marker",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"checkmark"'}]}}}}}catch{}const b=e=>{const t=[],a=[];for(const r of e)typeof r=="string"?(t.push(r),a.push(r)):(t.push(r.text),a.push(r.accessibilityLabel));return{textItems:t,accessibilityLabelItems:a}},o=({items:e,marker:t="square",testID:a})=>{const{textItems:r,accessibilityLabelItems:u}=f.useMemo(()=>b(e),[e]);return s(_,{accessibilityLabel:h(...u),testID:a,children:s(y,{gutter:"md",children:r.map(c=>s(m,{marker:t,text:c},c))})})};try{o.displayName="List",o.__docgenInfo={description:"",displayName:"List",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},marker:{defaultValue:{value:"square"},description:"",name:"marker",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"checkmark"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const Z={component:o},i=e=>s(o,{...e});i.args={items:["Centrum","Nieuw-West","Noord","Oost","West","Zuid","Zuidoost","Weesp"],marker:"square"};var p,l,n;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"args => <List {...args} />",...(n=(l=i.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,Z as default};
//# sourceMappingURL=List.stories-eb2091fe.js.map
