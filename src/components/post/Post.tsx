import { IPost } from "@/types"
import "./post.scss"
import Image from "next/image"
import {    getImageLink } from "@/lib/utils"
import Link from "next/link"
import Author from "../author/Author"

const Post = ({
    title,
    image,
    users_permissions_user,
    publishedAt,
    slug,
    description,
    documentId
} : IPost) => {


    return (
        <article className="post-body">
            <Link href={`/blog/${slug}/${documentId}`} className="post-body__image">
                <Image
                    alt={image?.alternativeText || image?.name || ""}
                    height={image?.height}
                    width={image?.width}
                    src={getImageLink(image.url)}
                />
            </Link>
            <div className="post-body__content">
                <div className="post-body__top">
                    <h2 className="post-body__title">
                        <Link href={`/blog/${slug}/${documentId}`} prefetch>
                            {title}
                        </Link>
                    </h2>
                    <p className="post-body__text text">{description}</p>
                </div>
                <Author
                    users_permissions_user={users_permissions_user}
                    publishedAt={publishedAt}
                />
            </div>
        </article>
    )
}

export default Post