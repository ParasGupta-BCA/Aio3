import {
    jsx as _jsx
} from "react/jsx-runtime";
import * as React from "react";
import {
    Frame,
    addPropertyControls,
    ControlType
} from "framer";

function getStoredTheme() {
    return localStorage.getItem("currentToggleState");
}

function SystemThemeDetector({
    onThemeDetected
}) {
    const [systemTheme, setSystemTheme] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);
    React.useEffect(() => {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleThemeChange = e => {
            const theme = e.matches ? "dark" : "light";
            setSystemTheme(theme);
            setErrorMessage(null);
            onThemeDetected(theme);
        };
        try {
            if (darkModeMediaQuery.media === "not all") {
                setErrorMessage("System theme detection not supported");
                onThemeDetected(null);
            } else {
                handleThemeChange(darkModeMediaQuery);
                darkModeMediaQuery.addListener(handleThemeChange);
            }
        } catch (error) {
            setErrorMessage("Error detecting system theme");
            onThemeDetected(null);
        }
        return () => {
            darkModeMediaQuery.removeListener(handleThemeChange);
        };
    }, [onThemeDetected]);
    return null;
}
export function ThemeSwitch({
    backgroundColor,
    iconColor,
    switchSize,
    circleColor
}) {
    const [isOn, setIsOn] = React.useState(false);
    const [isThemeSet, setIsThemeSet] = React.useState(false);
    const [systemTheme, setSystemTheme] = React.useState(null);
    const toggle = () => {
        const newToggleState = isOn ? "dark" : "light";
        setIsOn(!isOn);
        localStorage.setItem("currentToggleState", newToggleState);
        updateTheme(newToggleState);
    };
    const updateTheme = theme => {
        if (typeof document !== "undefined") {
            const styleTag = document.getElementsByTagName("style")[0];
            const newCSS = styleTag.innerHTML.replace(/prefers-color-scheme: \w+/, `prefers-color-scheme: ${theme}`);
            styleTag.innerHTML = newCSS;
        }
        window.dispatchEvent(new CustomEvent("themeChange"));
    };
    const handleSystemThemeChange = theme => {
        setSystemTheme(theme);
        if (!isThemeSet) {
            setIsOn(theme === "light");
            updateTheme(theme);
            setIsThemeSet(true);
        }
    };
    React.useEffect(() => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            setIsOn(storedTheme === "light");
            updateTheme(storedTheme);
            setIsThemeSet(true);
        } else {
            handleSystemThemeChange(null);
        }
    }, []);
    const circleSize = switchSize / 2 - switchSize / 8;
    const iconSize = circleSize;
    return /*#__PURE__*/ _jsx(Frame, {
        width: switchSize,
        height: switchSize / 2,
        background: backgroundColor,
        style: {
            borderRadius: switchSize / 4,
            cursor: "pointer",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `0 ${switchSize/8}px`
        },
        onClick: toggle,
        children: isThemeSet && /*#__PURE__*/ _jsx(Frame, {
            width: circleSize,
            height: circleSize,
            background: circleColor,
            style: {
                borderRadius: "50%",
                position: "absolute",
                left: isOn ? `calc(100% - ${circleSize+switchSize/16}px)` : `${switchSize/16}px`,
                transition: "left 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            initial: false,
            animate: {
                left: isOn ? `calc(100% - ${circleSize+switchSize/16}px)` : `${switchSize/16}px`
            },
            children: /*#__PURE__*/ _jsx(Frame, {
                width: iconSize,
                height: iconSize,
                background: "transparent",
                style: {
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ _jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: iconColor,
                    width: iconSize,
                    height: iconSize
                })
            })
        })
    });
}
ThemeSwitch.defaultProps = {
    backgroundColor: "#e0e0e0",
    iconColor: "#000000",
    switchSize: 60,
    circleColor: "#ffffff"
};
addPropertyControls(ThemeSwitch, {
    backgroundColor: {
        title: "Background Color",
        type: ControlType.Color,
        defaultValue: "#e0e0e0"
    },
    switchSize: {
        title: "Switch Size",
        type: ControlType.Number,
        defaultValue: 60,
        min: 20,
        max: 200,
        step: 1
    },
    circleColor: {
        title: "Circle Color",
        type: ControlType.Color,
        defaultValue: "#ffffff"
    }
});
export const __FramerMetadata__ = {
    "exports": {
        "ThemeSwitch": {
            "type": "reactComponent",
            "name": "ThemeSwitch",
            "slots": [],
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "__FramerMetadata__": {
            "type": "variable"
        }
    }
}
//# sourceMappingURL=./Switch.map