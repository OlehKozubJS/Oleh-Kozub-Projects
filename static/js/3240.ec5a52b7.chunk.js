"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[3240,634,629,324,3369,9844,2014,1629,1470],{634:(e,s,n)=>{n.r(s),n.d(s,{getGamut:()=>o});var m=n(324);function o(e,s,n,o){const{scheme:t}=m.modes.find((e=>{e.name}));for(let m=0;m<=7;m+=1){const o=(e+m)%7,t=(s+mode[m])%12+n;gamutArray.push(getSoundAndSign(o,t))}return gamutArray}},629:(e,s,n)=>{n.r(s),n.d(s,{getSoundData:()=>o});var m=n(324);const o=(e,s,n)=>{const o=e%7,t=s%12,a=n+Math.floor(e/7),{name:r,semitones:d}=m.commonSounds.find((e=>e.degrees===o)),{name:i}=m.signs.find((e=>e.semitones===t-d));return{name:r,sign:i,octave:m.octaves[a]}}},3240:(e,s,n)=>{n.r(s),n.d(s,{getGamut:()=>m.getGamut,getSoundData:()=>o.getSoundData});var m=n(634),o=n(629)},3369:(e,s,n)=>{n.r(s),n.d(s,{commonSounds:()=>m});const m=[{name:"\u0414\u043e",degrees:1,semitones:1},{name:"\u0420\u0435",degrees:2,semitones:3},{name:"\u041c\u0456",degrees:3,semitones:5},{name:"\u0424\u0430",degrees:4,semitones:6},{name:"\u0421\u043e\u043b\u044c",degrees:5,semitones:8},{name:"\u041b\u044f",degrees:6,semitones:10},{name:"\u0421\u0456",degrees:7,semitones:12}]},324:(e,s,n)=>{n.r(s),n.d(s,{commonSounds:()=>m.commonSounds,intervals:()=>a.intervals,modes:()=>r.modes,octaves:()=>t.octaves,signs:()=>o.signs});var m=n(3369),o=n(1470),t=n(1629),a=n(9844),r=n(2014)},9844:(e,s,n)=>{n.r(s),n.d(s,{intervals:()=>m});const m=[{name:"\u0427\u0438\u0441\u0442\u0430 \u043f\u0440\u0438\u043c\u0430",degrees:0,semitones:0},{name:"\u041c\u0430\u043b\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",degrees:1,semitones:1},{name:"\u0412\u0435\u043b\u0438\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",degrees:1,semitones:2},{name:"\u041c\u0430\u043b\u0430 \u0442\u0435\u0440\u0446\u0456\u044f",degrees:2,semitones:3},{name:"\u0412\u0435\u043b\u0438\u043a\u0430 \u0442\u0435\u0440\u0446\u0456\u044f",degrees:2,semitones:4},{name:"\u0427\u0438\u0441\u0442\u0430 \u043a\u0432\u0430\u0440\u0442\u0430",degrees:3,semitones:5},{name:"\u0417\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u0430 \u043a\u0432\u0430\u0440\u0442\u0430",degrees:3,semitones:6},{name:"\u0417\u043c\u0435\u043d\u0448\u0435\u043d\u0430 \u043a\u0432\u0456\u043d\u0442\u0430",degrees:4,semitones:6},{name:"\u0427\u0438\u0441\u0442\u0430 \u043a\u0432\u0456\u043d\u0442\u0430",degrees:4,semitones:7},{name:"\u041c\u0430\u043b\u0430 \u0441\u0435\u043a\u0441\u0442\u0430",degrees:5,semitones:8},{name:"\u0412\u0435\u043b\u0438\u043a\u0430 \u0441\u0435\u043a\u0441\u0442\u0430",degrees:5,semitones:9},{name:"\u041c\u0430\u043b\u0430 \u0441\u0435\u043f\u0442\u0438\u043c\u0430",degrees:6,semitones:10},{name:"\u0412\u0435\u043b\u0438\u043a\u0430 \u0441\u0435\u043f\u0442\u0438\u043c\u0430",degrees:6,semitones:11},{name:"\u0427\u0438\u0441\u0442\u0430 \u043e\u043a\u0442\u0430\u0432\u0430",degrees:7,semitones:12}]},2014:(e,s,n)=>{n.r(s),n.d(s,{modes:()=>m});const m=[{name:"\u043c\u0430\u0436\u043e\u0440",scheme:[0,2,4,5,7,9,11,12]},{name:"\u043c\u0456\u043d\u043e\u0440",scheme:[0,2,3,5,7,8,10,12]}]},1629:(e,s,n)=>{n.r(s),n.d(s,{octaves:()=>m});const m=[" \u0441\u0443\u0431\u043a\u043e\u043d\u0442\u0440\u043e\u043a\u0442\u0430\u0432\u0438"," \u043a\u043e\u043d\u0442\u0440\u043e\u043a\u0442\u0430\u0432\u0438"," \u0432\u0435\u043b\u0438\u043a\u043e\u0457 \u043e\u043a\u0442\u0430\u0432\u0438"," \u043c\u0430\u043b\u043e\u0457 \u043e\u043a\u0442\u0430\u0432\u0438"," \u043f\u0435\u0448\u043e\u0457 \u043e\u043a\u0442\u0430\u0432\u0438"," \u0434\u0440\u0443\u0433\u043e\u0457 \u043e\u043a\u0442\u0430\u0432\u0438"," \u0442\u0440\u0435\u0442\u044c\u043e\u0457 \u043e\u043a\u0442\u0430\u0432\u0438"," \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u0457 \u043e\u043a\u0442\u0430\u0432\u0438"]},1470:(e,s,n)=>{n.r(s),n.d(s,{signs:()=>m});const m=[{name:"-\u0434\u0443\u0431\u043b\u044c-\u0431\u0435\u043c\u043e\u043b\u044c",semitones:-2},{name:"-\u0431\u0435\u043c\u043e\u043b\u044c",semitones:-1},{name:"",semitones:0},{name:"-\u0434\u0456\u0454\u0437",semitones:1},{name:"-\u0434\u0443\u0431\u043b\u044c-\u0434\u0456\u0454\u0437",semitones:2}]}}]);
//# sourceMappingURL=3240.ec5a52b7.chunk.js.map