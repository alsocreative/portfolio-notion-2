'use client';

import Layout from '@/components/layout/Layout';
import NotionPage from '@/components/ui/NotionPage';
import NotionBlock from '@/components/ui/NotionBlock';
import NotionDatabase from '@/components/ui/NotionDatabase';
import { Tag, Badge } from '@/components/ui/Components';
import { portfolioData } from '@/data/portfolio';
import { Calendar, MapPin, Building, Award, TrendingUp, Users, Code, Zap } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  const experienceColumns = [
    {
      key: 'position',
      title: 'Position',
      render: (value) => <span className="font-medium">{value}</span>
    },
    {
      key: 'company',
      title: 'Company',
      render: (value) => <span className="text-[var(--notion-blue-6)]">{value}</span>
    },
    {
      key: 'startDate',
      title: 'Duration',
      render: (value, row) => (
        <span className="text-[var(--muted-foreground)]">
          {value} - {row.endDate}
        </span>
      )
    },
    {
      key: 'type',
      title: 'Type',
      render: (value) => (
        <Tag size="small" color={value === 'full-time' ? 'green' : 'blue'}>
          {value}
        </Tag>
      )
    }
  ];

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0) {
      return remainingMonths > 0 ? `${years}y ${remainingMonths}m` : `${years}y`;
    } else {
      return `${remainingMonths}m`;
    }
  };

  const formatDate = (dateString) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <Layout title="Experience">
      <NotionPage
        title="Professional Experience"
        subtitle="My career journey and achievements"
        icon="💼"
      >
        {/* Overview */}
        <NotionBlock type="callout" icon="🚀">
          <div>
            <h3 className="font-semibold mb-2">Career Overview</h3>
            <p className="text-[var(--muted-foreground)]">
              Over 5 years of professional experience building scalable web applications, 
              leading development teams, and driving technical innovation across various industries.
            </p>
          </div>
        </NotionBlock>

        {/* Quick Stats */}
        <NotionBlock>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="notion-card text-center">
              <div className="text-2xl font-bold text-[var(--notion-blue-6)]">5+</div>
              <div className="text-sm text-[var(--muted-foreground)]">Years Experience</div>
            </div>
            <div className="notion-card text-center">
              <div className="text-2xl font-bold text-[var(--notion-green-6)]">3</div>
              <div className="text-sm text-[var(--muted-foreground)]">Companies</div>
            </div>
            <div className="notion-card text-center">
              <div className="text-2xl font-bold text-[var(--notion-yellow-6)]">15+</div>
              <div className="text-sm text-[var(--muted-foreground)]">Team Members Led</div>
            </div>
            <div className="notion-card text-center">
              <div className="text-2xl font-bold text-[var(--notion-red-6)]">50+</div>
              <div className="text-sm text-[var(--muted-foreground)]">Projects Delivered</div>
            </div>
          </div>
        </NotionBlock>

        <NotionBlock type="divider" />

        {/* Experience Database */}
        <NotionBlock type="heading2">
          📋 Experience Overview
        </NotionBlock>

        <NotionDatabase
          title="Work History"
          data={experience}
          columns={experienceColumns}
          viewType="table"
        />

        <NotionBlock type="divider" />

        {/* Detailed Experience */}
        <NotionBlock type="heading2">
          📖 Detailed Experience
        </NotionBlock>

        {experience.map((exp, index) => (
          <NotionBlock key={index} className="notion-card">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4 text-[var(--notion-blue-6)]" />
                    <span className="text-[var(--notion-blue-6)] font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                        <span className="ml-2 text-[var(--notion-green-6)]">
                          ({calculateDuration(exp.startDate, exp.endDate)})
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge color={exp.endDate === 'Present' ? 'green' : 'blue'}>
                    {exp.endDate === 'Present' ? 'Current Role' : 'Previous Role'}
                  </Badge>
                  <Tag size="small" color="gray">{exp.type}</Tag>
                </div>
              </div>

              {/* Description */}
              <div className="bg-[var(--background-secondary)] p-4 rounded-md">
                <p className="text-[var(--muted-foreground)]">{exp.description}</p>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[var(--notion-yellow-6)]" />
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3 p-3 bg-[var(--accent)] rounded-md">
                      <div className="w-2 h-2 bg-[var(--notion-green-6)] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-[var(--notion-blue-6)]" />
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Tag key={techIndex} color="blue" size="small">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Timeline indicator for multiple experiences */}
              {index < experience.length - 1 && (
                <div className="flex justify-center pt-4">
                  <div className="w-px h-8 bg-[var(--border)]" />
                </div>
              )}
            </div>
          </NotionBlock>
        ))}

        <NotionBlock type="divider" />

        {/* Skills Developed */}
        <NotionBlock type="heading2">
          🎯 Skills Developed
        </NotionBlock>

        <NotionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="notion-card">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-[var(--notion-blue-6)]" />
                <h4 className="font-semibold">Leadership</h4>
              </div>
              <ul className="text-sm text-[var(--muted-foreground)] space-y-1">
                <li>• Team management & mentoring</li>
                <li>• Project planning & execution</li>
                <li>• Cross-functional collaboration</li>
                <li>• Technical decision making</li>
              </ul>
            </div>

            <div className="notion-card">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-[var(--notion-green-6)]" />
                <h4 className="font-semibold">Technical</h4>
              </div>
              <ul className="text-sm text-[var(--muted-foreground)] space-y-1">
                <li>• Full-stack development</li>
                <li>• System architecture design</li>
                <li>• Performance optimization</li>
                <li>• Code quality & testing</li>
              </ul>
            </div>

            <div className="notion-card">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-[var(--notion-yellow-6)]" />
                <h4 className="font-semibold">Business</h4>
              </div>
              <ul className="text-sm text-[var(--muted-foreground)] space-y-1">
                <li>• Product development</li>
                <li>• Stakeholder communication</li>
                <li>• Requirements analysis</li>
                <li>• Strategic planning</li>
              </ul>
            </div>
          </div>
        </NotionBlock>

        {/* Career Highlights */}
        <NotionBlock type="callout" icon="⭐">
          <div>
            <h3 className="font-semibold mb-2">Career Highlights</h3>
            <ul className="space-y-2 text-[var(--muted-foreground)]">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[var(--notion-yellow-6)] mt-0.5 flex-shrink-0" />
                <span>Led the development of a platform that secured $2M in Series A funding</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[var(--notion-yellow-6)] mt-0.5 flex-shrink-0" />
                <span>Improved application performance by 40% through optimization initiatives</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[var(--notion-yellow-6)] mt-0.5 flex-shrink-0" />
                <span>Built payment processing system handling $1M+ in transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[var(--notion-yellow-6)] mt-0.5 flex-shrink-0" />
                <span>Mentored 10+ junior developers across different companies</span>
              </li>
            </ul>
          </div>
        </NotionBlock>
      </NotionPage>
    </Layout>
  );
}
