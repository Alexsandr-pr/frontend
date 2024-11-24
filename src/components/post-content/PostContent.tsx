import "./post-content.scss"

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
