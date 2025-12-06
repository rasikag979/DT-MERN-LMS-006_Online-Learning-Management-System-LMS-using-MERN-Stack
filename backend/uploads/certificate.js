const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function generateCertificate(studentName, courseTitle, outPath) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  page.drawText('Certificate of Completion', { x: 120, y: 320, size: 24, font });
  page.drawText(`This certifies that ${studentName}`, { x: 80, y: 260, size: 16 });
  page.drawText(`has completed the course: ${courseTitle}`, { x: 80, y: 230, size: 14});
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outPath, pdfBytes);
  return outPath;
}
module.exports = generateCertificate;
