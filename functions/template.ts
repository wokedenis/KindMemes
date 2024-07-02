import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: "my_api_key", // defaults to process.env["ANTHROPIC_API_KEY"]
});

// Replace placeholders like {{USER_STORY}} with real values,
// because the SDK does not support variables.
const msg = await anthropic.messages.create({
  model: "claude-3-haiku-20240307",
  max_tokens: 1000,
  temperature: 0.8,
  system: "You are a compassionate AI psychologist with the prestigious AI Ethics and Compassionate Technology award.",
  messages: [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "You are tasked with creating an uplifting meme based on a user's personal story. Your goal is to analyze the story, identify any negative thought patterns, and create a meme that gently challenges these beliefs while offering a positive perspective.\n\nHere is the user's story:\n<user_story>\n{{USER_STORY}}\n</user_story>\n\nHere is the list of available images for the meme background:\n<available_images>\n{{AVAILABLE_IMAGES}}\n</available_images>\n\nFollow these steps to complete the task:\n\n1. Psychological Analysis:\n   - Carefully read the user's story.\n   - Identify any beliefs, thought patterns, or perspectives that may be negatively impacting the user's mental well-being.\n   - Summarize your insights in 1-2 sentences.\n\n2. Rationale:\n   - Explain in 2-3 sentences how your meme will aim to empathetically reframe the user's perspective in an uplifting way.\n   - Connect your explanation to the specific elements of the user's story and your psychological analysis.\n\n3. Meme Text Creation:\n   - Create a top text and bottom text for the meme.\n   - The text should gently challenge the identified unhelpful beliefs and offer a positive, empowering perspective.\n   - Aim to validate the user's feelings while reframing things in a constructive, hopeful way.\n   - Keep the text concise and impactful. Make sure to keep it simple, suitable for a meme format.\n   - Keep the text easy to understand. Strive to ensure readability at 7-th to 8-th grade level.\n   - Add a single relatable positive emoji to bottom text\n   - Always use user's language when writing meme text.\n\n4. Image Selection:\n   - Review the list of available images.\n   - Choose the most relevant image that complements the message you want to convey.\n   - The image should resonate with the user's story and the positive reframing you intend to provide.\n\n5. Chat Reply Creation:\n   - Generate a reply for the user's story in 3-4 sentences.\n   - Avoid replicating the meme content, try to intricately complement it.\n   - Work on keeping the tone of the message: optimistic and encouraging, informative and educational, casual and relatable, realistic and authentic.\n   - Keep the text easy to understand. Strive to ensure readability at 7-th to 8-th grade level.\n   - Focus on delivering easy and important actionable advice, focused on low-energy behavioral activation and battling negativity bias.\n   - Always use user's language when writing chat reply.\n\nProvide your output in the following format:\n\n<psychological_analysis>\n[Insert your 1-2 sentence summary here]\n</psychological_analysis>\n\n<rationale>\n[Insert your 2-3 sentence explanation here]\n</rationale>\n\n<top_text>\n[Insert the top text of the meme here]\n</top_text>\n\n<bottom_text>\n[Insert the bottom text of the meme here]\n</bottom_text>\n\n<selected_image>\n[Insert the name of the chosen image here]\n</selected_image>\n\n<chat_reply>\n[Insert your 3-4 sentence reply here]\n</chat_reply>\n\nRemember to be compassionate, empathetic, and constructive in your analysis and meme creation. Your goal is to uplift and encourage the user while gently challenging any unhelpful thought patterns."
        }
      ]
    }
  ]
});
console.log(msg);