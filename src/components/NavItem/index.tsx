"use client";
import { SidebarType } from "@/utils/typescript/types";
import styles from "./style.module.css";
import Image from "next/image";
import arrow from "@/../public/assets/arrow.png";
import { useState } from "react";
import NavInnerItem from "../NavInnerItem";

const NavItem: React.FC<SidebarType> = ({ id, title, logo, children, setItemClicked, itemClicked }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li className={styles.container}>
      <div
        className={
          itemClicked == id
            ? `${styles.inner_container} ${styles.inner_container_selected}`
            : `${styles.inner_container}`
        }
        onClick={e => {
          setIsOpen(!isOpen), setItemClicked(id);
        }}
      >
        <div className={styles.title_container}>
          <Image src={logo} alt={`${title} icon`} className={styles.icon} />
          <h5 className={styles.text}>{title}</h5>
        </div>
        {/* Show arrow only if item has children */}
        {children && (
          <Image
            src={arrow}
            alt='Arrow icon'
            className={isOpen ? `${styles.arrow} ${styles.arrowOpen}` : `${styles.arrow} ${styles.arrowClose}`}
          />
        )}
      </div>

      {/* Show the list only if item has children */}
      {isOpen && (
        <div>
          {children?.map(child => {
            return <NavInnerItem key={child.id} {...child} setItemClicked={setItemClicked} itemClicked={itemClicked} />;
          })}
        </div>
      )}
    </li>
  );
};

export default NavItem;
