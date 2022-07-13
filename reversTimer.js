class CountdownTimer {
  refsEl = {};
  timeComponents = { days: 0, hours: 0, mins: 0, secs: 0 };
  constructor ({selector, targetDate}){
    this.refsEl.daysEl = document.querySelector(`${selector} .value[data-value="days"]`);
    this.refsEl.hoursEl = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.refsEl.minsEl = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.refsEl.secsEl = document.querySelector(`${selector} .value[data-value="secs"]`);
    this.targetDate = targetDate;
    }
   
  getTimeComponents(time) {
    this.timeComponents.days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.timeComponents.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.timeComponents.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.timeComponents.secs = Math.floor((time % (1000 * 60)) / 1000);
    }
  pad(value) {
    return String(value).padStart(2, '0');
    }
  updCounter() {
    this.refsEl.daysEl.textContent = this.pad(this.timeComponents.days);
    this.refsEl.hoursEl.textContent = this.pad(this.timeComponents.hours);
    this.refsEl.minsEl.textContent = this.pad(this.timeComponents.mins);
    this.refsEl.secsEl.textContent = this.pad(this.timeComponents.secs);
    }
  start() {
    setInterval(() => {
      this.getTimeComponents(this.targetDate.getTime() - Date.now());
      this.updCounter()
      }, 1000);
    }
  };
  
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 30, 2022'),
  });

  timer.start()