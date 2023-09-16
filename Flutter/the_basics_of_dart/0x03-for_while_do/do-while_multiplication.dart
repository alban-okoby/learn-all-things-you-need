void main() {
  int multi = 5;
  int result = 0;
  int i = 0;
  
  do {
    result = i * multi;
    print("$multi x $i = $result");
    i++;
  } while (i <= 10);
}