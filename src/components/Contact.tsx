"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
    const [result, setResult] =useState("");

  const onSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "31a13943-cd0a-403a-aa63-923f1a7c33d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsSubmitted(true)
      setIsSubmitting(true)
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-25 relative bg-black w-full">
        <h2 className="text-center font-orbitron text-2xl font-black mb-5 uppercase">
          <span className="glitch" data-text="CONTACT">
            CONTACT
          </span>
        </h2>
            <h3 className="text-center font-orbitron text-3xl text-neon-cyan mb-1 drop-shadow-[0_0_10px_#00FFFF]">
              Let's Build Something Amazing
            </h3>
            <p className="opacity-90 text-center max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's connect and create
              something extraordinary together.
            </p>




      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 p-3 bg-white/5 border-2 border-neon-cyan rounded-md text-white font-fira text-base 
                  transition-all duration-300 focus:outline-none focus:border-neon-pink focus:shadow-[0_0_20px_rgba(255,0,128,0.3)]"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 p-3 bg-white/5 border-2 border-neon-cyan rounded-md text-white font-fira text-base 
                  transition-all duration-300 focus:outline-none focus:border-neon-pink focus:shadow-[0_0_20px_rgba(255,0,128,0.3)]"
          />
        </div>

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-4 bg-white/5 border-2 border-neon-cyan rounded-md text-white font-fira text-base 
                  transition-all duration-300 focus:outline-none focus:border-neon-pink focus:shadow-[0_0_20px_rgba(255,0,128,0.3)] 
                  resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`py-3 px-8 mt-2 ${
            isSubmitted
              ? "bg-gradient-to-r from-green-500 to-neon-cyan"
              : "bg-neon-pink"
          } text-white border-none rounded-md font-orbitron font-bold uppercase transition-all duration-300 
                shadow-neon-pink cursor-pointer hover:-translate-y-0.5 hover:shadow-neon-pink-hover 
                hover:drop-shadow-[0_0_10px_#FFFFFF] disabled:opacity-70`}
          style={{ filter: isSubmitting ? "brightness(1.2)" : "brightness(1)" }}
        >
          {isSubmitting
            ? "Sending..."
            : isSubmitted
            ? "Message Sent!"
            : "Send Message"}
        </button>
        <p>{result}</p>
      </form>
    </section>
  );
}
