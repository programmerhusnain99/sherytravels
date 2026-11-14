import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ReadMore } from "@/components/ui/ReadMore";

/** "Our Hajj Services" — copy + Inquire CTA on the left, arch artwork on the right. */
export function HajjServices() {
  return (
    <Section bg="white" className="relative overflow-hidden pb-14 dt:pb-24">
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-gold/15 dt:left-1/2 dt:right-auto dt:h-[1000px] dt:w-[1000px] dt:-translate-x-1/2 dt:-top-0"
      />

      <Container className="relative pt-12 dt:pt-[88px]">
        <div className="grid items-stretch gap-10 dt:grid-cols-[1fr_1.02fr] dt:gap-16">
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

          {/* Right — pre-styled Hajj image. Fills the column so its height
              matches the copy (instead of its full natural aspect ratio). */}
          <div className="relative mx-auto h-[280px] w-full max-w-[460px] dt:h-full dt:max-w-none">
            <Image
              src="/images/home/home-hajj-hero.webp"
              alt="Pilgrims performing Hajj"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
