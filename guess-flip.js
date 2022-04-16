import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["call"]
const call = args.call

var flipFlop = flipACoin(call)


if (call == null || (call != "heads" && call != "tails") ){
    console.log("Error: wrong or no input")
    console.log('Usage: node guess-flip --call=[heads||tails]')
} else {
    console.log(flipFlop)
    
}