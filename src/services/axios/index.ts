import axios from "axios";

type AxiosProps = {
  baseURL: string;
};

export default ({ baseURL }: AxiosProps) => {
  const api = axios.create({
    baseURL,
  });

  const get = async (path: string) => {
    const request = await api.get(path);
    return {
      headers: request.headers,
      status: {
        number: request.status,
        text: request.statusText,
      },
      payload: request.data,
    };
  };

  const post = async <T>(path: string, body: T) => {
    const request = await api.post(path, body);
    return {
      headers: request.headers,
      status: {
        number: request.status,
        text: request.statusText,
      },
      payload: request.data,
    };
  };

  return { get, post };
};
