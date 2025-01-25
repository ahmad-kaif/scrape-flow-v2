import { Browser, Page } from "puppeteer";
import { WorkflowTask } from "./workflow";

export type Environment = {
    browser?: Browser;
    page?: Page,
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
    setOutput(name:T["outputs"][number]["name"], value: string): void;

    getBrowser(): Browser | undefined;
    setBrowser(browser: Browser): void;

    getPage(): Page | undefined;
    setPage(page: Page): void
};