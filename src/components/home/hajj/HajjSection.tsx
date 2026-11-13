import Image from "next/image";
import { Accessibility, GraduationCap, Users, User, ArrowRight, MessageCircle, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ReadMore } from "@/components/ui/ReadMore";

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

/** Hajj services — navy band with an arch photo and an overlapping white panel of audience cards. */
export function HajjSection() {
  return (
    <Section bg="ice" className="relative overflow-hidden">
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-gold/15 dt:left-1/2 dt:right-auto dt:h-[1000px] dt:w-[1000px] dt:-translate-x-1/2 dt:-top-0"
      />

      {/* Hero — copy + CTAs on the left, twin arch photos on the right */}
      <Container className="relative pt-12 dt:pt-[88px]">
        <div className="grid items-center gap-10 dt:grid-cols-[1fr_1.02fr] dt:gap-16">
          {/* Left — copy */}
          <div className="text-center dt:text-left">
            <Reveal as="div">
              <Eyebrow align="center" tone="navy" className="mb-4 dt:justify-start">
                The fifth pillar
              </Eyebrow>
              <AccentHeading
                as="h2"
                before="Our "
                accent="Hajj"
                after=" Services"
                className="mb-4 text-[32px] leading-[1.2] text-navy dt:text-[50px] dt:leading-[1.14]"
              />
            </Reveal>
            <ReadMore
              id="rm-hajj"
              className="mx-auto max-w-[560px] dt:mx-0"
              leadClassName="text-[16px] font-light leading-[1.68] text-navy/90 text-pretty dt:text-[17px] dt:leading-[1.72]"
              lead={
                <>
                  A once-in-a-lifetime journey is all about sacrifice, unity, and submission to the
                  Almighty. We are here to ensure you are able to fulfil this journey without any
                  hiccups in the easiest way possible. From Ihram guidance to Jamart and more, we are
                  with you every step of the way during each phase.
                </>
              }
            >
              <p className="mt-4 text-[16px] font-light leading-[1.68] text-navy/90 text-pretty dt:text-[17px] dt:leading-[1.72]">
                Our close ties in the local area give us the advantage to offer reliable
                transportation, clean and accessible accommodation, and smooth coordination for
                families and individuals.
              </p>
            </ReadMore>

            <div className="mt-8 flex justify-center dt:justify-start">
              <Button
                href="/contact/"
                variant="gold"
                size="lg"
                className="w-full tracking-[0.06em] uppercase sm:w-auto"
              >
                <MessageCircle size={18} aria-hidden />
                <span>Inquire Now</span>
              </Button>
            </div>
          </div>

          {/* Right — pre-styled Hajj image (arch shape baked into the artwork) */}
          <div className="relative mx-auto w-full max-w-[460px] dt:max-w-none">
            <Image
              src="/images/home/home-hajj-hero.webp"
              alt="Pilgrims performing Hajj"
              width={560}
              height={460}
              sizes="(max-width: 900px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </Container>

      {/* White audience panel */}
      <div className="relative mt-14 rounded-t-[22px] bg-white text-navy dt:mt-20">
        <Container className="pb-11 pt-12 dt:pb-[72px] dt:pt-16">
          {/* Sub-heading (desktop only) */}
          <div className="mb-10 hidden text-center dt:block">
            <AccentHeading
              as="h3"
              before="Hajj experiences for "
              accent="all"
              after=" pilgrims"
              className="mb-3 text-[32px] leading-[1.2] text-navy"
            />
            <p className="mx-auto max-w-[640px] text-[16.5px] font-light leading-[1.68] text-navy/85 text-pretty">
              Whether you are travelling solo, with family, for the first time, or need extra
              support — we tailor the journey to you.
            </p>
          </div>

          {/* Audience cards — mobile 2x2 grid */}
          <Stagger className="grid grid-cols-2 gap-3 dt:hidden">
            {AUDIENCES.map(({ icon: Icon, title, bodyMobile }) => (
              <StaggerItem
                key={title}
                className="group rounded-2xl border border-navy/10 bg-ice p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_34px_-18px_rgba(26,62,110,0.3)] motion-reduce:transform-none"
              >
                <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-gold bg-lightblue transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
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
          <div className="mt-7 text-center dt:mt-10">
            <Button
              href="/hajj/usa-packages/"
              variant="gold"
              size="lg"
              className="w-full tracking-[0.06em] uppercase dt:w-auto"
            >
              <span>View Hajj Packages</span>
              <ArrowRight size={18} aria-hidden />
            </Button>
          </div>
        </Container>
      </div>
    </Section>
  );
}
