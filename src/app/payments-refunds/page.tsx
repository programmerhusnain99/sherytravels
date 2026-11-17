import { pageMetadata } from "@/lib/seo";
import { PolicyPage, type PolicyPageData } from "@/components/policy/PolicyPage";

// TODO(client): review all policy wording (especially refund tiers and timeframes)
// with Shery Travels before launch to ensure it matches actual business terms.
const PATH = "/payments-refunds/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Payments & Refunds Policy | Shery Travels",
  description:
    "Read Shery Travels' payments and refunds policy — accepted payment methods, deposits, cancellation terms, refund timeframes and non-refundable costs for Hajj and Umrah bookings.",
  ogType: "article",
});

const DATA: PolicyPageData = {
  path: PATH,
  breadcrumbName: "Payments & Refunds",
  eyebrow: "Payments & Refunds",
  headBefore: "Payments & Refunds ",
  headAccent: "Policy",
  updated: "November 2026",
  heroImage: "/images/umrah/umrah-overview.webp",
  heroImageAlt: "Pilgrims arranging a Hajj and Umrah journey with Shery Travels",
  lead: [
    "This policy explains how payments are made for your Hajj, Umrah and travel bookings with Shery Travels, and how cancellations and refunds are handled.",
    "Please read it carefully before confirming a booking. By paying a deposit or the full amount for any package, you accept the terms set out below.",
  ],
  contactIntro:
    "If you have a question about a payment, an invoice, or a refund, our team is happy to help. Reach us using the details below and we'll respond within 24 hours.",
  sections: [
    {
      h: "Accepted Payment Methods",
      intro: "We accept the following secure payment methods:",
      list: [
        "Credit and debit cards (Visa, Mastercard, American Express)",
        "Bank / wire transfer to our official account",
        "Secure online payment links sent by our team",
      ],
      note: "Shery Travels will never ask you to send money to a personal account or share your full card details by email or message. Always pay through our official, secure channels.",
    },
    {
      h: "Booking Deposit & Confirmation",
      paragraphs: [
        "A deposit is required to secure your booking and hold your package, hotel and seat allocations. Your booking is only confirmed once the deposit has been received and you have been issued a written confirmation.",
        "The deposit amount depends on the package and the time remaining before departure, and will be clearly stated on your quote or invoice.",
      ],
    },
    {
      h: "Final Payment",
      paragraphs: [
        "The remaining balance is due by the date shown on your invoice, which is typically several weeks before departure. For bookings made close to the departure date, full payment may be required at the time of booking.",
        "If the balance is not received by the due date, Shery Travels reserves the right to treat the booking as cancelled and apply the cancellation terms below.",
      ],
    },
    {
      h: "Pricing & Currency",
      paragraphs: [
        "All prices are quoted in US Dollars (USD) unless stated otherwise and are per person based on the room occupancy you select.",
        "Prices are subject to availability and may change due to factors outside our control — such as airline fares, hotel rates, government fees or currency fluctuations — until your booking is confirmed and paid.",
      ],
    },
    {
      h: "Cancellations by You",
      intro: "If you need to cancel a confirmed booking, please notify us in writing. Refunds are calculated on the time between when we receive your cancellation and your departure date:",
      subs: [
        {
          title: "Refund guide",
          items: [
            "More than 60 days before departure: deposit is retained; the remaining paid amount is refundable, less any non-refundable costs already incurred",
            "30–60 days before departure: a partial refund may apply, less deposit and non-refundable costs",
            "Fewer than 30 days before departure: little to no refund may be available, as most costs are committed by this stage",
          ],
        },
      ],
      note: "Exact refund amounts depend on the airline, hotel and visa terms attached to your specific booking. The precise figures that apply to you will always be confirmed in writing before any charge.",
    },
    {
      h: "Non-Refundable Costs",
      intro: "Some costs are paid to third parties on your behalf and cannot be recovered once incurred. These are non-refundable regardless of when you cancel:",
      list: [
        "Government and visa processing fees",
        "Issued (ticketed) airline fares and airline change penalties",
        "Confirmed, non-refundable hotel nights",
        "Administrative and service charges for work already completed",
      ],
    },
    {
      h: "Refund Method & Timeframe",
      paragraphs: [
        "Approved refunds are returned using the original payment method wherever possible. Card refunds are issued back to the card used for payment.",
        "Once a refund is approved, we aim to process it within 14 business days. The time for the funds to appear in your account afterwards depends on your bank or card provider.",
      ],
    },
    {
      h: "Changes & Amendments",
      paragraphs: [
        "If you wish to change the dates, hotel, room type or travellers on a confirmed booking, we will do our best to accommodate you. Changes are subject to availability and to any fees charged by airlines, hotels or visa authorities.",
        "An administration fee may apply to amendments, which will be confirmed before any change is made.",
      ],
    },
    {
      h: "Changes or Cancellations by Shery Travels",
      paragraphs: [
        "In rare cases we may need to change or cancel a booking — for example due to events beyond our control (see our Terms & Conditions on Force Majeure), or because minimum group numbers are not met.",
        "If this happens, we will offer you a suitable alternative where possible, or a refund of the amounts paid that we are able to recover. We are not liable for incidental costs you arrange independently, such as personal onward travel.",
      ],
    },
    {
      h: "Chargebacks & Payment Disputes",
      paragraphs: [
        "If you believe there is an error with a payment, please contact us first so we can resolve it quickly. Raising a chargeback for a legitimate, policy-compliant charge may delay the resolution of your query.",
        "We keep clear records of all bookings, invoices and communications to help resolve any dispute fairly.",
      ],
    },
  ],
};

export default function PaymentsRefundsPage() {
  return <PolicyPage data={DATA} />;
}
