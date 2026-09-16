# African Payment Gateways Engine (Lite Starter)

A lightweight, production-tested TypeScript boilerplate for handling Paystack, Flutterwave, and Kenyan M-Pesa STK Push integrations with zero server-hosting overhead.

## 🚀 What's Inside This Lite Demo
* **Smart Phone Normalizer:** Safely parses raw local strings (`07...`, `254...`) into standard `+254XXXXXXXXX` requirements.
* **Strict Zod Schemas:** Runtime webhook validation (`validation-shapes.ts`) to intercept malformed payload data before database writes.

\`\`\`typescript
// Example Zod Validation Shape
import { z } from 'zod';

export const PaystackWebhooksSchema = z.object({
  event: z.string(),
  data: z.object({
    status: z.enum(['success', 'failed', 'abandoned']),
    amount: z.number(),
    currency: z.string().default('KES'),
  }),
});
\`\`\`

## 📦 Unlock the Full Production Engine & Microservice Bundle
This public repository is a stripped-down demo. If you are building a production SaaS or multi-tenant portal, get the complete library featuring secure raw-buffer webhook signature verification, Express sandbox routes, multi-tenant Prisma schemas, self-healing reconciliation cron jobs, and a React PWA frontend template.

👉 **[Get the Full Engine & Bundle on Lemon Squeezy ($19 - $99)](https://jvoex.lemonsqueezy.com)**

## License
Single-Seat Proprietary Commercial License. (Permitted for commercial apps; resale or public repository hosting strictly prohibited).

