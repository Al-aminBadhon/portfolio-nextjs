import {
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import styles from "@/components/portfolio/portfolio.module.scss";
import { Project } from "@/app/resources/type";

interface PortfolioCardProps {
  project: Project;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Column
      className={styles.card}
      gap="m"
      padding="m"
      data-border="rounded"
      data-shadow="m"
    >
      {/* Project Image */}
      {project.image && (
        <SmartImage
          src={project.image}
          alt={project.title}
          aspectRatio="16/9"
          radius="s"
        />
      )}

      {/* Project Details */}
      <Column gap="xs">
        <Heading variant="heading-strong-m">{project.title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {project.shortDescription}
        </Text>
      </Column>

      {/* Technologies */}
      <Flex wrap gap="xs">
        {project.technologies.map((tech) => (
          <Tag key={tech} label={tech} variant="neutral" size="m" />
        ))}
      </Flex>

      {/* Action Buttons */}
      <Flex gap="s">
        {project.demoUrl && (
          <Button
            href={project.demoUrl}
            label="View Demo"
            size="s"
            variant="primary"
            style={{ borderRadius: "10px" }}
            prefixIcon="externalLink"
          />
        )}
        <Icon name="open-in-new" size="s" />
        <Icon name="web" size="s" />
        {project.sourceUrl && (
          <Button
            href={project.sourceUrl}
            label="Source Code"
            size="s"
            variant="secondary"
            prefixIcon="github"
            style={{ borderRadius: "10px" }}
          />
        )}
      </Flex>
    </Column>
  );
}
