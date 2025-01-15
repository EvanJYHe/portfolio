
const Navbar: React.FC = () => {
    return (
        <nav className="fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <ul className="flex space-x-4">
                    <li>
                        <a href="">Evan He</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>

                <ul className="flex space-x-4">
                    <li>
                        <a href="">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;