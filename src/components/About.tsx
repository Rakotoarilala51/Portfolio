import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="py-25 px-[12%] relative bg-gradient-about w-full"
    >
      <h2 className="text-center font-orbitron text-5xl font-black mb-12 uppercase">
        <span className="glitch" data-text="ABOUT ME">
          ABOUT ME
        </span>
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center m-2 gap-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={"/assets/images/developer_avatar.png"}
            alt="Profile"
            width={300}
            height={300}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-justify">
            I’m a 3rd year computer science student at ENI, passionate about
            creating — from{" "}
            <span
              className="text-neon-cyan font-bold
              drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]
            "
            >
              AI applications
            </span>{" "}
            and{" "}
            <span
              className="text-neon-cyan font-bold
              drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]
            "
            >
              CLI tools
            </span>{" "}
            to both{" "}
            <span
              className="text-neon-cyan font-bold
              drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]
            "
            >
              back-end
            </span>{" "}
            and{" "}
            <span
              className="text-neon-cyan font-bold
              drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]
            "
            >
              front-end
            </span>{" "}
            projects. I really enjoy exploring Data Structures & Algorithms,
            competitive programming, and I’m always learning new ways to turn
            ideas into clean, functional, and slightly unconventional digital
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
