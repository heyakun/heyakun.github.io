(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b348"],{bf7e:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"role"};function l(e,t,n,l,r,c){var i=Object(a["resolveComponent"])("page-search"),d=Object(a["resolveComponent"])("page-content"),f=Object(a["resolveComponent"])("el-tree"),p=Object(a["resolveComponent"])("page-modal");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(i,{searchFormConfig:e.searchFormConfig},null,8,["searchFormConfig"]),Object(a["createVNode"])(d,{contentTableConfig:e.contentTableConfig,pageName:"role",onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentTableConfig","onNewBtnClick","onEditBtnClick"]),Object(a["createVNode"])(p,{defaultInfo:e.defaultInfo,otherInfo:e.otherInfo,modalConfig:e.modalConfig,pageName:"role",ref:"pageModalRef"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,{ref:"treeRef",data:e.menus,"show-checkbox":"","node-key":"id","highlight-current":"",props:{children:"children",label:"name"},onCheck:e.handleCheckChange},null,8,["data","onCheck"])]})),_:1},8,["defaultInfo","otherInfo","modalConfig"])])}var r=n("6b75");function c(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var d=n("06c5");function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e){return c(e)||i(e)||Object(d["a"])(e)||f()}n("99af");var h=n("309c"),b=n("fae0"),u=n("c9d2"),m=u["a"],s={labelWidth:"120px",formItems:[{field:"name",type:"input",label:"角色名称",placeholder:"请输入角色名称"},{field:"intro",type:"input",label:"权限介绍",placeholder:"请输入权限介绍"},{field:"createTime",type:"datepicker",label:"创建时间",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}]},C={title:"用户列表",propList:[{prop:"name",label:"角色名",minWidth:"100"},{prop:"intro",label:"权限介绍",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0},g={formItems:[{field:"name",type:"input",label:"角色名",placeholder:"请输入角色名"},{field:"intro",type:"input",label:"角色介绍",placeholder:"请输入角色介绍"}],colLayout:{span:24},itemStyle:{}},j=n("be8c"),O=n("0613"),v=n("09e6"),y=Object(a["defineComponent"])({components:{pageSearch:b["a"],PageContent:h["a"],PageModal:m},name:"role",setup:function(){var e=Object(a["ref"])(),t=function(t){var n=Object(v["d"])(t.menuList);Object(a["nextTick"])((function(){var t;null===(t=e.value)||void 0===t||t.setCheckedKeys(n,!1)}))},n=Object(j["a"])(void 0,t),o=n.pageModalRef,l=n.defaultInfo,r=n.handleNewData,c=n.handleEditData,i=Object(a["ref"])();console.log("tree",i);var d=Object(O["c"])(),f=Object(a["computed"])((function(){return d.state.entireMenu})),h=Object(a["ref"])({}),b=function(e,t){console.log(e),console.log(t);var n=t.checkedKeys,a=t.halfCheckedKeys,o=[].concat(p(n),p(a));h.value={menuList:o}};return{searchFormConfig:s,contentTableConfig:C,modalConfig:g,pageModalRef:o,defaultInfo:l,handleNewData:r,handleEditData:c,menus:f,otherInfo:h,handleCheckChange:b,treeRef:e}}}),k=n("6b0d"),w=n.n(k);const I=w()(y,[["render",l]]);t["default"]=I}}]);
//# sourceMappingURL=chunk-2d21b348.428a42cd.js.map