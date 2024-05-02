import { DataTypes } from 'sequelize'
import db from './ConectionModel.js'

const Tasks = db.define(
  'TASK',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: { type: DataTypes.STRING, field: 'title' },
    completed: { type: DataTypes.BOOLEAN, field: 'completed' },
  },
  {
    timestamps: false,
    tableName: 'TASK',
  }
)

export default Tasks
