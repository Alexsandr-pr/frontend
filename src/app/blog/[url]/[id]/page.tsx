import serverApolloClient from '@/lib/apollo-server-client';
import { POST_QUERY } from '@/lib/queries/posts/post';
import { PostResponse } from '@/types/response';

import "./page.scss"
import Author from '@/components/author/Author';
import Image from 'next/image';
import { getImageLink } from '@/lib/utils';
import AuthorPost from '@/components/author-post/AuthorPost';
import PostContentBlock from '@/components/post-content/PostContent';

const PostPage = async ({
    params
} : {
    params: {
        id: string;
    }
}) => {
    const { id } = params;
    
    const { data } = await serverApolloClient.query<PostResponse>({
        query: POST_QUERY,
        variables: { documentId: id }
    });
    
    const { post } = data;
    
    return (
        <main className="main">
            <section className="main__blog blog-section block">
                <h1 className='h1 blog-section__title'>
                    {post.title}
                </h1>
                <Author
                    users_permissions_user={post?.users_permissions_user}
                    publishedAt={post?.publishedAt}
                />
            </section>
            <div className="main__image-container">
                <Image
                    height={500}
                    width={962}
                    alt={post.image.alternativeText || ""}
                    src={getImageLink(post.image.url)}
                />
            </div>
            <div className="main__blog-content block">
                <PostContentBlock
                    content={post.content}
                />
                <AuthorPost users_permissions_user={post.users_permissions_user}/>
            </div>
        </main>
    )
}

export default PostPage