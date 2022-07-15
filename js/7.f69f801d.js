(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r}));var n={};i.r(n),i.d(n,"getDocuments",(function(){return D})),i.d(n,"getDocument",(function(){return b})),i.d(n,"getFile",(function(){return q})),i.d(n,"getUsers",(function(){return v})),i.d(n,"getContacts",(function(){return h})),i.d(n,"getDepartments",(function(){return w})),i.d(n,"getUsersByDepartment",(function(){return x})),i.d(n,"searchDocuments",(function(){return C})),i.d(n,"searchDocumentsByDate",(function(){return I})),i.d(n,"getTags",(function(){return T}));var r={};i.r(r),i.d(r,"createUser",(function(){return K})),i.d(r,"updateUser",(function(){return P})),i.d(r,"deleteUser",(function(){return j})),i.d(r,"createDocument",(function(){return G})),i.d(r,"deleteDocument",(function(){return H})),i.d(r,"createContact",(function(){return W})),i.d(r,"updateContact",(function(){return X})),i.d(r,"deleteContact",(function(){return Z})),i.d(r,"createDepartment",(function(){return ee})),i.d(r,"updateDepartment",(function(){return te})),i.d(r,"updateDepartmentManager",(function(){return ie})),i.d(r,"deleteDepartment",(function(){return ne})),i.d(r,"singleUpload",(function(){return re})),i.d(r,"signIn",(function(){return ae})),i.d(r,"createTag",(function(){return se}));var a=i("9530"),s=i.n(a);let o,d=e=>e;s()(o||(o=d`
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
`));let c,m,u,l,p,$,g,_,f,S,y=e=>e;const D=s()(c||(c=y`
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
`)),b=s()(m||(m=y`
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
`)),q=s()(u||(u=y`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),v=s()(l||(l=y`
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
`)),h=s()(p||(p=y`
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
`)),w=s()($||($=y`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),x=s()(g||(g=y`
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
`)),C=s()(_||(_=y`
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
`)),I=s()(f||(f=y`
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
`)),T=s()(S||(S=y`
  query getTags {
    tags {
      _id
      text
    }
  }
`));i("ffd6");let N,z,F,k,U,Q,R,J,O,B,M,Y,A,E,L,V=e=>e;const K=s()(N||(N=V`
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
`)),P=s()(z||(z=V`
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
`)),j=s()(F||(F=V`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),G=s()(k||(k=V`
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
`)),H=s()(U||(U=V`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),W=s()(Q||(Q=V`
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
`)),X=s()(R||(R=V`
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
`)),Z=s()(J||(J=V`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),ee=s()(O||(O=V`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),te=s()(B||(B=V`
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
`)),ie=s()(M||(M=V`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),ne=s()(Y||(Y=V`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),re=s()(A||(A=V`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ae=s()(E||(E=V`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),se=s()(L||(L=V`
  mutation($text: String) {
    createTag(text: $text) {
      _id
      text
    }
  }
`))},f9c3:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[e.$apollo.loading?i("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute",top:"40%"}},[i("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),i("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1):e._e(),e.document?i("div",{staticClass:"q-pa-xs"},[i("p",{staticClass:"text-h4"},[e._v("Αρ. Πρωτ.: "+e._s(e.document.protocolNumber)+", Είδος: "+e._s(e.document.transactionType))]),i("div",{staticClass:"text-body1"},[e._v("Τίτλος: "+e._s(e.document.title))]),i("div",{staticClass:"text-body1"},[e._v("Περιγραφή: "+e._s(e.document.description))]),i("div",{staticClass:"text-body1"},[e._v("\n        Αποστολέας/εις:\n        "),i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},e._l(JSON.parse(e.document.sender),(function(t){return i("q-expansion-item",{key:t._id,attrs:{icon:"perm_identity",label:t.fullname}},[i("q-card",[i("q-card-section",[i("q-list",[t.organization?i("q-item",[i("q-item-section",[e._v("Φορέας: "+e._s(t.organization))])],1):e._e(),t.street?i("q-item",[i("q-item-section",[e._v("Διεύθυνση: "+e._s(t.street)+" "+e._s(t.streetNumber)+", TK "+e._s(t.postalCode)+", "+e._s(t.area)+" "+e._s(t.city))])],1):e._e(),t.prefecture?i("q-item",[i("q-item-section",[e._v(e._s(t.prefecture)+" "+e._s(t.region)+", "+e._s(t.country))])],1):e._e(),t.website?i("q-item",[i("q-item-section",[e._v("Ιστοσελίδα: "+e._s(t.website))])],1):e._e(),t.email?i("q-item",[i("q-item-section",[e._v("email: "+e._s(t.email))])],1):e._e(),t.phone?i("q-item",[i("q-item-section",[e._v("Τηλέφωνο: "+e._s(t.phone)+", Fax: "+e._s(t.fax))])],1):e._e(),t.department?i("q-item",[i("q-item-section",[e._v("Τμήμα: "+e._s(t.department)+", Θέση: "+e._s(t.position))])],1):e._e()],1)],1)],1)],1)})),1)],1),i("div",{staticClass:"text-body1"},[e._v("Παραλήπτης/ες:\n        "),i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},e._l(JSON.parse(e.document.receivers),(function(t){return i("q-expansion-item",{key:t._id,attrs:{icon:"perm_identity",label:t.fullname}},[i("q-card",[i("q-card-section",[i("q-list",[t.organization?i("q-item",[i("q-item-section",[e._v("Φορέας: "+e._s(t.organization))])],1):e._e(),t.street?i("q-item",[i("q-item-section",[e._v("Διεύθυνση: "+e._s(t.street)+" "+e._s(t.streetNumber)+", TK "+e._s(t.postalCode)+", "+e._s(t.area)+" "+e._s(t.city))])],1):e._e(),t.prefecture?i("q-item",[i("q-item-section",[e._v(e._s(t.prefecture)+" "+e._s(t.region)+", "+e._s(t.country))])],1):e._e(),t.website?i("q-item",[i("q-item-section",[e._v("Ιστοσελίδα: "+e._s(t.website))])],1):e._e(),t.email?i("q-item",[i("q-item-section",[e._v("email: "+e._s(t.email))])],1):e._e(),t.phone?i("q-item",[i("q-item-section",[e._v("Τηλέφωνο: "+e._s(t.phone)+", Fax: "+e._s(t.fax))])],1):e._e(),t.department?i("q-item",[i("q-item-section",[e._v("Τμήμα: "+e._s(t.department)+", Θέση: "+e._s(t.position))])],1):e._e()],1)],1)],1)],1)})),1)],1),i("div",{staticClass:"q-ma-md"}),i("q-card",{staticClass:"q-pa-md"},[i("div",{staticClass:"text-h6"},[e._v("Λεπτομέρειες εγγράφου")]),i("q-separator"),e.document.tags?i("q-item-label",{attrs:{caption:""}},[e._v("Κατηγορίες:\n        "),e._l(JSON.parse(e.document.tags),(function(t){return i("q-chip",{key:t._id,attrs:{outline:"",square:"",color:"blue","text-color":"blue",icon:"bookmark"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}))],2):e._e(),i("div",{staticClass:"text-body1"},[e._v("Ημερομηνία εγγράφου: "+e._s(e.formatDate(e.document.date)))]),i("div",{staticClass:"text-body1"},[e._v("Ημερομηνία καταχώρησης: "+e._s(e.formatDate(e.document.timestamp)))]),i("div",{staticClass:"text-body1"},[e._v("Αρχεία: "+e._s(JSON.parse(e.document.files).length))]),i("q-list",{attrs:{bordered:"",separator:""}},e._l(JSON.parse(e.document.files),(function(t){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t._id,attrs:{clickable:""},on:{click:function(i){return e.showFile(t)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{color:"primary",name:"description"}})],1),i("q-item-section",[e._v(e._s(t.filename))])],1)})),1)],1)],1):e._e()])},r=[],a=i("bd4c"),s=i("1fee"),o={name:"DocumentViewer",data(){return{show:!0}},apollo:{document:{query:s["b"].getDocument,variables(){return{_id:this.$route.params.id}},error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},computed:{currentRouteName(){return this.$route.params.id}},methods:{formatDate(e){return a["b"].formatDate(e,"DD-MM-YYYY")},showFile(e){if("image"===e.contentType.split("/")[0])this.$router.push(`documentFileViewerImg/${e._id}`);else if("application/pdf"===e.contentType)this.$router.push(`documentFileViewerPdf/${e._id}`);else{const t=e._id;this.$apollo.query({query:s["b"].getFile,variables:{_id:t}}).then((t=>{const i=document.createElement("a");i.setAttribute("href","data:application/octet-stream;base64,"+t.data.downloadFile),i.setAttribute("download",e.filename),i.click()}))}}}},d=o,c=i("2877"),m=i("9989"),u=i("cf57"),l=i("1c1c"),p=i("3b73"),$=i("f09f"),g=i("a370"),_=i("66e5"),f=i("4074"),S=i("eb85"),y=i("0170"),D=i("b0476"),b=i("0016"),q=i("714f"),v=i("eebe"),h=i.n(v),w=Object(c["a"])(d,n,r,!1,null,null,null);t["default"]=w.exports;h()(w,"components",{QPage:m["a"],QSpinnerGears:u["a"],QList:l["a"],QExpansionItem:p["a"],QCard:$["a"],QCardSection:g["a"],QItem:_["a"],QItemSection:f["a"],QSeparator:S["a"],QItemLabel:y["a"],QChip:D["a"],QIcon:b["a"]}),h()(w,"directives",{Ripple:q["a"]})},ffd6:function(e,t){}}]);