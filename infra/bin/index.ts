import {
    Certificate,
    CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecr from "aws-cdk-lib/aws-ecr";
import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";

const appName = "next-class-app";
const domainName = "dev.nextclass.au";
const account = "094194403041";
const region = "ap-southeast-2";
const ecrArn = `arn:aws:ecr:${region}:${account}:repository/${appName}`;

const imageTag = process.env.IMAGE_TAG;

export class NextClassAppCdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, "vpc", {
            maxAzs: 3, // Default is all AZs in region
        });

        const cluster = new ecs.Cluster(this, "cluster", {
            vpc: vpc,
        });

        const repository = ecr.Repository.fromRepositoryArn(
            this,
            appName,
            ecrArn
        );

        const hostZone = HostedZone.fromLookup(this, "hosted-zone", {
            domainName,
        });

        const certificate = new Certificate(this, "site-cert", {
            domainName,
            validation: CertificateValidation.fromDns(hostZone),
        });

        new ecs_patterns.ApplicationLoadBalancedFargateService(
            this,
            `${appName}-service`,
            {
                cluster,
                cpu: 256,
                desiredCount: 1,
                taskImageOptions: {
                    image: ecs.ContainerImage.fromEcrRepository(
                        repository,
                        imageTag
                    ),
                    containerPort: 3000,
                },
                memoryLimitMiB: 512,
                publicLoadBalancer: true,
                domainName,
                listenerPort: 443,
                certificate,
                domainZone: hostZone,
            }
        );
    }
}

const app = new cdk.App();
new NextClassAppCdkStack(app, "next-class-app", {
    env: {
        account,
        region,
    },
});
app.synth();
