{
    // Object orianted programming
    // paradiam
    // 1. procedural
    // 2. functional***
    // 3. Declarative
    // 4. object orianded*** 
    // 5. Event driven***

    
        // ------------------------oop - class ------------------------

    class Animal {
      constructor(
        public name: string,
        public species: string,
        public sound: string
      ) {}
  
      makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
      }
    }
  
    const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    const cat = new Animal("Persian bhai", "cat", "meaw meaw");
  
    cat.makeSound();
  
    //
  }