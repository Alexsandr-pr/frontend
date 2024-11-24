import { IPost } from "@/types"
import "./posts.style.scss"
import Post from "../post/Post";



const Posts = ({
    posts
} : {
    posts: IPost[];
}) => {
    return (
        <div className="posts-items _container">
            {
                posts.map(post => {
                    return <Post key={post.documentId} {...post}/>
                })
            }
        </div>
    )
}

export default Posts