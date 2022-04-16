import { coinFlips } from "./modules/coin.mjs";
import minimist from "minimist";
import { countFlips } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2))
args["number"]
const number = args.number || 1

var flippity = coinFlips(number);

    console.log(flippity)
    console.log(countFlips(flippity))

