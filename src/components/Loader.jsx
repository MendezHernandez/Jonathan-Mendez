import React, { useEffect, useState } from "react";
import "../styles/Loader.css";
const Loader = () => {
  const [loading, setLoading] = useState(true);

  if (loading === true) {
    const htmlElement = document.documentElement;
    htmlElement.style.overflow = "hidden";
  } else {
    const htmlElement = document.documentElement;
    htmlElement.style.overflow = "auto";
  }

  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(false);
    }, 2900);

    return () => clearTimeout(load);
  }, []);

  return (
    <>
      <div className="content-loader2">
        <div className="right-loader"></div>
      </div>
      <div className="content-loader">
        <div className="content-text-loader">
          <span className="text-loader">JM</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
