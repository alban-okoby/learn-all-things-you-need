void main() {
/**
 * Learn Dart (collections)
 * @author [Alban Okoby](https://www.github.com/alban-okoby)
*/

  // Declare an integers list
  List<int> myList = [1, 2, 3, 4, 5];

  // Add one new value of list
  myList.add(17);

  // Let's declare a new list of integers
  List<int> notes = [10, 08, 19, 03];

  // Add many value of the list
  myList.addAll(notes);

  // Update one value of the list
  myList.insert(2, 14);

  // remove a value of the list
  myList.removeAt(2);

  // Remove the last value of the list
  myList.removeLast();

  print(myList);
}
