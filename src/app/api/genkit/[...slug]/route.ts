/**
 * @fileoverview A Genkit API route for Next.js.
 *
 * This file creates a Next.js API route that exposes all defined Genkit flows.
 * It uses the `createApiHandler` from `@genkit-ai/next` to automatically generate
 * the necessary endpoints for your flows.
 */

import {createApiHandler} from '@genkit-ai/next';
import '@/ai/flows/personalized-donation-prompt';

export const {GET, POST, PUT, DELETE} = createApiHandler();
