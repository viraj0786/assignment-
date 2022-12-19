const db = require("../models/Post");

module.exports = {
    post_uplode: async (req, res, next) => {
        try {
            const parms = req.body
            console.log('parms', parms)

        } catch (error) {
            next(error)
        }
    }
}
