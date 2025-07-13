const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];

const averageScore = students.map(student => {
  const sum = student.scores.reduce((total, score) => total + score, 0);
  const avg = sum / student.scores.length;
  return { name: student.name, avg };
});



console.log(averageScore);
