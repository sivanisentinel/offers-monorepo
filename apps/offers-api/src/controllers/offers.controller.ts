import { Offer } from '../offer.interface';
import { offersService } from '../services/offers.service';


export const controller = {
  // Get all offers
  getOffers: async (req, res) => {
    try {
      const result = await offersService.getOffers()
      const offers: Offer[] = result.rows;
      res.json(offers);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  },

  // Purchase an offer
  purchase: async (req, res) => {
    const offerId = parseInt(req.params.id);
    let purchaseResponse = await offersService.purchaseOffer(offerId);
    res.status(purchaseResponse.status).send(purchaseResponse.msg);

  },

  // Create an offer
  // createOffer: async (req, res) => {
  //   const { name, price, limitCount, purchased } = req.body;
  //   try {
  //     const client = await pool.connect();
  //     await client.query('INSERT INTO offers (name, price, limitCount, purchased) VALUES ($1, $2, $3, $4)', [name, price, limitCount, purchased]);
  //     client.release();
  //     res.status(200).send('Offer added successfully');
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send('Server error');
  //   }
  // }
};

