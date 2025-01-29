import bgHome from "../assets/bgHome.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-full font-minecraftia">
            <img
                src={bgHome}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ imageRendering: "pixelated" }}
            />

            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
                <h1
                    className="text-5xl text-white mb-12"
                    style={{
                        textShadow: "4px 4px #000",
                        fontWeight: 900,
                    }}
                >
                    Hi! I'm Akash
                </h1>

                <div className="flex flex-col gap-6">
                    <button
                        className="px-12 py-4 bg-[#7d7d7d] text-black text-xl
                               border-t-2 border-l-2 border-r-2 border-b-4 border-[#000]
                               hover:bg-[#9d9d9d] hover:-translate-y-1 transition-all"
                        onClick={() => navigate("/about")}
                    >
                        About Me
                    </button>
                    <button
                        className="px-12 py-4 bg-[#5d5d5d] text-white text-xl
                               border-t-2 border-l-2 border-r-2 border-b-4 border-[#000]
                               hover:bg-[#7d7d7d] hover:-translate-y-1 transition-all"
                        onClick={() => navigate("/projects")}
                    >
                        Projects
                    </button>

                    <button
                        className="px-12 py-4 bg-[#b33a3a] text-white text-xl
                               border-t-2 border-l-2 border-r-2 border-b-4 border-[#000]
                               hover:bg-[#d34a4a] hover:-translate-y-1 transition-all mt-8"
                        onClick={() => navigate("/")}
                    >
                        Exit to Title
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;