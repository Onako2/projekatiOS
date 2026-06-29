"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("query");

    const id = Number(query);

    if (!Number.isInteger(id)) {
      alert("Invalid ID");
      return;
    }

    router.push(`scratch/${id}`);
  }

  return (
    <div id="main" className="m-8">
      <div id="form" className="justify-items-center">
        <p className="m-2">Enter Scratch project id</p>

        <form onSubmit={onSubmit}>
          <input name="query" className="bg-gray-500"/>
          <br></br>
          <button type="submit" className="bg-purple-500 m-1">Submit</button>
        </form>
      </div>
    </div>
  );
}