import React from "react";
import DATA from "../data.json";
import styles from "./productInfo.module.css";
import IData from "../types/data";
interface iProductInfo {
  text?: "black" | "white";
  imagePosition: "left" | "right" | undefined;
}

function ProductInfo({ item }: { item: IData }) {
  return (
    <section className="text-white w-[400px]">
      {item.new && <div className="text-sm opacity-50">NEW PRODUCT</div>}
      <div className="text-6xl">{item.name}</div>
      <div className="opacity-75 text-base">{item.description}</div>
    </section>
  );
}

export default ProductInfo;
