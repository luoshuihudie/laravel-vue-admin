(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-25d3"],{"0EZH":function(t,e,n){},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},FkC7:function(t,e,n){"use strict";var o=n("0EZH");n.n(o).a},QMEO:function(t,e,n){"use strict";(function(t){var e=n("EJiy"),o=n.n(e);!function(e,n){"object"===o()(t)&&"object"===o()(t.exports)?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("Geetest requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:void 0,function(t,e){if(void 0===t)throw new Error("Geetest requires browser environment");var n=t.document,i=t.Math,r=n.getElementsByTagName("head")[0];function a(t){this._obj=t}function s(t){var e=this;new a(t)._each(function(t,n){e[t]=n})}a.prototype={_each:function(t){var e=this._obj;for(var n in e)e.hasOwnProperty(n)&&t(n,e[n]);return this}},s.prototype={api_server:"api.geetest.com",protocol:"http://",type_path:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){return c(this.type)?this.fallback_config[this.type]:this.new_captcha?this.fallback_config.fullpage:this.fallback_config.slide},_extend:function(t){var e=this;new a(t)._each(function(t,n){e[t]=n})}};var c=function(t){return"string"==typeof t},l=function(t){return"function"==typeof t},u={},d={},f=function(t,e,n,o){e=function(t){return t.replace(/^https?:\/\/|\/$/g,"")}(e);var i=function(t){return 0!==(t=t.replace(/\/+/g,"/")).indexOf("/")&&(t="/"+t),t}(n)+function(t){if(!t)return"";var e="?";return new a(t)._each(function(t,n){(c(n)||function(t){return"number"==typeof t}(n)||function(t){return"boolean"==typeof t}(n))&&(e=e+encodeURIComponent(t)+"="+encodeURIComponent(n)+"&")}),"?"===e&&(e=""),e.replace(/&$/,"")}(o);return e&&(i=t+e+i),i},p=function(t,e,o,i,a){!function s(c){!function(t,e){var o=n.createElement("script");o.charset="UTF-8",o.async=!0,o.onerror=function(){e(!0)};var i=!1;o.onload=o.onreadystatechange=function(){i||o.readyState&&"loaded"!==o.readyState&&"complete"!==o.readyState||(i=!0,setTimeout(function(){e(!1)},0))},o.src=t,r.appendChild(o)}(f(t,e[c],o,i),function(t){t?c>=e.length-1?a(!0):s(c+1):a(!1)})}(0)},g=function(e,n,r,a){if(function(t){return"object"===(void 0===t?"undefined":o()(t))&&null!==t}(r.getLib))return r._extend(r.getLib),void a(r);if(r.offline)a(r._get_fallback_config());else{var s="geetest_"+(parseInt(1e4*i.random())+(new Date).valueOf());t[s]=function(e){"success"===e.status?a(e.data):e.status?a(r._get_fallback_config()):a(e),t[s]=void 0;try{delete t[s]}catch(t){}},p(r.protocol,e,n,{gt:r.gt,callback:s},function(t){t&&a(r._get_fallback_config())})}},h=function(t,e){var n={networkError:"网络错误"};if("function"!=typeof e.onError)throw new Error(n[t]);e.onError(n[t])};t.Geetest&&(d.slide="loaded");var m=function(e,n){var o=new s(e);e.https?o.protocol="https://":e.protocol||(o.protocol=t.location.protocol+"//"),g([o.api_server||o.apiserver],o.type_path,o,function(e){var i=e.type,r=function(){o._extend(e),n(new t.Geetest(o))};u[i]=u[i]||[];var a=d[i]||"init";"init"===a?(d[i]="loading",u[i].push(r),p(o.protocol,e.static_servers||e.domains,e[i]||e.path,null,function(t){if(t)d[i]="fail",h("networkError",o);else{d[i]="loaded";for(var e=u[i],n=0,r=e.length;n<r;n+=1){var a=e[n];l(a)&&a()}u[i]=[]}})):"loaded"===a?r():"fail"===a?h("networkError",o):"loading"===a&&u[i].push(r)})};return t.initGeetest=m,m})}).call(this,n("3UD+")(t))},c11S:function(t,e,n){"use strict";var o=n("gTgX");n.n(o).a},gTgX:function(t,e,n){},ntYl:function(t,e,n){"use strict";n.r(e);n("QMEO");var o=n("t3Un");var i={name:"Login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(t,e,n){n()}}],password:[{required:!0,trigger:"blur",validator:function(t,e,n){e.length<5?n(new Error("密码不能小于5位")):n()}}]},loading:!1,pwdType:"password",redirect:void 0,gtCapValid:"",uuidData:""}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){this.init()},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var t=this;if(!this.gtCapValid)return this.$message({message:"请先点击按钮验证",type:"warning"}),!1;this.$refs.loginForm.validate(function(e){if(!e)return!1;t.loading=!0;var n=t.mergeJsonObject(t.loginForm,{uuid:t.uuidData});n=t.mergeJsonObject(n,t.gtCapValid),t.$store.dispatch("Login",n).then(function(){t.loading=!1,t.$router.push({path:t.redirect||"/"})}).catch(function(){t.init(),t.loading=!1})})},uuid:function(){for(var t=[],e=0;e<36;e++)t[e]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]="0123456789abcdef".substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")},mergeJsonObject:function(t,e){var n={};for(var o in t)n[o]=t[o];for(var i in e)n[i]=e[i];return n},init:function(){var t=this;this.uuidData=this.uuid(),this.gtCapValid="",o.a.get("/api/user/startCaptcha?uuid="+this.uuidData).then(function(e){var n=e.data;n.challenge&&n.gt&&window.initGeetest({gt:n.gt,challenge:n.challenge,offline:!n.success,new_captcha:n.new_captcha,product:"float",width:"448px"},function(e){document.getElementById("captcha").innerHTML="",e.appendTo("#captcha"),e.onReady(function(){}),e.onSuccess(function(){t.gtCapValid=e.getValidate()}),e.onError(function(){t.$notify.error({title:"错误",message:"网络错误，请稍后重试"})})})})}}},r=(n("c11S"),n("FkC7"),n("KHd+")),a=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("h3",{staticClass:"title"},[t._v("admin-login")]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),n("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"username"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),n("el-input",{attrs:{type:t.pwdType,name:"password","auto-complete":"on",placeholder:"password"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t._v(" "),n("el-form-item",[n("el-row",[n("el-col",{staticStyle:{height:"42px"},attrs:{id:"captcha",span:10}},[n("p",{staticClass:"show",attrs:{id:"wait"}}),t._v(" "),n("p",{staticClass:"hide",attrs:{id:"notice"}},[t._v("请先完成验证")])])],1)],1),t._v(" "),n("el-form-item",[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("\n        Sign in\n      ")])],1)],1)],1)},[],!1,null,"62b02d12",null);a.options.__file="index.vue";e.default=a.exports}}]);