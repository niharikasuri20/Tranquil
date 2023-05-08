import {Link} from 'react-router-dom'
const callouts = [
    {
      name: 'Self-Care',
      description: 'Skin Care Routine',
      imageSrc: '/skincare.png',
      imageAlt: 'Skin Care Products',
      to: '/skin',
    },
    {
      name: 'Journal Prompts',
      description: `Let's process these thoughts together!`,
      imageSrc: '/journal.png',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      to: '/journal',
    },
    {
      name: 'Health and Spirituality',
      description: 'Meditation and Mini-Therapies',
      imageSrc: '/meditation.png',
      imageAlt: 'Scented Candles and incense sticks for meditation ',
      to:"/meditation",
    },
    {
        name: 'Relax and Energize',
        description: 'Music for every mood',
        imageSrc: '/music.png',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        to: '/media',
      },
      {
        name: 'Mindfulness',
        description: 'Reading',
        imageSrc: '/reading.png',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        to: '/reading',
      },
      {
        name: 'Self Awareness',
        description: 'How you doin?',
        imageSrc: '/mood.png',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        to: '/Mood',
      },
  ]
  
  export default function Offer() {
    return (
      <div className="bg-white">
         <h2 className="text-2xl font-bold text-gray-900">
        <span className="bg-rose-200 text-rose-700">
          Self-Love begins with Self-Care!
        </span>
      </h2>
        <div className="mx-auto max-w-7xl px-8 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
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
                    <Link to={callout.to}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </Link>
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
  