export function NavComponent() {
    return (
        <header id="header">
            <div className="container d-flex justify-content-between">

                <div className="logo">
                    <h1 className="text-light"><a href="index.html"><span>Eterna</span></a></h1>
                </div>

                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li className="active"><a href="index.html">Home</a></li>

                        <li className="drop-down"><a href="#">About</a>
                            <ul>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="team.html">Team</a></li>

                                <li className="drop-down"><a href="#">Drop Down 2</a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><a href="services.html">Services</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>

                    </ul>
                </nav>

            </div>
        </header>
    )
}
