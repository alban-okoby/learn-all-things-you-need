import 'dart:collection';

void main() {
/**
 * Learn Dart (collections)
 * @author [Alban Okoby](https://www.github.com/alban-okoby)
*/

  // declare linkedHashSet collection
  var myLinkedHashSet = LinkedHashSet<String>();
  myLinkedHashSet.add("Black Motors");
  myLinkedHashSet.add("No Excuse");
  myLinkedHashSet.add("Great Factory");
  myLinkedHashSet.add("Black Motors"); // // Ignored because it is duplicate
  myLinkedHashSet.add("Great Factory"); // Ignored because it is duplicate

  // Print linkedHashSet
  print(myLinkedHashSet); // {Black Motors, No Excuse, Great Factory}
}