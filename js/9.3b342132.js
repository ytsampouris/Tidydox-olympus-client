(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"013f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("h5",{staticClass:"text-center"},[e._v("Είσοδος στο σύστημα")]),n("q-form",{ref:"emailAuthenticationForm",staticClass:"authentication q-gutter-y-md",on:{submit:e.signIn}},[n("q-input",{attrs:{name:"email",outlined:"outlined","lazy-rules":"lazy-rules",autocomplete:"email",color:"primary","data-cy":"email",label:"EMAIL",type:"email",rules:[function(e){return!!e||"*Field is required"},function(e){return e.includes("@")&&e.includes(".")||"*Please Provide a valid email"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{ref:"fldPasswordChange",attrs:{"lazy-rules":"lazy-rules",outlined:"outlined",autocomplete:"current-password new-password",color:"primary","data-cy":"password",label:"PASSWORD",rules:[function(e){return!!e||"*Field is required"}],type:e.isPwd?"password":"text"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.onSubmit(),t.target.blur()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("q-btn",{staticClass:"full-width q-mt-md",attrs:{color:"primary","data-cy":"submit",type:"submit",label:"Είσοδος"}})],1)],1)},i=[],a=n("1fee"),o=n("cf57"),s={name:"Login",data(){return{email:null,password:null,isPwd:!0}},methods:{signIn(){this.$q.loading.show({message:"Είσοδος...",backgroundColor:"grey",spinner:o["a"],customClass:"loader"});const e=this.email,t=this.password;this.$apollo.mutate({mutation:a["a"].signIn,variables:{email:e,password:t},update:(e,{data:{signIn:t}})=>{localStorage.setItem("token",t.token),localStorage.setItem("user",JSON.stringify(t)),this.$router.push({path:"/user"}),this.$q.loading.hide()}}).catch((n=>{this.$q.loading.hide(),localStorage.removeItem("token"),localStorage.removeItem("user"),this.$apollo.mutate({mutation:a["a"].signIn,variables:{email:e,password:t},update:(e,{data:{signIn:t}})=>{localStorage.setItem("token",t.token),localStorage.setItem("user",JSON.stringify(t)),this.$router.push({path:"/user"})}}).catch((e=>{this.$q.notify({message:e.message,color:"negative",timeout:4e3}),localStorage.setItem("token",null),localStorage.setItem("user",null),this.$router.push({path:"/login"}),this.$q.loading.hide()}))}))}}},d=s,u=n("2877"),l=n("9989"),c=n("0378"),m=n("27f9"),p=n("0016"),$=n("9c40"),g=n("eebe"),f=n.n(g),S=Object(u["a"])(d,r,i,!1,null,null,null);t["default"]=S.exports;f()(S,"components",{QPage:l["a"],QForm:c["a"],QInput:m["a"],QIcon:p["a"],QBtn:$["a"]})},"1fee":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r={};n.r(r),n.d(r,"getDocuments",(function(){return _})),n.d(r,"getDocument",(function(){return D})),n.d(r,"getFile",(function(){return h})),n.d(r,"getUsers",(function(){return w})),n.d(r,"getContacts",(function(){return b})),n.d(r,"getDepartments",(function(){return I})),n.d(r,"getUsersByDepartment",(function(){return v})),n.d(r,"searchDocuments",(function(){return C})),n.d(r,"searchDocumentsByDate",(function(){return q}));var i={};n.r(i),n.d(i,"createUser",(function(){return E})),n.d(i,"updateUser",(function(){return L})),n.d(i,"deleteUser",(function(){return j})),n.d(i,"createDocument",(function(){return W})),n.d(i,"deleteDocument",(function(){return G})),n.d(i,"createContact",(function(){return H})),n.d(i,"updateContact",(function(){return K})),n.d(i,"deleteContact",(function(){return V})),n.d(i,"createDepartment",(function(){return X})),n.d(i,"updateDepartment",(function(){return Y})),n.d(i,"updateDepartmentManager",(function(){return Z})),n.d(i,"deleteDepartment",(function(){return ee})),n.d(i,"singleUpload",(function(){return te})),n.d(i,"signIn",(function(){return ne}));var a=n("9530"),o=n.n(a);let s,d=e=>e;o()(s||(s=d`
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
`));let u,l,c,m,p,$,g,f,S,y=e=>e;const _=o()(u||(u=y`
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
`)),D=o()(l||(l=y`
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
`)),h=o()(c||(c=y`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),w=o()(m||(m=y`
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
`)),b=o()(p||(p=y`
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
`)),I=o()($||($=y`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),v=o()(g||(g=y`
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
`)),C=o()(f||(f=y`
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
`)),q=o()(S||(S=y`
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
`));n("ffd6");let x,k,T,z,N,U,F,P,R,B,O,Q,A,J,M=e=>e;const E=o()(x||(x=M`
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
`)),L=o()(k||(k=M`
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
`)),j=o()(T||(T=M`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),W=o()(z||(z=M`
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
`)),G=o()(N||(N=M`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),H=o()(U||(U=M`
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
`)),K=o()(F||(F=M`
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
`)),V=o()(P||(P=M`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),X=o()(R||(R=M`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),Y=o()(B||(B=M`
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
`)),Z=o()(O||(O=M`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),ee=o()(Q||(Q=M`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),te=o()(A||(A=M`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ne=o()(J||(J=M`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`))},ffd6:function(e,t){}}]);