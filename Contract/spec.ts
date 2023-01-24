import { LiveObject, Spec, Property, BlockHash, Address, BlockNumber, Timestamp } from 'https://esm.sh/@spec.dev/core@0.0.8'

/**
 * An Ethereum Contract.
 */
@Spec({ table: 'ethereum.contracts' })
class Contract extends LiveObject {
    // The contract address.
    @Property({ unique: true })
    address: Address

    // The bytecode of the contract.
    @Property()
    bytecode: string

    // Whether this contract implements the ERC-20 standard.
    @Property()
    isErc20: boolean

    // Whether this contract implements the ERC-721 standard.
    @Property()
    isErc721: boolean

    // Whether this contract implements the ERC-1155 standard.
    @Property()
    isErc1155: boolean

    // The hash of the block in which this contract was created.
    @Property()
    blockHash: BlockHash

    // The number of the block in which this contract was created.
    @Property()
    blockNumber: BlockNumber

    // Timestamp of the block in which this contract was created.
    @Property({ primaryTimestamp: true })
    blockTimestamp: Timestamp
}

export default Contract