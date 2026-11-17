import { pageMetadata } from "@/lib/seo";
import { PolicyPage, type PolicyPageData } from "@/components/policy/PolicyPage";

// TODO(client): review complaints timeframes and escalation details with
// Shery Travels before launch to ensure they match internal procedures.
const PATH = "/complaints/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Complaints Policy | Shery Travels",
  description:
    "How to raise a complaint with Shery Travels and how we handle it — our process, response timeframes, escalation, and support during your Hajj or Umrah trip.",
  ogType: "article",
});

const DATA: PolicyPageData = {
  path: PATH,
  breadcrumbName: "Complaints",
  eyebrow: "Complaints",
  headBefore: "Complaints ",
  headAccent: "Policy",
  updated: "November 2026",
  heroImage: "/images/home/home-beyond.webp",
  heroImageAlt: "The Shery Travels team supporting pilgrims",
  lead: [
    "Your experience matters to us. If something hasn't gone as expected, we want to hear about it so we can put it right and improve.",
    "This policy explains how to raise a complaint and what you can expect from us once you do.",
  ],
  contactIntro:
    "You can raise a complaint at any time using the details below. If your concern is urgent — especially while you are travelling — please call us so we can act straight away.",
  sections: [
    {
      h: "Our Commitment",
      paragraphs: [
        "We are committed to providing a safe, smooth and respectful journey for every pilgrim. When things fall short, we take it seriously.",
        "Every complaint is treated fairly, confidentially and without judgement. Raising a concern will never affect the quality of service you receive from us.",
      ],
    },
    {
      h: "How to Raise a Complaint",
      intro: "You can contact us in whichever way is easiest for you:",
      list: [
        "Email us with the details of your concern",
        "Call our support line during the day or, while travelling, at any time via our 24/7 on-ground team",
        "Message us on WhatsApp",
        "Use the contact form on our website",
      ],
    },
    {
      h: "What to Include",
      intro: "To help us resolve your complaint as quickly as possible, please include:",
      list: [
        "Your full name and booking reference (if you have one)",
        "The dates and details of the service involved",
        "A clear description of what happened and what went wrong",
        "Any supporting information, such as photos or documents",
        "How you would like us to put things right",
      ],
    },
    {
      h: "How We Handle Your Complaint",
      intro: "Once we receive your complaint, we follow a simple, transparent process:",
      subs: [
        {
          title: "Our process",
          items: [
            "Acknowledge — we confirm we've received your complaint and assign it to a team member",
            "Investigate — we review the details, speak to the relevant people and gather the facts",
            "Resolve — we explain our findings and propose a fair way to put things right",
            "Follow up — we check that you're satisfied with the outcome",
          ],
        },
      ],
    },
    {
      h: "Response Timeframes",
      list: [
        "We aim to acknowledge your complaint within 2 business days",
        "We aim to provide a full response or resolution within 14 business days",
        "If a complaint is complex and needs longer, we'll tell you and keep you updated on progress",
      ],
      note: "Complaints raised while you are travelling are prioritised and handled as quickly as possible by our on-ground team.",
    },
    {
      h: "Complaints During Your Trip",
      paragraphs: [
        "If an issue arises during your Hajj or Umrah, please tell our on-ground team or call our 24/7 support line immediately. Many issues — such as transport, hotel or itinerary concerns — can be resolved on the spot while you are still travelling.",
        "Reporting a problem at the time it happens gives us the best chance to fix it for you quickly.",
      ],
    },
    {
      h: "If You're Not Satisfied",
      paragraphs: [
        "If you feel your complaint has not been resolved to your satisfaction, you can ask for it to be escalated to a senior member of our team for a further review.",
        "We will always do our best to reach a fair outcome and to learn from your feedback.",
      ],
    },
    {
      h: "Confidentiality & Fair Treatment",
      paragraphs: [
        "All complaints are handled with discretion and your information is only shared with those who need it to resolve your concern.",
        "We treat every customer with respect and expect the same courtesy in return so we can work together towards a resolution.",
      ],
    },
    {
      h: "Learning From Feedback",
      paragraphs: [
        "Every complaint helps us improve. We review feedback regularly to refine our services, prevent repeat issues and make the next pilgrim's journey even better.",
      ],
    },
  ],
};

export default function ComplaintsPage() {
  return <PolicyPage data={DATA} />;
}
