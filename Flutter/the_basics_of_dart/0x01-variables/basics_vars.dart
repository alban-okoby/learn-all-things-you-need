
// Déclaration explicite
int age = 45;
String name = "Alain";
String win = "✅";

// Déclaration implicite
var score = 99;

// Stocke n'importe quelle nombre (entier et décimal)
num socre1 = 1;

// Boolean
bool passedTest = true;

// Stocke des symboles
Symbol mySymbol1 = #win; 

// Representation de caractères unicode
Runes myRunes1 = Runes('\u2665');

// Constantes
const double pi = 3.14159265359;
final String appName = "DartApp";

void main() {
  print("ACCUEIL $appName");
  print("Je m'appel $name, j'ai $age'");
  print("mon socre est de : $score par rapport à $pi demandé.");
  print("Symbol gagné : $mySymbol1, caractère équivalent = $myRunes1");

}

// ANY
var dynamic = true;