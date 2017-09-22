
import { W3, SoltsiceContract } from '..';

/**
 * Claimable API
 */
export class Claimable extends SoltsiceContract {
    constructor(
        web3: W3,
        constructorParams: W3.TC.ContractDataType[],
        deploymentParams?: string | W3.TC.TxParams
    ) {
        super(web3, '../../build/contracts/Claimable.json', constructorParams, deploymentParams)
    }

    /*
        Contract methods
    */
    
    // tslint:disable-next-line:variable-name
    claimOwnership(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.instance.then((inst) => {
                inst.claimOwnership()
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:variable-name
    owner(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.instance.then((inst) => {
                inst.owner
                    .call()
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:variable-name
    pendingOwner(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.instance.then((inst) => {
                inst.pendingOwner
                    .call()
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:variable-name
    transferOwnership(newOwner: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.instance.then((inst) => {
                inst.transferOwnership(newOwner)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
}
