import { StaticImageData } from "next/image";

export interface SidebarType {
  id: number;
  title: string;
  logo: StaticImageData;
  url?: string;
  children?: Array<SidebarInnerItemType>;
  setItemClicked: React.Dispatch<React.SetStateAction<number>>;
  itemClicked: number;
}

export interface SidebarInnerType {
  id: number;
  title: string;
  children?: Array<SidebarInnerItemType>;
  setItemClicked: React.Dispatch<React.SetStateAction<number>>;
  itemClicked: number;
}

export interface SidebarItemsType {
  id: number;
  title: string;
  logo: StaticImageData;
  url?: string;
  children?: Array<SidebarInnerItemType>;
}

export interface SidebarInnerItemType {
  id: number;
  title: string;
  children?: Array<SidebarInnerItemType>;
}
