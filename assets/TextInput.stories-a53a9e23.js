import{e as v,a as I,j as l,S as B}from"./useThemable-f30bc085.js";import{r as c}from"./index-76fb7be0.js";import{I as D}from"./IconButton-279328c3.js";import{L as F}from"./Label-08c7f95c.js";import{C as z}from"./Column-1b7dee07.js";import{I as M}from"./Icon-665a7dd4.js";import{V as S}from"./index-c2b660c2.js";import{T as A}from"./index-79b70c81.js";import{P as q}from"./index-9f48cdb1.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./config-55b2a55c.js";import"./Badge-a2905242.js";import"./Row-6615ad7f.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useDeviceContext-18951bae.js";import"./NativeEventEmitter-e48f6778.js";import"./index-fca5dbaa.js";import"./index-b6575df8.js";import"./index-ccfb1f0c.js";import"./types-e7c584cc.js";import"./index-a38d3ef2.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./Paragraph-9326dc7a.js";import"./index-0a8a0804.js";import"./index-9d475cdf.js";import"./Animated-c2918ca3.js";import"./index-4aecf1db.js";import"./useTheme-6ad20d8d.js";const f=c.forwardRef(({label:r,numberOfLines:n,onChangeText:e,onFocus:t,placeholder:s="",warning:i,value:a="",testID:d="",accessibilityLanguage:o="nl-NL",...b},L)=>{const[O,h]=c.useState(!1),[g,m]=c.useState(a),y=v(P({hasFocus:O,numberOfLines:n,warning:i})),C=v(R);c.useEffect(()=>{m(a)},[a]);const E=()=>h(!1),H=x=>{m(x),e==null||e(x)},N=()=>{m(""),e==null||e("")},W=()=>{h(!0),t==null||t()};return I(z,{gutter:"sm",children:[l(F,{isAccessible:!b.accessibilityLabel,text:r}),I(S,{style:y.frame,children:[l(A,{...b,...C,accessibilityLanguage:o,numberOfLines:q.OS==="ios"?void 0:n,onBlur:E,onChangeText:H,onFocus:W,placeholder:s,ref:L,style:y.textInput,testID:d,textAlignVertical:"top",value:g}),g?l(S,{children:l(D,{accessibilityHint:"Maak dit tekstveld leeg",accessibilityLanguage:o,icon:l(M,{name:"close",size:"lg"}),onPress:N,testID:`${d}ClearButton`})}):null]})]})}),P=({hasFocus:r,numberOfLines:n,warning:e})=>({color:t,size:s,text:i})=>{const a=r||e?2:1,d=s.spacing.md-(a-1),o=s.spacing.sm-(a-1);return B.create({frame:{flexDirection:"row",paddingHorizontal:d,paddingVertical:o,backgroundColor:t.box.background.white,borderStyle:"solid",borderColor:e?t.control.warning.border:r?t.control.focus.border:t.control.default.border,borderWidth:a},textInput:{minHeight:q.OS==="ios"&&n?n*i.lineHeight.body+2*o:"auto",flex:1,padding:0,paddingTop:0,color:t.text.default,fontFamily:i.fontFamily.regular,fontSize:i.fontSize.body}})},R=({color:r})=>({placeholderTextColor:r.text.secondary});try{f.displayName="TextInput",f.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},numberOfLines:{defaultValue:null,description:`Sets the number of lines for a TextInput.
Use it with multiline set to true to be able to fill the lines.`,name:"numberOfLines",required:!1,type:{name:"number"}},onChangeText:{defaultValue:null,description:`Callback that is called when the text input's text changes.
Changed text is passed as an argument to the callback handler.`,name:"onChangeText",required:!1,type:{name:"(((event: string) => void) & ((text: string) => void))"}},onFocus:{defaultValue:null,description:"Callback that is called when the text input is focused",name:"onFocus",required:!1,type:{name:"((() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))"}},placeholder:{defaultValue:{value:""},description:"The string that will be rendered before text input has been entered",name:"placeholder",required:!1,type:{name:"string"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}}}}}catch{}const Ie={component:f},p={args:{label:"Wat is de titel van je bericht?",placeholder:"Voer een titel in...",value:""}},u={args:{label:"Wat is de titel van je bericht?",multiline:!0,numberOfLines:5,placeholder:"Voer een titel in...",value:""}};var V,_,w;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var T,j,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    multiline: true,
    numberOfLines: 5,
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const Se=["Default","Multiline"];export{p as Default,u as Multiline,Se as __namedExportsOrder,Ie as default};
