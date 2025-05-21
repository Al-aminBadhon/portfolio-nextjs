import {
  Column,
  Flex,
  Heading,
  Button,
  IconButton,
  SmartImage,
  Text,
  Tag,
} from "@/once-ui/components";

import styles from "@/components/about/about.module.scss";
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Column
    className={styles.card}
    background="neutral-alpha-weak"
    radius="m"
    padding="m"
    gap="m"
  >
    {/* Project Image */}
    <SmartImage
      src={project.imageUrl}
      alt={project.title}
      aspectRatio="16/9"
      radius="s"
    />

    {/* Project Title */}
    <Heading variant="heading-strong-l">{project.title}</Heading>

    {/* Technologies */}
    <Flex gap="s" wrap>
      {project.technologies.map((tech) => (
        <Tag key={tech} label={tech} variant="neutral" size="s" />
      ))}
    </Flex>

    {/* Description */}
    <Text variant="body-default-m">{project.description}</Text>

    {/* Action Buttons */}
    <Flex gap="s" marginTop="s">
      {project.githubUrl && (
        <Button
          href={project.githubUrl}
          label="View Code"
          variant="secondary"
          size="s"
          prefixIcon="github"
        />
      )}
      {project.demoUrl && (
        <Button
          href={project.demoUrl}
          label="Live Demo"
          variant="primary"
          size="s"
          prefixIcon="externalLink"
        />
      )}
    </Flex>
  </Column>
);
