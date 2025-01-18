import Header from "@/components/ui/Header";
import PagesFooter from "@/components/ui/PagesFooter";
import { getProfile } from "@/lib/actions";
import React from "react";

const ProfilePage = async () => {
  const res = await getProfile();
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        Profile Page
        <p>{JSON.stringify(res)}</p>
      </div>
      <PagesFooter />
    </div>
  );
};

export default ProfilePage;
