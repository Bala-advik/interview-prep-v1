import { GoogleGenAI, Type } from "@google/genai";
import { QuizData } from "../types";

const ai = new GoogleGenAI({ apiKey: "" });

export const generateQuiz = async (
  topic: string,
  difficulty: string = "Intermediate"
): Promise<QuizData> => {
  const prompt = `
    Create a professional interview preparation quiz about: "${topic}".
    Difficulty Level: ${difficulty}.
    
    Structure the quiz into logical sections (e.g., "Basics", "Advanced Concepts", "Scenario Based").
    Include 3-5 questions per section.
    Ensure questions are suitable for a software engineering interview.
    Provide a clear explanation for the correct answer.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Title of the quiz" },
            description: {
              type: Type.STRING,
              description: "Short description of the quiz context",
            },
            sections: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: {
                    type: Type.STRING,
                    description: "Unique ID for the section",
                  },
                  title: { type: Type.STRING, description: "Section title" },
                  questions: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: {
                          type: Type.STRING,
                          description: "Unique ID for the question",
                        },
                        text: {
                          type: Type.STRING,
                          description: "The question text",
                        },
                        options: {
                          type: Type.ARRAY,
                          items: { type: Type.STRING },
                          description: "List of 4 multiple choice options",
                        },
                        correctOptionIndex: {
                          type: Type.INTEGER,
                          description: "0-based index of the correct option",
                        },
                        explanation: {
                          type: Type.STRING,
                          description:
                            "Explanation of why the answer is correct",
                        },
                      },
                      required: [
                        "id",
                        "text",
                        "options",
                        "correctOptionIndex",
                        "explanation",
                      ],
                    },
                  },
                },
                required: ["id", "title", "questions"],
              },
            },
          },
          required: ["title", "description", "sections"],
        },
      },
    });

    if (!response.text) {
      throw new Error("No response text received from Gemini.");
    }

    const quizData = JSON.parse(response.text) as QuizData;
    return quizData;
  } catch (error) {
    console.error("Failed to generate quiz:", error);
    throw new Error("Failed to generate quiz. Please try again.");
  }
};
