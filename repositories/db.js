import Sequelize from "sequelize"

const sequelize = new Sequelize(
  "postgres://bfovaunj:Y9Tq91yHm0kt_gqJbpVYq83M9IX2t4NW@drona.db.elephantsql.com/bfovaunj",
  {
    dialect: "postgres",
    define: {
      timestamps: false
    }
  }
)

export default sequelize