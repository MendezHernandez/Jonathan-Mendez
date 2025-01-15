import React, { useEffect, useState } from "react";
import "../styles/Loader.css";
const Loader = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    const htmlElement = document.documentElement;
    htmlElement.style.overflow = "hidden";
  } else {
    const htmlElement = document.documentElement;
    htmlElement.style.overflow = "auto";
    htmlElement.style.paddingRight = "0rem";
  }

  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(false);
    }, 2900);

    return () => clearTimeout(load);
  }, [loading]);

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
