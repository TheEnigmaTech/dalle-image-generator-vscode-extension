const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log(
		'Congratulations, your extension "dalle-image-generator" is now active!'
	);

	let disposable = vscode.commands.registerCommand(
		"dalle-image-generator.generateImage",
		function () {
			// vscode.window.showInformationMessage('Hello World from dalle-image-generator!');
		}
	);

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
