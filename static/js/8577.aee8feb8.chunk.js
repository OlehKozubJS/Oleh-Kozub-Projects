"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[8577,5630,8420,2478,3753,8615,9144,6474,9589,9020,8925,7553,6956],{2478:(t,a,n)=>{n.r(a),n.d(a,{QuizButtons:()=>e});var u=n(3753),s=n(184);const e=t=>{let{onAnswerInput:a,onEnter:n,answer:e}=t;const o=t=>{const n=Number(t.target.dataset.value),u=10*e+n;u<=100&&a(u)};return(0,s.jsxs)("div",{className:u.KeyboardButtons,children:[(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":1,children:"1"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":2,children:"2"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":3,children:"3"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":4,children:"4"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":5,children:"5"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":6,children:"6"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":7,children:"7"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":8,children:"8"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":9,children:"9"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:()=>{const t=Math.floor(e/10);a(t)},children:"C"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:o,"data-value":0,children:"0"}),(0,s.jsx)("button",{className:u.KeyboardButton,onClick:()=>{n()},children:"E"})]})}},3753:(t,a,n)=>{n.r(a),n.d(a,{KeyboardButton:()=>o,KeyboardButtons:()=>e});var u=n(8615),s=n(1743);const e=u.default.KeyboardButtons,o="".concat(u.default.KeyboardButton," ").concat(s.Fy)},8420:(t,a,n)=>{n.r(a),n.d(a,{QuizButtons:()=>u.QuizButtons});var u=n(2478)},6474:(t,a,n)=>{n.r(a),n.d(a,{Output:()=>e,Outputs:()=>s});var u=n(9589);const s=u.default.Outputs,e=u.default.Output},9020:(t,a,n)=>{n.r(a),n.d(a,{QuizOutputs:()=>e});var u=n(6474),s=n(184);const e=t=>{let{task:a,time:n,answer:e,points:o}=t;return(0,s.jsxs)("div",{className:u.Outputs,children:[(0,s.jsx)("div",{className:u.Output,children:a}),(0,s.jsx)("div",{className:u.Output,children:n}),(0,s.jsx)("div",{className:u.Output,children:e}),(0,s.jsx)("div",{className:u.Output,children:o})]})}},9144:(t,a,n)=>{n.r(a),n.d(a,{QuizOutputs:()=>u.QuizOutputs});var u=n(9020)},5630:(t,a,n)=>{n.r(a),n.d(a,{QuizButtons:()=>u.QuizButtons,QuizOutputs:()=>s.QuizOutputs});var u=n(8420),s=n(9144)},8925:(t,a,n)=>{n.r(a),n.d(a,{Container:()=>e});var u=n(7553),s=n(1743);const e="".concat(u.default.Container," ").concat(s.Fy)},6956:(t,a,n)=>{n.r(a),n.d(a,{MultiplicationQuiz:()=>r});var u=n(2791),s=n(8925),e=n(5630),o=n(184);const r=()=>{const[t,a]=(0,u.useState)(""),[n,r]=(0,u.useState)(10),[l,c]=(0,u.useState)(0),[d,i]=(0,u.useState)(0),[_,b]=(0,u.useState)(0),p=(t,a)=>t+Math.floor(Math.random()*(a+1-t)),B=()=>{i(_===l?d+1:d-1),c(0)};return(0,u.useEffect)((()=>{const t=setInterval((()=>{1===n?B():r(n-1)}),1e3);return()=>{clearInterval(t)}}),[n]),(0,u.useEffect)((()=>{(()=>{c(0),r(10);const t=p(1,10),n=p(1,10);b(t*n),a(t+" * "+n)})()}),[d]),(0,o.jsxs)("div",{className:s.Container,children:[(0,o.jsx)(e.QuizOutputs,{task:t,time:n,answer:l,points:d}),(0,o.jsx)(e.QuizButtons,{onAnswerInput:t=>{c(t)},onEnter:B,answer:l})]})}},8577:(t,a,n)=>{n.r(a),n.d(a,{MultiplicationQuiz:()=>u.MultiplicationQuiz});var u=n(6956)},1743:(t,a,n)=>{n.d(a,{Fy:()=>l,tY:()=>e,Bo:()=>s,Ft:()=>u,tV:()=>r,xZ:()=>o,Il:()=>c});const u="Fonts_ManropeR__caPUr",s="Fonts_ManropeM__jMix4",e="Fonts_ManropeB__3RoFy",o="Fonts_MontserratR__swdvC",r="Fonts_MontserratB__Dfn8q",l="Fonts_DancingScriptR__qVFET",c="Fonts_RajdhaniR__zONXt"},8615:(t,a,n)=>{n.r(a),n.d(a,{default:()=>u});const u={KeyboardButtons:"QuizButtons_KeyboardButtons__LclfO",KeyboardButton:"QuizButtons_KeyboardButton__BKBaj"}},9589:(t,a,n)=>{n.r(a),n.d(a,{default:()=>u});const u={Outputs:"QuizOutputs_Outputs__pQETl",Output:"QuizOutputs_Output__NqAxG"}},7553:(t,a,n)=>{n.r(a),n.d(a,{default:()=>u});const u={Container:"MultQuiz_Container__Oq4nt"}}}]);
//# sourceMappingURL=8577.aee8feb8.chunk.js.map