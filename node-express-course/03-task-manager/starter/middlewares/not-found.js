const notFound = (req, res) => res.status(400).send("Route does not exis");

module.exports = notFound;
