const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const completionFunction = async () => {

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "define a function in three lines of code"}],
});
console.log(completion.data.choices[0].message);
}
completionFunction();



