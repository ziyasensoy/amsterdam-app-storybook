import{u,j as s,S as p}from"./useThemable-7e23fae8.js";import{r as d}from"./index-e67e0a49.js";import{T as c}from"./index-880a3f2e.js";const o=({children:l,color:a="default",textAlign:e="left",variant:r="body",...t})=>{const n=d.useMemo(()=>f({color:a,textAlign:e,variant:r}),[a,e,r]),i=u(n);return s(c,{accessibilityRole:a==="warning"?"alert":"none",style:i.text,...t,children:l})},f=({color:l,textAlign:a,variant:e})=>({color:r,text:t})=>p.create({text:{flexShrink:1,color:r.text[l],fontFamily:t.fontFamily[e==="quote"?"bold":"regular"],fontSize:t.fontSize[e],lineHeight:t.lineHeight[e],textAlign:a}});try{o.displayName="Paragraph",o.__docgenInfo={description:"",displayName:"Paragraph",props:{color:{defaultValue:{value:"default"},description:"Provides an inverse text color to allow a paragraph on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"inverse"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"warning"'}]}},textAlign:{defaultValue:{value:"left"},description:"Defines the alignment of the text. Maps with the textAlign style prop options.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},variant:{defaultValue:{value:"body"},description:"Which variation of a paragraph to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"intro"'},{value:'"quote"'},{value:'"small"'}]}}}}}catch{}export{o as P};
//# sourceMappingURL=Paragraph-80f05352.js.map
