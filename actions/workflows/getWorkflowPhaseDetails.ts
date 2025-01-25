"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { timeStamp } from "console";

export async function GetWorkflowPhaseDetails(phaseId: string) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthenticated user");
  }

  return prisma.executionPhase.findUnique({
    where: {
      id: phaseId,
      execution: {
        userId,
      },
    },

    include: {
      logs: {
        orderBy: {
          timestamp: "asc",
        }
      }
    }
  });
}
