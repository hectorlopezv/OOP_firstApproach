//Factory Method Ts Implementation
type onClickHandler = () => void;
//createtor classes
interface Button {
  render: () => void;
  onClick: (f: onClickHandler) => void;
}

//Creators
abstract class Dialog {
  public abstract createButton(): Button;
  public render() {
    const okButton = this.createButton();
    okButton.render();
    okButton.onClick(() => {});
  }
}

class WindowsDialog extends Dialog {
  public createButton(): Button {
    //solo es el factory
    return new WindowsButton(); //crea uno concreto
  }
}

class WebDialog extends Dialog {
  public createButton(): Button {
    //solo es el factory
    return new HtmlButton();
  }
}

//Concrete
class WindowsButton implements Button {
  public render() {}
  public onClick(fn: onClickHandler) {}
}

class HtmlButton implements Button {
  public render() {}
  public onClick(fn: onClickHandler) {}
}

//Client Code...the user of the classes
//Client code trabaja con el Creator super Padre asi no dependera de ninguna depdencia en particular
//solo que sea de un tipo creator
class Application {
  dialog!: Dialog; // usamos el Creator Abstract como base y sabemos que todos los creator subclasses seran validos
  init() {
    const config = this.readApplicationConfigFile();
    if (config.OS === "Windows") {
      this.dialog = new WindowsDialog();
    } else {
      this.dialog = new WebDialog();
    }
  }
  readApplicationConfigFile(): Record<"OS", "Windows" | "Mac" | "Linux"> {
    return {
      OS: "Windows",
    };
  }
  public main() {
    this.init();
    this.dialog.render();
  }
}
