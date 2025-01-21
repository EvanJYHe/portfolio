import Socials from "./Socials";

const Navbar: React.FC = () => {
    return (
        <nav className="w-screen bg-black m-auto">
            <div className="container mx-auto flex md:justify-end sm:justify-center items-center py-6 px-6">
                <Socials/>
            </div>
        </nav>
    );
};

export default Navbar;