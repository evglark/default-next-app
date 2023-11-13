'use client'
import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';

import { MonthSchedule } from '../components/MonthSchedule';
import { ControlPanel } from '../components/ControlPanel';
import { DayjsHelper } from '../utils';

import './style.scss';

export const SchedulePage = () => {
  const [month, setMonth] = useState(new DayjsHelper({ format: 'DD-MM-YYYY' }).month);
  const dayJs = new DayjsHelper({ format: 'DD-MM-YYYY' });

  return (
    <div className="schedule-page">
      <ControlPanel
        onNext={dayJs.onNextMonth}
        onPrev={dayJs.onPrevMonth}
      />
      <MonthSchedule
        month={month}
        dayJsHelper={dayJs}
      />
    </div>
  );
};
