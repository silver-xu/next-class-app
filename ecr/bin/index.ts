import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import * as ecr from "aws-cdk-lib/aws-ecr";

export class NextClassEcrCdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        new ecr.Repository(this, "next-class-app", {
            repositoryName: "next-class-app",
        });
    }
}

const app = new cdk.App();
new NextClassEcrCdkStack(app, "next-class-ecr");
app.synth();
