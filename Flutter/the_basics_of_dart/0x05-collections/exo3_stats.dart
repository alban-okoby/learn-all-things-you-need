void main() {


  Map<String, double> statsResult(List<double> numbers) {

    double sum  = numbers.reduce((a, b) => a + b);
    double moy = sum / numbers.length;
    double min = numbers.reduce((a, b) => a < b ? a : b);
    double max = numbers.reduce((a, b) => a > b ? a : b);
   
    return {
      'moyenne': moy,
      'min': min,
      'max': max
    };
  }


    List<double> listNumbers = [18, 15, 11, 20, 13, 05, 19];
    Map<String, double> results = statsResult(listNumbers);

    print(results);
  
}