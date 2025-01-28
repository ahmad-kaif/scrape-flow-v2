import { Value } from "@radix-ui/react-select";
import {z} from "zod";

export const createCredentialSchema = z.object({
    name: z.string().max(30),
    value: z.string().max(500),
});


export type createCredentialSchemaType = z.infer<typeof createCredentialSchema>;


// export const duplicateWorkflowSchema = createWorkflowSchema.extend({
//     workflowId: z.string(),
// });

// export type duplicateWorkflowSchemaType = z.infer<typeof duplicateWorkflowSchema>;