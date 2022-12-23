import React from "react";
import Header from "./Header";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ weight: ["300", "400", "500", "600", "700"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={montserrat.className}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
