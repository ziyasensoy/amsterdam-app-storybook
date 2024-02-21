import{j as d}from"./index-1401012c.js";import{r as c}from"./index-76fb7be0.js";import{u as m}from"./usePiwikTrackCustomEventFromProps-e17892cc.js";import{P as n}from"./slugs-d391ec41.js";import{P as p}from"./index-3a924388.js";const u=c.forwardRef(({children:t,onPress:a=()=>null,logAction:s=n.buttonPress,onAccessibilityAction:l,...o},i)=>{const r=m({...o,logAction:s});return d(p,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",onAccessibilityAction:e=>{l==null||l(e),r(e,{nameSuffix:e.nativeEvent.actionName,action:n.accessibilityAction})},onPress:e=>{a==null||a(e),r(e)},ref:i,...o,children:t})});try{u.displayName="PressableBase",u.__docgenInfo={description:`Used to build other interactive components, do not use on its own.
This is a drop in replacement of the React Native Pressable component.`,displayName:"PressableBase",props:{"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:{value:"PiwikAction.buttonPress"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}export{u as P};
