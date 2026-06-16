export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div>
            <p className="font-body text-teal text-sm tracking-[0.2em] uppercase mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-8 leading-tight">
              Research from the inside out.
            </h2>

            <div className="space-y-5 text-muted font-body text-base leading-relaxed">
              <p>
                I'm a computer science graduate student at Kyungdon Global University in South Korea,
                originally from Kenya. My research sits at the intersection of deep
                learning and real-world deployment — specifically, building AI systems that can
                function in places where specialist infrastructure doesn't exist.
              </p>
              <p>
                Most medical AI is built for hospitals that already have everything. I'm interested
                in the other hospitals. The ones with one doctor covering three villages. The clinics
                where a missed diagnosis isn't a statistic — it's a child.
              </p>
              <p>
                Outside research, I'm a team member at{' '}
                <span className="text-offwhite font-medium">Tear Saint</span>, a Nairobi-based
                streetwear brand — which keeps me thinking about how creative culture and
                technology intersect across the continent.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Based in',   value: 'Sokcho, South Korea' },
                { label: 'Origin',     value: 'Kenya Africa'  },
                { label: 'Focus',      value: 'Medical AI / CV'     },
                { label: 'Status',     value: 'Open to collaborate' },
              ].map(item => (
                <div key={item.label} className="border border-border p-4">
                  <p className="text-xs text-muted font-body tracking-widest uppercase mb-1">{item.label}</p>
                  <p className="text-sm text-offwhite font-body">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div>
            <p className="font-body text-teal text-sm tracking-[0.2em] uppercase mb-6">Timeline</p>
            <div className="relative border-l border-border pl-6 space-y-8">
              {[
                {
                  year:  '2026',
                  title: 'SCD Detection Thesis',
                  desc:  '98.46% accuracy on blood smear classification using ResNet50 + transfer learning.',
                  tag:   'Research',
                  color: 'teal',
                },
                {
                  year:  '2025',
                  title: 'Kyungdong Global University',
                  desc:  'MSc in AI and Data Science. Focus on computer vision and medical imaging.',
                  tag:   'Education',
                  color: 'amber',
                },
                {
                  year:  '2024',
                  title: 'Tear Saint — Nairobi',
                  desc:  'Joined as team member. Business development, investor relations, brand strategy.',
                  tag:   'Industry',
                  color: 'amber',
                },
                {
                  year:  '2024',
                  title: 'Sickle Cell Disease AI',
                  desc:  'Started deep learning research on automated haematology for African clinics.',
                  tag:   'Research',
                  color: 'teal',
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <span className={`absolute -left-[1.625rem] top-1 w-3 h-3 rounded-full border-2 ${
                    item.color === 'teal'
                      ? 'border-teal bg-bg'
                      : 'border-amber bg-bg'
                  }`} />
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display text-xs text-muted">{item.year}</span>
                    <span className={`text-xs px-2 py-0.5 font-body ${
                      item.color === 'teal'
                        ? 'text-teal border border-teal/30 bg-teal/5'
                        : 'text-amber border border-amber/30 bg-amber/5'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="font-display font-semibold text-offwhite text-sm mb-1">{item.title}</p>
                  <p className="font-body text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
