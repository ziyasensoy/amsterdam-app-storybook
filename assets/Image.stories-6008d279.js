import{e as I,j as l,S}from"./useThemable-f30bc085.js";import{r as n}from"./index-76fb7be0.js";import{i as _}from"./development-c52112ae.js";import{P as x,I as R}from"./index-4aecf1db.js";import{u as W}from"./index-b6575df8.js";import{P as y}from"./index-9f48cdb1.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-fca5dbaa.js";import"./extends-98964cd2.js";import"./index-c2b660c2.js";const b=()=>null,z=({width:t=0},{width:e=0})=>t>e?1:t<e?-1:0,C=(t,e)=>{var i;if(!e)return;if(!Array.isArray(e))return e.uri;if(_&&!t&&(t=1e3),!t)return;const r=[...e].sort(z),a=x.getPixelSizeForLayoutSize(t),s=r.find(({width:o=0})=>o>=a);return s?s.uri:(i=r.pop())==null?void 0:i.uri},L=({onLayout:t,style:e,uriSources:r,width:a=0,...s})=>{const i=n.useMemo(()=>C(a,r),[r,a]);return l(b,{accessibilityIgnoresInvertColors:!0,accessibilityLanguage:"nl-NL",onLayout:t,source:{uri:i},style:e,...s})},m=({aspectRatio:t="wide",onLayout:e,source:r,...a})=>{const{height:s,width:i}=W(),[o,u]=n.useState(void 0),w=n.useMemo(()=>M(t,o),[t,o]),d=I(w);n.useEffect(()=>{u(void 0)},[s,i]);const p=n.useCallback(f=>{u(f.nativeEvent.layout.width),e==null||e(f)},[e,u]);return y.OS==="ios"&&typeof r!="number"?l(L,{onLayout:p,style:[d.image],uriSources:r,width:o,...a}):l(R,{accessibilityIgnoresInvertColors:!0,accessibilityLanguage:"nl-NL",onLayout:p,source:r,style:[d.image],...a})},M=(t,e)=>({media:r})=>{const a=r.aspectRatio[t];return S.create({image:{width:void 0,maxWidth:"100%",height:y.OS==="android"&&e&&a>0?e/a:void 0,flex:1,aspectRatio:a}})};try{m.displayName="Image",m.__docgenInfo={description:"",displayName:"Image",props:{aspectRatio:{defaultValue:{value:"wide"},description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"extraWide"'},{value:'"narrow"'},{value:'"square"'},{value:'"wide"'},{value:'"tight"'}]}},resizeMode:{defaultValue:null,description:"",name:"resizeMode",required:!1,type:{name:"enum",value:[{value:'"stretch"'},{value:'"cover"'},{value:'"contain"'}]}}}}}catch{}const N=""+new URL("screenshot-afvalwijzer-75292bd5.png",import.meta.url).href,k={component:m},c={args:{aspectRatio:"wide",source:N}};var g,h,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    aspectRatio: 'wide',
    source
  }
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const H=["Default"];export{c as Default,H as __namedExportsOrder,k as default};
