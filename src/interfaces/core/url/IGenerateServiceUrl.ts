import { IGenerateServiceUrlInput } from './IGenerateServiceUrlInput';
import { IGenerateServiceUrlOutput } from './IGenerateServiceUrlOutput';

export interface IGenerateServiceUrl {
  (args: IGenerateServiceUrlInput): IGenerateServiceUrlOutput;
}
