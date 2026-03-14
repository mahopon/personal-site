import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  technicalDocs?: string;
}

interface PersonalProjectsProps {
  projects: Project[];
}

function LinkButton({ 
  href, 
  targetBlank = true, 
  children,
  icon
}: { 
  href?: string; 
  targetBlank?: boolean; 
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  if (!href) {
    return (
      <div className="flex items-center gap-2 text-gray-500 cursor-not-allowed">
        {icon}
        {children}
      </div>
    );
  }

  return (
    <a 
      href={href} 
      target={targetBlank ? "_blank" : undefined} 
      rel={targetBlank ? "noopener noreferrer" : undefined} 
      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
    >
      {icon}
      {children}
    </a>
  );
}

export function PersonalProjects({ projects }: PersonalProjectsProps) {
  return (
    <section id="personal-projects" className="mb-16">
      <h2 className="text-4xl sm:text-5xl text-center text-white mb-12">Personal Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative h-64 overflow-hidden bg-secondary">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <LinkButton 
                  href={project.github}
                  icon={<Github size={20} />}
                >
                  Code
                </LinkButton>
                <LinkButton 
                  href={project.demo}
                  icon={<ExternalLink size={20} />}
                >
                  Live Demo
                </LinkButton>
                <LinkButton 
                  href={project.technicalDocs}
                  icon={<ExternalLink size={20} />}
                >
                  Technical Docs
                </LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
