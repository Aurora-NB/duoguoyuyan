(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73dda026"],{"0164":function(t,e,n){},2017:function(t,e,n){"use strict";n("0164")},2863:function(t,e,n){},7550:function(t,e,n){"use strict";n("2863")},"9ed6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v("管理员登录")])]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),n("el-input",{attrs:{name:"username",type:"text",tabindex:"1","auto-complete":"on",placeholder:"管理员账户"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),n("el-input",{attrs:{type:t.passwordType,name:"password","auto-complete":"on",tabindex:"2","show-password":"",placeholder:"管理员密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"code"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"lock"}})],1),t._v(" "),n("el-input",{staticStyle:{width:"60%"},attrs:{"auto-complete":"off",name:"code",tabindex:"2",placeholder:"验证码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.code,callback:function(e){t.$set(t.loginForm,"code",e)},expression:"loginForm.code"}}),t._v(" "),n("div",{staticClass:"login-code"},[n("img",{attrs:{src:t.codeImg},on:{click:t.getCode}})])],1),t._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")]),t._v(" "),n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"tips"},[n("span",[t._v(" 超级管理员用户名: admin123")]),t._v(" "),n("span",[t._v(" 超级管理员用户名：admin123")])]),t._v(" "),n("div",{staticClass:"tips"},[n("span",[t._v(" 商城管理员用户名: mall123")]),t._v(" "),n("span",[t._v(" 商城管理员用户名：mall123")])]),t._v(" "),n("div",{staticClass:"tips"},[n("span",[t._v(" 推广管理员用户名: promotion123")]),t._v(" "),n("span",[t._v(" 推广管理员用户名：promotion123")])])])],1),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[t._v("\n    Copyright © 2020 xxx.com 版权所有 "),n("a",{attrs:{href:"http://www.example.com/"}},[t._v("沪ICP备xxx号")])])}],i=n("7ded"),s={name:"Login",data:function(){var t=function(t,e,n){e.length<6?n(new Error("管理员密码长度应大于6")):n()};return{loginForm:{username:"admin123",password:"admin123",code:""},codeImg:"",loginRules:{username:[{required:!0,message:"管理员账户不允许为空",trigger:"blur"}],password:[{required:!0,message:"管理员密码不允许为空",trigger:"blur"},{validator:t,trigger:"blur"}]},passwordType:"password",loading:!1}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){this.getCode()},destroyed:function(){},methods:{getCode:function(){var t=this;Object(i["a"])().then((function(e){t.codeImg=e.data.data}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e||t.loading)return!1;t.loading=!0,t.$store.dispatch("LoginByUsername",t.loginForm).then((function(){t.loading=!1,t.$router.push({path:t.redirect||"/"})})).catch((function(e){606!==e.data.errno&&605!==e.data.errno||(t.codeImg=e.data.data),t.$notify.error({title:"失败",message:e.data.errmsg}),t.loading=!1}))}))}}},r=s,l=(n("2017"),n("7550"),n("5d22")),c=Object(l["a"])(r,o,a,!1,null,"4d1f5598",null);e["default"]=c.exports}}]);