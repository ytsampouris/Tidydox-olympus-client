(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return n}));var r={};i.r(r),i.d(r,"getDocuments",(function(){return y})),i.d(r,"getDocument",(function(){return D})),i.d(r,"getFile",(function(){return q})),i.d(r,"getUsers",(function(){return v})),i.d(r,"getContacts",(function(){return b})),i.d(r,"getDepartments",(function(){return h})),i.d(r,"getUsersByDepartment",(function(){return w})),i.d(r,"searchDocuments",(function(){return C})),i.d(r,"searchDocumentsByDate",(function(){return x}));var n={};i.r(n),i.d(n,"createUser",(function(){return E})),i.d(n,"updateUser",(function(){return V})),i.d(n,"deleteUser",(function(){return K})),i.d(n,"createDocument",(function(){return L})),i.d(n,"deleteDocument",(function(){return P})),i.d(n,"createContact",(function(){return j})),i.d(n,"updateContact",(function(){return G})),i.d(n,"deleteContact",(function(){return H})),i.d(n,"createDepartment",(function(){return W})),i.d(n,"updateDepartment",(function(){return X})),i.d(n,"updateDepartmentManager",(function(){return Z})),i.d(n,"deleteDepartment",(function(){return ee})),i.d(n,"singleUpload",(function(){return te})),i.d(n,"signIn",(function(){return ie}));var a=i("9530"),s=i.n(a);let o,d=e=>e;s()(o||(o=d`
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
`));let c,m,u,l,p,$,_,g,f,S=e=>e;const y=s()(c||(c=S`
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
`)),D=s()(m||(m=S`
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
`)),q=s()(u||(u=S`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),v=s()(l||(l=S`
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
`)),b=s()(p||(p=S`
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
`)),h=s()($||($=S`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),w=s()(_||(_=S`
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
`)),C=s()(g||(g=S`
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
`)),x=s()(f||(f=S`
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
`));i("ffd6");let I,N,T,z,F,U,k,Q,R,J,B,M,O,Y,A=e=>e;const E=s()(I||(I=A`
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
`)),V=s()(N||(N=A`
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
`)),K=s()(T||(T=A`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),L=s()(z||(z=A`
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
`)),P=s()(F||(F=A`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),j=s()(U||(U=A`
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
`)),G=s()(k||(k=A`
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
`)),H=s()(Q||(Q=A`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),W=s()(R||(R=A`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),X=s()(J||(J=A`
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
`)),Z=s()(B||(B=A`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),ee=s()(M||(M=A`
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
`)),ie=s()(Y||(Y=A`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`))},f9c3:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[e.$apollo.loading?i("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute",top:"40%"}},[i("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),i("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1):e._e(),e.document?i("div",{staticClass:"q-pa-xs"},[i("p",{staticClass:"text-h4"},[e._v("Αρ. Πρωτ.: "+e._s(e.document.protocolNumber)+", Είδος: "+e._s(e.document.transactionType))]),i("div",{staticClass:"text-body1"},[e._v("Τίτλος: "+e._s(e.document.title))]),i("div",{staticClass:"text-body1"},[e._v("Περιγραφή: "+e._s(e.document.description))]),i("div",{staticClass:"text-body1"},[e._v("\n        Αποστολέας/εις:\n        "),i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},e._l(JSON.parse(e.document.sender),(function(t){return i("q-expansion-item",{key:t._id,attrs:{icon:"perm_identity",label:t.fullname}},[i("q-card",[i("q-card-section",[i("q-list",[t.organization?i("q-item",[i("q-item-section",[e._v("Φορέας: "+e._s(t.organization))])],1):e._e(),t.street?i("q-item",[i("q-item-section",[e._v("Διεύθυνση: "+e._s(t.street)+" "+e._s(t.streetNumber)+", TK "+e._s(t.postalCode)+", "+e._s(t.area)+" "+e._s(t.city))])],1):e._e(),t.prefecture?i("q-item",[i("q-item-section",[e._v(e._s(t.prefecture)+" "+e._s(t.region)+", "+e._s(t.country))])],1):e._e(),t.website?i("q-item",[i("q-item-section",[e._v("Ιστοσελίδα: "+e._s(t.website))])],1):e._e(),t.email?i("q-item",[i("q-item-section",[e._v("email: "+e._s(t.email))])],1):e._e(),t.phone?i("q-item",[i("q-item-section",[e._v("Τηλέφωνο: "+e._s(t.phone)+", Fax: "+e._s(t.fax))])],1):e._e(),t.department?i("q-item",[i("q-item-section",[e._v("Τμήμα: "+e._s(t.department)+", Θέση: "+e._s(t.position))])],1):e._e()],1)],1)],1)],1)})),1)],1),i("div",{staticClass:"text-body1"},[e._v("Παραλήπτης/ες:\n        "),i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},e._l(JSON.parse(e.document.receivers),(function(t){return i("q-expansion-item",{key:t._id,attrs:{icon:"perm_identity",label:t.fullname}},[i("q-card",[i("q-card-section",[i("q-list",[t.organization?i("q-item",[i("q-item-section",[e._v("Φορέας: "+e._s(t.organization))])],1):e._e(),t.street?i("q-item",[i("q-item-section",[e._v("Διεύθυνση: "+e._s(t.street)+" "+e._s(t.streetNumber)+", TK "+e._s(t.postalCode)+", "+e._s(t.area)+" "+e._s(t.city))])],1):e._e(),t.prefecture?i("q-item",[i("q-item-section",[e._v(e._s(t.prefecture)+" "+e._s(t.region)+", "+e._s(t.country))])],1):e._e(),t.website?i("q-item",[i("q-item-section",[e._v("Ιστοσελίδα: "+e._s(t.website))])],1):e._e(),t.email?i("q-item",[i("q-item-section",[e._v("email: "+e._s(t.email))])],1):e._e(),t.phone?i("q-item",[i("q-item-section",[e._v("Τηλέφωνο: "+e._s(t.phone)+", Fax: "+e._s(t.fax))])],1):e._e(),t.department?i("q-item",[i("q-item-section",[e._v("Τμήμα: "+e._s(t.department)+", Θέση: "+e._s(t.position))])],1):e._e()],1)],1)],1)],1)})),1)],1),i("div",{staticClass:"q-ma-md"}),i("q-card",{staticClass:"q-pa-md"},[i("div",{staticClass:"text-h6"},[e._v("Λεπτομέρειες εγγράφου")]),i("q-separator"),i("div",{staticClass:"text-body1"},[e._v("Ημερομηνία εγγράφου: "+e._s(e.formatDate(e.document.date)))]),i("div",{staticClass:"text-body1"},[e._v("Ημερομηνία καταχώρησης: "+e._s(e.formatDate(e.document.timestamp)))]),i("div",{staticClass:"text-body1"},[e._v("Αρχεία: "+e._s(JSON.parse(e.document.files).length))]),i("q-list",{attrs:{bordered:"",separator:""}},e._l(JSON.parse(e.document.files),(function(t){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t._id,attrs:{clickable:""},on:{click:function(i){return e.showFile(t)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{color:"primary",name:"description"}})],1),i("q-item-section",[e._v(e._s(t.filename))])],1)})),1)],1)],1):e._e()])},n=[],a=i("bd4c"),s=i("1fee"),o={name:"DocumentViewer",data(){return{show:!0}},apollo:{document:{query:s["b"].getDocument,variables(){return{_id:this.$route.params.id}},error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},computed:{currentRouteName(){return this.$route.params.id}},methods:{formatDate(e){return a["b"].formatDate(e,"DD-MM-YYYY")},showFile(e){if("image"===e.contentType.split("/")[0])this.$router.push(`documentFileViewerImg/${e._id}`);else if("application/pdf"===e.contentType)this.$router.push(`documentFileViewerPdf/${e._id}`);else{const t=e._id;this.$apollo.query({query:s["b"].getFile,variables:{_id:t}}).then((t=>{const i=document.createElement("a");i.setAttribute("href","data:application/octet-stream;base64,"+t.data.downloadFile),i.setAttribute("download",e.filename),i.click()}))}}}},d=o,c=i("2877"),m=i("9989"),u=i("cf57"),l=i("1c1c"),p=i("3b73"),$=i("f09f"),_=i("a370"),g=i("66e5"),f=i("4074"),S=i("eb85"),y=i("0016"),D=i("714f"),q=i("eebe"),v=i.n(q),b=Object(c["a"])(d,r,n,!1,null,null,null);t["default"]=b.exports;v()(b,"components",{QPage:m["a"],QSpinnerGears:u["a"],QList:l["a"],QExpansionItem:p["a"],QCard:$["a"],QCardSection:_["a"],QItem:g["a"],QItemSection:f["a"],QSeparator:S["a"],QIcon:y["a"]}),v()(b,"directives",{Ripple:D["a"]})},ffd6:function(e,t){}}]);