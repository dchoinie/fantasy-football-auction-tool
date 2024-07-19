import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export interface NavItemType {
  label: string;
  link: string;
}

const NavItem = ({ label, link }: NavItemType) => {
  return (
    <Button variant="link" asChild>
      <Link href={link}>{label}</Link>
    </Button>
  );
};

export default NavItem;
