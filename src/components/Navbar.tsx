import Socials from "./Socials";

const Navbar: React.FC = () => {
    return (
        <nav className="w-screen top-0 left-0 z-50 bg-black">
            <div className="container mx-auto flex justify-end items-center py-4">
                <Socials/>
            </div>
        </nav>
    );
};

export default Navbar;