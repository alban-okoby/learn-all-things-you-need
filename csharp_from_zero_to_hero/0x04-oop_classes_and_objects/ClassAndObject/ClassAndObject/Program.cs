using System;

namespace ClassesAndObjects
{
    public class Person
    {
        // Properties
        public string name;
        public int age;

        
        // Default constructor
        public Person() { }

        // ANother constructor
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { 
            get { return name; }
            set { name = value; }

        }

        public int Age
        {
            get { return age; }
            set { age = value; }
        }

        // Methods
        public void Introduce()
        {
            Console.WriteLine($"Hi, my name is {name} and I am {age} old");
        }
        static void Main(string[] args)
        {
            Person person1 = new Person();
            person1.Name = "Alban";
            person1.Age = 33;
            person1.Introduce();
        }

    }

}