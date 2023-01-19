// import { after } from "mocha";

const assert = require("assert");
const vscode = require("vscode");
const dalle = require("../../dalle");
const path = "../../.env"

require("dotenv").config({ path });

suite("DALLE API Test Suite", () => {
    vscode.window.showInformationMessage("Start all tests.");

    test("Image Generation Success Test", async() => {
        const apiKey = process.env.API_KEY;
        const prompt = "tiger with neon stripes digital art";
        const numImages = 1;

        let response;

        try {
            response = await dalle.generate(apiKey, prompt, numImages);
        } catch (err) {
            response = err;
        }

        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.data.length, 1);
        assert.ok(response.data);
    }).timeout(30000);

    test("Image Generation Failure Test for Invalid API Key", async() => {
        const apiKey = "";
        const prompt = "tiger with neon stripes digital art";
        const numImages = 1;

        let response;

        try {
            response = await dalle.generate(apiKey, prompt, numImages);
        } catch (err) {
            response = err;
        }

        assert.strictEqual(response.message, "Request failed with status code 401");
    }).timeout(30000);
});