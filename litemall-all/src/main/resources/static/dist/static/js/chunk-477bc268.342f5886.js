(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-477bc268"],{"3c7c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入广告标题"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入广告内容"},model:{value:t.listQuery.content,callback:function(e){t.$set(t.listQuery,"content",e)},expression:"listQuery.content"}}),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/ad/list"],expression:"['GET /admin/ad/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/ad/create"],expression:"['POST /admin/ad/create']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"广告ID",prop:"id",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"广告标题",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"广告内容",prop:"content"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"广告图片",prop:"url"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.url?a("img",{attrs:{src:e.row.url,width:"80"}}):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"广告位置",prop:"position"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"活动链接",prop:"link"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"是否启用",prop:"enabled"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.enabled?"success":"error"}},[t._v(t._s(e.row.enabled?"启用":"不启用"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/ad/update"],expression:"['POST /admin/ad/update']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/ad/delete"],expression:"['POST /admin/ad/delete']"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"广告标题",prop:"name"}},[a("el-input",{model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"广告内容",prop:"content"}},[a("el-input",{model:{value:t.dataForm.content,callback:function(e){t.$set(t.dataForm,"content",e)},expression:"dataForm.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"广告图片",prop:"url"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.headers,action:t.uploadPath,"show-file-list":!1,"on-success":t.uploadUrl,"before-upload":t.checkFileSize,accept:".jpg,.jpeg,.png,.gif"}},[t.dataForm.url?a("img",{staticClass:"avatar",attrs:{src:t.dataForm.url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过1024kb")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"广告位置",prop:"position"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.position,callback:function(e){t.$set(t.dataForm,"position",e)},expression:"dataForm.position"}},[a("el-option",{attrs:{value:1,label:"首页"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"活动链接",prop:"link"}},[a("el-input",{model:{value:t.dataForm.link,callback:function(e){t.$set(t.dataForm,"link",e)},expression:"dataForm.link"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否启用",prop:"enabled"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.enabled,callback:function(e){t.$set(t.dataForm,"enabled",e)},expression:"dataForm.enabled"}},[a("el-option",{attrs:{value:!0,label:"启用"}}),t._v(" "),a("el-option",{attrs:{value:!1,label:"不启用"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)],1)},i=[],o=(a("1bc7"),a("9f60"),a("94f0"),a("0c84"),a("2843"),a("4057"),a("a450"),a("b775"));function r(t){return Object(o["a"])({url:"/ad/list",method:"get",params:t})}function l(t){return Object(o["a"])({url:"/ad/create",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/ad/update",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/ad/delete",method:"post",data:t})}var c=a("aecd"),u=a("5f87"),m=a("333d");function p(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=f(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,l=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return r=t.done,t},e:function(t){l=!0,o=t},f:function(){try{r||null==a.return||a.return()}finally{if(l)throw o}}}}function f(t,e){if(t){if("string"===typeof t)return v(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var b={name:"Ad",components:{Pagination:m["a"]},data:function(){return{uploadPath:c["e"],list:[],total:0,listLoading:!0,listQuery:{page:1,limit:20,name:void 0,content:void 0,sort:"add_time",order:"desc"},dataForm:{id:void 0,name:void 0,content:void 0,url:void 0,link:void 0,position:1,enabled:!0},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{name:[{required:!0,message:"广告标题不能为空",trigger:"blur"}],content:[{required:!0,message:"广告内容不能为空",trigger:"blur"}],url:[{required:!0,message:"广告链接不能为空",trigger:"blur"}]},downloadLoading:!1}},computed:{headers:function(){return{"X-Litemall-Admin-Token":Object(u["a"])()}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,r(this.listQuery).then((function(e){t.list=e.data.data.list,t.total=e.data.data.total,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},resetForm:function(){this.dataForm={id:void 0,name:void 0,content:void 0,url:void 0,link:void 0,position:1,enabled:!0}},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},uploadUrl:function(t){this.dataForm.url=t.data.url},checkFileSize:function(t){return!(t.size>1048576)||(this.$message.error("".concat(t.name,"文件大于1024KB，请选择小于1024KB大小的图片")),!1)},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&l(t.dataForm).then((function(e){t.list.unshift(e.data.data),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"创建成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleUpdate:function(t){var e=this;this.dataForm=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&s(t.dataForm).then((function(){var e,a=p(t.list);try{for(a.s();!(e=a.n()).done;){var n=e.value;if(n.id===t.dataForm.id){var i=t.list.indexOf(n);t.list.splice(i,1,t.dataForm);break}}}catch(o){a.e(o)}finally{a.f()}t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新广告成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleDelete:function(t){var e=this;d(t).then((function(t){e.$notify.success({title:"成功",message:"删除成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-737f9307"),a.e("chunk-2125b98f")]).then(a.bind(null,"4bf8")).then((function(e){var a=["广告ID","广告标题","广告内容","广告图片","广告位置","活动链接","是否启用"],n=["id","name","content","url","postion","link","enabled"];e.export_json_to_excel2(a,t.list,n,"广告信息"),t.downloadLoading=!1}))}}},g=b,h=(a("6751"),a("5d22")),y=Object(h["a"])(g,n,i,!1,null,null,null);e["default"]=y.exports},6396:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,a){var r=o(),l=t-r,s=20,d=0;e="undefined"===typeof e?500:e;var c=function t(){d+=s;var o=Math.easeInOutQuad(d,r,l,e);i(o),d<e?n(t):a&&"function"===typeof a&&a()};c()}},6751:function(t,e,a){"use strict";a("dfb1")},aecd:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return l})),a.d(e,"e",(function(){return s}));var n=a("b775");function i(t){return Object(n["a"])({url:"/storage/list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/storage/create",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/storage/update",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/storage/delete",method:"post",data:t})}var s="https://wxapp.simplesay.top/admin/storage/create"},dfb1:function(t,e,a){}}]);