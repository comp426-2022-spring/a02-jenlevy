import { coinFlips } from "./modules/coin.mjs";
import minimist from "minimist";
import { countFlips } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2))
args["number"]
const number = args.number

var flippity = coinFlips(number);



if (number == null){
    var oops = coinFlips(1)
    console.log(oops)
    console.log(countFlips(oops))
} else {
    console.log(flippity)
    console.log(countFlips(flippity))
}
