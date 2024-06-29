import { TextGenerateEffect } from "./ui/TextGeneratorEffect";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaFileAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/router';

const Hero = () => {
  const { basePath } = useRouter();
  
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative min--screen my-20 z-10">
        <div className="sm:max-w-[89vw] md:max-w-2xl lg:max-w-[90vw] flex flex-col md:flex-row items-center justify-center">
          <div className="flex-shrink-0">
            <Image
              src={`${basePath}/pictures/meeeee.JPG`}
              alt="Profile Picture"
              width={240} // or appropriate width
              height={240} // or appropriate height
              className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover"
              style={{ objectPosition: 'top' }}
            />
          </div>
          <div className="flex flex-col items-start justify-center ml-16 md:ml-24 lg:ml-32 max-w-full md:max-w-[60%] lg:max-w-[80%]">
            <div className="flex items-center justify-between w-full">
              <p className="uppercase tracking-widest text-sm md:text-base lg:text-lg text-blue-100">
                My Web Portfolio
              </p>
              <div className="flex space-x-10">
                <a href="https://github.com/Hitarth-Kothari" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl md:text-2xl lg:text-3xl text-blue-100 hover:text-blue-300" />
                </a>
                <a href="https://www.linkedin.com/in/hitarth-kothari/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-xl md:text-2xl lg:text-3xl text-blue-100 hover:text-blue-300" />
                </a>
              </div>
            </div>
            <TextGenerateEffect
              words="Brainstorming A Catchy Title"
              className="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-purple"
            />
            <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Hitarth, a graduate from the University of Alberta with a passion for games and programming. I thrive on challenges and love diving into new projects, whether it&apos;s developing an innovative app or creating a captivating video game. I am a fun-loving individual who enjoys bringing creativity and enthusiasm to everything I do. Dedicated and hardworking, I take pride in delivering high-quality work and continuously learning new skills. Outside of coding, I enjoy exploring the latest gaming trends and sharing my excitement for technology with others. Let&apos;s connect and create something amazing together!
            </p>
            <div className="w-full flex justify-center mt-4">
              <div className="flex space-x-4 w-1/2">
                <a href={`${basePath}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <MagicButton
                    title="Resume"
                    icon={<FaFileAlt />}
                    position="right"
                  />
                </a>
                <a href="mailto:hitarthkothari03@gmail.com?subject=Hi Hitarth,I would like to connect!" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <MagicButton
                    title="Contact"
                    icon={<FaEnvelope />}
                    position="right"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
