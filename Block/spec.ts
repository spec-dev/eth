import { LiveObject, Spec, Property, BlockHash, BlockNumber, Timestamp } from 'https://esm.sh/@spec.dev/core@0.0.8'

/**
 * An Ethereum Block.
 */
@Spec({ table: 'ethereum.blocks' })
class Block extends LiveObject {
    // Block hash.
    @Property({ unique: true })
    hash: BlockHash

    // Block number.
    @Property({ unique: true })
    number: BlockNumber

    // Timestamp of when this block was collated.
    @Property({ unique: true, primaryTimestamp: true })
    timestamp: Timestamp

    // Block's parent's hash.
    @Property()
    parentHash: BlockHash

    // Hash of the generated proof-of-work.
    @Property()
    nonce: string

    // Sha3 of the uncles data in the block.
    @Property()
    sha3Uncles: string

    // Bloom filter for the logs of the block.
    @Property()
    logsBloom: string

    // Root of the transaction trie of the block.
    @Property()
    transactionsRoot: string

    // Root of the final state trie of the block.
    @Property()
    stateRoot: string

    // Root of the receipts trie of the block.
    @Property()
    receiptsRoot: string

    // Address of the beneficiary to whom the mining rewards were given.
    @Property()
    miner: string

    // Difficulty for this block.
    @Property()
    difficulty: string

    // Total difficulty of the chain until this block.
    @Property()
    totalDifficulty: string

    // Size of this block in bytes.
    @Property()
    size: number

    // Optional, arbitrary extra data included in the block.
    @Property()
    extraData: string

    // Maximum gas allowed in this block.
    @Property()
    gasLimit: string

    // Total used gas by all transactions in this block.
    @Property()
    gasUsed: string

    // The market price for gas.
    @Property()
    baseFeePerGas: string

    // Number of transactions included in this block.
    @Property()
    transactionCount: number
}

export default Block