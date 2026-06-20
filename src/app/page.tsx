"use client";
import { Header } from "@/components/Header";
import { TasksCard } from "@/components/TasksCard";
import { ITask } from "@/interfaces/task.interface";
import axios from "axios";
import { useEffect, useState } from "react";
import { showToast } from "nextjs-toast-notify";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(`${BASE_API_URL}/tasks/`);
        setTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getTasks();
  }, [tasks]);

  return (
    <div className=" ">
      <Header />

      <main className="max-w-6xl mx-auto  h-screen mt-10 ">
        <div className="flex flex-wrap gap-4">
          {tasks &&
            tasks.map((task) => (
              <TasksCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
