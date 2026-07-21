const API_ENDPOINTS = {

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
    {type:"whatsapp", link:"https://wa.me/447956613490"},
    {type:"telegram"},
    {type:"discord"},
    {type:"slack"}
  ],
  PERSONAL_SOCIALS:[
    // {label:"Instagram", href:"https://instagram.com/faithaminaho", icon:"/svg/socials/insta.svg"},
    {label:"LinkedIn", href:"https://www.linkedin.com/in/faith-ebenezer/", icon:"/svg/socials/linkedin.svg"},
    {label:"YouTube", href:"https://www.youtube.com/@LifeWithFaithAminaho", icon:"/svg/socials/youtube.svg"},
  ],
  BUSINESS_SOCIALS:[
    {label:"Instagram", href:"https://instagram.com/favickskinclinic", icon:"/svg/socials/insta.svg"},
    {label:"Facebook", href:"https://facebook.com/favickskinclinic", icon:"/svg/socials/facebook.svg"},
    {label:"TikTok", href:"https://tiktok.com/@favickskinclinic", icon:"/svg/socials/tiktok.svg"},
  ],
  CONTACT:{
    CALL_LINK:"tel:+447956613490",
    WHATSAPP_LINK:"https://wa.me/447956613490",
    PHONE:'+44 795 661 3490',
    EMAIL:'hello@favickskinclinic.co.uk',
    INSTA_LINK:"https://www.instagram.com/@favickskinclinic",
    FACEBOOK_LINK:"https://www.facebook.com/profile.php?id=61590883165688",
    TIKTOK_LINK:"https://www.tiktok.com/@favickskinclinic",
    // LINKEDIN_LINK:"https://linkedin.com"
  },
  BRAND_NAME_SHORT:'Favick',
  BRAND_NAME_LONG:'Favick Skin Clinic',
  SERVICES:{
    TITLE:'Full Treatment Guide',
    INTRO:"Each treatment below includes what it targets, what's included, and what to expect.",
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
            description:"A swift and effective treatment designed specifically for busy people. This rejuvenating facial includes a thorough cleanse, gentle exfoliation, a nourishing mask, deep hydration, and protective SPF. It's the ideal choice to prepare your complexion for an upcoming event, or to keep your skin looking its best as part of your regular skincare routine. Plus, enjoy the added benefit of a relaxing facial massage to leave you feeling refreshed and radiant.",
          },
          {
            slug:'clarifying-facial',
            name:'Clarifying Facial',
            duration:'50 mins',
            price:'75',
            description:"Reveal your skin's natural glow with our deep cleansing facial, expertly crafted for oily, congested, and acne-prone skin. This rejuvenating treatment aims to minimise breakouts, ease congestion, and restore your skin's balance, all while protecting your delicate skin barrier. Your experience begins with a tailored skin consultation and includes double cleansing, gentle exfoliation, and necessary extractions. Enjoy a soothing mask, professional grade serums, moisturiser, and SPF protection. To complete your session, indulge in a calming massage for your face and decolletage, along with personalised aftercare advice designed specifically for you.",
          },
          {
            slug:'hydration-glow-facial',
            name:'Hydration Glow Facial',
            duration:'50 mins',
            price:'75',
            description:"Revitalise your skin with this deeply hydrating facial designed to restore moisture and enhance radiance. Ideal for dry, dehydrated, or tired-looking skin, it leaves your complexion feeling soft, plump, and glowing. Your journey begins with a personalised skin consultation and analysis, followed by a double cleanse and gentle exfoliation. Enjoy a hydrating treatment mask enriched with professional serums, topped off with a nourishing moisturiser and SPF protection. Unwind with a relaxing face and decolletage massage, and receive tailored aftercare advice to maintain your glow.",
          },
          {
            slug:'sensitive-skin-recovery-facial',
            name:'Sensitive Skin Recovery Facial',
            duration:'50 mins',
            price:'75',
            description:"Discover tranquility with our Sensitive Skin Recovery Facial, designed to soothe sensitive or irritated skin. This gentle treatment uses nourishing products to minimise redness, boost hydration, and fortify your skin's barrier for a healthier, more balanced complexion. Enjoy a personalised skin consultation as part of your facial journey, including a double cleanse, mild exfoliation, a calming treatment mask, professional serums, moisturiser, and SPF protection. Enhance your experience with a relaxing face and decolletage massage, complemented by tailored aftercare advice to help you maintain your radiant glow.",
          },
          {
            slug:'melanin-glow-facial',
            name:'Melanin Glow Facial',
            duration:'60 mins',
            price:'85',
            description:"Indulge in a luxurious facial crafted specifically for melanin-rich skin. This exclusive treatment revives dullness, evens out tone, tackles pigmentation, and nourishes acne-prone and dehydrated skin, ensuring it's perfect for your skin after a personalised consultation. Your experience starts with a detailed skin analysis, followed by a double cleanse and gentle exfoliation, with optional extractions to enhance clarity. A customised treatment mask, infused with professional serums, moisturiser, and SPF, ensures your skin is well-nourished. Enjoy a calming massage of the face, decolletage, and scalp, along with tailored aftercare guidance. The result is radiantly cleansed, hydrated, and balanced skin that showcases a lasting melanin glow.",
          },
          {
            slug:'postpartum-skin-reset-facial',
            name:'Postpartum Skin Reset Facial',
            duration:'60 mins',
            price:'75',
            description:"Designed specifically for new mothers navigating melasma, hyperpigmentation, dullness, and the hormonal skin changes that often follow pregnancy. This facial combines a gentle skin analysis, a hydrating treatment, and a relaxing facial massage tailored to skin that's still finding its balance post-birth. You'll leave with a personalised skin plan to support your recovery and confidence, one appointment at a time.",
          },
          {
            slug:'favick-bespoke-facial',
            name:'Favick Bespoke Facial',
            duration:'75 mins',
            price:'95',
            description:"Experience the ultimate in skin revitalisation with our luxurious bespoke facial, designed specifically for your unique skin needs. This session begins with a thorough consultation to address concerns like acne, pigmentation, dehydration, and more. Every element of your facial is tailored using selected products and techniques to ensure safe, effective results. Your treatment includes a personalised skin consultation, double cleanse, gentle exfoliation, and, if needed, extractions. A customised mask, professional serums, moisturiser, and SPF protection will enhance your glow. Enjoy a relaxing face, decolletage, and scalp massage, along with personalised aftercare advice. The result is deeply cleansed, balanced, hydrated, and radiant skin, with a plan tailored to your individual goals.",
          },
          {
            slug:'hydroglow-facial',
            name:'HydroGlow Facial',
            duration:'60 mins',
            price:'95',
            description:"Why choose one facial when you can experience six advanced technologies in a single treatment? Our signature facial combines hydrodermabrasion, ultrasonic skin scrubber, oxygen infusion, cold hammer therapy, radiofrequency, and microcurrent to deeply cleanse, hydrate, firm, and revitalise your skin. Ideal for dullness, congestion, dehydration, uneven texture, loss of firmness, and early signs of ageing.",
          },
          {
            slug:'hydroglow-course-of-3',
            name:'HydroGlow Facial - Course of 3',
            duration:'3 hrs total',
            price:'255 (save 10%)',
            description:'For visible, longer-lasting results, a course of three 6in1 Facials spaced across a few weeks allows skin to rebuild texture and radiance progressively, ideal for congested, dull, or uneven skin.',
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
            duration:'50 minutes',
            price:'95',
            description:'Our signature facial combines six professional technologies to deeply cleanse, exfoliate, hydrate, firm and revitalise your skin in one personalised treatment. Treatment includes hydrodermabrasion, ultrasonic skin scrubber, oxygen infusion, cold hammer therapy, radiofrequency, and microcurrent for cleaner, smoother, firmer, and more radiant-looking skin.',
          },
          {
            slug:'six-in-one-deluxe-facial',
            name:'The 6-in-1 Deluxe Facial',
            duration:'75 minutes',
            price:'140',
            description:'Experience our most comprehensive facial treatment for maximum skin rejuvenation and complete relaxation. Everything included in the 6-in-1 Facial, plus LED light therapy and a face and decolletage massage to relieve tension, encourage lymphatic drainage, and promote relaxation.',
          },
          {
            slug:'six-in-one-course-of-3',
            name:'6in1 Facial - Course of 3',
            duration:'3 hrs total',
            price:'255 (save 10%)',
            description:'For visible, longer-lasting results, a course of three 6in1 Facials spaced across a few weeks allows skin to rebuild texture and radiance progressively, ideal for congested, dull, or uneven skin.',
          },
        ]
      },
      {
        id:'chemical-peels',
        name:'Chemical Peels',
        image:'/images/treatments/chemical.png',
        intro:'Bespoke peels tailored to your skin, with melanin-rich skin safety front of mind.',
        treatments:[
          {
            slug:'signature-peel',
            name:'Signature Peel',
            duration:'45 mins',
            price:'from 60',
            description:'Transform your skin with a bespoke chemical peel that targets your unique concerns. This treatment effectively tackles acne, congestion, uneven skin tone, pigmentation, fine lines, and improves overall skin texture. Each peel is carefully selected and tailored to meet your specific skin type, ensuring optimal results. With our expertise in treating melanin-rich skin, you can trust in a safe and effective procedure that will leave your complexion feeling refreshed and radiant.',
          },
          {
            slug:'signature-peel-course-of-3',
            name:'Signature Peel - Course of 3',
            duration:'2 hrs 15 mins total',
            price:'165 (save 8%)',
            description:'A course of three peels, spaced a few weeks apart, allows for deeper skin renewal and more visible improvement over time than a single session alone.',
          },
        ]
      },
      {
        id:'microneedling',
        name:'Microneedling',
        image:'/images/treatments/microneedling.png',
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
            price:'320 (save 11%)',
            description:"Elevate your skincare routine with our exclusive Course of 3 bundle, featuring transformative microneedling treatments. This multi-session package rejuvenates your skin, minimises imperfections, and enhances your natural glow. Booking multiple sessions ensures consistent care and attention for your skin, guided by our skilled professionals throughout your journey to healthier skin.",
          },
        ]
      },
      {
        id:'mesotherapy',
        name:'Mesotherapy',
        image:'/images/treatments/mesotheraphy-new.png',
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
            price:'330 (save 8%)',
            description:'Discover a revitalising journey for your skin with our tailored Course of 3 treatment bundle. This package includes a series of mesotherapy sessions that work synergistically to hydrate, brighten, and rejuvenate your complexion. Enjoy the convenience of multiple sessions combined, allowing for deeper skin renewal and care over time.',
          },
        ]
      }
    ],
    CONSULTATION_CATEGORIES:[
      {
        id:'skin-consultations',
        name:'Skin Consultations',
        intro:'For clients who want expert guidance before committing to a treatment, or a dedicated deep-dive into a specific concern.',
        treatments:[
          {
            slug:'skin-consultation',
            name:'Skin Consultation',
            duration:'30 mins',
            price:'35',
            description:'A comprehensive skin assessment covering your skin type, current routine, lifestyle factors, and goals. You will leave with a personalised skincare routine recommendation, a written action plan, and product recommendations tailored to you, whether or not you go on to book a treatment.',
          },
          {
            slug:'follow-up-consultation',
            name:'Follow-Up Consultation',
            duration:'20 mins',
            price:'20',
            description:'A progress review for existing clients, checking in on how your skin is responding to your routine or treatment plan, with adjustments made as needed.',
          },
          {
            slug:'hyperpigmentation-consultation-plan',
            name:'Hyperpigmentation Consultation + Treatment Plan',
            duration:'45 mins',
            price:'35',
            description:'A focused, in-depth consultation specifically for dark marks, uneven tone, melasma, and post-inflammatory hyperpigmentation. We will assess your pigmentation, identify likely triggers, and build a personalised treatment roadmap covering both in-clinic treatments and home care, so you know exactly what to do and in what order.',
          },
        ]
      },
      {
        id:'virtual-services',
        name:'Virtual Services',
        intro:'For clients outside Aberdeen, or anyone who prefers remote support, delivered by video call and WhatsApp.',
        treatments:[
          {
            slug:'virtual-skin-consultation',
            name:'Virtual Skin Consultation',
            duration:'Photo review + 30 min call',
            price:'35',
            description:'Perfect for clients outside Aberdeen. You will start by sending clear photos of your skin along with a detailed written breakdown of your concerns, history, and goals. I will carefully analyse everything you have shared before we get on a video call together to talk through my findings and build a personalised plan you can act on, wherever you are.',
          },
          {
            slug:'virtual-skincare-audit',
            name:'Virtual Skincare Audit',
            duration:'Photo/product list + 45 min call',
            price:'50',
            description:'Ever wondered if what is in your bathroom is actually working for you? Send me photos or a list of everything currently in your routine, and I will review each product against your skin needs. We will then get on a call to go through what to keep, what to toss, and what to swap out, plus how to rebuild your routine around what your skin genuinely needs.',
          },
          {
            slug:'consultation-audit-bundle',
            name:'Consultation + Audit Bundle',
            duration:'Photos + write-up + 60 min call',
            price:'75',
            description:'The most thorough starting point for anyone serious about resetting their routine. Send your skin photos, concerns, and current product list ahead of time, I will analyse everything in full, then we will get on a call together to walk through your personalised skin plan and full routine rebuild.',
          },
          {
            slug:'favick-quarterly-coaching',
            name:'Favick Skin Membership - Quarterly Coaching Programme',
            duration:'3 months',
            price:'180',
            description:'A 3-month virtual skincare coaching programme for clients who want ongoing, hands-on guidance rather than a single one-off consultation. You will start with an in-depth consultation, receive a personalised, curated skincare routine, and get two check-ins a month plus direct WhatsApp support throughout your 3 months. Membership is limited to 10-15 members per quarterly intake, so spaces are offered on a rolling basis as each new quarter opens. Longer commitments are available: 6 months (£330, save £30), 12 months (£600, save £120), or rolling monthly with no commitment (£70/month).',
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
          description:'A specialist semi-permanent makeup treatment that restores natural colour and definition to the lips, tailored specifically for deeper-toned lips. Results typically last 12-18 months before a colour refresh is needed.',
        },
        {
          slug:'skin-boosters',
          name:'Skin Boosters',
          duration:'-',
          price:'Coming soon',
          description:'Advanced injectable hydration treatments designed to improve skin quality, bounce and glow. Full details will be announced ahead of launch.',
        },
      ]
    }
  }

}

export default API_ENDPOINTS