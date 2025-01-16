const About: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[80vh] w-screen">
            <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-7xl mx-aut border rounded-lg shadow-md">
                <img 
                    src="src/assets/selfie.jpg" 
                    className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                    <p className="text-lg md:text-xl font-medium mb-6">
                        dasjdojsadaasdasdasdsadasdasddasjdojsadaasdasdasdsadasdasd
                    </p>
                    <p className="text-base md:text-lg">
                        dasjdojsadaasdasdasdsadasdasddasjdojsadaasdasdasdsadasdasd
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;