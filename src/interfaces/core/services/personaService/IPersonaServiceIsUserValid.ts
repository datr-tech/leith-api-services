import { IPersonaServiceGetUserInput } from './IPersonaServiceGetUserInput';
import { IPersonaServiceGetUserOutput } from './IPersonaServiceGetUserOutput';

export interface IPersonaServiceGetUser {
  (args: IPersonaServiceGetUserInput): Promise<IPersonaServiceGetUserOutput>;
}
