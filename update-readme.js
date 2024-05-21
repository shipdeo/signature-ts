const fs = require('fs');

const coverage = process.argv[2];

const readmePath = 'README.md';
const readmeContent = fs.readFileSync(readmePath, 'utf8');
const coverageReportMarker = '## Coverage Report';

const updatedReadmeContent = readmeContent.replace(
  new RegExp(`${coverageReportMarker}[\\s\\S]*?(?=\n## |$)`),
  `${coverageReportMarker}\n\n**Lines:** ${coverage}%`
);

fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');
