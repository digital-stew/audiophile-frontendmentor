import React from "react";
import Image, { StaticImageData } from "next/image";
import headphonesImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import chevron from "../assets/shared/desktop/icon-arrow-right.svg";
import style from "../styles/linkBar.module.css";

export default function LinkBar() {
  return (
    <nav className={style.nav}>
      <Item image={headphonesImage} title={"headphones"} link={"some link"} />
      <Item image={speakerImage} title={"speakers"} link={"some link"} />
      <Item image={earphonesImage} title={"earphones"} link={"some link"} />
    </nav>
  );
}

interface IItem {
  image: StaticImageData;
  title: string;
  link: string;
}
function Item({ image, title, link }: IItem) {
  return (
    <div className={style.item}>
      <Image
        src={image}
        width={200}
        // height={260}
        alt="headphones"
      />
      {title}
      <button className="btn3">shop</button>
    </div>
  );
}
