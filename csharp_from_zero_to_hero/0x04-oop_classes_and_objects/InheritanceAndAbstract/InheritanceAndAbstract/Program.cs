using System;

namespace InheritanceAndAbStract
{
    public class Person
    {
        // Properties
        public string name;
        public int age;


        // Default constructor
        public Person() { }

        // Another constructor
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        // Destructor
        ~Person() { 
            // Clean up code
        }

        public string Name
        {
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

        // Inheritance (Woman who extend Person)
        public abstract class Woman : Person
        {
            public abstract void Habit();
        }

        // Inheritance (Girl who extend Woman)
        public class Girl : Woman
        {
            // Make a redefinition (change method sens)
            public override void Habit()
            {
                Console.WriteLine("I am a beautiful girl ..");
            }
        }

        public abstract class Man : Person
        {
            public abstract void Habit();
        }

        public class Boy : Man
        {
            // Make a redefinition (change method sens)
            public override void Habit()
            {
                Console.WriteLine("I am a super boy ..");
            }
        }

        static void Main(string[] args)
        {
            Person person1 = new Person();
            person1.Name = "Alban";
            person1.Age = 33;
            person1.Introduce();

            // polymorphism (Person can be a Girl or a Boy ..)
            Person girl = new Girl();
            Person boy = new Boy();

            girl.age = 17;
            girl.name = "Rachelle";
            girl.Introduce();

            boy.age = 15;
            boy.name = "John";
            boy.Introduce();

        }

    }

}