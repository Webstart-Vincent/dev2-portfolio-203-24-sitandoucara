"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed z-50 bg-white inset-0 flex justify-center items-center">
      <div className="flex items-center justify-center">
        <Image
          src="/logoanimation2.gif"
          alt="gif logo animation"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Loader;
