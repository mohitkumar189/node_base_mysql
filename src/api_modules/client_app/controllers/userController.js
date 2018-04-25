'use strict'
const Service = require('../services/userService');
const logger = require('../../../helpers/logger')
const util = require('../../../common/util');

module.exports = {
    /*
       /---------------------------ROOT LEVEL-----------------
       */
    getAll: async (req, res, next) => {
        //  logger.error(util.getTime('2013-12-01'));
        //  logger.logger.info("TEST LOG");
        res.send("test here")
    },
    save: async (req, res, next) => {

    },
    updateAll: async (req, res, next) => {

    },
    patchUpdateAll: async (req, res, next) => {

    },
    deleteAll: async (req, res, next) => {

    },

    /*
    /---------------------------ID LEVEL-----------------
    */
    getById: async (req, res, next) => {

    },
    saveAtId: async (req, res, next) => {

    },
    updateAtId: async (req, res, next) => {

    },
    patchUpdateAtId: async (req, res, next) => {

    },
    deleteAtId: async (req, res, next) => {

    },
    /*
    /---------------------------ACTION LEVEL-----------------
    */
    getAction: async (req, res, next) => {

    },
    saveAction: async (req, res, next) => {

    },
    updateAction: async (req, res, next) => {

    },
    patchUpdateAction: async (req, res, next) => {

    },
    deleteAction: async (req, res, next) => {

    }
}