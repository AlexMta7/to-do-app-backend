import { Sequelize } from 'sequelize'
import config from '../../config.js'

const db = new Sequelize({
  database: config.DATABASE,
  username: config.USERDB,
  password: config.PASSWORDDB,
  host: config.HOSTDB,
  port: config.PORTDB,
  dialect: 'postgres',
  // dialectOptions: {
  //   dateStrings: true,
  //   typeCast: true,
  //   // ssl: {
  //   //   require: true,
  //   //   rejectUnauthorized: false,
  //   // },
  // },
})

export default db
