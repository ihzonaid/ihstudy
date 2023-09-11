export function getLast7DaysNames(nday = 7): string[] {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const today = new Date()
  const dayNames: string[] = []

  for (let i = 0; i < nday; i++) {
    const day = new Date(today)
    day.setDate(today.getDate() - i)

    const dayName = daysOfWeek[day.getDay()]
    if (dayName) dayNames.unshift(dayName)
  }

  return dayNames
}
