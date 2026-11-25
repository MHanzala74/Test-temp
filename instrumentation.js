import { registerOTel } from "@vercel/otel";

export function register() {
  console.log("[OTEL] Instrumentation registered");

  console.log("[OTEL CONFIG CHECK]", {
    endpointConfigured: Boolean(
      process.env.OTEL_EXPORTER_OTLP_ENDPOINT
    ),
    protocol: process.env.OTEL_EXPORTER_OTLP_PROTOCOL || "NOT SET",
    headersConfigured: Boolean(
      process.env.OTEL_EXPORTER_OTLP_HEADERS
    ),
    serviceName: process.env.OTEL_SERVICE_NAME || "NOT SET",
  });

  registerOTel({
    serviceName: "Test-temp",
  });
}
