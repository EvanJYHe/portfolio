
const Navbar: React.FC = () => {
    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-gray-100">
            <div className="container mx-auto flex justify-between items-center py-4">
                <ul className="flex space-x-4 text-2xl">
                    <li>
                        <a href="" className="text-black font-bold">
                            Evan He
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-black font-bold">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-black font-bold">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-black font-bold">
                            Contact
                        </a>
                    </li>
                </ul>

                <ul className="flex space-x-4 text-3xl">
                    <li>
                        <a href="" className="text-black">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-black">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-black">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;