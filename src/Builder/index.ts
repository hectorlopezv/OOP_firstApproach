//Builder Example

//1.common steps
//Abstract Builder
interface BuilderCommmonSteps {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

//2.concrete Builder

class ConcreteBuilderA implements BuilderCommmonSteps {
  private product!: Product1Output;
  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1Output();
  }
  public producePartA(): void {
    this.product.parts.push("PartA1");
  }

  public producePartB(): void {
    this.product.parts.push("PartB1");
  }

  public producePartC(): void {
    this.product.parts.push("PartC1");
  }
  public getProduct(): Product1Output {
    //Cuando vamos a entregar el producto esperamos
    //que este listo para el siguiente este fresquito.
    const result = this.product;
    this.reset();
    return result;
  }
}

//3.Product
class Product1Output {
  public parts: string[] = [];
  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

//4.Director
class DirectorGestion {
  private builder!: BuilderCommmonSteps;
  //SetBuilder to change builder in director
  public setBuilder(builder: BuilderCommmonSteps): void {
    this.builder = builder;
  }

  public buildFeaturedProduct(): void {//steps dicateted by director
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}
//5.Client Code
//necesita pedir un director y un builder a usar
function ClientCodeBuilder(director: DirectorGestion) {
  //director set client
  //builder set by client
  const builder = new ConcreteBuilderA();
  //set Builder on Director
  director.setBuilder(builder);

  //call director to dictate steps
  director.buildFeaturedProduct();

  //get Product from builder

  const output = builder.getProduct();
  output.listParts();
}

///
const directordm = new DirectorGestion();
ClientCodeBuilder(directordm);
