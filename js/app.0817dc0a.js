(function(e){function t(t){for(var a,o,s=t[0],i=t[1],l=t[2],b=0,d=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"014e":function(e,t,n){},"0c0c":function(e,t,n){},"1a54":function(e,t,n){"use strict";n("7acf")},"281b":function(e,t,n){},"2a14":function(e,t,n){},"33db":function(e,t,n){},"41c9":function(e,t,n){"use strict";n("dd7e")},"49f8":function(e,t,n){var a={"./en.json":"edd4","./ru.json":"7704"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="49f8"},"4bcc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("159b"),n("b0c0");var a=n("7a23"),r=n("5502"),c=n("47e2");n("ddb0"),n("ac1f"),n("466d");function o(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];t[r]=e(n).default}})),t}var s=Object(c["a"])({legacy:!1,globalInjection:!0,locale:"ru",fallbackLocale:"en",messages:o()}),i={class:"social"},l=Object(a["i"])('<li data-v-3db57fa2><a id="social-whatsapp" href="https://wa.me/79015398173" data-v-3db57fa2><i class="fab fa-whatsapp" data-v-3db57fa2></i></a></li><li data-v-3db57fa2><a id="social-telegram" href="https://telegram.me/e_garagan" data-v-3db57fa2><i class="fab fa-telegram" data-v-3db57fa2></i></a></li><li data-v-3db57fa2><a id="social-youtube" href="viber://chat?number=79015397183" data-v-3db57fa2><i class="fab fa-viber" data-v-3db57fa2></i></a></li>',3),u=[l];function b(e,t){return Object(a["t"])(),Object(a["g"])("ul",i,u)}n("6f52");var d=n("6b0d"),m=n.n(d);const p={},h=m()(p,[["render",b],["__scopeId","data-v-3db57fa2"]]);var j=h,f={class:"portfolio-list"},O=["href"],g={class:"accent-text"},v=Object(a["j"])(")"),A={props:["links"],setup:function(e){var t=e;return function(e,n){return Object(a["t"])(),Object(a["g"])("ul",f,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["y"])(t.links,(function(e){return Object(a["t"])(),Object(a["g"])("li",{key:e},[Object(a["h"])("a",{href:e.address},[Object(a["j"])(Object(a["A"])(e.name)+" (",1),Object(a["h"])("span",g,Object(a["A"])(e.tech),1),v],8,O)])})),128))])}}};n("bad2");const k=m()(A,[["__scopeId","data-v-65802282"]]);var z=k,w={class:"progress"},y={props:["prof"],setup:function(e){var t=e,n=Object(a["x"])(0);return Object(a["r"])((function(){var e=setInterval((function(){n.value<t.prof?n.value+=10:clearInterval(e)}),100)})),function(e,t){return Object(a["t"])(),Object(a["g"])("div",w,[Object(a["h"])("div",{class:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:Object(a["q"])("width: ".concat(Object(a["B"])(n),"%"))},null,4)])}}};n("a7ba");const T=m()(y,[["__scopeId","data-v-581249cb"]]);var B=T,x={class:"skill-list"},S={props:["skills"],setup:function(e){var t=e;return function(e,n){return Object(a["t"])(),Object(a["g"])("ul",x,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["y"])(t.skills,(function(e){return Object(a["t"])(),Object(a["g"])("li",{key:e},[Object(a["h"])("p",null,Object(a["A"])(e.name),1),Object(a["k"])(Object(a["B"])(B),{prof:e.prof},null,8,["prof"])])})),128))])}}};n("1a54");const C=m()(S,[["__scopeId","data-v-5e427645"]]);var M=C,P={class:"portfolio-list"},V={class:"title"},D={class:"years"},I={class:"desc"},L={props:["experience"],setup:function(e){var t=e;return function(e,n){return Object(a["t"])(),Object(a["g"])("ul",P,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["y"])(t.experience,(function(t){return Object(a["t"])(),Object(a["g"])("li",{key:t},[Object(a["h"])("p",V,Object(a["A"])(e.$t("experience."+t+".title")),1),Object(a["h"])("p",D,Object(a["A"])(e.$t("experience."+t+".years")),1),Object(a["h"])("p",I,Object(a["A"])(e.$t("experience."+t+".desc")),1)])})),128))])}}};n("bc1e");const R=m()(L,[["__scopeId","data-v-3da68d00"]]);var U=R,Z={class:"locale-picker"},_=["onClick","src","alt"],H={props:["languages"],setup:function(e){var t=this,n=e;return function(e,r){return Object(a["t"])(),Object(a["g"])("div",Z,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["y"])(n.languages,(function(e){return Object(a["t"])(),Object(a["g"])("img",{onClick:function(n){return t.$emit("changeLocale",e.name)},key:e,src:e.flag,alt:e.name},null,8,_)})),128))])}}};n("5db3");const W=m()(H,[["__scopeId","data-v-64c50678"]]);var E=W,J=function(e){return Object(a["v"])("data-v-be15fe68"),e=e(),Object(a["u"])(),e},q={class:"theme-switch"},G={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#2b2b2b",class:"bi bi-moon-stars-fill mr-3",viewBox:"0 0 16 16"},F=J((function(){return Object(a["h"])("path",{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"},null,-1)})),N=J((function(){return Object(a["h"])("path",{d:"M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"},null,-1)})),X=[F,N],K={class:"form-check form-switch"},Y={key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-sun",viewBox:"0 0 16 16"},Q=J((function(){return Object(a["h"])("path",{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"},null,-1)})),$=[Q],ee={setup:function(e){var t=Object(r["b"])();return function(e,n){return Object(a["t"])(),Object(a["g"])("div",q,[Object(a["B"])(t).state.lightTheme?(Object(a["t"])(),Object(a["g"])("svg",G,X)):Object(a["f"])("",!0),Object(a["h"])("div",K,[Object(a["h"])("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:n[0]||(n[0]=function(e){return Object(a["B"])(t).commit("toggleThemeSwitch")})})]),Object(a["B"])(t).state.darkTheme?(Object(a["t"])(),Object(a["g"])("svg",Y,$)):Object(a["f"])("",!0)])}}};n("f526");const te=m()(ee,[["__scopeId","data-v-be15fe68"]]);var ne=te,ae={ref:"canvas"},re={class:"layout"},ce={class:"aside-inner"},oe={class:"aside-header"},se={class:"meta"},ie=["src","alt"],le={class:"meta-text"},ue=Object(a["h"])("span",null,"35",-1),be={class:"about"},de={class:"section-title"},me={class:"section-text"},pe={class:"section"},he={class:"split-two"},je={class:"section-title"},fe={class:"section-text"},Oe={class:"section-title"},ge={class:"section-text"},ve={class:"section-title"},Ae={class:"section-text"},ke={setup:function(e){var t=Object(r["b"])(),n=Object(c["b"])({inheritLocale:!0,useScope:"global"}),o=n.t,i=function(e){s.global.locale.value=e};return Object(a["r"])((function(){console.clear(),console.warn("Нашли ошибку? Напишите мне на gagarinbrood@gmail.com")})),function(e,n){return Object(a["t"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("canvas",ae,null,512),Object(a["h"])("div",{class:Object(a["p"])(["layout-wrap",{"light-theme-text":Object(a["B"])(t).state.lightTheme,"dark-theme-text":Object(a["B"])(t).state.darkTheme,"":Object(a["B"])(t).state.lightTheme,"dark-theme-bg":Object(a["B"])(t).state.darkTheme}])},[Object(a["h"])("div",re,[Object(a["h"])("aside",{ref:"aside",class:Object(a["p"])({"light-theme-bg":Object(a["B"])(t).state.lightTheme,"":Object(a["B"])(t).state.darkTheme})},[Object(a["h"])("div",ce,[Object(a["h"])("div",oe,[Object(a["k"])(E,{languages:Object(a["B"])(t).state.locales,onChangeLocale:n[0]||(n[0]=function(e){return i(e)})},null,8,["languages"]),Object(a["k"])(ne)]),Object(a["h"])("div",se,[Object(a["h"])("img",{src:Object(a["B"])(t).state.avatar.path,alt:Object(a["B"])(t).state.avatar.alt},null,8,ie),Object(a["h"])("div",le,[Object(a["h"])("p",{class:Object(a["p"])({"light-theme-text":Object(a["B"])(t).state.lightTheme,"dark-theme-text":Object(a["B"])(t).state.darkTheme})},[Object(a["j"])(Object(a["A"])(Object(a["B"])(o)("meta.keys.name"))+": ",1),Object(a["h"])("span",null,Object(a["A"])(Object(a["B"])(o)("meta.values.name")),1)],2),Object(a["h"])("p",{class:Object(a["p"])({"light-theme-text":Object(a["B"])(t).state.lightTheme,"dark-theme-text":Object(a["B"])(t).state.darkTheme})},[Object(a["j"])(Object(a["A"])(Object(a["B"])(o)("meta.keys.age"))+": ",1),ue],2),Object(a["h"])("p",{class:Object(a["p"])({"light-theme-text":Object(a["B"])(t).state.lightTheme,"dark-theme-text":Object(a["B"])(t).state.darkTheme})},[Object(a["j"])(Object(a["A"])(Object(a["B"])(o)("meta.keys.country"))+": ",1),Object(a["h"])("span",null,Object(a["A"])(Object(a["B"])(o)("meta.values.country")),1)],2),Object(a["h"])("p",{class:Object(a["p"])({"light-theme-text":Object(a["B"])(t).state.lightTheme,"dark-theme-text":Object(a["B"])(t).state.darkTheme})},[Object(a["j"])(Object(a["A"])(Object(a["B"])(o)("meta.keys.position"))+": ",1),Object(a["h"])("span",null,Object(a["A"])(Object(a["B"])(o)("meta.values.position")),1)],2)])]),Object(a["k"])(j)])],2),Object(a["k"])(a["c"],{name:"slide",appear:""},{default:Object(a["E"])((function(){return[Object(a["h"])("main",null,[Object(a["h"])("section",be,[Object(a["h"])("div",de,Object(a["A"])(Object(a["B"])(o)("sections.about"))+":",1),Object(a["h"])("div",me,Object(a["A"])(Object(a["B"])(o)("about")),1)]),Object(a["h"])("section",pe,[Object(a["h"])("div",he,[Object(a["h"])("div",null,[Object(a["h"])("div",je,Object(a["A"])(Object(a["B"])(o)("sections.skills"))+":",1),Object(a["h"])("div",fe,[Object(a["k"])(M,{skills:Object(a["B"])(t).state.skills},null,8,["skills"])])]),Object(a["h"])("div",null,[Object(a["h"])("div",Oe,Object(a["A"])(Object(a["B"])(o)("sections.experience"))+":",1),Object(a["h"])("div",ge,[Object(a["k"])(U,{experience:Object(a["B"])(t).state.experience},null,8,["experience"])])])])]),Object(a["h"])("section",null,[Object(a["h"])("div",ve,Object(a["A"])(Object(a["B"])(o)("sections.pages"))+": ",1),Object(a["h"])("div",Ae,[Object(a["k"])(z,{links:Object(a["B"])(t).state.myPages},null,8,["links"])])])])]})),_:1})])],2)],64)}}};n("a158");const ze=ke;var we=ze,ye=Object(r["a"])({state:{locales:[{name:"en",flag:n("70ff")},{name:"ru",flag:n("bf73")}],avatar:{path:"/images/avatar.jpg",alt:"My face. Black and white"},myPages:[{name:"Mr. Miyagi",address:"https://mrmiyagisalesmethode.com/",tech:"wordpress"},{name:"zuzumaster.ru",address:"https://zuzumaster.ru",tech:"vue.js"},{name:"sales-brothers.de",address:"https://sales-brothers.de",tech:"wordpress"},{name:"Remote Helpers",address:"https://new.rh-s.com",tech:"wordpress"},{name:"Himpost",address:"https://himpost.com/",tech:"joomla"},{name:"nalivnoy pol (e-shop#1)",address:"http://nalivnoy.himpost.com/",tech:"vue.js"},{name:"polimochevina (e-shop#2)",address:"http://polimochevina.himpost.com/",tech:"vue.js"},{name:"kover (e-shop#3)",address:"http://kover.himpost.com/",tech:"vue.js"},{name:"d4 (e-shop#4)",address:"http://d4.himpost.com/",tech:"vue.js"},{name:"pedrollo",address:"http://pedrollo.services/",tech:"HTML/CSS"}],skills:[{name:"HTML",prof:100},{name:"CSS",prof:100},{name:"JavaScript",prof:90},{name:"TypeScript",prof:80},{name:"vue.js",prof:90},{name:"WordPress",prof:90},{name:"PHP",prof:40},{name:"Git",prof:100}],experience:["rh","himpost","root"],darkTheme:!0,lightTheme:!1},mutations:{toggleThemeSwitch:function(e){e.darkTheme=!e.darkTheme,e.lightTheme=!e.lightTheme}}}),Te=["href","id","onclick"];function Be(e,t,n,r,c,o){return Object(a["t"])(),Object(a["g"])("a",{href:n.href,style:Object(a["q"])(o.btnStyle),id:n.id,onclick:n.onclick},[Object(a["z"])(e.$slots,"default",{},void 0,!0)],12,Te)}var xe={name:"TheBtn",props:{color:{required:!0},href:{required:!1},id:{required:!1},onclick:{required:!1}},computed:{btnStyle:function(){return"--btn-color:"+this.color}}};n("a461");const Se=m()(xe,[["render",Be],["__scopeId","data-v-41fa3314"]]);var Ce=Se,Me=["placeholder","value"];function Pe(e,t,n,r,c,o){var s=this;return Object(a["t"])(),Object(a["g"])("input",{placeholder:n.placeholder,value:n.modelValue,onInput:t[0]||(t[0]=function(e){return s.$emit("update:modelValue",e.target.value)})},null,40,Me)}var Ve={name:"TheInput",props:{placeholder:{required:!0},modelValue:{required:!1}}};const De=m()(Ve,[["render",Pe]]);var Ie=De,Le=function(e){return Object(a["v"])("data-v-81409d9a"),e=e(),Object(a["u"])(),e},Re={class:"select-item"},Ue=Le((function(){return Object(a["h"])("option",{disabled:"",selected:""},"Выберите значение:",-1)})),Ze=["value"];function _e(e,t,n,r,c,o){return Object(a["t"])(),Object(a["g"])("div",Re,[Object(a["h"])("label",null,[Object(a["z"])(e.$slots,"default",{},void 0,!0)]),Object(a["h"])("select",{onChange:t[0]||(t[0]=function(e){return o.changeCategory(e)})},[Ue,(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["y"])(n.options,(function(e){return Object(a["t"])(),Object(a["g"])("option",{key:e.id,value:e.id},Object(a["A"])(e.name),9,Ze)})),128))],32)])}var He={name:"TheSelectMain",emits:["update:modelValue","reset"],props:["options","modelValue"],methods:{changeCategory:function(e){this.$emit("update:modelValue",e.target.value),this.$emit("reset")}}};n("b75a");const We=m()(He,[["render",_e],["__scopeId","data-v-81409d9a"]]);var Ee=We,Je=function(e){return Object(a["v"])("data-v-41eb497c"),e=e(),Object(a["u"])(),e},qe={class:"select-item"},Ge=Je((function(){return Object(a["h"])("option",{value:"",selected:""},"Выберите значение:",-1)})),Fe=["value"];function Ne(e,t,n,r,c,o){return Object(a["t"])(),Object(a["g"])("div",qe,[Object(a["h"])("label",null,[Object(a["z"])(e.$slots,"default",{},void 0,!0)]),Object(a["F"])(Object(a["h"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.defaultValue=e}),onChange:t[1]||(t[1]=function(e){return o.changeSubcategory(e)})},[Ge,(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["y"])(n.options,(function(e,t){return Object(a["t"])(),Object(a["g"])("option",{key:t,value:t},Object(a["A"])(t),9,Fe)})),128))],544),[[a["C"],c.defaultValue]])])}var Xe={name:"TheSelectSub",data:function(){return{defaultValue:""}},emits:["update:modelValue"],props:["options","modelValue"],methods:{changeSubcategory:function(e){this.$emit("update:modelValue",e.target.value)}},watch:{options:function(){this.defaultValue=""}}};n("9d1c");const Ke=m()(Xe,[["render",Ne],["__scopeId","data-v-41eb497c"]]);var Ye=Ke,Qe=["cols","rows","value","placeholder"];function $e(e,t,n,r,c,o){var s=this;return Object(a["t"])(),Object(a["g"])("textarea",{cols:n.cols,rows:n.rows,value:n.modelValue,placeholder:n.placeholder,onInput:t[0]||(t[0]=function(e){return s.$emit("update:modelValue",e.target.value)})},null,40,Qe)}var et={name:"TheTextarea",props:{cols:{required:!1},rows:{required:!1},placeholder:{required:!0},modelValue:{required:!1}}};n("41c9");const tt=m()(et,[["render",$e]]);var nt=tt,at=[Ce,Ie,Ee,Ye,nt],rt=Object(a["e"])(we);at.forEach((function(e){rt.component(e.name,e)})),rt.use(ye).use(s).mount("#app")},"5db3":function(e,t,n){"use strict";n("0c0c")},6469:function(e,t,n){},"6f52":function(e,t,n){"use strict";n("6469")},"70ff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAABPlBMVEUAAADw1tbDvczkysris7LdVE/uvbzeb23oWlLpd3Ln5+rnNiXcMCfgMibr7OzgMibr7OzgMyfn5+fhp6bn5+fl19ctOY/cMCfcMCffMSfnNiXcMCfn5+dISZHjWVLNU2fNa3vfcm/kvcDz9PXtsbB2e6pET5dQV5krO5Lz9PXcMCfcMCfnNiW/wNFQWJrx5OR8gawpOZHdTkjS0tstO5HsoqDgmZfnNiXfhYKbnrsuOY/z9PUoOZE2OY3z9PXnNiXn5+fcMCcoOZHtt7bqiofw2NjirKtNVpnkzMzggoCSlbZSW5wyQJPq6uudn7x+g61cY5/MN1LX2OGusMaYm7qFibFzeahtc6VmbKI4RZXt7e63ucylp8GipcCJjbLosrFGUJhDTpdATJbeMSfjNCbUwMqLjrPSoq0qO5LiMybzGuEJAAAAPnRSTlMA/vj9+Pj59/n4K8+hWDAsBQXv7+vR0dHOzaF4WAb7+vn5+O/v7+/s7Ovr6urS0tCiop57e3l5eXRbWlgwLuq5wr0AAAEuSURBVCjPZdJnW8IwEAfwwy0yHajg3nvv0XEVg21ti8wqIMP5/b+AacpDiPxe5v88uUvuoG3+5jiBWXk2FI6D4HQTseJkZbml7qSACx6UzZxhkM90OpDJZKaC0Ha3jm+k1KiWXyRJelYUZTwCzP0GPTdz5SL51jTt/ZGaiLJkv27Tu2xSKWVlSvVMA3VWM6um/WMZRWdplFoe9lzRdrcsrGG+bjd0QuuwQtRkDK6xgFZTR50UHZa8KswcHLl5V0eLFJpfzuIItTDInEAC84iou4gFg3XwoTIz0NdlZcgz4AOph+KDQI9+H4zJIl4n+T/59ZMQ3Eoi/p7YthjwP4DzB9ETcwGU0AP/ayq6pnHCfCCyKnXwmTLBw7Svswfc5Z7sa6m7KRDEw0naSfe+/QGlWW/QQWXiUgAAAABJRU5ErkJggg=="},7704:function(e,t,n){"use strict";n.r(t),t["default"]={meta:{keys:{name:e=>{const{normalize:t}=e;return t(["Имя"])},age:e=>{const{normalize:t}=e;return t(["Возраст"])},country:e=>{const{normalize:t}=e;return t(["Страна"])},position:e=>{const{normalize:t}=e;return t(["Специализация"])}},values:{name:e=>{const{normalize:t}=e;return t(["Гараган Евгений"])},country:e=>{const{normalize:t}=e;return t(["Россия"])},position:e=>{const{normalize:t}=e;return t(["Фронт Енд Разработчик"])}}},form:{title:e=>{const{normalize:t}=e;return t(["...свяжитесь со мной"])},namePlaceholder:e=>{const{normalize:t}=e;return t(["имя"])},msgPlaceholder:e=>{const{normalize:t}=e;return t(["сообщение"])},sendText:e=>{const{normalize:t}=e;return t(["ОТОСЛАТЬ"])},afterSendBtn:e=>{const{normalize:t}=e;return t(["заполнение полей необязательно"])}},sections:{about:e=>{const{normalize:t}=e;return t(["Обо мне"])},skills:e=>{const{normalize:t}=e;return t(["Скилы"])},experience:e=>{const{normalize:t}=e;return t(["Опыт работы"])},pages:e=>{const{normalize:t}=e;return t(["Страницы, созданные мной (от новых к старым)"])}},experience:{rh:{title:e=>{const{normalize:t}=e;return t(["Remote Helpers"])},years:e=>{const{normalize:t}=e;return t(["2021 - сейчас"])},desc:e=>{const{normalize:t}=e;return t(["Компания занимается аутсорсингом для западного рынка. Работал со многими заказчиками, как правило создавая сначала дизайн, потом верстку. Технологии задействованы: в основном WordPress и vue.js"])}},himpost:{title:e=>{const{normalize:t}=e;return t(["Химпоставщик"])},years:e=>{const{normalize:t}=e;return t(["2021 - 2021"])},desc:e=>{const{normalize:t}=e;return t(["Химическое производство. Занимался их основным сайтом (полный редизайн и ведение сайта). Также сделал для них несколько небольших интернет-магазинов на vue.js с нуля."])}},root:{title:e=>{const{normalize:t}=e;return t(["root.ua"])},years:e=>{const{normalize:t}=e;return t(["2017 - 2018"])},desc:e=>{const{normalize:t}=e;return t(["Моя первая IT работа. Ребята научили меня основам верстки и дали первые заказы. С ними я сверстал свой первый сайт."])}}},about:e=>{const{normalize:t}=e;return t(["Изучаю программирование с 2015 года. Отлично разбираюсь в HTML, CSS, JS и Vue 3. Изучаю Typescript. Интересуюсь анимацией. Пытаюсь создать свою игру ;) Много работал с WordPress, Joomla и Drupal но предпочтительней конечно JS. Часто создавал и дизайн для сайта, а потом его же и верстал. Дизайны создавал на Figma. Работаю с Git."])}}},"7acf":function(e,t,n){},"9a56":function(e,t,n){},"9d1c":function(e,t,n){"use strict";n("281b")},"9d2d":function(e,t,n){},a158:function(e,t,n){"use strict";n("c366")},a461:function(e,t,n){"use strict";n("2a14")},a7ba:function(e,t,n){"use strict";n("33db")},b75a:function(e,t,n){"use strict";n("9d2d")},bad2:function(e,t,n){"use strict";n("014e")},bc1e:function(e,t,n){"use strict";n("4bcc")},bf73:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAV1BMVEUAAADsx83w8PDYAijZCCsRVrXw8PDYCizw8PDZFDLw8PDcN07w8PAHU7QGU7Tw8PBogcFjUqjZFTHw8PDw8PDYACfYBSnYBCkAUrTw8PDYACd4jMRsR6DG7pTfAAAAGHRSTlMABO7u09PRfHsuLAfQo6OiXFxcWTAwo6P5qz+ZAAAAkklEQVQoz53OSxLCIBBF0ddA+IRo/ppW979OSwqVmGbimd56Dcho7jtm7vqZUCKv+E35orWWS7ZFtijeU0te5FCmtCLLR5YAeJZ4gJRYFGG4ywacNtkZTaU02Gr+KvV36n8bH7IRUd8kOgJOLA4AGSEYAoCgj7cCklX/hhVZMPtTAR/k9HfgCKU4XV9Dc5kikDwB3h0uv+HSJ1kAAAAASUVORK5CYII="},c366:function(e,t,n){},dd7e:function(e,t,n){},edd4:function(e,t,n){"use strict";n.r(t),t["default"]={meta:{keys:{name:e=>{const{normalize:t}=e;return t(["Name"])},age:e=>{const{normalize:t}=e;return t(["Age"])},country:e=>{const{normalize:t}=e;return t(["Country"])},position:e=>{const{normalize:t}=e;return t(["Position"])}},values:{name:e=>{const{normalize:t}=e;return t(["Eugene Garagan"])},country:e=>{const{normalize:t}=e;return t(["Russia"])},position:e=>{const{normalize:t}=e;return t(["Front End Developer"])}}},form:{title:e=>{const{normalize:t}=e;return t(["...drop me a line"])},namePlaceholder:e=>{const{normalize:t}=e;return t(["name"])},msgPlaceholder:e=>{const{normalize:t}=e;return t(["message"])},sendText:e=>{const{normalize:t}=e;return t(["SEND"])},afterSendBtn:e=>{const{normalize:t}=e;return t(["All the fields are optional"])}},sections:{about:e=>{const{normalize:t}=e;return t(["About me"])},skills:e=>{const{normalize:t}=e;return t(["Skills"])},experience:e=>{const{normalize:t}=e;return t(["Work Experience"])},pages:e=>{const{normalize:t}=e;return t(["Web pages created by me (reverse-cronological)"])}},experience:{rh:{title:e=>{const{normalize:t}=e;return t(["Remote Helpers"])},years:e=>{const{normalize:t}=e;return t(["2021 - now"])},desc:e=>{const{normalize:t}=e;return t(["Working with different companies as a contractor. Mostly creating web pages from scratch: first designing, then coding in WordPress or Vue."])}},himpost:{title:e=>{const{normalize:t}=e;return t(["Himpost"])},years:e=>{const{normalize:t}=e;return t(["2021 - 2021"])},desc:e=>{const{normalize:t}=e;return t(["Company, specializing in chemical production. Redesigned their main website and created a few small e-shops for them using vue.js"])}},root:{title:e=>{const{normalize:t}=e;return t(["root.ua"])},years:e=>{const{normalize:t}=e;return t(["2017 - 2018"])},desc:e=>{const{normalize:t}=e;return t(["Learning basics about HTML/CSS and taking my first steps towards being a front end dev. Creating my first web-pages was so exiting!"])}}},about:e=>{const{normalize:t}=e;return t(["I have been learning programming since 2015. I am well versed in HTML, CSS, JS and Vue 3. Currently learning Typescript, and canvas animation. Trying to create my own game ;) I worked a lot with WordPress, Joomla and Drupal, but JS is preferable. Often created web site designs using Figma. Use Git."])}}},f526:function(e,t,n){"use strict";n("9a56")}});
//# sourceMappingURL=app.0817dc0a.js.map