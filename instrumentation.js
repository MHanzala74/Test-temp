
import {
  diag,
  DiagConsoleLogger,
  DiagLogLevel,
} from "@opentelemetry/api";

import { registerOTel } from "@vercel/otel";

function inspectEndpoint(value) {
  if (!value) return "NOT SET";

  try {
    const url = new URL(value);

    return {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || "(default)",
      pathname: url.pathname,
    };
  } catch {
    return "INVALID URL";
  }
}

export function register() {
  diag.setLogger(
    new DiagConsoleLogger(),
    DiagLogLevel.DEBUG
  );

  console.log("[OTEL] Runtime endpoint diagnostics", {
    endpoint: inspectEndpoint(
      process.env.OTEL_EXPORTER_OTLP_ENDPOINT
    ),
    tracesEndpoint: inspectEndpoint(
      process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT
    ),
    protocol: process.env.OTEL_EXPORTER_OTLP_PROTOCOL,
    serviceName: process.env.OTEL_SERVICE_NAME,
  });

  registerOTel({
    serviceName: "Test-temp",
  });

  console.log("[OTEL] Registration completed");
}
