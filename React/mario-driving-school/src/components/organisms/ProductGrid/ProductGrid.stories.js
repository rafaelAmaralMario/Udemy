import React from "react";
import ProductGrid from "./ProductGrid";
import BG1 from 'stories/assets/bg-1.jpg';


export default {
  title: "Components|Organisms/ProductGrid",
  component: ProductGrid,
};

const products = [
  {
    title: "First Element",
    image: BG1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste, praesentium dolor voluptatum omnis atque cupiditate sunt sapiente consequatur fuga accusamus odit itaque dolore fugiat culpa qui neque laboriosam quibusdam?"
  },
  {
    title: "First Element",
    image: BG1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste, praesentium dolor voluptatum omnis atque cupiditate sunt sapiente consequatur fuga accusamus odit itaque dolore fugiat culpa qui neque laboriosam quibusdam?"
  },
  {
    title: "First Element",
    image: BG1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste, praesentium dolor voluptatum omnis atque cupiditate sunt sapiente consequatur fuga accusamus odit itaque dolore fugiat culpa qui neque laboriosam quibusdam?"
  },
  {
    title: "First Element",
    image: BG1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste, praesentium dolor voluptatum omnis atque cupiditate sunt sapiente consequatur fuga accusamus odit itaque dolore fugiat culpa qui neque laboriosam quibusdam?"
  },
  {
    title: "First Element",
    image: BG1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste, praesentium dolor voluptatum omnis atque cupiditate sunt sapiente consequatur fuga accusamus odit itaque dolore fugiat culpa qui neque laboriosam quibusdam?"
  }
]

export const usage = () => (<ProductGrid products={products} />
);
