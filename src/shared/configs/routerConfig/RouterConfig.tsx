import { RouteProps } from 'react-router-dom';
import { AboutPage } from '../../../pages/About';
import { HomePage } from '../../../pages/Home';
import { NotFound} from "../../../pages/NotFound";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

const routerPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
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
    [AppRoutes.NOT_FOUND]: {
        path: routerPath.notFound,
        element: <NotFound />
    }
};
