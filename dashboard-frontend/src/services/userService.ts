import api from "./api";
import {
  SignupInput,
  SigninInput,
  SigninResponse,
  CheckAuthResponse,
} from "@/schemas/userSchema";

const userService = {
  signup: async (data: SignupInput) => {
    const response = await api.post("/user/signup", data);
    return response.data;
  },

  signin: async (data: SigninInput): Promise<SigninResponse> => {
    const response = await api.post<SigninResponse>("/user/signin", data);
    return response.data;
  },

  checkAuth: async () => {
    const response = await api.get<CheckAuthResponse>("/user/checkAuth");
    return response.data;
  },
};

export default userService;
