'use client'
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';

import './style.scss';

interface Props {
  month: Dayjs[];
  dayJsHelper: any;
}

export const MonthSchedule = ({ month, dayJsHelper }: Props) => {
  return (
    <div className={'month-schedule'}>
      <div className="month-schedule-layout">
        <div className="month">
          {month.map(el => {
            const dayFormat = el.format('YYYY-MM-DD');
            const classNames = ['card', 'day'];
            dayJsHelper.isWeekend(el) && classNames.push('weekend');
            dayJsHelper.isToday(el) && classNames.push('today');
            dayJsHelper.isSameMonth(el) && classNames.push('anotherMonth');

            return (
              <div id={dayFormat} className={classNames.join(' ')} key={dayFormat}>
                {dayjs(el).format('DD')}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
