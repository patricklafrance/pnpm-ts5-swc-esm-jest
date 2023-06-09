import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./Home.tsx";
import { Loading } from "@root/components/Loading.tsx";
import { RootErrorBoundary } from "./RootErrorBoundary.tsx";
import { RootLayout } from "./RootLayout.tsx";
import { useMemo } from "react";

export function App() {
    const router = useMemo(() => {
        return createBrowserRouter([{
            element: <RootLayout />,
            children: [
                {
                    // Pathless route to set an error boundary inside the layout instead of outside.
                    // It's quite useful to prevent losing the layout when an unmanaged error occurs.
                    errorElement: <RootErrorBoundary />,
                    children: [
                        {
                            index: true,
                            element: <Home />
                        }
                    ]
                }
            ]
        }]);
    }, []);

    return (
        <RouterProvider
            router={router}
            fallbackElement={<Loading />}
        />
    );
}
