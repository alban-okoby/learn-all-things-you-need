void main() {
  // Utiliser la boucle for lorsque vous savez à l'avance le nombre d'occurence à exécuter.
  int multi = 7;
  int result = 0;

  for (int i = 0; i <= 10; i++) {
    result = multi * i;
    print("$multi x $i = $result");
  }
}