import swcConfig from "./swc.dev.js";

export default {
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest", swcConfig]
    },
    testEnvironment: "jsdom",
    extensionsToTreatAsEsm: [".ts", ".tsx"]
};
