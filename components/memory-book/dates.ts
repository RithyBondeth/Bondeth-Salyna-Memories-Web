import type { RelationshipMetrics } from "./types";

export const RELATIONSHIP_START = createDate(2025, 9, 1);
export const FIRST_ANNIVERSARY = createDate(2026, 9, 1);
export const BONDETH_BIRTHDAY = createDate(2002, 5, 7);
export const SALYNA_BIRTHDAY = createDate(2006, 6, 14);
export const REFERENCE_TODAY = createDate(2026, 4, 21);

export function createDate(year: number, month: number, day: number) {
  return new Date(year, month - 1, day);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getRelationshipMetrics(
  today = REFERENCE_TODAY,
): RelationshipMetrics {
  return {
    bondethAge: getAge(BONDETH_BIRTHDAY, today),
    salynaAge: getAge(SALYNA_BIRTHDAY, today),
    daysTogether: getDaysBetween(RELATIONSHIP_START, today),
    monthsTogether: getMonthsBetween(RELATIONSHIP_START, today),
  };
}

function toUtcDay(date: Date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

function getAge(birthday: Date, today: Date) {
  let age = today.getFullYear() - birthday.getFullYear();
  const hasNotHadBirthdayYet =
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() < birthday.getDate());

  if (hasNotHadBirthdayYet) {
    age -= 1;
  }

  return age;
}

function getDaysBetween(from: Date, to: Date) {
  const diff = toUtcDay(to) - toUtcDay(from);
  return Math.max(0, Math.floor(diff / 86_400_000));
}

function getMonthsBetween(from: Date, to: Date) {
  const totalMonths =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth());

  return to.getDate() >= from.getDate() ? totalMonths : totalMonths - 1;
}
