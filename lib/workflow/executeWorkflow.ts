import "server-only";
import prisma from "../prisma";
import { revalidatePath } from "next/cache";


export async function ExecuteWorkflow(executionId: string) {

    const execution = await prisma.workflowExecution.findUnique({
        where: {
            id: executionId
        },
        include:{
            workflow: true,
            phases: true,
        },
    });


    if(!execution){
        throw new Error("execution not found");
    }
    //todo setup execution environment

    //todo: initialize worflow execution
    //todo: initialize phases status


    let executionFalied = false;
    for(const phase of execution.phases){
        if(phase.status !== "PENDING"){
            continue;
        }
    }
    //todo: finalize execution
    //todo: cleanup environment

    revalidatePath("/workflows/runs");


}