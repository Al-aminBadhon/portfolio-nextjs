// components/about/SkillCard.tsx
import { Column, Flex, Text } from "@/once-ui/components";
import styles from "./skillcard.module.scss";
import React from "react";
import Image from "next/image";
import { person, about, social } from "@/app/resources/content";

export const SkillCard = () => {
  return (
    <Flex fillWidth gap="m" direction="column">
      {/* Programming Languages */}
      {about.technical.skills.map((skill) => (
        <Column gap="s">
          <Text variant="heading-strong-l"> {skill.category}</Text>

          <Flex gap="xs" wrap>
            {skill.technologies.map((tech) => (
              <Flex
                direction="column"
                horizontal="center"
                vertical="center"
                style={{ padding: "5px", borderColor: "gray" }}
                radius="s"
                border="neutral-strong" // Solid black
                borderWidth={1} // Thin but visible
                className={styles.skillCard}
              >
                <Flex horizontal="center" vertical="center">
                  <Image
                    src={`/images/logo/${tech.icon}`}
                    alt={`${tech.name} logo`}
                    width={25} // Optimal small size
                    height={25}
                    className={styles.logo}
                  />
                  <Text
                    variant="body-default-s" // Extra small text
                    className={styles.skillName}
                    style={{
                      padding: "5px",
                      fontWeight: "bold",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {tech.name}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Column>
      ))}
    </Flex>
  );
};
