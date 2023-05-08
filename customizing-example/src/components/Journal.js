import { useState } from "react";
const skincareData = [
    {
      type: "I feel lonely.",
      step1: "1.) What does loneliness mean to me? How does it feel physically and emotionally?",
      step2: "2.) Have I been feeling lonely for a long time or is this a recent feeling? If recent, what triggered it?",
      step3: "3.) Have I made an effort to connect with others? If not, why? If yes, how did it go?",
      step4: "4.) What are some things I can do to be more comfortable being alone with myself? How can I learn to enjoy my own company?",
      step5: "5.) What past experiences might be contributing to my feelings of loneliness? Can I work through any unresolved emotions related to these experiences?",
    },
    {
      type: "I am anxious about something.",
      step1: "1.) What specifically am I feeling anxious about? Can I identify the root cause of this anxiety?",
      step2: "2.) What is the worst-case scenario? How likely is it to happen? What steps can I take to prepare for it or prevent it from happening?",
      step3: "3.) What has helped me cope with anxiety in the past? How can I implement these strategies again?",
      step4: "4.) How can I practice self-compassion during this time of anxiety? What kind and supportive things can I say to myself?",
      step5: "5.) What am I grateful for in my life right now? How can I focus on the positive and practice mindfulness in the present moment?",
    },
    {
      type: "I'm overworked or worried about deadlines.",
      step1: "1.) What specifically am I overworked or worried about? Can I identify the tasks or projects that are causing the most stress?",
      step2: "2.) What are the consequences of not meeting these deadlines? Are these consequences realistic or am I catastrophizing?",
      step3: "3.) What kind of support do I need to manage my workload and meet these deadlines? Can I talk to my supervisor, mentor, or a trusted colleague for guidance or support?",
      step4: "4.) Can I reframe my mindset around deadlines and stress? How can I focus on the present moment and avoid getting caught up in future worries?",
      step5: "5.) What are some positive aspects of my work or progress that I can focus on and celebrate? How can I acknowledge and appreciate my hard work and achievements?",
    },
    {
      type: "I am angry about something or on someone.",
      step1: "1.) What specifically am I angry about? Can I identify the trigger or event that caused this anger?",
      step2: "2.) How is this anger affecting me physically? What sensations am I experiencing in my body?",
      step3: "3.) What are some of the beliefs or expectations that I have that might be contributing to this anger? Are these beliefs or expectations realistic or could they be challenged?",
      step4: "4.) How can I practice self-compassion during this time of anger? What kind and supportive things can I say to myself?",
      step5: "5.) Can I identify any positive aspects of this situation or person that I can focus on?",
    },
    {
        type: "I feel insecure because of the way I look or because of a specific habit of mine.",
        step1: "1.)How is this insecurity affecting my daily life? How can I practice self-care to soothe my body and mind?",
        step2: "2.) What are some positive aspects of myself or my appearance that I can focus on and appreciate? How can I cultivate self-compassion and self-love?",
        step3: "3.) Can I challenge any negative beliefs or thoughts that are contributing to this insecurity? What evidence do I have that contradicts these beliefs or thoughts?",
        step4: "4.) How can I work towards accepting and embracing my body and my habits? Can I practice gratitude for what my body and mind can do?",
        step5: "5.) What actions can I take to improve my body image or habits in a healthy way? How can I work towards my goals with kindness and self-love?",
      },
      {
        type: "I miss someone.",
        step1: "1.) How am I feeling physically and emotionally because of this missing feeling? Can I identify any sensations in my body or emotions that are arising?",
        step2: "2.) How has this missing feeling affected my daily life and routine? Can I identify any coping strategies that have worked for me in the past?",
        step3: "3.) Can I reach out to this person or someone I trust to talk about my feelings of missing them? How can I seek support and validation from others?",
        step4: "4.) How can I practice self-compassion and self-care during this time of missing someone? What kind and supportive things can I say to myself?",
        step5: "5.) How can I find meaning or purpose in this experience of missing someone? Can I use this experience to grow or learn something new about myself or the world around me?",
      },
  ];
    const Journal = () => {
        const [selectedType, setSelectedType] = useState("I feel lonely.");
      
        const handleSelect = (event) => {
          setSelectedType(event.target.value);
        };
    return(
        <div>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-5 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <p className="mt-2 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
          Journal Prompts
        </p><br/>
        <img className="mx-auto h-30" src="/write.png" alt="notebook" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
            Journaling can help with processing thoughts by providing clarity and perspective, reducing stress and anxiety, tracking progress, and enhancing creativity. It's a powerful tool for self care that allows for reflection on thoughts, feelings, and experiences.
            </p>
          </blockquote>
          
        </figure>
      </div>
      </div>
            <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
          What's bothering you?
        </p>
        <br />
        <div>
          <select
            id="skinType"
            onChange={handleSelect}
            value={selectedType}
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {skincareData.map((data, index) => (
              <option key={index} value={data.type}>
                {data.type}
              </option>
            ))}
          </select>
          <br />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
            Don't worry, We got you! <br/>Let's process these emotions!
          </h2>
          <p></p>
        </div>
      </div>
      <ul className="steps steps-vertical">
      <li className="step step-primary">
          {skincareData.find((data) => data.type === selectedType).step1}
        </li>
      <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
         
        <li className="step step-primary">
          {skincareData.find((data) => data.type === selectedType).step2}
        </li>
        <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        <li className="step">
          {skincareData.find((data) => data.type === selectedType).step3}
        </li>
        <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        <li className="step">
          {skincareData.find((data) => data.type === selectedType).step4}
        </li>
        <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        <li className="step">
          {skincareData.find((data) => data.type === selectedType).step5}
        </li>
        <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
      </ul>
    </div>
    )
  }
export default Journal