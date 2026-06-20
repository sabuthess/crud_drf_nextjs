import { ITask } from "@/interfaces/task.interface";
import axios from "axios";
import Link from "next/link";
import { showToast } from "nextjs-toast-notify";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const TasksCard = ({ id, title, description }: ITask) => {
  const handleDeleteTask = async () => {
    try {
      await axios.delete(`${BASE_API_URL}/tasks/${id}/`);

      showToast.success("Task deleted succesfully!", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "bounceInDown",
        icon: "",
        sound: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="bg-neutral-800 p-4 w-80 h-55 flex flex-col gap-4">
      <Link href={`/tasks/${id}`}>
        <h2 className="text-2xl hover:text-neutral-300">{title}</h2>
      </Link>
      <p className="line-clamp-3">{description}</p>
      <div className="flex gap-2 w-full">
        <Link
          href={`/tasks/${id}`}
          className="p-3 bg-blue-600 w-full text-center"
        >
          Update
        </Link>
        <button
          className="p-3 bg-red-500 w-full text-center"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
    </article>
  );
};
