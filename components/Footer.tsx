import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
    <React.Fragment>
        <div className="container">
            <footer>
                <div className="copyright">
                    <nav>
                        <ul>
                            <li>&copy; 2020 TypicalBot LLC</li>
                            <li>
                                <Link href="/legal/[slug]" as="/legal/terms">
                                    <a>Terms of Service</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/[slug]" as="/legal/privacy">
                                    <a>Privacy Policy</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
        {/* language=CSS */}
        <style jsx>{`
            .container {
                max-width: 1280px;
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                padding: 0 40px;
            }

            footer {
                margin-top: 140px;
            }

            .copyright {
                padding-top: 48px;
                margin-bottom: 48px;
                border-top: 1px solid rgba(11, 37, 75, 0.1);
                display: flex;
                justify-content: space-between;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                line-height: 24px;
            }

            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            li {
                display: block;
            }

            li:not(:last-child) {
                margin-bottom: 10px;
            }

            @media (min-width: 62.5em) {
                li {
                    display: inline-block;
                }

                li:not(:last-child) {
                    margin-bottom: 0;
                    margin-right: 48px;
                }
            }

            li a {
                color: rgba(11, 37, 75, 0.7);
                text-decoration: none;
                transition: all 180ms ease-out 0s;
            }

            li a:hover {
                color: #1976d2;
            }
        `}</style>
    </React.Fragment>
);

export default Footer;