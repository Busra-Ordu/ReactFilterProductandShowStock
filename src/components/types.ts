import { Dispatch, SetStateAction } from 'react';

export type TableWrapperProps = {
  inputValue: string;
  isProductInStock: boolean;
};

export type InputAreaProps = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isProductInStock: boolean;
  setIsProductInStock: Dispatch<SetStateAction<boolean>>;
};

type FruitOrVeggy = {
  id: number;
  name: string;
  price: string;
  inStock: boolean;
};

export type FruitsOrVeggies = FruitOrVeggy[];
