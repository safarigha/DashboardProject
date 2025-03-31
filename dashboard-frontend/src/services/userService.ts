import api from "./api";

export interface SignupInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const userService = {
  signup: async (data: SignupInput) => {
    const response = await api.post("/user/signup", data); // ← مسیر درست
    return response.data;
  },

  // مثال برای login بعداً:
  // login: async (data: LoginInput) => {
  //   const res = await api.post("/auth/login", data);
  //   return res.data;
  // },
};

export default userService;
