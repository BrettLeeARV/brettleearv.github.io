webpackJsonp([1],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Employee Manager")])],1)])])},staticRenderFns:[]},n=i("VU/8")(null,o,!1,null,null,null).exports,s=i("Sazm"),l=i.n(s),r=(i("3VHS"),l.a.initializeApp({apiKey:"AIzaSyCori7EKkcMbbuAPwMon-gTVRJZmfmPCmI",authDomain:"vuefs-prod-98daa.firebaseapp.com",databaseURL:"https://vuefs-prod-98daa.firebaseio.com",projectId:"vuefs-prod-98daa",storageBucket:"vuefs-prod-98daa.appspot.com",messagingSenderId:"520478190096"}).firestore()),p={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;r.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){console.log("Client added: ",t.id),e.$router.push("/")}).catch(function(e){console.error("Error adding employee: ",e)})}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-employee"}},[i("h3",[e._v("New Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),i("label",[e._v("Employee ID#")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v("Name")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),i("label",[e._v("Department")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),i("label",[e._v("Position")])])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},c=i("VU/8")(p,d,!1,null,null,null).exports,m={name:"app",components:{Navbar:n,NewEmployee:c}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var v=i("VU/8")(m,u,!1,function(e){i("TF3k")},null,null).exports,_=i("/ocq"),f={name:"home",data:function(){return{employees:[],loading:!0}},created:function(){var e=this;r.collection("employees").orderBy("dept").get().then(function(t){e.loading=!1,t.forEach(function(t){var i={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(i)})})}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"home"}},[i("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return i("li",{key:t.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n      "+e._s(t.employee_id)+": "+e._s(t.name)+" \n       "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},h=i("VU/8")(f,y,!1,null,null,null).exports,C={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){r.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;r.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&r.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"view-employee"}},[i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[e._v(e._s(e.name))])]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Employee ID#: "+e._s(e.employee_id))]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),i("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},w=i("VU/8")(C,g,!1,null,null,null).exports,b={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){r.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;r.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;r.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},E={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-employee"}},[i("h3",[e._v("Edit Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},x=i("VU/8")(b,E,!1,null,null,null).exports;a.a.use(_.a);var $=new _.a({routes:[{path:"/",name:"Home",component:h},{path:"/new",name:"new-employee",component:c},{path:"/:employee_id",name:"view-employee",component:w},{path:"/edit/:employee_id",name:"edit-employee",component:x}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:$,template:"<App/>",components:{App:v}})},TF3k:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e0097eb6ab00bff1b9be.js.map