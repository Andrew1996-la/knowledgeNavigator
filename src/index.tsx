import {createRoot} from "react-dom/client";
import './style.css';
import {BrowserRouter} from "react-router-dom";
import App from "./app/App";
import {ThemeProvider} from "./app/providers/theme/ui/ThemeProvider";
import './shared/configs/i18n/i18n';

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </>
);

