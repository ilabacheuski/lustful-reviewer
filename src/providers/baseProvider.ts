import {IProvider} from '../typings/provider';

export class BaseProvider implements IProvider {
  private readonly _contextValue: string = 'Bitbucket';
  public readonly contextValue: string = this._contextValue;
  private readonly _label: string = 'Bitbucket';
  public readonly label: string = this._label;

  constructor(label: string, contextValue: string) {
    this._contextValue = contextValue;
    this._label = label;
  }
}
