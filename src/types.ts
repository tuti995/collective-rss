export type GetList = {
  name: string;
  sources?: string[];
};

export type PostItem = {
  // authorId: string;
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};
