import Socials from "./Socials";

const Footer: React.FC = () => {
    return (
        <footer className="w-screen bg-black">
            <div className="container mx-auto flex justify-center items-center py-6 px-6">
                <Socials/>
            </div>
        </footer>
    );
};

export default Footer;
