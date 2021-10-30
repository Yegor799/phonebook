(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(11),o=n.n(r),u=(n(30),n(31),n(16)),s=(n(32),n(5)),i=n(7),b=n.n(i),j=n(59),l=n(2),d=Object(l.b)("contacts/fetchContactSuccess"),f=Object(l.b)("contacts/fetchContactRequest"),O=Object(l.b)("contacts/fetchContactError"),h=Object(l.b)("contacts/addContactSuccess"),m=Object(l.b)("contacts/addContactRequest"),p=Object(l.b)("contacts/addContactError"),C=Object(l.b)("contacts/deleteContactSuccess"),x=Object(l.b)("contacts/deleteContactRequest"),v=Object(l.b)("contacts/deleteContactError"),g=Object(l.b)("contacts/filterContacts");b.a.defaults.baseURL="http://localhost:3001";var y=n(1);var N=Object(s.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{addContact:function(e,n){return t(function(t,e){return function(n){var c={name:t,number:e,id:Object(j.a)()};n(m()),b.a.post("/contacts",c).then((function(t){var e=t.data;return n(h(e))})).catch((function(t){return n(p(t))}))}}(e,n))}}}))((function(t){var e=t.contacts,n=t.addContact,a=Object(c.useState)(""),r=Object(u.a)(a,2),o=r[0],s=r[1],i=Object(c.useState)(""),b=Object(u.a)(i,2),j=b[0],l=b[1];return Object(y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t,c){e.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacts")):n(t,c)}(o,j),s(""),l("")},className:"ContactForm",children:[Object(y.jsx)("p",{children:"Name"}),Object(y.jsx)("label",{children:Object(y.jsx)("input",{type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){s(t.target.value)}})}),Object(y.jsx)("p",{children:"Number"}),Object(y.jsx)("label",{children:Object(y.jsx)("input",{type:"tel",name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){l(t.target.value)}})}),Object(y.jsx)("button",{type:"submit",className:"ContactForm__button",children:"Add contact"})]})}));var S=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(g(e.target.value))}}}))((function(t){var e=t.filter,n=t.onChange;return console.log(e),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{children:"Find contacts by name"}),Object(y.jsx)("label",{children:Object(y.jsx)("input",{type:"text",name:"filter",onChange:n})})]})}));n(56);var A=Object(s.b)((function(t){var e=t.contacts,n=e.filter;return{names:e.items.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))}}),(function(t){return{onDelete:function(e){return t((n=e,function(t){t(x()),b.a.delete("/contacts/".concat(n)).then((function(){return t(C(n))})).catch((function(e){return t(v(e))}))}));var n},fetchContacts:function(){return t((function(t){t(f()),b.a.get("/contacts").then((function(e){var n=e.data;return t(d(n))})).catch((function(e){return t(O(e))}))}))}}}))((function(t){var e=t.names,n=t.onDelete,a=t.fetchContacts;return Object(c.useEffect)((function(){a()}),[]),Object(y.jsx)("ul",{className:"ContactList",children:e.map((function(t){return Object(y.jsxs)("li",{className:"ContactList__item",children:[Object(y.jsxs)("p",{children:[t.name,": ",t.number]}),Object(y.jsx)("button",{onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})}));var q,w=function(){return Object(y.jsxs)("div",{className:"Container",children:[Object(y.jsx)(N,{}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)(S,{}),Object(y.jsx)(A,{})]})},E=n(8),L=n(25),z=n(4),D=Object(l.c)([],(q={},Object(E.a)(q,d,(function(t,e){return e.payload})),Object(E.a)(q,h,(function(t,e){var n=e.payload;return[].concat(Object(L.a)(t),[n])})),Object(E.a)(q,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),q)),F=Object(l.c)("",Object(E.a)({},g,(function(t,e){return e.payload}))),R=Object(z.b)({items:D,filter:F}),_=Object(l.a)({reducer:{contacts:R},middleware:function(t){return t()}});o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(s.a,{store:_,children:Object(y.jsx)(w,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.4852bc9b.chunk.js.map