import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
        <h1 className="text-3xl text-gray-100 ">Welcome to the Post lab</h1>
        <h2>Lorem, ipsum dolor.</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse
          unde. Illum molestiae, quibusdam, deserunt, vero ipsam nesciunt dolor
          placeat id nostrum voluptates voluptatem! Consequatur placeat minima
          accusantium vero. Nobis.
        </p>
        <Link href="/login">
          <Button>Login</Button>
        </Link>

        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </main>
    </div>
  );
}
