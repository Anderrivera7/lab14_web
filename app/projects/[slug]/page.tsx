import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="mb-8 inline-block text-blue-600 hover:underline"
      >
        ← Volver a Proyectos
      </Link>

      <article>
        <h1 className="mb-6 text-4xl font-bold">{project.title}</h1>

        <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        <p className="mb-8 text-lg text-gray-700">{project.description}</p>

        <div className="mb-6">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              Ver Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-800 px-6 py-3 text-white transition hover:bg-gray-900"
            >
              Ver Código
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
