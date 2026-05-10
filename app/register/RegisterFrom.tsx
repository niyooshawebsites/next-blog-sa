"use client";

import { useActionState } from "react";
import { registerUser } from "../actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";

const initialState = {
  error: "",
  success: "",
};

export default function RegisterForm() {
  const [state, formAction] = useActionState(registerUser, initialState);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-gray-50 p-5 rounded-lg space-y-3 w-3/12">
        <h1 className="text-2xl">Register</h1>

        <Button
          type="button"
          onClick={() => signIn("google")}
          className="w-full bg-black text-white hover:bg-gray-900"
        >
          Register with <span className="text-orange-500">Google</span>
        </Button>

        <hr className="text-gray-200" />

        <form action={formAction} className="space-y-4 ">
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input type="text" name="name" placeholder="John Doe" id="name" />
          </Field>

          <Field>
            <FieldLabel id="email">Email</FieldLabel>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="john@example.com"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="pass">Password</FieldLabel>
            <Input
              name="password"
              type="password"
              id="pass"
              placeholder="****************"
            />
          </Field>

          {state.error && <p className="text-red-500">{state.error}</p>}

          {state.success && <p className="text-green-500">{state.success}</p>}

          <Button type="submit" className="bg-orange-500 text-white">
            Register
          </Button>
        </form>

        <div className="flex justify-center">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
          </span>
          <Link href="/login" className="text-sm mx-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
