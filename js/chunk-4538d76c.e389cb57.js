(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4538d76c"],{"9d1a":function(e,t,a){"use strict";var n=a("7a23"),o={class:"page-modal"},l={class:"dialog-footer"},r=Object(n["createTextVNode"])("取 消"),c=Object(n["createTextVNode"])("确 定");function i(e,t,a,i,d,f){var u=Object(n["resolveComponent"])("hy-form"),p=Object(n["resolveComponent"])("el-button"),m=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(m,{title:e.modalConfig.title,modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.dialogVisible=t}),width:"30%",center:"","destroy-on-close":""},{footer:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",l,[Object(n["createVNode"])(p,{onClick:t[1]||(t[1]=function(t){return e.dialogVisible=!1})},{default:Object(n["withCtx"])((function(){return[r]})),_:1}),Object(n["createVNode"])(p,{type:"primary",onClick:e.handleConfirmClick},{default:Object(n["withCtx"])((function(){return[c]})),_:1},8,["onClick"])])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,Object(n["mergeProps"])(e.modalConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData=t})}),null,16,["modelValue"]),Object(n["renderSlot"])(e.$slots,"default")]})),_:3},8,["title","modelValue"])])}var d=a("b85c"),f=a("5530"),u=(a("b64b"),a("0613")),p=a("0e3f"),m=Object(n["defineComponent"])({components:{HyForm:p["a"]},props:{modalConfig:{type:Object,required:!0},defaultInfo:{type:Object,default:function(){return{}}},otherInfo:{type:Object,default:function(){return{}}},pageName:{type:String,required:!0}},setup:function(e){var t=Object(u["c"])(),a={},o=Object(n["ref"])(Object(f["a"])({},a));Object(n["watch"])((function(){return e.defaultInfo}),(function(t){var a,n=Object(d["a"])(e.modalConfig.formItems);try{for(n.s();!(a=n.n()).done;){var l=a.value;o.value["".concat(l.field)]=t["".concat(l.field)]}}catch(r){n.e(r)}finally{n.f()}}));var l=Object(n["ref"])(!1),r=function(){l.value=!1,Object.keys(e.defaultInfo).length?t.dispatch("system/editPageDataAction",{pageName:e.pageName,queryInfo:Object(f["a"])(Object(f["a"])({},o.value),e.otherInfo),id:e.defaultInfo.id}):t.dispatch("system/newPageDataAction",{pageName:e.pageName,queryInfo:Object(f["a"])(Object(f["a"])({},o.value),e.otherInfo)})};return{formData:o,dialogVisible:l,handleConfirmClick:r}}});m.render=i;var b=m;t["a"]=b},cacb:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={class:"department"};function l(e,t,a,l,r,c){var i=Object(n["resolveComponent"])("page-search"),d=Object(n["resolveComponent"])("page-content"),f=Object(n["resolveComponent"])("page-modal");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(i,{searchConfig:e.searchFormConfig},null,8,["searchConfig"]),Object(n["createVNode"])(d,{pageName:"department",ref:"pageContentRef",contentConfig:e.contentTableConfig,onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentConfig","onNewBtnClick","onEditBtnClick"]),Object(n["createVNode"])(f,{ref:"pageModalRef",defaultInfo:e.modalInfo,modalConfig:e.modalConfigRef,pageName:"department"},null,8,["defaultInfo","modalConfig"])])}var r=a("3835"),c=(a("7db0"),a("d81d"),a("b0c0"),a("0613")),i=a("fe8c"),d=a("3573"),f=a("9d1a"),u=a("b120"),p=a("d8f6"),m={formItems:[{field:"name",type:"input",label:"部门名称",placeHolder:"请输入部门名称",rules:[]},{field:"leader",type:"input",label:"部门领导",placeHolder:"请输入部门领导",rules:[]},{field:"createAt",type:"datepicker",label:"创建时间",rules:[],otherOption:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}],labelWidth:"100px",itemStyle:{padding:"10px 40px"},colLayout:{span:8}},b={title:"部门列表",propList:[{prop:"name",label:"部门名称",minWidth:"120"},{prop:"leader",label:"部门领导",minWidth:"120"},{prop:"parentId",label:"上级部门",minWidth:"120"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"create"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"update"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0},s={title:"新建部门",formItems:[{field:"name",type:"input",label:"部门名称",placeHolder:"请输入部门名称"},{field:"parentId",type:"select",label:"上级部门",placeHolder:"请选择上级部门",options:[]},{field:"leader",type:"input",label:"领导名称",placeHolder:"请输入领导名称"}],colLayout:{span:24},itemStyle:{padding:0}},g=Object(n["defineComponent"])({name:"department",components:{PageSearch:i["a"],PageContent:d["a"],PageModal:f["a"]},setup:function(){var e=Object(u["a"])(),t=Object(r["a"])(e,3),a=t[0],o=t[1],l=t[2],i=Object(c["c"])(),d=Object(n["computed"])((function(){var e,t=null===(e=s.formItems)||void 0===e?void 0:e.find((function(e){return"parentId"===e.field}));return t.options=i.state.entireDepartments.map((function(e){return{label:e.name,value:e.id}})),s})),f=Object(p["a"])(),g=Object(r["a"])(f,4),O=g[0],j=g[1],C=g[2],h=g[3];return{searchFormConfig:m,contentTableConfig:b,modalConfigRef:d,pageContentRef:a,handleQueryClick:o,handleResetClick:l,modalInfo:O,pageModalRef:j,handleNewData:C,handleEditData:h}}});g.render=l;t["default"]=g},d81d:function(e,t,a){"use strict";var n=a("23e7"),o=a("b727").map,l=a("1dde"),r=l("map");n({target:"Array",proto:!0,forced:!r},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},d8f6:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("5530"),o=a("7a23"),l=function(e,t){var a=Object(o["ref"])({}),l=Object(o["ref"])(),r=function(){a.value={},l.value&&(l.value.dialogVisible=!0),e&&e()},c=function(e){a.value=Object(n["a"])({},e),l.value&&(l.value.dialogVisible=!0),t&&t(e)};return[a,l,r,c]}}}]);
//# sourceMappingURL=chunk-4538d76c.e389cb57.js.map