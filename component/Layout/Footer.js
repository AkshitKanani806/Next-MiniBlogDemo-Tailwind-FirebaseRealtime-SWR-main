import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full py-3 z-50 bg-red-500 flex justify-center bg-yellow-200">
      <Link href="https://github.com/AkshitKanani806">
        Feel free to copy © 2021 Akshit kanani
      </Link>
    </div>
  );
};

export default Footer;
