const getAllProducts = (req, res) => {
  res.status(200).json({ message: "All products" });
};

const getAllProductsStatic = (req, res) => {
  res.status(200).json({ message: "All Static products" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
