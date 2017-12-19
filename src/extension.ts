'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {ReviewerExplorer} from './explorer/explorer';
import {Provider} from './typings/provider.d'
import {BitbucketProvider} from './providers/bitbucket/bitbucket';

console.log('ODIN?');

const getProviders = (): Provider[] => {
    const providers = [];
    const bitbucketProvider = new BitbucketProvider();
    return providers;
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "lustful-reviewer" is now active!');

    const providers = getProviders();
    const reviewerExplorer = new ReviewerExplorer([]);
    vscode.window.registerTreeDataProvider('reviewerExplorer', reviewerExplorer);

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });

    ctx.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
