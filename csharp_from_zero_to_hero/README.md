# CSharp_from_zero_to_hero

## Why learn C# ?
Learn CSharp (C#) because he is : 
- [x] Versatility
- [x] Object-Oriented Programming
- [x] Microsoft Ecosystem
- [x] Similarity to Other Languages (Java, C, C++ ...)
- [x] Integration with Visual Studio
- [x] Portable
- [x] Distributed
- [x] Community and Support
- [x] Job Opportunities
### Explained
Learning C# can offer several benefits: <br> 
- **Versatility**: C# is a versatile programming language that can be used to build a wide range of applications, including desktop applications, web applications, mobile apps, games, and more. It is particularly well-suited for developing applications on the Microsoft .NET framework. <br>
- **Job Opportunities**: C# is widely used in the software development industry, especially for building enterprise-level applications. By learning C#, you can increase your job prospects and open doors to career opportunities in various domains, including software development, web development, game development, and more.
- **Microsoft Ecosystem**: C# is developed and supported by Microsoft, which provides extensive documentation, tools, and resources for developers. If you are interested in working with Microsoft technologies, such as .NET framework, Azure cloud services, or Windows applications, learning C# is essential.
- **Object-Oriented Programming**: C# is an object-oriented programming (OOP) language, which helps in organizing and structuring code. By learning C#, you gain a solid understanding of OOP concepts like classes, objects, inheritance, and polymorphism, which are widely applicable in many other programming languages.
- **Similarity to Other Languages**: If you already have experience with programming languages like Java or C++, learning C# will be relatively easier. C# shares similarities with these languages, making it easier to transfer your skills and knowledge between them.
- **Community and Support**: C# has a large and active developer community, which means you can find plenty of online resources, forums, and communities to seek help, share knowledge, and collaborate with fellow developers.
- **Integration with Visual Studio**: C# integrates seamlessly with Visual Studio, a powerful and feature-rich integrated development environment (IDE). Visual Studio offers advanced debugging capabilities, code analysis tools, and other productivity features that can enhance your development workflow.  Ultimately, the decision to learn C# depends on your specific goals, interests, and career aspirations. If you are interested in Microsoft technologies, software development, or want to expand your programming skill set, learning C# can be a valuable investment.

### 02 Formating & Interpolation
#### - Example
```csharp
  string projectName = "ACME";

string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";

string data = "data.txt";
string ruPath = "ru-RU";

Console.WriteLine("View English output:");
Console.WriteLine($@"c:\Exercice\{projectName}\{data}");
Console.WriteLine("\n");

Console.WriteLine($@"{russianMessage}:");
Console.WriteLine($@"c:\Exercice\{projectName}\{ruPath}\{data}");
```

#### - Output
```csharp
Output
View English output:
c:\Exercice\ACME\data.txt

Посмотреть русский вывод:
c:\Exercice\ACME\ru-RU\data.txt
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate. <br>
Happy coding <\🚀> <br>
