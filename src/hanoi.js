function getHanoiSolutions(nDiscs) {
    let solutions = [];
  
    // the actual solving algorithm as a nested function, recursively moving discs from source to target with spare as an auxiliary
    function hanoi(n, source, target, spare) {

      // base case  
      if (n == 1) {
        solutions.push({ disc: n, source: source, target: target });
        return;
      }
  
      // Move n - 1 discs from source to spare
      hanoi(n - 1, source, spare, target);
  
      // Move the nth disc from source to target
      solutions.push({ disc: n, source: source, target: target });
  
      // Move n - 1 discs from spare to target
      hanoi(n - 1, spare, target, source);
    }
  
    // Start the recursive process
    hanoi(nDiscs, 0, 1, 2);
    return solutions;
  }
  
  export { getHanoiSolutions };
  