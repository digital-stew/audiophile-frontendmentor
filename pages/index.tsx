import Head from "next/head";
import Header from "../components/Navbar";
import heroDesktop from "../assets/home/desktop/image-hero.jpg";
import heroTablet from "../assets/home/tablet/image-header.jpg";
import heroMobile from "../assets/home/mobile/image-header.jpg";
import Image from "next/image";
import NewProduct from "../components/NewProduct";
import ProductInfo from "../components/ProductInfo";
import chevron from "../assets/shared/desktop/icon-arrow-right.svg";
import style from "../styles/index.module.css";
import headphonesImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import useWidth from "../components/hooks/useWidth";
import { IWidth } from "../components/hooks/useWidth";
import speakerImage from "../assets/home/desktop/image-speaker-zx9.png";
import circlesImage from "../assets/home/desktop/pattern-circles.svg";
import speakerImageZx7 from "../assets/home/desktop/image-speaker-zx7.jpg";
export default function Home({ data }: { data: IData[] }) {
  const { desktop, tablet, mobile }: IWidth = useWidth();

  return (
    <>
      <Head>
        <title>Frontend Mentor | Audiophile e-commerce website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="/assets/favicon-32x32.png"
        />
      </Head>
      <main>
        <section className={style.heroSection}>
          <Image
            src={
              mobile
                ? heroMobile
                : tablet
                ? heroTablet
                : heroDesktop || heroDesktop
            }
            alt="hero"
            className=""
            quality={100}
            loading="lazy"
          />

          <aside>
            {data[3].new && <div className={style.newProduct}>NEW PRODUCT</div>}
            <h1 className={style.name}>{data[3].name}</h1>
            <div className={style.description}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast
            </div>
            <button className="btn">SEE PRODUCT</button>
          </aside>
        </section>

        <section className={style.linkBar}>
          <LinkBar />
        </section>

        <section className={style.products}>
          <div className={style.product1}>
            <div className={style.backgroundCircleWrap}>
              <Image src={circlesImage} alt="circle decoration" />
            </div>
            <div className={style.speakerImageWrap}>
              <Image
                src={speakerImage}
                alt="speaker"
                width={410}
                height={493}
              />
            </div>
            <div className={style.info}>
              <h2>ZX9 SPEAKER</h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="btn2">see product</button>
            </div>
          </div>

          <div className={style.product2}>
            <Image src={speakerImageZx7} alt="speaker" />
            <div className={style.info}>
              ZX7 SPEAKER<button className="btn2">see product</button>
            </div>
          </div>

          <div>
            {/* <Image src={speakerImage} alt="speaker" /> */}
            <div>some shit</div>
          </div>

          <div>
            {/* <Image src={speakerImage} alt="speaker" /> */}
            <div>some shit</div>
          </div>
        </section>

        <section className={style.about}>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            nobis voluptatibus. Aliquam suscipit dolore voluptates. Nesciunt
            quaerat illo, aut enim labore eveniet accusantium obcaecati tempora
            rerum, facilis, neque reiciendis blanditiis? Facilis fugit earum
            porro? Veniam, voluptatem dolore? Voluptatum a ea velit asperiores
            debitis, accusamus sint fugiat, inventore nisi deleniti unde maxime
            eum aut placeat, error commodi totam culpa earum dolorum eveniet
            perferendis laudantium ad ex hic. Ut, beatae! Suscipit enim tempora
            quisquam accusantium, ea cupiditate, consequatur, debitis soluta
            enetur iure culpa esse aliquam voluptate molestiae error debitis
            consequatur illum nobis, ab fugit?
          </div>
          <div>image</div>
        </section>
      </main>
    </>
  );
}

import DATA from "../data.json";
import IData from "../types/data";
import { useEffect, useState } from "react";
import LinkBar from "../components/LinkBar";
import Footer from "../components/Footer";
export async function getServerSideProps() {
  const data = DATA as unknown as IData;

  // Pass data to the page via props
  return { props: { data } };
}
