import {RouteProps} from "react-router-dom";
import {HomePage} from "../../../pages/Home";
import {AboutPage} from "../../../pages/About";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

const routerPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routerPath.main,
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: routerPath.about,
        element: <AboutPage />
    }
}