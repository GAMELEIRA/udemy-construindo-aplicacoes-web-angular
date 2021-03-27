let isEnoughToBeatMF = function (parsecs: number): boolean {
  return parsecs < 12;
};

let call = (name: string) => console.log(`Do you copy, ${name}?`);

call("R2");

let distance = 14;

console.log(
  `Is ${distance} parsecs enough to beat Millenium Falcon? ${
    isEnoughToBeatMF(distance) ? "YES" : "NO"
  }`
);

function inc(speed: number, inc: number): number {
  return speed + inc;
}

console.log(`inc (5, 1) = ${inc(5, 1)}`);
