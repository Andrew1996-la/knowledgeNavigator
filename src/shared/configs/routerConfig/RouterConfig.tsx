import { RouteProps } from 'react-router-dom';
import { AboutPage } from '../../../pages/About';
import { HomePage } from '../../../pages/Home';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

const routerPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routerPath.main,
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: routerPath.about,
        element: <AboutPage />,
    },
};
