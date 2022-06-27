// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class StockedStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StockedStat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StockedStat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StockedStat", id.toString(), this);
    }
  }

  static load(id: string): StockedStat | null {
    return changetype<StockedStat | null>(store.get("StockedStat", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get stockedCount(): BigInt {
    let value = this.get("stockedCount");
    return value!.toBigInt();
  }

  set stockedCount(value: BigInt) {
    this.set("stockedCount", Value.fromBigInt(value));
  }
}
