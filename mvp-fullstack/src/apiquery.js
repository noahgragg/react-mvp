require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors')
const { env } = process;
const connectionString = 'postgres://postgres:postgrespw@localhost:55000/icecrown' //local connection string
const {Pool} = require('pg');
const pool = new Pool({
    connectionString: connectionString,
});
const port = 8000;
const {BlizzAPI} = require('blizzapi');
const api = new BlizzAPI({
    region: 'us',
    clientId: '0342bb396d8844bc95e4fbaa784f2d6d',
    clientSecret: 'GtPrQyBCnP3BId4d0rUcerXje3zLN1qc',
});
var items = [];
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/item/:id', async (req, res) => {
    var item = req.params['id'];
    console.log(item)
    const response = await api.query(`/data/wow/media/item/${item}?namespace=static-classic-us`)
    res.json(response)
    })
app.get('/boss', async (req,res) => {
    pool.query('SELECT * from bosses')
    .then(resp => 
        res.send(resp.rows)
        )
})
app.get('/boss/:id', async (req,res) => {
    var bossId = req.params['id']
    console.log(req.params)
    pool.query(`SELECT * from loot where boss_id=${bossId};`)
    .then(resp => 
        //console.log(resp)
        res.send(resp.rows)
        )
})
// router.get('/query', async (req, res) => {
//     try {
//       const { endpoint } = req.query;
//       const response = await BnetApi.query(endpoint);
//       res.json(response);
//     } catch (error) {
//       console.log(error);
//       res.status(400).send({
//         error: 'Failed to receive Battle.net API data',
//       });
//     }
//   });
  app.listen(port, () => {
    console.log(`blizzapi-example listening on ${port}!`);
  });
  // async function updateAll(item){
//     let images = []
//     for (const ids of item){
    
//         const response = await api.query(`/data/wow/media/item/${ids}?namespace=static-classic-us`)
//         await pool.query(`UPDATE loot SET image='${response.assets[0].value}' where wowhead_id=${ids};`)
//         console.log(response.assets[0].value)
//         //.then(console.log('added image for ', ids)   )
//     } 
//     console.dir(images, {'maxArrayLength' : null})     
// }
// app.get('/updateall', async (req,res) => {
    
//     pool.query('SELECT wowhead_id FROM loot;')
//     .then(result => {
//         idArr = []
//         result.rows.forEach(element => {
//             idArr.push(parseInt(element.wowhead_id))
//         })
//         idArr.forEach(element => {updateAll(element)})
//         //console.dir(idArr, {'maxArrayLength': null})
//         res.send(idArr)  
//     }) 
// })

//   var idArr = [
//     50605, 50606, 50607, 50608, 50609, 50610, 50611, 50612, 50613, 50614,
//     50615, 50616, 50617, 50709, 50638, 50639, 50640, 50641, 50642, 50643,
//     50644, 50645, 50646, 50647, 50648, 50649, 50650, 50651, 50652, 50664,
//     50658, 50366, 50653, 50349, 50655, 50659, 50663, 50657, 50656, 50654,
//     50661, 50665, 50667, 50660, 52028, 52029, 52030, 50363, 50672, 50668,
//     50670, 50671, 50695, 50699, 50697, 50702, 50689, 50700, 50693, 50694,
//     50692, 50701, 50703, 50690, 50688, 50696, 50698, 50691, 50678, 50685,
//     50348, 50682, 50684, 50673, 50675, 50674, 50676, 50677, 50680, 50681,
//     50679, 50687, 50686, 52028, 52029, 52030, 50706, 50704, 50707, 50708,
//     50705, 50719, 50714, 50603, 50721, 50712, 50715, 50713, 50710, 50723,
//     50717, 50716, 50711, 50720, 50718, 50722, 52028, 52029, 52030, 50724,
//     50727, 50725, 50726, 50729, 50728, 50628, 50624, 50618, 50619, 50620,
//     50631, 50621, 50629, 50625, 50627, 50623, 50632, 50626, 50630, 50622,
//     52028, 52029, 52030, 50365, 50635, 50633, 50636, 50364, 52028, 52029,
//     52030, 50730, 50735, 50734, 50731, 50733, 50737, 50738, 50732, 50736,
//     50818, 50604
//   ];

//   imgArr = ['https://render.worldofwarcraft.com/classic-us/icons/56/inv_helmet_158.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_plate_26.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_boots_leather_07.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_shortblade_101.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_necklace_53.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrownringb.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_43.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_pants_plate_31.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_64.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_82.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_83.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shield_72.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shoulder_117.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_axe_120.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_bow_55.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_boots_plate_13.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_helmet_151.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_shortblade_103.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrownringd.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shoulder_114.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_ahnqiraj_05.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_pants_mail_32.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shoulder_112.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_necklace_48.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_staff_109.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_leather_21.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_85.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_44.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_boots_mail_10.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_86.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrownnecklaced.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_trinket_02.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrowncloak.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_misc_coin_18.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_40.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_43.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_88.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_83.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_leather_22.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_axe_113.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_helmet_156.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_boots_leather_8.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_70.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shoulder_130.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_trinket_04.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_sword_154.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrowncape.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_41.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_83.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_staff_107.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_boots_cloth_24.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_pants_leather_34.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_68.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_mail_11.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_necklace_49.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_84.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_kilt_cloth_02.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_hand_33.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_helmet_154.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_104.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_87.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_60.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_pants_leather_35.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shoulder_133.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_63.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrownringc.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_mace_118.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_trinket_01.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrownnecklaceb.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_wand_35.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shoulder_113.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_79.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shoulder_130.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_shortblade_105.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrowncape.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_plate22.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_plate_26.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_helmet_148.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_60.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_47.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_alchemy_enchantedvial.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_sword_152.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_61.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_mace_114.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_59.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_misc_thread_01.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_81.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_mace_116.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_46.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_helmet_151.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shoulder_111.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_helmet_149.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_hand_33.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_mail_15.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_cloth_80.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_87.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_boots_mail_06.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_84.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_misc_cape_18.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_92.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelcrafting_crimsonspinel_02.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_staff_109.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_staff_106.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelcrafting_gem_28.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_shield_75.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_necklace_50.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_misc_cape_16.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_pants_plate_31.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrownringa.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_gauntlets_84.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_belt_63.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_wand_34.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_shortblade_105.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_chest_cloth_77.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_boots_plate_13.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/item_icecrownnecklacec.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_pants_plate_33.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_boots_plate_14.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_helmet_169.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_bracer_40.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_86.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_trinket_03.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_offhand_zulaman_d_02.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_misc_monsterhorn_03.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_40.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_trinket_06.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/ability_paladin_judgementsofthejust.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_sword_153.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_staff_109.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_mace_115.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_staff_108.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_crossbow_38.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_axe_113.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_mace_117.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_sword_150.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_weapon_shortblade_104.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/spell_deathknight_summondeathcharger.jpg',
//   'https://render.worldofwarcraft.com/classic-us/icons/56/inv_jewelry_ring_83.jpg']
//   updateAll(idArr);