import { DateTime, Duration } from "luxon";

export const nextShowDate = (now?: DateTime | null): DateTime => {
  if (!now) {
    now = DateTime.utc();
  }
  const firstPossibleDate = DateTime.utc(now.year, now.month, 8, 19, 0);
  const offset = (9 - firstPossibleDate.weekday) % 7;
  const thisMonth = DateTime.utc(
    now.year,
    now.month,
    firstPossibleDate.day + offset,
    20,
    0
  );
  if (thisMonth < now) {
    const fourWeeks = Duration.fromObject({ weeks: 4 });
    return nextShowDate(firstPossibleDate.plus(fourWeeks));
  } else {
    return thisMonth;
  }
};
