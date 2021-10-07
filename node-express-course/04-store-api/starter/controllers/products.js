const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const products = await Product.find({
    price: { $gt: 30 },
  })
    .sort("price")
    .select("name price");

  res.status(200).json({ products, nbHits: products.length });
};

const getAllProductsStatic = async (req, res) => {
  console.log(req.query);
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  const result = Product.find(queryObject);

  if (sort) {
    const sortParam = sort.split(",").join(" ");
    result.sort(sortParam);
  } else {
    result.sort("createdAt");
  }

  if (fields) {
    const fieldParam = fields.split(",").join(" ");
    result.select(fieldParam);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result.skip(skip).limit(limit);

  const products = await result;

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
