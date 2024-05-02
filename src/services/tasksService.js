import { QueryTypes } from 'sequelize'
import db from '../models/ConectionModel.js'
import Tasks from '../models/Tasks.js'
import {
  query_deleteTask,
  query_getTasks,
  query_updateTask,
} from '../repositories/tasksRepository.js'

// Se guarda la información de una nueva tarea
export const saveTask = async (data) => {
  try {
    const Task = {
      title: data.title,
      completed: data.completed,
    }
    const resp = await Tasks.create(Task)
    return resp
  } catch (error) {
    console.error('Error al crear la tarea', error)
  }
}

// Se obtienen todas las tareas registradas
export const getAllTasks = async () => {
  const tasks = await db.query(query_getTasks, {
    type: QueryTypes.SELECT,
  })
  return tasks
}

// Actualiza el registro de una tarea por id
export const updateTaskById = async (data) => {
  const task = await db.query(query_updateTask, {
    replacements: {
      id: data.id,
      title: data.title,
      completed: data.completed,
    },
    type: QueryTypes.UPDATE,
  })
  return task
}

// Elimina el registro de una tarea por id
export const deleteTaskById = async (id) => {
  const task = await db.query(query_deleteTask, {
    replacements: {
      id: id,
    },
    type: QueryTypes.DELETE,
  })
  return task
}
