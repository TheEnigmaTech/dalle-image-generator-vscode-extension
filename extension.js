const vscode = require("vscode");
const dalle = require("./dalle");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log(
        'Congratulations, your extension "dalle-image-generator" is now active!'
    );

    let disposable = vscode.commands.registerCommand(
        "dalle-image-generator.generateImage",
        async function() {
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Performing Request",
                cancellable: true
            }, async(progress, token) => {
                token.onCancellationRequested(() => {
                    console.log("User canceled the request.");
                });

                let apiKey = "";
                let apiKeyFromStorage = context.workspaceState.get('apiKey');
                if (apiKeyFromStorage && apiKeyFromStorage !== "") {
                    apiKey = apiKeyFromStorage;
                } else {
                    await vscode.window.showInputBox({
                        prompt: "Please enter your OpenAI API key",
                        password: false
                    }).then(key => {
                        apiKey = key;
                        context.workspaceState.update('apiKey', key);
                    });
                }

                let editor = vscode.window.activeTextEditor;
                let selectedText = editor.document.getText(editor.selection);

                try {
                    let response = await dalle.generate(apiKey, selectedText, 1);
                } catch (e) {
                    console.log(e);
                }

            });
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};