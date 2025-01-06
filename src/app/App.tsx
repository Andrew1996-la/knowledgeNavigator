import { useTheme } from "./providers/theme/lib/useTheme";
import {AppRouter} from "./routes";
import {Navbar} from "../widgets/Navbar";

const App = () => {
    const { toggleTheme } = useTheme();

    return (
            <div className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen">
                <Navbar />
                <AppRouter />
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
