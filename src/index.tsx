import {createRoot} from "react-dom/client";
import {Counter} from "./components/Counter";
import './style.css';

const root = createRoot(document.getElementById('root'));

root.render(<>
    <h1 className="text-4xl text-red-400">My Webpack + Tailwind App</h1>
    <div className="w-[50px] h-[50px] border-2 rounded bg-violet-900"></div>
    <Counter/>
</>);

