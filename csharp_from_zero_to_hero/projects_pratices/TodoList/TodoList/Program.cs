

namespace ToDoListApp
{
    class Program
    {
        static List<string> toDoList = new List<string>();

        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to the To-Do List Application!");

            while (true)
            {
                Console.WriteLine("\n1. Add a task");
                Console.WriteLine("2. Edit a task");
                Console.WriteLine("3. Remove a task");
                Console.WriteLine("4. View all tasks");
                Console.WriteLine("5. Exit");
                Console.Write("Choose an option: ");

                string option = Console.ReadLine();

                switch (option)
                {
                    case "1":
                        AddTask();
                        break;
                    case "2":
                        EditTask();
                        break;
                    case "3":
                        RemoveTask();
                        break;
                    case "4":
                        ViewTasks();
                        break;
                    case "5":
                        Console.WriteLine("Goodbye!");
                        return;
                    default:
                        Console.WriteLine("Invalid option. Please choose 1, 2, 3, 4 or 5.");
                        break;
                }
            }
        }

        static void AddTask()
        {
            Console.Write("Enter the task description: ");
            string task = Console.ReadLine();
            toDoList.Add(task);
            Console.WriteLine("Task added successfully.");
        }

        static void EditTask()
        {
            Console.Write("Enter the task number to edit: ");
            int taskNumber;
            if (int.TryParse(Console.ReadLine(), out taskNumber) && taskNumber > 0 && taskNumber <= toDoList.Count) {
                Console.Write("Enter a new task description : ");
                string newDescription = Console.ReadLine();
                toDoList[taskNumber - 1] = newDescription;
                Console.WriteLine("Task edited successfully !");
            } 
            else
            {
                Console.WriteLine("Invalid task number.");
            }
        }

        static void RemoveTask()
        {
            Console.Write("Enter the task number to remove: ");
            int taskNumber;
            if (int.TryParse(Console.ReadLine(), out taskNumber) && taskNumber > 0 && taskNumber <= toDoList.Count)
            {
                toDoList.RemoveAt(taskNumber - 1);
                Console.WriteLine("Task removed successfully.");
            }
            else
            {
                Console.WriteLine("Invalid task number.");
            }
        }

        static void ViewTasks()
        {
            Console.WriteLine("\nTo-Do List:");
            if (toDoList.Count == 0)
            {
                Console.WriteLine("No tasks to show.");
            }
            else
            {
                for (int i = 0; i < toDoList.Count; i++)
                {
                    Console.WriteLine($"{i + 1}. {toDoList[i]}");
                }
            }
        }
    }
}
