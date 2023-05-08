import React from "react";
import emailjs from "emailjs-com";

function Feedback() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tcf9a1v",
        "template_avifu8s",
        e.target,
        "-lEozNnOiA_GQuvgG"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Feedback sent successfully. Thank you!");
          document.getElementById("myForm").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="text-gray-400 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black">Have a concern or feedback to offer? Do let us know.</p>
        </div>
        <form onSubmit={sendEmail} id="myForm">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-sky-800 font-bold">Name</label>
                <input type="text" id="name" name="name"
                  className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-sky-800 font-bold">Email</label>
                <input type="email" id="email" name="email"
                  className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 text-sm text-sky-800 font-bold">Message</label>
                <textarea id="message" name="message"
                  className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-sky-800 border-0 py-2 px-8 focus:outline-none hover:bg-sky-400 rounded text-lg"
                >Send</button>
            </div>
        </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
