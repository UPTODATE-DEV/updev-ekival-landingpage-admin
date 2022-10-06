'use strict';

/**
 * solution service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::solution.solution');
