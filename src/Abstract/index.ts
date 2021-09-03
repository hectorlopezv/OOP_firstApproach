//Abstract Factory Method

//Family of Related Products
interface Chair {
  usefulFunctionA(): string;
}

interface Sofa {
  usefulFunctionB(): string;
  anotherUsefulFunctionB(collaborator: Chair): string;
}

interface Coffeetable {
  usefulFunctionC(): string;
}

//Variations Of Each Related Products
class VictorianChair implements Chair {
  public usefulFunctionA(): string {
    return "The result of the product A1.";
  }
}

class ModernChair implements Chair {
  public usefulFunctionA(): string {
    return "The result of the product A1.";
  }
}

class ArtDecoChair implements Chair {
  public usefulFunctionA(): string {
    return "The result of the product A1.";
  }
}

//sofa derivation
class VictorianSofa implements Sofa {
  public usefulFunctionB(): string {
    return "The result of the product B1.";
  }
  public anotherUsefulFunctionB(collaborator: Chair): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class ModernSofa implements Sofa {
  public usefulFunctionB(): string {
    return "The result of the product B1.";
  }
  public anotherUsefulFunctionB(collaborator: Chair): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class ArtDecoSofa implements Sofa {
  public usefulFunctionB(): string {
    return "The result of the product B1.";
  }
  public anotherUsefulFunctionB(collaborator: Chair): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

//Abstract Factory

interface FurnitureFactory {
  createChair: () => Chair;
  createSofa: () => Sofa;
}

//ConcreteDerivation
class ModernFurnitureT implements FurnitureFactory {
  public createChair() {
    return new ModernChair();
  }
  public createSofa() {
    return new ModernSofa();
  }
}

class VictorianFurnitureT implements FurnitureFactory {
  public createChair() {
    return new VictorianChair();
  }
  public createSofa() {
    return new VictorianSofa();
  }
}

class ArtDecoFurnitureT implements FurnitureFactory {
  public createChair() {
    return new ArtDecoChair();
  }
  public createSofa() {
    return new ArtDecoSofa();
  }
}

//Client Code

function clientCodeFurniture(factory: FurnitureFactory) {
  const productA = factory.createSofa();
  const productB = factory.createChair();
  console.log(productA.usefulFunctionB());
  console.log(productA.anotherUsefulFunctionB(productB));
}

const modernFactory = ModernFurnitureT;
const victorianFactory = VictorianFurnitureT;
console.log("Client: Testing client code with the first factory type...");
clientCodeFurniture(new modernFactory());

console.log("");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
clientCodeFurniture(new victorianFactory());


//Example 2

