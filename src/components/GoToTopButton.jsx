import { Link } from "react-scroll";

const GoToTopButton = () => {
  return (
    <Link
      to="top"
      spy={true}
      smooth={true}
      duration={500}
      className="fixed bottom-4 right-4 z-10 rounded-full bg-gray-800 text-white p-3 cursor-pointer"                      
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </Link>
    
  );
};


export default GoToTopButton