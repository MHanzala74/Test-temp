import { registerOTel } from "@vercel/otel";

export function register() {
  const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  const tracesEndpoint = process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;

  function safePath(value) {
    try {
      return new URL(value).pathname;
    } catch {
      return "NOT SET";
    }
  }

  console.log("[OTEL ENDPOINT CHECK]", {
    baseEndpointPath: safePath(endpoint),
    tracesEndpointPath: safePath(tracesEndpoint),
    protocol: process.env.OTEL_EXPORTER_OTLP_PROTOCOL || "NOT SET",
    serviceName: process.env.OTEL_SERVICE_NAME || "NOT SET",
  });

  registerOTel({
    serviceName: "Test-temp",
  });
}
