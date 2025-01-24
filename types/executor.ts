import { Browser } from "puppeteer";
import { WorkflowTask } from "./workflow";

export type Environment = {
    browser?: Browser;
    //phases with phase nodeid/taskId as key
   phases: Record<
    string, 
    {
    inputs: Record<string, any>;
    outputs: Record<string, any>;
   }
   >;
}


export type ExecutionEnvironment<T extends WorkflowTask> = {
    getInput(name: T["inputs"][number]["name"]): string;
}