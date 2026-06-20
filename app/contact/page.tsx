import type { Metadata } from "next";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}`,
  openGraph: {
    title: "Contacto",
    description: `Ponte en contacto con ${personalInfo.name}`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">Contacto</h1>
      <p className="mb-8 text-lg text-gray-600">
        ¿Tienes un proyecto en mente? Escríbeme por cualquiera de estos
        canales.
      </p>

      <div className="mx-auto max-w-lg space-y-4">
        <a
          href={`mailto:${personalInfo.email}`}
          className="block rounded-lg bg-blue-600 px-6 py-3 text-center text-white transition hover:bg-blue-700"
        >
          {personalInfo.email}
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg bg-gray-200 px-6 py-3 text-center text-gray-800 transition hover:bg-gray-300"
        >
          LinkedIn
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg bg-gray-800 px-6 py-3 text-center text-white transition hover:bg-gray-900"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
