import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  return (
    <div className="flex justify-between items-center m-2 pb-2 border-b-2">
      <Link href="/blog-automation">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </Link>
      <Link href="/dashboard/blog-automation">Blog Automation</Link>
      <ModeToggle />
    </div>
  );
}
