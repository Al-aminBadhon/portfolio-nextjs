"use client";
import { Column, Heading, Text } from "@/once-ui/components";
import { portfolio } from "@/app/resources/content";
import styles from "@/components/portfolio/portfolio.module.scss";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";

export default function Portfolio() {
  return (
    <Column maxWidth="l" paddingX="m" className={styles.container}>
      {/* Header */}
      <Column gap="m" marginBottom="xl">
        <Heading variant="display-strong-m">My Projects</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {portfolio.description}
        </Text>
      </Column>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {portfolio.projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </Column>
  );
}
