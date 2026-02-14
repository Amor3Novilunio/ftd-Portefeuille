export const repoName = (title: string) => {
  const CATEGORY_PREFIX = /^(ftd|tls|bkd|\.md)-/i;
  const MARKDOWN_EXT = /\.md$/i;
  return title.replace(CATEGORY_PREFIX, "").replace(MARKDOWN_EXT, "");
};
