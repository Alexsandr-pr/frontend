import Link from "next/link";
import HeaderLogo from "./_components/HeaderLogo";

import "./header.scss";

const Header = () => {

    return (
        <header className='header'>
            <div className="header__container">
                <HeaderLogo/>
                <nav>
                    <ul>
                        <li>
                            <Link href="/blog">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header