import { useState } from "react";
import bgHome from "../assets/bgHome.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import inventoryBackground from "../assets/mc-inventory-bg.png";

const About = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const techStack = [
        "React.js",
        "Node.js",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Git",
        "MongoDB",
    ];

    return (
        <div className="relative h-screen w-full font-minecraftia">
            <img
                src={bgHome}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
                <div className="max-w-3xl text-center">
                    <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
                        Hey there! I'm Akash
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                        A second-year BTech CSE student with a passion for
                        transforming ideas into interactive web experiences.
                        Just like I build worlds in Minecraft, I love
                        constructing websites block by block, turning complex
                        problems into elegant solutions.
                    </p>
                    <p className="text-lg md:text-xl text-white italic">
                        I am currently open for gigs and internships.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-10 w-full flex justify-center">
                <button
                    className="px-6 py-3 bg-gray-800 text-white border-2 border-gray-600 rounded-lg 
                hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 
                shadow-lg text-sm md:text-base font-bold tracking-wide"
                    onClick={handleModal}
                >
                    Click here to see the tech I love building with
                </button>
            </div>
            <Popup open={open} onClose={closeModal} modal nested>
                <div className="modal p-6 bg-[#313131] rounded-none border-4 border-[#5A5A5A] relative minecraft-font">
                    {/* Inventory-style Background */}
                    <div
                        className="absolute inset-0 bg-repeat opacity-75"
                        style={{
                            backgroundImage: `url(${inventoryBackground})`,
                            imageRendering: "pixelated",
                        }}
                    ></div>

                    {/* Inventory Header */}
                    <div className="relative border-b-4 border-[#5A5A5A] mb-4 pb-2">
                        <h2 className="text-3xl text-white text-center">
                            ⚡ Tech Inventory
                        </h2>
                    </div>

                    {/* Close Button - Minecraft Style */}
                    <button
                        className="absolute right-2 top-2 text-white text-2xl hover:text-yellow-400"
                        onClick={closeModal}
                        style={{ textShadow: "2px 2px #000" }}
                    >
                        X
                    </button>

                    {/* Tech Stack Grid - Minecraft Item Slots */}
                    <div className="grid grid-cols-3 gap-4 relative">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="relative h-20 flex items-center justify-center bg-[#3b3b3b] border-4 border-[#727272] hover:border-yellow-400 transition-all group"
                                style={{ imageRendering: "pixelated" }}
                            >
                                {/* Item Background */}
                                {/* <div
                                    className="absolute inset-0 opacity-50 bg-repeat"
                                    style={{
                                        backgroundImage: `url(${itemBorder})`,
                                    }}
                                ></div> */}

                                {/* Item Text */}
                                <span className="text-white text-lg text-center px-2 z-10 group-hover:text-yellow-400">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Inventory Footer */}
                    <div className="mt-4 pt-2 border-t-4 border-[#5A5A5A] text-center text-white">
                        Selected:{" "}
                        <span className="text-yellow-400">
                            Hover to view tools
                        </span>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default About;
