import { Accessibility, GraduationCap, Users, User, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { DropBounce } from "@/components/motion/DropBounce";
import { Button } from "@/components/ui/Button";

type Audience = {
  icon: LucideIcon;
  title: string;
  bodyDesktop: string;
  bodyMobile: string;
};

const AUDIENCES: Audience[] = [
  {
    icon: Accessibility,
    title: "Older & Mobility-Impaired",
    bodyDesktop: "Wheelchair access, medical support, hotels near the sites.",
    bodyMobile: "Wheelchair access and medical support.",
  },
  {
    icon: GraduationCap,
    title: "First-Time Pilgrims",
    bodyDesktop: "Guided rituals and step-by-step support from Ihram to Jamrat.",
    bodyMobile: "Guided rituals, step-by-step help.",
  },
  {
    icon: Users,
    title: "Families & Groups",
    bodyDesktop: "Coordinated travel, communal accommodation and shared meals.",
    bodyMobile: "Coordinated travel, shared meals.",
  },
  {
    icon: User,
    title: "Solo Pilgrims",
    bodyDesktop: "Personal reflection with full logistical support throughout.",
    bodyMobile: "Safe, well-planned personal journey.",
  },
];

/** "Hajj experiences for all pilgrims" — audience cards + packages CTA. */
export function HajjExperiences() {
  return (
    <Section bg="white" className="py-14 dt:py-20">
      <Container>
        {/* Sub-heading (desktop only) */}
        <Reveal className="mb-10 hidden text-center dt:block">
          <AccentHeading
            as="h2"
            before="Hajj experiences for "
            accent="all"
            after=" pilgrims"
            className="mb-3 text-[32px] leading-[1.2] text-navy"
          />
          <p className="mx-auto max-w-[640px] text-[16.5px] font-light leading-[1.68] text-navy/85 text-pretty">
            Whether you are travelling solo, with family, for the first time, or need extra support
            — we tailor the journey to you.
          </p>
        </Reveal>

        {/* Audience cards — mobile 2x2 grid */}
        <Stagger className="grid grid-cols-2 gap-3 dt:hidden">
          {AUDIENCES.map(({ icon: Icon, title, bodyMobile }) => (
            <StaggerItem
              key={title}
              className="rounded-2xl border border-navy/10 bg-ice p-5 text-center"
            >
              <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-gold bg-lightblue">
                <Icon size={22} className="text-navy" aria-hidden />
              </span>
              <h4 className="mb-1.5 font-serif text-[15px] font-bold leading-[1.3] text-navy">
                {title}
              </h4>
              <p className="text-[13px] font-light leading-[1.5] text-navy/85 text-pretty">
                {bodyMobile}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Audience cards — desktop row with dividers */}
        <div className="mx-auto hidden max-w-[1100px] grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start dt:grid">
          {AUDIENCES.map(({ icon: Icon, title, bodyDesktop }, i) => (
            <div key={title} className="contents">
              {i > 0 && <div aria-hidden className="mx-2 self-stretch w-px bg-navy/10" />}
              <div className="px-4 text-center">
                <span className="mx-auto mb-4 grid h-[60px] w-[60px] place-items-center rounded-full border-[1.5px] border-gold bg-ice">
                  <Icon size={26} className="text-navy" aria-hidden />
                </span>
                <h4 className="mb-2 font-serif text-[17px] font-bold leading-[1.3] text-navy">
                  {title}
                </h4>
                <p className="text-[14px] font-light leading-[1.55] text-navy/85 text-pretty">
                  {bodyDesktop}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <DropBounce className="mt-7 text-center dt:mt-10">
          <Button
            href="/hajj/usa-packages/"
            variant="gold"
            size="lg"
            className="w-full tracking-[0.06em] uppercase dt:w-auto"
          >
            <span>View Hajj Packages</span>
            <ArrowRight size={18} aria-hidden />
          </Button>
        </DropBounce>
      </Container>
    </Section>
  );
}
