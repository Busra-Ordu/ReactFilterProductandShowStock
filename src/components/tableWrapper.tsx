import { FruitsTable } from './fruitsTable';
import { VegetablesTable } from './vegetablesTable';
import { TableWrapperProps } from './types';

export const TableWrapper = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  return (
    <>
      <FruitsTable
        inputValue={inputValue}
        isProductInStock={isProductInStock}
      />
      <VegetablesTable
        inputValue={inputValue}
        isProductInStock={isProductInStock}
      />
    </>
  );
};
