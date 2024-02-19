import AsyncStorage from "@react-native-async-storage/async-storage";

 export const saveTasksToAsyncStorage = async (tasks) => {
    try {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks to AsyncStorage:", error);
    }
};

export const loadTasksFromAsyncStorage = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("tasks");
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks from AsyncStorage:", error);
      return [];
    }
  };
