const projects = [
  {
    id:       '01',
    title:    'Sickle Cell Disease Detection',
    subtitle: 'Deep Learning · Medical Imaging · Transfer Learning',
    desc:     'A multi-source peripheral blood smear classification system trained on datasets from Uganda, Spain, and Thailand. ResNet50 fine-tuned with stain-colour augmentation achieves 98.46% accuracy and perfect AUC on the clinically critical sickle cell class.',
    tags:     ['PyTorch', 'ResNet50', 'Grad-CAM', 'Computer Vision', 'Healthcare AI'],
    stats:    [
      { value: '98.46%', label: 'Accuracy'      },
      { value: '1.000',  label: 'AUC (Sickle)'  },
      { value: '100%',   label: 'Recall'         },
    ],
    accent:  '#00D4AA',
    github:  'https://github.com/SuleimanUsama/sickle-cell-thesis',
    demo:    'https://huggingface.co/spaces/AllyCasano/scd_detection',
    status:  'Thesis · 2026',
  },
  {
    id:       '02',
    title:    'Tear Saint — Brand & Strategy',
    subtitle: 'Business Development · Nairobi Streetwear',
    desc:     'Team member at a Nairobi-based streetwear brand. Responsibilities span investor relations, business plan development, and translating creative vision into structured growth strategy for the African fashion market.',
    tags:     ['Business Strategy', 'Investor Relations', 'Brand Development', 'African Market'],
    stats:    [
      { value: 'Nairobi', label: 'HQ'           },
      { value: 'Active',  label: 'Status'        },
      { value: '2024—',   label: 'Since'         },
    ],
    accent:  '#C8922A',
    github:  null,
    demo:    'https://tearsaint.com',
    status:  'Industry · 2024—',
  },
  {
    id:       '03',
    title:    'Sleep–Activity Dynamics Analysis',
    subtitle: 'Wearable Data · Longitudinal Study · ML Pipeline',
    desc:     'Longitudinal analysis of sleep phenotyping and bidirectional activity associations using Samsung Galaxy Watch data from an East African male cohort. Full Python pipeline covering prediction modeling, cross-dataset replication, and graphical model abstraction.',
    tags:     ['Python', 'scikit-learn', 'Pandas', 'Wearable Data', 'Sleep Science'],
    stats:    [
      { value: 'EAM',     label: 'Cohort'         },
      { value: 'Galaxy',  label: 'Watch Data'      },
      { value: 'Longit.', label: 'Study Design'    },
    ],
    accent:  '#00D4AA',
    github:  'https://github.com/SuleimanUsama/sleep-activity-analysis',
    demo:    null,
    status:  'Research · 2025',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="group border border-border hover:border-offwhite/20 transition-colors duration-300 bg-surface">
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ backgroundColor: project.accent }} />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="font-display text-xs text-muted tracking-widest">{project.id}</span>
            <h3 className="font-display text-xl font-bold text-offwhite mt-1 leading-snug">
              {project.title}
            </h3>
            <p className="font-body text-xs mt-1" style={{ color: project.accent }}>
              {project.subtitle}
            </p>
          </div>
          <span className="text-xs font-body text-muted border border-border px-2 py-1 shrink-0 ml-4">
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-muted leading-relaxed mb-6">
          {project.desc}
        </p>

        {/* Stats */}
        <div className="flex gap-6 mb-6 pb-6 border-b border-border">
          {project.stats.map(stat => (
            <div key={stat.label}>
              <p className="font-display font-bold text-lg" style={{ color: project.accent }}>
                {stat.value}
              </p>
              <p className="font-body text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-body text-xs px-2 py-1 bg-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-body text-muted hover:text-offwhite transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-body hover:opacity-80 transition-opacity"
              style={{ color: project.accent }}
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-body text-teal text-sm tracking-[0.2em] uppercase mb-4">Projects</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite leading-tight max-w-lg">
              Work that has a reason to exist.
            </h2>
          </div>
          <a
            href="https://github.com/SuleimanUsama"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-body text-muted hover:text-offwhite transition-colors"
          >
            All repos →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projects.map(p => (
            <div key={p.id} className="bg-bg">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
