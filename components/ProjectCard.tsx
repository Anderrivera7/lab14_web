import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
