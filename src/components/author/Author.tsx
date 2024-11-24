import { formatIsoDate, getImageLink } from '@/lib/utils';
import { UsersPermissionsUser } from '@/types';
import Image from 'next/image'
import React from 'react'
import "./author.scss"


const Author = ({
    users_permissions_user,
    publishedAt
} : {
    users_permissions_user: UsersPermissionsUser;
    publishedAt: string;
}) => {
    return (
        <div className="post-body__description">
            <div className="post-body__author">
                <Image
                    alt={users_permissions_user?.username || ""}
                    height={48}
                    width={48}
                    src={getImageLink(users_permissions_user.image.url)}
                />
                <p>{users_permissions_user?.username}</p>
            </div>
            |
            <p className="post-body__date">{formatIsoDate(publishedAt)}</p>
        </div>
    )
}

export default Author