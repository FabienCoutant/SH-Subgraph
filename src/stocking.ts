import {BigInt, log} from "@graphprotocol/graph-ts"
import {
    Stocked,
    UnStocked
} from "../generated/SneakerHeads/SneakerHeads"
import {
    StockingStats,
} from "../generated/schema"

export function handleStocked(event: Stocked): void {
    let stockingStats = StockingStats.load('0')
    if (stockingStats === null) {
        stockingStats = new StockingStats('0')
        stockingStats.stockingCount = BigInt.fromI32(1);
    } else {
        stockingStats.stockingCount = stockingStats.stockingCount.plus(BigInt.fromI32(1))
    }
    stockingStats.save()
}

export function handleUnStocked(event: UnStocked): void {
    let stockingStats = StockingStats.load('0')
    if (stockingStats === null) {
        stockingStats = new StockingStats('0')
    }
    stockingStats.stockingCount = stockingStats.stockingCount.minus(BigInt.fromI32(1))
    stockingStats.save()
}