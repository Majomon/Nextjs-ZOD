import { signUpSchema } from "@/schema/auth.schema";
import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json("Funciona");
}

export async function POST(request) {
  const body = await request.json();

  /* Compara un objeto con otro */
  const result = signUpSchema.safeParse(body);
  /* Si el resultado es TRUE devuelve el mismo objeto sino devuelve false y el error  */

  if (!result.success) {
    return NextResponse.json(result.error);
  }

  return NextResponse.json(result.data);
}
