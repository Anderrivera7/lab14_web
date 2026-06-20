import type { Metadata } from "next";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
    "Docker",
    "AWS",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Sobre Mí</h1>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              ¡Hola! Soy {personalInfo.name}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Soy un desarrollador full stack apasionado por crear experiencias
                web excepcionales. Con más de X años de experiencia, me
                especializo en construir aplicaciones modernas y escalables.
              </p>
              <p>
                Mi enfoque está en escribir código limpio, mantenible y
                eficiente, siempre buscando las mejores prácticas y las últimas
                tecnologías para entregar productos de alta calidad.
              </p>
              <p>
                Cuando no estoy programando, me gusta contribuir a proyectos de
                código abierto, escribir artículos técnicos y aprender nuevas
                tecnologías.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg bg-white p-4 text-center shadow-md transition-shadow hover:shadow-lg"
              >
                <p className="font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
