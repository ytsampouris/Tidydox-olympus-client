(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1fee":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r={};n.r(r),n.d(r,"getDocuments",(function(){return D})),n.d(r,"getDocument",(function(){return y})),n.d(r,"getFile",(function(){return h})),n.d(r,"getUsers",(function(){return w})),n.d(r,"getContacts",(function(){return b})),n.d(r,"getDepartments",(function(){return I})),n.d(r,"getUsersByDepartment",(function(){return v})),n.d(r,"searchDocuments",(function(){return C})),n.d(r,"searchDocumentsByDate",(function(){return x}));var i={};n.r(i),n.d(i,"createUser",(function(){return L})),n.d(i,"updateUser",(function(){return O})),n.d(i,"deleteUser",(function(){return Q})),n.d(i,"createDocument",(function(){return V})),n.d(i,"deleteDocument",(function(){return H})),n.d(i,"createContact",(function(){return K})),n.d(i,"updateContact",(function(){return P})),n.d(i,"deleteContact",(function(){return W})),n.d(i,"createDepartment",(function(){return X})),n.d(i,"updateDepartment",(function(){return Y})),n.d(i,"updateDepartmentManager",(function(){return Z})),n.d(i,"deleteDepartment",(function(){return ee})),n.d(i,"singleUpload",(function(){return te})),n.d(i,"signIn",(function(){return ne}));var a=n("9530"),o=n.n(a);let s,d=e=>e;o()(s||(s=d`
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
`));let u,c,m,l,p,$,g,f,S,_=e=>e;const D=o()(u||(u=_`
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
`)),y=o()(c||(c=_`
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
`)),h=o()(m||(m=_`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),w=o()(l||(l=_`
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
`)),b=o()(p||(p=_`
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
`)),I=o()($||($=_`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),v=o()(g||(g=_`
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
`)),C=o()(f||(f=_`
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
`)),x=o()(S||(S=_`
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
`));n("ffd6");let T,U,q,N,z,F,R,B,k,M,J,j,A,E,G=e=>e;const L=o()(T||(T=G`
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
`)),O=o()(U||(U=G`
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
`)),Q=o()(q||(q=G`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),V=o()(N||(N=G`
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
`)),H=o()(z||(z=G`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),K=o()(F||(F=G`
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
`)),P=o()(R||(R=G`
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
`)),W=o()(B||(B=G`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),X=o()(k||(k=G`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),Y=o()(M||(M=G`
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
`)),Z=o()(J||(J=G`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),ee=o()(j||(j=G`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),te=o()(A||(A=G`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ne=o()(E||(E=G`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`))},"8e96":function(e,t,n){"use strict";n("ddff")},c07b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container q-pa-xs"},[e.$apollo.loading?n("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute",top:"40%"}},[n("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),n("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1):e._e(),n("img",{attrs:{src:"data:image/png;base64, "+e.downloadFile,alt:"Document"}})])},i=[],a=n("1fee"),o={name:"documentFileViewerImg",apollo:{downloadFile:{query:a["b"].getFile,variables(){return{_id:this.$route.params.id}},error(e){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},data(){return{show:!0}},computed:{currentRouteName(){return this.$route.params.id}}},s=o,d=(n("8e96"),n("2877")),u=n("cf57"),c=n("eebe"),m=n.n(c),l=Object(d["a"])(s,r,i,!1,null,null,null);t["default"]=l.exports;m()(l,"components",{QSpinnerGears:u["a"]})},ddff:function(e,t,n){},ffd6:function(e,t){}}]);