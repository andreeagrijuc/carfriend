(this.webpackJsonprobocars=this.webpackJsonprobocars||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var c=n(0),r=n.n(c),t=n(2),i=n.n(t),s=(n(12),n(3)),o=n(4),l=n(6),m=n(5),d=function(e){var a=e.name,n=e.nickname,c=e.src;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"carfriends",src:"".concat(c),width:"200",height:"150"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("h4",null,n)))},u=function(e){var a=e.cars;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(d,{key:n,id:a[n].id,name:a[n].name,nickname:a[n].nickname,src:a[n].src})})))},h=[{id:1,name:"Audi A3",nickname:"A3",src:"./cars/a3.png"},{id:2,name:"Mazda 3",nickname:"M3",src:"./cars/m3.png"},{id:3,name:"Mercedes CLA",nickname:"CLA",src:"./cars/cla.png"},{id:4,name:"Mercedes GLA",nickname:"GLA",src:"./cars/gla.png"},{id:5,name:"Audi A7",nickname:"A7",src:"./cars/a7.png"},{id:6,name:"Audi Q3",nickname:"Q3",src:"./cars/q3.png"},{id:7,name:"Audi A5",nickname:"A5",src:"./cars/a5.png"},{id:8,name:"Toyota CHR",nickname:"CHR",src:"./cars/chr.png"},{id:9,name:"Honda Civic",nickname:"Civic",src:"./cars/civic.png"},{id:10,name:"Seat Leon",nickname:"Leon",src:"./cars/leon.png"}],g=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search cars",onChange:a}))},p=(n(13),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children,";")}),v=function(e){Object(l.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={cars:h,searchField:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,a=e.cars,n=e.searchField,c=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"CarFriends"),r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(u,{cars:c})))}}]),n}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.ba77742f.chunk.js.map