const router = require('express').Router();
const { BlizzAPI } = require('blizzapi');

const { env } = process;

router.get('/query/:item', async (req, res) => {
  try {
    const { item } = req.params;
    const clientId = env.CLIENT_ID;
    const clientSecret = env.CLIENT_SECRET;
    const BnetApi = new BlizzAPI({clientId, clientSecret });
    const response = await BnetApi.query(`/data/wow/item/${item}?namespace=static-classic`);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error: 'Failed to receive Battle.net API data',
    });
  }
});

router.get('/validateAccessToken/:region/:accessToken', async (req, res) => {
  try {
    const { region, accessToken } = req.params;
    const clientId = env.API_BATTLENET_KEY;
    const clientSecret = env.API_BATTLENET_SECRET;
    const BnetApi = new BlizzAPI({ region, clientId, clientSecret });
    const response = await BnetApi.validateAccessToken(region, accessToken);
    res.json(response);
  } catch (error) {
    res.status(400).send({
      error: 'Failed to receive Battle.net API data',
    });
  }
});

router.get('/getAccessToken/:region', async (req, res) => {
  try {
    const { region } = req.params;
    const clientId = env.API_BATTLENET_KEY;
    const clientSecret = env.API_BATTLENET_SECRET;
    const BnetApi = new BlizzAPI({ region, clientId, clientSecret });
    const response = await BnetApi.getAccessToken();
    res.json(response);
  } catch (error) {
    res.status(400).send({
      error: 'Failed to receive Battle.net API data',
    });
  }
});

module.exports = router;
