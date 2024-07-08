using System;

namespace ConditionalStatementsAndLoops
{
    class Program
    {
        static void Main(string[] args)
        {
            // For loop
            for (int i = 0; i < 3; i++) {
                Console.WriteLine("For loop interaction n = " + i);
            }

            // WHile Loop
            int j = 0;
            while (j < 3)
            {
                Console.WriteLine("While Loop interaction n = " + j);
                j++;
            }

            // Do-While Loop
            short k = 0;
            do
            {
                Console.WriteLine("Do-While Loop interaction n = " + k);
                k++;
            } while (k < 3);
        }
    }
}
