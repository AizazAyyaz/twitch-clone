import React from "react";
import Main from "./Main";
import SideMenu from "./SideMenu";

const Layout = () => {
  return (
    <div className="pt-[3.75rem] flex w-full">
      <SideMenu></SideMenu>
      <Main></Main>
    </div>
  );
};

export default Layout;
