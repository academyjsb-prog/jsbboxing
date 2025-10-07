
'use server';

/**
 * @fileOverview Provides a personalized donation prompt based on user engagement.
 *
 * - personalizedDonationPrompt - A function that returns a donation prompt customized to the user's site activity.
 * - PersonalizedDonationPromptInput - The input type for the personalizedDonationPrompt function.
 * - PersonalizedDonationPromptOutput - The return type for the personalizedDonationPrompt function.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'genkit';

const PersonalizedDonationPromptInputSchema = z.object({
  timeSpent: z
    .number()
    .describe('The time spent on the site in seconds.'),
  pagesViewed: z
    .number()
    .describe('The number of pages viewed on the site.'),
});
export type PersonalizedDonationPromptInput = z.infer<typeof PersonalizedDonationPromptInputSchema>;

const PersonalizedDonationPromptOutputSchema = z.object({
  donationAmount: z
    .number()
    .describe('The suggested donation amount in INR.'),
  reason: z
    .string()
    .describe('The reason for the suggested donation amount.'),
});
export type PersonalizedDonationPromptOutput = z.infer<typeof PersonalizedDonationPromptOutputSchema>;

export async function personalizedDonationPrompt(input: PersonalizedDonationPromptInput): Promise<PersonalizedDonationPromptOutput> {
  return personalizedDonationPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedDonationPromptPrompt',
  input: {schema: PersonalizedDonationPromptInputSchema},
  output: {schema: PersonalizedDonationPromptOutputSchema},
  model: googleAI.model('gemini-1.0-pro'),
  prompt: `You are a donation prompt generator for JSB Boxing Academy.

  Based on the user's engagement with the site, suggest a donation amount in INR and a reason for the suggestion.

  Here is the user's engagement data:
  Time spent: {{{timeSpent}}} seconds
  Pages viewed: {{{pagesViewed}}}

  Respond with a suggested donation amount and a compelling reason, in JSON format.

  Ensure the donation amount is reasonable and reflects the user's level of interest. Give slightly higher donation amounts to users who have spent longer on the site and viewed more pages.

  Here is the output schema:
  {
    "donationAmount": "number",
    "reason": "string"
  }`,
});

const personalizedDonationPromptFlow = ai.defineFlow(
  {
    name: 'personalizedDonationPromptFlow',
    inputSchema: PersonalizedDonationPromptInputSchema,
    outputSchema: PersonalizedDonationPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
