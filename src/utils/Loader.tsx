import React from "react";
import { LuLoader2 } from "react-icons/lu";
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen w-full">
    <LuLoader2 className="text-5xl animate-spin " />
  </div>
);

export default Loader;
