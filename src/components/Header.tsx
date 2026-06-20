import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div>
      <nav className="p-3 bg-neutral-800 flex justify-between">
        <h1>Sabu Tasks</h1>
        <ul className="flex gap-3">
          <li>
            <Link href="/">All tasks</Link>
          </li>
          <li>
            <Link href="/create_task">Cretate</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
