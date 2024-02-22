import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string({
        required_error: "El nombre es requerido",
      })
      .min(2, {
        message: "El nombre deberia tener al menos 2 caracteres",
      })
      .max(50, {
        message: "El nombre deberia tener máximo 50 caracteres",
      }),
    lastName: z
      .string({ required_error: "El apellido es requerido" })
      .min(2, {
        message: "El apellido deberia tener al menos 2 caracteres",
      })
      .max(50, {
        message: "El apellido deberia tener máximo 50 caracteres",
      }),
    email: z.string({ required_error: "El email es requerido" }).email(),
    password: z
      .string({ required_error: "El password es requerido" })
      .min(6)
      .max(50),
    confirmPassword: z
      .string({ required_error: "El confirmPassword es requerido" })
      .min(6)
      .max(50),
    age: z
      .number({ required_error: "" })
      .int()
      .positive()
      .min(18)
      .max(100)
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    /* Mensaje del error */
    message: "La contraseña no coincide",
    /* Quien lanza el error */
    path: ["confirmPassword"],
  });