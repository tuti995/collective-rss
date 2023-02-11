import { NextPage } from "next";
import Link from "next/link";

import posts from ".contents/posts.json";
import { PostItem } from "src/types";
import { PostList } from "src/components/PostList";
import {
  ContentWrapper,
} from "src/components/ContentWrapper";

const Page: NextPage = () => {
  return (
    <>
      <section className="home-posts">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Articles</h2>
          </div>

          <div className="home-posts-container">
            <PostList items={posts as PostItem[]} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default Page;
