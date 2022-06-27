import {BigInt, log} from "@graphprotocol/graph-ts"
import {
    Stocked,
    UnStocked
} from "../generated/SneakerHeads/SneakerHeads"
import {
    StockedStat,
} from "../generated/schema"

export function handleStocked(event: Stocked): void {
    let stockedStat = StockedStat.load('0')
    if (stockedStat === null) {
        stockedStat = new StockedStat('0')
        stockedStat.stockedCount = BigInt.fromI32(1);
    } else {
        stockedStat.stockedCount = stockedStat.stockedCount.plus(BigInt.fromI32(1))
    }
    stockedStat.save()
}

export function handleUnStocked(event: UnStocked): void {
    let stockedStat = StockedStat.load('0')
    if (stockedStat === null) {
        stockedStat = new StockedStat('0')
    }
    stockedStat.stockedCount = stockedStat.stockedCount.minus(BigInt.fromI32(1))
    stockedStat.save()
}