import { ExecutionEnvironment } from "@/types/executor";
import { ExtractDataWithAITask } from "../task/ExtractDataWithAI";
import prisma from "@/lib/prisma";
import { symmetricDecrypt } from "@/lib/encryption";

export async function ExtractDataWithAiExecutor(
  environment: ExecutionEnvironment<typeof ExtractDataWithAITask>
): Promise<boolean> {
  try {
    const credentials = environment.getInput("Credentials");
    if (!credentials) {
      environment.log.error("input->credentials not defined");
    }

    const prompt = environment.getInput("Prompt");
    if (!prompt) {
      environment.log.error("input->prompt not defined");
    }

    const content = environment.getInput("Content");
    if (!content) {
      environment.log.error("input->content not defined");
    }

    // get credentials form DB
    const credential = await prisma.credential.findUnique({
      where: {
        id: credentials,
      },
    });
    if(!credential){
      environment.log.error("credential not found");
      return false;
    }

    const plainCredentialValue = symmetricDecrypt(credential.value);
    if(!plainCredentialValue){
      environment.log.error("Cannot decrypt credentials");
      return false;
    }

    const mockExtractedData =  {
      usernameSelector:"#username",
      passwordSelector:"#password",
      loginSelector:"body > div > form > input.btn.btn-primary",
    }
    
    environment.setOutput("Extracted data", JSON.stringify(mockExtractedData))

    // console.log("@PLAIN CRED", plainCredentialValue);

    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
