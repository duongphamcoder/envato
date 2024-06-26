import { memo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { InputNumber, Image } from '@app/components';
import Delete from '@app/components/icons/CloseSideBar/index.tsx';

// Types
import type { IProductInCart } from '@app/interfaces';

// Utils
import { formatDecimalNumber, generatePlaceholder } from '@app/utils';

// Constants
import { COMMON } from '@app/constants';

type TProductTableProps = {
  products: IProductInCart[];
  onChangeQuantity: (id: string, quantity: number) => void;
  onRemoveProduct: (id: string) => void;
};

const ProductTable = ({
  products,
  onChangeQuantity,
  onRemoveProduct,
}: TProductTableProps): JSX.Element => {
  return (
    <table className='w-full'>
      <thead>
        <tr className='grid grid-cols-4 text-left bg-desertStorm [&>*:nth-child(n)]:text-[12px] [&>*:nth-child(n)]:text-primary [&>*:nth-child(n)]:font-semibold p-3'>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.length ? (
          products.map(({ id, name, imageURL, amount, currency, quantity }) => {
            const handleChange = (value: number) => {
              onChangeQuantity(id, value);
            };
            const handleInCrease = () => {
              onChangeQuantity(id, quantity + 1);
            };
            const handleDecrease = () => {
              onChangeQuantity(id, quantity - 1);
            };
            const handleRemoveProduct = () => {
              onRemoveProduct(id);
            };

            return (
              <tr
                key={id}
                className='grid grid-cols-4 items-center gap-2 md:gap-3 my-6 nearLg:px-3'
              >
                <td>
                  <Image
                    src={imageURL}
                    placeholderSrc={generatePlaceholder(250, 250)}
                    width={160}
                    height={160}
                    alt={`This is the ${name}`}
                    className='object-contain w-[160px] h-full'
                  />
                </td>
                <td>
                  <p className='text-xs md:text-md lg:text-lg'>{name}</p>
                </td>
                <td>
                  <p className='text-sm sm:text-md'>
                    {currency}
                    {formatDecimalNumber(amount)}
                  </p>
                </td>
                <td>
                  <div className='flex gap-2 sm:gap-3 items-center'>
                    <div className=''>
                      <InputNumber
                        value={quantity}
                        onChange={handleChange}
                        onIncrease={handleInCrease}
                        onDecrease={handleDecrease}
                        className='!text-left pl-2 md:!text-center md:!pl-0 min-w-10'
                      />
                    </div>
                    <div className=''>
                      <button
                        aria-label='Delete Button'
                        className='bg-sun p-2'
                        onClick={handleRemoveProduct}
                      >
                        <Delete className='text-primary' />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4} className='text-center text-sm sm:text-md py-10 '>
              {COMMON.EMPTY_ARRAY}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const ProductTableMemorized = memo(ProductTable, isEqual);

export default ProductTableMemorized;
