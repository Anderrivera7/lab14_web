import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora mi colección de proyectos de desarrollo web y aplicaciones",
  openGraph: {
    title: "Proyectos",
    description:
      "Explora mi colección de proyectos de desarrollo web y aplicaciones",
    images: ["/og-projects.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">Mis Proyectos</h1>
      <p className="mb-12 text-lg text-gray-600">
        Una colección de proyectos en los que he trabajado
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
