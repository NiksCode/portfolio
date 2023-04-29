import Projects from "@/components/projects";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* @ts-expect-error Server Component */}
      <Projects />
    </main>
  );
}
