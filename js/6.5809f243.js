(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1fee":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}));var n={};r.r(n),r.d(n,"getDocuments",(function(){return D})),r.d(n,"getDocument",(function(){return S})),r.d(n,"getFile",(function(){return b})),r.d(n,"getUsers",(function(){return h})),r.d(n,"getContacts",(function(){return w})),r.d(n,"getDepartments",(function(){return v})),r.d(n,"getUsersByDepartment",(function(){return q})),r.d(n,"searchDocuments",(function(){return k})),r.d(n,"searchDocumentsByDate",(function(){return U}));var i={};r.r(i),r.d(i,"createUser",(function(){return L})),r.d(i,"updateUser",(function(){return j})),r.d(i,"deleteUser",(function(){return J})),r.d(i,"createDocument",(function(){return G})),r.d(i,"deleteDocument",(function(){return H})),r.d(i,"createContact",(function(){return K})),r.d(i,"updateContact",(function(){return V})),r.d(i,"deleteContact",(function(){return W})),r.d(i,"createDepartment",(function(){return X})),r.d(i,"updateDepartment",(function(){return Y})),r.d(i,"updateDepartmentManager",(function(){return Z})),r.d(i,"deleteDepartment",(function(){return ee})),r.d(i,"singleUpload",(function(){return te})),r.d(i,"signIn",(function(){return re}));var a=r("9530"),s=r.n(a);let o,u=e=>e;s()(o||(o=u`
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
`));let l,d,c,m,p,$,g,f,y,_=e=>e;const D=s()(l||(l=_`
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
    }
  }
`)),S=s()(d||(d=_`
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
    }
  }
`)),b=s()(c||(c=_`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),h=s()(m||(m=_`
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
`)),w=s()(p||(p=_`
  query getContacts {
    contacts {
      _id
      fullname
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
`)),v=s()($||($=_`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),q=s()(g||(g=_`
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
`)),k=s()(f||(f=_`
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
    }
  }
`)),U=s()(y||(y=_`
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
    }
  }
`));r("ffd6");let I,C,x,T,Q,N,E,z,P,B,R,F,O,M,A=e=>e;const L=s()(I||(I=A`
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
`)),j=s()(C||(C=A`
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
`)),J=s()(x||(x=A`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),G=s()(T||(T=A`
  mutation(
    $title: String!
    $description: String
    $sender: ID!
    $receivers: [ID!]
    $date: Date
    $files: [ID]
    $transactionType: String
    $timestamp: String
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
    }
  }
`)),H=s()(Q||(Q=A`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),K=s()(N||(N=A`
  mutation(
    $fullname: String
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
      fullname: $fullname
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
      fullname
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
`)),V=s()(E||(E=A`
  mutation(
    $_id: ID!
    $fullname: String
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
      fullname: $fullname
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
      fullname
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
`)),W=s()(z||(z=A`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),X=s()(P||(P=A`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),Y=s()(B||(B=A`
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
`)),Z=s()(R||(R=A`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),ee=s()(F||(F=A`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),te=s()(O||(O=A`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),re=s()(M||(M=A`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`))},7367:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[e._v("\n  ?????????? ?????? ?????????????? ?????? ????????????????????\n  "),r("q-list",{attrs:{bordered:"",padding:""}},e._l(e.users,(function(t){return r("q-item",{key:t._id},[r("q-item-section",[r("q-item-label",[e._v(e._s(t.fullname))])],1),r("q-item-section",{attrs:{side:"",top:""}},[r("q-btn",{attrs:{icon:"edit",flat:"",round:""},on:{click:function(r){e.newUserDialog=!0,e.userToEdit=t}}})],1),r("q-item-section",{attrs:{side:"",top:""}},[r("q-btn",{attrs:{icon:"delete",flat:"",round:""},on:{click:function(r){return e.deleteUser(t._id)}}})],1)],1)})),1),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[r("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:function(t){e.newUserDialog=!0,e.userToEdit=e.newUser}}})],1),r("q-dialog",{attrs:{persistent:""},model:{value:e.newUserDialog,callback:function(t){e.newUserDialog=t},expression:"newUserDialog"}},[r("userProfile",{attrs:{user:e.userToEdit}})],1)],1)},i=[],a=r("1fee"),s=r("9f73"),o={name:"userManagement",components:{userProfile:s["a"]},data(){return{newUser:{userName:"???????? ??????????????"},newUserDialog:!1,userToEdit:null}},apollo:{users:{query:a["b"].getUsers,error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},methods:{deleteUser(e){this.$q.notify({message:"???????????????? ????????????;",color:"negative",timeout:0,actions:[{label:"????????????????",color:"white",handler:()=>{this.$apollo.mutate({mutation:a["a"].deleteUser,variables:{_id:e},update:(t,{data:{deleteUser:r}})=>{if(r){const r=t.readQuery({query:a["b"].getUsers});r.users=r.users.filter((t=>t._id!==e)),t.writeQuery({query:a["b"].getUsers,data:r})}}})}},{label:"??????????",color:"white"}]})}}},u=o,l=r("2877"),d=r("9989"),c=r("1c1c"),m=r("66e5"),p=r("4074"),$=r("0170"),g=r("9c40"),f=r("de5e"),y=r("24e8"),_=r("eebe"),D=r.n(_),S=Object(l["a"])(u,n,i,!1,null,null,null);t["default"]=S.exports;D()(S,"components",{QPage:d["a"],QList:c["a"],QItem:m["a"],QItemSection:p["a"],QItemLabel:$["a"],QBtn:g["a"],QPageSticky:f["a"],QDialog:y["a"]})},"9f73":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{staticStyle:{"min-width":"350px"}},[r("q-card-section",[r("div",{staticClass:"text-h6"},[e._v("?????????????????????? ????????????")])]),r("q-card-section",{staticClass:"q-pt-none"},[r("q-input",{attrs:{dense:"",label:"?????????? ????????????",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),r("q-input",{attrs:{dense:"",label:"??????????????????????????"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),r("q-input",{attrs:{dense:"",label:"email"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),r("q-input",{attrs:{dense:"",label:"??????????????",type:"password"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),r("q-select",{attrs:{label:"??????????","stack-label":"",multiple:"","use-chips":"",dense:"",options:e.departments,"option-value":"_id","option-label":"title","transition-show":"scale","transition-hide":"scale"},model:{value:e.user.department,callback:function(t){e.$set(e.user,"department",t)},expression:"user.department"}})],1),r("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"??????????"}}),r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"????????????????????"},on:{click:e.saveUserProfile}})],1)],1)},i=[],a=r("1fee"),s={name:"userProfile",props:["user"],data(){return{newDepartment:null,newDepartmentDialog:!1}},apollo:{departments:{query:a["b"].getDepartments,error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},methods:{saveUserProfile(){const e=this.user.department.map((function(e){return e["_id"]}));this.user._id?this.$apollo.mutate({mutation:a["a"].updateUser,variables:{_id:this.user._id,username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{updateUser:t}})=>{this.$root.$emit("user_department_UPDATE")}}):this.$apollo.mutate({mutation:a["a"].createUser,variables:{username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{createUser:t}})=>{if(t){const r=e.readQuery({query:a["b"].getUsers});e.writeQuery({query:a["b"].getUsers,data:r.users.push(t)})}}}).catch((e=>{this.$q.notify({message:e.message,color:"warning",timeout:4e3})}))}}},o=s,u=r("2877"),l=r("f09f"),d=r("a370"),c=r("27f9"),m=r("ddd8"),p=r("4b7e"),$=r("9c40"),g=r("7f67"),f=r("eebe"),y=r.n(f),_=Object(u["a"])(o,n,i,!1,null,null,null);t["a"]=_.exports;y()(_,"components",{QCard:l["a"],QCardSection:d["a"],QInput:c["a"],QSelect:m["a"],QCardActions:p["a"],QBtn:$["a"]}),y()(_,"directives",{ClosePopup:g["a"]})},ffd6:function(e,t){}}]);