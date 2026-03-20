import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'xcwdwmij', // Twoje ID
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-03-20',
});
