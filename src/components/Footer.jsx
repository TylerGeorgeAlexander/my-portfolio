import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 md:sticky bottom-0 z-10">
      <div className="relative flex items-center h-16 justify-center">
        <a
          href="https://github.com/TylerGeorgeAlexander"
          className="mr-5 hover:text-white opacity-70 hover:opacity-100"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <img
            src="./GitHub/PNG/GitHub-Mark-Light-32px.png"
            alt="GitHub OctoCat Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-g-alexander/"
          className="mr-5 hover:text-white opacity-70 hover:opacity-100"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            class="global-nav__logo"
          >
            <title>LinkedIn</title>
            <g>
              <path
                d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </footer>
  );
}
