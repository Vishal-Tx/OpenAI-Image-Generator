import { Configuration, OpenAIApi } from "openai";

// const response = await openai.listEngines();

export const generateImage = async (req, res) => {
  const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION_KEY,

    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  console.log(req.body);
  const { desc, selected: size } = req.body;
  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  const response = await openai.createImage({
    prompt: desc,
    n: 1,
    size: imageSize,
  });
  const image_url = response.data.data[0].url;
  console.log(image_url);
};
