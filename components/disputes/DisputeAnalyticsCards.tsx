"use client";

import {
  AlertTriangle,
  BadgeIndianRupee,
  CheckCircle2,
  Clock3,
  ShieldAlert,
} from "lucide-react";

import {
  MetricCard,
} from "@/components/dashboard/MetricCard";
import type {
  DisputeAnalytics,
} from "@/types/dispute";

interface Props {
  readonly analytics: DisputeAnalytics;
}

export function DisputeAnalyticsCards({
  analytics,
}: Props): React.JSX.Element {
  return (
    <section className="grid gap-5 xl:grid-cols-5">
      <MetricCard
        title="Open Disputes"
        value={analytics.openDisputes}
        icon={<Clock3 />}
      />

      <MetricCard
        title="Urgent"
        value={analytics.urgentDisputes}
        icon={<AlertTriangle />}
      />

      <MetricCard
        title="Resolved"
        value={
          analytics.resolvedForCustomer +
          analytics.resolvedForStudio
        }
        icon={<CheckCircle2 />}
      />

      <MetricCard
        title="Disputed Value"
        value={`₹${(
          analytics.disputedValuePaise / 100
        ).toLocaleString("en-IN")}`}
        icon={<BadgeIndianRupee />}
      />

      <MetricCard
        title="Recovered"
        value={`₹${(
          analytics.recoveredValuePaise / 100
        ).toLocaleString("en-IN")}`}
        icon={<ShieldAlert />}
      />
    </section>
  );
}
