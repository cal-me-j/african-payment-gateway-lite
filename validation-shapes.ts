// validation-shapes.ts
import { z } from 'zod';

export const PaystackWebhookSchema = z.object({
  event: z.string(),
  data: z.object({
    id: z.number(),
    domain: z.string(),
    status: z.enum(['success', 'failed', 'abandoned']),
    reference: z.string(),
    amount: z.number(),
    message: z.string().nullable().optional(),
    gateway_response: z.string(),
    channel: z.string(),
    currency: z.string().default('KES'),
    metadata: z.object({
      tenantId: z.string(),
      userId: z.string().optional(),
    }).passthrough(),
    customer: z.object({
      email: z.string(),
    }),
  }),
});

export type PaystackWebhookPayload = z.infer<typeof PaystackWebhookSchema>;
