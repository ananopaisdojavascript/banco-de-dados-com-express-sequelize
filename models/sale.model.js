import Sequelize from "sequelize"
import db from "../repositories/db.js"
import Client from "./client.model.js"
import Product from "./product.model.js"

const Sale = db.define('products', {
  saleId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  value: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  undescored: true
});

Sale.belongsTo(Client, { foreignKey: "clientId" })
Sale.belongsTo(Product, { options: "productId" })

export default Sale

