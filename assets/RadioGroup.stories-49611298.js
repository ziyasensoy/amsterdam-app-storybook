import{j as t,a as v}from"./index-1401012c.js";import{S as w,a as d}from"./index-5844c8dd.js";import{P as V}from"./PressableBase-2fe3af06.js";import{R as P}from"./Row-b2f4e37d.js";import{P as C}from"./Phrase-ec317b87.js";import{u as k}from"./useTheme-8e94b012.js";import{C as q}from"./Column-ff4b7c3a.js";import{u as _,a as R,P as S}from"./usePiwikTrackCustomEventFromProps-e922e993.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./index-7b22aaaf.js";import"./extends-98964cd2.js";import"./TextAncestorContext-63ed7f56.js";import"./slugs-f10b10b9.js";import"./index-e1b95cde.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useThemable-a5fed888.js";import"./index-d3ea75b5.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./base-color-0322ee5e.js";import"./index-e39fa516.js";import"./getCurrentModuleSlugFromNavigationRootState-894d5e8f.js";import"./development-c7ad5cf4.js";import"./index-14cede91.js";import"./index-e454650f.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./useSentry-b9ec55cc.js";import"./logging-e6f6b7aa.js";import"./callBound-55a1829f.js";const A=({checked:a})=>{const{color:e}=k();return v(w,{height:24,viewBox:"0 0 24 24",width:24,children:[t(d,{cx:12,cy:12,fill:e.control.default.background,r:11,stroke:e.control.checked.border,strokeWidth:2}),!!a&&t(d,{cx:12,cy:12,fill:e.control.checked.border,r:8})]})},n=({label:a,isSelected:e,onPress:o,...i})=>t(V,{...i,accessibilityLanguage:"nl-NL",accessibilityRole:"radio",accessibilityState:{selected:e},onPress:o,children:v(P,{gutter:"sm",valign:"center",children:[t(A,{checked:e}),t(C,{children:a})]})});try{n.displayName="Radio",n.__docgenInfo={description:"",displayName:"Radio",props:{isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"Called when a single tap gesture is detected.",name:"onPress",required:!1,type:{name:"(() => void) & ((event: GestureResponderEvent) => void)"}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<PiwikDimension | PiwikSessionDimension, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const s=({options:a=[],onChange:e,testID:o,value:i,logAction:g=S.radioChange,logSelectedValueAsNewState:f=!1,logDimensions:y={},...h})=>{const b=_({...h,logAction:g,logDimensions:y,onEvent:e,testID:o});return t(q,{gutter:"md",children:a.map(({label:u,value:r})=>t(n,{isSelected:i===r,label:u,onPress:()=>b(r,f?{dimensions:{[R.newState]:r.toString()}}:{}),testID:o?`${o}${r.toString()}RadioButton`:void 0},u))})};try{s.displayName="RadioGroup",s.__docgenInfo={description:"",displayName:"RadioGroup",props:{logSelectedValueAsNewState:{defaultValue:{value:"false"},description:"Log value to analytics service as new state when the selected value changes.",name:"logSelectedValueAsNewState",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"RadioGroupOption<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},logAction:{defaultValue:{value:"PiwikAction.radioChange"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:{value:"{}"},description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<PiwikDimension | PiwikSessionDimension, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const ue={component:s},D=[{label:"Heldhaftig",value:"valiant"},{label:"Vastberaden",value:"steadfast"},{label:"Barmhartig",value:"compassionate"}],l={args:{options:D,value:"valiant"}};var c,m,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    options,
    value: 'valiant'
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const de=["Default"];export{l as Default,de as __namedExportsOrder,ue as default};
