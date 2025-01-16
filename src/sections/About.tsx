const About: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[70vh] w-screen">
            <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 md:max-w-7xl mx-auto border rounded-xl shadow-lg">
                <img
                    src="src/assets/selfie.jpg"
                    className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">About Me</h1>
                    <p className="text-lg md:text-xl font-medium mb-8 text-gray-800">
                        Hi! My name is Evan He, and I'm a student in Management Engineering @ The University of Waterloo.
                    </p>
                    <p className="text-base md:text-xl font-medium text-gray-800 ">
                        I like programming, game development, and making random stuff. In my free time I like to read, play badminton, play games, and annoy my cat
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;