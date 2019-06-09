(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e830"],{NfgA:function(e,t,r){"use strict";r.d(t,"e",function(){return o}),r.d(t,"f",function(){return i}),r.d(t,"c",function(){return n}),r.d(t,"g",function(){return s}),r.d(t,"b",function(){return l}),r.d(t,"d",function(){return m}),r.d(t,"a",function(){return u});var a=r("t3Un");function o(e){return Object(a.a)({url:"/api/lines",method:"get",params:e})}function i(e){return a.a.post("/api/lines",e)}function n(e){return a.a.get("/api/lines/"+e)}function s(e,t){return a.a.patch("/api/lines/"+e,t)}function l(e){return a.a.delete("/api/lines/"+e)}function m(e){return Object(a.a)({url:"/api/line_search",method:"get",params:e})}function u(e){return a.a.post("/api/clearCache/",e)}},bAuQ:function(e,t,r){"use strict";r.r(t);var a=r("NfgA"),o={data:function(){return{form:{name:"",price:"",car_type:"大巴",depart_time:"",open_time:"",total_time:"",via_road:"",company:"",station:"",station_back:"",reason:"",last_update:"",is_show:0,loading:!1},rules:{name:[{required:!0,message:"请输入线路名称",trigger:"blur"}],price:[{required:!0,message:"请输入 price",trigger:"blur"}],car_type:[{required:!0,message:"请输入 car_type",trigger:"blur"}],station:[{required:!0,message:"请输入途经站点",trigger:"blur"}],station_back:[{required:!0,message:"请输入",trigger:"blur"}],depart_time:[{required:!0,message:"请输入",trigger:"blur"}],via_road:[{required:!0,message:"请输入",trigger:"blur"}],total_time:[{required:!0,message:"请输入",trigger:"blur"}],company:[{required:!0,message:"请输入",trigger:"blur"}],open_time:[{required:!0,message:"请输入",trigger:"blur"}],reason:[{required:!0,message:"请输入",trigger:"blur"}],last_update:[{required:!0,message:"请输入",trigger:"change"}]},redirect:"/list/lines"}},created:function(){this.id=this.$route.params.id,this.getTaskData(this.id)},methods:{getTaskData:function(e){var t=this;Object(a.c)(e).then(function(e){t.loading=!1,200===e.code?(t.form=e.data,t.form.is_task=1===e.data.is_task):t.$message.error(e.reason)})},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.loading=!0,Object(a.g)(t.id,t.form).then(function(e){t.loading=!1,200===e.code?(t.$message({message:"操作成功",type:"success"}),t.$router.push({path:t.redirect||"/"})):t.$message.error(e.reason)})})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},resetForm:function(e){this.$refs[e].resetFields()}}},i=(r("pRy5"),r("KHd+")),n=Object(i.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"车次名称",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"price",prop:"price"}},[r("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"car_type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.form.car_type,callback:function(t){e.$set(e.form,"car_type",t)},expression:"form.car_type"}},[r("el-option",{attrs:{label:"大巴",value:"大巴"}}),e._v(" "),r("el-option",{attrs:{label:"中巴",value:"中巴"}}),e._v(" "),r("el-option",{attrs:{label:"地铁",value:"地铁"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"发车间隔",prop:"depart_time"}},[r("el-input",{model:{value:e.form.depart_time,callback:function(t){e.$set(e.form,"depart_time",t)},expression:"form.depart_time"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"营运时间",prop:"open_time"}},[r("el-input",{model:{value:e.form.open_time,callback:function(t){e.$set(e.form,"open_time",t)},expression:"form.open_time"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"全程时间",prop:"total_time"}},[r("el-input",{model:{value:e.form.total_time,callback:function(t){e.$set(e.form,"total_time",t)},expression:"form.total_time"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"途经道路",prop:"via_road"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.via_road,callback:function(t){e.$set(e.form,"via_road",t)},expression:"form.via_road"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"公交公司",prop:"company"}},[r("el-input",{model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"途经站点(去程)",prop:"station"}},[r("el-input",{attrs:{rows:4,type:"textarea"},model:{value:e.form.station,callback:function(t){e.$set(e.form,"station",t)},expression:"form.station"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"途经站点(返程)",prop:"station_back"}},[r("el-input",{attrs:{rows:4,type:"textarea"},model:{value:e.form.station_back,callback:function(t){e.$set(e.form,"station_back",t)},expression:"form.station_back"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"编辑原因",prop:"reason"}},[r("el-input",{model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"最后更新时间",prop:"last_update"}},[r("el-date-picker",{attrs:{"value-format":"yyyy:MM:dd",type:"date",placeholder:"选择日期"},model:{value:e.form.last_update,callback:function(t){e.$set(e.form,"last_update",t)},expression:"form.last_update"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否已审核"}},[r("el-radio-group",{model:{value:e.form.is_show,callback:function(t){e.$set(e.form,"is_show",t)},expression:"form.is_show"}},[r("el-radio",{attrs:{label:0}},[e._v("未审核")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("通过")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("不通过")])],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"34c9868a",null);n.options.__file="edit.vue";t.default=n.exports},pRy5:function(e,t,r){"use strict";var a=r("uqsk");r.n(a).a},uqsk:function(e,t,r){}}]);