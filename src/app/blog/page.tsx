import serverApolloClient from "@/lib/apollo-server-client";
import "./page-style.scss"
import { POSTS_QUERY } from "@/lib/queries/posts/posts";
import { PostsResponse } from "@/types/response";
import Posts from "@/components/posts/Posts";
import Button from "@/components/button/Button";

export const revalidate = 60;
export const dynamic = 'force-dynamic';

const BlogPage = async () => {
    const paginationArgs = { limit: 9, start: 0 }; 
  
    const { data } = await serverApolloClient.query<PostsResponse>({
      query: POSTS_QUERY,
      variables: { pagination: paginationArgs },
    });
  
    return (
        <main className="main">
            <section className="main__title main-title">
                <div className="main-title__container">
                    <h1 className="main-title__title h1">Blog</h1>
                    <p className="main-title__text text">
                        Open-source threaded team chat that helps teams stay productive and focused.
                    </p>
                </div>
            </section>
            <Posts posts={data.posts} />
            <div className="block flex main-nodes__button">
                <Button text="Next" href="/blog/2"/>
            </div>
            
        </main>
    );
};
  
export default BlogPage;
  