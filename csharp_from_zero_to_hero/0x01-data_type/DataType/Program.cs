using System;

namespace BasicConcepts
{
    class Program
    {
        static void Main(string[] args)
        {
            // Variables and Data Types
            int age = 25;
            string name = "Alice";
            double salary = 50000.75;
            bool isEmployed = true;
            char grade = 'A';

            // Arithmetic Operators
            int a = 10;
            int b = 3;
            Console.WriteLine($"Sum: {a + b}");
            Console.WriteLine($"Difference: {a - b}");
            Console.WriteLine($"Product: {a * b}");
            Console.WriteLine($"Quotient: {a / b}");
            Console.WriteLine($"Remainder: {a % b}");

            // Comparison Operators
            Console.WriteLine($"Is Equal: {a == b}");
            Console.WriteLine($"Is Not Equal: {a != b}");
            Console.WriteLine($"Is Greater: {a > b}");
            Console.WriteLine($"Is Less: {a < b}");

            // Logical Operators
            bool c = true;
            bool d = false;
            Console.WriteLine($"Logical AND: {c && d}");
            Console.WriteLine($"Logical OR: {c || d}");
            Console.WriteLine($"Logical NOT: {!c}");

            // Assignment Operators
            int num = 5;
            num += 3;
            Console.WriteLine($"Addition Assignment: {num}");
            num -= 2;
            Console.WriteLine($"Subtraction Assignment: {num}");
            num *= 4;
            Console.WriteLine($"Multiplication Assignment: {num}");
            num /= 6;
            Console.WriteLine($"Division Assignment: {num}");
            num %= 3;
            Console.WriteLine($"Modulus Assignment: {num}");
        }
    }
}
