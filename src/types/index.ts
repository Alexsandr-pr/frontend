


export interface IPost {
    documentId: string;
    __typename?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt: string;
    content?: string;
    title?: string;
    image: ImageI;
    users_permissions_user: UsersPermissionsUser;
    slug: string;
    description?: string;
}



export interface UsersPermissionsUser {
    __typename?: string;
    image: ImageI;
    username?: string;
    firstname?: string;
    lastname?: string;
}

export interface ImageI {
    id?: number;
    documentId?: string;
    name?: string;
    url: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number;
    height?: number;
    formats?: ImageFormatsI;
    hash?: string;
    ext?: string;
    mime?: string;
    previewUrl?: string | null;
    provider?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    provider_metadata?: string | null;
    size?: number;
}

export interface ImageFormatsI {
    thumbnail?: ImageFormatI;
    medium?: ImageFormatI;
    small?: ImageFormatI;
    large?: ImageFormatI;
}

export interface ImageFormatI {
    url?: string;
    name: string;
    hash?: string;
    ext?: string;
    mime?: string;
    path?: string | null;
    width?: number;
    height?: number;
    size?: number;
    sizeInBytes?: number;
}