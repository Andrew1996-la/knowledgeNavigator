import {AppRouter} from "./routes";
import {Navbar} from "../widgets/Navbar";
import {Sidebar} from "../widgets/Sidebar";

const App = () => {
    return (
            <div className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen">
                <Navbar />
                <div>
                    <Sidebar />
                    <AppRouter />
                </div>
                {/*<ThemeSwitcher />*/}
            </div>
    );
};

export default App;
