async function main() {
    const NAMES = [
      "Chris",
      "Li Kang",
      "Anne",
      "Francesca",
      "Mustafa",
      "Tina",
      "Bert",
      "Jada",
    ];
  
    /**
     * Create a function chooseName()
     * that returns a random name from the provided array (names)
     *
     * @param {string[]} names
     * @returns {string} Random name
     */
    function chooseName(names) {
      ////////////////////////////
      // ? Add your code here ? //
      ////////////////////////////
      if (names.length === 0) {
        return "No names available";
    }
    let randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];

    }
    
    console.log('random name:', chooseName(NAMES));
    
    
    // !Don't edit the code below here!
    console.log(
      "chooseName()",
      new Array(5).map(() => chooseName(NAMES)).join(", ") //The output is "chooseName() , , , ,"
     //new Array(5).fill().map(() => chooseName(NAMES)).join(", ") // I have been able to fix this by adding a fill() method in the line
    );
}
main();