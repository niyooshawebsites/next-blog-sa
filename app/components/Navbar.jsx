import Link from "next/link";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
} from "../../components/ui/menubar";

import { auth } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center px-5">
      <div>
        <Link href="/">
          <h1 className="text-3xl">NEXT Js Post Lab</h1>
        </Link>
      </div>

      <Menubar className="m-2 border-0">
        {/* Home */}
        <MenubarMenu>
          <Link href="/">
            <MenubarTrigger className="cursor-pointer">Home</MenubarTrigger>
          </Link>
        </MenubarMenu>

        {/* Blogs */}
        <MenubarMenu>
          <Link href="/blogs">
            <MenubarTrigger className="cursor-pointer">Blogs</MenubarTrigger>
          </Link>
        </MenubarMenu>

        {/* Account Dropdown */}
        <MenubarMenu>
          {session?.user ? (
            <MenubarTrigger className="cursor-pointer">
              Welcome {session.user.email}
            </MenubarTrigger>
          ) : (
            <MenubarTrigger className="cursor-pointer">Account</MenubarTrigger>
          )}

          <MenubarContent>
            <MenubarGroup>
              {session?.user ? (
                <>
                  <MenubarItem asChild className="cursor-pointer">
                    <Link href="/settings">Settings</Link>
                  </MenubarItem>
                  <MenubarItem className="cursor-pointer">
                    <LogoutButton />
                  </MenubarItem>
                </>
              ) : (
                <>
                  <MenubarItem asChild className="cursor-pointer">
                    <Link href="/login">Login</Link>
                  </MenubarItem>

                  <MenubarItem asChild className="cursor-pointer">
                    <Link href="/register">Register</Link>
                  </MenubarItem>
                </>
              )}
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};

export default Navbar;
