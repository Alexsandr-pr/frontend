import Image from "next/image"
import "./author-post.scss"
import { getImageLink } from "@/lib/utils"
import { UsersPermissionsUser } from "@/types"

const AuthorPost = ({
    users_permissions_user
} : {
    users_permissions_user: UsersPermissionsUser;
}) => {
    const {
        firstname,
        lastname,
        image,
        username
    } = users_permissions_user;

    return (
        <div className="author-post">
            <div className="author-post__image">
                <Image
                    alt={username || ""}
                    height={64}
                    width={64}
                    src={getImageLink(image.url)}
                />
            </div>
            <div className="author-post__description author-description">
                <span className="author-description__label">
                    Written by
                </span>
                <p className="author-description__name">
                    {firstname} {lastname}
                </p>
                <p className="author-description__description">
                    COO at Team. Author of the upcoming book on Team Management and Leadership.
                </p>
            </div>
        </div>
    )
}

export default AuthorPost