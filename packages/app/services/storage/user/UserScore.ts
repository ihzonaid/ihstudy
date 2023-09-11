import { UserType } from './UserCourse'

export type DateWiseScoreType = Record<string, number>

// Method to add a score for a specific date
function addScoreForDate(user: UserType, date: string, score: number): void {
  // Add the score to the total
  user.score.total += score

  // Add or update the score for the specified date
  user.score.dateWise[date] = (user.score.dateWise[date] || 0) + score
}

// Method to get the total score for the last 7 days
function getTotalScoreLast7Days(user: UserType): number {
  const currentDate = new Date()
  let total = 0

  for (let i = 0; i < 7; i++) {
    currentDate.setDate(currentDate.getDate() - 1)
    const dateKey = formatDate(currentDate)
    if (user.score.dateWise[dateKey]) {
      total += user.score.dateWise[dateKey] ?? 0
    }
  }

  return total
}

// Method to get the total score for the last 30 days
function getTotalScoreLast30Days(user: UserType): number {
  const currentDate = new Date()
  let total = 0

  for (let i = 0; i < 30; i++) {
    currentDate.setDate(currentDate.getDate() - 1)
    const dateKey = formatDate(currentDate)
    if (user.score.dateWise[dateKey]) {
      total += user.score.dateWise[dateKey] ?? 0
    }
  }

  return total
}

// Helper function to format a date as yyyy-mm-dd
function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

export {
  addScoreForDate,
  formatDate,
  getTotalScoreLast30Days,
  getTotalScoreLast7Days,
}
