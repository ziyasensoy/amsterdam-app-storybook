import{v as u,j as d,S as h,E as p}from"./useThemable-3e929d60.js";import{r as f}from"./index-e67e0a49.js";import{T as c}from"./index-eaef2ea0.js";const o=({children:t,color:r="default",emphasis:s="default",underline:e=!1,variant:l="body",...a})=>{const n=f.useMemo(()=>m({color:r,emphasis:s,underline:e,variant:l}),[r,s,e,l]),i=u(n);return d(c,{style:i.text,...a,children:t})},m=({color:t,emphasis:r,underline:s,variant:e})=>({color:l,text:a})=>h.create({text:{flexShrink:1,color:l.text[t],fontFamily:a.fontFamily[r===p.strong?"bold":"regular"],fontSize:a.fontSize[e],lineHeight:a.lineHeight[e],textDecorationLine:s?"underline":"none"}});try{o.displayName="Phrase",o.__docgenInfo={description:"Displays (very) short text phrases.\nOffers the three sizing variants, and bold text.\nFor sentences, use `Paragraph` instead.",displayName:"Phrase",props:{color:{defaultValue:{value:"default"},description:"Defines the color of the phrase. Maps with the text color tokens.",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'},{value:'"link"'},{value:'"secondary"'}]}},emphasis:{defaultValue:{value:"default"},description:"Allows the phrase to convey more emphasis.",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"strong"'}]}},underline:{defaultValue:{value:"false"},description:"Whether the phrase is underlined. Use this for a link only.",name:"underline",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"body"},description:"Which variation of a phrase to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"intro"'},{value:'"quote"'},{value:'"small"'}]}}}}}catch{}export{o as P};
//# sourceMappingURL=Phrase-aff4564b.js.map
