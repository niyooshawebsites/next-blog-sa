import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signIn } from "@/lib/auth";
import { sendVerificationEmail } from "@/lib/mail";
import crypto from "crypto";

// REGISTER ACTION

export const registerUser = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  // Validation
  if (!name || !email || !password) {
    return { error: "All fields are required" };
  }

  // Check existing user
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "User already exists" };
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        emailVerified: null,
      },
    });

    // create verification token
    const token = await crypto.randomBytes(32).toString("hex");

    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
      },
    });

    // send verification email
    const verifyUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`;

    await sendVerificationEmail(email, verifyUrl);

    return {
      success: "Check your email to verify account",
    };
  } catch (error) {
    console.error("Register error:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

// LOGIN ACTION
export const loginUser = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/dashboard",
  });
};
