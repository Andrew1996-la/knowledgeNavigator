import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { AboutPage } from "../pages/About";
import { useTheme } from "./providers/theme/lib/useTheme";

const App = () => {
    const { toggleTheme } = useTheme();

    return (
            <div className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen">
                <nav className="p-4">
                    <Link to="/" className="mr-4 hover:text-light-primary dark:hover:text-dark-primary">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-light-primary dark:hover:text-dark-primary">
                        About
                    </Link>
                </nav>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>

                <button
                    onClick={toggleTheme}
                    className="mt-4 px-4 py-2 rounded bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text"
                >
                    Toggle Theme
                </button>
            </div>
    );
};

export default App;
