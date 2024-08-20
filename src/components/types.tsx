import { ReactNode } from "react";

export interface Animal {
  id: string;
  name: string;
  description: string;
}

export interface Shelter {
    id: string;
    name: string;
    description: string;
  }

export interface CardProps {
  name: string;
  onClick: () => void;
}

export interface MasonryPropsTypes {
  columnCount: number;
  cards: { name: string; originalIndex: number }[];
}

export interface ExpandableTextProps {
  title: string;
  text: string;
  maxChar: number;
}

export interface AboutUsProps {
  texts: string[];
}

export interface DisplayProp {
  children: ReactNode;
}

export interface PageDisplayProp {
    children: ReactNode;
    backButton?: boolean;
  }

export interface SheltersProps {
  shelters: { name: string; originalIndex: number }[];
}

export interface Shelters {
  id: number;
  name: string;
  address: string;
  needs: string;
  pets: pets[];
}

export interface pets {
  image_data: string;
}

export interface PageOverlayType {
  children: ReactNode;
  page: number;
  setPageIncrement: () => void;
  setPageDecrement: () => void;
  maxPage: number;
  textAreaVisible?: boolean;
  searchedText?: string;
  handleSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}
