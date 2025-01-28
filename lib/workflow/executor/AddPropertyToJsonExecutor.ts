
import { ExecutionEnvironment } from "@/types/executor";
import { AddPropertyToJsonTask } from "../task/AddPropertyToJson";

export async function AddPropertyToJsonExecutor(environment: ExecutionEnvironment<typeof AddPropertyToJsonTask>): Promise<boolean> {
  try {
    const jsonData = environment.getInput("JSON");
    if(!jsonData){
      environment.log.error("input->JSON not defined")
    }

    const propertyName = environment.getInput("Property name");
    if(!jsonData){
      environment.log.error("input->propertyName not defined")
    }

    const propertyValue = environment.getInput("Property value");
    if(!propertyValue){
      environment.log.error("input->propertyValue not defined")
    }

    const json = JSON.parse(jsonData);
    json[propertyName] = propertyValue;

    environment.setOutput("Updated Json", JSON.stringify(json));
  
    return true;
  } catch (error:any) {
    environment.log.error(error.message);
    return false;
  }
}
