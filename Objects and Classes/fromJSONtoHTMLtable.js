function fromJSONToHTMLTable(input) {

    
    let students = input.shift();
    let first = students[0];

    let html = "<table>";
    html += `<tr>${Object.keys(first).map(x => `<th>${x}</th>`).join("")}</tr>`;
    students.forEach(student => {
        html += "<tr>";
        html += Object.values(student).map(x => `<td>${x}</td>`).join("");
        html += "</tr>";
    });

    html += "</table>" 

    return html;
}

fromJSONToHTMLTable(
    [{ "Name": "Tomatoes & Chips", "Price": 2.35 }, { "Name": "J&B Chocolate", "Price": 0.96 }]
)