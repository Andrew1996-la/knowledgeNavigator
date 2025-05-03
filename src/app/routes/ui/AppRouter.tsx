import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../../../shared/configs/routerConfig/RouterConfig';
import {Suspense} from "react";
import {PageLoader} from "../../../widgets/PageLoader";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className='grow'>
                        <Suspense fallback={ <PageLoader />}>
                            {element}
                        </Suspense>
                    </div>}
                />
            ))}
        </Routes>
    );
};
