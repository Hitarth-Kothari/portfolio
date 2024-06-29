import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-full w-full px-4 lg:px-8">
        <Hero />
      </div>
    </main>
  );
}
