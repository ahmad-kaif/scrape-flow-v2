
import { ExecutionEnvironment } from "@/types/executor";
import { ClickElementTask } from "../task/ClickElement";
import { NavigateUrlTask } from "../task/NavigateUrlTask";

export async function NavigateUrlExecutor(environment: ExecutionEnvironment<typeof NavigateUrlTask>): Promise<boolean> {
  try {
    const url = environment.getInput("URL");
    if(!url){
      environment.log.error("input->url not defined")
    }

    await environment.getPage()!.goto(url);
    environment.log.info(`visited ${url}`);
    return true;
  } catch (error:any) {
    environment.log.error(error.message);
    return false;
  }
}
