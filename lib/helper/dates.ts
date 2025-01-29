import { Period } from "@/types/analytics";
import { endOfMonth, intervalToDuration, startOfMonth } from "date-fns";

export function DatesToDurationString(
  end: Date | null | undefined,
  start: Date | null | undefined,
) {
  if (!start || !end) return null;

  const timeElapsed = end.getTime() - start.getTime();

  if (timeElapsed < 1000) {
    //less than 1 sec
    return `${timeElapsed}ms`;
  }

  const duration = intervalToDuration({
    start: 0,
    end: timeElapsed,
  });

  return `${duration.minutes || 0}m ${duration.seconds || 0}s`
}



export function PeriodToDateRange(period: Period){
  const satrtDate = startOfMonth(new Date(period.year, period.month));
  const endDate = endOfMonth(new Date(period.year, period.month));

  return {satrtDate,endDate};
}