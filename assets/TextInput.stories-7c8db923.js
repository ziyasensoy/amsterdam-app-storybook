import{a as v,j as l,S as B}from"./index-1401012c.js";import{r as m}from"./index-76fb7be0.js";import{I as D}from"./IconButton-b8c9bb1a.js";import{L as F}from"./Label-ac321cdf.js";import{C as z}from"./Column-ff4b7c3a.js";import{I as M}from"./Icon-16a5e8e0.js";import{a as I}from"./useThemable-a5fed888.js";import{V as S}from"./index-e1b95cde.js";import{T as A}from"./index-226d16f2.js";import{P as q}from"./invariant-f1a82cf7.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-3373ea01.js";import"./PressableBase-2fe3af06.js";import"./usePiwikTrackCustomEventFromProps-e922e993.js";import"./getCurrentModuleSlugFromNavigationRootState-894d5e8f.js";import"./slugs-f10b10b9.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./development-c7ad5cf4.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./index-e454650f.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./useSentry-b9ec55cc.js";import"./logging-e6f6b7aa.js";import"./callBound-55a1829f.js";import"./index-7b22aaaf.js";import"./extends-98964cd2.js";import"./Box-b01705ae.js";import"./layoutStyles-ee44dbe0.js";import"./config-55b2a55c.js";import"./Badge-dc22818b.js";import"./Row-b2f4e37d.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useDeviceContext-20251673.js";import"./index-5aae214f.js";import"./index-240c6d7a.js";import"./index-e39fa516.js";import"./types-e7c584cc.js";import"./Paragraph-12a38325.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-759f743a.js";import"./useTheme-8e94b012.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";const f=m.forwardRef(({label:r,numberOfLines:o,onChangeText:e,onFocus:t,placeholder:s="",warning:a,value:i="",testID:p="",accessibilityLanguage:n="nl-NL",...b},L)=>{const[O,h]=m.useState(!1),[g,u]=m.useState(i),y=I(P({hasFocus:O,numberOfLines:o,warning:a})),C=I(R);m.useEffect(()=>{u(i)},[i]);const E=()=>h(!1),H=x=>{u(x),e==null||e(x)},N=()=>{u(""),e==null||e("")},W=()=>{h(!0),t==null||t()};return v(z,{gutter:"sm",children:[l(F,{isAccessible:!b.accessibilityLabel,text:r}),v(S,{style:y.frame,children:[l(A,{...b,...C,accessibilityLanguage:n,numberOfLines:q.OS==="ios"?void 0:o,onBlur:E,onChangeText:H,onFocus:W,placeholder:s,ref:L,style:y.textInput,testID:p,textAlignVertical:"top",value:g}),g?l(S,{children:l(D,{accessibilityHint:"Maak dit tekstveld leeg",accessibilityLanguage:n,icon:l(M,{name:"close",size:"lg"}),onPress:N,testID:`${p}ClearButton`})}):null]})]})}),P=({hasFocus:r,numberOfLines:o,warning:e})=>({color:t,size:s,text:a})=>{const i=r||e?2:1,p=s.spacing.md-(i-1),n=s.spacing.sm-(i-1);return B.create({frame:{flexDirection:"row",paddingHorizontal:p,paddingVertical:n,backgroundColor:t.box.background.white,borderStyle:"solid",borderColor:e?t.control.warning.border:r?t.control.focus.border:t.control.default.border,borderWidth:i},textInput:{minHeight:q.OS==="ios"&&o?o*a.lineHeight.body+2*n:"auto",flex:1,padding:0,paddingTop:0,color:t.text.default,fontFamily:a.fontFamily.regular,fontSize:a.fontSize.body}})},R=({color:r})=>({placeholderTextColor:r.text.secondary});try{f.displayName="TextInput",f.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},numberOfLines:{defaultValue:null,description:`Sets the number of lines for a TextInput.
Use it with multiline set to true to be able to fill the lines.`,name:"numberOfLines",required:!1,type:{name:"number"}},onChangeText:{defaultValue:null,description:`Callback that is called when the text input's text changes.
Changed text is passed as an argument to the callback handler.`,name:"onChangeText",required:!1,type:{name:"(((event: string) => void) & ((text: string) => void))"}},onFocus:{defaultValue:null,description:"Callback that is called when the text input is focused",name:"onFocus",required:!1,type:{name:"((() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))"}},placeholder:{defaultValue:{value:""},description:"The string that will be rendered before text input has been entered",name:"placeholder",required:!1,type:{name:"string"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}}}}}catch{}const De={component:f},d={args:{label:"Wat is de titel van je bericht?",placeholder:"Voer een titel in...",value:""}},c={args:{label:"Wat is de titel van je bericht?",multiline:!0,numberOfLines:5,placeholder:"Voer een titel in...",value:""}};var V,_,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var T,j,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    multiline: true,
    numberOfLines: 5,
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const Fe=["Default","Multiline"];export{d as Default,c as Multiline,Fe as __namedExportsOrder,De as default};
