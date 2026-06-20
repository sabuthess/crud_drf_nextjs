"use client";

import { Header } from "@/components/Header";
import { useState } from "react";
import axios from "axios";
import { showToast } from "nextjs-toast-notify";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default function CreateTaskPage() {
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_API_URL}/tasks/`, {
        title: inputValue.title,
        description: inputValue.description,
      });

      showToast.success("Task created succesfully!", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "bounceInDown",
        icon: "",
        sound: true,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setInputValue({
        title: "",
        description: "",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="min-w-6xl mx-auto py-10 flex flex-col items-center">
        <h1 className="text-3xl">Create a new task</h1>

        <form
          action=""
          className="p-3 bg-neutral-800 flex flex-col gap-3 mt-10 w-90 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter title here..."
            className="py-2 outline px-4 outline-none bg-neutral-500"
            name="title"
            value={inputValue.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            id=""
            value={inputValue.description}
            placeholder="Enter description here..."
            className="py-2 px-4 outline-none bg-neutral-500"
            onChange={handleChange}
          ></textarea>
          <button className="p-4 bg-green-400 text-black cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
