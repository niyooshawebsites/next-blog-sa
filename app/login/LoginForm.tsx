"use client";

import { signIn } from "next-auth/react";
import { loginUser } from "../actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" bg-gray-50 p-5 rounded-lg space-y-3 w-3/12">
        <h1 className="text-2xl">Login</h1>

        <Button
          type="button"
          onClick={() => signIn("google")}
          className="w-full bg-black text-white"
        >
          Login with <span className="text-orange-500">Google</span>
        </Button>

        <form action={loginUser} className="space-y-4">
          <Field className="w-full">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="john@exmaple.com"
              className="w-full"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="pass">Password</FieldLabel>
            <Input
              name="password"
              type="password"
              id="pass"
              placeholder="***************"
            />
          </Field>

          <Button type="submit" className="bg-orange-500 text-white">
            Login
          </Button>
        </form>

        <div className="flex justify-center">
          <span className="text-sm text-gray-600">
            Don&#39;t have an account?{" "}
          </span>
          <Link href="/register" className="text-sm mx-2">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
