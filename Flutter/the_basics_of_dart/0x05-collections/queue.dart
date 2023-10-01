import 'dart:collection';

void main() {

  // Declare a Queue collection
  Queue<int> marks = Queue<int>();

  // Add a file to
  marks.add(11);
  marks.add(19);
  marks.add(14);
  marks.add(20);
  
  // Print the marks
  print(marks); // {11, 19, 14, 20}

  // Remove the first mark
  marks.removeFirst();

  // remove the last mark
  marks.removeLast();

  // Print the marks
  print(marks); // {19, 14}

  marks.add(25);
}