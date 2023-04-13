const router = require('express').Router();
const {BlizzAPI} = require('blizzapi');
const api = new BlizzAPI({
    region: 'us',
    clientId: '0342bb396d8844bc95e4fbaa784f2d6d',
    clientSecret: 'GtPrQyBCnP3BId4d0rUcerXje3zLN1qc',
});
const { env } = process;

api.query("/data/wow/item/19019?namespace=static-classic-us")
.then(resp => resp.json(data))
.then(data =>
console.log(data))

router.get('/query', async (req, res) => {
    try {
      const { endpoint } = req.query;
      const response = await BnetApi.query(endpoint);
      res.json(response);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        error: 'Failed to receive Battle.net API data',
      });
    }
  });

  module.exports = router;