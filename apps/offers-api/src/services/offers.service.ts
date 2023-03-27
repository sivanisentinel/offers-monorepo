// DATABASE_URL="postgres://postgres:12345@localhost:5432/storedb"
import { Pool } from 'pg';
import { Offer } from '../offer.interface';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432
});

export const offersService = {
  getOffers: async () => {
    return pool.query('SELECT * FROM offers');
  },
  purchaseOffer: async (offerId) => {
    const client = await pool.connect();
    let status = 200;
    let msg = 'success';

    try {
      await client.query('BEGIN');
      const result = await client.query('SELECT * FROM offers WHERE id = $1 FOR UPDATE', [offerId]);
      let offer: Offer;
      offer = result.rows[0];
      if (!offer) {
        status = 404;
        msg = 'Offer not found';
      } else if (offer.purchased >= offer.limitcount) {
        status = 403;
        msg = 'Offer limit reached';
        return;
      } else {
        await client.query('UPDATE offers SET purchased = purchased + 1 WHERE id = $1', [offerId]);
        await client.query('COMMIT');
        msg = 'Offer purchased successfully';
      }
    } catch (error) {
      await client.query('ROLLBACK');
      console.error(error);
      status = 500;
      msg = 'Server error';
    } finally {
      client.release();
    }
    return { status, msg };

  },



};
