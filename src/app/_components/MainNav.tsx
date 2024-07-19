import React from "react";
import NavItem, { type NavItemType } from "./NavItem";
import { UserButton } from "@clerk/nextjs";

const navItems: NavItemType[] = [
  {
    label: "Home",
    link: "/dashboard",
  },
  {
    label: "Rosters",
    link: "/dashboard/rosters",
  },
  {
    label: "Draft",
    link: "/dashboard/draft",
  },
  {
    label: "Members",
    link: "/dashboard/members",
  },
];

const MainNav = () => {
  return (
    <nav className="bg-slate-100">
      <div className="mx-auto flex max-w-screen-xl justify-between py-6">
        <div className="flex gap-6">
          {navItems.map((item: NavItemType, i: number) => (
            <div key={`${i} - ${item.label}`}>
              <NavItem label={item.label} link={item.link} />
            </div>
          ))}
        </div>
        <div className="self-center">
          <UserButton userProfileMode="modal" />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
