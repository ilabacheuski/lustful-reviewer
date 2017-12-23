import {Event, EventEmitter, TreeDataProvider, TreeItem, TreeItemCollapsibleState, Uri} from 'vscode';
import {IProvider} from '../typings/provider'

interface IProviderNode {
	name: string;
	pr: string[];
}

class ProviderNode extends TreeItem {
  private _resourse: Uri;
  public readonly contextValue: string;

	constructor(
    label: string,
    collapsibleState: TreeItemCollapsibleState = TreeItemCollapsibleState.Collapsed,
    contextValue?: string
	) {
    super(label, collapsibleState);
    this.contextValue = contextValue;
	}
}

export class ReviewerExplorer implements TreeDataProvider<TreeItem>{

  private _providers: IProvider[];
  private _roots: TreeItem[];

  private _onDidChangeTreeData: EventEmitter<any> = new EventEmitter<any>();
	readonly onDidChangeTreeData: Event<any> = this._onDidChangeTreeData.event;


  constructor(providers: IProvider[]) {
    this._providers = providers;
    this._roots = providers.map(provider => new ProviderNode(
      provider.label,
      TreeItemCollapsibleState.Collapsed,
      provider.contextValue))
  }

  public getTreeItem(element: TreeItem): TreeItem {
    return element;
  }

  public getChildren(element?: TreeItem): TreeItem[] | Thenable<TreeItem[]> {
		if (!element) {
      // return [{
      //   label: 'No item 1',
      //   collapsibleState: TreeItemCollapsibleState.None
      // }]
			return this._roots;
    }

    return [{
      label: 'No item',
      collapsibleState: TreeItemCollapsibleState.None
    }]
	}
}
