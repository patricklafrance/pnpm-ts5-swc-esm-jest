import "./index.css";

import { ShareGateTheme, ThemeProvider, createThemeVars } from "@sharegate/orbit-ui";
import { StrictMode, Suspense } from "react";

import { App } from "./App.tsx";
import { Loading } from "@root/components/Loading.tsx";
import { createRoot } from "react-dom/client";

createThemeVars([ShareGateTheme]);

const root = createRoot(document.getElementById("root")!);

root.render(
    <StrictMode>
        <Suspense fallback={<Loading />}>
            <ThemeProvider theme={ShareGateTheme} colorScheme="light">
                <App />
            </ThemeProvider>
        </Suspense>
    </StrictMode>
);
