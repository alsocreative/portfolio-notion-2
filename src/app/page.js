'use client';

import Layout from '@/components/layout/Layout';
import NotionPage from '@/components/ui/NotionPage';
import NotionBlock from '@/components/ui/NotionBlock';
import { ProgressBar, Tag, Badge, Avatar } from '@/components/ui/Components';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Star } from 'lucide-react';

export default function Home() {
  const { personal, skills, experience, projects } = portfolioData;

  return (
    <Layout title="Portfolio">
      <NotionPage
        title={personal.name}
        subtitle={personal.title}
        cover="/api/placeholder/1200/400"
        icon="👋"
      >
        {/* Bio Section */}
        <NotionBlock type="callout" icon="💫">
          <div>
            <h3 className="font-semibold mb-2">{personal.subtitle}</h3>
            <p className="text-[var(--muted-foreground)]">{personal.bio}</p>
          </div>
        </NotionBlock>

        {/* Quick Info */}
        <NotionBlock>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${personal.email}`} className="text-[var(--notion-blue-6)] hover:underline">
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </div>
          </div>
        </NotionBlock>

        {/* Social Links */}
        <NotionBlock>
          <div className="flex gap-3">
            <a 
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="notion-button notion-button-secondary flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="notion-button notion-button-secondary flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={personal.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="notion-button notion-button-secondary flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </a>
          </div>
        </NotionBlock>

        <NotionBlock type="divider" />

        {/* Featured Skills */}
        <NotionBlock type="heading2">
          🚀 Core Technologies
        </NotionBlock>

        <NotionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.technical.slice(0, 8).map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                value={skill.level}
                color={skill.level >= 90 ? 'green' : skill.level >= 80 ? 'blue' : 'yellow'}
              />
            ))}
          </div>
        </NotionBlock>

        <NotionBlock type="divider" />

        {/* Recent Experience */}
        <NotionBlock type="heading2">
          💼 Latest Experience
        </NotionBlock>

        {experience.slice(0, 2).map((exp, index) => (
          <NotionBlock key={index} className="notion-card">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{exp.position}</h3>
                  <p className="text-[var(--notion-blue-6)]">{exp.company}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{exp.location}</p>
                </div>
                <Badge color="green">
                  {exp.endDate === 'Present' ? 'Current' : 'Previous'}
                </Badge>
              </div>
              
              <p className="text-[var(--muted-foreground)]">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Tag key={techIndex} color="blue" size="small">
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </NotionBlock>
        ))}

        <NotionBlock type="divider" />

        {/* Featured Projects */}
        <NotionBlock type="heading2">
          🎯 Featured Projects
        </NotionBlock>

        <NotionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => (
              <div key={index} className="notion-card space-y-4">
                <div className="aspect-video bg-[var(--accent)] rounded-md flex items-center justify-center">
                  <span className="text-[var(--muted-foreground)]">Project Preview</span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex} size="small" color="gray">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <a 
                      href={project.github}
                      className="text-sm text-[var(--notion-blue-6)] hover:underline"
                    >
                      View Code
                    </a>
                    <a 
                      href={project.demo}
                      className="text-sm text-[var(--notion-blue-6)] hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </NotionBlock>

        <NotionBlock type="divider" />

        {/* Quick Stats */}
        <NotionBlock type="heading2">
          📊 Quick Stats
        </NotionBlock>

        <NotionBlock>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="notion-card text-center">
              <div className="text-2xl font-bold text-[var(--notion-green-6)]">5+</div>
              <div className="text-sm text-[var(--muted-foreground)]">Years Experience</div>
            </div>
            <div className="notion-card text-center">
              <div className="text-2xl font-bold text-[var(--notion-blue-6)]">{projects.length}</div>
              <div className="text-sm text-[var(--muted-foreground)]">Projects Built</div>
            </div>
            <div className="notion-card text-center">
              <div className="text-2xl font-bold text-[var(--notion-yellow-6)]">{skills.technical.length}+</div>
              <div className="text-sm text-[var(--muted-foreground)]">Technologies</div>
            </div>
            <div className="notion-card text-center">
              <div className="text-2xl font-bold text-[var(--notion-red-6)]">100k+</div>
              <div className="text-sm text-[var(--muted-foreground)]">Users Impacted</div>
            </div>
          </div>
        </NotionBlock>

        {/* Call to Action */}
        <NotionBlock type="callout" icon="🤝">
          <div>
            <h3 className="font-semibold mb-2">Let&apos;s work together!</h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              I&apos;m always interested in hearing about new opportunities and exciting projects.
            </p>
            <div className="flex gap-3">
              <a 
                href="/contact"
                className="notion-button notion-button-primary"
              >
                Get in touch
              </a>
              <a 
                href="/resume.pdf"
                target="_blank"
                className="notion-button notion-button-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </NotionBlock>
      </NotionPage>
    </Layout>
  );
}
