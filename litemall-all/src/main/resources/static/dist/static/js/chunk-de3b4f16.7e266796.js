(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de3b4f16"],{6396:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,i,n){return t/=n/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,i){var o=r(),s=t-o,l=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=l;var r=Math.easeInOutQuad(c,o,s,e);a(r),c<e?n(t):i&&"function"===typeof i&&i()};d()}},cc5e:function(t,e,i){"use strict";i.d(e,"d",(function(){return a})),i.d(e,"a",(function(){return r})),i.d(e,"g",(function(){return o})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return l})),i.d(e,"f",(function(){return c})),i.d(e,"e",(function(){return d}));var n=i("b775");function a(t){return Object(n["a"])({url:"/role/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/role/create",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/role/update",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/role/delete",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/role/permissions",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/role/permissions",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/role/options",method:"get",params:t})}},f7ae:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入角色名称"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/role/list"],expression:"['GET /admin/role/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/role/create"],expression:"['POST /admin/role/create']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"角色名称",prop:"name",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"说明",prop:"desc"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/role/update"],expression:"['POST /admin/role/update']"}],attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/role/delete"],expression:"['POST /admin/role/delete']"}],attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.handleDelete(e.row)}}},[t._v("删除")]),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/role/permissions"],expression:"['GET /admin/role/permissions']"}],attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handlePermission(e.row)}}},[t._v("授权")])]}}])})],1),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[i("el-input",{model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"说明",prop:"desc"}},[i("el-input",{model:{value:t.dataForm.desc,callback:function(e){t.$set(t.dataForm,"desc",e)},expression:"dataForm.desc"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):i("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{visible:t.permissionDialogFormVisible,title:"权限配置"},on:{"update:visible":function(e){t.permissionDialogFormVisible=e}}},[i("el-tree",{ref:"tree",attrs:{data:t.systemPermissions,"default-checked-keys":t.assignedPermissions,"show-checkbox":"","node-key":"id","highlight-current":""},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var n=e.data;return i("span",{staticClass:"custom-tree-node"},[i("span",[t._v(t._s(n.label))]),t._v(" "),n.api?i("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(n.api))]):t._e()],1)}}])}),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.permissionDialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.updatePermission}},[t._v("确定")])],1)],1)],1)},a=[],r=(i("1bc7"),i("9f60"),i("94f0"),i("0c84"),i("2843"),i("a450"),i("4057"),i("cc5e")),o=i("333d");function s(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=l(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw r}}}}function l(t,e){if(t){if("string"===typeof t)return c(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={name:"Role",components:{Pagination:o["a"]},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,name:void 0,sort:"add_time",order:"desc"},dataForm:{id:void 0,name:void 0,desc:void 0},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},permissionDialogFormVisible:!1,systemPermissions:null,assignedPermissions:null,permissionForm:{roleId:void 0,permissions:[]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r["d"])(this.listQuery).then((function(e){t.list=e.data.data.list,t.total=e.data.data.total,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},resetForm:function(){this.dataForm={id:void 0,name:void 0,desc:void 0}},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&Object(r["a"])(t.dataForm).then((function(e){t.list.unshift(e.data.data),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"添加角色成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleUpdate:function(t){var e=this;this.dataForm=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&Object(r["g"])(t.dataForm).then((function(){var e,i=s(t.list);try{for(i.s();!(e=i.n()).done;){var n=e.value;if(n.id===t.dataForm.id){var a=t.list.indexOf(n);t.list.splice(a,1,t.dataForm);break}}}catch(r){i.e(r)}finally{i.f()}t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新管理员成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleDelete:function(t){var e=this;Object(r["b"])(t).then((function(t){e.$notify.success({title:"成功",message:"删除管理员成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))},handlePermission:function(t){var e=this;this.permissionDialogFormVisible=!0,this.permissionForm.roleId=t.id,Object(r["c"])({roleId:t.id}).then((function(t){e.systemPermissions=t.data.data.systemPermissions,e.assignedPermissions=t.data.data.assignedPermissions}))},updatePermission:function(){var t=this;this.permissionForm.permissions=this.$refs.tree.getCheckedKeys(!0),Object(r["f"])(this.permissionForm).then((function(e){t.permissionDialogFormVisible=!1,t.$notify.success({title:"成功",message:"授权成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}}},u=d,m=i("5d22"),f=Object(m["a"])(u,n,a,!1,null,null,null);e["default"]=f.exports}}]);