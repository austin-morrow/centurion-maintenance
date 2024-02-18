import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < prevScrollPos && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-[#a8a899] text-white p-1 rounded-md shadow-md"
          onClick={handleScrollToTop}
        >
           <span class="material-symbols-outlined pt-1 px-1">arrow_upward</span>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
