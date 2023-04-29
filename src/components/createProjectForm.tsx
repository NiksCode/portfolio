"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function CreateProjectsForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [code, setCode] = useState("");
  const [demo, setDemo] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/create-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, image, code, demo }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      return;
    }
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <form
      className='flex flex-col border-solid border-blue-400 border-2 p-4 gap-2'
      onSubmit={handleSubmit}
    >
      <label htmlFor='title'>Title:</label>
      <input
        type='text'
        id='title'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isPending}
        className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />

      <label htmlFor='content'>Content:</label>
      <textarea
        id='content'
        name='content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      ></textarea>

      <label htmlFor='image'>Image</label>
      <input
        type='text'
        id='image'
        name='image'
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />

      <label htmlFor='code'>Code</label>
      <textarea
        id='code'
        name='code'
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      ></textarea>

      <label htmlFor='demo'>Demo</label>
      <input
        type='text'
        id='demo'
        name='demo'
        value={demo}
        onChange={(e) => setDemo(e.target.value)}
        className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />

      <button className='px-3 py-1 bg-green-200 rounded-full' type='submit'>
        Submit
      </button>
    </form>
  );
}
