import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16  dark:bg-black sm:items-start">
        <h1 className="text-3xl text-gray-100 ">Welcome to the Post lab</h1>
        <h2>Lorem, ipsum dolor.</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse
          unde. Illum molestiae, quibusdam, deserunt, vero ipsam nesciunt dolor
          placeat id nostrum voluptates voluptatem! Consequatur placeat minima
          accusantium vero. Nobis.
        </p>
        <Button>Login</Button>
      </main>
    </div>
  );
}
