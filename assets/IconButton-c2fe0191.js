import{v as c,j as t,a as l,S as p}from"./useThemable-3e929d60.js";import{r as m}from"./index-e67e0a49.js";import{c as u}from"./config-55b2a55c.js";import{B as d}from"./Badge-df30162b.js";import{R as f}from"./Row-3c3de604.js";import{I as g}from"./types-e7c584cc.js";import{P as h}from"./index-38d82cdc.js";import{V as y}from"./index-e43da3a9.js";const r=m.forwardRef(({badgeValue:o,icon:e,...n},a)=>{const s=c(b),i=(u.minTouchSize-g[e.props.size??"md"])/2;return t(f,{align:"start",valign:"center",children:l(h,{accessibilityRole:"button",hitSlop:i,ref:a,...n,children:[e,o?t(y,{style:s.badgePosition,children:t(d,{value:o,variant:"on-icon"})}):null]})})}),b=({size:o})=>{const e=o.spacing.sm;return p.create({badgePosition:{position:"absolute",top:-e,right:-e,left:-e,alignItems:"flex-end"}})};try{r.displayName="IconButton",r.__docgenInfo={description:"",displayName:"IconButton",props:{badgeValue:{defaultValue:null,description:"The value for a badge to be displayed on top of the icon.",name:"badgeValue",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"The icon component to use for the button.",name:"icon",required:!0,type:{name:"ReactElement<IconProps, string | JSXElementConstructor<any>>"}}}}}catch{}export{r as I};
//# sourceMappingURL=IconButton-c2fe0191.js.map
