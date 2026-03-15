import { PersonalProjects } from './PersonalProjects';
import { SchoolProjects } from './SchoolProjects';

export function Projects() {
  const personalProjects = [
    {
      title: "Homelab",
      description: "My personal homelab setup",
      image: "a",
      tags: ['Docker', 'GitLab', 'Kubernetes', 'Kafka', 'Wireguard', 'CoreDNS', 'Traefik'],
    },
    {
      title: 'Agent(?)',
      description: 'A learning project to make use of local LLM models to understand how I can use LLMs without frameworks.',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM0OTY1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Go'],
      github: 'https://github.com/mahopon/agent',
    },
    {
      title: 'SmolEarl',
      description: 'An URL shortener API',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM0OTY1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Go', 'net/http', 'PostgreSQL', 'Redis', 'Prometheus'],
      github: 'https://github.com/mahopon/smolearl',
    },
  ];

  const schoolProjects = [
    {
      title: 'SC4053 - DEX',
      description: 'An orderbook style DEX made for SC4053 - Blockchain Technology',
      image: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM0OTY1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Solidity', 'Hardhat', 'Typescript', 'React', 'Go', 'Echo', 'Bash'],
      github: 'https://github.com/mahopon/SC4053-DEX',
    },
    {
      title: 'SC2006 - Parkit!',
      description: 'Project done for SC2006 - Software Engineering. I handled the backend flask server as well as importing csv data into SQLite',
      image: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM0OTY1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'Flask', 'SQLite'],
      github: 'https://github.com/mahopon/SC2006',
    },
    {
      title: 'SC2002 - Health Management System',
      description: 'Project done for SC2002 - Object Oriented Programming. This is a project focused on applying SOLID principles as well as patterns such as Singleton and Repository pattern',
      image: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM0OTY1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Java'],
      github: 'https://github.com/mahopon/HMS',
    },
    {
      title: 'SC1015 - Forecasting the Future: Predictive Modeling for Diabetes',
      description: 'Project done for SC1015 - Intro to Data Science & AI. This is a project focused on applying models learnt from the module on a Kaggle dataset to predict whether a person has diabetes based on a combination of factors. I did data cleaning and Naive Bayes classification for this project.',
      image: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM0OTY1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'Jupyter Notebook', 'scikit-learn'],
      github: 'https://github.com/mahopon/sc1015-miniprj',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PersonalProjects projects={personalProjects} />
        <SchoolProjects projects={schoolProjects} />
      </div>
    </section>
  );
}
