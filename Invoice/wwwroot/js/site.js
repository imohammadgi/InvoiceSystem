
function AddRow() {

    var table = document.getElementById("table");

    var Rowid = table.rows.length - 2;

    var row = table.insertRow(Rowid);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);

    var lastRowIndex = Rowid;

    cell1.innerHTML = lastRowIndex;

    
    cell2.classList.add('calculate');
    cell3.classList.add('calculate');
    cell4.classList.add('calculate');
    cell5.classList.add('calculate');
    cell6.classList.add('calculate');
  

    cell2.innerHTML = "<input class='calculate' name='Num1[]' type='text'>";
    cell3.innerHTML = "<input class='calculate' name='Num2[]' type='text'>";
    cell4.innerHTML = "<input class='calculate' name='Num3[]' type='text'>";
    cell5.innerHTML = "<input class='calculate' name='Num4[]' type='text'>";
    cell6.innerHTML = "<input class='calculate' name='Num5[]' type='text'>";
  
    cell11.innerHTML =
        "<button type='button' class='Del_Btn'id='noprint'  onclick='DelRow(this)'><i class='fa fa-minus'></i></button><button type='button' class='Down_Row' id='noprint' onclick='DownRow(this)' ><i class='fa fa-arrow-down'></i></button><button type='button' class='Up_Row' id='noprint' onclick='UpRow(this)' ><i class='fa fa-arrow-up'></i></button> ";
    Setcalctotd();
}

function DelRow(r) {

    var currentrowIndex = r.parentNode.parentNode.rowIndex;
    var table = document.getElementById("table");


    for (var i = currentrowIndex; i < table.rows.length - 2; i++) {
        var x = table.rows[i].cells.item(0);
        x.innerHTML = i - 1;
    }

    table.deleteRow(currentrowIndex);

}

function UpRow(r) {
    var currentrowIndex = r.parentNode.parentNode.rowIndex;

    var index = r.parentNode.parentNode.rowIndex;
    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;

    if (index > 1) {
        parent.insertBefore(rows[index], rows[index - 1]);
        index--;
        rows[index + 1].cells[0].innerHTML = currentrowIndex;
        rows[index].cells[0].innerHTML = currentrowIndex - 1;
    }

}

function DownRow(r) {
    var currentrowIndex = r.parentNode.parentNode.rowIndex;

    var index = r.parentNode.parentNode.rowIndex;
    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;

    if (index < rows.length - 3) {
        parent.insertBefore(rows[index + 1], rows[index]);
        index++;
        rows[index - 1].cells[0].innerHTML = currentrowIndex;
        rows[index].cells[0].innerHTML = currentrowIndex + 1;
    }

}

function calculate() {

    var table = document.getElementById("table");
    var lastIndex = table.rows.length;

    var totalDiscount = 0;
    var totalAmount = 0;
    var totalTax = 0;
    var totalAfterDiscount = 0;
    var totalAfterTax = 0;
    var rowAmount = 0;
    var rowDiscount = 0;
    var rowTax = 0;
    var Tax = 0;

    for (var i = 1; i < table.rows.length - 2; i++) {
        //محاسبه ردیف
        rowAmount = (parseInt(table.rows[i].cells.item(3).firstChild.value)) * (parseInt(table.rows[i].cells.item(4).firstChild.value));
        rowDiscount = (parseInt(table.rows[i].cells.item(7).innerHTML)) - (parseInt(table.rows[i].cells.item(5).firstChild.value));
        Tax = (parseInt(table.rows[i].cells.item(8).innerHTML) *9) /100;
        rowTax = parseInt(table.rows[i].cells.item(8).innerHTML) + parseInt(table.rows[i].cells.item(6).innerHTML);
      
        rowAmount = isNaN(rowAmount) ? 0 : parseInt(rowAmount);
        rowDiscount = isNaN(rowDiscount) ? 0 : parseInt(rowDiscount);
        Tax = isNaN(Tax) ? 0 : parseInt(Tax);
        rowTax = isNaN(rowTax) ? 0 : parseInt(rowTax);

        table.rows[i].cells.item(6).innerHTML = Tax;
        table.rows[i].cells.item(7).innerHTML = rowAmount;
        table.rows[i].cells.item(9).innerHTML = rowTax;

        if (rowDiscount < 0) {
            alert("مبلغ تخفیف نباید بیشتر از مبلغ کالا باشد.")
            table.rows[i].cells.item(8).innerHTML = 0;
            table.rows[i].cells.item(5).innerHTML = parseInt(table.rows[i].cells.item(7).innerHTML) - 1;
        }
        else {
            table.rows[i].cells.item(8).innerHTML = rowDiscount;
        }

        // محاسبه جمع کل ها

        totalAmount = totalAmount + parseInt(table.rows[i].cells.item(7).innerHTML);
        totalDiscount = totalDiscount + parseInt(table.rows[i].cells.item(5).firstChild.value);
        totalTax = totalTax + parseInt(table.rows[i].cells.item(6).innerHTML);
        totalAfterDiscount = totalAfterDiscount + parseInt(table.rows[i].cells.item(8).innerHTML);
        totalAfterTax = totalAfterTax + parseInt(table.rows[i].cells.item(9).innerHTML);

        totalDiscount = isNaN(totalDiscount) ? 0 : parseInt(totalDiscount);
    }

    table.rows[lastIndex - 2].cells.item(1).innerHTML = totalDiscount;
    table.rows[lastIndex - 2].cells.item(2).innerHTML = totalTax;
    table.rows[lastIndex - 2].cells.item(3).innerHTML = totalAmount;
    table.rows[lastIndex - 2].cells.item(4).innerHTML = totalAfterDiscount;
    table.rows[lastIndex - 2].cells.item(5).innerHTML = totalAfterTax;

    var persiannumber = (totalAfterTax).num2persian() + ' ' + 'ریال';

    table.rows[lastIndex - 1].cells.item(1).innerHTML = persiannumber;
}


function TableArray() {

    var table = document.getElementById("table");
    var lastIndex = table.rows.length;

    var ProductCode = [];
    var ProductName = [];
    var ProductCount = [];
    var ProductFee = [];
    var ProductDiscount = [];
    var ProductTax = [];
    var ProductTotal = [];
    var ProductTotalAfterDC = [];
    var ProductTotalAfterTax = [];
    var ProductResult = [];

    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(1).innerHTML;
        ProductCode.push(a);
    }
    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(2).innerHTML;
        ProductName.push(a);
    }
    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(3).innerHTML;
        ProductCount.push(a);
    }
    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(4).innerHTML;
        ProductFee.push(a);
    }
    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(5).innerHTML;
        ProductDiscount.push(a);
    }
    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(6).innerHTML;
        ProductTax.push(a);
    }
    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(7).innerHTML;
        ProductTotal.push(a);
    }
    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(8).innerHTML;
        ProductTotalAfterDC.push(a);
    }
    for (var i = 1; i < lastIndex - 2; i++) {
        a = table.rows[i].cells.item(9).innerHTML;
        ProductTotalAfterTax.push(a);
    }
    for (var i = 1; i <= 5; i++) {
        a = table.rows[lastIndex - 2].cells.item(i).innerHTML;
        ProductResult.push(a);
    }
  
    const obj = {
        ProductCode: ProductCode, ProductName: ProductName, ProductCount: ProductCount,
        ProductFee: ProductFee, ProductDiscount: ProductDiscount, ProductTax: ProductTax,
        ProductTotal: ProductTotal, ProductTotalAfterDC: ProductTotalAfterDC, ProductTotalAfterTax: ProductTotalAfterTax,
        ProductResult: ProductResult
    };

    $.ajax({

        type: 'POST',
        url: 'Home/ShowInvoice',
        data: { "data": JSON.stringify(obj) },
        dataType: 'json',
        success: function () {

        },
        error: function () {

        }
    });

}

window.addEventListener('load', (event) => {
    Setcalctotd();
});

function Setcalctotd() {
    var x = document.getElementsByClassName('calculate');
    for (var i = 0; i < x.length; i++) {
        x[i].addEventListener('keyup', calculate);
    }
}
