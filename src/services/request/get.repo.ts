import type { Item } from "@/components/react-bits/masonry";
import axios from "@/services/axios";
import { repoName } from "@/utils/fns";
import { useQuery } from "@tanstack/react-query";

type GithubRepoData = {
  id: number;
  name: string;
  [key: string]: unknown;
};

export default () => {
  const { get } = axios({ baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL });
  const user = import.meta.env.VITE_GITHUB_USER;
  const defaultProjectImg = import.meta.env.VITE_DEFAULT_IMG_URL;

  const gitHubRawLogoUrl = (repo: string) => {
    const baseUrl = import.meta.env.VITE_GITHUB_RAW_BASE_URL;
    return `${baseUrl}/${user}/${repo}/refs/heads/main/public/logo.jpg`;
  };

  const getCollection = () =>
    useQuery({
      queryKey: ["getCollection", `/users/${user}/repos`],
      enabled: true,
      queryFn: () => get(`/users/${user}/repos`).then((res) => res),
      select(data) {
        const collection = (data.payload as GithubRepoData[])
          .filter((item) => item.name !== "Amor3Novilunio")
          .map((item) => ({ ...item, repo: item.name, mdFile: "README.md" }));

        const masonryItems: Item[] = collection
          .map((payload) => ({
            id: `${payload.id}`,
            title: `${payload.name}`,
            img: gitHubRawLogoUrl(payload.name),
            height: 500,
          }))
          .filter((item) => !item.title.includes("md"));

        return {
          payload: collection,
          masonryItems,
        };
      },
    });

  const getBrainDumpMD = () =>
    useQuery({
      queryKey: ["getCollection", `/repos/${user}/md-brain-dump/contents`],
      enabled: true,
      queryFn: () =>
        get(`/repos/${user}/md-brain-dump/contents`).then((res) => res),
      select(data) {
        const collection = (data.payload as GithubRepoData[]).map((item) => ({
          ...item,
          id: item.name,
          repo: "md-brain-dump",
          name: repoName(item.name),
          mdFile: `${item.name}`,
        }));

        const masonryItems: Item[] = collection.map((payload) => ({
          id: `${payload.id}`,
          title: `${payload.name}`,
          img: defaultProjectImg,
          height: 500,
        }));

        return {
          payload: collection,
          masonryItems,
        };
      },
    });
  return { getCollection, getBrainDumpMD };
};
