
import dns from "node:dns/promises";
import {
  diag,
  DiagConsoleLogger,
  DiagLogLevel,
} from "@opentelemetry/api";

import { registerOTel } from "@vercel/otel";

function safeProxy(value) {
  if (!value) return "NOT SET";

  try {
    const url = new URL(value);
    return {
      hostname: url.hostname,
      port: url.port || "(default)",
    };
  } catch {
    return "CONFIGURED (invalid URL)";
  }
}

export async function register() {
  diag.setLogger(
    new DiagConsoleLogger(),
    DiagLogLevel.DEBUG
  );

  registerOTel({ serviceName: "Test-temp" });

  try {
    const result = await dns.lookup(
      "console.127-0-0-1.sslip.io",
      { all: true }
    );

    console.log("[OTEL DNS CHECK]", result);
  } catch (error) {
    console.error("[OTEL DNS ERROR]", error.message);
  }

  console.log("[OTEL PROXY CHECK]", {
    HTTP_PROXY: safeProxy(process.env.HTTP_PROXY),
    HTTPS_PROXY: safeProxy(process.env.HTTPS_PROXY),
    ALL_PROXY: safeProxy(process.env.ALL_PROXY),
    http_proxy: safeProxy(process.env.http_proxy),
    https_proxy: safeProxy(process.env.https_proxy),
    all_proxy: safeProxy(process.env.all_proxy),
  });
}
