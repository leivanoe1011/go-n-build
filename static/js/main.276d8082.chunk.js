(this["webpackJsonpgo-n-build"]=this["webpackJsonpgo-n-build"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(50),r=c.n(s),o=c(15),i=c(3),l=c(4),j=(c(54),c(6)),d=c(16),u={logout:function(){var e=Object(d.a)(Object(j.a)().mark((function e(){var t,c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/user/logout");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),login:function(){var e=Object(d.a)(Object(j.a)().mark((function e(t){var c,n,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})},e.next=3,fetch("http://localhost:8000/user/login",c);case 3:return n=e.sent,e.next=6,n.json();case 6:if(401===(a=e.sent).status){e.next=11;break}return e.abrupt("return",a);case 11:return e.abrupt("return",{isAuthenticated:!0,data:a});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(d.a)(Object(j.a)().mark((function e(t){var c,n,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})},e.next=3,fetch("http://localhost:8000/user/register",c);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=u,m=c(51),h=c.n(m),x=c(25),O=c.n(x),f=O.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:8e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",O.a.stopTimer),e.addEventListener("mouseleave",O.a.resumeTimer)}}),p=function(e,t){f.fire({icon:e,title:t})},v=c(0),g=Object(n.createContext)(),N=function(e){var t=e.children,c=Object(n.useState)(null),a=Object(o.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(null),l=Object(o.a)(i,2),j=l[0],d=l[1],u=Object(n.useState)(!1),b=Object(o.a)(u,2),m=b[0],x=b[1],O=Object(n.useState)(""),f=Object(o.a)(O,2),N=f[0],y=f[1];return Object(n.useEffect)((function(){}),[]),Object(v.jsx)("div",{children:Object(v.jsx)(g.Provider,{value:{userId:j,setUserId:d,isAuthenticated:m,setIsAuthenticated:x,role:N,setRole:y,setupSocket:function e(){var t=localStorage.getItem("CC_Token"),c=localStorage.getItem("CC_role");if(t&&!s){var n=h()("http://localhost:8000",{query:{token:localStorage.getItem("CC_Token"),role:localStorage.getItem("CC_role")}});n.on("disconnect",(function(){r(null),setTimeout(e,3e3),p("error","Socket Disconnected!"),x(!1)})),n.on("connect",(function(){p("success","Socket Connected!")})),r(n),x(!0),y(c)}},socket:s},children:t})})};var y=function(){var e=c(90).default,t=Object(n.useContext)(g),a=(t.setIsAuthenticated,t.role,null),s=Object(n.useState)("clear"),r=Object(o.a)(s,2),i=r[0],j=r[1];return Object(n.useEffect)((function(){return a=document.addEventListener("scroll",(function(e){document.scrollingElement.scrollTop>=120?"bg-dark"!==i&&j("bg-dark"):"top"!==i&&j("clear")})),function(){document.removeEventListener("scroll",a)}}),[i]),Object(v.jsx)("div",{children:Object(v.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(v.jsx)(l.b,{className:"nav-link",to:"/",children:Object(v.jsx)("img",{src:e})}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(v.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(l.b,{className:"nav-link",to:"/WhatWeDo",children:"WHAT WE DO"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(l.b,{className:"nav-link",to:"/PastProject",children:"PAST PROJECTS"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(l.b,{className:"nav-link",to:"/#contact",children:"CURRENT PROJECTS"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(l.b,{className:"nav-link",to:"/#contact",children:"Contact us"})})]}),Object(v.jsx)("span",{className:"navbar-text",children:Object(v.jsx)("button",{type:"button",className:"btn btn-danger",children:"DONATE"})})]})]})})};c(49);var I=function(e){return Object(v.jsx)("div",{className:"main-sec about-us-section parallax",children:e.children})};var C=function(){return Object(v.jsx)("div",{className:"mt-4",children:"Footer"})},E=c(17),w=c(24),S=["component"],T=function(e){var t=e.component,c=Object(w.a)(e,S),a=Object(n.useContext)(g).isAuthenticated;return Object(v.jsx)(i.b,Object(E.a)(Object(E.a)({},c),{},{render:function(e){return a?Object(v.jsx)(i.a,{to:{pathname:"/",state:{from:e.location}}}):Object(v.jsx)(t,Object(E.a)({},e))}}))};c(95);var k=function(){var e=c(96).default;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"row justify-content-lg-center wow animate__animated animate__fadeInLeft animate__slower",children:[Object(v.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-6 align-self-center",children:Object(v.jsx)("img",{src:e})}),Object(v.jsxs)("div",{className:"col-sm-12 col-md-4 col-lg-4 align-self-center",children:[Object(v.jsx)("h1",{className:"display-4",children:"ABOUT US"}),Object(v.jsx)("p",{className:"lead",children:"Go and Build it\u2019s an organization committed to improve health and safety living conditions for families in extreme poverty, through the construction of sustainable homes; providing a secure and dignified place to live."})]})]})})};var A=function(){var e=c(97).default;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"row d-flex justify-content-center",children:Object(v.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12 text-center p-4 m-5 after-about",children:Object(v.jsx)("div",{className:"row d-flex justify-content-center",children:Object(v.jsxs)("div",{className:"col-sm-12 col-md-10 col-lg-10",children:[Object(v.jsxs)("h1",{className:"after-about-body m-5",children:[Object(v.jsx)("p",{className:"after-about-body",children:"A LACK OF ELECTRICITY IS CREATING AN"}),Object(v.jsx)("p",{className:"after-about-body",children:"ENDLESS CYCLE OF POVERTY"})]}),Object(v.jsxs)("h5",{children:[Object(v.jsxs)("p",{className:"after-about-body",children:["Nearly 1 billion people around the world are without electricity and live in darkness. They spend up to 30% of their ",Object(v.jsx)("br",{})," income on dangerous fuel sources just to have light, and it keeps them in a cycle of poverty ."]}),Object(v.jsx)("p",{className:"after-about-body m-4",children:"It leaves them powerless."})]})]})})})}),Object(v.jsx)("div",{className:"row  d-flex justify-content-center wow animate__animated animate__fadeInUp animate__slower",children:Object(v.jsx)("div",{className:"col-sm-12 col-md-10 col-lg-10 align-self-center d-flex justify-content-center",children:Object(v.jsx)("img",{src:e})})})]})};var R=function(){var e=c(98).default;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"row d-flex justify-content-center",children:Object(v.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12 text-center p-4 m-5 after-about",children:Object(v.jsx)("div",{className:"row d-flex justify-content-center",children:Object(v.jsxs)("div",{className:"col-sm-12 col-md-10 col-lg-10",children:[Object(v.jsxs)("h1",{className:"after-about-body m-5",children:[Object(v.jsx)("p",{className:"after-about-body",children:"A LACK OF ELECTRICITY IS CREATING AN"}),Object(v.jsx)("p",{className:"after-about-body",children:"ENDLESS CYCLE OF POVERTY"})]}),Object(v.jsxs)("h5",{children:[Object(v.jsxs)("p",{className:"after-about-body",children:["Nearly 1 billion people around the world are without electricity and live in darkness. They spend up to 30% of their ",Object(v.jsx)("br",{})," income on dangerous fuel sources just to have light, and it keeps them in a cycle of poverty ."]}),Object(v.jsx)("p",{className:"after-about-body m-4",children:"It leaves them powerless."})]})]})})})}),Object(v.jsx)("div",{className:"row d-flex justify-content-center",children:Object(v.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12 text-center p-4 m-5",children:Object(v.jsx)("div",{className:"row d-flex justify-content-center",children:Object(v.jsxs)("div",{className:"col-sm-12 col-md-10 col-lg-10",children:[Object(v.jsxs)("h1",{className:"m-2",children:[Object(v.jsx)("p",{className:"",children:"A LACK OF ELECTRICITY IS CREATING AN"}),Object(v.jsx)("p",{className:"",children:"ENDLESS CYCLE OF POVERTY"})]}),Object(v.jsxs)("h5",{children:[Object(v.jsxs)("p",{className:"",children:["Nearly 1 billion people around the world are without electricity and live in darkness. They spend up to 30% of their ",Object(v.jsx)("br",{})," income on dangerous fuel sources just to have light, and it keeps them in a cycle of poverty ."]}),Object(v.jsx)("p",{className:"m-4",children:"It leaves them powerless."})]})]})})})}),Object(v.jsx)("div",{className:"row d-flex justify-content-center wow animate__animated animate__fadeInUp animate__slower",children:Object(v.jsx)("div",{className:"col-sm-12 col-md-10 col-lg-10 align-self-center  d-flex justify-content-center",children:Object(v.jsx)("img",{src:e})})})]})};var P=function(){return Object(n.useContext)(g).isAuthenticated,Object(v.jsxs)("section",{children:[Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsx)(k,{})}),Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsx)(A,{})}),Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsx)(R,{})}),Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsx)("div",{className:"row"})})]})};var J=function(){return Object(n.useContext)(g).isAuthenticated,Object(v.jsx)("section",{children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("p",{children:"Current Projects"})})})})};var L=function(){return Object(n.useContext)(g).isAuthenticated,Object(v.jsx)("section",{children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("p",{children:"Past Project"})})})})};var W=function(){return Object(n.useContext)(g).isAuthenticated,Object(v.jsx)("section",{children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("p",{children:"What we do"})})})})};Object(i.g)((function(e){var t=a.a.createRef(),c=a.a.createRef();return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"cardHeader",children:"Login"}),Object(v.jsxs)("div",{className:"cardBody",children:[Object(v.jsxs)("div",{className:"inputGroup",children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"abc@example.com",ref:t})]}),Object(v.jsxs)("div",{className:"inputGroup",children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Your Password",ref:c})]}),Object(v.jsx)("button",{onClick:function(n){n.preventDefault();var a={email:t.current.value,password:c.current.value};b.login(a).then((function(t){console.log("After logged In"),console.log(t.data),p("success",t.data.message),localStorage.setItem("CC_Token",t.data.token),localStorage.setItem("CC_UserId",t.data.userId),e.history.push("/dashboard"),e.setupSocket()})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.message&&p("error",e.response.data.message)}))},children:"Login"})]})]})}));(function(){var e=Object(d.a)(Object(j.a)().mark((function e(t){var c,n,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("CC_Token"),"Content-Type":"application/json"},body:JSON.stringify({id:t})},e.next=3,fetch("http://localhost:8000/messages/getAllMessages",c);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))})(),function(){var e=Object(d.a)(Object(j.a)().mark((function e(t){var c,n,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})},e.next=3,fetch("http://localhost:8000/chatroom/getChatId",c);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(d.a)(Object(j.a)().mark((function e(t){var c,n,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("CC_Token"),"Content-Type":"application/json"},body:JSON.stringify({name:t})},e.next=3,fetch("http://localhost:8000/chatroom/createChatroom",c);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(d.a)(Object(j.a)().mark((function e(){var t,c,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("CC_Token"),"Content-Type":"application/json"}},e.next=3,fetch("http://localhost:8000/chatroom",t);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))}();c(99);var F=function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(i.d,{children:[Object(v.jsx)(T,{exact:!0,path:"/",component:P}),Object(v.jsx)(T,{exact:!0,path:"/PastProject",component:L}),Object(v.jsx)(T,{exact:!0,path:"/CurrentProject",component:J}),Object(v.jsx)(T,{exact:!0,path:"/WhatWeDo",component:W})]})})},X=c(5),U=Object(X.a)();var Y=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"navContainer",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(y,{className:"row"})})}),Object(v.jsx)(I,{children:Object(v.jsx)(F,{history:U})}),Object(v.jsx)("footer",{className:"container-fluid",children:Object(v.jsx)(C,{})})]})};c(100),c(101);r.a.render(Object(v.jsx)(N,{children:Object(v.jsx)(l.a,{children:Object(v.jsx)(Y,{})})}),document.getElementById("root"))},49:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t),t.default="data:image/png;base64,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"},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/poorKidImage_25Percent.adb04727.jpg"},97:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/My project.35a63f7a.jpg"},98:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/poverty-housing-guatemala.34bfc399.jpg"},99:function(e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.276d8082.chunk.js.map