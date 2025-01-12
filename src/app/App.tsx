import {AppRouter} from "./routes";
import {Navbar} from "../widgets/Navbar";
import {ThemeSwitcher} from "../widgets/ThemeSwitcher";

const App = () => {
    return (
            <div className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen">
                <Navbar />
                <AppRouter />
                <ThemeSwitcher />
            </div>
    );
};

export default App;
