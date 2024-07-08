using System;

namespace ConditionalStatementsAndLoops {
    class Program
    {
        static void Main(string[] args) {
            int number = 7;

            if (number > 10)
            {
                Console.WriteLine("The number is greater than 10.");
            }
            else if (number > 5)
            {
                Console.WriteLine("The number is greater than 5 but less than or equal to 10.");
            }
            else
            {
                Console.WriteLine("The number is 5 or less.");
            }

            // Switch Statement
            int day = 3;
            switch (day)
            {
                case 1:
                    Console.WriteLine("Monday");
                    break;
                case 2:
                    Console.WriteLine("Tuesday");
                    break;
                case 3:
                    Console.WriteLine("Wednesday");
                    break;
                case 4:
                    Console.WriteLine("Thursday");
                    break;
                case 5:
                    Console.WriteLine("Friday");
                    break;
                case 6:
                    Console.WriteLine("Saturday");
                    break;
                case 7:
                    Console.WriteLine("Sunday");
                    break;
                default:
                    Console.WriteLine("Invalid day");
                    break;
            }        
        }
    }
}
 