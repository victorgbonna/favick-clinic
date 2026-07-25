const PAGE_ROUTES = {
  HOME: "/",
  ABOUT: "/about-us",
  SERVICES: "/about-us",
  TREATMENTS: "/treatments",
  COURSES: "/courses",
  BLOGS: "/blogs",
  CONTACT: "/contact-us",
  REFUND_POLICY: "/refund-policy",
  MEMBERSHIP_PLAN: "/treatments#virtual-services",
  FAITH_LINKTREE: "https://linktr.ee/aminahofaith",
  A_BLOG:(id)=>{
    return '/blogs/hse/'+id
  },
  SOCIAL_LINKS: {
    INSTAGRAM: "https://instagram.com/favickskinclinic",
    LINKEDIN: "https://www.linkedin.com/in/faith-ebenezer/",
    YOUTUBE: "https://www.youtube.com/@LifeWithFaithAminaho",
  },
  CONTACT_LINK:{
    WHATSAPP_LINK:"https://wa.me/447468880165",
    PHONE:'+44 7468 880165'
  },
  
};

export default PAGE_ROUTES
