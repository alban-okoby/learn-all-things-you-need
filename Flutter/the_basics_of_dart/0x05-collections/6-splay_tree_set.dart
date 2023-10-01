import 'dart:collection';

void main() {
  /**
   * Learn Dart (collections)
   * @author [Alban Okoby](https://www.github.com/alban-okoby)
  */

  // Declare a SplayTreeSet
  var myTreeSet = SplayTreeSet();
  myTreeSet.addAll({1, 7, 3, 7});

// Print the SplayTreeSet
  print(myTreeSet); // {1, 3, 7}
}