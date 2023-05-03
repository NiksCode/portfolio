import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { BsCode } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { getProjects } from "../../lib/queries";
import AuthButton from "./authButton";
import StackItem from "./stackItem";

export default async function Projects() {
  const projects = await getProjects();

  const session = await getServerSession(authOptions);

  return (
    <div className='lg:pt-8'>
      <AuthButton />
      {session && (
        <>
          <Image
            height={500}
            width={500}
            src={session?.user?.image.replaceAll("s96-c", "s400-c")}
          />
          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className='font-extrabold text-4xl text-brand pt-8 '>
              Latest Projects
            </div>
            <a
              href='https://github.com/aimdexter'
              className='flex bg-dark dark:bg-white transition duration-500 dark:text-dark lg:mt-8  mt-2 p-2 rounded-full text-white items-center gap-2 w-fit'
              target='_blank'
            >
              <span className='font-bold text-xs'>More Projects</span>
              <div className='text-xl'>
                <FaGithub />
              </div>
            </a>
          </div>
          <div className='py-7 flex flex-col gap-5 justify-around items-start md:flex-row md:flex-wrap'>
            {projects
              .reverse()
              .map(({ id, title, content, image, code, demo, tools }) => {
                return (
                  <div
                    key={id}
                    className='shadow-lg w-fit shadow-dark dark:shadow-white dark:shadow-sm transition duration-500 rounded-2xl md:max-w-[300px] h-fit'
                  >
                    <div className=''>
                      <img
                        className='rounded-3xl py-2 transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                        src={image}
                        alt={title}
                      />
                    </div>
                    <div className='px-4 pb-4'>
                      <div className='text-2xl uppercase text-brand font-bold py-2'>
                        {title}
                      </div>
                      <div className='flex flex-wrap gap-2 transition duration-500'>
                        {tools.map((item, i) => {
                          return <StackItem key={i}>{item.name}</StackItem>;
                        })}
                      </div>
                      <div className='text-sm py-4 transition duration-500 text-justify'>
                        {content}
                      </div>
                      <div className='flex gap-6 text-base font-bold text-black'>
                        <a
                          href={code}
                          target='_blank'
                          className='pb-1 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 flex items-center gap-2 border-b-2 border-brand'
                        >
                          <BsCode />
                          <div className=''>code</div>
                        </a>
                        <a
                          href={demo}
                          target='_blank'
                          className='pb-1 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 flex items-center gap-2 border-b-2 border-brand'
                        >
                          <TbScreenShare />
                          <div className=''>demo</div>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}
