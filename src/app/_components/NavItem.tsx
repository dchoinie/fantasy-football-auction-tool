import { UserPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export interface NavItemType {
  label: string;
  link: string;
}

const NavItem = ({ label, link }: NavItemType) => {
  const isDraftItem = label === "Draft";
  return (
    <Button
      variant={isDraftItem ? "default" : "link"}
      asChild
      className={isDraftItem ? "bg-green-600" : ""}
    >
      <Link href={link}>
        {isDraftItem ? <UserPlus size={20} className="mr-2" /> : null}
        {label}
      </Link>
    </Button>
  );
};

export default NavItem;
