import { Router } from 'express'
import { getAllTasks } from '../controllers/TasksControllers.js'

const router = Router()

router.get('/', getAllTasks)

// router.get('/:id', getTask)

// router.post('/', createTask)

// router.put('/:id', updateTask)

// router.delete('/:id', deleteTask)

export default router
