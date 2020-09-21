import { DateTime, Duration } from "luxon";

export const nextShowDate = (now?: DateTime | null): DateTime => {
  if (!now) {
    now = DateTime.utc();
  }
  const firstPossibleDate = DateTime.utc(now.year, now.month, 8, 20, 0);
  const offset = (9 - firstPossibleDate.weekday) % 7;
  const thisMonth = DateTime.utc(
    now.year,
    now.month,
    firstPossibleDate.day + offset,
    20,
    0
  );
  if (thisMonth < now) {
    const dur = Duration.fromObject({ weeks: 4 });
    return nextShowDate(firstPossibleDate.plus(dur));
  } else {
    return thisMonth;
  }
};

// Mon  8th + 1    1+2  3
// Tues 8th + 0    2+2  4
// Weds 8th + 6    3+2  5
// Thus 8th + 5    4+2  6
// Fri  8th + 4    5+2  7
// Sat  8th + 3    6+2  8
// Sun  8th + 2    7+2  9

// Mon  8th + 0    9 - 1 % 7 = 1
// Tues 8th + 6    9 - 2 % 7 = 0
// Weds 8th + 5    9 - 3 % 7 = 6
// Thus 8th + 4    9 - 4 % 7 =
// Fri  8th + 3    9 - 5 % 7 =
// Sat  8th + 2    9 - 6 % 7 =
// Sun  8th + 1    9 - 7 % 7 =
