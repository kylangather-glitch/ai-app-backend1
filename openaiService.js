const OpenAI = require("openai")

const openai = new OpenAI({
  apiKey: process.env.ePv52nJgxbhUL0hRgKAJhEpWdx59-jOKxpVCAua2e2xVzULFfZFyXFpRHhP2nqno_sCChy_eMCT3BlbkFJHERk23C0zzt8nHz2ci9c5caqjy1jC9yfV_SZ2-YJLvuK0Zf4m1MGNF5MykTgCs-aJbPN0ZGwwA
})

async function generatePost(topic) {

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "You are a social media expert." },
      { role: "user", content: `Create an Instagram caption with hashtags about ${topic}` }
    ]
  })

  return response.choices[0].message.content
}

async function generateReply(comment) {

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "You respond to customer comments professionally." },
      { role: "user", content: `Reply to this comment: ${comment}` }
    ]
  })

  return response.choices[0].message.content
}

async function generateVideoScript(topic) {

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "You create short viral video scripts." },
      { role: "user", content: `Create a 30 second reel script about ${topic}` }
    ]
  })

  return response.choices[0].message.content
}

module.exports = {
  generatePost,
  generateReply,
  generateVideoScript
}