"use client";
import styles from "./style.module.css";
import Image from "next/image";
import { sidebarItems } from "@/utils/data/sidebarItems";
import { useState } from "react";
/* Images */
import logo from "@/../public/assets/logo.png";
import close from "@/../public/assets/close.png";
import NavItem from "../NavItem";
/* Font for the logo */
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

const Sidebar = () => {
  const [itemClicked, setItemClicked] = useState<number>(0);

  return (
    <nav className={styles.container}>
      <div className={styles.header_navbar}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt='Hirefy logo' className={`${styles.logo} ${inter.className}`} />
          <h1 className={styles.title}>Hirefy</h1>
        </div>
        <Image src={close} alt='Close sidebar icon' className={styles.cross} />
      </div>

      <ul className={styles.main_navbar}>
        {sidebarItems.map(item => {
          return <NavItem key={item.id} {...item} setItemClicked={setItemClicked} itemClicked={itemClicked} />;
        })}
      </ul>

      <div className={styles.footer_navbar}>
        <ul className={styles.footer_navbar_list}>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Security</li>
          <li>Version</li>
        </ul>
        <span className={styles.line}></span>
        <p className={styles.text}>© 2023 Hirefy, LLC.</p>
      </div>
    </nav>
  );
};

export default Sidebar;
