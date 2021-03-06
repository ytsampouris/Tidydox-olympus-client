(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1fee":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n={};r.r(n),r.d(n,"getDocuments",(function(){return D})),r.d(n,"getDocument",(function(){return b})),r.d(n,"getFile",(function(){return h})),r.d(n,"getUsers",(function(){return w})),r.d(n,"getContacts",(function(){return q})),r.d(n,"getDepartments",(function(){return v})),r.d(n,"getUsersByDepartment",(function(){return k})),r.d(n,"searchDocuments",(function(){return U})),r.d(n,"searchDocumentsByDate",(function(){return x})),r.d(n,"getTags",(function(){return I}));var a={};r.r(a),r.d(a,"createUser",(function(){return Y})),r.d(a,"updateUser",(function(){return G})),r.d(a,"deleteUser",(function(){return H})),r.d(a,"createDocument",(function(){return V})),r.d(a,"deleteDocument",(function(){return K})),r.d(a,"createContact",(function(){return W})),r.d(a,"updateContact",(function(){return X})),r.d(a,"deleteContact",(function(){return Z})),r.d(a,"createDepartment",(function(){return ee})),r.d(a,"updateDepartment",(function(){return te})),r.d(a,"updateDepartmentManager",(function(){return re})),r.d(a,"deleteDepartment",(function(){return ne})),r.d(a,"singleUpload",(function(){return ae})),r.d(a,"signIn",(function(){return ie})),r.d(a,"createTag",(function(){return se}));var i=r("9530"),s=r.n(i);let o,u=e=>e;s()(o||(o=u`
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
`));let d,l,m,c,p,g,$,f,y,_,S=e=>e;const D=s()(d||(d=S`
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
`)),b=s()(l||(l=S`
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
`)),h=s()(m||(m=S`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),w=s()(c||(c=S`
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
`)),q=s()(p||(p=S`
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
`)),v=s()(g||(g=S`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),k=s()($||($=S`
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
`)),U=s()(f||(f=S`
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
`)),x=s()(y||(y=S`
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
`)),I=s()(_||(_=S`
  query getTags {
    tags {
      _id
      text
    }
  }
`));r("ffd6");let C,T,Q,N,E,P,z,B,R,F,O,L,M,A,j,J=e=>e;const Y=s()(C||(C=J`
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
`)),G=s()(T||(T=J`
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
`)),H=s()(Q||(Q=J`
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
`)),K=s()(E||(E=J`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),W=s()(P||(P=J`
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
`)),X=s()(z||(z=J`
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
`)),Z=s()(B||(B=J`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),ee=s()(R||(R=J`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),te=s()(F||(F=J`
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
`)),re=s()(O||(O=J`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),ne=s()(L||(L=J`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),ae=s()(M||(M=J`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ie=s()(A||(A=J`
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
`))},7367:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[e._v("\n  ?????????? ?????? ?????????????? ?????? ????????????????????\n  "),r("q-list",{attrs:{bordered:"",padding:""}},e._l(e.users,(function(t){return r("q-item",{key:t._id},[r("q-item-section",[r("q-item-label",[e._v(e._s(t.fullname))])],1),r("q-item-section",{attrs:{side:"",top:""}},[r("q-btn",{attrs:{icon:"edit",flat:"",round:""},on:{click:function(r){e.newUserDialog=!0,e.userToEdit=t}}})],1),r("q-item-section",{attrs:{side:"",top:""}},[r("q-btn",{attrs:{icon:"delete",flat:"",round:""},on:{click:function(r){return e.deleteUser(t._id)}}})],1)],1)})),1),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[r("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:function(t){e.newUserDialog=!0,e.userToEdit=e.newUser}}})],1),r("q-dialog",{attrs:{persistent:""},model:{value:e.newUserDialog,callback:function(t){e.newUserDialog=t},expression:"newUserDialog"}},[r("userProfile",{attrs:{user:e.userToEdit}})],1),r("q-btn",{attrs:{color:"red","icon-right":"fab fa-youtube",label:"?????????????? ????????????",type:"a",target:"new_tab",href:"https://www.youtube.com/playlist?list=PLwQ-2nYs008YGHCs05QonVP1cwicu9sra"}})],1)},a=[],i=r("1fee"),s=r("9f73"),o={name:"userManagement",components:{userProfile:s["a"]},data(){return{newUser:{userName:"???????? ??????????????"},newUserDialog:!1,userToEdit:null}},apollo:{users:{query:i["b"].getUsers,error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},methods:{deleteUser(e){this.$q.notify({message:"???????????????? ????????????;",color:"negative",timeout:0,actions:[{label:"????????????????",color:"white",handler:()=>{this.$apollo.mutate({mutation:i["a"].deleteUser,variables:{_id:e},update:(t,{data:{deleteUser:r}})=>{if(r){const r=t.readQuery({query:i["b"].getUsers});r.users=r.users.filter((t=>t._id!==e)),t.writeQuery({query:i["b"].getUsers,data:r})}}})}},{label:"??????????",color:"white"}]})}}},u=o,d=r("2877"),l=r("9989"),m=r("1c1c"),c=r("66e5"),p=r("4074"),g=r("0170"),$=r("9c40"),f=r("de5e"),y=r("24e8"),_=r("eebe"),S=r.n(_),D=Object(d["a"])(u,n,a,!1,null,null,null);t["default"]=D.exports;S()(D,"components",{QPage:l["a"],QList:m["a"],QItem:c["a"],QItemSection:p["a"],QItemLabel:g["a"],QBtn:$["a"],QPageSticky:f["a"],QDialog:y["a"]})},"9f73":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{staticStyle:{"min-width":"350px"}},[r("q-card-section",[r("div",{staticClass:"text-h6"},[e._v("?????????????????????? ????????????")])]),r("q-card-section",{staticClass:"q-pt-none"},[r("q-input",{attrs:{dense:"",label:"?????????? ????????????",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),r("q-input",{attrs:{dense:"",label:"??????????????????????????"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),r("q-input",{attrs:{dense:"",label:"email"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),r("q-input",{attrs:{dense:"",label:"??????????????",type:"password"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),r("q-select",{attrs:{label:"??????????","stack-label":"",multiple:"","use-chips":"",dense:"",options:e.departments,"option-value":"_id","option-label":"title","transition-show":"scale","transition-hide":"scale"},model:{value:e.user.department,callback:function(t){e.$set(e.user,"department",t)},expression:"user.department"}})],1),r("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"??????????"}}),r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"????????????????????"},on:{click:e.saveUserProfile}})],1)],1)},a=[],i=r("1fee"),s={name:"userProfile",props:["user"],data(){return{newDepartment:null,newDepartmentDialog:!1}},apollo:{departments:{query:i["b"].getDepartments,error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},methods:{saveUserProfile(){const e=this.user.department.map((function(e){return e["_id"]}));this.user._id?this.$apollo.mutate({mutation:i["a"].updateUser,variables:{_id:this.user._id,username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{updateUser:t}})=>{this.$root.$emit("user_department_UPDATE")}}):this.$apollo.mutate({mutation:i["a"].createUser,variables:{username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{createUser:t}})=>{if(t){const r=e.readQuery({query:i["b"].getUsers});e.writeQuery({query:i["b"].getUsers,data:r.users.push(t)})}}}).catch((e=>{this.$q.notify({message:e.message,color:"warning",timeout:4e3})}))}}},o=s,u=r("2877"),d=r("f09f"),l=r("a370"),m=r("27f9"),c=r("ddd8"),p=r("4b7e"),g=r("9c40"),$=r("7f67"),f=r("eebe"),y=r.n(f),_=Object(u["a"])(o,n,a,!1,null,null,null);t["a"]=_.exports;y()(_,"components",{QCard:d["a"],QCardSection:l["a"],QInput:m["a"],QSelect:c["a"],QCardActions:p["a"],QBtn:g["a"]}),y()(_,"directives",{ClosePopup:$["a"]})},ffd6:function(e,t){}}]);