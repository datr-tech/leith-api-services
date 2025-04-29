import { IFetchGetFieldByIdInput } from './IFetchGetFieldByIdInput';
import { IFetchGetFieldByIdOutput } from './IFetchGetFieldByIdOutput';

export interface IFetchGetFieldById {
  (args: IFetchGetFieldByIdInput): Promise<IFetchGetFieldByIdOutput>;
}
