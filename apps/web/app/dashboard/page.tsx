"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/session"; 
import Header from "@/components/ui/Header";
import BlogForm from "./BlogForm";
import PagesFooter from "@/components/ui/PagesFooter";
import WorkForm from "./WorkForm";

const Page = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      if (!sessionData || !sessionData.user) {
        router.push("/auth/signin");
      } else {
        setSession(sessionData);
      }
    };
    fetchSession();
  }, [router]);

  console.log("access", session?.accessToken || "Session not available yet");

  if (!session) {
    return <div>Loading...</div>;
  }

  console.log("aaaaa", session.user.name);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center px-4 sm:px-8">
        <BlogForm session={session} />
      </main>
        <WorkForm session={session}/>
      <PagesFooter />
    </div>
  );
};

export default Page;
