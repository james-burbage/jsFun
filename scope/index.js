const scope = {
  exerciseA() {
    let personA = "Paul";
    let personB = "Ben";
    let personC = "Tom";

    function changePerson() {
      if (personA === "Paul") {
        person = "CardiB";
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB

        if (personB.includes("B")) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      { A: "Ben" },
      { B: "CardiB" },
      { C: "CardiB" },
      { D: "Paul" }
    ];
    return result;

    // Annotation:
    // The variable personA is declared and the value is set to 'Paul'
    // The variable personB is declared and the value is set to 'Ben'
    // The variable personC is declared and the value is set to 'Tom'
    // The function changePerson is declared and saved
    // changePerson is invoked and the intepreter returns to the function and is executed
    // The conditional is executed, which is saying if the personA variable is 'Paul', then a person variable is set to 'Cardi B'
    // The interpreter cannot find personA in the scope of the changePerson function and looks globally
    // The interpreter finds the personA variable globally and checks to see if the value is set to 'Paul'
    // Since that conditional is truthy, the interpreter executes the next line of code
    // Since there is no person variable set in the scope of changePerson, the interpreter checks globally for the person variabke
    // The interpreter is unable to find the person variable globally and then creates the person variable and sets it to 'Cardi B'
    // Still within the changePerson function, the beautifyPerson function is invoked
    // The interpreter then is asked to log personB which is set to 'Ben' and has not yet been altered
    // The conditional inside, then checks to see if personB includes 'B', which it does and then executes the next lines of code inside the conditional
    // personB is then reassigned to the person variable, which was set globally, whose value was 'Cardi B'
    // personC is then reassigned to personB which is now 'Cardi B'
    // personC is then console.logged which evaluates to 'Cardi B'
    // personC is then reassigned to personA, which is still globally set to 'Paul'
    //personB is logged, and the value is 'Cardi B' because personB was set only globally and the reassignment reassigned the global variable
    //
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [{ A: 75 }, { B: 64 }, { C: 64 }, { D: 30 }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = "Hello";

    function greetingFunction() {
      var greeting = "Yo"; //hey

      if (greeting === "Yo") {
        let greeting = "Howdy";
      }

      // Log A: greeting //yo

      function newPhrase() {
        greeting = "Hey";

        // Log B: greeting //hey
      }

      newPhrase();

      // Log C: greeting  //hey
    }

    greetingFunction();

    // Log D: greeting //hello

    const result = [{ A: "Yo" }, { B: "Hey" }, { C: "Hey" }, { D: "Hello" }];
    return result;

    // Annotation:
    // first we declared the global variable greeting and assigned it to a value of hello
    // then we declared a function called greeting function
    // intrepeter move down to the invocation of the greetingfunction and execute that function
    // interpreter declare a new variable greeting with a value of 'yo', functionally scoped
    // interpreter reads the conditional statement and check the functionally scoped variable to see if it has the same value, which it does, and then creates a new variable with set to 'howdy'
    // the log would return yo because it is checking the functionally scoped variable
    // newPhrase is declared, and then invoked
    // interpreter is then told to reassign greeting to hey, does not find the declared variable, and changes the variable declaration in the parent function to hey
    // interpreter is told to log  B greeting, interpreter cannot greeting in newPhrase, moves to parent function and finds the variable , and logs hey
    // interpreter is told to log c, finds the variable in the same scope and logs hey
    // log d is hello and is pointing globally and was never reassigned
  },

  exerciseD() {
    let greeting = "howdy";

    const greetingGenerator = () => {
      let greeting = "hi";

      if (greeting === "hi") {
        let greeting = "hello";
      }

      // Log A: greeting

      const newGreeting = () => {
        greeting = "welcome";

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
      { A: "hi" },
      { B: "welcome" },
      { C: "welcome" },
      { D: "howdy" }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = "Brittany";

    function sayName() {
      let name = "Pam"; //n

      if (name === "Pam") {
        name = "Nathaniel";

        if (name.length > 0) {
          let name = "Brittany"; //b
        }

        // Log A: name //n
      }

      // Log B: name //n
    }

    // Log C: name //b

    sayName();

    // Log D: name //b

    const result = [
      { C: "Brittany" },
      { A: "Nathaniel" },
      { B: "Nathaniel" },
      { D: "Brittany" }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = "Spot";

    function petDog() {
      // Log A: dog

      if (dog === "Spot") {
        let dog = "Fluffy";
      }

      function rollOver() {
        // Log B: dog

        dog = "Biscuit";

        // Log C: dog
      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [
      { A: "Spot" },
      { B: "Spot" },
      { C: "Biscuit" },
      { D: "Biscuit" },
      { E: "Biscuit" }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = "apple";

    function eatFruit() {
      if (fruit !== "kiwi") {
        var fruit = "mango";

        if (fruit) {
          // Log A: fruit
          const fruit = "strawberry";
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = [
      { A: "reference error" },
      { B: "mango" },
      { C: "mango" },
      { D: "apple" }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function(num) {
      // Log D: num

      num = num + 1;

      // Log E: num
    };

    fn1();

    const result = [{ A: 4 }, { D: 9 }, { E: 10 }, { B: 9 }, { C: 4 }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [
      { A: 75 },
      { B: 0 },
      { C: 75 },
      { D: 80 },
      { A: 55 },
      { B: 0 },
      { C: 55 },
      { E: 55 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = "ketchup sandwich";

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = "chipotle sauce";

      if (toppings === "chipotle sauce") {
        sandwich = "not a mediocre sandwich";
      }

      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = "gouda";
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure";
      };

      shesTheManReference();
    };

    cheeseTopping = "kraft";
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = [
      { A: "ketchup sandwich" },
      { D: "gouda" },
      { B: undefined },
      { C: "not a mediocre sandwich" },
      { E: "not a mediocre sandwich" },
      { F: "National Treasure" }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = [{ A: 7 }, { B: 7 }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = [{ A: 95 }, { B: 90 }, { C: 90 }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [{ A: 5 }, { B: 6 }, { C: "reference error" }, { D: 6 }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = "Pam";

    function changeInstructor() {
      // Log A: instructor

      if (instructor === "Brittany") {
        const instructor = "Nathaniel";
      } else {
        let instructor = "Brittany";
      }

      // Log B: instructor

      function rename() {
        instructor = "Louisa";
        // Log C: instructor
      }

      rename();

      // Log D: instructor
    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = [
      { E: "Pam" },
      { A: "Pam" },
      { B: "Pam" },
      { C: "Louisa" },
      { D: "Louisa" },
      { F: "Louisa" }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = "flipflop";

    function putOnShoe() {
      // Log A: shoe
      var shoe = "boot";
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [{ B: "flipflop" }, { A: "undefined" }, { C: "flipflop" }];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    function orderLunch() {
      if (typeof lunch === "undefined") {
        // Log A: lunch
        let lunch = "sandwich";
      }

      if (typeof lunch === "undefined") {
        lunch = "soup";
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = [{ B: "flipflop" }, { A: "undefined" }, { C: "flipflop" }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;
