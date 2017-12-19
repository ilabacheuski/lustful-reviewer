import * as vscode from 'vscode';
// import { NodeBase } from './models/nodeBase';
// import { RootNode } from './models/rootNode';
// import { Provider } from '../typings/provider';

export class ReviewerExplorer implements vscode.TreeDataProvider<Provider>{

  private _providersNodes: Provider[];

  private _onDidChangeTreeData: vscode.EventEmitter<Provider | undefined> = new vscode.EventEmitter<Provider | undefined>();
	readonly onDidChangeTreeData: vscode.Event<Provider | undefined> = this._onDidChangeTreeData.event;


  constructor(providers: Provider[] = []) {
    // this._providersNodes = providers.map(provider => new RootNode(provider.label, provider.contextValue, this._onDidChangeTreeData));
    this._providersNodes = providers;
  }

  refresh(): void {
		this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: Provider): vscode.TreeItem {
		return element;
	}

  getChildren(element?: Provider): Thenable<Provider[]> {
    return new Promise(resolve => {
      // if (!element) {
      //   resolve(this.getRootNodes());
      //   return;
      // }
        resolve([]);
    })
  }

  // private getRootNodes(): Provider[] {
  //   return this._providersNodes;
  // }

}


class Provider extends vscode.TreeItem {

	constructor(
		public readonly label: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
	}

	// iconPath = {
	// 	light: path.join(__filename, '..', '..', '..', 'resources', 'light', 'dependency.svg'),
	// 	dark: path.join(__filename, '..', '..', '..', 'resources', 'dark', 'dependency.svg')
	// };

	contextValue = 'provider';

}
