(this["webpackJsonpbook-store"]=this["webpackJsonpbook-store"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/NoRecordFound.7684261a.png"},15:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),r=a.n(l),o=(a(20),a(3)),u=a(2),s=a.n(u),i=a(14),m=a.n(i),d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),u=Object(o.a)(r,2),i=u[0],d=u[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),h=f[0],E=f[1];Object(n.useEffect)((function(){i?function(){var e=[];s.a.get("https://fakerestapi.azurewebsites.net/api/Authors/".concat(i)).then((function(t){console.log(),e.push(t.data),console.log(e),l(e)})).catch((function(e){E(!0),console.log("invalid data")}))}():s.a.get("https://fakerestapi.azurewebsites.net/api/Authors").then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[i]);var b=function(){var e=document.getElementById("search").value;d(e),E(!1)},g=function(e,t){var a;return function(){var e=arguments,n=this;clearTimeout(a),a=setTimeout((function(){b.apply(n,e)}),t)}}(0,300);return document.addEventListener("click",(function(e){var t=e.target.id;"search"!==e.target.id&&s.a.delete("https://fakerestapi.azurewebsites.net/api/Authors/".concat(t)).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),e.stopImmediatePropagation()})),c.a.createElement(n.Fragment,null,c.a.createElement("section",{className:"main"},c.a.createElement("form",{name:"login",className:"search-form"},c.a.createElement("input",{type:"text",placeholder:"Search Using ID..",name:"username",id:"search",required:!0,autoComplete:"off",onChange:g})),c.a.createElement("div",{className:"table-search"},h?c.a.createElement("img",{src:m.a}):c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Id"),c.a.createElement("th",null,"Book id"),c.a.createElement("th",null,"First name"),c.a.createElement("th",null,"Last name"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.ID},c.a.createElement("td",null,e.ID),c.a.createElement("td",null,e.IDBook),c.a.createElement("td",null,e.FirstName),c.a.createElement("td",null,e.LastName),c.a.createElement("td",null,c.a.createElement("button",{type:"submit",id:e.ID,className:"delete-table"},"Delete")," "))})))))))};var p=function(){return c.a.createElement("main",{className:"app"},c.a.createElement(d,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0c451cae.chunk.js.map