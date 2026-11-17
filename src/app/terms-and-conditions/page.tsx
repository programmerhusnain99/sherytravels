import { pageMetadata } from "@/lib/seo";
import { PolicyPage, type PolicyPageData } from "@/components/policy/PolicyPage";

// TODO(client): have these Terms & Conditions reviewed by Shery Travels'
// legal counsel before launch to ensure they reflect actual terms and
// applicable governing law.
const PATH = "/terms-and-conditions/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Terms & Conditions | Shery Travels",
  description:
    "The terms and conditions that govern bookings and use of Shery Travels' Hajj, Umrah and travel services — bookings, payments, documents, responsibilities and liability.",
  ogType: "article",
});

const DATA: PolicyPageData = {
  path: PATH,
  breadcrumbName: "Terms & Conditions",
  eyebrow: "Legal",
  headBefore: "Terms & ",
  headAccent: "Conditions",
  updated: "November 2026",
  heroImage: "/images/umrah/usa-path.webp",
  heroImageAlt: "Pilgrims on a Hajj and Umrah journey arranged by Shery Travels",
  lead: [
    "These Terms & Conditions govern your use of the Shery Travels website and the booking of our Hajj, Umrah and travel services.",
    "By using our website or making a booking with us, you agree to these terms. Please read them carefully and keep a copy for your records.",
  ],
  contactIntro:
    "If anything in these terms is unclear, or you'd like a question answered before booking, please get in touch — we're glad to help.",
  sections: [
    {
      h: "Acceptance of These Terms",
      paragraphs: [
        "By accessing our website, requesting a quote, or confirming a booking, you acknowledge that you have read, understood and agreed to these Terms & Conditions, together with our Payments & Refunds Policy and Privacy Policy.",
        "If you are booking on behalf of others, you confirm that you have the authority to accept these terms for every member of your party.",
      ],
    },
    {
      h: "Definitions",
      subs: [
        {
          title: "Key terms",
          items: [
            "\"We\", \"us\", \"our\" and \"Shery Travels\" refer to Shery Travels and its authorised representatives",
            "\"You\" and \"traveller\" refer to the person making or named in a booking",
            "\"Services\" refers to the Hajj, Umrah, transport, accommodation and related travel arrangements we provide",
            "\"Booking\" refers to a confirmed reservation for any of our Services",
          ],
        },
      ],
    },
    {
      h: "Bookings & Your Contract",
      paragraphs: [
        "A booking is confirmed only when we have received the required deposit and issued you a written confirmation. At that point a contract exists between you and Shery Travels on these terms.",
        "You are responsible for checking that all details on your confirmation and invoice — names, dates, room types and services — are correct, and for telling us immediately if anything is wrong.",
      ],
    },
    {
      h: "Prices & Payment",
      paragraphs: [
        "Prices, deposits, payment due dates and refund terms are set out in your invoice and in our Payments & Refunds Policy, which forms part of these terms.",
        "We reserve the right to correct genuine errors in advertised or quoted prices before your booking is confirmed.",
      ],
    },
    {
      h: "Passports, Visas & Travel Documents",
      paragraphs: [
        "You are responsible for holding a valid passport and for meeting the entry and visa requirements for your journey. We will assist with visa processing where it is part of your package, but we cannot guarantee that any visa will be granted, as this is decided by the relevant authorities.",
        "We are not liable for any loss arising from incomplete, inaccurate or late-provided documents, or from a visa being refused for reasons outside our control.",
      ],
      note: "Please ensure your passport meets the validity requirements for travel to Saudi Arabia (generally at least six months beyond your travel dates).",
    },
    {
      h: "Health, Vaccinations & Fitness to Travel",
      paragraphs: [
        "You are responsible for meeting any health and vaccination requirements for Hajj and Umrah travel and for ensuring you are fit to travel.",
        "If you have a medical condition or require assistance, please tell us at the time of booking so we can advise on suitability and make reasonable arrangements where possible.",
      ],
    },
    {
      h: "Your Responsibilities & Conduct",
      intro: "To help your journey and that of fellow pilgrims run smoothly, you agree to:",
      list: [
        "Provide accurate information at the time of booking and keep us updated of any changes",
        "Arrive on time for flights, transfers and scheduled activities",
        "Follow the laws, customs and guidance of Saudi Arabia and the instructions of our guides and drivers",
        "Behave respectfully towards staff, drivers and other travellers",
      ],
      note: "We may decline or end service, without refund, where a traveller's conduct endangers safety or seriously disrupts the group.",
    },
    {
      h: "Changes & Cancellations",
      paragraphs: [
        "Changes and cancellations — by you or by us — are handled in line with our Payments & Refunds Policy. Please refer to that policy for deposit, refund and amendment terms.",
      ],
    },
    {
      h: "Our Liability",
      paragraphs: [
        "We take reasonable care in arranging your Services and in selecting our suppliers. However, we act as an organiser and coordinator, and some elements — such as flights, hotels and government processes — are operated by third parties.",
        "We are not liable for loss, delay or disruption caused by third-party suppliers or by events beyond our reasonable control. Nothing in these terms limits any liability that cannot be excluded by law.",
      ],
    },
    {
      h: "Force Majeure",
      paragraphs: [
        "We are not responsible for failures or delays caused by circumstances beyond our reasonable control. These may include natural disasters, severe weather, pandemics, government actions or restrictions, changes to Hajj and Umrah regulations, strikes, airline schedule changes, or civil unrest.",
      ],
    },
    {
      h: "Travel Insurance",
      paragraphs: [
        "We strongly recommend that every traveller holds comprehensive travel insurance covering medical care, cancellation, personal belongings and repatriation. Travel insurance is not included in our packages unless expressly stated.",
      ],
    },
    {
      h: "Intellectual Property",
      paragraphs: [
        "All content on this website — including text, images, logos and design — belongs to Shery Travels or its licensors and may not be copied or reused without our written permission.",
      ],
    },
    {
      h: "Governing Law",
      paragraphs: [
        "These Terms & Conditions are governed by applicable law, and any dispute will be subject to the exclusive jurisdiction of the competent courts. We will always seek to resolve any concern with you directly and fairly first.",
      ],
    },
  ],
};

export default function TermsAndConditionsPage() {
  return <PolicyPage data={DATA} />;
}
