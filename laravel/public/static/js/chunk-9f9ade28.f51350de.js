(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f9ade28"],{"2bb9":function(t,e,a){},"3e76":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return u})),a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return l}));var n=a("b775");function r(t){return Object(n["a"])({url:"/api/api_param",method:"get",params:t})}function i(t){return n["a"].post("/api/api_param",t)}function s(t){return n["a"].get("/api/api_param/"+t)}function u(t,e){return n["a"].patch("/api/api_param/"+t,e)}function o(t){return n["a"].delete("/api/api_param/"+t)}function l(t){return Object(n["a"])({url:"/api/api_param_search",method:"get",params:t})}},"747e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-button",{attrs:{type:"primary",size:"medium"}},[a("router-link",{attrs:{to:"/api_param/add"}},[t._v("新增接口配置")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"接口名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"接口地址",width:"170",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.url))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"请求参数",width:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.param))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"网址",width:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.website)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.state?a("div",[a("el-tag",[t._v("已启用")])],1):a("div",[a("el-tag",{attrs:{type:"danger"}},[t._v("未启用")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),t._v(" "),a("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{total:t.total,"current-page":t.currentpage,"page-sizes":[10,20,30,50,100],"page-size":t.perpage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},r=[],i=a("3e76"),s={filters:{statusFilter:function(t){var e={1:"success",0:"gray","-1":"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,perpage:10,total:100,currentpage:1,listQuery:{page:1}}},created:function(){this.listQuery=this.$route.query,this.currentpage=parseInt(this.listQuery.page);var t=parseInt(this.$route.query.perPage);this.perpage=isNaN(t)?this.perpage:t,this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0;var e=Object.assign({page:this.listQuery.page},{perPage:this.perpage});Object(i["c"])(e).then((function(e){t.list=e.data.data,t.listLoading=!1,t.total=e.data.total}))},handleEdit:function(t,e){this.$router.push({path:"/api_param/edit/"+e.id})},handleDelete:function(t,e){var a=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])(e.id).then((function(t){a.loading=!1,200===t.code?(a.$message({message:"操作成功",type:"success"}),a.fetchData()):a.$message.error(t.reason)})),a.$message({type:"success",message:"删除成功!"})})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))},handleSizeChange:function(t){this.perpage=t,this.$router.push({path:"",query:{page:this.listQuery.page,perPage:t}}),this.fetchData()},handleCurrentChange:function(t){this.listQuery={page:t},this.$router.push({path:"",query:{page:t,perPage:this.perpage}}),this.fetchData({page:t})},goSearch:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.listLoading=!0;var a={wd:e.form.input};Object(i["f"])(a).then((function(t){e.listLoading=!1,200===t.code?(e.form.isShow=!0,e.list=t.data.data,e.total=t.data.total):e.$message.error(t.reason)}))}))}}},u=s,o=(a("bcf0"),a("2877")),l=Object(o["a"])(u,n,r,!1,null,"fd2b17cc",null);e["default"]=l.exports},bcf0:function(t,e,a){"use strict";var n=a("2bb9"),r=a.n(n);r.a}}]);