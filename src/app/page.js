import Image from "next/image";
import imageQr from "../../public/image-qr-code.png";

export default function Home() {
  return (
    <main className=" flex flex-col gap-2 min-h-screen items-center justify-center p-4">
      <section className="bg-white flex flex-col gap-5 justify-center items-center p-4 rounded-2xl max-w-xs">
        <Image className="rounded-xl" src={imageQr} alt="QR Code" />
        <div className="flex flex-col gap-3 m-4 flex-wrap">
          <h1 className="min-[375px]:text-[1.35rem] text-[1.2rem] font-bold text-center text-blue-950 leading-tight">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-gray-500 min-[375px]:text-[0.95rem] text-[0.9rem] text-center leading-tight">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </section>
      <footer className="max-w-sm text-[0.65rem]">
        Challenge by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          className="font-medium underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Esteban-Montecinos"
          className="font-medium underline"
        >
          Esteban Montecinos
        </a>
        .
      </footer>
    </main>
  );
}
