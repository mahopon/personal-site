import { Mail, MapPin, Github, Linkedin, Download } from 'lucide-react';

export function Sidebar() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'SQLAlchemy', 'Go', 'net/http', 'Echo', 'REST APIs']
    },
    {
      name: 'Database',
      skills: ['PostgreSQL', 'Redis']
    },
    {
      name: 'Messaging',
      skills: ['Kafka', 'RabbitMQ']
    },
    {
      name: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'Kubernetes', 'GitLab', 'CI/CD', 'ArgoCD']
    },
    {
      name: 'Monitoring',
      skills: ['Prometheus', 'Grafana', 'Loki', 'Node-Exporter', 'Promtail']
    },
    {
      name: 'Other',
      skills: ['AI-assisted Coding']
    }
  ];

  return (
    <aside className="lg:w-2/5 bg-[var(--color-card)] border-r border-[var(--color-border)] p-8">
      <div className="max-w-xl mx-auto space-y-8">
        {/* Header / Bio */}
        <div className="text-center lg:text-left">
          <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] mb-6 flex items-center justify-center overflow-hidden">
            <span className="text-5xl text-white">CY</span>
          </div>
          <h1 className="text-3xl mb-2">Tan Chong Yao</h1>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-6">
            A computer science student aspiring to be a backend developer. I enjoy learning new tools and always looking to explore more. I enjoy building systems end-to-end, from infrastructure to development to deployment.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 mb-6">
            <a href="mailto:tan.cy01@outlook.com" className="flex items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors">
              <Mail className="w-4 h-4" />
              <span>tan.cy01@outlook.com</span>
            </a>
            <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start mb-6">
            <a
              href="https://github.com/mahopon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/chong-yao-tan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Download CV */}
          <button className="w-full bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl mb-4">Skills</h2>
          {skillCategories.map((category) => (
            <div key={category.name} className="mb-4">
              <h3 className="font-medium text-sm mb-2 text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl mb-4">Education</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-[var(--color-primary)] pl-4">
              <h3 className="font-medium">Bachelor of Computing in Computer Science</h3>
              <p className="text-[var(--color-muted-foreground)] text-sm">Nanyang Technological University, Singapore</p>
              <p className="text-[var(--color-muted-foreground)] text-sm">2023 - 2027 (Expected)</p>
            </div>
          </div>
          <br />
          <div className="space-y-4">
            <div className="border-l-2 border-[var(--color-primary)] pl-4">
              <h3 className="font-medium">Diploma with Merit in Multimedia & Infocomm Technology</h3>
              <p className="text-[var(--color-muted-foreground)] text-sm">Nanyang Polytechnic, Singapore</p>
              <p className="text-[var(--color-muted-foreground)] text-sm">2017 - 2020</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h2 className="text-xl mb-4">Work Experience</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-[var(--color-primary)] pl-4">
              <h3 className="font-medium">Software Engineer Intern</h3>
              <p className="text-[var(--color-muted-foreground)] text-sm">ST Engineering</p>
              <p className="text-[var(--color-muted-foreground)] text-sm">Jan 2026 - Present</p>
              <div className="mt-2 space-y-1">
                <ul className="list-disc list-inside text-[var(--color-muted-foreground)] text-sm">
                  <li>To fill in!</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="space-y-4">
            <div className="border-l-2 border-[var(--color-primary)] pl-4">
              <h3 className="font-medium">Software Engineer Intern</h3>
              <p className="text-[var(--color-muted-foreground)] text-sm">Emplity</p>
              <p className="text-[var(--color-muted-foreground)] text-sm">May 2025 - Jul 2025</p>
              <div className="mt-2 space-y-1">
                <ul className="list-disc list-inside text-[var(--color-muted-foreground)] text-sm">
                  <li>To fill in!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-xl mb-4">Certifications</h2>
          <div className="space-y-3">
            <div className="p-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg">
              <h3 className="font-medium mb-1">No certs for now :(</h3>
              <p className="text-[var(--color-muted-foreground)] text-sm">Will be looking to complete some in the future!</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
