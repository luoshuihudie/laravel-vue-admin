(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b88ba0d"],{af2d:function(e,t,a){"use strict";var n=a("e2c9"),r=a.n(n);r.a},e2c9:function(e,t,a){},e382:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-button",{attrs:{type:"primary",size:"medium"}},[a("router-link",{attrs:{to:"/user/add"}},[e._v("新增用户")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户昵称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"邮箱"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.email)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"分配的角色"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,(function(t){return a("el-tag",{key:t.id},[e._v(e._s(t.name))])}))}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(t.row.created_at))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{total:e.total,"current-page":e.currentpage,"page-sizes":[10,20,30,50,100],"page-size":e.perpage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},r=[],i=a("c24f"),s={filters:{statusFilter:function(e){var t={1:"success",0:"gray","-1":"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,perpage:10,total:100,currentpage:1,listQuery:{page:1}}},created:function(){this.listQuery=this.$route.query,this.currentpage=parseInt(this.listQuery.page);var e=parseInt(this.$route.query.perPage);this.perpage=isNaN(e)?this.perpage:e,this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0;var t=Object.assign({page:this.listQuery.page},{perPage:this.perpage});Object(i["d"])(t).then((function(t){e.list=t.data.data,e.listLoading=!1,e.total=t.data.total}))},handleEdit:function(e,t){this.$router.push({path:"/user/edit/"+t.id})},handleDelete:function(e,t){var a=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])(t.id).then((function(e){a.loading=!1,200===e.code?(a.$message({message:"操作成功",type:"success"}),a.fetchData()):a.$message.error(e.reason)})),a.$message({type:"success",message:"删除成功!"})})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))},handleSizeChange:function(e){this.perpage=e,this.$router.push({path:"",query:{page:this.listQuery.page,perPage:e}}),this.fetchData()},handleCurrentChange:function(e){this.listQuery={page:e},this.$router.push({path:"",query:{page:e,perPage:this.perpage}}),this.fetchData({page:e})},goSearch:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.listLoading=!0;var a={wd:t.form.input};Object(i["k"])(a).then((function(e){t.listLoading=!1,200===e.code?(t.form.isShow=!0,t.list=e.data.data,t.total=e.data.total):t.$message.error(e.reason)}))}))}}},l=s,o=(a("af2d"),a("2877")),u=Object(o["a"])(l,n,r,!1,null,"5f3eca0a",null);t["default"]=u.exports}}]);