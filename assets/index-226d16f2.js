import{r as u}from"./index-76fb7be0.js";import{u as Ke,g as _e,b as He,S as $e}from"./index-1401012c.js";import{d as Be,a as Ie,c as je,f as qe,k as Ae,m as Ge,t as Ve,s as We,h as Je,u as Qe,b as Ue,e as Xe,g as Ye,p as Ze}from"./TextAncestorContext-63ed7f56.js";import{T as S}from"./Animated-905ced6c.js";var Ne=(e,l)=>{var i=e.selectionEnd,v=e.selectionStart,m=l.start,g=l.end;return m!==v||g!==i},J=(e,l)=>{if(Ne(e,l)){var i=l.start,v=l.end;try{e.setSelectionRange(i,v||i)}catch{}}},et=Object.assign({},Be,Ie,je,qe,Ae,Ge,Ve,We,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0}),tt=e=>Ze(e,et);function nt(e){return e.isComposing||e.keyCode===229}var k=null,O=u.forwardRef((e,l)=>{var i=e.autoCapitalize,v=i===void 0?"sentences":i,m=e.autoComplete,g=e.autoCompleteType,P=e.autoCorrect,F=P===void 0?!0:P,y=e.blurOnSubmit,Q=e.caretHidden,U=e.clearTextOnFocus,M=e.dir,X=e.editable,Y=e.enterKeyHint,d=e.inputMode,z=e.keyboardType,L=e.multiline,c=L===void 0?!1:L,Z=e.numberOfLines,D=e.onBlur,K=e.onChange,_=e.onChangeText,p=e.onContentSizeChange,H=e.onFocus,$=e.onKeyPress,N=e.onLayout,ee=e.onMoveShouldSetResponder,te=e.onMoveShouldSetResponderCapture,ne=e.onResponderEnd,re=e.onResponderGrant,ae=e.onResponderMove,oe=e.onResponderReject,le=e.onResponderRelease,ue=e.onResponderStart,ie=e.onResponderTerminate,ce=e.onResponderTerminationRequest,se=e.onScrollShouldSetResponder,de=e.onScrollShouldSetResponderCapture,B=e.onSelectionChange,fe=e.onSelectionChangeShouldSetResponder,ve=e.onSelectionChangeShouldSetResponderCapture,he=e.onStartShouldSetResponder,Se=e.onStartShouldSetResponderCapture,I=e.onSubmitEditing,me=e.placeholderTextColor,j=e.readOnly,Ce=j===void 0?!1:j,Re=e.returnKeyType,q=e.rows,A=e.secureTextEntry,C=A===void 0?!1:A,x=e.selection,ge=e.selectTextOnFocus,G=e.spellCheck,a,R;if(d!=null)R=d,d==="email"?a="email":d==="tel"?a="tel":d==="search"?a="search":d==="url"?a="url":a="text";else if(z!=null)switch(z){case"email-address":a="email";break;case"number-pad":case"numeric":R="numeric";break;case"decimal-pad":R="decimal";break;case"phone-pad":a="tel";break;case"search":case"web-search":a="search";break;case"url":a="url";break;default:a="text"}C&&(a="password");var f=u.useRef({height:null,width:null}),s=u.useRef(null),b=u.useRef(null),V=u.useRef(!1);u.useEffect(()=>{s.current&&b.current&&J(s.current,b.current),V.current=C},[C]);var T=u.useCallback(t=>{if(c&&p&&t!=null){var r=t.scrollHeight,o=t.scrollWidth;(r!==f.current.height||o!==f.current.width)&&(f.current.height=r,f.current.width=o,p({nativeEvent:{contentSize:{height:f.current.height,width:f.current.width}}}))}},[c,p]),ye=u.useMemo(()=>t=>{t!=null&&(t.clear=function(){t!=null&&(t.value="")},t.isFocused=function(){return t!=null&&S.currentlyFocusedField()===t},T(t))},[T]);function pe(t){S._currentlyFocusedNode=null,D&&(t.nativeEvent.text=t.target.value,D(t))}function xe(t){var r=t.target,o=r.value;t.nativeEvent.text=o,T(r),K&&K(t),_&&_(o)}function be(t){var r=t.target;H&&(t.nativeEvent.text=r.value,H(t)),r!=null&&(S._currentlyFocusedNode=r,U&&(r.value=""),ge&&(k!=null&&clearTimeout(k),k=setTimeout(()=>{r!=null&&r.select()},0)))}function Te(t){var r=t.target;t.stopPropagation();var o=!c,E=y??o,h=t.nativeEvent,W=nt(h);$&&$(t),t.key==="Enter"&&!t.shiftKey&&!W&&!t.isDefaultPrevented()&&((y||!c)&&I&&(t.preventDefault(),h.text=t.target.value,I(t)),E&&r!=null&&setTimeout(()=>r.blur(),0))}function Ee(t){try{var r=t.target,o=r.selectionStart,E=r.selectionEnd,h={start:o,end:E};B&&(t.nativeEvent.selection=h,t.nativeEvent.text=t.target.value,B(t)),V.current===C&&(b.current=h)}catch{}}Je(()=>{var t=s.current;t!=null&&x!=null&&J(t,x),document.activeElement===t&&(S._currentlyFocusedNode=t)},[s,x]);var ke=c?"textarea":"input";Qe(s,N),Ue(s,{onMoveShouldSetResponder:ee,onMoveShouldSetResponderCapture:te,onResponderEnd:ne,onResponderGrant:re,onResponderMove:ae,onResponderReject:oe,onResponderRelease:le,onResponderStart:ue,onResponderTerminate:ie,onResponderTerminationRequest:ce,onScrollShouldSetResponder:se,onScrollShouldSetResponderCapture:de,onSelectionChangeShouldSetResponder:fe,onSelectionChangeShouldSetResponderCapture:ve,onStartShouldSetResponder:he,onStartShouldSetResponderCapture:Se});var we=Ke(),Oe=we.direction,n=tt(e);n.autoCapitalize=v,n.autoComplete=m||g||"on",n.autoCorrect=F?"on":"off",n.dir=M!==void 0?M:"auto",n.enterKeyHint=Y||Re,n.inputMode=R,n.onBlur=pe,n.onChange=xe,n.onFocus=be,n.onKeyDown=Te,n.onSelect=Ee,n.readOnly=Ce===!0||X===!1,n.rows=c?q??Z:1,n.spellCheck=G??F,n.style=[{"--placeholderTextColor":me},w.textinput$raw,w.placeholder,e.style,Q&&w.caretHidden],n.type=c?void 0:a;var Pe=Xe(n),Fe=Ye(s,Pe,ye,l);n.ref=Fe;var Me=e.lang!=null?_e(e.lang):null,ze=e.dir||Me,Le=ze||Oe,De=He(ke,n,{writingDirection:Le});return De});O.displayName="TextInput";O.State=S;var w=$e.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"},caretHidden:{caretColor:"transparent"}});const ut=O;export{ut as T};
