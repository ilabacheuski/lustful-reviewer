import {Provider} from '../typings/provider';

export class RootProvider implements Provider {

  private readonly _label: string;
  public readonly label: string = this._label
  private readonly _contextValue: string;
  public readonly contextValue: string = this.contextValue;

  constructor(label: string, name: string) {
    this._label = label;
    this._contextValue = name;
  }
}
