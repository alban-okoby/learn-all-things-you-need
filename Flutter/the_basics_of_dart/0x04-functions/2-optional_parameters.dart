void main() {
    /**
 * Learn dart (function)
 * @author [Alban Okoby](https://www.github.com/alban-okoby)
 */

  /**
   * functionWithOptionalParams (function)
  */

  String functionWithOptionalParams (String name, {String langage = "agni"}) {
    return "Hello $name 🖐🏽 (Language: $langage)";
  }

  // Print the result of the function
  print(functionWithOptionalParams(""));
}