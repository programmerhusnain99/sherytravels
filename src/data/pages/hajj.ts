import type { PilgrimagePageData } from "@/components/sections/PilgrimagePage";

/** /hajj/ page content — verbatim from the live WordPress page (SEO parity). */
export const HAJJ_PAGE: PilgrimagePageData = {
  active: "/hajj/",
  path: "/hajj/",
  crumb: "Hajj",
  hero: {
    eyebrow: "The fifth pillar",
    before: "Your Journey of a ",
    accent: "Lifetime",
    image: "/images/hajj/hajj-hero.webp",
    imageAlt: "Pilgrims at the Kaaba during Hajj",
  },
  overview: {
    eyebrow: "About Hajj",
    before: "About ",
    accent: "Hajj",
    image: "/images/hajj/hajj-overview.webp",
    imageAlt: "Pilgrims gathered for Hajj",
    paragraphs: [
      "As one of the five pillars of Islam, it is an obligation for every Muslim who is physically and financially able to perform Hajj at least once in a lifetime. The month of Dhul-Hijjah draws Muslims from all around the world to the Holy Cities of Makkah and Madinah.",
      "It originates from the time of the beloved Prophet Ibrahim (AS), who was put to the test by the Almighty to sacrifice his son Isma’il (AS) to test his devotion to Allah. This test provides the basis for Hajj.",
      "You can perform Hajj more than once, too. It’s a lifetime of spiritual, emotional, and physical experience for Muslims looking to refresh their inner well-being and draw closer to Allah Almighty. Regardless of whether you can perform Hajj or not, Dhul-Hijjah brings countless blessings for you! At Shery Travels, we ensure that every pilgrim is comfortable and fully guided to perform Hajj without any hassle.",
    ],
  },
  cards: {
    eyebrow: "For every pilgrim",
    before: "Hajj Experiences for All Age ",
    accent: "Groups",
    items: [
      {
        icon: "accessibility",
        title: "Older and Mobility Impaired Pilgrims",
        body: "Older pilgrims or pilgrims with mobility concerns may need further assistance. They could be limited by their age, physical nature, and Hajj rituals are demanding. The quality of the pilgrimage is kept in consideration with things like where they stay, wheelchair access, medical assistance, and the distance between sacred sites.",
      },
      {
        icon: "graduation",
        title: "First-Time Pilgrims",
        body: "Yes, first-time pilgrims need to have as much understanding of each ritual as they can before Hajj. First-time pilgrims often choose to attend educational sessions in preparation, explore spiritual education, and/or practice familiarization with the experience’s ritual sequence (from Ihram, Tawaf, Sa’i, and standing at Arafat).",
      },
      {
        icon: "users",
        title: "Families and Group Pilgrims",
        body: "Families and community groups often coordinate and travel together to ensure communal aspects of the pilgrimage. Group travel may enhance shared spiritual experiences and lessen logistical concerns through things like movement through crowds, dealing with ritual activities, and taking shared communal accommodation or meal times.",
      },
      {
        icon: "user",
        title: "Independent and Solo Pilgrims",
        body: "Independent and solo pilgrims are similar, focused on their reflective and spiritual solitude. Independent pilgrims generally plan very well (mapping their documents, relying on organizing their schedule, ensuring security of movement, and representing themselves through the crowd).",
      },
    ],
  },
  explainer: {
    eyebrow: "Before you go",
    before: "Hajj Preparations to ",
    accent: "Follow",
    items: [
      {
        title: "Entry Requirements",
        body: "Check the requirements with the Saudi Arabian embassy to ensure you can travel easily. It’s best to organize the tour beforehand via a travel agency like Shery Travels, which will take care of all processes and documentation on your behalf.",
      },
      {
        title: "Use of Currency",
        body: "While major expenses are covered in your chosen Hajj package, you must have enough local currency and emergency funds on hand for any unforeseen emergencies. Having some cash and a debit card that is internationally accepted will give you some peace of mind.",
      },
      {
        title: "Plan Itinerary",
        body: "It is best to plan your itinerary to manage your expectations and so that you are well-prepared. Get to learn about dedicated rituals like Tawaf, Sa’i, Arafat, and Jamrat. Keep important contact numbers and hotel details with you.",
      },
      {
        title: "Get Vaccinated",
        body: "All pilgrims are required to get a meningitis vaccination at least 10 days before their departure. Additional vaccinations should be covered too, depending on your country of origin. It is best to keep basic medications like painkillers with you in case of emergencies.",
      },
    ],
  },
  faq: {
    intro:
      "Find answers to common questions about our transportation, Umrah and Hajj services, documentation, customization options, or support during your pilgrimage.",
    items: [
      {
        q: "Which documents do I need for Hajj?",
        a: "You will need a valid passport, a Hajj visa, vaccination certificates, and an application with complete information. Our team will assist you in compiling all necessary documents.",
      },
      {
        q: "Is there an age limit to perform Hajj?",
        a: "Because Hajj is a physically demanding experience, people of a certain age and with serious health issues may not be able to perform it.",
      },
      {
        q: "Can women travel alone for Hajj?",
        a: "Yes, the government allows women to travel in groups to perform Hajj without a Mehram.",
      },
      {
        q: "How should I prepare for Hajj?",
        a: "You will need to walk an average of 5km to 15km per day. It is encouraged to physically prepare yourself weeks in advance. Always carry a water bottle and some food with you. Keep your documents, like your visa and passport, and identification with you at all times.",
      },
    ],
  },
  inquiry: {
    before: "Start your Hajj ",
    accent: "Inquiry",
    text:
      "Whether it’s a general question, a transport request, or a package inquiry — a travel expert replies within 24 hours.",
  },
};
