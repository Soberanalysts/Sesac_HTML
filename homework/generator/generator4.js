const fs = require('fs');

function writeDataToCSV(data, filePath){
    const header = ["id", "Name",  "Type", "UnitPrice"];
    const rows = data.map(row => row.join(","));
    const csvContent = [header, ...rows].join('\n');
    fs.writeFileSync(filePath, csvContent, 'utf8');
}

writeDataToCSV([], "item.csv");
