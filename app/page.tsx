import Hero from "@/components/Hero";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNavDemo />
      <div className="max-w-full w-full px-4 lg:px-8">
        <Hero />
        <RecentProjects />
      </div>
    </main>
  );
}
