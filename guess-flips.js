import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv)
args["call"]
const call = args.call


if (call == null || (call != "heads" && call != "tails") ){
    console.log('Usage: node guess-flip --call=[heads||tails]')
} else {
    console.log(flipACoin(call))
    
}