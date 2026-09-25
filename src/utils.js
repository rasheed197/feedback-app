// Data from data.js
import { months } from "./data";

export const getCurrentDateTime = (newDate) => {
  const d = new Date(newDate);

  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minute = d.getMinutes();

  const formattedDate = `${month} ${date}, ${year}`; // May 24, 2026
  const formattedTime = `${hour <= 12 ? hour : hour - 12 }:${String(minute).length > 1 ? minute : "0" + minute} ${hour >= 12 ? "PM" : "AM"}`; // 2:15 AM

  return { date: formattedDate, time: formattedTime, year };
};