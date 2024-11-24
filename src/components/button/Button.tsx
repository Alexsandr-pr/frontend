import Link from "next/link";
import "./button.scss"

const Button = ({
    href,
    text
} : {
    href: string;
    text: string;
}) => {


    return (
        <Link href={href} prefetch className="link-button">
            {text}
        </Link>
    )
}

export default Button