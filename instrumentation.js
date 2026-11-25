
import {
  diag,
  DiagConsoleLogger,
  DiagLogLevel,
} from "@opentelemetry/api";

import { registerOTel } from "@vercel/otel";

export function register() {
  diag.setLogger(
    new DiagConsoleLogger(),
    DiagLogLevel.DEBUG
  );

  console.log("[OTEL] Debug diagnostics enabled");

  registerOTel({
    serviceName: "Test-temp",
  });

  console.log("[OTEL] Registration completed");
}

