(function(t){function a(a){for(var s,n,l=a[0],o=a[1],c=a[2],d=0,u=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},i={app:0},r=[];function l(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8cdd84f6"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e={about:1};n[t]?a.push(n[t]):0!==n[t]&&e[t]&&a.push(n[t]=new Promise((function(a,e){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"ecc4290c"}[t]+".css",i=o.p+s,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var c=r[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===i))return a()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===s||d===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var s=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],m.parentNode.removeChild(m),e(r)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)a.push(s[2]);else{var r=new Promise((function(a,e){s=i[t]=[a,e]}));a.push(s[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=l(t);var u=new Error;c=function(a){d.onerror=d.onload=null,clearTimeout(m);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,e[1](u)}i[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var m=d;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"14b9":function(t,a,e){},3309:function(t,a,e){"use strict";e("e6e4")},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("router-view"),e("Footer")],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"p-3 mb-3 border-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"\n        d-flex\n        flex-wrap\n        align-items-center\n        justify-content-center justify-content-lg-start\n      "},[e("ul",{staticClass:"\n          nav\n          col-12 col-lg-auto\n          me-lg-auto\n          mt-4\n          justify-content-center\n          mb-md-0\n        "},[e("img",{staticClass:"rounded-circle",attrs:{src:"imagenes/logo.png",alt:"log",width:"30",height:"30"}}),e("li",[e("h5",[e("router-link",{staticClass:"nav-link px-2 link-dark",staticStyle:{color:"#2ecc71"},attrs:{to:"/"}},[t._v("Mobiliaria-IN")])],1)]),e("li",[e("router-link",{staticClass:"nav-link px-2 link-dark",attrs:{to:"/propiedades"}},[t._v("Propiedades")])],1),e("li",[e("router-link",{staticClass:"nav-link px-2 link-dark",attrs:{to:"/agentes"}},[t._v("Agentes")])],1),e("li",[e("router-link",{staticClass:"nav-link px-2 link-dark",attrs:{to:"/donaciones"}},[t._v("Donaciones")])],1)]),t._m(0),e("div",{staticClass:"dropdown text-end"},[e("router-link",{staticClass:"d-block link-dark text-decoration-none dropdown-toggle",attrs:{to:"#",id:"dropdownUser1","data-bs-toggle":"dropdown","aria-expanded":"false"}}),e("ul",{staticClass:"dropdown-menu text-small",attrs:{"aria-labelledby":"dropdownUser1"}},[e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:""}},[t._v("Buscar por ciudad")])],1),e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:""}},[t._v("Buscar por estrato")])],1),e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:""}},[t._v("Buscar por precio")])],1),t._m(1),e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:""}},[t._v("Salir")])],1)])],1),e("div",{staticClass:"text-end"},[e("router-link",{attrs:{to:"/login"}},[e("button",{staticClass:"btn btn-mio bg-opacity-50",attrs:{type:"button"}},[t._v(" Login ")])]),e("router-link",{attrs:{to:"/registro"}},[e("button",{staticClass:"btn btn-mio bg-opacity-50",attrs:{type:"button"}},[t._v(" Registro ")])])],1)])])])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"},[e("input",{staticClass:"form-control",attrs:{type:"search",placeholder:"Buscar...","aria-label":"Search"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("hr",{staticClass:"dropdown-divider"})])}],o={name:"Navbar",props:{msg:String}},c=o,d=(e("3309"),e("2877")),u=Object(d["a"])(c,r,l,!1,null,"5d2cbcc8",null),m=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"container pb-4 mb-md-3"},[t._m(0),e("div",{staticClass:"d-flex justify-content-between py-4 my-4 border-top"},[e("p",[t._v("Mobiliaria-IN © 2021 Todos los derechos reservados")]),e("ul",{staticClass:"list-unstyled d-flex"},[e("li",{staticClass:"ms-3"},[e("a",{staticClass:"link-dark",attrs:{href:"#"}},[e("svg",{staticClass:"bi",attrs:{width:"24",height:"24"}},[e("use",{attrs:{"xlink:href":"#twitter"}})])])]),e("li",{staticClass:"ms-3"},[e("a",{staticClass:"link-dark",attrs:{href:"#"}},[e("svg",{staticClass:"bi",attrs:{width:"24",height:"24"}},[e("use",{attrs:{"xlink:href":"#instagram"}})])])]),e("li",{staticClass:"ms-3"},[e("a",{staticClass:"link-dark",attrs:{href:"#"}},[e("svg",{staticClass:"bi",attrs:{width:"24",height:"24"}},[e("use",{attrs:{"xlink:href":"#facebook"}})])])])])])])},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"},[e("h5",[t._v("Apartamentos")]),e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Bogotá")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Medellín")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Cali")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Barranquilla")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Bucaramanga")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Villavicencio")])])])]),e("div",{staticClass:"col-2"},[e("h5",[t._v("Fincas")]),e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Bogotá")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Medellín")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Cali")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Barranquilla")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Bucaramanga")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Villavicencio")])])])]),e("div",{staticClass:"col-2"},[e("h5",[t._v("Casas")]),e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Bogotá")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Medellín")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Cali")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Barranquilla")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Bucaramanga")])]),e("li",{staticClass:"nav-item mb-2"},[e("a",{staticClass:"nav-link p-0 text-muted",attrs:{href:"#"}},[t._v("Villavicencio")])])])]),e("div",{staticClass:"col-4"},[e("form",{staticClass:"container-fluid"},[e("h5",[t._v("Quiere estar informado de las mejores propiedades en venta?")]),e("p",[t._v("Cada mes enviaremos un newsletter")]),e("div",{staticClass:"d-flex w-100 gap-2"},[e("label",{staticClass:"visually-hidden",attrs:{for:"newsletter1"}},[t._v("Email address")]),e("input",{staticClass:"form-control",attrs:{id:"newsletter1",type:"text",placeholder:"Email address"}}),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Subscribirse")])])])])])}],f=(e("b778"),{}),b=Object(d["a"])(f,p,v,!1,null,"584e3dda",null),h=b.exports,C={name:"App",components:{Navbar:m,Footer:h}},g=C,_=(e("034f"),Object(d["a"])(g,n,i,!1,null,null,null)),x=_.exports,y=e("8c4f"),w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container pb-4 mb-md-3"},[e("Busquedas"),e("Homemain"),e("Banner"),e("Calltoaction"),e("Instructions")],1)},k=[],j=e("e4e3"),E=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"px-lg-5 gradiente"},[e("div",{staticClass:"d-lg-flex justify-content-between align-items-center ps-lg-4"},[e("img",{staticClass:"d-block order-lg-2 me-lg-n5 flex-shrink-0",attrs:{src:"imagenes/casas.jpg",alt:"New House"}}),e("div",{staticClass:"position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1",staticStyle:{"max-width":"42rem","z-index":"10"}},[e("div",{staticClass:"pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap"},[e("h3",{staticClass:"h2 text-light fw-light pb-1 from-start"},[t._v("Nueva propiedad!")]),e("h2",{staticClass:"text-light display-5 from-start delay-1"},[t._v("Casa ultramoderna")]),e("p",{staticClass:"fs-lg text-light pb-3 from-start delay-2"},[t._v("6 cuartos, Sala -Comedor, Piscina, Salón social & mucho más... ")]),e("div",{staticClass:"d-table scale-up delay-4 mx-auto mx-lg-0"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"shop-grid-ls.html"}},[t._v("Comprala ya!"),e("i",{staticClass:"ci-arrow-right ms-2 me-n1"})])])])])])])}],B={name:"Banner"},O=B,$=(e("5e3d"),Object(d["a"])(O,E,S,!1,null,"25c21e3f",null)),q=$.exports,P=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container"},[e("div",{staticClass:"row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg",staticStyle:{"background-image":"url('imagenes/apto11.jpg')"}},[e("div",{staticClass:"d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"},[e("h3",{staticClass:"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"},[t._v("Apartamentos")]),e("ul",{staticClass:"d-flex list-unstyled mt-auto"},[e("li",{staticClass:"me-auto"},[e("p",[t._v("para estrenar")])])])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg",staticStyle:{"background-image":"url('imagenes/farm00.jpg')"}},[e("div",{staticClass:"d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"},[e("h3",{staticClass:"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"},[t._v("Fincas")])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg",staticStyle:{"background-image":"url('imagenes/house22.jpg')"}},[e("div",{staticClass:"d-flex flex-column h-100 p-5 pb-3 text-shadow-1"},[e("h3",{staticClass:"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"},[t._v("Casas")])])])])])])}],N={name:"Homemain",props:{title:String},components:{},computed:{}},M=N,T=Object(d["a"])(M,P,A,!1,null,null,null),L=T.exports,I=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container pb-4 mb-md-3 mt-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 mb-4"},[e("div",{staticClass:"d-sm-flex justify-content-between align-items-center  overflow-hidden rounded-3"},[e("div",{staticClass:"py-4 my-2 my-md-0 py-md-5 px-4 ms-md-3 text-center text-sm-start"},[e("h4",{staticClass:"fs-lg fw-light mb-2"},[t._v("Invierte en")]),e("h2",{staticClass:"mb-4"},[t._v("Apartamentos sobre planos")]),e("a",{staticClass:"btn btn-primary btn-shadow btn-sm",attrs:{href:"#"}},[t._v("Comprar")])]),e("img",{staticClass:"d-block ms-auto",attrs:{src:"imagenes/apartamentos.jpg",alt:"equipo"}})])]),e("div",{staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"d-flex flex-column h-100 justify-content-center bg-size-cover bg-position-center rounded-3",staticStyle:{"background-image":"url(img/blog/banner-bg.jpg)"}},[e("div",{staticClass:"py-4 my-2 px-4 text-center"},[e("div",{staticClass:"py-1"},[e("h5",{staticClass:"mb-2"},[t._v("Mobiliaria-IN")]),e("p",{staticClass:"fs-sm text-muted"},[t._v("Reserva ya el tuyo")]),e("a",{staticClass:"btn btn-primary btn-shadow btn-sm",attrs:{href:"#"}},[t._v("Contactar agente")])])])])])])])}],H={name:"Calltoaction"},z=H,F=Object(d["a"])(z,I,D,!1,null,"0999e681",null),U=F.exports,V=e("f104"),R={name:"Home",components:{Busquedas:j["a"],Homemain:L,Banner:q,Calltoaction:U,Instructions:V["a"]}},J=R,K=Object(d["a"])(J,w,k,!1,null,"7ada4028",null),Q=K.exports;s["a"].use(y["a"]);const G=[{path:"/",name:"home",component:Q},{path:"/propiedades",name:"Propiedades",component:function(){return e.e("about").then(e.bind(null,"febb"))}},{path:"/agentes",name:"Agentes",component:function(){return e.e("about").then(e.bind(null,"4d7e"))}},{path:"/donaciones",name:"Donaciones",component:function(){return e.e("about").then(e.bind(null,"41ca"))}},{path:"/login",name:"Login",component:function(){return e.e("about").then(e.bind(null,"a55b"))}},{path:"/registro",name:"Registro",component:function(){return e.e("about").then(e.bind(null,"0d36"))}},{path:"/contacto",name:"Contacto",component:function(){return e.e("about").then(e.bind(null,"c098"))}},{path:"/listapropiedades",name:"Listapropiedades",component:function(){return e.e("about").then(e.bind(null,"8eb2"))}},{path:"/detalles",name:"Detalles",component:function(){return e.e("about").then(e.bind(null,"a5fb"))}}],W=new y["a"]({routes:G});var X=W,Y=e("2f62");s["a"].use(Y["a"]);var Z=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:X,store:Z,render:function(t){return t(x)}}).$mount("#app")},"5e3d":function(t,a,e){"use strict";e("6565")},6565:function(t,a,e){},"85ec":function(t,a,e){},aacb:function(t,a,e){"use strict";e("14b9")},b778:function(t,a,e){"use strict";e("dc17")},dc17:function(t,a,e){},e4e3:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container pb-1 mb-md-3 buscar"},[e("input",{staticClass:"form-control form-control w-33",attrs:{type:"text",placeholder:"Ciudad","aria-label":"Search"}}),e("input",{staticClass:"form-control form-control w-33",attrs:{type:"text",placeholder:"Estrato","aria-label":"Search"}}),e("input",{staticClass:"form-control form-control w-33",attrs:{type:"text",placeholder:"Precio","aria-label":"Search"}})])}],i={name:"Busquedas",props:{title:String},components:{},computed:{}},r=i,l=(e("aacb"),e("2877")),o=Object(l["a"])(r,s,n,!1,null,"c687cecc",null);a["a"]=o.exports},e6e4:function(t,a,e){},f104:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container px-4 py-5",attrs:{id:"icon-grid"}},[e("h1",{staticClass:"pb-2"},[t._v("Cómo comprar")]),e("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"},[e("div",{staticClass:"col d-flex align-items-start"},[e("div",[e("h4",{staticClass:"fw-bold mb-0"},[t._v("Explora las ofertas en buscar")]),e("p",[t._v("En el listado de inmuebles encontrarás gran variedad de apartamentos, casas y fincas, en todos los estratos y de todos los precios, puedes ver las fotografías, detalles de la ubicación y hasta un tour virtual.")])])]),e("div",{staticClass:"col d-flex align-items-start"},[e("div",[e("h4",{staticClass:"fw-bold mb-0"},[t._v("Selecciona la propiedad de tus sueños")]),e("p",[t._v("Luego de elegir la finca, casa o apartamento de tus sueños, dale click en comprar y un agente se comunicará contigo para ir a verlo, si estás lejos de la ciudad podras pedir un tour virtual.")])])]),e("div",{staticClass:"col d-flex align-items-start"},[e("div",[e("h4",{staticClass:"fw-bold mb-0"},[t._v("Agenda una cita con uno de nuestros agentes")]),e("p",[t._v("Te contactaremos para saber que horario es conveniente para ti y programar la visita.")])])]),e("div",{staticClass:"col d-flex align-items-start"},[e("div",[e("h4",{staticClass:"fw-bold mb-0"},[t._v("Contacta al agente")]),e("p",[t._v("El agente te acompañará a conocer el inmueble, recorrerán cada rincón, o si estás lejos el agente te lo mostrará virtualmente.")])])]),e("div",{staticClass:"col d-flex align-items-start"},[e("div",[e("h4",{staticClass:"fw-bold mb-0"},[t._v("Haz tu declaración de compra")]),e("p",[t._v("Con el botón comprar el agente inmobiliario se comunicará contigo para hacer los tramites de compra y hacer efectiva la transacción.")])])]),e("div",{staticClass:"col d-flex align-items-start"},[e("div",[e("h4",{staticClass:"fw-bold mb-0"},[t._v("Disfruta")]),e("p",[t._v("Una vez los trámites se hayan realizado la propiedad pasará a tu portafolio de inversiones y empezaras a disfrutar de ella o podrás arrendarla o venderla a un mejor precio.")])])]),e("div",{staticClass:"col d-flex align-items-start"},[e("div",[e("h4",{staticClass:"fw-bold mb-0"},[t._v("Dona")]),e("p",[t._v("Si te gustó el servicio dona a nuestra agencia inmobiliaria la cantidad que quieras.")])])]),e("div",{staticClass:"col d-flex align-items-start"},[e("div",[e("h4",{staticClass:"fw-bold mb-0"},[t._v("Vende tu propiedad")]),e("p",[t._v("Si lo que quieres es vender tu propiedad, registrate y sube las fotos y caracteristicas, un agente te contactará para establecer el precio.")])])])])])}],i={name:"Instructions"},r=i,l=e("2877"),o=Object(l["a"])(r,s,n,!1,null,"565a323e",null);a["a"]=o.exports}});
//# sourceMappingURL=app.f55544e3.js.map