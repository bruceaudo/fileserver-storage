/**
 * Fileserver storage application
 *
 * Copyright (c) 13 October, 2023 Bruce Audo
 */

'use strict'

/**
 * I am setting up all the dependencies I will use
 */
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

/**
 * Initialize the express application
 */
const app = express()

/**
 * If the port I have stated in my .env is already occupied I will use port {5600}
 */
const PORT = process.env.PORT || 6100

/**
 * Start listening for requests to this app on the ports given
 */
app.listen(PORT, () => {
  console.log(`Server listening on port--${PORT}`)
})
