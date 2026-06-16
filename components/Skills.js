const skillGroups = [
  {
    category: 'Machine Learning',
    color:    'teal',
    skills:   ['PyTorch', 'TensorFlow', 'scikit-learn', 'Transfer Learning', 'CNNs', 'Grad-CAM', 'Focal Loss', 'Class Imbalance Handling'],
  },
  {
    category: 'Computer Vision',
    color:    'teal',
    skills:   ['Image Classification', 'Object Detection', 'Semantic Segmentation', 'Medical Image Analysis', 'Augmentation (Albumentations)', 'HED Stain Augmentation'],
  },
  {
    category: 'Data & Programming',
    color:    'amber',
    skills:   ['Python', 'NumPy', 'Pandas', 'OpenCV', 'Pillow', 'Jupyter', 'SQL', 'Git'],
  },
  {
    category: 'Infrastructure & Tools',
    color:    'amber',
    skills:   ['Google Colab', 'Weights & Biases', 'Docker (basics)', 'Linux', 'Next.js', 'Vercel'],
  },
  {
    category: 'Research',
    color:    'teal',
    skills:   ['IEEE Paper Writing', 'Literature Review', 'Experimental Design', 'Statistical Analysis', 'Longitudinal Study Design', 'LaTeX'],
  },
  {
    category: 'Business',
    color:    'amber',
    skills:   ['Business Development', 'Investor Relations', 'Brand Strategy', 'Market Research', 'Pitch Decks'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <p className="font-body text-teal text-sm tracking-[0.2em] uppercase mb-4">Skills</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-16 leading-tight max-w-xl">
          Tools I reach for and why.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map(group => (
            <div key={group.category} className="border border-border p-6 hover:border-offwhite/20 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  group.color === 'teal' ? 'bg-teal' : 'bg-amber'
                }`} />
                <p className="font-display font-semibold text-sm text-offwhite tracking-wide">
                  {group.category}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="font-body text-xs text-muted bg-surface px-2 py-1 border border-border hover:text-offwhite transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
