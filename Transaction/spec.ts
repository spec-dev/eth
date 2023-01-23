import { LiveObject, Spec, Property, BlockHash, Address, BlockNumber, Json, Timestamp, TransactionHash } from 'https://esm.sh/@spec.dev/core@0.0.8'

/**
 * An Ethereum Transaction.
 */
@Spec({ table: 'ethereum.transactions' })
class Transaction extends LiveObject {
    // Transaction hash.
    @Property({ unique: true })
    hash: TransactionHash

    // Number of transactions sent from address.
    @Property()
    nonce: number

    // The index of this transaction in this block.
    @Property()
    transactionIndex: number

    // Address this transaction was sent from.
    @Property()
    from: Address

    // Address this transaction was sent to.
    @Property()
    to: Address

    // The contract address created if the transaction was a contract creation.
    @Property()
    contractAddress: Address

    // Value transferred in Wei.
    @Property()
    value: string

    // Data sent along with the transaction.
    @Property()
    input: string

    // Name of the contract function executed.
    @Property()
    functionName: string

    // Arguments provided to the contract function.
    @Property()
    functionArgs: Json

    // EIP transaction type.
    @Property()
    transactionType: number

    // 1 (success) or 0 (failure).
    @Property()
    status: EthTransactionStatus

    // 32 bytes of post-transaction stateroot (pre Byzantium).
    @Property()
    root: string

    // Gas provided by the sender.
    @Property()
    gas: string

    // Gas price provided by the sender in Wei.
    @Property()
    gasPrice: string

    // Total fee that covers both base and priority fees.
    @Property()
    maxFeePerGas: string

    // Fee given to miners to incentivize them to include the transaction.
    @Property()
    maxPriorityFeePerGas: string

    // Amount of gas used by this specific transaction alone.
    @Property()
    gasUsed: string

    // Total amount of gas used when this transaction was executed in the block.
    @Property()
    cumulativeGasUsed: string

    // The actual value per gas deducted from the senders account.
    @Property()
    effectiveGasPrice: string

    // The hash of the block this transaction was included in.
    @Property()
    blockHash: BlockHash

    // The number of the block this transaction was included in.
    @Property()
    blockNumber: BlockNumber

    // Timestamp of when this transaction's block was collated.
    @Property({ primaryTimestamp: true })
    blockTimestamp: Timestamp    
}

export enum EthTransactionStatus {
    Failure = 0,
    Success = 1,
}

export default Transaction