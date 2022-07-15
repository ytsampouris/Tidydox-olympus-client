(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1fee":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r={};n.r(r),n.d(r,"getDocuments",(function(){return D})),n.d(r,"getDocument",(function(){return b})),n.d(r,"getFile",(function(){return q})),n.d(r,"getUsers",(function(){return y})),n.d(r,"getContacts",(function(){return v})),n.d(r,"getDepartments",(function(){return S})),n.d(r,"getUsersByDepartment",(function(){return x})),n.d(r,"searchDocuments",(function(){return w})),n.d(r,"searchDocumentsByDate",(function(){return k}));var a={};n.r(a),n.d(a,"createUser",(function(){return E})),n.d(a,"updateUser",(function(){return J})),n.d(a,"deleteUser",(function(){return j})),n.d(a,"createDocument",(function(){return A})),n.d(a,"deleteDocument",(function(){return G})),n.d(a,"createContact",(function(){return H})),n.d(a,"updateContact",(function(){return K})),n.d(a,"deleteContact",(function(){return V})),n.d(a,"createDepartment",(function(){return W})),n.d(a,"updateDepartment",(function(){return X})),n.d(a,"updateDepartmentManager",(function(){return Z})),n.d(a,"deleteDepartment",(function(){return ee})),n.d(a,"singleUpload",(function(){return te})),n.d(a,"signIn",(function(){return ne}));var i=n("9530"),s=n.n(i);let o,c=e=>e;s()(o||(o=c`
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
`));let l,u,d,m,p,g,_,f,h,$=e=>e;const D=s()(l||(l=$`
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
`)),b=s()(u||(u=$`
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
`)),q=s()(d||(d=$`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),y=s()(m||(m=$`
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
`)),v=s()(p||(p=$`
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
`)),S=s()(g||(g=$`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),x=s()(_||(_=$`
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
`)),w=s()(f||(f=$`
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
`)),k=s()(h||(h=$`
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
`));n("ffd6");let C,I,T,R,U,N,Q,z,B,L,M,O,Y,F,P=e=>e;const E=s()(C||(C=P`
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
`)),J=s()(I||(I=P`
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
`)),j=s()(T||(T=P`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),A=s()(R||(R=P`
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
`)),G=s()(U||(U=P`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),H=s()(N||(N=P`
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
`)),K=s()(Q||(Q=P`
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
`)),V=s()(z||(z=P`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),W=s()(B||(B=P`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),X=s()(L||(L=P`
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
`)),Z=s()(M||(M=P`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),ee=s()(O||(O=P`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),te=s()(Y||(Y=P`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ne=s()(F||(F=P`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`))},de62:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[e.$apollo.loading?n("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute",top:"40%"}},[n("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),n("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1):e._e(),n("q-input",{attrs:{"bottom-slots":"",label:"Αναζήτηση",counter:"",maxlength:"12",dense:"",rules:[function(e){return e.length>=3||"Βάλτε τουλάχιστον 3 χαρακτήρες"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()}},scopedSlots:e._u([{key:"after",fn:function(){return[n("q-btn",{attrs:{round:"",dense:"",flat:"",color:"primary",icon:"search"},on:{click:function(t){return e.search()}}}),n("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"event",color:"primary"}},[n("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{range:""},model:{value:e.searchDateRange,callback:function(t){e.searchDateRange=t},expression:"searchDateRange"}},[n("div",{staticClass:"row items-center justify-end q-gutter-sm"},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancel",color:"primary",flat:""}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"primary",flat:""},on:{click:function(t){return e.searchByDate()}}})],1)])],1)],1),n("q-btn",{attrs:{round:"",dense:"",flat:"",color:"black",icon:"cancel"},on:{click:function(t){return e.clearSearch()}}})]},proxy:!0}]),model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),n("div",{staticClass:"q-pa-xs flex flex-center"},[n("span",{staticClass:"text-subtitle1"},[e._v("Έγγραφα")]),n("q-btn",{attrs:{flat:"",round:"",icon:"refresh"},on:{click:function(t){return e.fetchDocuments()}}})],1),0!==e.documents.length||e.searchDocuments?e._e():n("q-banner",{staticClass:"bg-indigo-1 text-black",attrs:{rounded:""}},[e._v("Δεν υπάρχουν έγγραφα προς το παρόν")]),!e.searchDocuments&&e.groupedDocuments["Today"].length>0?n("div",{staticClass:"q-pa-xs flex-center"},[n("q-banner",{staticClass:"bg-indigo-1 text-black",attrs:{rounded:""}},[e._v("Σήμερα")])],1):e._e(),!e.searchDocuments&&e.groupedDocuments["Today"].length>0?n("q-list",e._l(e.groupedDocuments["Today"],(function(t){return n("q-item",{key:t._id},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"article"}})],1),n("q-item-section",[n("q-item-label",[n("b",[e._v("Α.Π. "+e._s(t.protocolNumber)+"/"+e._s(e.formatDate(t.date))+" ")]),e._v(", Τίτλος: "+e._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Περιγραφή: "+e._s(t.description)+"\n        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Αριθμός συνημμένων: "+e._s(t.files.length)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},["admin"===e.loggedUserRole?n("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(n){return e.deleteDocument(t._id)}}}):e._e(),n("q-btn",{attrs:{flat:"",round:"",icon:"visibility"},on:{click:function(n){return e.viewDocument(t._id)}}})],1)])],1)})),1):e._e(),!e.searchDocuments&&e.groupedDocuments["Yesterday"].length>0?n("div",{staticClass:"q-pa-xs flex-center"},[n("q-banner",{staticClass:"bg-indigo-1 text-black",attrs:{rounded:""}},[e._v("Χθες")])],1):e._e(),!e.searchDocuments&&e.groupedDocuments["Yesterday"].length>0?n("q-list",e._l(e.groupedDocuments["Yesterday"],(function(t){return n("q-item",{key:t._id},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"article"}})],1),n("q-item-section",[n("q-item-label",[n("b",[e._v("Α.Π. "+e._s(t.protocolNumber)+"/"+e._s(e.formatDate(t.date))+" ")]),e._v(", Τίτλος: "+e._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Περιγραφή: "+e._s(t.description)+"\n        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Αριθμός συνημμένων: "+e._s(t.files.length)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},["admin"===e.loggedUserRole?n("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(n){return e.deleteDocument(t._id)}}}):e._e(),n("q-btn",{attrs:{flat:"",round:"",icon:"visibility"},on:{click:function(n){return e.viewDocument(t._id)}}})],1)])],1)})),1):e._e(),!e.searchDocuments&&e.groupedDocuments["Last_week"].length>0?n("div",{staticClass:"q-pa-xs flex-center"},[n("q-banner",{staticClass:"bg-indigo-1 text-black",attrs:{rounded:""}},[e._v("Αυτή την εβδομάδα")])],1):e._e(),!e.searchDocuments&&e.groupedDocuments["Last_week"].length>0?n("q-list",e._l(e.groupedDocuments["Last_week"],(function(t){return n("q-item",{key:t._id},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"article"}})],1),n("q-item-section",[n("q-item-label",[n("b",[e._v("Α.Π. "+e._s(t.protocolNumber)+"/"+e._s(e.formatDate(t.date))+" ")]),e._v(", Τίτλος: "+e._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Περιγραφή: "+e._s(t.description)+"\n        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Αριθμός συνημμένων: "+e._s(t.files.length)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},["admin"===e.loggedUserRole?n("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(n){return e.deleteDocument(t._id)}}}):e._e(),n("q-btn",{attrs:{flat:"",round:"",icon:"visibility"},on:{click:function(n){return e.viewDocument(t._id)}}})],1)])],1)})),1):e._e(),!e.searchDocuments&&e.groupedDocuments["This_month"].length>0?n("div",{staticClass:"q-pa-xs flex-center"},[n("q-banner",{staticClass:"bg-indigo-1 text-black",attrs:{rounded:""}},[e._v("Αυτό το μήνα")])],1):e._e(),!e.searchDocuments&&e.groupedDocuments["This_month"].length>0?n("q-list",e._l(e.groupedDocuments["This_month"],(function(t){return n("q-item",{key:t._id},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"article"}})],1),n("q-item-section",[n("q-item-label",[n("b",[e._v("Α.Π. "+e._s(t.protocolNumber)+"/"+e._s(e.formatDate(t.date))+" ")]),e._v(", Τίτλος: "+e._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Περιγραφή: "+e._s(t.description)+"\n        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Αριθμός συνημμένων: "+e._s(t.files.length)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},["admin"===e.loggedUserRole?n("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(n){return e.deleteDocument(t._id)}}}):e._e(),n("q-btn",{attrs:{flat:"",round:"",icon:"visibility"},on:{click:function(n){return e.viewDocument(t._id)}}})],1),e._v("searchDateRange\n      ")])],1)})),1):e._e(),!e.searchDocuments&&e.groupedDocuments["Older"].length>0?n("div",{staticClass:"q-pa-xs flex-center"},[n("q-banner",{staticClass:"bg-indigo-1 text-black",attrs:{rounded:""}},[e._v("Παλιότερα")])],1):e._e(),!e.searchDocuments&&e.groupedDocuments["Older"].length>0?n("q-list",e._l(e.groupedDocuments["Older"],(function(t){return n("q-item",{key:t._id},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"article"}})],1),n("q-item-section",[n("q-item-label",[n("b",[e._v("Α.Π. "+e._s(t.protocolNumber)+"/"+e._s(e.formatDate(t.date))+" ")]),e._v(", Τίτλος: "+e._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Περιγραφή: "+e._s(t.description)+"\n        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Αριθμός συνημμένων: "+e._s(t.files.length)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},["admin"===e.loggedUserRole?n("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(n){return e.deleteDocument(t._id)}}}):e._e(),n("q-btn",{attrs:{flat:"",round:"",icon:"visibility"},on:{click:function(n){return e.viewDocument(t._id)}}})],1)])],1)})),1):e._e(),!e.searchDocuments&&e.showLoadMore?n("q-btn",{staticClass:"full-width",attrs:{outline:"",label:"Φόρτωση περισσότερων"},on:{click:function(t){return e.fetchDocuments()}}}):e._e(),e.searchDocuments?n("q-list",e._l(e.searchDocuments,(function(t){return n("q-item",{key:t._id},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"article"}})],1),n("q-item-section",[n("q-item-label",[n("b",[e._v("Α.Π. "+e._s(t.protocolNumber)+"/"+e._s(e.formatDate(t.date))+" ")]),e._v(", Τίτλος: "+e._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Περιγραφή: "+e._s(t.description)+"\n        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n          Αριθμός συνημμένων: "+e._s(t.files.length)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},["admin"===e.loggedUserRole?n("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(n){return e.deleteDocument(t._id)}}}):e._e(),n("q-btn",{attrs:{flat:"",round:"",icon:"visibility"},on:{click:function(n){return e.viewDocument(t._id)}}})],1)])],1)})),1):e._e()],1)},a=[],i=n("1fee"),s=n("bd4c"),o={name:"documents",data(){return{searchText:null,searchDateRange:null,expanded:!1,group:["title"],searchDocuments:null,documents:[],currentPage:0,showLoadMore:!0,loggedUserRole:null}},mounted(){this.fetchDocuments(),this.loggedUserRole=JSON.parse(localStorage.getItem("user")).role},computed:{groupedDocuments:function(){const e=new Date;e.setHours(0,0,0,0);const t={Today:[],Yesterday:[],Last_week:[],This_month:[],Older:[]};return this.documents.length>0&&this.documents.forEach((n=>{const r=new Date(n.date),a=s["b"].getDateDiff(e,r,"days");0===a&&t["Today"].push(n),1===a&&t["Yesterday"].push(n),a>1&&a<=7&&t["Last_week"].push(n),a>7&&a<=30&&r.getMonth()===e.getMonth()&&t["This_month"].push(n),a>30&&t["Older"].push(n)})),t}},methods:{formatDate(e){return s["b"].formatDate(new Date(e),"DD-MM-YYYY")},fetchDocuments(){const e=this.currentPage;this.$apollo.query({query:i["b"].getDocuments,variables:{page:e}}).then((e=>{e.data.documents.forEach((e=>{this.documents.push(e)})),this.documents.concat(e.data.documents),this.currentPage+=1,0===e.data.documents.length&&(this.showLoadMore=!1,this.$q.notify({message:"Δεν βρέθηκαν άλλα έγγραφα",color:"accent",timeout:800}))}))},search(){const e=this.searchText;this.expanded=!1,this.$apollo.query({query:i["b"].searchDocuments,variables:{searchText:e}}).then((e=>{this.searchDocuments=e.data.searchDocuments}))},searchByDate(){let e=null,t=null;this.searchDateRange.from.length>0&&this.searchDateRange.to.length>0&&(e=new Date(this.searchDateRange.from),t=new Date(this.searchDateRange.to)),this.expanded=!1,this.$apollo.query({query:i["b"].searchDocumentsByDate,variables:{searchDateRangeFrom:e,searchDateRangeTo:t}}).then((e=>{this.searchDocuments=e.data.searchDocumentsByDate}))},clearSearch(){this.searchDocuments=null,this.searchDateRange=null},viewDocument(e){this.$router.push(`documents/${e}`)},deleteDocument(e){this.$q.notify({message:"Διαγραφή Εγγράφου;",color:"negative",timeout:0,actions:[{label:"Διαγραφή",color:"white",handler:()=>{this.$apollo.mutate({mutation:i["a"].deleteDocument,variables:{_id:e},update:(t,{data:{deleteDocument:n}})=>{if(n){const n=t.readQuery({query:i["b"].getDocuments});n.documents=n.documents.filter((t=>t._id!==e)),t.writeQuery({query:i["b"].getDocuments,data:n})}}})}},{label:"Άκυρο",color:"white"}]})}}},c=o,l=n("2877"),u=n("9989"),d=n("cf57"),m=n("27f9"),p=n("9c40"),g=n("7cbe"),_=n("52ee"),f=n("54e1"),h=n("1c1c"),$=n("66e5"),D=n("4074"),b=n("0016"),q=n("0170"),y=n("7f67"),v=n("eebe"),S=n.n(v),x=Object(l["a"])(c,r,a,!1,null,null,null);t["default"]=x.exports;S()(x,"components",{QPage:u["a"],QSpinnerGears:d["a"],QInput:m["a"],QBtn:p["a"],QPopupProxy:g["a"],QDate:_["a"],QBanner:f["a"],QList:h["a"],QItem:$["a"],QItemSection:D["a"],QIcon:b["a"],QItemLabel:q["a"]}),S()(x,"directives",{ClosePopup:y["a"]})},ffd6:function(e,t){}}]);