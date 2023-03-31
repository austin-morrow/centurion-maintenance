import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-[#a8a899] text-white p-2 rounded-full shadow-md"
          onClick={handleScrollToTop}
        >
          <span class="material-symbols-outlined pt-1 px-1">arrow_upward</span>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
