import { registerOTel } from "@vercel/otel";

export async function register() {
  // Route OTLP traffic through the Docker host gateway.
  // Preserve Temps-injected authentication headers.
  process.env.OTEL_EXPORTER_OTLP_ENDPOINT =
    "http://172.20.0.1/api/otel";

  registerOTel({
    serviceName: "Test-temp",
  });

  console.log("[OTEL] Using Docker gateway endpoint");
}
