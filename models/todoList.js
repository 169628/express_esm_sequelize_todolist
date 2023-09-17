import { Model, DataTypes } from "sequelize";
import dataConnect from "../connection/index.js";

class Todos extends Model {}

Todos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, //關閉自動添加時間
    sequelize: dataConnect,
    tableName: "todos",
  }
);

export default Todos;
