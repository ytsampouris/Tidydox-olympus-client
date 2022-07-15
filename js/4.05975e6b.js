(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1fee":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r={};n.r(r),n.d(r,"getDocuments",(function(){return y})),n.d(r,"getDocument",(function(){return b})),n.d(r,"getFile",(function(){return h})),n.d(r,"getUsers",(function(){return w})),n.d(r,"getContacts",(function(){return I})),n.d(r,"getDepartments",(function(){return v})),n.d(r,"getUsersByDepartment",(function(){return x})),n.d(r,"searchDocuments",(function(){return C})),n.d(r,"searchDocumentsByDate",(function(){return T})),n.d(r,"getTags",(function(){return q}));var i={};n.r(i),n.d(i,"createUser",(function(){return Q})),n.d(i,"updateUser",(function(){return V})),n.d(i,"deleteUser",(function(){return H})),n.d(i,"createDocument",(function(){return K})),n.d(i,"deleteDocument",(function(){return W})),n.d(i,"createContact",(function(){return X})),n.d(i,"updateContact",(function(){return Y})),n.d(i,"deleteContact",(function(){return Z})),n.d(i,"createDepartment",(function(){return ee})),n.d(i,"updateDepartment",(function(){return te})),n.d(i,"updateDepartmentManager",(function(){return ne})),n.d(i,"deleteDepartment",(function(){return re})),n.d(i,"singleUpload",(function(){return ie})),n.d(i,"signIn",(function(){return ae})),n.d(i,"createTag",(function(){return oe}));var a=n("9530"),o=n.n(a);let s,d=e=>e;o()(s||(s=d`
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
`));let u,c,m,l,p,$,g,f,S,_,D=e=>e;const y=o()(u||(u=D`
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
`)),b=o()(c||(c=D`
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
`)),h=o()(m||(m=D`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),w=o()(l||(l=D`
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
`)),I=o()(p||(p=D`
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
`)),v=o()($||($=D`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),x=o()(g||(g=D`
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
`)),C=o()(f||(f=D`
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
`)),T=o()(S||(S=D`
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
`)),q=o()(_||(_=D`
  query getTags {
    tags {
      _id
      text
    }
  }
`));n("ffd6");let U,N,z,F,R,B,k,M,J,j,A,E,G,L,O,P=e=>e;const Q=o()(U||(U=P`
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
`)),V=o()(N||(N=P`
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
`)),H=o()(z||(z=P`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),K=o()(F||(F=P`
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
`)),W=o()(R||(R=P`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),X=o()(B||(B=P`
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
`)),Y=o()(k||(k=P`
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
`)),Z=o()(M||(M=P`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),ee=o()(J||(J=P`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),te=o()(j||(j=P`
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
`)),ne=o()(A||(A=P`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),re=o()(E||(E=P`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),ie=o()(G||(G=P`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ae=o()(L||(L=P`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),oe=o()(O||(O=P`
  mutation($text: String) {
    createTag(text: $text) {
      _id
      text
    }
  }
`))},"78f9":function(e,t,n){"use strict";n("bb6b")},"9a80":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container q-pa-xs"},[e.$apollo.loading?n("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute",top:"40%"}},[n("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),n("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1):e._e(),n("iframe",{attrs:{src:"data:application/pdf;base64, "+e.downloadFile}})])},i=[],a=n("1fee"),o={name:"documentFileViewerPdf",apollo:{downloadFile:{query:a["b"].getFile,variables(){return{_id:this.$route.params.id}},error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},data(){return{show:!0}},computed:{currentRouteName(){return this.$route.params.id}}},s=o,d=(n("78f9"),n("2877")),u=n("cf57"),c=n("eebe"),m=n.n(c),l=Object(d["a"])(s,r,i,!1,null,null,null);t["default"]=l.exports;m()(l,"components",{QSpinnerGears:u["a"]})},bb6b:function(e,t,n){},ffd6:function(e,t){}}]);