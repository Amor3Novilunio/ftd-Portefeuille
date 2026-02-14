import axios from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

export default () => {
  const { get } = axios({ baseURL: import.meta.env.VITE_GITHUB_RAW_BASE_URL });
  const user = import.meta.env.VITE_GITHUB_USER;

  const getReadme = ({
    repo,
    branch = "main",
    mdName = "README.md",
  }: {
    repo?: string;
    branch?: string;
    mdName?: string;
  }) =>
    useQuery({
      queryKey: ["getReadme", `/${user}/${repo}/${branch}/${mdName}`],
      enabled: !!repo,
      queryFn: () =>
        get(`/${user}/${repo}/${branch}/${mdName}`).then((res) => res),
      select(data) {
        return {
          payload: data.payload,
        };
      },
    });

  return { getReadme };
};
