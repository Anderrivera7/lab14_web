import Image from "next/image";
import Link from "next/link";
import { projects, personalInfo } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-20 text-center">
        <div className="relative mx-auto mb-8 h-32 w-32">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            fill
            className="rounded-full object-cover"
            priority
            sizes="128px"
          />
        </div>
        <h1 className="text-4xl font-bold md:text-6xl">{personalInfo.name}</h1>
        <p className="text-xl text-gray-600 md:text-2xl">{personalInfo.title}</p>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
          {personalInfo.description}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Ver Proyectos
          </Link>
          <Link
            href="/about"
            className="rounded-lg bg-gray-200 px-6 py-3 text-gray-800 transition hover:bg-gray-300"
          >
            Sobre Mí
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-3xl font-bold">
          Proyectos Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
