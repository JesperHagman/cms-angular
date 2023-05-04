'use strict';

/**
 * basic-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-model.basic-model');
