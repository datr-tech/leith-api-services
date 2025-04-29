import { IPersonaUserHasUserInput } from './IPersonaUserHasUserInput';
import { IPersonaUserHasUserOutput } from './IPersonaUserHasUserOutput';

export interface IPersonaUserHasUser {
  (args: IPersonaUserHasUserInput): Promise<IPersonaUserHasUserOutput>;
}
