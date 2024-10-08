"use client";

import { useRouter } from "next/navigation";

function DeleteTodo({ id }) {
  const router = useRouter();
  const handleDelete = async () => {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, }),
    });

    if (response.status == "200") {
      router.refresh();
      router.push("/")
    } else {
      throw new Error("Something went wrong");
    }
  };

  return <button onClick={() => handleDelete()}>Delete</button>;
}

export default DeleteTodo;
