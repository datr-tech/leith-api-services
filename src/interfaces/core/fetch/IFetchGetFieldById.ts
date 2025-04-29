import { IFetchFieldByIdInput } from './IFetchFieldByIdInput';
import { IFetchFieldByIdOutput } from './IFetchFieldByIdOutput';

export interface IFetchFieldById {
  (args: IFetchFieldByIdInput): Promise<IFetchFieldByIdOutput>;
}
