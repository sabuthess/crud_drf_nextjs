"use client";

import { Header } from "@/components/Header";
import { ITask } from "@/interfaces/task.interface";
import axios from "axios";
import { showToast } from "nextjs-toast-notify";
import { use, useEffect, useState } from "react";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
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
      await axios.put(`${BASE_API_URL}/tasks/${id}/`, {
        title: inputValue.title,
        description: inputValue.description,
      });

      showToast.info("Task updated succesfully!", {
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

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(`${BASE_API_URL}/tasks/${id}/`);

        setInputValue({
          title: res.data.title,
          description: res.data.description,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getTasks();
  }, []);
  return (
    <>
      <Header />
      <div className="min-w-6xl mx-auto py-10 flex flex-col items-center">
        <h1 className="text-3xl">Editar task {id}</h1>

        <form
          action=""
          onSubmit={handleSubmit}
          className="p-3 bg-neutral-800 flex flex-col gap-3 mt-10 w-90 "
          // onSubmit={handleSubmit}
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
            placeholder="Enter description here..."
            className="py-2 px-4 outline-none bg-neutral-500"
            value={inputValue.description}
            onChange={handleChange}
          ></textarea>
          <button className="p-4 bg-blue-600   cursor-pointer">
            Update
          </button>
        </form>
      </div>
    </>
  );
}
