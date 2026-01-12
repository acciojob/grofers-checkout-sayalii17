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
    totalCell.textContent = "Total Price";

	const totalCell2 = document.createElement("td");
	totalCell2.id= "ans";
    totalCell2.textContent = `${sum}`;

    totalRow.appendChild(totalCell);
	totalRow.appendChild(totalCell2);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
