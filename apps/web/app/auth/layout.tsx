import Header from "@/components/ui/Header";
import PagesFooter from "@/components/ui/PagesFooter";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div >
      <Header />
      <div className="h-[623px]">{children}</div>
      <PagesFooter />
    </div>
  );
};

export default AuthLayout;
