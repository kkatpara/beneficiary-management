"use strict";(self.webpackChunkbeneficiary_management=self.webpackChunkbeneficiary_management||[]).push([[233],{233:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});var n=r(43),a=r(216),t=r(858),i=r(3),d=r(813),l=r(416),c=r(579);const o=e=>{let{isEditMode:s}=e;const{register:r,handleSubmit:o,setValue:u,getValues:m,formState:{errors:p}}=(0,t.mN)({defaultValues:{name:"",address:"",country:"",pincode:""}}),[h,x]=(0,n.useState)(!1),b=(0,a.Zp)(),j=(0,i.wA)(),{id:y}=(0,a.g)(),{beneficiaries:f}=(0,i.d4)((e=>e.beneficiaries));(0,n.useEffect)((()=>{if(s){const e=f.find((e=>e.id===parseInt(null!==y&&void 0!==y?y:"")));e&&(u("name",e.name),u("address",e.address),u("country",e.country),u("pincode",e.pincode))}}),[s,y,f,u]);const N=e=>/\S/.test(e)||"Field cannot be empty";return(0,c.jsxs)("div",{className:"form-container",children:[(0,c.jsx)("h2",{children:s?"Edit Beneficiary":"Add Beneficiary"}),(0,c.jsxs)("form",{onSubmit:o((()=>x(!0))),children:[(0,c.jsxs)("label",{children:["Full Name:",(0,c.jsx)("input",{type:"text",placeholder:"Please enter First Name",...r("name",{required:"Full Name is required",validate:N}),className:p.name?"input-error":""}),p.name&&(0,c.jsx)("p",{className:"error",children:p.name.message})]}),(0,c.jsxs)("label",{children:["Address:",(0,c.jsx)("input",{type:"text",placeholder:"Please enter Address",...r("address",{required:"Address is required",validate:N}),className:p.name?"input-error":""}),p.address&&(0,c.jsx)("p",{className:"error",children:p.address.message})]}),(0,c.jsxs)("label",{className:"select-wrapper",children:["Country:",(0,c.jsxs)("select",{...r("country",{required:"Country is required"}),className:p.name?"input-error":"",style:{fontSize:14,color:"grey"},children:[!s&&(0,c.jsx)("option",{value:"",disabled:!0,children:"Please select country"}),["USA","Canada","India","Australia","Germany"].map(((e,s)=>(0,c.jsx)("option",{value:e,children:e},s)))]}),p.country&&(0,c.jsx)("p",{className:"error",children:p.country.message})]}),(0,c.jsxs)("label",{children:["PinCode:",(0,c.jsx)("input",{type:"text",placeholder:"Please enter PinCode",...r("pincode",{required:"PinCode is required",validate:e=>{const s=/^\d+$/.test(e);if(!/\S/.test(e))return"Pincode cannot be empty";if(!s)return"Pincode must be a number";return e.length>=4&&e.length<=6||"Pincode must be between 4 and 6 digits"}}),className:p.name?"input-error":""}),p.pincode&&(0,c.jsx)("p",{className:"error",children:p.pincode.message})]}),(0,c.jsx)("button",{type:"submit",children:s?"Save":"Submit"})]}),h&&(0,c.jsx)(l.A,{message:"Are you sure you want to ".concat(s?"update":"add"," the beneficiary?"),onConfirm:()=>{const e=m(),r=y?parseInt(y):0;if(s){const{id:s,...n}=e;j((0,d.rP)({id:r,...n})),b("/",{state:{showEditFlash:!0}})}else j((0,d.p8)(e)),b("/",{state:{showAddFlash:!0}});x(!1)},onCancel:()=>x(!1)})]})}},416:(e,s,r)=>{r.d(s,{A:()=>a});r(43);var n=r(579);const a=e=>{let{message:s,onConfirm:r,onCancel:a}=e;return(0,n.jsx)("div",{className:"modal",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsx)("p",{children:s}),(0,n.jsxs)("div",{className:"modal-actions",children:[(0,n.jsx)("button",{onClick:r,children:"Yes"}),(0,n.jsx)("button",{onClick:a,children:"No"})]})]})})}}}]);
//# sourceMappingURL=233.41cd2585.chunk.js.map