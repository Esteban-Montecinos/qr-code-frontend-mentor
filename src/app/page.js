import Image from "next/image";
import imageQr from "../../public/image-qr-code.png";

export default function Home() {
  return (
    <main className=" flex flex-col gap-2 min-h-screen items-center justify-center p-4">
      <section className="bg-white flex flex-col gap-5 justify-center items-center p-4 rounded-2xl max-w-xs">
        <Image className="rounded-xl" src={imageQr} alt="QR Code" />
        <h1 className="text-xl min-[337px]:text-2xl font-bold text-center text-blue-950 leading-tight">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-gray-500 text-center leading-tight">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
      <footer className="max-w-sm text-[0.65rem]"> 
    Challenge by <a target="_blank" rel="noopener noreferrer" href="https://www.frontendmentor.io?ref=challenge" className="font-medium underline">Frontend Mentor</a>. 
    Coded by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Esteban-Montecinos" className="font-medium underline">Esteban Montecinos</a>.
  </footer>
    </main>
  );
}
