"use strict";
exports.__esModule = true;
var UserCourse_1 = require("../UserCourse");
var UserScore_1 = require("../UserScore");
var userdb_1 = require("../userdb");
// Call addScoreForDate to add a score for a specific date
(0, UserScore_1.addScoreForDate)(userdb_1.user, '2023-09-10', 10); // Add a score of 10 for September 10, 2023
// You can add scores for other dates as needed
(0, UserScore_1.addScoreForDate)(userdb_1.user, '2023-09-11', 15);
// Example usage:
// Get all user courses
var allCourses = (0, UserCourse_1.getUserCourses)(userdb_1.user);
console.log('User Courses:', allCourses);
// Get all chapters for a specific course
var courseId = 'course1';
var chaptersForCourse = (0, UserCourse_1.getChaptersForCourse)(userdb_1.user, courseId);
console.log("Chapters for ".concat(courseId, ":"), chaptersForCourse);
// Get all subchapters for a specific chapter within a course
var chapterId = 1;
var subchaptersForChapter = (0, UserCourse_1.getSubchaptersForChapter)(userdb_1.user, courseId, chapterId);
console.log("Subchapters for Chapter ".concat(chapterId, " in ").concat(courseId, ":"), subchaptersForChapter);
// Get all lessons for a specific subchapter within a chapter within a course
var subChapterId = 1;
var lessonsForSubChapter = (0, UserCourse_1.getLessonsForSubChapter)(userdb_1.user, courseId, chapterId, subChapterId);
console.log("Lessons for SubChapter ".concat(subChapterId, " in Chapter ").concat(chapterId, " in ").concat(courseId, ":"), lessonsForSubChapter);
console.log('The total Score oflast 7 dy', (0, UserScore_1.getTotalScoreLast7Days)(userdb_1.user));
