void main() {
/**
 * Learn Dart (collections)
 * @author [Alban Okoby](https://www.github.com/alban-okoby)
*/

  Set<T> delDoublons<T>(List<T> elementsOfList) {
    return Set<T>.from(elementsOfList);
  }

  List<int> notes = [18, 11, 2, 5, 18, 11];
  Set<int> notesFiltered = delDoublons(notes);
  
  // List with doublons
  print(notes);

  // List without doublons
  print(notesFiltered);
}