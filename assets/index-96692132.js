import{i as w}from"./invariant-df383171.js";import{b as c}from"./useThemable-2475a59d.js";import{r as h}from"./index-e67e0a49.js";var s={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},r={},f=c;function u(){if(c){var t=window,e,n;if(t.visualViewport){var i=t.visualViewport;e=Math.round(i.height*i.scale),n=Math.round(i.width*i.scale)}else{var a=t.document.documentElement;e=a.clientHeight,n=a.clientWidth}s.window={fontScale:1,height:e,scale:t.devicePixelRatio||1,width:n},s.screen={fontScale:1,height:t.screen.height,scale:t.devicePixelRatio||1,width:t.screen.width}}}function l(){u(),Array.isArray(r.change)&&r.change.forEach(t=>t(s))}class o{static get(e){return f&&(f=!1,u()),w(s[e],"No dimension set for key "+e),s[e]}static set(e){e&&(c?w(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(s.screen=e.screen),e.window!=null&&(s.window=e.window)))}static addEventListener(e,n){return r[e]=r[e]||[],r[e].push(n),{remove:()=>{this.removeEventListener(e,n)}}}static removeEventListener(e,n){Array.isArray(r[e])&&(r[e]=r[e].filter(i=>i!==n))}}c&&(window.visualViewport?window.visualViewport.addEventListener("resize",l,!1):window.addEventListener("resize",l,!1));function E(){var t=h.useState(()=>o.get("window")),e=t[0],n=t[1];return h.useEffect(()=>{function i(a){var d=a.window;d!=null&&n(d)}return o.addEventListener("change",i),n(o.get("window")),()=>{o.removeEventListener("change",i)}},[]),e}export{o as D,E as u};
//# sourceMappingURL=index-96692132.js.map
