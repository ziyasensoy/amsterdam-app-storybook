import{u as t}from"./useSentry-02887f2a.js";import{S as n}from"./logging-a5858441.js";import{P as s}from"./index-9f48cdb1.js";import{L as a,A as i}from"./index-ce5d66ca.js";const c=()=>{const{sendSentryErrorLog:o}=t();return e=>{let r="";s.OS!=="android"?r=`telprompt:${e}`:r=`tel:${e}`,a.openURL(r).catch(()=>{i.alert("Sorry, deze functie is niet beschikbaar."),o(n.openPhoneUrl,"useOpenPhoneUrl.ts",{phoneUrl:r})})}};export{c as u};
