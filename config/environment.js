'use strict'

/* eslint-disable no-process-env */

const environment = process.env.NODE_ENV
  ? process.env.NODE_ENV.toLowerCase() : 'development'

// Validate environment
const validEnvironments = new Set(['development', 'test', 'production'])
if (!validEnvironments.has(environment)) {
  throw new Error(`Invalid environment: ${environment}`)
}

// Load env file only when development env
if (environment === 'development') {
  require('dotenv').config()
}

const eventsIntervalMilliseconds = process.env.EVENTS_INTERVAL_MILLISECONDS
  ? Number(process.env.EVENTS_INTERVAL_MILLISECONDS) : 60000
const pollerIntervalMilliseconds = process.env.POLLER_INTERVAL_MILLISECONDS
  ? Number(process.env.POLLER_INTERVAL_MILLISECONDS) : 10000

module.exports = {
  environment,
  eventsIntervalMilliseconds,
  pollerIntervalMilliseconds
}
