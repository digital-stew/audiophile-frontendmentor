import Link from "next/link";
import React from "react";

const LINKS = [
  { href: "#", text: "home" },
  { href: "#", text: "headphones" },
  { href: "#", text: "speakers" },
  { href: "#", text: "earphones" },
];

function Navbar() {
  return (
    <nav className="justify-around flex bg-black text-white h-10 items-center ">
      <div>audiophile</div>

      <ul className="align-middle uppercase flex gap-6 ">
        {LINKS.map((link) => {
          return (
            <li className="hover:text-primary">
              <Link href={link.href}>{link.text}</Link>{" "}
            </li>
          );
        })}
      </ul>

      <div>S</div>
    </nav>
  );
}

export default Navbar;
