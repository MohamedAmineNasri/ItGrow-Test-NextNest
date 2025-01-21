import Header from "@/components/ui/Header";
import PagesFooter from "@/components/ui/PagesFooter";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
      <PagesFooter />
    </div>
  );
};

export default AuthLayout;
