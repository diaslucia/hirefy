"use client";
import { SidebarInnerType } from "@/utils/typescript/types";
import styles from "./style.module.css";
import Image from "next/image";
import arrow from "@/../public/assets/arrow.png";
import { useState } from "react";

const NavInnerItem: React.FC<SidebarInnerType> = ({ id, title, children, setItemClicked, itemClicked }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setIsOpen(!isOpen), setItemClicked(id);
      }}
    >
      <div
        className={
          itemClicked == id
            ? `${styles.inner_container} ${styles.inner_container_selected}`
            : `${styles.inner_container}`
        }
      >
        <h6 className={styles.text}>{title}</h6>
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
    </div>
  );
};

export default NavInnerItem;
