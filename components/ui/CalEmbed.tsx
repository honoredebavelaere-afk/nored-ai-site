"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#0071E3" } },
        hideEventTypeDetails: true,
        layout: "column_view",
      });
    })();
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden bg-white" style={{ height: "480px" }}>
      <Cal
        calLink="honore-vm9vb7/15min"
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        config={{ layout: "column_view" }}
      />
    </div>
  );
}
