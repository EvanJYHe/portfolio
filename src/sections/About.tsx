const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-screen bg-white my-4">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">About Me</h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl w-full">
                <img
                    src="/selfie.jpg"
                    className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg flex-shrink-0"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <p className="text-base sm:text-lg md:text-xl mb-4 px-4 sm:px-8 md:px-0 leading-relaxed">
                        Hi! I'm Evan He, a Management Engineering student at the University of Waterloo. I'm passionate
                        about programming, game development, and creating innovative solutions to complex problems.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-0 leading-relaxed">
                        When I'm not coding or studying, you can find me reading a good book, playing badminton,
                        enjoying video games, or spending time with my cat. I believe in continuous learning and always
                        strive to expand my skills and knowledge in the ever-evolving world of technology.
                    </p>
                </div>
            </div>

            
        </div>
    );
};

export default About;
