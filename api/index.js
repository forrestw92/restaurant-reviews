const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const restaurants = require('./routes/restaurants')
// Import API Routes
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extend: true}))
app.use(bodyParser.json())
app.use(restaurants)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
