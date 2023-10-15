void main() {
  /**
   * Learn Dart (collections)
   * @author [Alban Okoby](https://www.github.com/alban-okoby)
  */

  Set<T> findSameElements<T>(List<T> list1, List<T> list2) {
    var setList1 = Set<T>.from(list1);
    var setList2 = Set<T>.from(list2);
    return setList1.intersection(setList2);
  }

  // Tests case for string
  List<String> colorsGroup1 = ["red", "green", "blue", "yellow", "dark"];  
  List<String> colorsGroup2 = ["red", "white", "blue", "cyan", "dark"]; 
  Set<String> commonColors = findSameElements(colorsGroup1, colorsGroup2);

  print(commonColors); // {red, blue, dark}

 // Test case for integers
  List<int> liste1 = [1, 2, 3, 4];
  List<int> liste2 = [1, 4, 7];
  Set<int> ensembleCommun = findSameElements(liste1, liste2);
  print(ensembleCommun); // {1, 4}

} 