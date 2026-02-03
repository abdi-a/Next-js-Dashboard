"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { type SignUpFormValues, SignUpSchema } from "@/lib/types";
import { hash } from "bcryptjs";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function signup(prevState: any, formData: FormData) {
  const result = SignUpSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = result.data;

  // Check if user exists
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      errors: {
        email: ["Email is already registered"],
      },
    };
  }

  // Hash password
  const hashedPassword = await hash(password, 10);

  // Create user
  const user = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Create session
  await createSession(user.id);

  redirect("/dashboard");
}
