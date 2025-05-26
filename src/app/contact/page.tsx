"use client";
import {
  Column,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
  Icon,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import styles from "@/components/about/about.module.scss";
import { social } from "@/app/resources/content";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const metadata = {
  title: "Contact Me",
  description: "Feel free to reach out to me via this form or my socials.",
  baseURL,
  path: "/contact",
};

export default function Contact() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      setIsSubmitted(true);
      setLoading(false);

      setTimeout(() => {
        router.push("/about");
      }, 2000);
    } catch (error) {
      console.error("Form submission failed", error);
      setLoading(false);
    }
  };
  return (
    <Column
      fillWidth
      maxWidth="m"
      paddingY="40"
      className={styles.blockAlign}
      gap="s"
      horizontal="center"
    >
      <Heading variant="display-strong-xs">Contact Me</Heading>

      <Text variant="heading-default-l" style={{ textAlign: "justify" }}>
        Have a question, project idea, or just want to say hello? I’d love to
        hear from you.
      </Text>
      <Column fillWidth border="neutral-strong" padding="s" radius="s">
        {isSubmitted ? (
          <Text style={{ textAlign: "center", padding: "16px" }}>
            ✅ Thank you for contacting me! Redirecting to the About page...
          </Text>
        ) : (
          <form onSubmit={handleSubmit}>
            <Column gap="m">
              <Input id="name" name="name" label="Your Name" required />
              <Input
                id="email"
                type="email"
                name="email"
                label="Your Email"
                required
              />
              <Textarea
                id="message"
                name="message"
                label="Message"
                rows={6}
                required
              />
              <Button type="submit" label="Send Message" />
            </Column>
          </form>
        )}
      </Column>
      {social.length > 0 && (
        <Column gap="xs" paddingTop="xs">
          <Flex gap="12" wrap horizontal="start">
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    variant="tertiary"
                  />
                )
            )}
          </Flex>
        </Column>
      )}

      <Flex gap="8" vertical="center" paddingTop="m">
        <Icon name="globe" onBackground="accent-strong" />
        <Text>Based in Canada</Text>
      </Flex>
    </Column>
  );
}
