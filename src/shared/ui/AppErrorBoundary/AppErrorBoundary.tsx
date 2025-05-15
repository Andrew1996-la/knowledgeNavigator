import {ErrorBoundary} from "react-error-boundary";
import {FC, ReactNode} from "react";
import {DefaultErrorBoundary} from "../../../widgets/ErrorBoundary";

interface AppErrorBoundaryProps {
    children: ReactNode;
}

export const AppErrorBoundary:FC<AppErrorBoundaryProps> = ({children}) => {
    const errorLogger = (error: Error) => {
        console.error(error)
    }

    return (
        <ErrorBoundary fallback={<DefaultErrorBoundary />} onError={errorLogger}>
            {children}
        </ErrorBoundary>
    )
}