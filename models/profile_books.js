'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile_books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  profile_books.init({
    isbn: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    penulis: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'profile_books',
  });
  return profile_books;
};