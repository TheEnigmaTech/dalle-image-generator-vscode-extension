const { Configuration, OpenAIApi } = require("openai");

const generate = (apiKey, prompt, numImages) => {
	let configuration = new Configuration({
		apiKey: apiKey,
	});
	let openai = new OpenAIApi(configuration);

	const response = openai.createImage({
		prompt: prompt,
		n: numImages,
		size: "512x512",
	});

	return response;
};

module.exports = { generate };
