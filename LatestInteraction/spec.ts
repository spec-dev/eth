import { LiveObject, Spec, Property, BlockHash, Address, BlockNumber, Timestamp } from 'https://esm.sh/@spec.dev/core@0.0.8'

/**
 * Represents the latest interaction between two addresses.
 */
@Spec({ 
    table: 'ethereum.latest_interactions',
    uniqueBy: ['from', 'to'],
})
class LatestInteraction extends LiveObject {
    // Address this transaction or trace was sent from.
    @Property()
    from: Address

    // Address this transaction or trace was sent to.
    @Property()
    to: Address

    // Specifies whether the sender or recipient is a wallet or a contract.
    @Property()
    interactionType: LatestInteractionType

    // The transaction or trace hash.
    @Property()
    hash: string

    // The number of the block this interaction occurred in.
    @Property()
    blockNumber: BlockNumber

    // The hash of the block this interaction occurred in.
    @Property()
    blockHash: BlockHash

    // Timestamp of when this interaction occurred (i.e. block timestamp).
    @Property({ primaryTimestamp: true })
    timestamp: Timestamp
}

export enum LatestInteractionType {
    WalletToContract = 'wallet:contract',
    WalletToWallet = 'wallet:wallet',
    ContractToWallet = 'contract:wallet',
    ContractToContract = 'contract:contract',
}

export default LatestInteraction