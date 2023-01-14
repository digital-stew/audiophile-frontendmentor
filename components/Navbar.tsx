import Link from "next/link";
import React from "react";
import style from "../styles/navbar.module.css";
import logoImage from "../assets/shared/desktop/logo.svg";
import Image from "next/image";

const LINKS = [
  { href: "#", text: "home" },
  { href: "#", text: "headphones" },
  { href: "#", text: "speakers" },
  { href: "#", text: "earphones" },
];

function Navbar() {
  return (
    <nav className={style.nav}>
      <div>
        <Image src={logoImage} alt="logo" />
      </div>

      <ul className={style.ul}>
        {LINKS.map((link) => {
          return (
            <li className={style.li}>
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
