import { Spacecraft, Containership } from "./../modulos/base-ships";
import { MilineumFalcon } from "./../modulos/startfighters";

import * as _ from 'lodash';

console.log(_.pad('TS EXAMPLES', 40, "="));
;
let ship = new Spacecraft("hyperdrive");
ship.jumbIntoHyperspace();

let falcon = new MilineumFalcon();
falcon.jumbIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainer > 2;

console.log(
  `Is falcon good for the job ${goodForTheJob(falcon) ? "yes" : "no"} `
);
