import {
    Certificate,
    CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { PublicIPSupport } from "@raykrueger/cdk-fargate-public-dns";
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
            natGateways: 0,
        });

        const cluster = new ecs.Cluster(this, "cluster", {
            vpc,
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

        const task = new ecs.FargateTaskDefinition(this, "task");

        const service = new ecs.FargateService(this, "Service", {
            cluster,
            assignPublicIp: true,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PUBLIC,
            },
            taskDefinition: task,
            capacityProviderStrategies: [
                {
                    capacityProvider: "FARGATE_SPOT",
                    weight: 1,
                },
            ],
        });

        const container = task.addContainer("Container", {
            image: ecs.ContainerImage.fromEcrRepository(repository, imageTag),
            portMappings: [
                {
                    containerPort: 3000,
                },
            ],
        });

        task.addContainer("caddy", {
            image: ecs.ContainerImage.fromRegistry("caddy:2-alpine"),
            command: [
                "caddy",
                "reverse-proxy",
                "--from",
                domainName,
                "--to",
                "127.0.0.1:3000",
            ],
            portMappings: [
                {
                    containerPort: 80,
                },
                {
                    containerPort: 443,
                },
            ],
        }).addContainerDependencies({
            container,
            condition: ecs.ContainerDependencyCondition.START,
        });

        service.connections.allowFromAnyIpv4(ec2.Port.tcp(80), "Http");
        service.connections.allowFromAnyIpv4(ec2.Port.tcp(443), "Https");

        new PublicIPSupport(this, "PublicIPSupport", {
            cluster,
            service,
            dnsConfig: {
                domainName,
                hostzedZone: hostZone.hostedZoneId,
            },
        });
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
