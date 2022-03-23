import Item from 'models/item';
import ItemsResponse from 'models/itemsResponse';

const mapItemResponse = (result: any) =>
  <Item>{
    condition: result.condition,
    free_shipping: result.shipping?.free_shipping || false,
    id: result.id,
    picture: result.thumbnail,
    price: {
      amount: result.prices?.prices[0]?.amount || 0,
      currency: result.prices?.prices[0]?.currency_id || '',
      decimals: 2,
    },
    state_name: result.address?.state_name || '',
    title: result.title,
  };

const mapCategoriesResponse = (filters: Array<any>) => {
  const categoriesFilter = filters.find((filter) => filter.id === 'category');

  if (categoriesFilter) {
    return (
      categoriesFilter.values[0]?.path_from_root?.map((item) => item.name) || []
    );
  }

  return [];
};

const mapItemsResponse = (response: any) =>
  <ItemsResponse>{
    categories: mapCategoriesResponse(response.filters),
    items: response.results.map(mapItemResponse),
  };

export default mapItemsResponse;
