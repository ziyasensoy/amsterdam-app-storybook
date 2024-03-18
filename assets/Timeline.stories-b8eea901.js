import{S as E,a as g,j as l,F as w}from"./index-1401012c.js";import{r as T}from"./index-76fb7be0.js";import{A as k}from"./Accordion-c8395ee9.js";import{I as S}from"./Icon-a8c42419.js";import{H as v}from"./HtmlContent-1c47c5a7.js";import{T as z}from"./Title-748e73f9.js";import{u as j}from"./useDeviceContext-20251673.js";import{u as R}from"./useTheme-d3d4836a.js";import{V as f}from"./index-e1b95cde.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-fa94adc7.js";import"./PressableBase-acc34bf2.js";import"./usePiwikTrackCustomEventFromProps-bbf6903e.js";import"./slugs-3d3bff99.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./development-fba0c344.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./useSentry-eca49495.js";import"./logging-a19d7dfe.js";import"./callBound-55a1829f.js";import"./index-aaef8f90.js";import"./extends-98964cd2.js";import"./Box-0c0bc980.js";import"./layoutStyles-ee44dbe0.js";import"./useThemable-f2f23b4f.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./Column-3ef9e20c.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-c9008bad.js";import"./Size-71a5dbac.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./types-e7c584cc.js";import"./index-8592d42d.js";import"./index-c1b0849e.js";import"./index-8ad79f0b.js";import"./index-37b6bf7b.js";import"./index-5d7f9d89.js";import"./index-50211726.js";import"./index-226d16f2.js";import"./index-d46a9e5a.js";import"./index-5aae214f.js";import"./Phrase-39b924bf.js";import"./ListItemMarker-8e3d05d2.js";import"./config-55b2a55c.js";import"./useIsScreenReaderEnabled-a33c4829.js";import"./useOpenMailUrl-4af91785.js";import"./useOpenPhoneUrl-d9e82a55.js";var h=function(){return h=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++){e=arguments[o];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},h.apply(this,arguments)};function V(r){return r.toLowerCase()}var $=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],P=/[^A-Z0-9]+/gi;function q(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,o=e===void 0?$:e,i=t.stripRegexp,a=i===void 0?P:i,p=t.transform,m=p===void 0?V:p,c=t.delimiter,n=c===void 0?" ":c,d=I(I(r,o,"$1\0$2"),a,"\0"),u=0,s=d.length;d.charAt(u)==="\0";)u++;for(;d.charAt(s-1)==="\0";)s--;return d.slice(u,s).split("\0").map(m).join(n)}function I(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(o,i){return o.replace(i,e)},r)}function H(r,t){var e=r.charAt(0),o=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+o:""+e.toUpperCase()+o}function A(r,t){return t===void 0&&(t={}),q(r,h({delimiter:"",transform:H},t))}const B=(r,t,e,o,i,a)=>{const{color:p,size:m,z:c}=r,n={body:{insetLeft:m.spacing.md},indicator:{size:m.spacing.lg*t},line:{width:4*t}};return E.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:n.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:m.spacing.md,backgroundColor:o?p.background.inactive:p.background.emphasis,borderRadius:n.indicator.size/2},line:{position:"absolute",top:m.spacing.md+n.indicator.size,left:(n.indicator.size-n.line.width)/2,zIndex:c.timelineLine,width:n.line.width,height:a&&!i?0:"100%",backgroundColor:o||e?p.background.inactive:p.background.emphasis}})},b=({isBeforeUpcoming:r,isLast:t,item:e,testID:o})=>{var d,u;const i=!e.collapsed,[a,p]=T.useState(i),m=R(),{fontScale:c}=j(),n=B(m,c,r,e.progress==="Aankomend",a,t);return g(f,{children:[g(f,{style:n.header,children:[l(f,{style:n.indicator,children:e.progress==="Afgelopen"&&l(S,{color:"inverse",name:"checkmark",size:"sm",testID:`${o}Icon`})}),g(k,{grow:!0,initiallyExpanded:!!i,isExpandable:!!e.body||!!((d=e.items)!=null&&d.length),onChangeExpanded:s=>p(s),testID:o,title:e.title,children:[!!e.body&&l(v,{content:e.body,testID:`${o}BodyHtmlContent`}),(u=e.items)==null?void 0:u.map(({title:s,body:D})=>g(T.Fragment,{children:[!!s&&l(z,{level:"h5",text:s}),!!D&&l(v,{content:D,testID:`${o}ItemBody${A(s)}HtmlContent`})]},s))]},e.title)]}),l(f,{style:n.line})]})};try{b.displayName="TimelineItem",b.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const _=({items:r,testID:t})=>l(w,{children:r.map((e,o)=>{var i;return l(b,{isBeforeUpcoming:((i=r[o+1])==null?void 0:i.progress)==="Aankomend",isLast:o===r.length-1,item:e,testID:`${t}${A(e.title)}TimelineItem`},e.title+o.toString())})});try{_.displayName="Timeline",_.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Oe={component:_},y={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var L,C,x;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [{
      collapsed: false,
      body: '<p>Dolor sit amet 1</p>',
      date: '',
      items: [{
        title: 'Lorem ipsum 1.1',
        body: '<p>Dolor sit amet 1.1</p>',
        date: ''
      }, {
        title: 'Lorem ipsum 1.2',
        body: '<p>Dolor sit amet 1.2</p>',
        date: ''
      }],
      progress: 'Afgelopen',
      title: 'Titel 1'
    }, {
      collapsed: true,
      body: '<p>Dolor sit amet 2</p>',
      date: '',
      items: [{
        title: 'Lorem ipsum 2.1',
        body: '<p>Dolor sit amet 2.1</p>',
        date: ''
      }],
      progress: 'Huidig',
      title: 'Titel 2'
    }, {
      collapsed: true,
      body: '<p>Dolor sit amet 3</p>',
      date: '',
      items: [{
        title: 'Lorem ipsum 3.1',
        body: '<p>Dolor sit amet 3.1</p>',
        date: ''
      }, {
        title: 'Lorem ipsum 3.2',
        body: '<p>Dolor sit amet 3.2</p>',
        date: ''
      }],
      progress: 'Aankomend',
      title: 'Titel 3'
    }]
  }
}`,...(x=(C=y.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const Ze=["Default"];export{y as Default,Ze as __namedExportsOrder,Oe as default};
