import axios from "axios";

const useAxios = () => {
  const baseUrl =
    import.meta.env.MODE === "production"
      ? "https://your-render-api.onrender.com"
      : "http://localhost:3001";

  const get = (url) => axios.get(`${baseUrl}${url}`);
  const post = (url, data) => axios.post(`${baseUrl}${url}`, data);
  const patch = (url, data) => axios.patch(`${baseUrl}${url}`, data);

  return { get, post, patch };
};

export default useAxios;
