import Photo from "@/components/homepage/Photo";
import ResumeDownload from "@/components/homepage/ResumeDownload";
import Socials from "@/components/homepage/Socials";
import Stats from "@/components/homepage/Stats";
import { Button } from "@/components/ui/button";
import { Download, FileDownIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Collab Manager</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent text-8xl">Cudy</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80" >
              I'm a Collab Manager with vast Experience in the Space , I would love to impart my skills in your project , and help make your project a huge Success.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <ResumeDownload />

              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-primary hover:transition-all duration-500" />
              </div>

            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </main>
  );
}
