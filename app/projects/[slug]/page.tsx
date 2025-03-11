import { projectsData } from "@/lib/data";  // Import des données
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaGithub } from "react-icons/fa"; // Import de l'icône GitHub

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Recherche du projet avec le slug correspondant
  const project = projectsData.find((p) => p.slug === params.slug);

  // Si le projet n'existe pas, retourne une page 404
  if (!project) {
    return notFound();
  }

  // Recherche du premier lien GitHub trouvé dans les sections si non défini au niveau du projet
  const githubLink = project.githubLink || project.sections.find(section => section.githubLink)?.githubLink;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Titre du projet */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        {project.title}
      </h1>
      
      {/* Bouton GitHub, s'affiche uniquement si githubLink existe */}
      {githubLink && (
        <div className="mb-6">
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-lg font-medium transition"
          >
            <FaGithub className="mr-2" />
            See On Github
          </a>
        </div>
      )}

      {/* Images du projet */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.images?.length > 0 ? (
          project.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${project.title} image ${index + 1}`}
              width={2000}
              height={1800}
              className="rounded-lg shadow-lg"
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Sections du projet */}
      <div className="mt-8 space-y-8">
        {project.sections?.length > 0 ? (
          project.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">{section.content}</p>
              {section.image && (
                <div className="mt-4">
                  <Image
                    src={section.image}
                    alt={`Image for ${section.title}`}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No section available</p>
        )}
      </div>
      
      {/* Technologies utilisées */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold"> Used Technologies  :</h2>
        <ul className="list-disc list-inside mt-2 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <li key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md">{tag}</li>
          ))}
        </ul>
      </div>
      
      {/* Bouton de retour aux projets */}
      <div className="mt-8">
        <a
          href="/#projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          ← Back to Projects
        </a>
      </div>
    </div>
  );
}
