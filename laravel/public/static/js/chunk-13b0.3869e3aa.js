(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-13b0"],{"0ysz":function(e,t,a){"use strict";var r=a("oYIm");a.n(r).a},"F/uS":function(e,t,a){"use strict";a.r(t);var r=a("PnZ/"),n=a("R8mO"),i=a("X4fA"),o={data:function(){return{uploadUrl:"http://118.25.87.12:8081/api/upload?token="+Object(i.a)(),fileList:[],item:"",apiParam:[],form:{upload_url:"",api_excel_id:"",appkey:"",uid:"",description:"",sort:"",loading:!1},rules:{api_excel_id:[{required:!0,message:"请选择接口",trigger:"blur"}],upload_url:[{required:!0,message:"请上传文件",trigger:"blur"}],appkey:[{required:!0,message:"请输入 appkey",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"}]},redirect:"/api_excel/index"}},watch:{item:function(e){this.form.api_excel_id=e,console.log(this.form.api_excel_id),this.getItem()}},created:function(){this.init(),this.id=this.$route.params.id,this.getData(this.id)},methods:{getItem:function(){this.$emit("getItem",this.form.apiParam)},init:function(){var e=this;Object(r.c)({perPage:20}).then(function(t){e.apiParam=t.data.data})},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},handleSuccess:function(e,t,a){console.log(e),this.form.upload_url=e.data.url},getData:function(e){var t=this;Object(n.b)(e).then(function(e){t.loading=!1,200===e.code?t.form=e.data:t.$message.error(e.reason)})},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.loading=!0,Object(n.e)(t.id,t.form).then(function(e){t.loading=!1,200===e.code?(t.$message({message:"操作成功",type:"success"}),t.$router.push({path:t.redirect||"/"})):t.$message.error(e.reason)})})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},resetForm:function(e){this.$refs[e].resetFields()}}},l=(a("0ysz"),a("KHd+")),s=Object(l.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"接口",prop:"api_excel_id"}},[a("el-select",{attrs:{placeholder:"请选择接口","value-key":"name"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},e._l(e.apiParam,function(t,r){return a("el-option",{key:r,attrs:{label:t.name,value:t.id}},[a("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"appkey",prop:"appkey"}},[a("el-col",{attrs:{span:11}},[a("el-input",{model:{value:e.form.appkey,callback:function(t){e.$set(e.form,"appkey",t)},expression:"form.appkey"}})],1),e._v(" "),a("el-col",{attrs:{span:13}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上传文件",prop:"upload_url"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.upload_url,expression:"form.upload_url"}],attrs:{type:"hidden"},domProps:{value:e.form.upload_url},on:{input:function(t){t.target.composing||e.$set(e.form,"upload_url",t.target.value)}}}),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-remove":e.beforeRemove,"on-exceed":e.handleExceed,"file-list":e.fileList,multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传 xls/xlsx 文件，且不超过 20M")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"描述内容",prop:"description"}},[a("el-col",{attrs:{span:11}},[a("el-input",{attrs:{size:"medium",placeholder:"请输入内容"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),a("el-col",{attrs:{span:13}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户ID(可选)",prop:"uid"}},[a("el-col",{attrs:{span:11}},[a("el-input",{attrs:{size:"medium",placeholder:"请输入内容"},model:{value:e.form.uid,callback:function(t){e.$set(e.form,"uid",t)},expression:"form.uid"}})],1),e._v(" "),a("el-col",{attrs:{span:13}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"68b85dd6",null);s.options.__file="edit.vue";t.default=s.exports},"PnZ/":function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"e",function(){return l}),a.d(t,"a",function(){return s}),a.d(t,"f",function(){return u});var r=a("t3Un");function n(e){return Object(r.a)({url:"/api/api_param",method:"get",params:e})}function i(e){return r.a.post("/api/api_param",e)}function o(e){return r.a.get("/api/api_param/"+e)}function l(e,t){return r.a.patch("/api/api_param/"+e,t)}function s(e){return r.a.delete("/api/api_param/"+e)}function u(e){return Object(r.a)({url:"/api/api_param_search",method:"get",params:e})}},R8mO:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"e",function(){return l}),a.d(t,"a",function(){return s}),a.d(t,"f",function(){return u}),a.d(t,"g",function(){return c});var r=a("t3Un");function n(e){return Object(r.a)({url:"/api/api_excel",method:"get",params:e})}function i(e){return r.a.post("/api/api_excel",e)}function o(e){return r.a.get("/api/api_excel/"+e)}function l(e,t){return r.a.patch("/api/api_excel/"+e,t)}function s(e){return r.a.delete("/api/api_excel/"+e)}function u(e){return Object(r.a)({url:"/api/api_excel_search",method:"get",params:e})}function c(e){return Object(r.a)({url:"/api/start_task",method:"post",params:e})}},oYIm:function(e,t,a){}}]);
