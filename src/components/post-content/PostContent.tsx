import "./post-content.scss"
import Link from 'next/link';

const PostContentBlock = ({
    content
}: {
    content?: string;
}) => {
    return (
        <div
            className='post-content'
            dangerouslySetInnerHTML={{ __html: content || "" }}
        />
    );
}

export default PostContentBlock;
