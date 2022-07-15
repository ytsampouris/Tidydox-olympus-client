(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"1fee":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var a={};n.r(a),n.d(a,"getDocuments",(function(){return y})),n.d(a,"getDocument",(function(){return T})),n.d(a,"getFile",(function(){return v})),n.d(a,"getUsers",(function(){return _})),n.d(a,"getContacts",(function(){return D})),n.d(a,"getDepartments",(function(){return S})),n.d(a,"getUsersByDepartment",(function(){return q})),n.d(a,"searchDocuments",(function(){return E})),n.d(a,"searchDocumentsByDate",(function(){return C}));var i={};n.r(i),n.d(i,"createUser",(function(){return O})),n.d(i,"updateUser",(function(){return j})),n.d(i,"deleteUser",(function(){return J})),n.d(i,"createDocument",(function(){return L})),n.d(i,"deleteDocument",(function(){return G})),n.d(i,"createContact",(function(){return H})),n.d(i,"updateContact",(function(){return K})),n.d(i,"deleteContact",(function(){return V})),n.d(i,"createDepartment",(function(){return W})),n.d(i,"updateDepartment",(function(){return X})),n.d(i,"updateDepartmentManager",(function(){return Z})),n.d(i,"deleteDepartment",(function(){return tt})),n.d(i,"singleUpload",(function(){return et})),n.d(i,"signIn",(function(){return nt}));var o=n("9530"),r=n.n(o);let s,l=t=>t;r()(s||(s=l`
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
`));let c,d,u,p,m,f,g,$,b,h=t=>t;const y=r()(c||(c=h`
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
`)),T=r()(d||(d=h`
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
`)),v=r()(u||(u=h`
  query getFile ($_id: String) {
    downloadFile(_id: $_id)
  }
`)),_=r()(p||(p=h`
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
`)),D=r()(m||(m=h`
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
`)),S=r()(f||(f=h`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),q=r()(g||(g=h`
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
`)),E=r()($||($=h`
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
`)),C=r()(b||(b=h`
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
`));n("ffd6");let x,k,w,I,N,Q,z,U,F,P,Y,M,R,B,A=t=>t;const O=r()(x||(x=A`
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
`)),j=r()(k||(k=A`
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
`)),J=r()(w||(w=A`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),L=r()(I||(I=A`
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
`)),G=r()(N||(N=A`
  mutation($_id: ID!) {
    deleteDocument(_id: $_id)
  }
`)),H=r()(Q||(Q=A`
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
`)),K=r()(z||(z=A`
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
`)),V=r()(U||(U=A`
  mutation($_id: ID!) {
    deleteContact(_id: $_id)
  }
`)),W=r()(F||(F=A`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),X=r()(P||(P=A`
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
`)),Z=r()(Y||(Y=A`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),tt=r()(M||(M=A`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),et=r()(R||(R=A`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),nt=r()(B||(B=A`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`))},"78f7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"q-pa-md"},[n("q-stepper",{ref:"stepper",attrs:{color:"primary",animated:""},scopedSlots:t._u([{key:"navigation",fn:function(){return[n("q-stepper-navigation",[1===t.step?n("q-btn",{attrs:{color:"primary",label:"Εισαγωγή εγγράφου"},on:{click:function(e){t.saveDocument(),t.$refs.stepper.next()}}}):t._e(),2===t.step?n("q-btn",{attrs:{color:"primary",label:"Αποθήκευση συνημμένων"},on:{click:function(e){return t.uploadFiles()}}}):t._e(),2===t.step?n("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Πίσω"},on:{click:function(e){return t.$refs.stepper.previous()}}}):t._e()],1)]},proxy:!0}]),model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("q-step",{attrs:{name:1,title:"Εισαγωγή στοιχείων εγγράφου",icon:"list",done:t.step>1}},[n("q-select",{attrs:{label:"Τύπος πράξης","stack-label":"",dense:"",options:t.transactionTypes,"transition-show":"scale","transition-hide":"scale"},model:{value:t.transactionType,callback:function(e){t.transactionType=e},expression:"transactionType"}}),n("q-input",{attrs:{label:"Θέμα"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("q-input",{attrs:{label:"Περιγραφή"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),"Έκδοση"===t.transactionType||"Κοινοποίηση"===t.transactionType||"Διαβίβαση"===t.transactionType?n("div",[n("q-select",{attrs:{label:"Από","option-value":"_id","option-label":"fullname",options:t.users,"transition-show":"scale","transition-hide":"scale","use-chips":"","stack-label":"",dense:"","emit-value":"","map-options":""},model:{value:t.sender,callback:function(e){t.sender=e},expression:"sender"}}),n("q-select",{attrs:{label:"Προς","option-value":"_id","option-label":"fullname",options:t.contacts,"transition-show":"scale","transition-hide":"scale",multiple:"","use-chips":"","stack-label":"",dense:"","emit-value":"","map-options":""},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"contacts"},on:{click:function(e){e.stopPropagation(),t.editContactDialog=!0}}})]},proxy:!0}],null,!1,3461902496),model:{value:t.receivers,callback:function(e){t.receivers=e},expression:"receivers"}})],1):t._e(),"Παραλαβή"===t.transactionType?n("div",[n("q-select",{attrs:{label:"Από","option-value":"_id","option-label":"fullname",options:t.contacts,"transition-show":"scale","transition-hide":"scale","use-chips":"","stack-label":"",dense:"","emit-value":"","map-options":""},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"contacts"},on:{click:function(e){e.stopPropagation(),t.editContactDialog=!0}}})]},proxy:!0}],null,!1,3461902496),model:{value:t.receivers,callback:function(e){t.receivers=e},expression:"receivers"}}),n("q-select",{attrs:{label:"Προς","option-value":"_id","option-label":"fullname",options:t.users,"transition-show":"scale","transition-hide":"scale",multiple:"","use-chips":"","stack-label":"",dense:"","emit-value":"","map-options":""},model:{value:t.sender,callback:function(e){t.sender=e},expression:"sender"}})],1):t._e(),n("div",{staticClass:"q-pa-xs"},[n("q-input",{attrs:{filled:"",mask:"##/##/####",label:"Ημερομηνία εγγράφου"},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{subtitle:"Ημερομηνία πράξης",landscape:"","today-btn":"",mask:"DD/MM/YYYY"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("div",{staticClass:"row items-center justify-end"},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Κλείσιμο",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),n("q-step",{attrs:{name:2,title:"Επισύναψη αρχείων",icon:"settings",done:t.step>2}},[n("q-file",{attrs:{label:"Επιλογή αρχείων",outlined:"","use-chips":"",multiple:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}),1===t.step&&t.files&&t.files.length>0?n("q-btn",{attrs:{color:"primary",label:"Επισύναψη αρχείων"},on:{click:function(e){return t.uploadFiles()}}}):t._e()],1)],1)],1),n("q-dialog",{attrs:{persistent:""},model:{value:t.editContactDialog,callback:function(e){t.editContactDialog=e},expression:"editContactDialog"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v("Επεξεργασία επαφής")])]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-select",{attrs:{label:"Χρήστης","option-label":"fullname",options:t.contacts,"transition-show":"scale","transition-hide":"scale","stack-label":"",dense:"","emit-value":"","map-options":""},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"add"},on:{click:function(e){return e.stopPropagation(),t.addContact()}}})]},proxy:!0}]),model:{value:t.contactToEdit,callback:function(e){t.contactToEdit=e},expression:"contactToEdit"}})],1),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{label:"Ονοματεπώνυμο"},model:{value:t.contactToEdit.fullname,callback:function(e){t.$set(t.contactToEdit,"fullname",e)},expression:"contactToEdit.fullname"}}),n("q-input",{attrs:{label:"Φορέας"},model:{value:t.contactToEdit.organization,callback:function(e){t.$set(t.contactToEdit,"organization",e)},expression:"contactToEdit.organization"}}),n("q-input",{attrs:{label:"Οδός"},model:{value:t.contactToEdit.street,callback:function(e){t.$set(t.contactToEdit,"street",e)},expression:"contactToEdit.street"}}),n("q-input",{attrs:{label:"Αριθμός"},model:{value:t.contactToEdit.streetNumber,callback:function(e){t.$set(t.contactToEdit,"streetNumber",e)},expression:"contactToEdit.streetNumber"}}),n("q-input",{attrs:{label:"Τ.Κ."},model:{value:t.contactToEdit.postalCode,callback:function(e){t.$set(t.contactToEdit,"postalCode",e)},expression:"contactToEdit.postalCode"}}),n("q-input",{attrs:{label:"Περιοχή"},model:{value:t.contactToEdit.area,callback:function(e){t.$set(t.contactToEdit,"area",e)},expression:"contactToEdit.area"}}),n("q-input",{attrs:{label:"Πόλη"},model:{value:t.contactToEdit.city,callback:function(e){t.$set(t.contactToEdit,"city",e)},expression:"contactToEdit.city"}}),n("q-input",{attrs:{label:"Χώρα"},model:{value:t.contactToEdit.country,callback:function(e){t.$set(t.contactToEdit,"country",e)},expression:"contactToEdit.country"}}),n("q-input",{attrs:{label:"Περιφέρεια"},model:{value:t.contactToEdit.region,callback:function(e){t.$set(t.contactToEdit,"region",e)},expression:"contactToEdit.region"}}),n("q-input",{attrs:{label:"Νομός"},model:{value:t.contactToEdit.prefecture,callback:function(e){t.$set(t.contactToEdit,"prefecture",e)},expression:"contactToEdit.prefecture"}}),n("q-input",{attrs:{label:"Θέση"},model:{value:t.contactToEdit.position,callback:function(e){t.$set(t.contactToEdit,"position",e)},expression:"contactToEdit.position"}}),n("q-input",{attrs:{label:"Τμήμα"},model:{value:t.contactToEdit.department,callback:function(e){t.$set(t.contactToEdit,"department",e)},expression:"contactToEdit.department"}}),n("q-input",{attrs:{label:"Τηλέφωνο"},model:{value:t.contactToEdit.phone,callback:function(e){t.$set(t.contactToEdit,"phone",e)},expression:"contactToEdit.phone"}}),n("q-input",{attrs:{label:"Φαξ"},model:{value:t.contactToEdit.fax,callback:function(e){t.$set(t.contactToEdit,"fax",e)},expression:"contactToEdit.fax"}}),n("q-input",{attrs:{label:"Ηλ. Ταχυδρομείο"},model:{value:t.contactToEdit.email,callback:function(e){t.$set(t.contactToEdit,"email",e)},expression:"contactToEdit.email"}}),n("q-input",{attrs:{label:"Ιστοσελίδα"},model:{value:t.contactToEdit.website,callback:function(e){t.$set(t.contactToEdit,"website",e)},expression:"contactToEdit.website"}})],1),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Αποθήκευση"},on:{click:function(e){return t.saveContact()}}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",outline:"",label:"Διαγραφή",color:"red"},on:{click:function(e){return t.deleteContact(t.contactToEdit._id)}}})],1)],1)],1)],1)},i=[],o=(n("e01a"),n("1fee")),r=n("cf57"),s=n("bd4c"),l={name:"NewDocument",data(){return{step:1,done1:!1,done2:!1,done3:!1,title:null,description:null,sender:null,receivers:null,receiversOptions:null,date:s["b"].formatDate(Date.now(),"DD/MM/YYYY"),files:null,doc_id:null,transactionTypes:["Έκδοση","Παραλαβή","Κοινοποίηση","Διαβίβαση"],transactionType:null,editContactDialog:!1,contactToEdit:{_id:null,fullname:null,organization:null,street:null,streetNumber:null,postalCode:null,area:null,city:null,country:null,region:null,prefecture:null,position:null,department:null,phone:null,fax:null,email:null,website:null}}},apollo:{users:{query:o["b"].getUsers,error(t){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}},contacts:{query:o["b"].getContacts,error(t){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push({path:"/"}),apollo.apolloClient.resetStore()}}},methods:{uploadFiles(){this.$q.loading.show({message:"Ανέβασμα αρχείων",backgroundColor:"grey",spinner:r["a"],customClass:"loader"});const t=this.doc_id;this.timer=setTimeout((()=>{this.timer=void 0,this.files.forEach((e=>{try{this.$apollo.mutate({mutation:o["a"].singleUpload,variables:{doc_id:t,file:e},update:(t,{data:{singleUploadLocal:e}})=>{console.log(e)}})}catch(n){this.$q.notify({message:`An error as occured: ${n}`,color:"negative"})}finally{this.$q.loading.hide(),this.$refs.stepper.goTo(1)}}))}),1e3)},saveDocument(){this.$q.loading.show({message:"Ολοκλήρωση αποθήκευσης",backgroundColor:"grey",spinner:r["a"],customClass:"loader"});const t=this.title,e=this.description;let n=null;n="Παραλαβή"!==this.transactionType?this.sender:this.sender[0];const a=this.receivers,i=this.date.split("/"),s=new Date(+i[2],i[1]-1,+i[0]).toISOString(),l=this.transactionType;this.$apollo.mutate({mutation:o["a"].createDocument,variables:{title:t,description:e,sender:n,receivers:a,date:s,files:[],transactionType:l},update:(t,{data:{createDocument:e}})=>{console.log("the document added was",e),this.doc_id=e._id}}).then((()=>{this.title=null,this.description=null,this.sender=null,this.receivers=null,this.date=null,this.files=null,this.fileIds=[],this.transactionType=null,this.$q.loading.hide()})),this.step=1},addContact(){this.contactToEdit={_id:null,fullname:null,organization:null,street:null,streetNumber:null,postalCode:null,area:null,city:null,country:null,region:null,prefecture:null,position:null,department:null,phone:null,fax:null,email:null,website:null}},saveContact(){const t=this.contactToEdit._id,e=this.contactToEdit.fullname,n=this.contactToEdit.organization,a=this.contactToEdit.street,i=this.contactToEdit.streetNumber,r=this.contactToEdit.postalCode,s=this.contactToEdit.area,l=this.contactToEdit.city,c=this.contactToEdit.country,d=this.contactToEdit.region,u=this.contactToEdit.prefecture,p=this.contactToEdit.position,m=this.contactToEdit.department,f=this.contactToEdit.phone,g=this.contactToEdit.fax,$=this.contactToEdit.email,b=this.contactToEdit.website;this.contactToEdit._id?this.$apollo.mutate({mutation:o["a"].updateContact,variables:{_id:t,fullname:e,organization:n,street:a,streetNumber:i,postalCode:r,area:s,city:l,country:c,region:d,prefecture:u,position:p,department:m,phone:f,fax:g,email:$,website:b},update:(t,{data:{updateContact:e}})=>{if(e){const e=t.readQuery({query:o["b"].getContacts});t.writeQuery({query:o["b"].getContacts,data:e})}}}):this.$apollo.mutate({mutation:o["a"].createContact,variables:{fullname:e,organization:n,street:a,streetNumber:i,postalCode:r,area:s,city:l,country:c,region:d,prefecture:u,position:p,department:m,phone:f,fax:g,email:$,website:b},update:(t,{data:{createContact:e}})=>{if(e){const n=t.readQuery({query:o["b"].getContacts});t.writeQuery({query:o["b"].getContacts,data:n.contacts.push(e)})}}})},deleteContact(t){this.$apollo.mutate({mutation:o["a"].deleteContact,variables:{_id:t},update:(e,{data:{deleteContact:n}})=>{if(n){const n=e.readQuery({query:o["b"].getContacts});n.contacts=n.contacts.filter((e=>e._id!==t)),e.writeQuery({query:o["b"].getContacts,data:n})}}}),this.addContact()}}},c=l,d=n("2877"),u=n("9989"),p=n("f531"),m=n("87fe"),f=n("ddd8"),g=n("27f9"),$=n("0016"),b=n("7cbe"),h=n("52ee"),y=n("9c40"),T=n("7d53"),v=n("b19c"),_=n("24e8"),D=n("f09f"),S=n("a370"),q=n("4b7e"),E=n("7f67"),C=n("eebe"),x=n.n(C),k=Object(d["a"])(c,a,i,!1,null,null,null);e["default"]=k.exports;x()(k,"components",{QPage:u["a"],QStepper:p["a"],QStep:m["a"],QSelect:f["a"],QInput:g["a"],QIcon:$["a"],QPopupProxy:b["a"],QDate:h["a"],QBtn:y["a"],QFile:T["a"],QStepperNavigation:v["a"],QDialog:_["a"],QCard:D["a"],QCardSection:S["a"],QCardActions:q["a"]}),x()(k,"directives",{ClosePopup:E["a"]})},ffd6:function(t,e){}}]);