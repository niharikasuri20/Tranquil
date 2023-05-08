import { Link } from "react-router-dom";
import Offer from "./Offer";
import Info from "./Info";
import Testimonial from "./Testimonial";
import Feedback from "./feedback";
export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-0 sm:px-6 sm:py-0 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Welcome to Tranquil!
              <br /> Let's Unwind!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your personal and safe space to spend some time with yourself,
              after a hectic day. You deserve it!
              <br />
              Feeling overwhwelmed with emotions? <br />
              We can help you process!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/offer"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/Home_design (2).png"
              alt="Landing page image"
              className="w-full h-auto pt-16 pb-16"
            />
          </div>
        </div>
      </div>
      <br />
      <Info />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <img
            src="/mood_2.png"
            className="w-full "
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <br></br>
      <br />
      <Offer />
      <Testimonial />
      <Feedback />
    </div>
  );
}
