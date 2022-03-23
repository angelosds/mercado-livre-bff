import Item from './item';

type ItemsResponse = {
  items: Array<Item>;
  categories: Array<string>;
};

export default ItemsResponse;
