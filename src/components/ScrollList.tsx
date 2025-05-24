import Image from 'next/image';
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import { FC } from 'react';

const items = [
  {
    id: 1,
    Title: "",
    Url: '',
    Alt: ""

  },{
    id: 2,
    Title: "",
    Url: '',
    Alt: ""

  },{
    id: 3,
    Title: "",
    Url: '',
    Alt: ""

  },{
    id: 4,
    Title: "",
    Url: '',
    Alt: ""

  },
];

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

export const ScrollList: FC = () => {
  const [setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) =>
    !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };
  return (
    <div className="">
      <div className="w-90vw flex justify-center">
        <h1 className="Poppins text-3xl font-semibold">
          Choose favourite course from top cartegories
        </h1>
        <h2 className="Poppins ml-auto text-2xl font-normal">
          See all
        </h2>
      </div>
    </div>
  );
};
