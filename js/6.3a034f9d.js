(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1fee":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n={};a.r(n),a.d(n,"getDocuments",(function(){return b})),a.d(n,"getDocument",(function(){return h})),a.d(n,"getFile",(function(){return q})),a.d(n,"getUsers",(function(){return S})),a.d(n,"getContacts",(function(){return w})),a.d(n,"getDepartments",(function(){return v})),a.d(n,"getUsersByDepartment",(function(){return k})),a.d(n,"searchDocuments",(function(){return x})),a.d(n,"searchDocumentsByDate",(function(){return C})),a.d(n,"getTags",(function(){return U}));var r={};a.r(r),a.d(r,"createUser",(function(){return G})),a.d(r,"updateUser",(function(){return H})),a.d(r,"deleteUser",(function(){return K})),a.d(r,"createDocument",(function(){return V})),a.d(r,"deleteDocument",(function(){return W})),a.d(r,"createContact",(function(){return X})),a.d(r,"updateContact",(function(){return Y})),a.d(r,"deleteContact",(function(){return Z})),a.d(r,"createDepartment",(function(){return ee})),a.d(r,"updateDepartment",(function(){return te})),a.d(r,"updateDepartmentManager",(function(){return ae})),a.d(r,"deleteDepartment",(function(){return ne})),a.d(r,"singleUpload",(function(){return re})),a.d(r,"signIn",(function(){return ie})),a.d(r,"createTag",(function(){return se}));var i=a("9530"),s=a.n(i);let o,l=e=>e;s()(o||(o=l`
  type Document {
    title: String!
  }
  type Mutation {
    addDocument(text: String!): Document
    editDocument(text: String!, id: String!): Document
  }
  type RoleInput {
    label: String
    value: String
  }
  type DepartmentInput {
    _id: ID
    title: String
    description: String
  }
`));let d,u,p,c,m,g,$,f,D,y,_=e=>e;const b=s()(d||(d=_`
  query getAllDocuments ($page: Int) {
    documents (page: $page) {
      _id
      title
      description
      sender
      receivers
      date
      protocolNumber
      files
      transactionType
      timestamp
      tags
    }
  }
`)),h=s()(u||(u=_`
  query getDocument ($_id: ID) {
    document(_id: $_id) {
      _id
      title
      description
      sender
      receivers
      date
      protocolNumber
      files
      transactionType
      timestamp
      tags
    }
  }
`)),q=s()(p||(p=_`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),S=s()(c||(c=_`
  query getUsers {
    users {
      _id
      username
      fullname
      password
      department {
        _id
        title
      }
      email
    }
  }
`)),w=s()(m||(m=_`
  query getContacts {
    contacts {
      _id
      name
      middlename
      surname
      organization
      street
      streetNumber
      postalCode
      area
      city
      website
      email
      position
      department
      phone
      fax
      country
      region
      prefecture
    }
  }
`)),v=s()(g||(g=_`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),k=s()($||($=_`
  query usersByDepartment($_id: ID) {
    usersByDepartment(_id: $_id) {
      _id
      username
      fullname
      password
      department {
        _id
        title
        description
      }
      email
    }
  }
`)),x=s()(f||(f=_`
  query searchDocuments($searchText: String) {
    searchDocuments(searchText: $searchText) {
      _id
      title
      description
      sender
      receivers
      date
      files
      transactionType
      timestamp
      tags
    }
  }
`)),C=s()(D||(D=_`
  query searchDocuments($searchDateRangeFrom: String, $searchDateRangeTo: String) {
    searchDocumentsByDate(searchDateRangeFrom: $searchDateRangeFrom, searchDateRangeTo: $searchDateRangeTo) {
      _id
      title
      description
      sender
      receivers
      date
      files
      transactionType
      timestamp
      tags
    }
  }
`)),U=s()(y||(y=_`
  query getTags {
    tags {
      _id
      text
    }
  }
`));a("ffd6");let I,T,Q,N,E,B,P,O,z,M,R,F,A,L,j,J=e=>e;const G=s()(I||(I=J`
  mutation(
    $username: String
    $fullname: String
    $password: String
    $department: [ID]
    $email: String
  ) {
    createUser(
      username: $username
      fullname: $fullname
      password: $password
      department: $department
      email: $email
    ) {
      _id
      username
      fullname
      password
      department {
        _id
        title
        description
      }
      email
    }
  }
`)),H=s()(T||(T=J`
  mutation(
    $_id: ID!
    $username: String
    $fullname: String
    $password: String
    $department: [ID]
    $email: String
  ) {
    updateUser(
      _id: $_id
      username: $username
      fullname: $fullname
      password: $password
      department: $department
      email: $email
    ) {
      username
      _id
    }
  }
`)),K=s()(Q||(Q=J`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),V=s()(N||(N=J`
  mutation(
    $title: String!
    $description: String
    $sender: ID!
    $receivers: [ID!]
    $date: Date
    $files: [ID]
    $transactionType: String
    $timestamp: String
    $tags: String
  ) {
    createDocument(
      title: $title
      description: $description
      sender: $sender
      receivers: $receivers
      date: $date
      files: $files
      transactionType: $transactionType
      timestamp: $timestamp
      tags: $tags
    ) {
      _id
      title
      description
      sender
      receivers
      date
      files
      transactionType
      timestamp
      tags
    }
  }
`)),W=s()(E||(E=J`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),X=s()(B||(B=J`
  mutation(
    $name: String
    $middlename: String
    $surname: String
    $organization: String
    $street: String
    $streetNumber: String
    $postalCode: String
    $area: String
    $city: String
    $country: String
    $region: String
    $prefecture: String
    $position: String
    $department: String
    $phone: String
    $fax: String
    $email: String
    $website: String
  ) {
    createContact(
      name: $name
      middlename: $middlename
      surname: $surname
      organization: $organization
      street: $street
      streetNumber: $streetNumber
      postalCode: $postalCode
      area: $area
      city: $city
      country: $country
      region: $region
      prefecture: $prefecture
      position: $position
      department: $department
      phone: $phone
      fax: $fax
      email: $email
      website: $website
    ) {
      _id
      name
      middlename
      surname
      organization
      street
      streetNumber
      postalCode
      area
      city
      country
      region
      prefecture
      position
      department
      phone
      fax
      email
      website
    }
  }
`)),Y=s()(P||(P=J`
  mutation(
    $_id: ID!
    $name: String
    $middlename: String
    $surname: String
    $organization: String
    $street: String
    $streetNumber: String
    $postalCode: String
    $area: String
    $city: String
    $country: String
    $region: String
    $prefecture: String
    $position: String
    $department: String
    $phone: String
    $fax: String
    $email: String
    $website: String
  ) {
    updateContact(
      _id: $_id
      name: $name
      middlename: $middlename
      surname: $surname
      organization: $organization
      street: $street
      streetNumber: $streetNumber
      postalCode: $postalCode
      area: $area
      city: $city
      country: $country
      region: $region
      prefecture: $prefecture
      position: $position
      department: $department
      phone: $phone
      fax: $fax
      email: $email
      website: $website
    ) {
      _id
      name
      middlename
      surname
      organization
      street
      streetNumber
      postalCode
      area
      city
      country
      region
      prefecture
      position
      department
      phone
      fax
      email
      website
    }
  }
`)),Z=s()(O||(O=J`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),ee=s()(z||(z=J`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),te=s()(M||(M=J`
  mutation($_id: ID!, $title: String, $description: String, $manager: ID) {
    updateDepartment(
      _id: $_id
      title: $title
      description: $description
      manager: $manager
    ) {
      _id
      title
      description
      manager
    }
  }
`)),ae=s()(R||(R=J`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),ne=s()(F||(F=J`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),re=s()(A||(A=J`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ie=s()(L||(L=J`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),se=s()(j||(j=J`
  mutation($text: String) {
    createTag(text: $text) {
      _id
      text
    }
  }
`))},"9dd3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[a("q-btn",{attrs:{icon:"add",flat:"",round:""},on:{click:function(t){e.newDepartmentDialog=!0}}}),e._v("Τμήματα\n        ")],1),e._l(e.departments,(function(t){return a("q-item",e._b({key:t._id,attrs:{clickable:""},on:{click:function(a){e.selectedDepartmentId=t._id,e.selectedDepartment=t}}},"q-item",t,!1),[a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(t.description)+"\n            ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{attrs:{flat:"",round:"",icon:"edit"},on:{click:function(a){a.stopPropagation(),e.updateDepartmentDialog=!0,e.departmentToUpdate=t}}})],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(a){return a.stopPropagation(),e.deleteDepartment(t._id)}}})],1)],1)}))],2)],1),a("div",{staticClass:"col"},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n          Μέλη επιλεγμένου τμήματος\n          ")]),e._l(e.usersByDepartment,(function(t){return a("q-item",e._b({key:t._id,attrs:{clickable:""},on:{click:function(a){e.userToEdit=t,e.newUserDialog=!0}}},"q-item",t,!1),[a("q-item-section",[a("q-item-label",[e._v(e._s(t.fullname))])],1),t._id===e.selectedDepartment.manager?a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"stars",disable:""}})],1):e._e(),t._id!==e.selectedDepartment.manager?a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{attrs:{flat:"",round:"",color:"grey",icon:"stars"},on:{click:function(a){return a.stopPropagation(),e.toggleManager(t._id)}}})],1):e._e()],1)}))],2)],1)]),a("q-dialog",{attrs:{persistent:""},model:{value:e.newDepartmentDialog,callback:function(t){e.newDepartmentDialog=t},expression:"newDepartmentDialog"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Νέο Τμήμα")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",label:"Τίτλος",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.newDepartment.title,callback:function(t){e.$set(e.newDepartment,"title",t)},expression:"newDepartment.title"}})],1),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",label:"Περιγραφή",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.newDepartment.description,callback:function(t){e.$set(e.newDepartment,"description",t)},expression:"newDepartment.description"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Προσθήκη"},on:{click:function(t){return e.createDepartment()}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.updateDepartmentDialog,callback:function(t){e.updateDepartmentDialog=t},expression:"updateDepartmentDialog"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Επεξεργασία Τμήματος")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",label:"Τίτλος",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.departmentToUpdate.title,callback:function(t){e.$set(e.departmentToUpdate,"title",t)},expression:"departmentToUpdate.title"}})],1),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",label:"Περιγραφή",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.departmentToUpdate.description,callback:function(t){e.$set(e.departmentToUpdate,"description",t)},expression:"departmentToUpdate.description"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Προσθήκη"},on:{click:function(t){return e.updateDepartment()}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.newUserDialog,callback:function(t){e.newUserDialog=t},expression:"newUserDialog"}},[a("userProfile",{attrs:{user:e.userToEdit}})],1),a("q-banner",{staticClass:"bg-indigo-1 text-black",attrs:{rounded:""}},[e._v("Οι χρήστες που ορίζονται ως Διαχειριστές (με αστεράκι) μπορούν να δουν τα έγγραφα όλων των μελών του τμήματος που είναι Διαχειριστές")])],1)},r=[],i=(a("e01a"),a("ddb0"),a("1fee")),s=a("9f73"),o={name:"DepartmentManagement",components:{userProfile:s["a"]},apollo:{departments:{query:i["b"].getDepartments,error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}},usersByDepartment:{query:i["b"].getUsersByDepartment,variables(){return{_id:this.selectedDepartmentId}},error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},methods:{listUsers(){this.$apollo.queries.getUsersByDepartment.refetch()},createDepartment(){const e=this.newDepartment.title,t=this.newDepartment.description;this.$apollo.mutate({mutation:i["a"].createDepartment,variables:{title:e,description:t},update:(e,{data:{createDepartment:t}})=>{if(t){const a=e.readQuery({query:i["b"].getDepartments});a.departments=[...a.departments,t],e.writeQuery({query:i["b"].getDepartments,data:a})}}})},deleteDepartment(e){this.$q.notify({message:"Διαγραφή Τμήματος;",color:"negative",timeout:0,actions:[{label:"Διαγραφή",color:"white",handler:()=>{this.$apollo.mutate({mutation:i["a"].deleteDepartment,variables:{_id:e},update:(t,{data:{deleteDepartment:a}})=>{if(a){const a=t.readQuery({query:i["b"].getDepartments});a.departments=a.departments.filter((t=>t._id!==e)),t.writeQuery({query:i["b"].getDepartments,data:a})}}}),this.$q.loading.hide()}},{label:"Άκυρο",color:"white"}]})},updateDepartment(){const e=this.departmentToUpdate._id,t=this.departmentToUpdate.title,a=this.departmentToUpdate.description;this.$apollo.mutate({mutation:i["a"].updateDepartment,variables:{_id:e,title:t,description:a},update:(e,{data:{updateDepartment:t}})=>{if(t){const t=e.readQuery({query:i["b"].getDepartments});e.writeQuery({query:i["b"].getDepartments,data:t})}}})},toggleManager(e){const t=this.selectedDepartmentId,a=e;this.$apollo.mutate({mutation:i["a"].updateDepartmentManager,variables:{_id:t,manager:a},update:(e,{data:{updateDepartmentManager:t}})=>{t&&this.$apollo.queries.usersByDepartment.refetch()}}),this.selectedDepartment.manager=e}},data(){return{newDepartmentDialog:!1,newDepartment:{title:null,description:null},selectedDepartmentId:null,selectedDepartment:null,userToEdit:null,newUserDialog:!1,updateDepartmentDialog:!1,departmentToUpdate:{_id:null,title:null,description:null}}},mounted(){this.$root.$on("user_department_UPDATE",(()=>{this.$apollo.queries.usersByDepartment.refetch()}))}},l=o,d=a("2877"),u=a("9989"),p=a("1c1c"),c=a("0170"),m=a("9c40"),g=a("66e5"),$=a("4074"),f=a("24e8"),D=a("f09f"),y=a("a370"),_=a("27f9"),b=a("4b7e"),h=a("54e1"),q=a("7f67"),S=a("eebe"),w=a.n(S),v=Object(d["a"])(l,n,r,!1,null,null,null);t["default"]=v.exports;w()(v,"components",{QPage:u["a"],QList:p["a"],QItemLabel:c["a"],QBtn:m["a"],QItem:g["a"],QItemSection:$["a"],QDialog:f["a"],QCard:D["a"],QCardSection:y["a"],QInput:_["a"],QCardActions:b["a"],QBanner:h["a"]}),w()(v,"directives",{ClosePopup:q["a"]})},"9f73":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Επεξεργασία Χρήστη")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",label:"Όνομα χρήστη",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),a("q-input",{attrs:{dense:"",label:"Ονοματεπώνυμο"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),a("q-input",{attrs:{dense:"",label:"email"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("q-input",{attrs:{dense:"",label:"Κωδικός",type:"password"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("q-select",{attrs:{label:"Τμήμα","stack-label":"",multiple:"","use-chips":"",dense:"",options:e.departments,"option-value":"_id","option-label":"title","transition-show":"scale","transition-hide":"scale"},model:{value:e.user.department,callback:function(t){e.$set(e.user,"department",t)},expression:"user.department"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Αποθήκευση"},on:{click:e.saveUserProfile}})],1)],1)},r=[],i=a("1fee"),s={name:"userProfile",props:["user"],data(){return{newDepartment:null,newDepartmentDialog:!1}},apollo:{departments:{query:i["b"].getDepartments,error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},methods:{saveUserProfile(){const e=this.user.department.map((function(e){return e["_id"]}));this.user._id?this.$apollo.mutate({mutation:i["a"].updateUser,variables:{_id:this.user._id,username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{updateUser:t}})=>{this.$root.$emit("user_department_UPDATE")}}):this.$apollo.mutate({mutation:i["a"].createUser,variables:{username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{createUser:t}})=>{if(t){const a=e.readQuery({query:i["b"].getUsers});e.writeQuery({query:i["b"].getUsers,data:a.users.push(t)})}}}).catch((e=>{this.$q.notify({message:e.message,color:"warning",timeout:4e3})}))}}},o=s,l=a("2877"),d=a("f09f"),u=a("a370"),p=a("27f9"),c=a("ddd8"),m=a("4b7e"),g=a("9c40"),$=a("7f67"),f=a("eebe"),D=a.n(f),y=Object(l["a"])(o,n,r,!1,null,null,null);t["a"]=y.exports;D()(y,"components",{QCard:d["a"],QCardSection:u["a"],QInput:p["a"],QSelect:c["a"],QCardActions:m["a"],QBtn:g["a"]}),D()(y,"directives",{ClosePopup:$["a"]})},ffd6:function(e,t){}}]);