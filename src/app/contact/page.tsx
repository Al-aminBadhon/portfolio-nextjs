import { profile } from "@/data/profile";
import { social } from "@/data/social";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialIcon } from "@/components/layout/SocialIcons";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with B M AL-amin Badhon.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let’s talk about useful software."
      description={profile.availability.detail}
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <Pill variant="filled">{profile.availability.label}</Pill>
          <p className="mt-5 text-sm text-muted">Prefer email?</p>
          <a href={`mailto:${profile.email}`} className="mt-1 inline-block text-ink hover:underline">
            {profile.email}
          </a>
          <ul className="mt-6 space-y-2">
            {social.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
                  target={item.icon === "email" ? undefined : "_blank"}
                  rel={item.icon === "email" ? undefined : "noreferrer"}
                >
                  <SocialIcon icon={item.icon} className="h-4 w-4" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
