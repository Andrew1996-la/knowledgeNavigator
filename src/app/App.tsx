import {Link, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/Home";
import {AboutPage} from "../pages/About";

const App = () => {
    return (
        <div>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
};

export default App;