import { registerOTel } from "@vercel/otel";

export function register() {
  console.log("[OTEL] Instrumentation registered");

  registerOTel({
    serviceName: "Test-temp",
  });
}