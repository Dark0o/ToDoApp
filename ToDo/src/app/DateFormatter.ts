export class DateFormatter {

   static daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
   ]

   static months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'Jun',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
   ]

  static addZero(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n.toString();
  }s

  static formatDate(timestamp){

    let date = new Date(timestamp);
    let year = date.getFullYear();
        let month = date.getMonth();
        let dayInAMonth = date.getDate();
        let day = date.getDay();
        let hrs = date.getHours();
        let mins = date.getMinutes();

        return `${this.daysOfTheWeek[day]}, ${this.months[month]} ${this.addZero(dayInAMonth)} ${year}, ${this.addZero(hrs)}:${this.addZero(mins)}`;
  }

}