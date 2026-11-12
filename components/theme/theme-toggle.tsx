"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const themes = ["light", "dark", "system"] as const;

const themeIcons = {
  light: faSun,
  dark: faMoon,
  system: faDesktop,
};

const themeLabels = {
  light: "Mode clair",
  dark: "Mode sombre",
  system: "Mode système",
};

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const currentTheme =
    mounted && themes.includes(theme as (typeof themes)[number])
      ? (theme as (typeof themes)[number])
      : "system";

  const nextTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    setTheme(themes[(currentIndex + 1) % themes.length]);
  };

  return (
    <button
      type="button"
      onClick={nextTheme}
      className="theme-toggle"
      aria-label={`Thème actuel : ${themeLabels[currentTheme]}. Changer de thème`}
      title={`Thème : ${themeLabels[currentTheme]}`}
    >
      <FontAwesomeIcon icon={themeIcons[currentTheme]} />
    </button>
  );
}
