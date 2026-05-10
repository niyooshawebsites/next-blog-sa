"use client";

import { useActionState } from "react";
import { registerUser } from "../actions/auth-actions";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";

const initialState = {
  error: "",
  success: "",
};

const RegisterPage = () => {
  const [state, formAction] = useActionState(registerUser, initialState);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-gray-50 p-5 rounded-lg space-y-3">
        <h1 className="text-2xl">Register </h1>
        <Button
          type="button"
          variant="outline"
          className="w-full bg-black text-white cursor-pointer my-4 hover:bg-gray-900"
          onClick={() => {
            signIn("google");
          }}
        >
          Register with Google
        </Button>

        <hr className="text-gray-200" />

        <form action={formAction} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>

            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />

            <FieldDescription className="text-gray-500 text-sm">
              Enter your full name
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>

            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <FieldDescription className="text-gray-500 text-sm">
              Enter your email carefully
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Create your password"
            />

            <FieldDescription className="text-gray-500 text-sm">
              Create a strong alpha-numeric-special character password
            </FieldDescription>
          </Field>

          {state.error && <p className="text-red-500">{state.error}</p>}

          {state.success && <p className="text-green-500">{state.success}</p>}

          <Button
            type="submit"
            variant="outline"
            className="hover:cursor-pointer bg-purple-500 text-white hover:bg-purple-600"
          >
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
};

export default RegisterPage;
