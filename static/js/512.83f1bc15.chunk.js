"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[512,743],{512:(a,e,l)=>{l.r(e),l.d(e,{CarModal:()=>C});var t=l(791);const o=l.p+"static/media/icons.a1b870d457e2cfd1e28f038db23ac788.svg",s="SVGimage_Icon__Gb8M3";var c=l(184);const n=a=>{let{name:e}=a;return(0,c.jsx)("svg",{className:s,children:(0,c.jsx)("use",{xlinkHref:"".concat(o,"#").concat(e)})})};var d=l(843),r=l(743),i=l(351);const C=a=>{let{carId:e,onClose:l}=a;const[o]=(0,t.useState)(d.N.find((a=>a.id===e))),[s,C]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const a=a=>{"keydown"===a.type&&"Escape"===a.key&&l()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}}),[l]),(0,c.jsx)("div",{className:r.default.CarModalBackdrop,children:(0,c.jsxs)("div",{className:r.default.CarModalContainer,children:[(0,c.jsx)("div",{className:r.default.CarModalCloseButtonContainer,children:(0,c.jsx)("button",{className:r.default.CarModalCloseButton,onClick:l,onMouseOver:()=>{C(!0)},onMouseLeave:()=>{C(!1)},children:(0,c.jsx)(n,{className:r.default.CarModalCloseButtonIcon,name:s?"close-hover":"close"})})}),(0,c.jsx)("img",{className:r.default.CarModalImage,src:"{car.img}",alt:""}),(0,c.jsxs)("h3",{className:"".concat(r.default.CarModalHeader," ").concat(i.Bo),children:[(0,c.jsx)("span",{children:o.make})," ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.model}),","," ",(0,c.jsx)("span",{children:o.year})]}),(0,c.jsxs)("ul",{className:r.default.CarModalItems,children:[(0,c.jsx)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:o.address.split(", ")[1]}),(0,c.jsx)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:o.address.split(", ")[2]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:["Id: ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.id})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:["Year: ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.year})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:["Type: ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.type})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:["Fuel Consumption:"," ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.fuelConsumption})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:["Engine Size:"," ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.engineSize})]})]}),(0,c.jsx)("p",{className:"".concat(r.default.CarModalDescription," ").concat(i.Ft),children:o.description}),(0,c.jsx)("h4",{className:"".concat(r.default.CarModalSubHeader," ").concat(i.Bo),children:"Accessories and functionalities:"}),(0,c.jsxs)("ul",{className:r.default.CarModalItems,children:[o.accessories.map(((a,e)=>(0,c.jsx)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:a},e))),o.functionalities.map(((a,e)=>(0,c.jsx)("li",{className:"".concat(r.default.CarModalItem," ").concat(i.Ft),children:a},e)))]}),(0,c.jsxs)("h4",{className:"".concat(r.default.CarModalSubHeader," ").concat(i.Bo),children:["Rental Conditions:"," "]}),(0,c.jsxs)("ul",{className:r.default.CarModalRentalItems,children:[(0,c.jsxs)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(i.xZ),children:["Minimum age:"," ",(0,c.jsx)("span",{className:"".concat(r.default.CarModalItemValue," ").concat(i.tV),children:o.rentalConditions.split("\n")[0].split(" ")[2]})]}),(0,c.jsx)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(i.xZ),children:o.rentalConditions.split("\n")[1]}),(0,c.jsx)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(i.xZ),children:o.rentalConditions.split("\n")[2]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(i.xZ),children:["Mileage:"," ",(0,c.jsx)("span",{className:"".concat(r.default.CarModalItemValue," ").concat(i.tV),children:o.mileage})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(i.xZ),children:["Price:"," ",(0,c.jsx)("span",{className:"".concat(r.default.CarModalItemValue," ").concat(i.tV),children:o.rentalPrice})]})]}),(0,c.jsx)("button",{className:"".concat(r.default.CarModalSubmitButton," ").concat(i.tY),children:"Rental car"})]})})}},351:(a,e,l)=>{l.d(e,{Fy:()=>d,tY:()=>s,Bo:()=>o,Ft:()=>t,tV:()=>n,xZ:()=>c});const t="Fonts_ManropeR__caPUr",o="Fonts_ManropeM__jMix4",s="Fonts_ManropeB__3RoFy",c="Fonts_MontserratR__swdvC",n="Fonts_MontserratB__Dfn8q",d="Fonts_DancingScriptR__qVFET"},743:(a,e,l)=>{l.r(e),l.d(e,{default:()=>t});const t={CarModalBackdrop:"CarModal_CarModalBackdrop__P0Ps6",CarModalContainer:"CarModal_CarModalContainer__y+Z2C",CarModalCloseButtonContainer:"CarModal_CarModalCloseButtonContainer__3BnWE",CarModalCloseButton:"CarModal_CarModalCloseButton__UWbhN",CarModalCloseButtonIcon:"CarModal_CarModalCloseButtonIcon__siQWz",CarModalImage:"CarModal_CarModalImage__lrFYi",CarModalHeader:"CarModal_CarModalHeader__NK-5k",CarModalItems:"CarModal_CarModalItems__UAuAQ",CarModalItem:"CarModal_CarModalItem__LZWmG",CarModalItemValue:"CarModal_CarModalItemValue__0hmsF",CarModalDescription:"CarModal_CarModalDescription__tyoBH",CarModalSubHeader:"CarModal_CarModalSubHeader__00zhf",CarModalRentalItems:"CarModal_CarModalRentalItems__a18S7",CarModalRentalItem:"CarModal_CarModalRentalItem__lOBaK",CarModalSubmitButton:"CarModal_CarModalSubmitButton__q9we5"}}}]);
//# sourceMappingURL=512.83f1bc15.chunk.js.map