import Link from "next/link"
import Image from "next/image"
import BaseBlock from "./_components/BaseBlock"
import FooterForm from "./_components/FooterForm"

import "./footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__body footer-body">
                    <div className="footer-body__left footer-left gap-1">
                        <Link prefetch href="/" className="footer-left__logo">
                            <Image
                                src="/assets/logo.png"
                                height={34}
                                width={138}
                                alt="Logo"
                            />
                        </Link>
                        <p className="footer-left__text footer-link">
                            Collaboration platform for mordern team 
                        </p>
                    </div>
                    <div className="footer-body__content footer-content">
                        <div className="footer-content__main">
                            <BaseBlock title="Company">
                                <ul className="footer-item__list footer-list">
                                    <li className="footer-list__item">
                                        <Link href="/" className="footer-list__link footer-link">
                                            Product
                                        </Link>
                                    </li>
                                    <li className="footer-list__item">
                                        <Link href="/" className="footer-list__link footer-link">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="footer-list__item">
                                        <Link href="/" className="footer-list__link footer-link">
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </BaseBlock>
                            <BaseBlock title="Features">
                                <ul className="footer-item__list footer-list">
                                    <li className="footer-list__item">
                                        <Link href="/" className="footer-list__link footer-link">
                                            Screen Sharing
                                        </Link>
                                    </li>
                                    <li className="footer-list__item">
                                        <Link href="/" className="footer-list__link footer-link">
                                            iOS & Android Apps
                                        </Link>
                                    </li>
                                    <li className="footer-list__item">
                                        <Link href="/" className="footer-list__link footer-link">
                                            File Sharing
                                        </Link>
                                    </li>
                                    <li className="footer-list__item">
                                        <Link href="/" className="footer-list__link footer-link">
                                            User Managment
                                        </Link>
                                    </li>
                                </ul>
                            </BaseBlock>
                            <BaseBlock title="Contact Us">
                                <ul className="footer-item__list footer-list">
                                    <li className="footer-list__item">
                                        <Link href="mail-to:info@teamapp.com" className="footer-list__link footer-link">
                                            info@teamapp.com
                                        </Link>
                                    </li>
                                    <li className="footer-list__item">
                                        <Link href="tel:1800200300" className="footer-list__link footer-link">
                                            info@teamapp.com
                                        </Link>
                                    </li>
                                    <li className="footer-list__item">
                                        <Link href="/" className="footer-list__link footer-link">
                                            1010 Sunset Blv.
                                            Palo Alto, California
                                        </Link>
                                    </li>
                                </ul>
                            </BaseBlock>
                        </div>
                        <BaseBlock title="Stay up to date ">
                           <FooterForm/>
                        </BaseBlock>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer-link">© Copyright Team Inc.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer