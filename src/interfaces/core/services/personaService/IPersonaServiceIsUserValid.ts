import { IPersonaServiceIsUserValidInput } from './IPersonaServiceIsUserValidInput';
import { IPersonaServiceIsUserValidOutputPromise } from './IPersonaServiceIsUserValidOutputPromise';

export interface IPersonaServiceIsUserValid {
  (args: IPersonaServiceIsUserValidInput): IPersonaServiceIsUserValidOutputPromise;
}
