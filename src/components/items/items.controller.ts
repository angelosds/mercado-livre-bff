import mercadoLibreApi from 'api/mercado-libre';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import Item from 'models/item';

import mapItemsResponse from './utils';

const readItems = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    const { data } = await mercadoLibreApi.get('/sites/MLA/search', {
      params: { q: search },
    });

    res.status(httpStatus.OK);
    res.send(mapItemsResponse(data));
  } catch (e) {
    res.status(e.response.status);
    res.send(e.response.data);
  }
};

const readItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const itemRequest = mercadoLibreApi.get(`/items/${id}`);
    const itemDescriptionRequest = mercadoLibreApi.get(
      `/items/${id}/description`,
    );

    const [{ data: item }, { data: description }] = await Promise.all([
      itemRequest,
      itemDescriptionRequest,
    ]);

    res.status(httpStatus.OK);
    res.send(<Item>{
      condition: item.condition,
      description: description.plain_text,
      free_shipping: item.shipping?.free_shipping || false,
      id: item.id,
      picture: item.pictures[0]?.url || '',
      price: item.price,
      sold_quantity: item.sold_quantity,
      state_name: item.seller_address?.state?.name || '',
      title: item.title,
    });
  } catch (e) {
    res.status(e.response.status);
    res.send(e.response.data);
  }
};

export { readItem, readItems };
