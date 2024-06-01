// import { Typography } from '@mui/material';
import { TableWrapperProps, FruitsOrVeggies } from './types';

export const FruitsTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const fruits: FruitsOrVeggies = [
    { id: 0, name: 'Apple', price: '1$', inStock: true },
    { id: 1, name: 'Strawberry', price: '2$', inStock: false },
    { id: 2, name: 'Cherry', price: '3$', inStock: true },
    { id: 3, name: 'Banana', price: '2$', inStock: false },

  ];

  return (
    <>
      <h1>fruits</h1>
          <ul>
        {fruits.filter((fruit) => {
                        const matchesName = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
                        const matchesStock = !isProductInStock || fruit.inStock;
                        return matchesName && matchesStock;
                    }).map((fruit) => (
                        <li key={fruit.id} style={{ textAlign: "center" }}>
                            {`${fruit.name} - ${fruit.price} ₺`}
                        </li>
                    ))
                    }
            </ul>
        
    </>
  );
};
