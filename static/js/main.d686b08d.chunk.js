(this.webpackJsonpmngbldnglife=this.webpackJsonpmngbldnglife||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(24),c=n.n(r),i=(n(86),n(13)),o=n(7),l=n(42),u=n(12),d=n(136),j=n(144),b=n(137),m=n(74),h=n(81),O=n(1);var g=function(e){for(var t=e.entity,n=t.options,a=t.votes,s=[],r=a.length,c=["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],i=["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],o=[],l=[],u=0;u<n.length;u++)o.push(c[u]),l.push(i[u]);if(Array.isArray(n)){var d=0;n.forEach((function(e){var t;t=function(e,t){return t.reduce((function(t,n){return n.result===e?t+=1:t}),0)}(e,a),t>0&&(s[d]=t,d++)}))}var j={labels:n,datasets:[{label:r+"# of Votes",data:s,backgroundColor:o,borderColor:l,borderWidth:1}],options:{responsive:!0}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("strong",{children:"Voting Percentage"}),Object(O.jsx)(h.a,{data:j})]})},x=Object(a.createContext)(null);var p=function(e){var t=e.voteTickets,n=Object(a.useContext)(x);if(!n)return Object(O.jsx)(u.a,{to:"/"});var s=!1,r=[],c=[];return n&&(s=n.isAdmin),t&&(c=t.filter((function(e){return e.buildingId===n.buildingId}))),c&&c.forEach((function(e){"open"===e.status&&r.push(e)})),Object(O.jsxs)(d.a,{children:[Object(O.jsx)("h1",{children:"Dashboard"}),!0===s?Object(O.jsx)(j.a.Link,{className:"btnLink",href:"#/tenants",children:"Add New Tenants"}):null,Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{className:"dashboardPieRow",children:Object(O.jsxs)(m.a,{children:["   ",Object(O.jsx)("h3",{children:"Open voting tickets results "})," "]})}),Object(O.jsx)(b.a,{children:r.map((function(e,t){return Object(O.jsx)(m.a,{md:3,sm:6,children:Object(O.jsx)(g,{entity:e})},t)}))})]})]})},f=n(138),v=n(139);var C=function(){var e="/mngbldnglife";return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{fluid:!0,className:"Jumbotron",children:Object(O.jsx)("h1",{className:"HomePageHeader",children:"Homeowner Association Management System"})}),Object(O.jsxs)("div",{className:"homePageMain",children:[Object(O.jsx)("h1",{className:"secondPHomePage",children:"Who we are"}),Object(O.jsxs)("section",{className:"homePageSectionText",children:["Communication between tenants and homeowner committee can be chalenging task.",Object(O.jsx)("br",{}),"Our aim is to ease the process and automate it simplifying the flow of Communication.",Object(O.jsx)("br",{}),"Though there are many WhatsUp groups for that matter,our added value is",Object(O.jsx)("br",{}),"to maintain and visualize the issues."]})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(b.a,{className:"homePageRow",children:[Object(O.jsxs)(m.a,{xs:12,md:4,children:[Object(O.jsx)("h2",{children:"Comitee member"}),Object(O.jsxs)("span",{className:"hpText",children:[Object(O.jsx)("br",{}),"Committee member role is to add and remove tenant members, create votings, and remove/create message on the message board.",Object(O.jsx)("br",{}),"There is only one committee member per building."]})]}),Object(O.jsx)(m.a,{xs:12,md:4,children:Object(O.jsx)(v.a,{src:e+"/images/city-homepage-project.png",fluid:!0,alt:""})})]}),Object(O.jsxs)(b.a,{className:"homePageRow2",children:[Object(O.jsx)(m.a,{xs:12,md:4,children:Object(O.jsx)(v.a,{src:e+"/images/city-homepage-2.png",fluid:!0,alt:""})}),Object(O.jsxs)(m.a,{xs:12,md:4,children:[Object(O.jsx)("h2",{children:"Tenants"}),Object(O.jsxs)("span",{className:"hpText",children:[Object(O.jsx)("br",{}),"Can view and participate: Vote on issues you care, View messages of your building, Report, manage and view issues."]})]})]})]})]})},I=n(11),y=n(143),N=n(140),w=n(141);var S=function(e){var t=e.users,n=e.onLogin,s=Object(a.useContext)(x),r=Object(a.useState)(""),c=Object(o.a)(r,2),i=c[0],d=c[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),m=b[0],h=b[1],g=Object(a.useState)(!1),p=Object(o.a)(g,2),f=p[0],v=p[1];return s?Object(O.jsx)(u.a,{to:"/dashboard"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"loginHeader",children:"Login to HOA system "}),Object(O.jsxs)("h2",{className:"loginHeader",children:["  ",Object(O.jsx)(l.b,{to:"/signup",children:"Create a new account"}),"  \xa0 if you are not registered"]}),Object(O.jsxs)(y.a,{className:"loginForm",onSubmit:function(e){e.preventDefault();var a,s=null,r=Object(I.a)(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;if(c.login(i,m)){s=c;break}}}catch(o){r.e(o)}finally{r.f()}s?n(s):v(!0)},children:[f?Object(O.jsx)(N.a,{variant:"danger",children:"Invalid credentials"}):null,Object(O.jsx)(y.a.Group,{controlId:"formBasicEmail",children:Object(O.jsx)(y.a.Control,{type:"email",placeholder:"Enter email",value:i,onChange:function(e){return d(e.target.value)}})}),Object(O.jsx)(y.a.Group,{controlId:"formBasicPassword",children:Object(O.jsx)(y.a.Control,{type:"password",placeholder:"Password",value:m,onChange:function(e){return h(e.target.value)}})}),Object(O.jsx)(w.a,{className:"submitForm",type:"submit",block:!0,children:"Login"})]})]})};var A=function(e){var t=e.onNewUser,n=Object(a.useState)(""),s=Object(o.a)(n,2),r=s[0],c=s[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),d=l[0],j=l[1],h=Object(a.useState)(""),g=Object(o.a)(h,2),x=g[0],p=g[1],f=Object(a.useState)(""),C=Object(o.a)(f,2),I=C[0],N=C[1],S=Object(a.useState)(""),A=Object(o.a)(S,2),U=A[0],k=A[1],T=Object(a.useState)(null),L=Object(o.a)(T,2),D=L[0],V=L[1],M=Object(a.useState)(""),F=Object(o.a)(M,2),H=F[0],G=F[1],P=Object(a.useState)(""),B=Object(o.a)(P,2),E=B[0],R=B[1],J=Object(a.useState)(""),Y=Object(o.a)(J,2),Q=Y[0],W=Y[1],q=Object(a.useState)(""),z=Object(o.a)(q,2),Z=z[0],X=z[1];return Z?Object(O.jsx)(u.a,{to:"/login"}):Object(O.jsxs)("div",{className:"signUpPage",children:[Object(O.jsx)("h1",{className:"loginHeader",children:"Create a Committee Member Account"}),Object(O.jsxs)(y.a,{className:"loginForm",children:[Object(O.jsx)("h3",{children:"Personal details"}),Object(O.jsx)(y.a.Group,{as:b.a,controlId:"SignUpName",children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"Full name:",value:d,onChange:function(e){return j(e.target.value)}})}),Object(O.jsx)(y.a.Group,{as:b.a,controlId:"SignUpPassword",children:Object(O.jsx)(y.a.Control,{type:"password",placeholder:"Password",value:x,onChange:function(e){return p(e.target.value)}})}),Object(O.jsx)(y.a.Group,{as:b.a,controlId:"SignUpEmail",children:Object(O.jsx)(y.a.Control,{type:"email",placeholder:"Enter email",value:r,onChange:function(e){return c(e.target.value)}})}),Object(O.jsx)("h3",{children:"Building details"}),Object(O.jsx)(y.a.Group,{as:b.a,controlId:"SignUpBuildingName",children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"Building name:",value:I,onChange:function(e){return N(e.target.value)}})}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{sm:12,md:4,children:Object(O.jsx)(y.a.Group,{as:b.a,controlId:"SignUpCity",children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"City:",value:U,onChange:function(e){return k(e.target.value)}})})}),Object(O.jsx)(m.a,{sm:12,md:4,children:Object(O.jsx)(y.a.Group,{as:b.a,controlId:"SignUpstreet",children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"street:",value:H,onChange:function(e){return G(e.target.value)}})})}),Object(O.jsx)(m.a,{sm:12,md:4,children:Object(O.jsx)(y.a.Group,{as:b.a,controlId:"SignUpstreetNu",children:Object(O.jsx)(y.a.Control,{type:"number",placeholder:"street Number:",value:E,onChange:function(e){return R(e.target.value)}})})})]}),Object(O.jsx)(y.a.Group,{as:b.a,controlId:"SignUpAppNu",children:Object(O.jsx)(y.a.Control,{type:"number",placeholder:"Appartment Number:",value:Q,onChange:function(e){return W(e.target.value)}})}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"formFile",className:"formInput",children:[Object(O.jsx)(y.a.Label,{className:"custom-file-upload",children:"Upload your Image"}),Object(O.jsx)(y.a.Control,{type:"file",accept:"image/*",onChange:function(e){1===e.target.files.length?V(e.target.files[0]):V(null)}})]}),Object(O.jsx)(v.a,{src:D?URL.createObjectURL(D):""}),Object(O.jsx)(w.a,{className:"submitForm",type:"submit",onClick:function(){var e;console.log("sign up - createNewUser "),(e=t(!0,d,r,D?URL.createObjectURL(D):"",x,U,H,E,I,Q))&&X(e)},block:!0,children:"Sign Up"})]})]})},U=n(9);var k=function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())},T=function e(t){Object(U.a)(this,e),null===t.dateCreated?this.dateCreated=k():this.dateCreated=t.dateCreated,this.userId=t.userId,this.buildingId=t.buildingId,this.commentText=t.commentText},L=n(75),D="";window.location.href.includes("localhost")&&(D="/mngbldnglife",D+="/");var V=Object(a.createContext)(D);var M=function(e){var t,n=e.users,s=e.message,r=e.updateMessage,c=Object(a.useState)(""),i=Object(o.a)(c,2),l=i[0],u=i[1],d=Object(a.useContext)(x),j=Object(a.useContext)(V);return t=s.img,Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(m.a,{xs:12,md:6,className:"msgCardsCol",children:[Object(O.jsx)("h5",{children:s.title}),Object(O.jsx)(v.a,{src:j+t,rounded:!0,className:"imgAvatar"}),Object(O.jsx)("strong",{children:"Details: "})," ",s.details,Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Priority: "})," ",s.priority]}),Object(O.jsxs)(m.a,{xs:12,md:6,children:[Object(O.jsx)("h5",{children:"Comments"}),"Message ID: ",s.messageId,s.ArrayCommentsId?Object(L.a)(function(e){var t="",a="",s="",r="";return e&&(t="<ul>",e.forEach((function(e){if(s=e.dateCreated,e.userId){var c=n.findIndex((function(t){return t.userId===e.userId}));a=n[c].name,r=n[c].img,t+="<li><img class='avatarIcon' src="+j+r+" /><span class='cmntHeaderTxt'>"+a+"@"+s+"</span><br/>"+e.commentText+"</li>"}else t+="<li><span class='cmntHeaderTxt'>"+e.userId+"@"+s+"</span><br/>"+e.commentText+"</li>"})),t+="</ul>"),t}(s.ArrayCommentsId)):"",Object(O.jsxs)(y.a,{onSubmit:function(e){e.preventDefault();var t=k(),n=d.userId,a=s.buildingId,c=new T({dateCreated:t,userId:n,buildingId:a,commentText:l});r(c,s)},children:[Object(O.jsx)(y.a.Group,{controlId:"commentMsg".concat(s.messageId),children:Object(O.jsx)(y.a.Control,{as:"textarea",rows:3,value:l,onChange:function(e){return u(e.target.value)},placeholder:"Add new comment"})}),Object(O.jsx)(w.a,{variant:"secondary",size:"sm",type:"submit",children:"Add Comment"})]})]})]})},F=n(142);var H=function(e){var t=e.show,n=e.onClose,s=e.onCreate,r=e.activeUserBuildingid,c=e.activeUserId,i=e.objMsg,l=Object(a.useState)(""),u=Object(o.a)(l,2),d=u[0],j=u[1],h=Object(a.useState)(""),g=Object(o.a)(h,2),x=g[0],p=g[1],f=Object(a.useState)("Info"),C=Object(o.a)(f,2),I=C[0],N=C[1],S=Object(a.useState)(""),A=Object(o.a)(S,2),U=A[0],T=A[1],L=Object(a.useState)(null),D=Object(o.a)(L,2),V=D[0],M=D[1],H=Object(a.useState)(""),G=Object(o.a)(H,2),P=G[0],B=G[1],E="Create New Message ";function R(){j(""),p(""),N("Info"),T(null),B(""),M(null),n()}i&&(E="Update Message"),Object(a.useEffect)((function(){j(i.title),p(i.details),N(i.priority),T(i.img),B(i.messageId)}),[i,V]);var J=k();return Object(O.jsxs)(F.a,{show:t,onHide:R,size:"lg",children:[Object(O.jsx)(F.a.Header,{closeButton:!0,children:Object(O.jsxs)(F.a.Title,{children:[" ",E," "]})}),Object(O.jsx)(F.a.Body,{children:Object(O.jsxs)(y.a,{children:[Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"MsgTitle",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Title"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"Message title",value:d,onChange:function(e){return j(e.target.value)}})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"MsgDetails",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Details"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"Message details",value:x,onChange:function(e){return p(e.target.value)}})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"MsgPriority",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Priority"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{as:"select",value:I,onChange:function(e){return N(e.target.value)},children:[{name:"Info",value:"Info"},{name:"Important",value:"Important"}].map((function(e){return Object(O.jsx)("option",{value:e.value,children:e.name},e.value)}))})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"MsgImg",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Message Image"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"file",accept:"image/*",onChange:function(e){1===e.target.files.length?T(URL.createObjectURL(e.target.files[0])):T(null)}})})]}),Object(O.jsx)(v.a,{src:U,alt:"",className:"imgAvatar"})]})}),Object(O.jsxs)(F.a.Footer,{children:[Object(O.jsx)(w.a,{variant:"secondary",onClick:R,children:"Cancel"}),Object(O.jsx)(w.a,{variant:"primary",onClick:function(){s(P,r,c,J,d,x,I,U,""),R()},children:"Submit"})]})]})};var G=function(e){var t=e.messages,n=e.users,s=e.onNewMessage,r=e.onDeleteMsg,c=e.onUpdateComment,i=Object(a.useContext)(x),l=Object(a.useState)(!1),j=Object(o.a)(l,2),h=j[0],g=j[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),v=f[0],C=f[1],I=Object(a.useState)(""),y=Object(o.a)(I,2),N=y[0],S=y[1],A=Object(a.useState)("dateCreated"),U=Object(o.a)(A,2),k=U[0],T=U[1];if(!i)return Object(O.jsx)(u.a,{to:"/"});var L=t.filter((function(e){return e.buildingId===i.buildingId&&(e.title.toLowerCase().includes(N.toLowerCase())||e.details.toLowerCase().includes(N.toLowerCase()))}));function D(e){g(!0),C(e)}function V(e,t){c(e,t)}return L.sort((function(e,t){return e[k]>t[k]?1:e[k]<t[k]?-1:0})),Object(O.jsxs)(d.a,{children:[Object(O.jsx)("h1",{children:"Messages "}),Object(O.jsx)("br",{}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{md:8,sm:12,children:Object(O.jsxs)("form",{className:"d-flex",children:[Object(O.jsx)("input",{type:"text",className:"msgPageInput",placeholder:"Filter Messages by text in title and details",value:N,onChange:function(e){return S(e.target.value)}}),Object(O.jsxs)("select",{value:k,onChange:function(e){return T(e.target.value)},className:"form-control",children:[Object(O.jsx)("option",{value:"dateCreated",children:"Filter by: Date Created"}),Object(O.jsx)("option",{value:"priority",children:"Filter by: Priority"})]})]})}),Object(O.jsx)(m.a,{md:2,sm:12,children:i.isAdmin?Object(O.jsx)(w.a,{variant:"outline-primary",onClick:function(){return D("")},children:"New Message"}):null})]}),L.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(b.a,{className:"msgCards",children:Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{xs:6,md:2,children:i.isAdmin?Object(O.jsx)(w.a,{className:"btnUpdateMsg",variant:"primary",size:"sm",onClick:function(){return D(e)},children:"Update Message"}):null}),Object(O.jsx)(m.a,{xs:6,md:2,children:i.isAdmin?Object(O.jsx)(w.a,{variant:"danger",size:"sm",onClick:function(){return t=e.messageId,void r(t);var t},children:"Delete Message"}):null})]}),Object(O.jsx)(M,{users:n,message:e,updateMessage:V})]})},e.messageId)})})),Object(O.jsx)(H,{show:h,onClose:function(){return g(!1)},onCreate:s,activeUserBuildingid:i.buildingId,activeUserId:i.userId,objMsg:v})]})};var P=function(e){var t=e.show,n=e.onClose,s=e.onCreate,r=e.objUser,c=e.onUpdateUser,i=Object(a.useContext)(x),l=Object(a.useState)(""),u=Object(o.a)(l,2),d=u[0],j=u[1],h=Object(a.useState)(""),g=Object(o.a)(h,2),p=g[0],f=g[1],C=Object(a.useState)(""),I=Object(o.a)(C,2),N=I[0],S=I[1],A=Object(a.useState)(""),U=Object(o.a)(A,2),k=U[0],T=U[1],L=Object(a.useState)(""),D=Object(o.a)(L,2),V=D[0],M=D[1],H=Object(a.useState)(null),G=Object(o.a)(H,2),P=G[0],B=G[1],E="Create New Tenant ";function R(){j(""),f(""),M(""),S(null),T(""),B(null),n()}return r&&(E="Update Tenant"),Object(a.useEffect)((function(){r&&(j(r.name),f(r.email),M(r.pswrd),S(r.img),T(r.appNumber))}),[r,P]),Object(O.jsxs)(F.a,{show:t,onHide:R,size:"lg",children:[Object(O.jsx)(F.a.Header,{closeButton:!0,children:Object(O.jsxs)(F.a.Title,{children:[" ",E," "]})}),Object(O.jsx)(F.a.Body,{children:Object(O.jsxs)(y.a,{children:[Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"UserName",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Name"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"Full Name",value:d,onChange:function(e){return j(e.target.value)}})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"UserEmail",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Email"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"email",placeholder:"E Mail",value:p,onChange:function(e){return f(e.target.value)}})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"UserPswd",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"User Password"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"Password",value:V,onChange:function(e){return M(e.target.value)}})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"UserAppartment",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Appartment Nu."}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"number",placeholder:"Appartment Number",value:k,onChange:function(e){return T(e.target.value)}})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"UserImg",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"User Image"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"file",accept:"image/*",onChange:function(e){1===e.target.files.length?S(URL.createObjectURL(e.target.files[0])):S(null)}})})]}),Object(O.jsx)(v.a,{src:N,alt:"",className:"imgAvatar"})]})}),Object(O.jsxs)(F.a.Footer,{children:[Object(O.jsx)(w.a,{variant:"secondary",onClick:R,children:"Cancel"}),Object(O.jsx)(w.a,{variant:"primary",onClick:function(){var e=0,t=V,n=i.city,a=i.street,o=i.stNumber,l=i.buildingName,u=i.buildingId,j=k;r?(e=r.userId,c(e,d,p,N,t,j)):s(e,"false",d,p,N,t,n,a,o,l,u,j),R()},children:"Submit"})]})]})};var B=function(e){var t=e.users,n=e.onNewUser,s=e.onDeleteUser,r=e.onUpdateUser,c=Object(a.useContext)(x),i=Object(a.useContext)(V),l=Object(a.useState)(""),j=Object(o.a)(l,2),h=j[0],g=j[1],p=Object(a.useState)(!1),f=Object(o.a)(p,2),C=f[0],I=f[1],y=Object(a.useState)(""),N=Object(o.a)(y,2),S=N[0],A=N[1];if(!c)return Object(O.jsx)(u.a,{to:"/"});if(!1===c.isAdmin)return Object(O.jsx)(u.a,{to:"/"});var U="";function k(e){I(!0),A(e)}return Array.isArray(t)&&(U=t.filter((function(e){return e.buildingId===c.buildingId&&1===e.isActive&&(e.name.toLowerCase().includes(h.toLowerCase())||e.email.toLowerCase().includes(h.toLowerCase())||parseInt(e.appNumber)===parseInt(h))}))),Object(O.jsxs)(d.a,{children:[Object(O.jsx)("h1",{children:"Tenants List"}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{md:8,children:Object(O.jsx)("form",{className:"d-flex",children:Object(O.jsx)("input",{type:"text",className:"msgPageInput",placeholder:"Filter users by: name/email/appartment number",value:h,onChange:function(e){return g(e.target.value)}})})}),Object(O.jsx)(m.a,{md:2,children:c.isAdmin?Object(O.jsx)(w.a,{variant:"outline-primary",onClick:function(){return k("")},children:"New Tenant"}):null})]}),U?U.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(b.a,{className:"msgCards",children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(m.a,{xs:4,md:2,className:"tenantsPageUserImg",children:[Object(O.jsxs)("h4",{className:"tenantsPageH4",children:["  ",e.name," "]}),Object(O.jsx)(v.a,{src:i+e.img,rounded:!0,className:"imgAvatar"})]}),Object(O.jsxs)(m.a,{xs:8,md:4,children:["Email: ",Object(O.jsx)("a",{href:"mailto:".concat(e.email),children:e.email}),Object(O.jsx)("br",{}),"Appartment Number: ",e.appNumber]}),Object(O.jsxs)(m.a,{xs:12,md:4,className:"btnLine",children:[c.isAdmin?Object(O.jsx)(w.a,{className:"btnUpdateMsg",variant:"primary",size:"sm",onClick:function(){return k(e)},children:"Update User"}):null,c.isAdmin?Object(O.jsx)(w.a,{variant:"danger",size:"sm",onClick:function(){return t=e.userId,void s(t);var t},children:"Delete User"}):null]})]})})},e.userId)})})):null,Object(O.jsx)(P,{show:C,onClose:function(){return I(!1)},onCreate:n,objUser:S,onUpdateUser:r})]})},E=n(54),R=n.n(E);var J=function(e){var t=e.selectOptions,n=e.funcSetVoteFor,s=Object(a.useState)(""),r=Object(o.a)(s,2),c=r[0],i=r[1];return Object(O.jsxs)("form",{className:"selectOptionsForm",children:[Object(O.jsx)("span",{children:"Options for this Vote Ticket: "}),Object(O.jsxs)("select",{value:c,onChange:function(e){return i(e.target.value)},className:"form-control",children:[Object(O.jsx)("option",{children:"Select Options: "}),Array.isArray(t)?t.map((function(e){return Object(O.jsx)("option",{value:e,children:e})})):null]}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),n(c)},children:"Update Vote"})]})};var Y=function(e){var t=e.voteTicket,n=e.funcUpdateDate,s=e.funcUpdateVote,r=e.funcCloseTicket,c=Object(a.useContext)(x),i=Object(a.useState)(new Date),l=Object(o.a)(i,2),u=l[0],j=l[1],h=Object(a.useState)(!1),p=Object(o.a)(h,2),f=p[0],v=p[1];return Object(a.useEffect)((function(){n&&n(u,t)}),[u,n,t]),Object(O.jsxs)(d.a,{className:"singleVoteTicket",children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{md:8,className:"singleVoteTicketHeader",children:Object(O.jsx)("h3",{children:t.title})}),Object(O.jsx)(m.a,{className:"singleVoteTicketHeader",children:c.isAdmin&&"open"===t.status?Object(O.jsx)(w.a,{variant:"danger",size:"sm",onClick:function(){return function(e){r(e)}(t)},children:"Close Ticket"}):null})]}),Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(m.a,{md:7,sm:12,children:[Object(O.jsx)("strong",{children:"details:"})," ",t.details,Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"End date:"})," ",u.toLocaleString()>new Date(t.endDate).toLocaleString()?u.toLocaleString():new Date(t.endDate).toLocaleString(),c.isAdmin&&"open"===t.status?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Update end date:"}),Object(O.jsx)(R.a,{onChange:j,value:u,minDate:new Date(t.endDate)})]}):null,f?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:"text-danger",children:"You voted for this issue, please prevent for voting twice, your vote will not be counted"})]}):null,"open"===t.status&&Array.isArray(t.options)?Object(O.jsx)(J,{selectOptions:t.options,funcSetVoteFor:function(e){var n=!1;Array.isArray(t.votes)&&t.votes.find((function(e){return e.userid===c.userId}))&&(n=!0,v(!0)),!1===n&&s(e,t)}}):null]}),Object(O.jsx)(m.a,{md:5,sm:12,children:Array.isArray(t.options)?Object(O.jsx)(g,{entity:t}):null})]})]})};var Q=function(e){var t=e.show,n=e.onClose,s=e.onCreate,r=e.activeUserBuildingid,c=e.activeUserId,l=Object(a.useState)(""),u=Object(o.a)(l,2),d=u[0],j=u[1],h=Object(a.useState)(""),g=Object(o.a)(h,2),x=g[0],p=g[1],f=Object(a.useState)(new Date),v=Object(o.a)(f,2),C=v[0],I=v[1],N=Object(a.useState)([{value:null}]),S=Object(o.a)(N,2),A=S[0],U=S[1];function T(){j(""),p(""),n()}var L=k();return Object(O.jsxs)(F.a,{show:t,onHide:T,size:"lg",children:[Object(O.jsx)(F.a.Header,{closeButton:!0,children:Object(O.jsxs)(F.a.Title,{children:[" ","Create New Voting "," "]})}),Object(O.jsx)(F.a.Body,{children:Object(O.jsxs)(y.a,{children:[Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"VoteTitle",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Title"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"Vote title",value:d,onChange:function(e){return j(e.target.value)}})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"VoteDetails",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Details"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(y.a.Control,{type:"text",placeholder:"Vote details",value:x,onChange:function(e){return p(e.target.value)}})})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"VoteOptions",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"Options"}),Object(O.jsxs)(m.a,{sm:4,children:[A.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{className:"dynamicOptionsInput",type:"text",placeholder:"Enter option",onChange:function(e){return function(e,t){var n=Object(i.a)(A);n[e].value=t.target.value,U(n)}(t,e)}}),Object(O.jsx)(w.a,{variant:"outline-danger",type:"button",onClick:function(){return function(e){var t=Object(i.a)(A);t.splice(e,1),U(t)}(t)},children:"x"})]},"".concat(e,"-").concat(t))})),Object(O.jsx)(w.a,{variant:"outline-success",type:"button",onClick:function(){return function(){var e=Object(i.a)(A);e.push({value:null}),U(e)}()},children:"+"})]})]}),Object(O.jsxs)(y.a.Group,{as:b.a,controlId:"VoteOptions",children:[Object(O.jsx)(y.a.Label,{column:!0,sm:3,children:"End Date"}),Object(O.jsx)(m.a,{sm:9,children:Object(O.jsx)(R.a,{onChange:I,value:C,minDate:new Date})})]})]})}),Object(O.jsxs)(F.a.Footer,{children:[Object(O.jsx)(w.a,{variant:"secondary",onClick:T,children:"Cancel"}),Object(O.jsx)(w.a,{variant:"primary",onClick:function(){var e=r,t=c,n=A;console.log(A);var a=[];n.forEach((function(e){a.push(e.value)}));var i,o,l=a;i=C.getFullYear()+"-"+(C.getMonth()+1)+"-"+C.getDate(),o=C.getHours()+":"+C.getMinutes()+":"+C.getSeconds(),s(t,e,L,d,x,l,i+" "+o),T()},children:"Submit"})]})]})};var W=function(e){var t=e.voteTickets,n=e.onNewTicket,s=e.onUpdateDate,r=e.onUpdateVote,c=e.funcCloseTicket,i=Object(a.useContext)(x),l=Object(a.useState)(""),j=Object(o.a)(l,2),h=j[0],g=j[1],p=Object(a.useState)(!1),f=Object(o.a)(p,2),v=f[0],C=f[1];if(!i)return Object(O.jsx)(u.a,{to:"/"});var I=t.filter((function(e){return e.buildingId===i.buildingId&&"close"===e.status&&(e.title.toLowerCase().includes(h.toLowerCase())||e.details.toLowerCase().includes(h.toLowerCase()))})),y=t.filter((function(e){return e.buildingId===i.buildingId&&"open"===e.status}));function N(e,t){var n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds());t.endDate=n,s(t)}function S(e,t){r(e,t)}function A(e){c(e)}return Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(m.a,{sm:6,md:6,children:[Object(O.jsx)("h1",{children:"Active Votings"}),i.isAdmin?Object(O.jsx)(w.a,{variant:"outline-primary",style:{"margin-bottom":"2vh"},onClick:function(){C(!0)},children:"New Voting"}):null,y?y.map((function(e){return Object(O.jsx)(Y,{voteTicket:e,funcUpdateDate:N,funcUpdateVote:S,funcCloseTicket:A})})):"There are no open votes"]}),Object(O.jsxs)(m.a,{children:[Object(O.jsx)("h1",{children:"Votings Results"}),Object(O.jsx)("form",{className:"d-flex",children:Object(O.jsx)("input",{type:"text",className:"msgPageInput",placeholder:"Filter by text in title and details",value:h,onChange:function(e){return g(e.target.value)}})}),I?I.map((function(e){return Object(O.jsx)(Y,{voteTicket:e})})):"There are no closed votes"]})]}),Object(O.jsx)(Q,{show:v,onClose:function(){return C(!1)},onCreate:n,activeUserBuildingid:i.buildingId,activeUserId:i.userId})]})},q=n(145);var z=function(e){var t=e.onLogout,n=Object(a.useContext)(x),s=!1;n&&(s=n.isAdmin);var r=Object(u.g)();function c(e){return r.pathname===e?" active ":""}return Object(O.jsxs)(q.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(O.jsx)(q.a.Brand,{href:"#/",children:Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADaElEQVR4nO2bW0gUURjH/2fcjTTt1d21J7NezB6MxFiU1PLFhyKswBtBQg9FbxHRhaGEoqCHkHooItNdyEwKtKALgrZ4ZTUvQWVvuhcf0zRQ5/SwpenMujuns2dWZn6wMHu+Of/55g/nmzkfuwSckGVZyssvrCaS4uKlqQVVpMCYv88jy7LCQ8/GQwQA9u4rqAFoEyjhJakJIRR5+YUA0MxDT+IhAgAUJJuXVkwI3clLipsBmxXLAKMTMBrTG6CrZF+4cqN8bnbuPAhVGbctLW1X6tbUHH6pRWfh18Lkz/n5b6oAJUp6Rvq9Ow1X38arpesxODn5vWN2ds6uZ06CyPnzUbE9I70cwJZ4hXQtgSS5+Q35oTNH5hehk5VHWacmhGdtL5nmMRtQf6qadWpCYDXA9E8B0xugWgLtnZ27oUhHtB519x88FpPVf9Le8fqiapASBZLy6lhFxdd/h9U1QJHeAMhO9K4uoVByS3Nckc5g3eNTawmI29WJR7WLNH0NML0B3DpClFJ86OoBAJSVFIEQIjTOCjcD3nd14/bdxpXvh0qLhcZZ4bYEgqHwynEgFBIeZ8X0NYCbAXbb6mqy29UbskTHWeFmQJH7AFzOTLicmSh2FwqPs8KtCO7IcqLpYaNhcVasGmB0AkZjGcBLaGo6iNrTZ1FXfw7TgaDwOCvcDOjx9SIUnkEwFEa3r094nBVuBiwuLa0eLy4Kj7Ni1QBeQi6HY+U4y+kQHmeF24tQZIsaOS49WCQ8zgo3AwghKCuJvkVNdJwVqwYYnYDRWC0xLiqwWmJWS2yzYrXEeAlZLTGrJbY5sQwwOgGj4VYDpqaDuHStAYQQ3Lx+GVkup2Y8FJ7ZUMfpyNxwfjR9VoS3xGJhipZYTC2BLTFuS0APtVXHUVd1Ys3YU28rmr3PhecirCWWrPrCWmLJqi+sJZas+qZ/D7AMMDoBo7EMMDoBo7HJsiz5BiaqQagLAPzDn5YJSEqsiXr/oDDx+Yuuc1n/AAEAw8OjmuMUdPlwRWXkl+SUBNwFuR7bx6HxGhA0/T2pr38oros8euJhTjAW/pFR+Ee0byIeevsHo4VSAER+SU4ofAMTkIhCKPOVGGnxttaSdbR42upE5wGiUJu7INfjGxyjFGSPkGuCjrv353nfdb5YM25UHr8BM0n3fXKSONMAAAAASUVORK5CYII=",alt:"logo"})}),Object(O.jsx)(q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(q.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsxs)(j.a,{activeKey:r.pathname,className:"mr-auto",children:[n?Object(O.jsx)(j.a.Link,{className:c("/dashboard"),href:"#/dashboard",children:"DashBoard"}):null,!0===s?Object(O.jsx)(j.a.Link,{className:c("/tenants"),href:"#/tenants",children:"Tenants"}):null,n?Object(O.jsx)(j.a.Link,{className:c("/messages"),href:"#/messages",children:"Messages"}):null,n?Object(O.jsx)(j.a.Link,{className:c("/votings"),href:"#/votings",children:"Voting"}):null,Object(O.jsx)(j.a.Link,{className:c("/contact"),href:"#/contact",children:"Contact"})]}),Object(O.jsxs)(j.a,{children:[n?null:Object(O.jsx)(j.a.Link,{href:"#/login",children:"Login"}),n?null:Object(O.jsx)(j.a.Link,{href:"#/signup",className:"signupBtn",children:"Signup"}),n?Object(O.jsx)(j.a.Link,{href:"#",onClick:function(){return t()},children:"Logout"}):null,n?Object(O.jsxs)(j.a.Link,{href:"#",children:[n.name,",  ",!0===n.isAdmin?"Admin":"Tenant"]}):null]})]})]})};var Z=function(){return Object(O.jsx)("footer",{children:Object(O.jsx)(d.a,{children:Object(O.jsx)("a",{href:"#/contact",children:"Contact"})})})},X=n(15),K=n(30);var $=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),c=Object(o.a)(r,2),i=c[0],l=c[1],u=function(e){s(Object(K.a)(Object(K.a)({},n),{},Object(X.a)({},e.target.name,e.target.value)))};return Object(O.jsx)("div",{className:"contactForm",children:!1===i?Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0)},children:[Object(O.jsxs)(b.a,{className:"rowSpace",children:[Object(O.jsx)("label",{htmlFor:"name"}),Object(O.jsx)("input",{type:"text",required:!0,className:"form-control",name:"name",placeholder:"Your name",value:n.name,onChange:u})]}),Object(O.jsxs)(b.a,{className:"rowSpace",children:[Object(O.jsx)("label",{htmlFor:"email"}),Object(O.jsx)("input",{type:"email",required:!0,className:"form-control",name:"email",placeholder:"E-Mail",value:n.email,onChange:u})]}),Object(O.jsxs)(b.a,{className:"rowSpace",children:[Object(O.jsx)("label",{htmlFor:"message"}),Object(O.jsx)("input",{type:"text",required:!0,className:"form-control",name:"message",placeholder:"Your message",value:n.message,onChange:u})]}),Object(O.jsx)(b.a,{children:Object(O.jsx)("button",{type:"submit",className:"btn submitForm",children:"Send"})})]}):Object(O.jsxs)("div",{children:["Your details:",Object(O.jsx)("br",{}),n.name,Object(O.jsx)("br",{}),n.email,Object(O.jsx)("br",{}),n.message,Object(O.jsx)("br",{}),"This is just a demo app so there is no use here in emailjs solution (3rd party)  ."]})})};var _=function(){return Object(O.jsxs)(d.a,{children:[Object(O.jsx)("h1",{children:"Contact"}),Object(O.jsx)($,{})]})},ee=(n(129),n(130),n(77)),te=n(78),ne=n(79),ae=n(80),se=n(10),re=function(){function e(t){Object(U.a)(this,e),this.userId=t.userId,this.isAdmin=t.isAdmin,this.name=t.name,this.email=t.email,this.img=t.img,this.pswrd=t.pswrd,this.city=t.city,this.street=t.street,this.stNumber=t.stNumber,this.buildingName=t.buildingName,this.buildingId=t.buildingId,this.appNumber=t.appNumber,this.isActive?this.isActive=t.isActive:this.isActive=1}return Object(se.a)(e,[{key:"login",value:function(e,t){return e.toLowerCase()===this.email.toLowerCase()&&t===this.pswrd}}]),e}(),ce=function e(t){Object(U.a)(this,e),this.buildingId=t.buildingId,this.userId=t.userId,this.userEmail=t.userEmail,this.buildingName=t.buildingName,this.city=t.city,this.street=t.street,this.stNumber=t.stNumber},ie=function e(t){Object(U.a)(this,e),this.messageId=t.messageId,this.buildingId=t.buildingId,this.userId=t.userId,this.dateCreated=t.dateCreated,this.title=t.title,this.details=t.details,null===t.priority?this.priority="Info":this.priority=t.priority,t.img?this.img=t.img:this.img="images/msgDefault.jpg",this.ArrayCommentsId=t.ArrayCommentsId},oe=function e(t){Object(U.a)(this,e),this.VoteTicketId=t.VoteTicketId,this.userId=t.userId,this.buildingId=t.buildingId,null===t.dateCreated?this.dateCreated=k():this.dateCreated=t.dateCreated,this.title=t.title,this.details=t.details,this.options=t.options,this.endDate=t.endDate,t.votes?this.votes=t.votes:this.votes=[],t.status?this.status=t.status:this.status="open",t.voteSummary?this.voteSummary=t.voteSummary:this.voteSummary=0};var le=function(){var e=Object(a.useState)(ee.map((function(e){return new re(e)}))),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(te.map((function(e){return new ce(e)}))),c=Object(o.a)(r,2),d=c[0],j=c[1],b=Object(a.useState)(ne.map((function(e){return new ie(e)}))),m=Object(o.a)(b,2),h=m[0],g=m[1],f=Object(a.useState)(ae.map((function(e){return new oe(e)}))),v=Object(o.a)(f,2),I=v[0],y=v[1],N=Object(a.useState)(null),w=Object(o.a)(N,2),U=w[0],k=w[1];function T(e,t,a,r,c,i,o,l,u,d,j,b){0===e&&(e=n[n.length-1].userId+1);var m,h=new re({userId:e,isAdmin:t,name:a,email:r,img:c,pswrd:i,city:o,street:l,stNumber:u,buildingName:d,buildingId:j,appNumber:b});m=function(e,t){for(var a in n)return!(n[a].email!==e||n[a].buildingName!==t||!n[a].isAdmin)&&(console.log("building name = "+n[a].buildingName+" email = "+n[a].email+" is admin = "+n[a].isAdmin),!0)}(r,d),!1===m&&s(n.concat(h))}return Object(O.jsxs)(x.Provider,{value:U,children:[Object(O.jsxs)(l.a,{children:[Object(O.jsx)(z,{onLogout:function(){return k(null)}}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{exact:!0,path:"/",children:Object(O.jsx)(C,{})}),Object(O.jsx)(u.b,{exact:!0,path:"/login",children:Object(O.jsx)(S,{users:n,onLogin:function(e){return k(e)}})}),Object(O.jsx)(u.b,{exact:!0,path:"/signup",children:Object(O.jsx)(A,{onNewUser:function(e,t,a,s,r,c,i,o,l,u){var b,m;return b=function(e,t,n,a,s,r){var c=d[d.length-1].buildingId+1,i=new ce({buildingId:c,userId:e,userEmail:t,buildingName:n,city:a,street:s,stNumber:r});return j(d.concat(i)),c}(m=n[n.length-1].userId+1,a,l,c,i,o),T(m,e,t,a,s,r,c,i,o,l,b,u),m}})}),Object(O.jsx)(u.b,{exact:!0,path:"/tenants",children:Object(O.jsx)(B,{users:n,onNewUser:function(e,t,n,a,s,r,c,i,o,l,u,d){T(e,t,n,a,s,r,c,i,o,l,u,d)},onDeleteUser:function(e){var t=n.findIndex((function(t){return t.userId===e})),a=Object(i.a)(n);a[t].isActive=0,s(a)},onUpdateUser:function(e,t,a,r,c,o){var l=n.findIndex((function(t){return t.userId===e})),u=Object(i.a)(n);u[l].name=t,u[l].email=a,u[l].img=r,u[l].pswrd=c,u[l].appNumber=o,s(u)}})}),Object(O.jsx)(u.b,{exact:!0,path:"/messages",children:Object(O.jsx)(G,{messages:h,users:n,onNewMessage:function(e,t,n,a,s,r,c,i){console.log("messageId ===> "+e),e?(console.log("update message ==> "),function(e,t,n,a,s){var r=h.findIndex((function(t){return t.messageId===e}));r&&(h[r].title=t,h[r].details=n,h[r].priority=a,h[r].img=s,g(h))}(e,s,r,c,i)):function(e,t,n,a,s,r,c){console.log("addNewMsg");var i=10001;h&&(i=h[h.length-1].messageId+1);var o=new ie({messageId:i,buildingId:e,userId:t,dateCreated:n,title:a,details:s,priority:r,img:c});g(h.concat(o))}(t,n,a,s,r,c,i)},onDeleteMsg:function(e){if(!0===window.confirm("Delete message No. "+e+"?")&&h.findIndex((function(t){return t.messageId===e}))){var t=h.filter((function(t){return t.messageId!==e}));g(t)}},onUpdateComment:function(e,t){var n=t.messageId,a=h.findIndex((function(e){return e.messageId===n})),s=Object(i.a)(h);s[a].ArrayCommentsId?s[a].ArrayCommentsId.push(e):s[a].ArrayCommentsId=[{dateCreated:e.dateCreated,userId:e.userId,buildingId:e.buildingId,commentText:e.commentText}],g(s)}})}),Object(O.jsx)(u.b,{exact:!0,path:"/votings",children:Object(O.jsx)(W,{voteTickets:I,onNewTicket:function(e,t,n,a,s,r,c){console.log("Insert new vote ticket"),console.log(e+","+t+","+n+","+a+","+s+","+r+","+c);var i=10001;I&&(i=I[I.length-1].VoteTicketId+1);var o=new oe({VoteTicketId:i,userId:e,buildingId:t,dateCreated:n,title:a,details:s,options:r,endDate:c});y(I.concat(o)),console.log(I)},onUpdateDate:function(e){var t=e.VoteTicketId,n=I.findIndex((function(e){return e.VoteTicketId===t}));I[n].endDate=e.endDate,y(I)},onUpdateVote:function(e,t){var n=t.VoteTicketId,a=I.findIndex((function(e){return e.VoteTicketId===n})),s=Object(i.a)(I);Array.isArray(s[a].votes)?s[a].votes.push({userid:U.userId,result:e}):s[a].votes=[{userid:U.userId,result:e}],y(s)},funcCloseTicket:function(e){var t=e.VoteTicketId,n=I.findIndex((function(e){return e.VoteTicketId===t})),a=Object(i.a)(I);a[n].status="close",y(a)}})}),Object(O.jsx)(u.b,{exact:!0,path:"/dashboard",children:Object(O.jsx)(p,{voteTickets:I})}),Object(O.jsx)(u.b,{exact:!0,path:"/contact",children:Object(O.jsx)(_,{})})]})]}),Object(O.jsx)(Z,{})]})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(le,{})}),document.getElementById("root")),ue()},77:function(e){e.exports=JSON.parse('[{"userId":1001,"isAdmin":true,"name":"Irit","email":"iritstempler@gmail.com","img":"images/admin-avatar.JPG","pswrd":"123456","city":"Holon","street":"Shikma","stNumber":3,"buildingName":"Shikma3","buildingId":1,"appNumber":12,"isActive":1},{"userId":1002,"isAdmin":false,"name":"Shuly","email":"Shuly@gmail.com","img":"images/avatar-woman.JPG","pswrd":"234567","city":"Holon","street":"Shikma","stNumber":3,"buildingName":"Shikma3","buildingId":1,"appNumber":11,"isActive":1}]')},78:function(e){e.exports=JSON.parse('[{"buildingId":1,"userId":1001,"userEmail":"irit@gmail.com","buildingName":"Shikma3","city":"Holon","street":"Shikma","stNumber":3}]')},79:function(e){e.exports=JSON.parse('[{"messageId":1,"buildingId":1,"userId":1001,"dateCreated":"2021-05-06 16:30:00","title":"First announcement","details":"Our new community building message","priority":"Info","ArrayCommentsId":[{"dateCreated":"2021-05-06 16:30:00","userId":1001,"buildingId":1,"commentText":"This is comment no 1 for msg no 1 "},{"dateCreated":"2021-05-10 17:39:00","userId":1001,"buildingId":1,"commentText":"This is comment no 2 for msg no 1 "},{"dateCreated":"2021-05-10 17:39:00","userId":1002,"buildingId":1,"commentText":"This is comment no 3 for msg no 1 "}]}]')},80:function(e){e.exports=JSON.parse('[{"VoteTicketId":1,"userId":1001,"buildingId":1,"dateCreated":"2021-05-06 16:30:00","title":"Prepare the roof for winter - ZIPUT ","details":"explain the vote issue - ziput","options":["yes","no"],"endDate":"2021-05-20 16:30:00","votes":[{"userid":1001,"result":"yes"},{"userid":1002,"result":"no"},{"userid":1002,"result":"no"},{"userid":1002,"result":"no"}],"status":"open","voteSummary":0},{"VoteTicketId":2,"userId":1001,"buildingId":1,"dateCreated":"2021-05-14 16:30:00","title":"New \'vaadat tarbut\' members ","details":"Since Maayan is leaving this role we need to choose someone to replace her: ","options":["Dikla","Shuly","Romi","Yael"],"endDate":"2021-05-20 16:30:00","votes":[{"userid":1001,"result":"Dikla"},{"userid":1002,"result":"Shuly"},{"userid":1003,"result":"Romi"}],"status":"open","voteSummary":0}]')},86:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.d686b08d.chunk.js.map