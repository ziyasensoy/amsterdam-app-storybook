import{g as v}from"./_commonjsHelpers-de833af9.js";import{c}from"./base-color-46461b55.js";var u={OS:"web",select:n=>"web"in n?n.web:n.default,get isTesting(){return!1}};const P=u;function g(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),a=2;a<t;a++)i[a-2]=arguments[a];if(!n){var o;if(e===void 0)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=0;o=new Error(e.replace(/%s/g,function(){return String(i[h++])})),o.name="Invariant Violation"}throw o.framesToPop=1,o}}var m=g;const f=v(m);var s={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},r={},d=c;function w(){if(c){var n=window,e,t;if(n.visualViewport){var i=n.visualViewport;e=Math.round(i.height*i.scale),t=Math.round(i.width*i.scale)}else{var a=n.document.documentElement;e=a.clientHeight,t=a.clientWidth}s.window={fontScale:1,height:e,scale:n.devicePixelRatio||1,width:t},s.screen={fontScale:1,height:n.screen.height,scale:n.devicePixelRatio||1,width:n.screen.width}}}function l(){w(),Array.isArray(r.change)&&r.change.forEach(n=>n(s))}class S{static get(e){return d&&(d=!1,w()),f(s[e],"No dimension set for key "+e),s[e]}static set(e){e&&(c?f(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(s.screen=e.screen),e.window!=null&&(s.window=e.window)))}static addEventListener(e,t){return r[e]=r[e]||[],r[e].push(t),{remove:()=>{this.removeEventListener(e,t)}}}static removeEventListener(e,t){Array.isArray(r[e])&&(r[e]=r[e].filter(i=>i!==t))}}c&&(window.visualViewport?window.visualViewport.addEventListener("resize",l,!1):window.addEventListener("resize",l,!1));export{S as D,P,f as i};
