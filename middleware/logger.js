const momenent = require('moment');

const logger = (req, res, next) => {
    Console.log(
        `${req.protocol}://${req.get('host')}${
            res.originalurl
        }:moment().format()`);
    
    next();
};

module.exports = logger;