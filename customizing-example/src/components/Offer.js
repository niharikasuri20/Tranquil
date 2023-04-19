const callouts = [
    {
      name: 'Self-Care',
      description: 'Skin Care Routine',
      imageSrc: '/skincare.png',
      imageAlt: 'Skin Care Products',
      href: '#',
    },
    {
      name: 'Journal Prompts',
      description: `Let's process these thoughts together!`,
      imageSrc: '/journal.png',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Health and Spirituality',
      description: 'Meditation and Mini-Therapies',
      imageSrc: '/meditation.png',
      imageAlt: 'Scented Candles and incense sticks for meditation ',
      href: '#',
    },
    {
        name: 'Relax and Energize',
        description: 'Music for every mood',
        imageSrc: '/music.png',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
      {
        name: 'Mindfulness',
        description: 'Reading',
        imageSrc: '/reading.png',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
      {
        name: 'Self Awareness',
        description: 'Mood Analyser',
        imageSrc: '/mood.png',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
  ]
  
  export default function Offer() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p><br/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  