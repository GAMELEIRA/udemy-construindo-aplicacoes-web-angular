import { Spacecraft, Containership } from "./../modulos/base-ships";

export class MilineumFalcon extends Spacecraft implements Containership {
  cargoContainer: number;

  constructor() {
    super("hyperdrive");
    this.cargoContainer = 2;
  }

  jumbIntoHyperspace() {
    if (Math.random() >= 0.5) {
      super.jumbIntoHyperspace();
    } else {
      console.log("Failed to jump into hyperspace");
    }
  }
}
