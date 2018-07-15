const {Router} = require('express')
const fs = require('fs')
const router = Router()
const path = require('path')
// Mock Users
const restaurants = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'restaurants.json'))
)

/* GET restaurants listing. */

router.get('/restaurants', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.send(restaurants)
})
router.get('/restaurants/id/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  let id = req.params.id
  let restaurant = restaurants.find(r => {
    return r.id == id
  })
  if (restaurant) {
    res.send(restaurant)
  } else {
    res.send('Restaurant does not exist')
  }
})
router.get('/restaurants/cuisine/:cuisine', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  let cuisine = req.params.cuisine
  let restaurant = restaurants.filter(r => {
    return r.cuisine_type == cuisine
  })
  if (restaurant) {
    res.send(restaurants)
  } else {
    res.send('Restaurant does not exist')
  }
})
router.get('/restaurants/cuisines/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
  // Remove duplicates from cuisines
  const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
  res.send(uniqueCuisines)
})
router.get('/restaurants/neighborhood/:neighborhood', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  let neighborhood = req.params.neighborhood
  let restaurant = restaurants.filter(r => {
    return r.neighborhood == neighborhood
  })
  if (restaurant) {
    res.send(restaurant)
  } else {
    res.send('Restaurant does not exist')
  }
})
router.get('/restaurants/neighborhoods/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)
  const uniqueNeighborhoods = neighborhoods.filter(
    (v, i) => neighborhoods.indexOf(v) === i
  )
  res.send(uniqueNeighborhoods)
})
router.get(
  '/restaurants/neighborhood/cuisine/:neighborhood/:cuisine',
  (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    let neighborhood = req.params.neighborhood
    let cuisine = req.params.cuisine

    let restaurant = restaurants
    if (cuisine !== 'all') {
      restaurant = restaurant.filter(r => r.cuisine_type == cuisine)
    }
    if (neighborhood !== 'all') {
      restaurant = restaurant.filter(r => r.neighborhood == neighborhood)
    }
    if (restaurant.length > 0) {
      res.send(restaurant)
    } else {
      res.send({error: 'No matches found'})
    }
  }
)
module.exports = router
