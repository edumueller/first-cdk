#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { FirstCdkStack } from "../lib/first-cdk-stack";

const app = new cdk.App();
new FirstCdkStack(app, "FirstCdkStack", {});
