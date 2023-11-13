import dayjs, { Dayjs } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

interface IDayjsHelper {
  format: string;
}

export class DayjsHelper {
  format: string;
  inc: number;
  month: Dayjs[];

  constructor ({ format }: IDayjsHelper) {
    this.format = format;
    this.inc = 1;
    this.month = this.getFullMonth();
  };

  getToday = (format = this.format) => dayjs().format(format);

  getMonth = (y = dayjs().year(), m = dayjs().month()) => {
    const dateOfMonth = `${y}-${m}-01`;
    return Array.from({ length: dayjs(dateOfMonth).daysInMonth() })
      .map((_, i) => dayjs(`${y}-${m}-${i + 1}`));
  };

  getFullMonth = (y = dayjs().year(), m = dayjs().month() + this.inc) => {
    let month = this.getMonth(y, m);

    if (month[0].day() !== 0) {
      while (month[0].day() !== 0) {
        const dayBefore = month[0].subtract(1, 'day');
        month = [dayBefore, ...month];
      }
    }

    if (month[month.length - 1].day() !== 6) {
      while (month[month.length - 1].day() !== 6) {
        const dayAfter = month[month.length - 1].add(1, 'day');
        month = [...month, dayAfter];
      }
    }

    return month;
  };

  onNextMonth = () => {
    this.inc += 1;
    this.month = this.getFullMonth();
  }

  onPrevMonth = () => {
    this.inc -= 1;
    this.month = this.getFullMonth();
  }

  isWeekend = (dayjsObject: Dayjs) => dayjsObject.day() === 0 || dayjsObject.day() === 6;
  isToday = (dayjsObject: Dayjs) => dayjsObject.format(this.format) === dayjs().format(this.format);
  isSameMonth = (dayjsObject: Dayjs) => dayjsObject.month() !== dayjs().month();
}
