"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[5420,8213,5645,3237,6375,9862,9603,1457,9665,2907,1534,5750,8552,200,5159,7984,7218,9964,5471,716,3599,9237,5241,9694],{3237:(r,t,o)=>{o.r(t),o.d(t,{HourArrowStyle:()=>a,MinuteArrowStyle:()=>c,SecondArrowStyle:()=>i});var e=o(6375);const s=e.default.Arrow,a="".concat(s," ").concat(e.default.HourArrow),c="".concat(s," ").concat(e.default.MinuteArrow),i="".concat(s," ").concat(e.default.SecondArrow)},9862:(r,t,o)=>{o.r(t),o.d(t,{HourArrow:()=>a});var e=o(3237),s=o(184);const a=r=>{let{hours:t}=r;return(0,s.jsx)("div",{className:e.HourArrowStyle,style:{transform:"rotate(".concat(30*t,"deg)")}})}},9603:(r,t,o)=>{o.r(t),o.d(t,{MinuteArrow:()=>a});var e=o(3237),s=o(184);const a=r=>{let{minutes:t}=r;return(0,s.jsx)("div",{className:e.MinuteArrowStyle,style:{transform:"rotate(".concat(6*t,"deg)")}})}},1457:(r,t,o)=>{o.r(t),o.d(t,{SecondArrow:()=>a});var e=o(3237),s=o(184);const a=r=>{let{seconds:t}=r;return(0,s.jsx)("div",{className:e.SecondArrowStyle,style:{transform:"rotate(".concat(6*t,"deg)")}})}},5645:(r,t,o)=>{o.r(t),o.d(t,{HourArrow:()=>e.HourArrow,MinuteArrow:()=>s.MinuteArrow,SecondArrow:()=>a.SecondArrow});var e=o(9862),s=o(9603),a=o(1457)},2907:(r,t,o)=>{o.r(t),o.d(t,{ClockDigit:()=>a});var e=o(5750),s=o(184);const a=r=>{let{digit:t}=r;return(0,s.jsx)("div",{className:e.ClockDigitsStyle,style:{transform:"rotate(".concat(30*t,"deg)")},children:(0,s.jsx)("div",{className:e.ClockDigitStyle,style:{transform:"rotate(".concat(-30*t,"deg)")},children:t})})}},1534:(r,t,o)=>{o.r(t),o.d(t,{ClockDigits:()=>a});var e=o(2907),s=o(184);const a=()=>(0,s.jsx)("div",{children:(()=>{let r=[];for(let t=1;t<=12;t+=1)r=[...r,(0,s.jsx)(e.ClockDigit,{digit:t},t)];return r})()})},5750:(r,t,o)=>{o.r(t),o.d(t,{ClockDigitStyle:()=>a,ClockDigitsStyle:()=>s});var e=o(8552);const s=e.default.ClockDigits,a=e.default.ClockDigit},9665:(r,t,o)=>{o.r(t),o.d(t,{ClockDigits:()=>e.ClockDigits});var e=o(1534)},5159:(r,t,o)=>{o.r(t),o.d(t,{ClockMarking:()=>a});var e=o(7218),s=o(184);const a=r=>{let{marking:t}=r;return(0,s.jsx)("div",{className:e.ClockMarkingsStyle,style:{transform:"rotate(".concat(6*t,"deg)")},children:(0,s.jsx)("div",{className:e.ClockMarkingStyle})})}},7984:(r,t,o)=>{o.r(t),o.d(t,{ClockMarkings:()=>a});var e=o(5159),s=o(184);const a=()=>(0,s.jsx)("div",{children:(()=>{let r=[];for(let t=1;t<=60;t+=1)r=[...r,(0,s.jsx)(e.ClockMarking,{marking:t},t)];return r})()})},7218:(r,t,o)=>{o.r(t),o.d(t,{ClockMarkingStyle:()=>a,ClockMarkingsStyle:()=>s});var e=o(9964);const s=e.default.ClockMarkings,a=e.default.ClockMarking},200:(r,t,o)=>{o.r(t),o.d(t,{ClockMarkings:()=>e.ClockMarkings});var e=o(7984)},716:(r,t,o)=>{o.r(t),o.d(t,{DateTimeDisplay:()=>a});var e=o(3599),s=o(184);const a=r=>{let{time:t,date:o}=r;return(0,s.jsxs)("div",{className:e.DateTimeDisplayStyle,children:[(0,s.jsx)("div",{children:t}),(0,s.jsx)("div",{children:o})]})}},3599:(r,t,o)=>{o.r(t),o.d(t,{DateTimeDisplayStyle:()=>e});const e=o(9237).default.DateTimeDisplay},5471:(r,t,o)=>{o.r(t),o.d(t,{DateTimeDisplay:()=>e.DateTimeDisplay});var e=o(716)},8213:(r,t,o)=>{o.r(t),o.d(t,{ClockDigits:()=>s.ClockDigits,ClockMarkings:()=>e.ClockMarkings,DateTimeDisplay:()=>c.DateTimeDisplay,HourArrow:()=>a.HourArrow,MinuteArrow:()=>a.MinuteArrow,SecondArrow:()=>a.SecondArrow});var e=o(200),s=o(9665),a=o(5645),c=o(5471)},5420:(r,t,o)=>{o.r(t),o.d(t,{MyClock:()=>i});var e=o(2791),s=o(8213),a=o(5241),c=o(184);const i=()=>{const[r,t]=(0,e.useState)(0),[o,i]=(0,e.useState)(0),[l,n]=(0,e.useState)(0),[d,k]=(0,e.useState)(""),[u,C]=(0,e.useState)("");return(0,e.useEffect)((()=>{const r=r=>(r<10?"0":"")+r,o=setInterval((()=>{const o=new Date,e=o.getHours(),s=o.getMinutes(),a=o.getSeconds();t(e%12),i(s),n(a),C("".concat(r(e),":").concat(r(s),":").concat(r(a))),k(o.toDateString())}),1e3);return()=>{clearInterval(o)}}),[]),(0,c.jsxs)("div",{className:a.ClockFace,children:[(0,c.jsx)(s.ClockMarkings,{}),(0,c.jsx)(s.ClockDigits,{}),(0,c.jsx)(s.HourArrow,{hours:r}),(0,c.jsx)(s.MinuteArrow,{minutes:o}),(0,c.jsx)(s.SecondArrow,{seconds:l}),(0,c.jsx)(s.DateTimeDisplay,{time:u,date:d}),(0,c.jsx)("div",{className:a.ArrowAxisCover})]})}},5241:(r,t,o)=>{o.r(t),o.d(t,{ArrowAxisCover:()=>c,ClockFace:()=>a});var e=o(9694),s=o(1743);const a="".concat(e.default.ClockFace," ").concat(s.Il),c=e.default.ArrowAxisCover},1743:(r,t,o)=>{o.d(t,{Fy:()=>l,tY:()=>a,Bo:()=>s,Ft:()=>e,tV:()=>i,xZ:()=>c,Il:()=>n});const e="Fonts_ManropeR__caPUr",s="Fonts_ManropeM__jMix4",a="Fonts_ManropeB__3RoFy",c="Fonts_MontserratR__swdvC",i="Fonts_MontserratB__Dfn8q",l="Fonts_DancingScriptR__qVFET",n="Fonts_RajdhaniR__zONXt"},6375:(r,t,o)=>{o.r(t),o.d(t,{default:()=>e});const e={Arrow:"ClockArrows_Arrow__ZoIOW",SecondArrow:"ClockArrows_SecondArrow__MKq3T",MinuteArrow:"ClockArrows_MinuteArrow__DWehD",HourArrow:"ClockArrows_HourArrow__x19aD"}},8552:(r,t,o)=>{o.r(t),o.d(t,{default:()=>e});const e={ClockDigits:"ClockDigits_ClockDigits__e74nt",ClockDigit:"ClockDigits_ClockDigit__jr5ua"}},9964:(r,t,o)=>{o.r(t),o.d(t,{default:()=>e});const e={ClockMarkings:"ClockMarkings_ClockMarkings__J0JHD",ClockMarking:"ClockMarkings_ClockMarking__IibeE"}},9237:(r,t,o)=>{o.r(t),o.d(t,{default:()=>e});const e={DateTimeDisplay:"DateTimeDisplay_DateTimeDisplay__SQC3q"}},9694:(r,t,o)=>{o.r(t),o.d(t,{default:()=>e});const e={ClockFace:"MyClock_ClockFace__sAL+f",ArrowAxisCover:"MyClock_ArrowAxisCover__kMu+n"}}}]);
//# sourceMappingURL=5420.7f42ad67.chunk.js.map