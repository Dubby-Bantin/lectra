"use client";
import { useEffect } from "react";
import "@/styles/google-translate.css";
declare global {
  interface Window {
    gtranslateSettings: {
      default_language: string;
      native_language_names: boolean;
      detect_browser_language: boolean;
      wrapper_selector: string;
      switcher_horizontal_position: string;
      flag_size: number;
      flag_style: string;
    };
  }
}
const GTranslate = () => {
  useEffect(() => {
    const addGTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/popup.js";
      script.defer = true;
      document.body.appendChild(script);
    };

    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      detect_browser_language: true,
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "inline",
      flag_size: 24,
      flag_style: "3d",
    };

    addGTranslateScript();
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslate;
