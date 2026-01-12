const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");
    let sum = 0;

    prices.forEach(price => {
        sum += Number(price.textContent);
    });

    const table = document.querySelector("table");

    // prevent adding multiple total rows
    if (document.getElementById("total-row")) return;

    const totalRow = document.createElement("tr");
    totalRow.id = "total-row";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: Rs ${sum}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
