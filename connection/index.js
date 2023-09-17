import { Sequelize } from "sequelize";

const dataConnect = new Sequelize("sequelize_esm", "root", "1679", {
  host: "localhost",
  dialect: "mysql",
});

export default dataConnect;
