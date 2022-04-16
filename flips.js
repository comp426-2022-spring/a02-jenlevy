import { coinFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["number"]
const number = args.number

if (number == null){
    console.log(coinFlips(1))
} else {
    console.log(coinFlips(number))
}
