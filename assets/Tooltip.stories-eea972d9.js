import{j as a,S as q,a as w}from"./base-color-46461b55.js";import{r as y}from"./index-76fb7be0.js";import{F as j}from"./Fader-04e3851b.js";import{T as N}from"./Triangle-ba8313bc.js";import{S as E}from"./SingleSelectable-ed3deb02.js";import{C as S}from"./Column-6b56ff60.js";import{P as $}from"./Paragraph-8b469bbc.js";import{a as k}from"./useThemable-ec4d1a05.js";import{R as A}from"./Row-ce855e9e.js";import{P as o,D as d}from"./types-e7c584cc.js";import{u as L}from"./useAccessibilityFocus-2e83ae00.js";import{V as W}from"./index-ed640e0d.js";import{P as M}from"./index-5fe204ca.js";import"./_commonjsHelpers-de833af9.js";import"./useIsReduceMotionEnabled-72a10508.js";import"./index-99264296.js";import"./index-fda7d940.js";import"./NativeEventEmitter-3cd0de8d.js";import"./index-9b02f402.js";import"./Animated-4ce74104.js";import"./extends-98964cd2.js";import"./index-3433f2d7.js";import"./index-2d407a0d.js";import"./index-478f3656.js";import"./index-9d475cdf.js";import"./Center-ee951dbe.js";import"./layoutStyles-441e6bb4.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-d3ea75b5.js";import"./useIsScreenReaderEnabled-e2bb2a74.js";import"./useSentry-75541e8b.js";import"./logging-ded05813.js";import"./development-76c5320b.js";import"./index-a435ac4b.js";import"./callBound-bb63cabb.js";import"./duration-6591c38b.js";import"./index-c1b0849e.js";import"./index-56eca6dc.js";const b=({testID:e,text:r})=>{const n=k(U),i=typeof r=="string"?[r]:r;return a(E,{accessibilityRole:"text",accessible:!1,style:n.tooltip,testID:e?`${e}Content`:void 0,children:a(S,{gutter:"sm",children:i.map((l,t)=>a($,{color:"inverse",testID:e?`${e}Paragraph${t}`:void 0,variant:"small",children:l},l))})})},U=({color:e,size:r})=>q.create({tooltip:{padding:r.spacing.md,backgroundColor:e.background.inverse}});try{b.displayName="TooltipContent",b.__docgenInfo={description:"",displayName:"TooltipContent",props:{testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}}}}}catch{}const z=e=>({[o.above]:d.down,[o.below]:d.up,[o.before]:d.right,[o.after]:d.left})[e],H=y.forwardRef(({extraSpace:e,placement:r,productTourTipTargetLayout:n,fadeIn:i,fadeInDuration:l,startFadeIn:t,...s},p)=>{const u=k(O({extraSpace:e,placement:r,productTourTipTargetLayout:n}));return i?a(j,{...s,duration:l,ref:p,shouldAnimate:t,style:u.tooltip}):a(W,{...s,ref:p,style:u.tooltip})}),v=y.forwardRef(({accessibilityLabel:e,accessibilityLanguage:r="nl-NL",extraSpace:n,fadeIn:i,fadeInDuration:l,placement:t,productTourTipTargetLayout:s,onPress:p,startFadeIn:u,testID:h,text:C},R)=>{const F=z(t),x=L(),m=y.useRef(null);y.useEffect(()=>{m!=null&&m.current&&x(m.current)},[x]);const c=a(N,{direction:F});return a(H,{extraSpace:n,fadeIn:i,fadeInDuration:l,placement:t,productTourTipTargetLayout:s,ref:R,startFadeIn:u,children:a(M,{accessibilityLabel:e,accessibilityLanguage:r,accessibilityRole:"alert",onPress:p,testID:h,children:w(A,{children:[t===o.after&&c,w(S,{children:[t===o.below&&c,a(b,{testID:h,text:C}),t===o.above&&c]}),t===o.before&&c]})})})}),O=({extraSpace:e,placement:r,productTourTipTargetLayout:n})=>({size:i})=>{const l=()=>{if(!n)return{position:"relative"};const t=n.height+(e?i.spacing[e]:0);return{left:0,right:0,position:"absolute",...r===o.above?{bottom:t}:{top:t}}};return q.create({tooltip:{flex:1,alignItems:"center",paddingHorizontal:i.spacing.lg,...l(),zIndex:15}})};try{v.displayName="Tooltip",v.__docgenInfo={description:"",displayName:"Tooltip",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},extraSpace:{defaultValue:null,description:"Extra space to set between target and tooltip",name:"extraSpace",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},fadeIn:{defaultValue:null,description:"Determines whether the tooltip fades in and out. Default is 300 ms.",name:"fadeIn",required:!1,type:{name:"boolean"}},fadeInDuration:{defaultValue:null,description:"Duration of the fade-in animation in milliseconds, only works when fade = true",name:"fadeInDuration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"above"'},{value:'"after"'},{value:'"before"'},{value:'"below"'}]}},productTourTipTargetLayout:{defaultValue:null,description:"",name:"productTourTipTargetLayout",required:!1,type:{name:"LayoutRectangle"}},startFadeIn:{defaultValue:null,description:"",name:"startFadeIn",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const ke={component:v},f={args:{placement:o.below,text:"We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld."}},g={args:{placement:o.below,text:["Tip!","Vul het formulier in en win een parkeervergunning."]}};var _,T,P;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: 'We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld.'
  }
}`,...(P=(T=f.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var V,D,I;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: ['Tip!', 'Vul het formulier in en win een parkeervergunning.']
  }
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Ce=["Default","Multiline"];export{f as Default,g as Multiline,Ce as __namedExportsOrder,ke as default};
