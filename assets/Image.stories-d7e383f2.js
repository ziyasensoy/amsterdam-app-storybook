import{j as l}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{i as I}from"./development-3a32c91f.js";import{P as S,I as R}from"./index-669b6b91.js";import{e as _}from"./useThemable-4f8c02a7.js";import{u as W}from"./index-49249b77.js";import{P as w}from"./index-ee31bd24.js";import{S as b}from"./index-3ab680be.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./TextAncestorContext-48932c2f.js";import"./index-a5e37ab8.js";import"./index-d3ea75b5.js";import"./redux-toolkit.esm-5225e422.js";import"./base-color-0322ee5e.js";const E=()=>null,j=({width:t=0},{width:e=0})=>t>e?1:t<e?-1:0,z=(t,e)=>{var i;if(!e)return;if(!Array.isArray(e))return e.uri;if(I&&!t&&(t=1e3),!t)return;const r=[...e].sort(j),a=S.getPixelSizeForLayoutSize(t),o=r.find(({width:c=0})=>c>=a);return o?o.uri:(i=r.pop())==null?void 0:i.uri},C=({onLayout:t,style:e,uriSources:r,width:a=0,...o})=>{const i=s.useMemo(()=>({uri:z(a,r)}),[r,a]);return l.jsx(E,{accessibilityIgnoresInvertColors:!0,accessibilityLanguage:"nl-NL",onLayout:t,source:i,style:e,...o},i==null?void 0:i.uri)},d=({aspectRatio:t="wide",onLayout:e,source:r,style:a,...o})=>{const{height:i,width:c}=W(),[u,m]=s.useState(void 0),x=s.useMemo(()=>L(t,u),[t,u]),p=_(x);s.useEffect(()=>{m(void 0)},[i,c]);const f=s.useCallback(g=>{m(g.nativeEvent.layout.width),e==null||e(g)},[e,m]);return w.OS==="ios"&&typeof r!="number"?l.jsx(C,{onLayout:f,style:[p.image,a],uriSources:r,width:u,...o}):l.jsx(R,{accessibilityIgnoresInvertColors:!0,accessibilityLanguage:"nl-NL",onLayout:f,source:r,style:[p.image,a],...o})},L=(t,e)=>({media:r})=>{const a=r.aspectRatio[t];return b.create({image:{width:void 0,maxWidth:"100%",height:w.OS==="android"&&e&&a>0?e/a:void 0,flex:1,aspectRatio:a}})};try{d.displayName="Image",d.__docgenInfo={description:"",displayName:"Image",props:{aspectRatio:{defaultValue:{value:"wide"},description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"extraWide"'},{value:'"narrow"'},{value:'"square"'},{value:'"wide"'},{value:'"tight"'}]}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"OnError"}},resizeMode:{defaultValue:null,description:"",name:"resizeMode",required:!1,type:{name:"enum",value:[{value:'"stretch"'},{value:'"cover"'},{value:'"contain"'}]}}}}}catch{}const M=""+new URL("screenshot-afvalwijzer-b7508622.png",import.meta.url).href,K={component:d},n={args:{aspectRatio:"wide",source:M}};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    aspectRatio: 'wide',
    source
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const Q=["Default"];export{n as Default,Q as __namedExportsOrder,K as default};
