const API_ENDPOINTS = {
  GOOGLE_SHEET_LINK:'https://script.google.com/macros/s/AKfycbyzbnj2F-hJWg6c-3i0zzoEo9IO2uREjV5M0r5rldB_gintRbTDVIIBHeSyeMKMcCR6Aw/exec',
  GOOGLE_SHEET_ID:'1n1F44RrxXW4OY-FEoQMwjkLQzGcRB1-Bi8eZin_mqeA',
  CERTIFICATIONS:[
    {label:'Nebosh IGC', img:'nebosh2.png' },
    {label:'ISO 45001 IRCA certified lead Auditor', img:'iso.png'}, 
    {label:'iosh diploma level 6', img:'iosh2.png'}
  ],


  SIDELINKS:[
    // {
    //   label:"Dashboard", value:"DASHBOARD",icon:"dashboard", notActive:true
    // },
    {
        label:"Users", value:"USERS",icon:"users", api_page_access:"user"
    },{
        label:"Competitions", value:"COMPS",icon:"cup", api_page_access:"comp"
    },{
        label:"Create Competition", value:"CREATE_COMP",icon:"create",api_page_access:"create_comp"
    },{
        label:"Notification", value:"NOTI",icon:"noti", api_page_access:"noti"
    },{
      label:"Requests", value:"REQ",icon:"requests", api_page_access:"requests"
    },{
      label:"Suggestion Box", value:"SUGG",icon:"sugg", api_page_access:"sugg"
    },{
      label:"Send Mail", value:"MAIL",icon:"mail", api_page_access:"mails"
    },{
      label:"Transactions", value:"TRANSC",icon:"transa", api_page_access:"transac"
    },{
      label:"Admins", value:"ADMINS",icon:"admin", api_page_access:"admins"
    }
  ],
  COMMUNITY:[
    {type:"whatsapp", link:"https://wa.me/971592295379"},
    {type:"telegram"},
    {type:"discord"},
    {type:"slack"}
  ],
  CONTACT:{
    WHATSAPP_LINK:"https://wa.me/8102603301",
    PHONE:'+971592777',
    INSTA_LINK:"https://instagram.com",
    FACEBOOK_LINK:"https://facebook.com",
    LINKEDIN_LINK:"https://linkedin.com"
  },
  BRAND_NAME_SHORT:'Favick',
  BRAND_NAME_LONG:'Favick Skin Clinic'

}

export default API_ENDPOINTS