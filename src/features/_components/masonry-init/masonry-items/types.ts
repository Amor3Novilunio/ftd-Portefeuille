import type { Item } from "@/components/react-bits/masonry";

export type MasonryItemsProps = {
  payload: Array<Record<string, unknown>>;
  items: Item[];
};

export type PayloadCollectionData = {
  repo: string;
  title: string;
  htmlUrl: string;
  mdFile: string;
};
