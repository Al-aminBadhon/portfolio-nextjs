// components/about/SkillCard.tsx
import { Column, Flex, Text } from "@/once-ui/components";
import styles from "./skillcard.module.scss";
import React from "react";
import Image from "next/image";
interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

export const SkillCard = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <Flex fillWidth gap="xl" direction="column">
      {/* Programming Languages */}
      <Column gap="m">
        <Text variant="heading-strong-l">Programming Languages</Text>
        <Flex gap="xs" wrap>
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
                src={`/images/logo/${name.toLowerCase()}.svg`}
                alt={`${name} logo`}
                width={25} // Optimal small size
                height={25}
                className={styles.logo}
              />
              <Text
                variant="body-default-s" // Extra small text
                className={styles.skillName}
                style={{
                  padding: "5px",
                  fontWeight: "strong",
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                }}
              >
                {name}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Column>
    </Flex>
  );
};
