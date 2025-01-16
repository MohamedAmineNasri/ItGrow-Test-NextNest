import Header from "@/components/ui/Header";
import PagesFooter from "@/components/ui/PagesFooter";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
    const session = await getSession()
    if(!session || !session.user) redirect('/auth/signin')
  return (
    <>
      <Header />
      <div className="min-h-screen">page</div>
      <PagesFooter />
    </>
  );
};

export default page;
