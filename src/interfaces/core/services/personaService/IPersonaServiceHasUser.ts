import { IPersonaServiceHasUserInput } from './IPersonaServiceHasUserInput';
import { IPersonaServiceHasUserOutput } from './IPersonaServiceHasUserOutput';

export interface IPersonaServiceHasUser {
  (args: IPersonaServiceHasUserInput): Promise<IPersonaServiceHasUserOutput>;
}
