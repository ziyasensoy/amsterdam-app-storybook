import{j as t}from"./jsx-runtime-ffb262ed.js";import{S as l,P as c}from"./index-2c0e5a72.js";import{C as p}from"./Center-7c2c9c9f.js";import{D as e}from"./types-65ac26c5.js";import{e as m}from"./useThemable-4f8c02a7.js";import{S as d}from"./index-3ab680be.js";const u={[e.up]:"M 16 0 L 32 16 L 0 16 L 16 0",[e.down]:"M 16 16 L 0 0 L 32 0 L 16 16",[e.left]:"M 0 16 L 16 0 L 16 32 L 0 16",[e.right]:"M 16 16 L 0 0 L 0 32 L 16 16"},o=({direction:r})=>{const s=m(g),[a,i,n]=[e.up,e.down].includes(r)?[32,16,"0 0 32 16"]:[16,32,"0 0 16 32"];return t.jsx(p,{children:t.jsx(l,{height:i,style:h.svg,viewBox:n,width:a,children:t.jsx(c,{d:u[r],...s})})})},g=({color:r})=>({fill:r.background.inverse}),h=d.create({svg:{margin:-.5}});try{o.displayName="Triangle",o.__docgenInfo={description:"",displayName:"Triangle",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"down"'},{value:'"left"'},{value:'"right"'},{value:'"up"'}]}}}}}catch{}export{o as T};
