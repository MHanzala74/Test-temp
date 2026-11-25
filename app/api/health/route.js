
import { trace } from "@opentelemetry/api";

export const dynamic = "force-dynamic";

export async function GET() {
  const tracer = trace.getTracer("test-temp-health");

  return tracer.startActiveSpan("health-check-test", async (span) => {
    try {
      span.setAttribute("test.endpoint", "/api/health");
      span.setAttribute("test.purpose", "OpenTelemetry export verification");

      return Response.json({
        status: "ok",
        traceTest: "span-created",
        time: new Date().toISOString(),
      });
    } finally {
      span.end();
    }
  });
}
