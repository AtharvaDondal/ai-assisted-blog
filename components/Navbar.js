// components/Navbar.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { ModeToggle } from "./theme-btn";


const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Atharva's Blog</Link>
        </div>
        
        <div className="hidden md:flex space-x-4 items-center">
          <Link className="hover:scale-105 transition-transform duration-300" href="/">
            Home
          </Link>
          <Link className="hover:scale-105 transition-transform duration-300" href="/about">
            About
          </Link>
          <Link className="hover:scale-105 transition-transform duration-300" href="/blog">
            Blog
          </Link>
          <Link  className="hover:scale-105 transition-transform duration-300" href="/contact">
            Contact
          </Link>
          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              SignUp
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
       <span className="mx-2">

            <ModeToggle/>
       </span>
        <Sheet>
        <SheetTrigger>
                        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
       </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="font-bold my-4">Atharva's Blog</SheetTitle>
      <SheetDescription>
      <div className="flex flex-col gap-5">
          <Link className=" hover:scale-105 transition-transform duration-300" href="/">
            Home
          </Link>
          <Link className="hover:scale-105 transition-transform duration-300" href="/about">
            About
          </Link>
          <Link className="hover:scale-105 transition-transform duration-300" href="/blog">
            Blog
          </Link>
          <Link  className="hover:scale-105 transition-transform duration-300" href="/contact">
            Contact
          </Link>
          <div>
            <Button className="mx-1 text-xs" variant="outline">
              Login
            </Button>
            <Button className="mx-1 text-xs" variant="outline">
              SignUp
            </Button>

          </div>
          </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
