import { GetList } from "@src/types";

export const getLists: GetList[] = [
  {
    name: "Zenn",
    sources: ["https://zenn.dev/feed"],
  },
  {
    name: "Qiita",
    sources: ["https://qiita.com/popular-items/feed"],
  },
  {
    name: "企業テックブログ",
    sources: ["https://yamadashy.github.io/tech-blog-rss-feed/feeds/rss.xml"],
  },
  {
    name: "コリス",
    sources: ["http://feeds.feedburner.com/coliss"],
  },
  {
    name: "CodeZine",
    sources: ["https://codezine.jp/rss/new/20/index.xml"],
  },
];
