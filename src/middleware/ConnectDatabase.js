import axios from 'axios'
import { Sequelize } from 'sequelize'
import config from '../../config.js'
// import { getSecret } from './SecretManager'

export const connectDatabase = async () => {
  // const secret = getSecret()

  const secret = await axios.get(config.APIGateway)

  const sequelize = new Sequelize(
    config.DATABASE,
    secret.data.username,
    secret.data.password,
    {
      host: config.HOSTDB,
      dialect: 'mysql',
    }
  )

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
