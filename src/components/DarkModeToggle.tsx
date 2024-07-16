"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { Button } from "@nextui-org/react";
import { FC, useEffect, useState } from "react";

const DarkModeToggle: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const toggleDarkMode = () => {
      document.documentElement.classList.toggle('dark');
      setIsDarkMode((prevMode) => !prevMode);
    };

    const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
    if (darkModeToggleBtn) {
      darkModeToggleBtn.addEventListener('click', toggleDarkMode);
    }

    return () => {
      if (darkModeToggleBtn) {
        darkModeToggleBtn.removeEventListener('click', toggleDarkMode);
      }
    };
  }, []);

  return (
    <Button
      id="dark-mode-toggle"
      className="p-2 bg-primary text-white rounded-full"
    >{isDarkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}</Button>
  );
};

export default DarkModeToggle;
