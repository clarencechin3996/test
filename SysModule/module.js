function deleteRow(el) {
    if (!confirm("Are you sure you want to delete?")) return;

    var tbl = el.parentNode.parentNode.parentNode;
    var row = el.parentNode.parentNode.rowIndex;
    tbl.deleteRow(row - 1);
}

$(document).ready(function() {
    //To hide the table
    $(".showDataTopTable").click(function() {
        $(".table_button").hide()
        $(".table_top").show("fast")
        $(".table_button_pro").hide()
        $(".table_button_set").hide()
        $(".table_button_set_pro").hide()
    });
    $(".showDataButtonTable").click(function() {
        $(".table_top").hide()
        $(".table_button").show("fast")
        $(".table_top_pro").hide()
    });

    $(".showAddDataTopProperties").click(function() {
        $(".table_top_pro").show("fast");
        document.getElementById("iconTop").value = "";
        document.getElementById("nameTop").value = "";
        document.getElementById("posTop").value = "";
        document.getElementById("sqlTop").value = "";
        document.getElementById("infoTop").value = "";
        $("#topbtn").html("Save");
    });

    $(".showAddDataButtonProperties").click(function() {
        $(".table_button_pro").show("fast")
        document.getElementById("posButton").value = "";
        document.getElementById("nameButton").value = "";
        $("#buttonbtn").html("Save");
    });

    $(".showAddDataSetProperties").click(function() {
        $(".table_button_set_pro").show("fast")
        document.getElementById("posSet").value = "";
        document.getElementById("nameSet").value = "";
        document.getElementById("typeSet").value = "";
    });

    $('textarea.autogrow').each(function() {
        $(this).css('overflow-y', 'hidden');
    }).on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    var tableTop = document.getElementById('dataTop');
    for (var i = 1; i < tableTop.rows.length; i++) {
        tableTop.rows[i].onclick = function() {
            $(".table_top_pro").show("fast");
            document.getElementById("posTop").value = this.cells[0].innerHTML;
            document.getElementById("nameTop").value = this.cells[1].innerHTML;
            document.getElementById("infoTop").value = this.cells[2].innerHTML;
            //rIndex = this.rowIndex;
            $("#topbtn").html("Update");
        };
    }

    var tableButton = document.getElementById('dataButton');
    for (var i = 1; i < tableButton.rows.length; i++) {
        tableButton.rows[i].onclick = function() {
            $(".table_button_pro").show('fast')
            $(".table_button_set").show('fast')
            document.getElementById("posButton").value = this.cells[0].innerHTML;
            document.getElementById("nameButton").value = this.cells[1].innerHTML;
            //rIndex = this.rowIndex;
            $("#buttonbtn").html("Update");
        };
    }

    var tableSet = document.getElementById('dataSet');
    for (var i = 1; i < tableSet.rows.length; i++) {
        tableSet.rows[i].onclick = function() {
            $(".table_button_set_pro").show("fast")
            document.getElementById("posSet").value = this.cells[0].innerHTML;
            document.getElementById("nameSet").value = this.cells[1].innerHTML;
            document.getElementById("typeSet").value = this.cells[2].innerHTML;

            var select = document.getElementById('typeSet');
            var selectValueType = select.options[select.selectedIndex].value;

            if (selectValueType == "Line") {
                $("#linePro").show("slow");
            } else {
                $("#linePro").hide("fast");
            }

            if (selectValueType == "Bar") {
                $("#barPro").show("slow");
            } else {
                $("#barPro").hide("fast");
            }

            if (selectValueType == "Pie") {
                $("#piePro").show("slow");
            } else {
                $("#piePro").hide("fast");
            }
            //rIndex = this.rowIndex;
            $("#setbtn").html("Update");

        };
    }
    var marker = document.querySelector('#marker');
    var item = document.querySelectorAll('nav a');


    function indicator(e) {
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';
    }

    item.forEach(link => {
        link.addEventListener("click", (e) => {
            indicator(e.target);
        })
    });

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function(form) {
                form.addEventListener('submit', function(event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()

    $("#topform").submit(function(e) {
        e.preventDefault();
        // <==stop page refresh==>
    });

    $("#buttonForm").submit(function(e) {
        e.preventDefault();
        // <==stop page refresh==>
    });

    $(function() {
        $("#typeSet").change(function() {
            if ($(this).val() == "Line") {
                $("#linePro").show("slow");
            } else {
                $("#linePro").hide("fast");
            }
            if ($(this).val() == "Bar") {
                $("#barPro").show("slow");
            } else {
                $("#barPro").hide("fast");
            }
            if ($(this).val() == "Pie") {
                $("#piePro").show("slow");
            } else {
                $("#piePro").hide("fast");
            }


        });
    });

    $(function() {
        $("#module").change(function() {
            $("#navModule").show("fast");
        });
    });
});

function autosize() {
    var el = this;
    setTimeout(function() {
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}

let saveTop = () => {
    // Get the data from each element on the form.
    const icon = document.getElementById("iconTop");
    const name = document.getElementById("nameTop");
    const info = document.getElementById("infoTop");
    const sql = document.getElementById("sqlTop");
    const pos = document.getElementById("posTop");

    if ((icon.value && name.value && sql.value && pos.value) !== '') {
        // This variable stores all the data.
        let data = "\r Icon: " + icon.value + " \r\n " + "Name: " + name.value + " \r\n " + "Info: " + info.value + " \r\n " + "SQL: " + sql.value + " \r\n " + "Pos: " + pos.value;
        console.log(data); //printing form data into the console
        document.getElementById("iconTop").value = "";
        document.getElementById("nameTop").value = "";
        document.getElementById("posTop").value = "";
        document.getElementById("sqlTop").value = "";
        document.getElementById("infoTop").value = "";
    } else {
        console.log('Some inputs are empty')
    }
};

let updateTop = () => {
    if ($("#topbtn").html() == "Update") {
        console.log('Update true');
        const icon = document.getElementById("iconTop");
        const name = document.getElementById("nameTop");
        const info = document.getElementById("infoTop");
        const sql = document.getElementById("sqlTop");
        const pos = document.getElementById("posTop");

        if ((icon.value && name.value && sql.value && pos.value) !== '') {
            // This variable stores all the data.
            let updateDataTop = "\r Icon: " + icon.value + " \r\n " + "Name: " + name.value + " \r\n " + "Info: " + info.value + " \r\n " + "SQL: " + sql.value + " \r\n " + "Pos: " + pos.value;
            console.log(updateDataTop); //printing form data into the console
            document.getElementById("iconTop").value = "";
            document.getElementById("nameTop").value = "";
            document.getElementById("posTop").value = "";
            document.getElementById("sqlTop").value = "";
            document.getElementById("infoTop").value = "";
        }
    } else {
        console.log('Update false');
    }


};



let saveButton = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("nameButton");
    const sql = document.getElementById("sqlButton");
    const pos = document.getElementById("posButton");

    if ((name.value && sql.value && pos.value) !== '') {
        // This variable stores all the data.
        let data = "\r Name: " + name.value + " \r\n " + "SQL: " + sql.value + " \r\n " + "Pos: " + pos.value;
        console.log(data); //printing form data into the console
        document.getElementById("nameButton").value = "";
        document.getElementById("sqlButton").value = "";
        document.getElementById("posButton").value = "";
    } else {
        console.log('Some inputs are empty')
    }
};

let updateButton = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("nameButton");
    const sql = document.getElementById("sqlButton");
    const pos = document.getElementById("posButton");
    if ($("#buttonbtn").html() == "Update") {
        console.log('Update true');
        if ((name.value && sql.value && pos.value) !== '') {
            // This variable stores all the data.
            let updateDataButton = "\r Name: " + name.value + " \r\n " + "SQL: " + sql.value + " \r\n " + "Pos: " + pos.value;
            console.log(updateDataButton); //printing form data into the console
            document.getElementById("nameButton").value = "";
            document.getElementById("sqlButton").value = "";
            document.getElementById("posButton").value = "";
        }
    } else {
        console.log('Update false');
    }
};

let saveSet = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("nameSet");
    var select = document.getElementById('typeSet');
    var selectValueType = select.options[select.selectedIndex].value;

    var select = document.getElementById('lineTypeSet');
    var selectLineProType = select.options[select.selectedIndex].value;

    var select = document.getElementById('barTypeSet');
    var selectBarProType = select.options[select.selectedIndex].value;

    var select = document.getElementById('pieTypeSet');
    var selectPieProType = select.options[select.selectedIndex].value;

    const sql = document.getElementById("sqlSet");
    const pos = document.getElementById("posSet");

    if ((name.value && selectValueType && sql.value && pos.value) !== '') {
        // This variable stores all the data.
        let data = "\r Name: " + name.value + " \r\n " + "Type: " + selectValueType + " \r\n " + "Line Properties: " + selectLineProType + " \r\n " + "Bar Properties: " + selectBarProType + " \r\n " + "Pie Properties: " + selectPieProType + " \r\n " + "SQL: " + sql.value + " \r\n " + "Pos: " + pos.value;
        console.log(data); //printing form data into the console
        document.getElementById("nameSet").value = "";
        document.getElementById("typeSet").value = "";
        document.getElementById("lineTypeSet").value = "";
        document.getElementById("pieTypeSet").value = "";
        document.getElementById("barTypeSet").value = "";
        document.getElementById("sqlSet").value = "";
        document.getElementById("posSet").value = "";
    } else {
        console.log('Some inputs are empty')
    }
};

let updateSet = () => {

    if ($("#setbtn").html() == "Update") {
        console.log('Update true');
        // Get the data from each element on the form.
        const name = document.getElementById("nameSet");
        var select = document.getElementById('typeSet');
        var selectValueType = select.options[select.selectedIndex].value;

        var select = document.getElementById('lineTypeSet');
        var selectLineProType = select.options[select.selectedIndex].value;

        var select = document.getElementById('barTypeSet');
        var selectBarProType = select.options[select.selectedIndex].value;

        var select = document.getElementById('pieTypeSet');
        var selectPieProType = select.options[select.selectedIndex].value;

        const sql = document.getElementById("sqlSet");
        const pos = document.getElementById("posSet");

        if ((name.value && selectValueType && sql.value && pos.value) !== '') {
            // This variable stores all the data.
            let updateDataSet = "\r Name: " + name.value + " \r\n " + "Type: " + selectValueType + " \r\n " + "Line Properties: " + selectLineProType + " \r\n " + "Bar Properties: " + selectBarProType + " \r\n " + "Pie Properties: " + selectPieProType + " \r\n " + "SQL: " + sql.value + " \r\n " + "Pos: " + pos.value;
            console.log(updateDataSet); //printing form data into the console
            document.getElementById("nameSet").value = "";
            document.getElementById("typeSet").value = "";
            document.getElementById("lineTypeSet").value = "";
            document.getElementById("pieTypeSet").value = "";
            document.getElementById("barTypeSet").value = "";
            document.getElementById("sqlSet").value = "";
            document.getElementById("posSet").value = "";
        }
    } else {
        console.log('Update false');
    }
};

function resetTop() {
    $('.topform').removeClass('was-validated')
}

function resetButton() {
    $('.buttonform').removeClass('was-validated')
}

function resetSet() {
    $('.setform').removeClass('was-validated')
    $('#linePro').hide('fast');
    $('#barPro').hide('fast');
    $('#piePro').hide('fast');

}