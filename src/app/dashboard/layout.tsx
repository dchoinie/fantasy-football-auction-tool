import React from "react";
import MainNav from "../_components/MainNav";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <MainNav />
      {children}
    </div>
  );
};

export default layout;
