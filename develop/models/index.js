// import models
const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./product-tag');

//Defining the relationships, or associations between the models

// Products belongsTo (one to one) Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // if a category is deleted, so are the products in that category
});

// Categories have many (one to many) Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // if a category is deleted, so are the products in that category
});

// Products belongToMany (many to many) Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE', // if a product is deleted, it will delete the product_tag as well
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE', // if a tag is deleted, it will delete the product_tag as well
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
