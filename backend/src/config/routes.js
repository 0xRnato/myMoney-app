const express = require('express');

module.exports = (server) => {

    // URL base
    const router = express.Router();
    server.use('/api', router);

    //Routes from Billing Cycles
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles');
}