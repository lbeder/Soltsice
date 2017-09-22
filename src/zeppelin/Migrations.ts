
import { BigNumber } from 'bignumber.js';
import { W3, SoltsiceContract } from '..';

/**
 * Migrations API
 */
export class Migrations extends SoltsiceContract {
    constructor(
        web3: W3,
        constructorParams: W3.TC.ContractDataType[],
        deploymentParams?: string | W3.TC.TxParams
    ) {
        super(web3, '../../build/contracts/Migrations.json', constructorParams, deploymentParams)
    }

    /*
        Contract methods
    */
    
    // tslint:disable-next-line:variable-name
    upgrade(new_address: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.instance.then((inst) => {
                inst.upgrade(new_address)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:variable-name
    last_completed_migration(): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this.instance.then((inst) => {
                inst.last_completed_migration
                    .call()
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
    setCompleted(completed: BigNumber): Promise<void> {
        return new Promise((resolve, reject) => {
            this.instance.then((inst) => {
                inst.setCompleted(completed)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
}
