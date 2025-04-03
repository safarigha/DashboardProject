import api from "./api";

const weatherServices = {
  getEnglishCityName: async (
    farsiName: string
  ): Promise<{ cityAscii: string }> => {
    const response = await api.get("/weather/getEnglishCityName", {
      params: { farsiName },
    });
    return response.data;
  },
};

export default weatherServices;
