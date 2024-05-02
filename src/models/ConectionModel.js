import { Sequelize } from 'sequelize'
import config from '../../config.js'
import axios from 'axios'

const secret = await axios.get(
  'https://mla1ac94og.execute-api.us-east-1.amazonaws.com/test/getSecret'
)

const db = new Sequelize(config.DATABASE, secret.data.username, secret.data.password, {
  host: config.HOSTDB,
  dialect: 'mysql',
})

export default db
