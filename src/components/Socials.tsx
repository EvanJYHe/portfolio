const Socials: React.FC = () => {
    return (
        <div className="text-2xl flex justify-center items-center gap-10">
            <a 
                href="https://github.com/EvanJYHe" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <i className="fab fa-github text-white"></i>
            </a>
            <a 
                href="https://www.linkedin.com/in/evan-he-4253712a9/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <i className="fab fa-linkedin text-white"></i>
            </a>
            <a 
                href="mailto:e35he@uwaterloo.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Email"
            >
                <i className="fa fa-envelope text-white"></i>
            </a>
            <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Resume"
            >
                <i className="fa fa-file text-white"></i>
            </a>
        </div>
    );
};

export default Socials;
