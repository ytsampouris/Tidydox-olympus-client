(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1fee":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i}));var n={};a.r(n),a.d(n,"getDocuments",(function(){return y})),a.d(n,"getDocument",(function(){return v})),a.d(n,"getFile",(function(){return _})),a.d(n,"getUsers",(function(){return q})),a.d(n,"getContacts",(function(){return S})),a.d(n,"getDepartments",(function(){return D})),a.d(n,"getUsersByDepartment",(function(){return E})),a.d(n,"searchDocuments",(function(){return x})),a.d(n,"searchDocumentsByDate",(function(){return C})),a.d(n,"getTags",(function(){return w}));var i={};a.r(i),a.d(i,"createUser",(function(){return j})),a.d(i,"updateUser",(function(){return G})),a.d(i,"deleteUser",(function(){return H})),a.d(i,"createDocument",(function(){return V})),a.d(i,"deleteDocument",(function(){return K})),a.d(i,"createContact",(function(){return W})),a.d(i,"updateContact",(function(){return X})),a.d(i,"deleteContact",(function(){return Z})),a.d(i,"createDepartment",(function(){return tt})),a.d(i,"updateDepartment",(function(){return et})),a.d(i,"updateDepartmentManager",(function(){return at})),a.d(i,"deleteDepartment",(function(){return nt})),a.d(i,"singleUpload",(function(){return it})),a.d(i,"signIn",(function(){return ot})),a.d(i,"createTag",(function(){return rt}));var o=a("9530"),r=a.n(o);let s,l=t=>t;r()(s||(s=l`
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
`));let c,d,u,p,m,g,f,$,b,h,T=t=>t;const y=r()(c||(c=T`
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
`)),v=r()(d||(d=T`
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
`)),_=r()(u||(u=T`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),q=r()(p||(p=T`
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
`)),S=r()(m||(m=T`
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
`)),D=r()(g||(g=T`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),E=r()(f||(f=T`
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
`)),x=r()($||($=T`
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
`)),C=r()(b||(b=T`
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
`)),w=r()(h||(h=T`
  query getTags {
    tags {
      _id
      text
    }
  }
`));a("ffd6");let k,I,N,Q,z,U,P,F,Y,M,R,B,O,A,J,L=t=>t;const j=r()(k||(k=L`
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
`)),G=r()(I||(I=L`
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
`)),H=r()(N||(N=L`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),V=r()(Q||(Q=L`
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
`)),K=r()(z||(z=L`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),W=r()(U||(U=L`
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
`)),X=r()(P||(P=L`
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
`)),Z=r()(F||(F=L`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),tt=r()(Y||(Y=L`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),et=r()(M||(M=L`
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
`)),at=r()(R||(R=L`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),nt=r()(B||(B=L`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),it=r()(O||(O=L`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),ot=r()(A||(A=L`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),rt=r()(J||(J=L`
  mutation($text: String) {
    createTag(text: $text) {
      _id
      text
    }
  }
`))},"78f7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"q-pa-md"},[a("q-stepper",{ref:"stepper",attrs:{color:"primary",animated:""},scopedSlots:t._u([{key:"navigation",fn:function(){return[a("q-stepper-navigation",[1===t.step&&t.transactionType?a("q-btn",{attrs:{color:"primary",label:"Εισαγωγή εγγράφου"},on:{click:function(e){t.saveDocument(),t.$refs.stepper.next()}}}):t._e(),2===t.step?a("q-btn",{attrs:{color:"primary",label:"Αποθήκευση συνημμένων"},on:{click:function(e){return t.uploadFiles()}}}):t._e(),2===t.step?a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Πίσω"},on:{click:function(e){return t.$refs.stepper.previous()}}}):t._e()],1)]},proxy:!0}]),model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("q-step",{attrs:{name:1,title:"Εισαγωγή στοιχείων εγγράφου",icon:"list",done:t.step>1}},[a("q-select",{attrs:{label:"Τύπος πράξης","stack-label":"",dense:"",options:t.transactionTypes,"transition-show":"scale","transition-hide":"scale"},model:{value:t.transactionType,callback:function(e){t.transactionType=e},expression:"transactionType"}}),t.transactionType?a("div",[a("q-input",{attrs:{label:"Θέμα"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("q-input",{attrs:{label:"Περιγραφή"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),"Έκδοση"===t.transactionType||"Κοινοποίηση"===t.transactionType||"Διαβίβαση"===t.transactionType?a("div",[a("q-select",{attrs:{label:"Από","option-value":"_id","option-label":function(t){return""+t.fullname},options:t.users,"transition-show":"scale","transition-hide":"scale","use-chips":"","stack-label":"",dense:"","emit-value":"","map-options":""},model:{value:t.sender,callback:function(e){t.sender=e},expression:"sender"}}),a("q-select",{attrs:{label:"Προς","option-value":"_id","option-label":function(t){return t.name+" "+t.middlename+" "+t.surname},options:t.contacts,"transition-show":"scale","transition-hide":"scale",multiple:"","use-chips":"","stack-label":"",dense:"","emit-value":"","map-options":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"contacts"},on:{click:function(e){e.stopPropagation(),t.editContactDialog=!0}}})]},proxy:!0}],null,!1,3461902496),model:{value:t.receivers,callback:function(e){t.receivers=e},expression:"receivers"}})],1):t._e(),"Παραλαβή"===t.transactionType?a("div",[a("q-select",{attrs:{label:"Από","option-value":"_id","option-label":function(t){return t.name+" "+t.middlename+" "+t.surname},options:t.contacts,"transition-show":"scale","transition-hide":"scale","use-chips":"","stack-label":"",dense:"","emit-value":"","map-options":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"contacts"},on:{click:function(e){e.stopPropagation(),t.editContactDialog=!0}}})]},proxy:!0}],null,!1,3461902496),model:{value:t.receivers,callback:function(e){t.receivers=e},expression:"receivers"}}),a("q-select",{attrs:{label:"Προς","option-value":"_id","option-label":function(t){return""+t.fullname},options:t.users,"transition-show":"scale","transition-hide":"scale",multiple:"","use-chips":"","stack-label":"",dense:"","emit-value":"","map-options":""},model:{value:t.sender,callback:function(e){t.sender=e},expression:"sender"}})],1):t._e(),a("div",{staticClass:"q-pa-xs"},[a("q-input",{attrs:{filled:"",mask:"##/##/####",label:"Ημερομηνία εγγράφου"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{subtitle:"Ημερομηνία πράξης",landscape:"","today-btn":"",mask:"DD/MM/YYYY"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Κλείσιμο",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}],null,!1,3630630250),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("div",[t._v(" Επιλογή κατηγορίας\n          "),a("q-select",{attrs:{label:"Κατηγορία","stack-label":"",multiple:"","use-chips":"",dense:"",options:t.tags,"option-value":"_id","option-label":"text","transition-show":"scale","transition-hide":"scale"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"label"},on:{click:function(e){e.stopPropagation(),t.createTagDialog=!0}}})]},proxy:!0}],null,!1,3902979391),model:{value:t.documentTags,callback:function(e){t.documentTags=e},expression:"documentTags"}})],1)],1):t._e()],1),a("q-step",{attrs:{name:2,title:"Επισύναψη αρχείων",icon:"settings",done:t.step>2}},[a("q-file",{attrs:{label:"Επιλογή αρχείων",outlined:"","use-chips":"",multiple:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}),1===t.step&&t.files&&t.files.length>0?a("q-btn",{attrs:{color:"primary",label:"Επισύναψη αρχείων"},on:{click:function(e){return t.uploadFiles()}}}):t._e()],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.createTagDialog,callback:function(e){t.createTagDialog=e},expression:"createTagDialog"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Προσθήκη κατηγορίας")])]),a("q-card-section",[a("q-input",{attrs:{label:"Νέα κατηγορία"},model:{value:t.newTag,callback:function(e){t.newTag=e},expression:"newTag"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Αποθήκευση"},on:{click:function(e){return t.createTag()}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.editContactDialog,callback:function(e){t.editContactDialog=e},expression:"editContactDialog"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Επεξεργασία επαφής")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-select",{attrs:{label:"Επαφή","option-label":function(t){return t.name+" "+t.middlename+" "+t.surname},options:t.contacts,"transition-show":"scale","transition-hide":"scale","stack-label":"",dense:"","emit-value":"","map-options":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"add"},on:{click:function(e){return e.stopPropagation(),t.addContact()}}})]},proxy:!0}]),model:{value:t.contactToEdit,callback:function(e){t.contactToEdit=e},expression:"contactToEdit"}})],1),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{label:"Όνομα"},model:{value:t.contactToEdit.name,callback:function(e){t.$set(t.contactToEdit,"name",e)},expression:"contactToEdit.name"}}),a("q-input",{attrs:{label:"Μεσαίο όνομα"},model:{value:t.contactToEdit.middlename,callback:function(e){t.$set(t.contactToEdit,"middlename",e)},expression:"contactToEdit.middlename"}}),a("q-input",{attrs:{label:"Επώνυμο"},model:{value:t.contactToEdit.surname,callback:function(e){t.$set(t.contactToEdit,"surname",e)},expression:"contactToEdit.surname"}}),a("q-input",{attrs:{label:"Φορέας"},model:{value:t.contactToEdit.organization,callback:function(e){t.$set(t.contactToEdit,"organization",e)},expression:"contactToEdit.organization"}}),a("q-input",{attrs:{label:"Οδός"},model:{value:t.contactToEdit.street,callback:function(e){t.$set(t.contactToEdit,"street",e)},expression:"contactToEdit.street"}}),a("q-input",{attrs:{label:"Αριθμός"},model:{value:t.contactToEdit.streetNumber,callback:function(e){t.$set(t.contactToEdit,"streetNumber",e)},expression:"contactToEdit.streetNumber"}}),a("q-input",{attrs:{label:"Τ.Κ."},model:{value:t.contactToEdit.postalCode,callback:function(e){t.$set(t.contactToEdit,"postalCode",e)},expression:"contactToEdit.postalCode"}}),a("q-input",{attrs:{label:"Περιοχή"},model:{value:t.contactToEdit.area,callback:function(e){t.$set(t.contactToEdit,"area",e)},expression:"contactToEdit.area"}}),a("q-input",{attrs:{label:"Πόλη"},model:{value:t.contactToEdit.city,callback:function(e){t.$set(t.contactToEdit,"city",e)},expression:"contactToEdit.city"}}),a("q-input",{attrs:{label:"Χώρα"},model:{value:t.contactToEdit.country,callback:function(e){t.$set(t.contactToEdit,"country",e)},expression:"contactToEdit.country"}}),a("q-input",{attrs:{label:"Περιφέρεια"},model:{value:t.contactToEdit.region,callback:function(e){t.$set(t.contactToEdit,"region",e)},expression:"contactToEdit.region"}}),a("q-input",{attrs:{label:"Νομός"},model:{value:t.contactToEdit.prefecture,callback:function(e){t.$set(t.contactToEdit,"prefecture",e)},expression:"contactToEdit.prefecture"}}),a("q-input",{attrs:{label:"Θέση"},model:{value:t.contactToEdit.position,callback:function(e){t.$set(t.contactToEdit,"position",e)},expression:"contactToEdit.position"}}),a("q-input",{attrs:{label:"Τμήμα"},model:{value:t.contactToEdit.department,callback:function(e){t.$set(t.contactToEdit,"department",e)},expression:"contactToEdit.department"}}),a("q-input",{attrs:{label:"Τηλέφωνο"},model:{value:t.contactToEdit.phone,callback:function(e){t.$set(t.contactToEdit,"phone",e)},expression:"contactToEdit.phone"}}),a("q-input",{attrs:{label:"Φαξ"},model:{value:t.contactToEdit.fax,callback:function(e){t.$set(t.contactToEdit,"fax",e)},expression:"contactToEdit.fax"}}),a("q-input",{attrs:{label:"Ηλ. Ταχυδρομείο"},model:{value:t.contactToEdit.email,callback:function(e){t.$set(t.contactToEdit,"email",e)},expression:"contactToEdit.email"}}),a("q-input",{attrs:{label:"Ιστοσελίδα"},model:{value:t.contactToEdit.website,callback:function(e){t.$set(t.contactToEdit,"website",e)},expression:"contactToEdit.website"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Αποθήκευση"},on:{click:function(e){return t.saveContact()}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",outline:"",label:"Διαγραφή",color:"red"},on:{click:function(e){return t.deleteContact(t.contactToEdit._id)}}})],1)],1)],1),a("q-btn",{attrs:{color:"red","icon-right":"fab fa-youtube",label:"Οδηγίες χρήσης",type:"a",target:"new_tab",href:"https://www.youtube.com/playlist?list=PLwQ-2nYs008YGHCs05QonVP1cwicu9sra"}})],1)},i=[],o=(a("e01a"),a("ac1f"),a("1fee")),r=a("cf57"),s=a("bd4c"),l={name:"NewDocument",data(){return{step:1,done1:!1,done2:!1,done3:!1,title:null,description:null,sender:null,receivers:null,receiversOptions:null,date:s["b"].formatDate(Date.now(),"DD/MM/YYYY"),documentTags:null,files:null,doc_id:null,transactionTypes:["Έκδοση","Παραλαβή","Κοινοποίηση","Διαβίβαση"],transactionType:null,editContactDialog:!1,createTagDialog:!1,newTag:null,contactToEdit:{_id:null,name:null,middlename:null,surname:null,organization:null,street:null,streetNumber:null,postalCode:null,area:null,city:null,country:null,region:null,prefecture:null,position:null,department:null,phone:null,fax:null,email:null,website:null}}},apollo:{users:{query:o["b"].getUsers,error(t){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}},contacts:{query:o["b"].getContacts,error(t){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}},tags:{query:o["b"].getTags,error(t){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},methods:{uploadFiles(){this.$q.loading.show({message:"Ανέβασμα αρχείων",backgroundColor:"grey",spinner:r["a"],customClass:"loader"});const t=this.doc_id;this.timer=setTimeout((()=>{this.timer=void 0,this.files.forEach((e=>{try{this.$apollo.mutate({mutation:o["a"].singleUpload,variables:{doc_id:t,file:e},update:(t,{data:{singleUploadLocal:e}})=>{console.log(e)}})}catch(a){this.$q.notify({message:`An error as occured: ${a}`,color:"negative"})}finally{this.$q.loading.hide(),this.$refs.stepper.goTo(1)}}))}),1e3)},saveDocument(){this.$q.loading.show({message:"Ολοκλήρωση αποθήκευσης",backgroundColor:"grey",spinner:r["a"],customClass:"loader"});const t=this.title,e=this.description;let a=null;a="Παραλαβή"!==this.transactionType?this.sender:this.sender[0];const n=this.receivers,i=this.date.split("/"),s=new Date(+i[2],i[1]-1,+i[0]).toISOString(),l=this.transactionType,c=JSON.stringify(this.documentTags);this.$apollo.mutate({mutation:o["a"].createDocument,variables:{title:t,description:e,sender:a,receivers:n,date:s,files:[],transactionType:l,tags:c},update:(t,{data:{createDocument:e}})=>{this.doc_id=e._id}}).then((()=>{this.title=null,this.description=null,this.sender=null,this.receivers=null,this.date=null,this.files=null,this.fileIds=[],this.transactionType=null,this.$q.loading.hide()})),this.step=1,this.documentTags=null},addContact(){this.contactToEdit={_id:null,name:null,middlename:null,surname:null,organization:null,street:null,streetNumber:null,postalCode:null,area:null,city:null,country:null,region:null,prefecture:null,position:null,department:null,phone:null,fax:null,email:null,website:null}},saveContact(){const t=this.contactToEdit._id,e=this.contactToEdit.name,a=this.contactToEdit.middlename,n=this.contactToEdit.surname,i=this.contactToEdit.organization,r=this.contactToEdit.street,s=this.contactToEdit.streetNumber,l=this.contactToEdit.postalCode,c=this.contactToEdit.area,d=this.contactToEdit.city,u=this.contactToEdit.country,p=this.contactToEdit.region,m=this.contactToEdit.prefecture,g=this.contactToEdit.position,f=this.contactToEdit.department,$=this.contactToEdit.phone,b=this.contactToEdit.fax,h=this.contactToEdit.email,T=this.contactToEdit.website;this.contactToEdit._id?this.$apollo.mutate({mutation:o["a"].updateContact,variables:{_id:t,name:e,middlename:a,surname:n,organization:i,street:r,streetNumber:s,postalCode:l,area:c,city:d,country:u,region:p,prefecture:m,position:g,department:f,phone:$,fax:b,email:h,website:T},update:(t,{data:{updateContact:e}})=>{if(e){const e=t.readQuery({query:o["b"].getContacts});t.writeQuery({query:o["b"].getContacts,data:e})}}}):this.$apollo.mutate({mutation:o["a"].createContact,variables:{name:e,middlename:a,surname:n,organization:i,street:r,streetNumber:s,postalCode:l,area:c,city:d,country:u,region:p,prefecture:m,position:g,department:f,phone:$,fax:b,email:h,website:T},update:(t,{data:{createContact:e}})=>{if(e){const a=t.readQuery({query:o["b"].getContacts});t.writeQuery({query:o["b"].getContacts,data:a.contacts.push(e)})}}})},deleteContact(t){this.$apollo.mutate({mutation:o["a"].deleteContact,variables:{_id:t},update:(e,{data:{deleteContact:a}})=>{if(a){const a=e.readQuery({query:o["b"].getContacts});a.contacts=a.contacts.filter((e=>e._id!==t)),e.writeQuery({query:o["b"].getContacts,data:a})}}}),this.addContact()},createTag(){const t=this.newTag;this.$apollo.mutate({mutation:o["a"].createTag,variables:{text:t},update:(t,{data:{createTag:e}})=>{if(console.log(e),e){const a=t.readQuery({query:o["b"].getTags});t.writeQuery({query:o["b"].getTags,data:a.tags.push(e)})}}})}}},c=l,d=a("2877"),u=a("9989"),p=a("f531"),m=a("87fe"),g=a("ddd8"),f=a("27f9"),$=a("0016"),b=a("7cbe"),h=a("52ee"),T=a("9c40"),y=a("7d53"),v=a("b19c"),_=a("24e8"),q=a("f09f"),S=a("a370"),D=a("4b7e"),E=a("7f67"),x=a("eebe"),C=a.n(x),w=Object(d["a"])(c,n,i,!1,null,null,null);e["default"]=w.exports;C()(w,"components",{QPage:u["a"],QStepper:p["a"],QStep:m["a"],QSelect:g["a"],QInput:f["a"],QIcon:$["a"],QPopupProxy:b["a"],QDate:h["a"],QBtn:T["a"],QFile:y["a"],QStepperNavigation:v["a"],QDialog:_["a"],QCard:q["a"],QCardSection:S["a"],QCardActions:D["a"]}),C()(w,"directives",{ClosePopup:E["a"]})},ffd6:function(t,e){}}]);