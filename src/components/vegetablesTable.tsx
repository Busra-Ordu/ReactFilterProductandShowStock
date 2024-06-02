import { Typography } from '@mui/material';
import { TableWrapperProps, FruitsOrVeggies } from './types';

export const VegetablesTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const veggies: FruitsOrVeggies = [
    { id: 0, name: 'Lettuce', price: '1$', inStock: false },
    { id: 1, name: 'Tomatoes', price: '2$', inStock: true },
    { id: 2, name: 'Pickles', price: '3$', inStock: true },
    { id: 3, name: 'leek', price: '3$', inStock: true },
    { id: 4, name: 'Peppers', price: '6$', inStock: false },

  ];

  return (
    <>
      <h1>vegetables</h1>
          <ul>
        {veggies.filter((veggie) => {
                        const matchesName = veggie.name.toLowerCase().includes(inputValue.toLowerCase());
                        const matchesStock = !isProductInStock || veggie.inStock;
                        return matchesName && matchesStock;
                    }).map((veggie) => (
                        <li key={veggie.id} style={{ textAlign: "center" }}>
                            {`${veggie.name} - ${veggie.price} ₺`}
                        </li>
                    ))
                    }
            </ul>
    </>
  );
};
