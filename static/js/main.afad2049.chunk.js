(this["webpackJsonphr-net"]=this["webpackJsonphr-net"]||[]).push([[0],{133:function(e,a,t){},135:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},266:function(e,a,t){},274:function(e,a,t){},276:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),c=t(24),n=t.n(c),r=(t(133),t(17)),i=t(9),o=t(33),b=[{value:"AK",label:"Alaska"},{value:"AL",label:"Alabama"},{value:"AR",label:"Arkansas"},{value:"AS",label:"American Samoa"},{value:"AZ",label:"Arizona"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"CT",label:"Connecticut"},{value:"DC",label:"District of Columbia"},{value:"DE",label:"Delaware"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"GU",label:"Guam"},{value:"HI",label:"Hawaii"},{value:"IA",label:"Iowa"},{value:"ID",label:"Idaho"},{value:"IL",label:"Illinois"},{value:"IN",label:"Indiana"},{value:"KS",label:"Kansas"},{value:"KY",label:"Kentucky"},{value:"LA",label:"Louisiana"},{value:"MA",label:"Massachusetts"},{value:"MD",label:"Maryland"},{value:"ME",label:"Maine"},{value:"MI",label:"Michigan"},{value:"MN",label:"Minnesota"},{value:"MO",label:"Missouri"},{value:"MS",label:"Mississippi"},{value:"MT",label:"Montana"},{value:"NC",label:"North Carolina"},{value:"ND",label:"North Dakota"},{value:"NE",label:"Nebraska"},{value:"NH",label:"New Hampshire"},{value:"NJ",label:"New Jersey"},{value:"NM",label:"New Mexico"},{value:"NV",label:"Nevada"},{value:"NY",label:"New York"},{value:"OH",label:"Ohio"},{value:"OK",label:"Oklahoma"},{value:"OR",label:"Oregon"},{value:"PA",label:"Pennsylvania"},{value:"PR",label:"Puerto Rico"},{value:"RI",label:"Rhode Island"},{value:"SC",label:"South Carolina"},{value:"SD",label:"South Dakota"},{value:"TN",label:"Tennessee"},{value:"TX",label:"Texas"},{value:"UT",label:"Utah"},{value:"VA",label:"Virginia"},{value:"VI",label:"Virgin Islands"},{value:"VT",label:"Vermont"},{value:"WA",label:"Washington"},{value:"WI",label:"Wisconsin"},{value:"WV",label:"West Virginia"},{value:"WY",label:"Wyoming"}],j=[{value:"sales",label:"Sales"},{value:"engineering",label:"Engineering"},{value:"hr",label:"Human Resources"},{value:"legal",label:"Legal"}],u={firstName:"",lastName:"",birthdate:new Date,startDate:new Date,street:"",city:"",state:b[0].label,zipCode:"",department:j[0].label},m="ADD_EMPLOYEE",d=["January","February","March","April","May","June","July","August","September","October","November","December"],h=t(11),O=t(126),p=function(e,a){return a.type===m?function(e,a){var t=Object(O.a)(a.employeeList);return t.push(Object(h.a)({},e)),Object(h.a)(Object(h.a)({},a),{},{employeeList:t})}(a.employee,e):e},x=s.a.createContext({employee:[],list:[],addEmployeeToList:function(){}}),N=t(1),v=function(e){var a=Object(l.useReducer)(p,{employeeList:[]}),t=Object(o.a)(a,2),s=t[0],c=t[1];return Object(N.jsx)(x.Provider,{value:{employee:[],list:s,addEmployeeToList:function(e){return c({type:m,employee:e})}},children:e.children})},f=(t(135),t.p+"static/media/logoHeader.9377b4cb.webp"),y=function(e){return Object(N.jsx)("header",{className:"header",children:Object(N.jsxs)("nav",{className:"mainNavBar",children:[Object(N.jsx)("i",{className:"fas fa-bars navBarIcon",onClick:e.toggle}),Object(N.jsx)(r.b,{to:"/",children:Object(N.jsx)("img",{src:f,alt:"navBarLogo",className:"navBarLogo"})}),Object(N.jsxs)("ul",{className:"navBarRight",children:[Object(N.jsx)("li",{className:"navBarRightItem",children:Object(N.jsxs)("div",{className:"navBarRightLink",children:[Object(N.jsx)("i",{className:"far fa-comments navBarIcon"}),Object(N.jsx)("span",{className:"badgeMessNotif",children:"3"})]})}),Object(N.jsx)("li",{className:"navBarRightItem",children:Object(N.jsxs)("div",{className:"navBarRightLink",children:[Object(N.jsx)("i",{className:"far fa-bell navBarIcon"}),Object(N.jsx)("span",{className:"badgeNotif",children:"15"})]})})]})]})})},g=(t(143),t.p+"static/media/logoSideNav.654a75ac.webp"),E=t.p+"static/media/user.3b87c899.webp",w=function(e){return Object(N.jsx)("div",{className:"sideBarOverlay ".concat(e.showSideBar?"showOverlay":"hideOverlay"," "),onClick:e.toggle,children:Object(N.jsxs)("aside",{className:"sideBar ".concat(e.showSideBar?"showSideBar":"hideSideBar"," "),onClick:function(e){return e.stopPropagation()},children:[Object(N.jsxs)(r.b,{to:"/",className:"sideBarHeader",children:[Object(N.jsx)("img",{src:g,alt:"sideBarLogo",className:"sideBarLogo"}),Object(N.jsx)("h2",{className:"sideBarTitle",children:"HR Net"}),Object(N.jsx)("div",{className:"line"})]}),Object(N.jsxs)("nav",{className:"sideBarMenu",children:[Object(N.jsxs)("article",{className:"sideBarInfoUser",children:[Object(N.jsx)("img",{src:E,alt:"userProfileImage",className:"sideBarUserImg"}),Object(N.jsx)(r.b,{to:"/",className:"sideBarUserName",children:Object(N.jsx)("h3",{children:"Clark Kent"})})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("ul",{className:"sideBarNav",role:"menu",children:[Object(N.jsx)("li",{className:"sideBarNavItem",children:Object(N.jsxs)(r.b,{to:"./",className:"sideBarNavLink",children:[Object(N.jsx)("i",{className:"fas fa-user-plus"}),Object(N.jsx)("p",{children:"New Employee"})]})}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"line"}),Object(N.jsx)("li",{className:"sideBarNavItem",children:Object(N.jsxs)(r.b,{to:"/employee-list",className:"sideBarNavLink",children:[Object(N.jsx)("i",{className:"fas fa-users"}),Object(N.jsx)("p",{children:"Employees List"})]})})]})]}),Object(N.jsxs)("section",{className:"sideNavBarFooter",children:[Object(N.jsx)("h2",{children:"HRNet \xa9 2021"}),Object(N.jsx)("p",{children:"All right reserved."}),Object(N.jsx)(r.b,{to:"/",className:"privacyPolicy",children:"Privacy Policy"})]})]})})},M=function(){var e=Object(l.useState)(!1),a=Object(o.a)(e,2),t=a[0],s=a[1],c=function(){return s(!t)};return window.addEventListener("wheel",(function(e){if(t)return s(!1)})),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(y,{toggle:c}),Object(N.jsx)(w,{showSideBar:t,toggle:c})]})},D=(t(144),t(27)),C=t(121),B=t.n(C),I=(t(145),t(165)),S=t(178),L=t(120),A=t.n(L),k=(t(164),function(e){var a=A()(1920,Object(I.default)(new Date)+1,1);return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(B.a,{ariaLabelledBy:e.inputName,renderCustomHeader:function(e){var t=e.date,l=e.changeMonth,s=e.changeYear,c=e.decreaseMonth,n=e.increaseMonth,r=e.prevMonthButtonDisabled,i=e.nextMonthButtonDisable;return Object(N.jsxs)("div",{className:"date-picker__header",children:[Object(N.jsx)("button",{type:"button",onClick:c,disabled:r,children:Object(N.jsx)("i",{className:"fas fa-chevron-left"})}),Object(N.jsxs)("select",{value:d[Object(S.default)(t)],onChange:function(e){var a=e.target.value;return l(d.indexOf(a))},children:[d.map((function(e){return Object(N.jsx)("option",{value:e,children:e},e)})),";"]}),Object(N.jsxs)("select",{value:Object(I.default)(t),onChange:function(e){var a=e.target.value;return s(a)},children:[a.map((function(e){return Object(N.jsx)("option",{value:e,children:e},e)})),";"]}),Object(N.jsx)("button",{type:"button",onClick:n,disabled:i,children:Object(N.jsx)("i",{className:"fas fa-chevron-right"})})]})},todayButton:Object(N.jsx)("i",{className:"fas fa-calendar-day"}),useWeekdaysShort:!0,showPopperArrow:!1,selected:e.newEmployee[e.inputName],onChange:function(a){e.setNewEmployee((function(t){return Object(h.a)(Object(h.a)({},t),{},Object(D.a)({},e.inputName,a))}))}})})}),T=t(125),G=t(37),F=function(e){return Object(N.jsx)(T.a,{"aria-label":e.inputName,"aria-haspopup":"listbox",className:"custom-select",options:e.options,value:{label:e.newEmployee[e.inputName]},filterOption:Object(G.b)({ignoreAccents:!1}),classNamePrefix:"custom-select",onChange:function(a){e.setNewEmployee((function(t){return Object(h.a)(Object(h.a)({},t),{},Object(D.a)({},e.inputName,a.label))}))}})},P=function(e){return Object(N.jsx)("input",{className:"formInput",id:e.inputName,type:e.inputType,name:e.inputName,"aria-labelledby":e.inputName,value:e.newEmployee[e.inputName],onChange:function(a){e.setNewEmployee((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(D.a)({},a.target.id,a.target.value))}))}})},R=t(94),H=function(){var e=Object(l.useState)(u),a=Object(o.a)(e,2),t=a[0],s=a[1],c=Object(l.useState)(""),n=Object(o.a)(c,2),i=n[0],m=n[1],d=Object(l.useContext)(x),h=Object(R.useModal)(),O=h.showModal,p=h.activeModal,v=h.handleOpenModal,f=h.handleCloseModal;return Object(N.jsxs)("section",{className:"containerWrapper",children:[Object(N.jsx)("article",{className:"formHeader",children:Object(N.jsx)("h1",{children:"NEW EMPLOYEE"})}),Object(N.jsx)("span",{className:"lineForm"}),Object(N.jsxs)("form",{action:"#",id:"createEmployee",className:"form",children:[Object(N.jsxs)("fieldset",{className:"fieldSetEmployee",children:[Object(N.jsx)("legend",{children:"EMPLOYEE"}),Object(N.jsxs)("article",{className:"formGroup",children:[Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(N.jsx)(P,{inputType:"text",inputName:"firstName",newEmployee:t,setNewEmployee:s})]}),Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(N.jsx)(P,{inputType:"text",inputName:"lastName",newEmployee:t,setNewEmployee:s})]})]}),Object(N.jsxs)("article",{className:"formGroup",children:[Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"birthdate",children:"Date of Birth"}),Object(N.jsx)(k,{inputName:"birthdate",newEmployee:t,setNewEmployee:s})]}),Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"startDate",children:"Start Date"}),Object(N.jsx)(k,{inputName:"startDate",newEmployee:t,setNewEmployee:s})]})]})]}),Object(N.jsxs)("fieldset",{className:"fieldSetAddress",children:[Object(N.jsx)("legend",{children:"ADDRESS"}),Object(N.jsxs)("article",{className:"formGroup",children:[Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"street",children:"Street"}),Object(N.jsx)(P,{inputType:"text",inputName:"street",newEmployee:t,setNewEmployee:s})]}),Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"city",children:"City"}),Object(N.jsx)(P,{inputType:"text",inputName:"city",newEmployee:t,setNewEmployee:s})]})]}),Object(N.jsxs)("article",{className:"formGroup",children:[Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"state",children:"State"}),Object(N.jsx)(F,{inputName:"state",options:b,newEmployee:t,setNewEmployee:s})]}),Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"zipCode",children:"Zip Code"}),Object(N.jsx)(P,{inputType:"number",inputName:"zipCode",newEmployee:t,setNewEmployee:s})]})]})]}),Object(N.jsxs)("fieldset",{className:"fieldSetDepartment",children:[Object(N.jsx)("legend",{children:"DEPARTMENT"}),Object(N.jsx)("article",{className:"formGroup",children:Object(N.jsxs)("div",{className:"formGroupItems",children:[Object(N.jsx)("label",{htmlFor:"department"}),Object(N.jsx)(F,{inputName:"department",options:j,newEmployee:t,setNewEmployee:s})]})})]}),Object(N.jsx)("div",{className:"fieldSetSumbit",children:Object(N.jsx)("article",{className:"formGroup",children:Object(N.jsxs)("div",{className:"formSubmitDiv",children:[Object(N.jsx)("button",{type:"button",className:"buttonDefault",onClick:function(e){if(e.preventDefault(),0===t.firstName.trim().length||0===t.lastName.trim().length||0===t.street.trim().length||0===t.city.trim().length||0===t.zipCode.trim().length)return m("Please fill in all fields");v("submitModal"),m(""),d.addEmployeeToList(t,m),s(u)},children:"Save"}),Object(N.jsxs)(R.Modal,{isOpen:O&&"submitModal"===p,close:f,addCloseOverlay:!0,children:[Object(N.jsx)("br",{}),Object(N.jsx)("h3",{children:"The employee has been registered !"}),Object(N.jsx)(r.b,{to:"/employee-list",children:Object(N.jsx)("button",{type:"button",className:"buttonDefault",children:"Go to the list"})})]})]})})}),Object(N.jsx)("span",{className:"errorMessage",children:i})]})]})},W=function(){return Object(N.jsx)("main",{children:Object(N.jsx)(H,{})})},V=(t(266),t(124)),Y=t.n(V),J=[{text:"First Name",value:"firstName"},{text:"Last Name",value:"lastName"},{text:"Date of Birth",value:"birthdate"},{text:"Start Date",value:"startDate"},{text:"Street",value:"street"},{text:"City",value:"city"},{text:"State",value:"state"},{text:"Zip Code",value:"zipCode"},{text:"Department",value:"department"}],K=t(95),U=t.n(K),z=function(){var e=Object(l.useContext)(x).list.employeeList||[];return e=e.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{birthdate:U()(e.birthdate).format("MM/DD/yyyy"),startDate:U()(e.startDate).format("MM/DD/yyyy")})})),Object(N.jsx)(Y.a,{labels:J,data:e})},Z=function(){return Object(N.jsxs)("section",{className:"containerWrapper",children:[Object(N.jsx)("article",{className:"formHeader",children:Object(N.jsx)("h1",{children:"CURRENT EMPLOYEE"})}),Object(N.jsx)("span",{className:"lineForm"}),Object(N.jsx)(z,{})]})},_=(t(274),[{path:"/",exact:!0,component:W},{path:"/employee-list",exact:!0,component:Z},{path:"*",exact:!1,component:function(){return Object(N.jsxs)("section",{className:"error",children:[Object(N.jsx)("h1",{children:"404"}),Object(N.jsx)("h3",{children:"We are sorry"}),Object(N.jsx)("p",{children:"Page not found"})]})}}]),X=function(){return Object(N.jsx)(v,{children:Object(N.jsxs)(r.a,{children:[Object(N.jsx)(M,{}),Object(N.jsx)(i.c,{children:_.map((function(e,a){return Object(N.jsx)(i.a,{path:e.path,exact:e.exact,component:e.component},a)}))})]})})};n.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(X,{})}),document.getElementById("root"))}},[[276,1,2]]]);
//# sourceMappingURL=main.afad2049.chunk.js.map