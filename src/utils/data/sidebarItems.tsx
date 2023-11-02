import { SidebarItemsType } from "../typescript/types";
/* Images */
import home from "@/../public/assets/home.png";
import howWorks from "@/../public/assets/how-works.png";
import marketplace from "@/../public/assets/marketplace.png";
import talents from "@/../public/assets/talents.png";
import categories from "@/../public/assets/categories.png";

export const sidebarItems: Array<SidebarItemsType> = [
  {
    id: 1,
    title: "Home",
    logo: home,
    url: "/",
  },
  {
    id: 2,
    title: "How it works",
    logo: howWorks,
    url: "/how-it-works",
  },
  {
    id: 3,
    title: "Marketplace ",
    logo: marketplace,
    url: "/marketplace",
  },
  {
    id: 4,
    title: "For Talents",
    logo: talents,
    url: "/for-talents",
  },
  {
    id: 5,
    title: "Categories",
    logo: categories,
    children: [
      {
        id: 6,
        title: "Lorem ipsum",
      },
      {
        id: 7,
        title: "Lorem ipsum",
      },
      {
        id: 8,
        title: "Lorem ipsum",
        children: [
          {
            id: 9,
            title: "Sub ipsum",
          },
          {
            id: 10,
            title: "Sub ipsum",
          },
        ],
      },
      {
        id: 11,
        title: "Lorem ipsum",
      },
      {
        id: 12,
        title: "Lorem ipsum",
        children: [
          {
            id: 13,
            title: "Sub ipsum",
          },
          {
            id: 14,
            title: "Sub ipsum",
          },
        ],
      },
    ],
  },
];
