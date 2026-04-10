const { rateJoke } = require("./rateJoke");
const core = require("@actions/core");

async function run() {
  try {
    const joke = core.getInput("joke", { required: true });
    const token = core.getInput("token", { required: true });

    const rating = await rateJoke(joke, token);

    core.setOutput("result", JSON.stringify(rating));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    core.setFailed(message);
  }
}

module.exports = { run };
