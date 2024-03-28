// // app.js
// angular.module('kindergartenApp', [])
//   .controller('MainController', ['$scope', '$http', function($scope, $http) {
//     $scope.students = [];
//     $scope.teachers = [];
//     $scope.newStudent = {};
//     $scope.newTeacher = {};

//     // Function to fetch students from the server
//     var fetchStudents = function() {
//       $http.get('/api/students').then(function(response) {
//         $scope.students = response.data;
//       });
//     };

//     // Function to fetch teachers from the server
//     var fetchTeachers = function() {
//       $http.get('/api/teachers').then(function(response) {
//         $scope.teachers = response.data;
//       });
//     };

//     // Fetch initial data when controller loads
//     fetchStudents();
//     fetchTeachers();

//     // Function to add a new student
//     $scope.addStudent = function() {
//       $http.post('/api/students', $scope.newStudent).then(function() {
//         fetchStudents(); // Refresh the list of students
//         $scope.newStudent = {}; // Clear the input fields
//       });
//     };

//     // Function to add a new teacher
//     $scope.addTeacher = function() {
//       $http.post('/api/teachers', $scope.newTeacher).then(function() {
//         fetchTeachers(); // Refresh the list of teachers
//         $scope.newTeacher = {}; // Clear the input fields
//       });
//     };
//   }]);
