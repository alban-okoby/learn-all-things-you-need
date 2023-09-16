void main() {
  int multi = 3;
  int i = 0;
  int result = 0;
  bool canContinue = true;

  while (i < 11) {
    result = i * multi;
    print("$multi x $i = $result");
    i++;

    if (i == 6 && canContinue) {
     print("Great you can continue");
    } 
  }
}
