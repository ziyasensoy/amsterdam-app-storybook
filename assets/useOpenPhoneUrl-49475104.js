import{r as s}from"./index-76fb7be0.js";import{a as n}from"./usePiwikTrackCustomEventFromProps-3c7186ef.js";import{u as a,S as i}from"./useSentry-ee755448.js";import{P as l}from"./index-7ad04130.js";import{L as p,A as c}from"./index-6c64ff1e.js";const h=()=>{const{sendSentryErrorLog:e}=a(),{trackOutlink:t}=n();return s.useCallback(o=>{let r="";l.OS==="ios"?r=`telprompt:${o}`:r=`tel:${o}`,t(r),p.openURL(r).catch(()=>{c.alert("Sorry, deze functie is niet beschikbaar."),e(i.openPhoneUrl,"useOpenPhoneUrl.ts")})},[e,t])};export{h as u};
