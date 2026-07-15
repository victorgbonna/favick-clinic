const API_ENDPOINTS = {
  GOOGLE_SHEET_LINK:'https://script.google.com/macros/s/AKfycbyzbnj2F-hJWg6c-3i0zzoEo9IO2uREjV5M0r5rldB_gintRbTDVIIBHeSyeMKMcCR6Aw/exec',
  GOOGLE_SHEET_ID:'1n1F44RrxXW4OY-FEoQMwjkLQzGcRB1-Bi8eZin_mqeA',
  CERTIFICATIONS:[
    {label:'Nebosh IGC', img:'nebosh2.png' },
    {label:'ISO 45001 IRCA certified lead Auditor', img:'iso.png'}, 
    {label:'iosh diploma level 6', img:'iosh2.png'}
  ],

// dd
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
  BRAND_NAME_LONG:'Favick Skin Clinic',
  SERVICES:{
    TITLE:'Full Treatment Guide',
    INTRO:"Each treatment includes what it targets, what is included, and what to expect.",
    CORE_CATEGORIES:[
      {
        id:'facials',
        name:'Facials',
        image:'/images/treatments/facial-new.png',
        intro:'Grouped by skin concern, so you can choose based on what your skin needs rather than guessing between similar-sounding options.',
        treatments:[
          {
            slug:'express-glow-facial',
            name:'Express Glow Facial',
            duration:'30 mins',
            price:'45',
            description:"A swift and effective treatment for busy schedules, including cleanse, exfoliation, nourishing mask, hydration, SPF, and a relaxing facial massage.",
          },
          {
            slug:'clarifying-facial',
            name:'Clarifying Facial',
            duration:'50 mins',
            price:'75',
            description:"A deep cleansing facial for oily, congested, and acne-prone skin with consultation, double cleanse, exfoliation, extractions where needed, treatment mask, serums, moisturiser, SPF, and aftercare advice.",
          },
          {
            slug:'hydration-glow-facial',
            name:'Hydration Glow Facial',
            duration:'50 mins',
            price:'75',
            description:"A deeply hydrating treatment for dry or tired-looking skin with consultation, double cleanse, exfoliation, hydrating mask, serums, moisturiser, SPF, massage, and tailored aftercare.",
          },
          {
            slug:'sensitive-skin-recovery-facial',
            name:'Sensitive Skin Recovery Facial',
            duration:'50 mins',
            price:'75',
            description:"A calming facial designed to soothe sensitivity, reduce redness, strengthen the skin barrier, and restore hydration with gentle treatment steps.",
          },
          {
            slug:'melanin-glow-facial',
            name:'Melanin Glow Facial',
            duration:'60 mins',
            price:'85',
            description:"A tailored facial for melanin-rich skin to improve radiance, tone evenness, pigmentation, hydration, and acne-prone concerns with personalised aftercare.",
          },
          {
            slug:'postpartum-skin-reset-facial',
            name:'Postpartum Skin Reset Facial',
            duration:'60 mins',
            price:'75',
            description:"Designed for new mothers navigating melasma, dullness, and hormonal skin changes, with gentle analysis, hydration support, and personalised skin planning.",
          },
          {
            slug:'favick-bespoke-facial',
            name:'Favick Bespoke Facial',
            duration:'75 mins',
            price:'95',
            description:"A luxury personalised facial tailored to concerns like acne, pigmentation, and dehydration, with treatment customisation and long-term guidance.",
          },
          {
            slug:'hydroglow-facial',
            name:'HydroGlow Facial',
            duration:'60 mins',
            price:'95',
            description:"An advanced hydrodermabrasion facial to deeply cleanse, exfoliate, extract, and hydrate for visibly smoother, brighter, and more even-toned skin.",
          },
          {
            slug:'hydroglow-course-of-3',
            name:'HydroGlow Facial - Course of 3',
            duration:'3 hrs total',
            price:'255',
            description:'Three HydroGlow sessions spaced over weeks for longer-lasting texture and radiance improvements.',
          },
        ]
      },
      {
        id:'six-in-one-facial',
        name:'6-in-1 Facial',
        image:'/images/treatments/6in1facial-new.png',
        intro:'A technology-led category combining multiple advanced modalities for visible skin improvement in one pathway.',
        treatments:[
          {
            slug:'six-in-one-facial',
            name:'The 6-in-1 Facial',
            duration:'50 mins',
            price:'95',
            description:'A personalised treatment combining hydrodermabrasion, ultrasonic cleansing, oxygen infusion, cold hammer therapy, RF, and microcurrent for cleaner, smoother, firmer skin.',
          },
          {
            slug:'six-in-one-deluxe-facial',
            name:'The 6-in-1 Deluxe Facial',
            duration:'75 mins',
            price:'140',
            description:'Everything in the 6-in-1 Facial plus LED light therapy and face and decolletage massage for enhanced rejuvenation and relaxation.',
          },
          {
            slug:'six-in-one-course-of-3',
            name:'6in1 Facial - Course of 3',
            duration:'3 hrs total',
            price:'255',
            description:'A three-session course for longer-lasting improvements in congestion, radiance, and texture.',
          },
        ]
      },
      {
        id:'chemical-peels',
        name:'Chemical Peels',
        image:'/images/treatments/chemical-peel-new.png',
        intro:'Bespoke peels tailored to your skin, with melanin-rich skin safety front of mind.',
        treatments:[
          {
            slug:'signature-peel',
            name:'Signature Peel',
            duration:'45 mins',
            price:'from 60',
            description:'A tailored chemical peel targeting acne, congestion, uneven tone, pigmentation, fine lines, and skin texture concerns.',
          },
          {
            slug:'signature-peel-course-of-3',
            name:'Signature Peel - Course of 3',
            duration:'2 hrs 15 mins total',
            price:'165',
            description:'A course of three peels spaced over weeks for deeper renewal and clearer visible progression.',
          },
        ]
      },
      {
        id:'microneedling',
        name:'Microneedling',
        image:'/images/treatments/microneedling-new.png',
        intro:'A collagen-induction treatment for the face and neck.',
        treatments:[
          {
            slug:'microneedling-face-neck',
            name:'Microneedling - Face and Neck',
            duration:'1 hr 15 mins',
            price:'120',
            description:"Transform your skin with a rejuvenating collagen-induction treatment for the face and neck. This microneedling service is expertly designed to address concerns such as acne scars, pigmentation, enlarged pores, uneven texture, and early signs of ageing. We stimulate your skin's natural healing process, boosting collagen and elastin production for a smoother, firmer complexion. Every session begins with a personalised skin consultation to ensure we target your unique concerns effectively. Our treatment is suitable for all skin tones, including melanin-rich skin, and includes a comprehensive care package with a double cleanse, professional skin preparation, and soothing post-treatment products. You'll also receive SPF protection and tailored aftercare advice to keep your skin glowing.",
          },
          {
            slug:'microneedling-course-of-3',
            name:'Microneedling - Course of 3',
            duration:'3 hrs 45 mins total',
            price:'320',
            description:"Elevate your skincare routine with our exclusive Course of 3 bundle, featuring transformative microneedling treatments. This multi-session package rejuvenates your skin, minimises imperfections, and enhances your natural glow. Booking multiple sessions ensures consistent care and attention for your skin, guided by our skilled professionals throughout your journey to healthier skin.",
          },
        ]
      },
      {
        id:'mesotherapy',
        name:'Mesotherapy',
        image:'/images/treatments/mesotherapy-new.png',
        intro:'Targeted active ingredient delivery for hydration, brightening and rejuvenation.',
        treatments:[
          {
            slug:'mesotherapy-face-neck',
            name:'Mesotherapy - Face and Neck',
            duration:'1 hr 15 mins',
            price:'120',
            description:"Revitalise your complexion with a treatment that breathes new life into your face and neck. This innovative mesotherapy technique infuses a blend of carefully selected active ingredients directly into your skin, enhancing hydration, radiance, and overall quality. Customised to meet your unique skin concerns, it effectively addresses dehydration, uneven tone, pigmentation, fine lines, and firmness loss, leaving your skin healthier, smoother, and more vibrant. Your treatment journey begins with a tailored skin consultation to ensure we align the approach with your individual needs. Perfect for all skin tones, including melanin-rich skin, each session includes a personalised consultation, double cleanse, professional skin preparation, mesotherapy treatment, soothing post-care products, SPF protection, and detailed aftercare advice.",
          },
          {
            slug:'mesotherapy-course-of-3',
            name:'Mesotherapy - Course of 3',
            duration:'3 hrs 45 mins total',
            price:'330',
            description:'Discover a revitalising journey for your skin with our tailored Course of 3 treatment bundle. This package includes a series of mesotherapy sessions that work synergistically to hydrate, brighten, and rejuvenate your complexion. Enjoy the convenience of multiple sessions combined, allowing for deeper skin renewal and care over time.',
          },
        ]
      }
    ],
    CONSULTATION_CATEGORIES:[
      {
        id:'skin-consultations',
        name:'Skin Consultations',
        intro:'For clients who want expert guidance before committing to treatment, or a dedicated deep-dive into a specific concern.',
        treatments:[
          {
            slug:'skin-consultation',
            name:'Skin Consultation',
            duration:'30 mins',
            price:'35',
            description:'A comprehensive skin assessment covering type, routine, lifestyle factors, and goals, with a tailored action plan.',
          },
          {
            slug:'follow-up-consultation',
            name:'Follow-Up Consultation',
            duration:'20 mins',
            price:'20',
            description:'A review session for existing clients to evaluate skin progress and adjust routines or treatment plans.',
          },
          {
            slug:'hyperpigmentation-consultation-plan',
            name:'Hyperpigmentation Consultation + Treatment Plan',
            duration:'45 mins',
            price:'35',
            description:'An in-depth pigmentation consult with trigger assessment and a clear treatment roadmap for clinic and home care.',
          },
        ]
      },
      {
        id:'virtual-services',
        name:'Virtual Services',
        intro:'For clients outside Aberdeen, or anyone who prefers remote support via video call and WhatsApp.',
        treatments:[
          {
            slug:'virtual-skin-consultation',
            name:'Virtual Skin Consultation',
            duration:'Photo review + 30 min call',
            price:'35',
            description:'Submit skin photos and details in advance, then review findings and next steps together over video call.',
          },
          {
            slug:'virtual-skincare-audit',
            name:'Virtual Skincare Audit',
            duration:'Photo/product list + 45 min call',
            price:'50',
            description:'A full review of your current products with clear guidance on what to keep, remove, and replace.',
          },
          {
            slug:'consultation-audit-bundle',
            name:'Consultation + Audit Bundle',
            duration:'Photos + write-up + 60 min call',
            price:'75',
            description:'A complete reset package combining in-depth skin analysis with routine rebuild planning.',
          },
          {
            slug:'favick-quarterly-coaching',
            name:'Favick Skin Membership - Quarterly Coaching Programme',
            duration:'3 months',
            price:'180',
            description:'A coaching programme with consultation, curated routine, two monthly check-ins, and WhatsApp support.',
          },
        ]
      },
    ],
    COMING_SOON:{
      id:'coming-soon',
      name:'Coming Soon - November 2026',
      treatments:[
        {
          slug:'lip-blush',
          name:'Lip Blush',
          duration:'-',
          price:'from 150',
          description:'A specialist semi-permanent treatment to restore natural lip colour and definition for deeper-toned lips.',
        },
      ]
    }
  }

}

export default API_ENDPOINTS