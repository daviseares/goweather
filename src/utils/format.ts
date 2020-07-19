import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

/**
 * return format Date as String;
 * @param date
 */
export const formatDate = (date: number): string => {
  const parsedUnix = moment.unix(date);
  const parsedDate = moment(parsedUnix).format('DD [de] MMMM');

  return parsedDate;
};

/**
 * return format temperature as String;
 * @param temperature
 */
export const formatTemperature = (temperature: number): string => {
  const round = Math.round(temperature);
  const parsedTemperature = `${String(round)}º`;

  return parsedTemperature;
};

/**
 * return format Hour as String;
 * @param date
 */
export const formatTime = (date: number): string => {
  const parsedUnix = moment.unix(date);
  const parsedDate = moment(parsedUnix).format('LT');

  return parsedDate;
};

export const formatHumidity = (humidity: number): string =>
  `${String(humidity)}%`;
