"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("query") as string;

    const based = btoa(query);
    router.push(`custom/${based}`);
  }

  return (
    <div id="main" className="m-8">
      <div id="form" className="justify-items-center">
        <p className="m-2">iframe url</p>

        <form onSubmit={onSubmit}>
          <input name="query" className="bg-gray-500"/>
          <br></br>
          <button type="submit" className="bg-purple-500 m-1">Submit</button>
        </form>
      </div>
    </div>
  );
}