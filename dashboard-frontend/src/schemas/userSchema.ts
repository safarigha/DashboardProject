import { z } from "zod";

export const signupSchema = z
  .object({
    username: z.string().min(5, "نام کاربری الزامی است"),
    email: z.string().email("ایمیل معتبر وارد کنید"),
    password: z.string().min(6, "رمز عبور حداقل باید 6 کاراکتر باشد"),
    confirmPassword: z.string().min(6, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن باید یکسان باشند",
    path: ["confirmPassword"],
  });
export type SignupInput = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
  email: z.string().email("ایمیل الزامی است"),
  password: z.string().min(6, "رمز عبور الزامی است"),
});
export type SigninInput = z.infer<typeof signinSchema>;

export type SigninResponse = {
  message: string;
  username: string;
  token: string;
};
