import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start space-y-4">
        <h1 className="text-3xl ">Welcome to the Post lab</h1>
        <p className="text-sm">
          A web app where users can share their thoughts, opinions, and
          perspectives on different topics. People can create posts, interact
          through comments, and engage in meaningful discussions with others
          worldwide. The platform encourages open communication, idea sharing,
          and community building in a simple, user-friendly, and interactive
          environment for everyone online.
        </p>

        <div className="space-x-2">
          <Link href="/login">
            <Button
              type="button"
              variant="secondary"
              className="bg-gray-900 hover:bg-gray-950 text-white cursor-pointer"
            >
              Login
            </Button>
          </Link>

          <Link href="/register">
            <Button type="button" variant="outline" className="cursor-pointer">
              Register
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
