"use server"

import prisma from "@/lib/prisma";
import { WorkflowExecutionPlan } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";

export async function RunWorkflow(form: {
    workflowId: string;
    flowDefinition?: string;
}){
    const {userId} = auth();
    if(!userId){
        throw new Error("unauthenticated")
    }

    const {workflowId, flowDefinition} = form;
    if(!workflowId){
        throw new Error("workflowId is required");
    }

    const workflow = await prisma.workflow.findUnique({
        where:{
            userId,
            id: workflowId,
        },
    });

    let executionPlan : WorkflowExecutionPlan;

    if(!flowDefinition){
        throw new Error("flow definition is not defined");
    }
}