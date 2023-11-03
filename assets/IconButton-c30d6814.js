import{d as c,j as o,a as l,S as p}from"./useThemable-05c0eaf9.js";import{r as m}from"./index-e67e0a49.js";import{c as u}from"./config-55b2a55c.js";import{B as d}from"./Badge-7d4b8daa.js";import{R as f}from"./Row-9ce85e8b.js";import{I as g}from"./types-e7c584cc.js";import{P as h}from"./index-fc5a9d02.js";import{V as y}from"./index-df3ac05d.js";const n=m.forwardRef(({badgeValue:t,icon:e,...r},a)=>{const i=c(b),s=(u.minTouchSize-g[e.props.size??"md"])/2;return o(f,{align:"start",valign:"center",children:l(h,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",hitSlop:s,ref:a,...r,children:[e,t?o(y,{style:i.badgePosition,children:o(d,{value:t,variant:"on-icon"})}):null]})})}),b=({size:t})=>{const e=t.spacing.sm;return p.create({badgePosition:{position:"absolute",top:-e,right:-e,left:-e,alignItems:"flex-end"}})};try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{badgeValue:{defaultValue:null,description:"The value for a badge to be displayed on top of the icon.",name:"badgeValue",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"The icon component to use for the button.",name:"icon",required:!0,type:{name:"ReactElement<IconProps, string | JSXElementConstructor<any>>"}}}}}catch{}export{n as I};
//# sourceMappingURL=IconButton-c30d6814.js.map
