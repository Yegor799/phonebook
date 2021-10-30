(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),i=(n(30),n(31),n(16)),s=(n(32),n(5)),u=n(11),b=n.n(u),l=n(59),d=n(2),j=(Object(d.b)("contacts/fetchContactSuccess"),Object(d.b)("contacts/fetchContactRequest"),Object(d.b)("contacts/fetchContactError"),Object(d.b)("contacts/addContactSuccess")),f=Object(d.b)("contacts/addContactRequest"),O=Object(d.b)("contacts/addContactError"),m=Object(d.b)("contacts/deleteContactSuccess"),h=Object(d.b)("contacts/deleteContactRequest"),p=Object(d.b)("contacts/deleteContactError"),C=Object(d.b)("contacts/filterContacts");b.a.defaults.baseURL="http://localhost:3001";var x=n(1);var v=Object(s.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{addContact:function(e,n){return t(function(t,e){return function(n){var c={name:t,number:e,id:Object(l.a)()};n(f()),b.a.post("/contacts",c).then((function(t){var e=t.data;return n(j(e))})).catch((function(t){return n(O(t))}))}}(e,n))}}}))((function(t){var e=t.contacts,n=t.addContact,a=Object(c.useState)(""),r=Object(i.a)(a,2),o=r[0],s=r[1],u=Object(c.useState)(""),b=Object(i.a)(u,2),l=b[0],d=b[1];return Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t,c){e.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacts")):n(t,c)}(o,l),s(""),d("")},className:"ContactForm",children:[Object(x.jsx)("p",{children:"Name"}),Object(x.jsx)("label",{children:Object(x.jsx)("input",{type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){s(t.target.value)}})}),Object(x.jsx)("p",{children:"Number"}),Object(x.jsx)("label",{children:Object(x.jsx)("input",{type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){d(t.target.value)}})}),Object(x.jsx)("button",{type:"submit",className:"ContactForm__button",children:"Add contact"})]})}));var g=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(C(e.target.value))}}}))((function(t){var e=t.filter,n=t.onChange;return console.log(e),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{children:"Find contacts by name"}),Object(x.jsx)("label",{children:Object(x.jsx)("input",{type:"text",name:"filter",onChange:n})})]})}));n(56);var y=Object(s.b)((function(t){var e=t.contacts,n=e.filter;return{names:e.items.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))}}),(function(t){return{onDelete:function(e){return t((n=e,function(t){t(h()),b.a.delete("/contacts/".concat(n)).then((function(){return t(m(n))})).catch((function(e){return t(p(e))}))}));var n}}}))((function(t){var e=t.names,n=t.onDelete;return Object(x.jsx)("ul",{className:"ContactList",children:e.map((function(t){return Object(x.jsxs)("li",{className:"ContactList__item",children:[Object(x.jsxs)("p",{children:[t.name,": ",t.number]}),Object(x.jsx)("button",{onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})}));var S,A=function(){return Object(x.jsxs)("div",{className:"Container",children:[Object(x.jsx)(v,{}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(g,{}),Object(x.jsx)(y,{})]})},N=n(12),q=n(25),w=n(4),E=Object(d.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(S={},Object(N.a)(S,j,(function(t,e){var n=e.payload;return[].concat(Object(q.a)(t),[n])})),Object(N.a)(S,m,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),S)),L=Object(d.c)("",Object(N.a)({},C,(function(t,e){return e.payload}))),R=Object(w.b)({items:E,filter:L}),z=Object(d.a)({reducer:{contacts:R},middleware:function(t){return t()}});console.log(z.getState());var D=z;o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(s.a,{store:D,children:Object(x.jsx)(A,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.6f0d69ab.chunk.js.map