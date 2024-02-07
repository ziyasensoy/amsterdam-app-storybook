import{j as l,e as R,S as F,a as V}from"./useThemable-06843957.js";import{r as s}from"./index-76fb7be0.js";import{A as b,E as j}from"./Animated-f3ee43b0.js";import{T as A}from"./Triangle-bb3d2839.js";import{S as $}from"./SingleSelectable-ea45394c.js";import{C as N}from"./Column-a1fb8120.js";import{P as L}from"./Paragraph-3c3473cf.js";import{R as W}from"./Row-b0d80cfa.js";import{P as a,D as f}from"./types-e7c584cc.js";import{u as M}from"./useAccessibilityFocus-6ff24162.js";import{V as U}from"./index-4dc12ce0.js";import{P as z}from"./index-b5eac2bc.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-6410b289.js";import"./extends-98964cd2.js";import"./NativeEventEmitter-82d5e8e2.js";import"./index-eb1709cd.js";import"./index-0e143f66.js";import"./index-3e3c0b9e.js";import"./index-9d475cdf.js";import"./Center-45bb4706.js";import"./layoutStyles-925ed047.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useIsScreenReaderEnabled-fbd6c55b.js";import"./useSentry-8b800c3d.js";import"./logging-bcf4a1a0.js";import"./development-c31edce8.js";import"./index-14c07966.js";import"./callBound-bb63cabb.js";import"./index-a6bb3996.js";import"./duration-6591c38b.js";import"./index-c1b0849e.js";import"./index-56eca6dc.js";const v=s.forwardRef(({duration:e=300,startFadeIn:r=!0,style:n,children:o},i)=>{const t=s.useRef(new b.Value(0)).current;return s.useEffect(()=>{r&&b.timing(t,{easing:j.linear,toValue:1,duration:e,useNativeDriver:!0}).start()},[t,e,r]),l(b.View,{ref:i,style:[n,{opacity:t}],children:o})});try{v.displayName="Fader",v.__docgenInfo={description:"",displayName:"Fader",props:{duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!1,type:{name:"number"}},startFadeIn:{defaultValue:{value:"true"},description:"",name:"startFadeIn",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}const h=({testID:e,text:r})=>{const n=R(H),o=typeof r=="string"?[r]:r;return l($,{accessibilityRole:"text",accessible:!1,style:n.tooltip,testID:e?`${e}Content`:void 0,children:l(N,{gutter:"sm",children:o.map((i,t)=>l(L,{color:"inverse",testID:e?`${e}Paragraph${t}`:void 0,variant:"small",children:i},i))})})},H=({color:e,size:r})=>F.create({tooltip:{padding:r.spacing.md,backgroundColor:e.background.inverse}});try{h.displayName="TooltipContent",h.__docgenInfo={description:"",displayName:"TooltipContent",props:{testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}}}}}catch{}const O=e=>({[a.above]:f.down,[a.below]:f.up,[a.before]:f.right,[a.after]:f.left})[e],B=s.forwardRef(({extraSpace:e,placement:r,productTourTipTargetLayout:n,fadeIn:o,fadeInDuration:i,startFadeIn:t,...u},p)=>{const d=R(G({extraSpace:e,placement:r,productTourTipTargetLayout:n}));return o?l(v,{...u,duration:i,ref:p,startFadeIn:t,style:d.tooltip}):l(U,{...u,ref:p,style:d.tooltip})}),_=s.forwardRef(({accessibilityLabel:e,accessibilityLanguage:r="nl-NL",extraSpace:n,fadeIn:o,fadeInDuration:i,placement:t,productTourTipTargetLayout:u,onPress:p,startFadeIn:d,testID:w,text:k},C)=>{const E=O(t),x=M(),m=s.useRef(null);s.useEffect(()=>{m!=null&&m.current&&x(m.current)},[x]);const c=l(A,{direction:E});return l(B,{extraSpace:n,fadeIn:o,fadeInDuration:i,placement:t,productTourTipTargetLayout:u,ref:C,startFadeIn:d,children:l(z,{accessibilityLabel:e,accessibilityLanguage:r,accessibilityRole:"alert",onPress:p,testID:w,children:V(W,{children:[t===a.after&&c,V(N,{children:[t===a.below&&c,l(h,{testID:w,text:k}),t===a.above&&c]}),t===a.before&&c]})})})}),G=({extraSpace:e,placement:r,productTourTipTargetLayout:n})=>({size:o})=>{const i=()=>{if(!n)return{position:"relative"};const t=n.height+(e?o.spacing[e]:0);return{left:0,right:0,position:"absolute",...r===a.above?{bottom:t}:{top:t}}};return F.create({tooltip:{flex:1,alignItems:"center",paddingHorizontal:o.spacing.lg,...i(),zIndex:15}})};try{_.displayName="Tooltip",_.__docgenInfo={description:"",displayName:"Tooltip",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},extraSpace:{defaultValue:null,description:"Extra space to set between target and tooltip",name:"extraSpace",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},fadeIn:{defaultValue:null,description:"Determines whether the tooltip fades in and out. Default is 300 ms.",name:"fadeIn",required:!1,type:{name:"boolean"}},fadeInDuration:{defaultValue:null,description:"Duration of the fade-in animation in milliseconds, only works when fade = true",name:"fadeInDuration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"above"'},{value:'"after"'},{value:'"before"'},{value:'"below"'}]}},productTourTipTargetLayout:{defaultValue:null,description:"",name:"productTourTipTargetLayout",required:!1,type:{name:"LayoutRectangle"}},startFadeIn:{defaultValue:null,description:"",name:"startFadeIn",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const De={component:_},g={args:{placement:a.below,text:"We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld."}},y={args:{placement:a.below,text:["Tip!","Vul het formulier in en win een parkeervergunning."]}};var P,T,q;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: 'We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld.'
  }
}`,...(q=(T=g.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var I,D,S;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: ['Tip!', 'Vul het formulier in en win een parkeervergunning.']
  }
}`,...(S=(D=y.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const Se=["Default","Multiline"];export{g as Default,y as Multiline,Se as __namedExportsOrder,De as default};
