(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2097a77a"],{1341:function(e,t,n){"use strict";n("2e0f")},"2e0f":function(e,t,n){},"334c":function(e,t,n){"use strict";n("3849")},3573:function(e,t,n){"use strict";var o=n("7a23");Object(o["pushScopeId"])("data-v-3d80aed0");var a={class:"page-content"},r={class:"handler"},c=Object(o["createTextVNode"])(" 编辑 "),i=Object(o["createTextVNode"])(" 删除 ");function l(e,t,n,l,u,p){var s=Object(o["resolveComponent"])("el-button"),d=Object(o["resolveComponent"])("hy-table");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(d,Object(o["mergeProps"])({totalCount:e.totalCount,listData:e.pageListData},e.contentConfig,{page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=function(t){return e.pageInfo=t})}),Object(o["createSlots"])({headerHandler:Object(o["withCtx"])((function(){return[e.isCreate?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,type:"primary",size:"medium",onClick:e.handleNewData},{default:Object(o["withCtx"])((function(){var t;return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(null!==(t=e.contentConfig.newBtnTitle)&&void 0!==t?t:"新建数据"),1)]})),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0)]})),status:Object(o["withCtx"])((function(t){return[Object(o["createVNode"])(s,{type:t.row.enable?"success":"danger",size:"mini",plain:""},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$filters.showStatus(t.row.enable)),1)]})),_:2},1032,["type"])]})),create:Object(o["withCtx"])((function(t){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$filters.formatTime(t.row.createAt)),1)]})),update:Object(o["withCtx"])((function(t){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$filters.formatTime(t.row.updateAt)),1)]})),handler:Object(o["withCtx"])((function(t){return[Object(o["createElementVNode"])("div",r,[e.isUpdate?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,type:"text",icon:"el-icon-edit",size:"mini",onClick:function(n){return e.handleEditClick(t.row)}},{default:Object(o["withCtx"])((function(){return[c]})),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0),e.isDelete?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:1,type:"text",icon:"el-icon-delete",size:"mini",onClick:function(n){return e.handleDeleteClick(t.row)}},{default:Object(o["withCtx"])((function(){return[i]})),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0)])]})),_:2},[Object(o["renderList"])(e.otherPropSlots,(function(t){return{name:t.slotName,fn:Object(o["withCtx"])((function(n){return[t.slotName?Object(o["renderSlot"])(e.$slots,t.slotName,{key:0,row:n.row},void 0,!0):Object(o["createCommentVNode"])("",!0)]}))}}))]),1040,["totalCount","listData","page"])])}Object(o["popScopeId"])();var u=n("5530"),p=(n("4de4"),n("0613"));n("99af"),n("7db0");function s(e,t){var n=Object(p["c"])(),o=n.state.login.permissions,a="".concat(e,":").concat(t);return!!o.find((function(e){return-1!==e.indexOf(a)}))}Object(o["pushScopeId"])("data-v-0825bed8");var d={class:"hy-table"},b={class:"header"},f={class:"title"},g={class:"handler"},m={key:0,class:"footer"};function O(e,t,n,a,r,c){var i=Object(o["resolveComponent"])("el-table-column"),l=Object(o["resolveComponent"])("el-table"),u=Object(o["resolveComponent"])("el-pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",d,[Object(o["createElementVNode"])("div",b,[Object(o["renderSlot"])(e.$slots,"header",{},(function(){return[Object(o["createElementVNode"])("div",f,Object(o["toDisplayString"])(e.title),1),Object(o["createElementVNode"])("div",g,[Object(o["renderSlot"])(e.$slots,"headerHandler",{},void 0,!0)])]}),{},!0)]),Object(o["createVNode"])(l,Object(o["mergeProps"])({data:e.listData,border:"",onSelectionChange:e.selectionChange},e.childrenProps),{default:Object(o["withCtx"])((function(){return[e.showSelectColumn?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,type:"selection",align:"center",width:"60"})):Object(o["createCommentVNode"])("",!0),e.showIndexColumn?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:1,type:"index",label:"序号",align:"center",width:"80"})):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.propList,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])(i,Object(o["mergeProps"])({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:Object(o["withCtx"])((function(n){return[Object(o["renderSlot"])(e.$slots,t.slotName,{row:n.row},(function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.row[t.prop]),1)]}),!0)]})),_:2},1040)})),128)),Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)]})),_:3},16,["data","onSelectionChange"]),e.showFooter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",m,[Object(o["renderSlot"])(e.$slots,"footer",{},(function(){return[Object(o["createVNode"])(u,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.totalCount,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]}),{},!0)])):Object(o["createCommentVNode"])("",!0)])}Object(o["popScopeId"])();n("a9e3");var j=Object(o["defineComponent"])({props:{title:{type:String,default:"表格数据"},showIndexColumn:{type:Boolean,default:!0},showSelectColumn:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!0},listData:{type:Array,default:function(){return[]}},propList:{type:Array,default:function(){return[]}},childrenProps:{type:Object,default:function(){return{}}},totalCount:{type:Number,default:0},page:{type:Object,default:function(){return{currentPage:0,pageSize:10}}}},emits:["selectionChange","update:page"],setup:function(e,t){var n=t.emit,o=function(t){e.showSelectColumn&&n("selectionChange",t)},a=function(t){n("update:page",Object(u["a"])(Object(u["a"])({},e.page),{},{currentPage:t}))},r=function(t){n("update:page",Object(u["a"])(Object(u["a"])({},e.page),{},{pageSize:t}))};return{selectionChange:o,handleCurrentChange:a,handleSizeChange:r}}});n("334c");j.render=O,j.__scopeId="data-v-0825bed8";var h=j,C=h,N=Object(o["defineComponent"])({components:{HyTable:C},props:{contentConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},emits:["newBtnClick","editBtnClick"],setup:function(e,t){var n=t.emit,a=s(e.pageName,"create"),r=s(e.pageName,"delete"),c=s(e.pageName,"update"),i=s(e.pageName,"query"),l=Object(p["c"])(),d=Object(o["ref"])({currentPage:1,pageSize:10});Object(o["watch"])(d,(function(){return f()}));var b={},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i&&(b=t,l.dispatch("system/getPageListDataAction",{pageName:e.pageName,queryInfo:Object(u["a"])({offset:(d.value.currentPage-1)*d.value.pageSize,size:d.value.pageSize},t)}))};f();var g=Object(o["computed"])((function(){return l.getters["system/pageListData"](e.pageName)})),m=Object(o["computed"])((function(){return l.getters["system/pageListDataCount"](e.pageName)})),O=Object(o["computed"])((function(){return e.contentConfig.propList.filter((function(e){return"status"!==e.slotName&&("create"!==e.slotName&&("update"!==e.slotName&&"handler"!==e.slotName))}))})),j=function(t){l.dispatch("system/deletePageDataAction",{pageName:e.pageName,queryInfo:Object(u["a"])({offset:d.value.currentPage*d.value.pageSize,size:d.value.pageSize},b),id:t.id})},h=function(){n("newBtnClick")},C=function(e){n("editBtnClick",e)};return{pageInfo:d,pageListData:g,totalCount:m,getPageData:f,otherPropSlots:O,handleDeleteClick:j,handleEditClick:C,handleNewData:h,isCreate:a,isUpdate:c,isDelete:r}}});n("1341");N.render=l,N.__scopeId="data-v-3d80aed0";var v=N;t["a"]=v},3849:function(e,t,n){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var o=n("1d80"),a=n("5899"),r="["+a+"]",c=RegExp("^"+r+r+"*"),i=RegExp(r+r+"*$"),l=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(e,t,n){var o=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var r,c;return a&&"function"==typeof(r=t.constructor)&&r!==n&&o(c=r.prototype)&&c!==n.prototype&&a(e,c),e}},a9e3:function(e,t,n){"use strict";var o=n("83ab"),a=n("da84"),r=n("94ca"),c=n("6eeb"),i=n("5135"),l=n("c6b6"),u=n("7156"),p=n("c04e"),s=n("d039"),d=n("7c73"),b=n("241c").f,f=n("06cf").f,g=n("9bf2").f,m=n("58a8").trim,O="Number",j=a[O],h=j.prototype,C=l(d(h))==O,N=function(e){var t,n,o,a,r,c,i,l,u=p(e,!1);if("string"==typeof u&&u.length>2)if(u=m(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+u}for(r=u.slice(2),c=r.length,i=0;i<c;i++)if(l=r.charCodeAt(i),l<48||l>a)return NaN;return parseInt(r,o)}return+u};if(r(O,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var v,y=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof y&&(C?s((function(){h.valueOf.call(n)})):l(n)!=O)?u(new j(N(t)),n,y):N(t)},w=o?b(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;w.length>k;k++)i(j,v=w[k])&&!i(y,v)&&g(y,v,f(j,v));y.prototype=h,h.constructor=y,c(a,O,y)}},ab96:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"menu"};function r(e,t,n,r,c,i){var l=Object(o["resolveComponent"])("page-content");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(l,{contentConfig:e.contentTableConfig,pageName:"menu"},null,8,["contentConfig"])])}var c=n("3573"),i={title:"角色列表",propList:[{prop:"name",label:"菜单名称",minWidth:"150"},{prop:"type",label:"级别",minWidth:"80"},{prop:"url",label:"菜单url",minWidth:"120"},{prop:"icon",label:"菜单icon",minWidth:"120"},{prop:"sort",label:"排序",minWidth:"80"},{prop:"permission",label:"权限",minWidth:"150"},{prop:"createAt",label:"创建时间",minWidth:"220",slotName:"create"},{prop:"updateAt",label:"更新时间",minWidth:"220",slotName:"update"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!1,showSelectColumn:!1,showFooter:!1,childrenProps:{rowKey:"id",treeProp:{children:"children"}}},l=Object(o["defineComponent"])({name:"hymenu",components:{PageContent:c["a"]},setup:function(){return{contentTableConfig:i}}});l.render=r;t["default"]=l}}]);
//# sourceMappingURL=chunk-2097a77a.8ca09f60.js.map