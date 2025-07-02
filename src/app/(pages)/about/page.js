'use client';

import Layout from '@/components/layout/Layout';
import NotionPage from '@/components/ui/NotionPage';
import NotionBlock from '@/components/ui/NotionBlock';
import NotionDatabase from '@/components/ui/NotionDatabase';
import { ProgressBar, Tag, Badge, Avatar } from '@/components/ui/Components';
import { portfolioData } from '@/data/portfolio';
import { Calendar, MapPin, Award, Book, Target, Heart, Coffee, Gamepad2 } from 'lucide-react';

export default function About() {
  const { personal, skills, education, certifications } = portfolioData;

  const skillColumns = [
    {
      key: 'name',
      title: 'Technology',
      render: (value) => <span className="font-medium">{value}</span>
    },
    {
      key: 'category',
      title: 'Category',
      render: (value) => <Tag size="small" color="blue">{value}</Tag>
    },
    {
      key: 'level',
      title: 'Proficiency',
      render: (value) => (
        <div className="w-full">
          <ProgressBar 
            value={value} 
            max={100} 
            size="small" 
            showValue={false}
            color={value >= 90 ? 'green' : value >= 80 ? 'blue' : 'yellow'}
          />
        </div>
      )
    }
  ];

  const educationColumns = [
    {
      key: 'institution',
      title: 'Institution',
      render: (value) => <span className="font-medium">{value}</span>
    },
    {
      key: 'degree',
      title: 'Degree',
      render: (value) => <span>{value}</span>
    },
    {
      key: 'endDate',
      title: 'Graduation',
      render: (value) => <span className="text-[var(--muted-foreground)]">{value}</span>
    }
  ];

  const certificationColumns = [
    {
      key: 'name',
      title: 'Certification',
      render: (value) => <span className="font-medium">{value}</span>
    },
    {
      key: 'issuer',
      title: 'Issuer',
      render: (value) => <span>{value}</span>
    },
    {
      key: 'date',
      title: 'Date',
      render: (value) => <span className="text-[var(--muted-foreground)]">{value}</span>
    }
  ];

  return (
    <Layout title="About Me">
      <NotionPage
        title="About Me"
        subtitle="Get to know me better"
        icon="👨‍💻"
      >
        {/* Personal Introduction */}
        <NotionBlock type="callout" icon="✨">
          <div>
            <h3 className="font-semibold mb-2">Who I Am</h3>
            <p className="text-[var(--muted-foreground)]">
              {personal.bio} I believe in writing clean, maintainable code and creating 
              user experiences that make a difference.
            </p>
          </div>
        </NotionBlock>

        {/* Personal Details */}
        <NotionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="notion-card space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location & Contact
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-[var(--muted-foreground)]">Based in:</span>
                  <span className="ml-2">{personal.location}</span>
                </div>
                <div>
                  <span className="text-[var(--muted-foreground)]">Email:</span>
                  <a href={`mailto:${personal.email}`} className="ml-2 text-[var(--notion-blue-6)] hover:underline">
                    {personal.email}
                  </a>
                </div>
                <div>
                  <span className="text-[var(--muted-foreground)]">Phone:</span>
                  <span className="ml-2">{personal.phone}</span>
                </div>
                <div>
                  <span className="text-[var(--muted-foreground)]">Website:</span>
                  <a href={personal.website} className="ml-2 text-[var(--notion-blue-6)] hover:underline">
                    {personal.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="notion-card space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Target className="w-5 h-5" />
                Current Focus
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Badge color="green">Active</Badge>
                  <span>Building scalable web applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge color="blue">Learning</Badge>
                  <span>Advanced React patterns & performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge color="yellow">Exploring</Badge>
                  <span>AI/ML integration in web apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge color="red">Available</Badge>
                  <span>Open to new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </NotionBlock>

        <NotionBlock type="divider" />

        {/* Core Values */}
        <NotionBlock type="heading2">
          💎 Core Values & Principles
        </NotionBlock>

        <NotionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="notion-card">
              <h4 className="font-semibold mb-2">🎯 Quality First</h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                I believe in writing clean, maintainable code that stands the test of time. 
                Quality over quantity, always.
              </p>
            </div>
            <div className="notion-card">
              <h4 className="font-semibold mb-2">🚀 Continuous Learning</h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Technology evolves rapidly, and I&apos;m committed to staying current with 
                best practices and emerging technologies.
              </p>
            </div>
            <div className="notion-card">
              <h4 className="font-semibold mb-2">🤝 Collaboration</h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Great software is built by great teams. I value open communication 
                and knowledge sharing.
              </p>
            </div>
            <div className="notion-card">
              <h4 className="font-semibold mb-2">🌟 User-Centric</h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Every line of code should serve a purpose in creating better 
                experiences for end users.
              </p>
            </div>
          </div>
        </NotionBlock>

        <NotionBlock type="divider" />

        {/* Technical Skills Database */}
        <NotionBlock type="heading2">
          🛠️ Technical Skills
        </NotionBlock>

        <NotionDatabase
          title="Technology Stack"
          data={skills.technical}
          columns={skillColumns}
          viewType="table"
        />

        {/* Soft Skills */}
        <NotionBlock type="heading3">
          🧠 Soft Skills
        </NotionBlock>

        <NotionBlock>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill, index) => (
              <Tag key={index} color="green" variant="filled">
                {skill}
              </Tag>
            ))}
          </div>
        </NotionBlock>

        <NotionBlock type="divider" />

        {/* Education */}
        <NotionBlock type="heading2">
          🎓 Education
        </NotionBlock>

        <NotionDatabase
          title="Educational Background"
          data={education}
          columns={educationColumns}
          viewType="table"
        />

        {/* Education Details */}
        {education.map((edu, index) => (
          <NotionBlock key={index} className="notion-card">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-[var(--notion-blue-6)]">{edu.institution}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{edu.location}</p>
                </div>
                <div className="text-right">
                  <Badge color="blue">{edu.endDate}</Badge>
                  {edu.gpa && (
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              </div>
              
              {edu.coursework && (
                <div>
                  <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-1">
                    {edu.coursework.map((course, courseIndex) => (
                      <Tag key={courseIndex} size="small" color="gray">
                        {course}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
              
              {edu.achievements && (
                <div>
                  <h4 className="font-medium mb-2">Achievements:</h4>
                  <ul className="text-sm text-[var(--muted-foreground)] space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-[var(--notion-green-6)] mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </NotionBlock>
        ))}

        <NotionBlock type="divider" />

        {/* Certifications */}
        <NotionBlock type="heading2">
          🏆 Certifications
        </NotionBlock>

        <NotionDatabase
          title="Professional Certifications"
          data={certifications}
          columns={certificationColumns}
          viewType="table"
        />

        <NotionBlock type="divider" />

        {/* Interests & Hobbies */}
        <NotionBlock type="heading2">
          🎨 Beyond Code
        </NotionBlock>

        <NotionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="notion-card text-center">
              <Coffee className="w-8 h-8 mx-auto mb-2 text-[var(--notion-yellow-6)]" />
              <h4 className="font-semibold mb-1">Coffee Enthusiast</h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Third-wave coffee lover and home brewing experimenter
              </p>
            </div>
            <div className="notion-card text-center">
              <Gamepad2 className="w-8 h-8 mx-auto mb-2 text-[var(--notion-blue-6)]" />
              <h4 className="font-semibold mb-1">Gaming</h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Strategy games and indie titles in spare time
              </p>
            </div>
            <div className="notion-card text-center">
              <Book className="w-8 h-8 mx-auto mb-2 text-[var(--notion-green-6)]" />
              <h4 className="font-semibold mb-1">Reading</h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Tech blogs, sci-fi novels, and productivity books
              </p>
            </div>
          </div>
        </NotionBlock>

        {/* Fun Facts */}
        <NotionBlock type="callout" icon="🤓">
          <div>
            <h3 className="font-semibold mb-2">Fun Facts</h3>
            <ul className="space-y-1 text-[var(--muted-foreground)]">
              <li>• I&apos;ve visited 15+ countries and coded from cafes around the world</li>
              <li>• My first program was written in BASIC on a Commodore 64</li>
              <li>• I can solve a Rubik&apos;s cube in under 2 minutes</li>
              <li>• I maintain a small open-source library with 1000+ GitHub stars</li>
            </ul>
          </div>
        </NotionBlock>
      </NotionPage>
    </Layout>
  );
}
