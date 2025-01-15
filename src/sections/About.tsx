const About: React.FC = () => {
    return (
        <div className="flex items-center h-screen w-screen">
            <div className="flex flex-row items-center justify-center gap-8 max-w-5xl mx-auto border-2 shadow-lg">
                <img 
                    src="src/assets/selfie.jpg" 
                    className="w-80 h-80 rounded-full object-cover flex-shrink-0 shadow-2xl"
                />
                <div className="flex flex-col items-start">
                    <h1 className="text-6xl font-bold mb-2">About Me</h1>
                    <p className="text-2xl font-bold mb-4">dasjdojsadaasdasdasdsadasdasd</p>
                    <p className="text-1xl">dasjdojsadaasdasdasdsadasdasd</p>
                </div>
            </div>
        </div>
    );
};

export default About;
