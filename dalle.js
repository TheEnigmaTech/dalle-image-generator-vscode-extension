const { Configuration, OpenAIApi } = require("openai");

const generate = async(apiKey, prompt, numImages) => {
    let configuration = new Configuration({
        apiKey: apiKey,
    });
    let openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
        prompt: prompt,
        n: numImages,
        size: "512x512",
    });

    return response;
};

module.exports = { generate };