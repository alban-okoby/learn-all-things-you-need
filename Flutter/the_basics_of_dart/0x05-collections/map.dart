void main () {
  /**
   * Learn Dart (collections)
   * @author [Alban Okoby](https://www.github.com/alban-okoby)
  */

  // Declare a Map 
  Map<String, int> cars = new Map<String, int>();

  // Add a values to the Map
  cars = { 
    'Mercedes': 111000,
    'BMW': 14000,
    'Honda': 9300 
  };


  // print the cars keys
  print(cars.keys); // (Mercedes, BMW, Honda)

  // print the cars prices
  print(cars.values); // (111000, 14000, 9300)

  // Print the cars keys and values
  print(cars); // {Mercedes: 111000, BMW: 14000, Honda: 9300}
}