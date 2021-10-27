import * as cdk from "@aws-cdk/core";
import { Bucket } from "@aws-cdk/aws-s3";
import { CfnOutput, Duration } from "@aws-cdk/core";
export class FirstCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new Bucket(this, "someBucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(5),
        },
      ],
    });

    new CfnOutput(this, "mybucket", {
      value: myBucket.bucketName,
    });
  }
}
