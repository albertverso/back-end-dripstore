const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

moodule.exports = logger;