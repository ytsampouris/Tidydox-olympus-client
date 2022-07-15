(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"013f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("h5",{staticClass:"text-center"},[e._v("Είσοδος στο σύστημα")]),n("q-form",{ref:"emailAuthenticationForm",staticClass:"authentication q-gutter-y-md",on:{submit:e.signIn}},[n("q-input",{attrs:{name:"email",outlined:"outlined","lazy-rules":"lazy-rules",autocomplete:"email",color:"primary","data-cy":"email",label:"EMAIL",type:"email",rules:[function(e){return!!e||"*Field is required"},function(e){return e.includes("@")&&e.includes(".")||"*Please Provide a valid email"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{ref:"fldPasswordChange",attrs:{"lazy-rules":"lazy-rules",outlined:"outlined",autocomplete:"current-password new-password",color:"primary","data-cy":"password",label:"PASSWORD",rules:[function(e){return!!e||"*Field is required"}],type:e.isPwd?"password":"text"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.onSubmit(),t.target.blur()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("q-btn",{staticClass:"full-width q-mt-md",attrs:{color:"primary","data-cy":"submit",type:"submit",label:"Είσοδος"}})],1)],1)},i=[],a=n("1fee"),s=n("cf57"),o={name:"Login",data(){return{email:null,password:null,isPwd:!0}},methods:{signIn(){this.$q.loading.show({message:"Είσοδος...",backgroundColor:"grey",spinner:s["a"],customClass:"loader"});const e=this.email,t=this.password;this.$apollo.mutate({mutation:a["a"].signIn,variables:{email:e,password:t},update:(e,{data:{signIn:t}})=>{localStorage.setItem("token",t.token),localStorage.setItem("user",JSON.stringify(t)),this.$router.push({path:"/user"}),this.$q.loading.hide()}}).catch((n=>{this.$q.loading.hide(),localStorage.removeItem("token"),localStorage.removeItem("user"),this.$apollo.mutate({mutation:a["a"].signIn,variables:{email:e,password:t},update:(e,{data:{signIn:t}})=>{localStorage.setItem("token",t.token),localStorage.setItem("user",JSON.stringify(t)),this.$router.push({path:"/user"})}}).catch((e=>{this.$q.notify({message:e.message,color:"negative",timeout:4e3}),localStorage.setItem("token",null),localStorage.setItem("user",null),this.$router.push({path:"/login"}),this.$q.loading.hide()}))}))}}},d=o,u=n("2877"),m=n("9989"),l=n("0378"),c=n("27f9"),p=n("0016"),g=n("9c40"),$=n("eebe"),f=n.n($),S=Object(u["a"])(d,r,i,!1,null,null,null);t["default"]=S.exports;f()(S,"components",{QPage:m["a"],QForm:l["a"],QInput:c["a"],QIcon:p["a"],QBtn:g["a"]})},"1fee":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r={};n.r(r),n.d(r,"getDocuments",(function(){return D})),n.d(r,"getDocument",(function(){return h})),n.d(r,"getFile",(function(){return w})),n.d(r,"getUsers",(function(){return b})),n.d(r,"getContacts",(function(){return I})),n.d(r,"getDepartments",(function(){return v})),n.d(r,"getUsersByDepartment",(function(){return x})),n.d(r,"searchDocuments",(function(){return q})),n.d(r,"searchDocumentsByDate",(function(){return C})),n.d(r,"getTags",(function(){return k}));var i={};n.r(i),n.d(i,"createUser",(function(){return W})),n.d(i,"updateUser",(function(){return G})),n.d(i,"deleteUser",(function(){return H})),n.d(i,"createDocument",(function(){return K})),n.d(i,"deleteDocument",(function(){return V})),n.d(i,"createContact",(function(){return X})),n.d(i,"updateContact",(function(){return Y})),n.d(i,"deleteContact",(function(){return Z})),n.d(i,"createDepartment",(function(){return ee})),n.d(i,"updateDepartment",(function(){return te})),n.d(i,"updateDepartmentManager",(function(){return ne})),n.d(i,"deleteDepartment",(function(){return re})),n.d(i,"singleUpload",(function(){return ie})),n.d(i,"signIn",(function(){return ae})),n.d(i,"createTag",(function(){return se}));var a=n("9530"),s=n.n(a);let o,d=e=>e;s()(o||(o=d`
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
`));let u,m,l,c,p,g,$,f,S,y,_=e=>e;const D=s()(u||(u=_`
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
`)),h=s()(m||(m=_`
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
`)),w=s()(l||(l=_`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),b=s()(c||(c=_`
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
`)),I=s()(p||(p=_`
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
`)),x=s()($||($=_`
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
`)),q=s()(f||(f=_`
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
`)),C=s()(S||(S=_`
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
`)),k=s()(y||(y=_`
  query getTags {
    tags {
      _id
      text
    }
  }
`));n("ffd6");let T,z,N,U,F,P,R,B,O,Q,A,J,M,E,L,j=e=>e;const W=s()(T||(T=j`
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
`)),G=s()(z||(z=j`
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
`)),H=s()(N||(N=j`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),K=s()(U||(U=j`
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
`)),V=s()(F||(F=j`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),X=s()(P||(P=j`
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
`)),Y=s()(R||(R=j`
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
`)),Z=s()(B||(B=j`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),ee=s()(O||(O=j`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),te=s()(Q||(Q=j`
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
`)),ne=s()(A||(A=j`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),re=s()(J||(J=j`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),ie=s()(M||(M=j`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ae=s()(E||(E=j`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),se=s()(L||(L=j`
  mutation($text: String) {
    createTag(text: $text) {
      _id
      text
    }
  }
`))},ffd6:function(e,t){}}]);