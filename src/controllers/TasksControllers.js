// import Task from '../models/Task'

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
      { id: 3, title: 'Task 3', completed: false },
      { id: 4, title: 'Task 4', completed: true },
      { id: 5, title: 'Task 5', completed: false },
      { id: 6, title: 'Task 6', completed: true },
      { id: 7, title: 'Task 7', completed: false },
      { id: 8, title: 'Task 8', completed: true },
      { id: 9, title: 'Task 9', completed: false },
      { id: 10, title: 'Task 10', completed: true },
    ]
    // console.log(req)
    // const tasks = await Task.find()
    // res.json(tasks)
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// // Get a single task
// export const getTask = async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id)
//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' })
//     }
//     res.json(task)
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' })
//   }
// }

// // Create a task
// export const createTask = async (req, res) => {
//   try {
//     const task = new Task(req.body)
//     await task.save()
//     res.status(201).json(task)
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' })
//   }
// }

// // Update a task
// export const updateTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' })
//     }
//     res.json(task)
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' })
//   }
// }

// // Delete a task
// export const deleteTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id)
//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' })
//     }
//     res.json({ message: 'Task deleted successfully' })
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' })
//   }
// }
