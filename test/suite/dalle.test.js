// import { after } from "mocha";

const assert = require("assert");
const vscode = require("vscode");
const dalle = require("../../dalle");

require("dotenv").config();

suite("DALLE API Test Suite", () => {
	vscode.window.showInformationMessage("Start all tests.");

	test("Image Generation Test", () => {
		const apiKey = process.env.API_KEY;
		const linkRes = dalle.generate(
			apiKey,
			"tiger with neon stripes digital art",
			1
		);
		console.log(linkRes);
		// vscode.window.showInformationMessage(linkRes);

		let logger = vscode.window.createOutputChannel("logger");
		logger.show();
		logger.appendLine(linkRes);
	});
});
