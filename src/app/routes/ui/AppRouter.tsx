import {Route, Routes} from "react-router-dom";
import {routerConfig} from "../../../shared/configs/routerConfig/RouterConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routerConfig).map(({path, element}) => (
                <Route key={path} path={path} element={element}/>
            ))}
        </Routes>
    )
}