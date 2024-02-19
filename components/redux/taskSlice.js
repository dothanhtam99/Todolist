import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        completedTasks: [],
        deleteTask: []
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now().toString(),
                name: action.payload.task,
                completed: false
            }
            state.tasks.push(newTask);
            console.log("tasks " + newTask)

        },

        deleteTask: (state, action) => {
            const deleteTasks = state.tasks.filter((item) => item.id !== action.payload.id);
            state.tasks = deleteTasks;
        },

        completeTask: (state, action) => {
            const task = state.tasks.find((item) => item.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
        },
        setTasks: (state, action) => {
            return action.payload;
        },

    }
});

export const { addTask, deleteTask, completeTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
