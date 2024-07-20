using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Welcome to the simple Calculator app \n");

            while (true)
            {
                Console.WriteLine("Enter the first number: ");
                double num1 = Convert.ToDouble(Console.ReadLine());
                

                Console.WriteLine("Enter the second number: ");
                double num2 = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine("Great! Choose the operator (+, -, *, /): ");
                string operation = Console.ReadLine();

                double result = 0;

                switch (operation)
                {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        if (num1 != 0)
                        {
                            result = num1 / num2;
                        } else
                        {
                            Console.WriteLine("Error: Division by zero is not allowed.");
                            continue;
                        }
                        break;
                    default: Console.WriteLine("Invalid operateur. Please enter one of +, -, *, /.");
                        continue;
                }

                Console.WriteLine($"Result: {num1} {operation} {num2} = {result}");

                Console.WriteLine("\nDo you want to perform another calculation? (yes/no):");
                string response = Console.ReadLine().ToLower();
                if (response == "yes" || response == "y" || response == "Y")
                {
                    continue;
                } else
                {
                    break;
                }

            }
            Console.WriteLine("Thank you for using Calculator!");
        }
    }
}