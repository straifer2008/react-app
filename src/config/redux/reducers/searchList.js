import product1 from '../../../static/images/products/product1.jpg';
import product2 from '../../../static/images/products/product2.jpg';
import product3 from '../../../static/images/products/product3.jpg';
import product4 from '../../../static/images/products/product4.jpg';
import product5 from '../../../static/images/products/product5.jpg';
import product6 from '../../../static/images/products/product6.jpg';

// START STATE
const initialState = {
  products: [
    {
      id: 0,
      name: 'Стіл',
      img: product1,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 1,
      name: 'Шкаф',
      img: product2,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 2,
      name: 'Табурет',
      img: product3,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 3,
      name: 'Раковина',
      img: product4,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 4,
      name: 'Умивальник',
      img: product5,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 6,
      name: 'Плита',
      img: product6,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }
  ]
};

// REDUCERS
export const searchProductsReducer = (state = initialState) => {
  return {...state};
};
