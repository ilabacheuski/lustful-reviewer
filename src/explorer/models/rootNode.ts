
import * as vscode from 'vscode';
import { NodeBase } from './nodeBase';

export class RootNode extends NodeBase {
  constructor(
    public readonly label: string,
    public readonly contextValue: string,
    public eventEmitter: vscode.EventEmitter<NodeBase>,
  ) {
    super(label, vscode.TreeItemCollapsibleState.Collapsed);
  }

  getTreeItem(): vscode.TreeItem {
    return {
        label: this.label,
        collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
        contextValue: this.contextValue
    }
  }

  async getChildren(element): Promise<NodeBase[]> {
    return null;
  }
}
