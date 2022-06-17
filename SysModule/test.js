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
        $(".table_top_pro").show("fast")
        document.getElementById("pos").value = "";
        document.getElementById("name").value = "";
        document.getElementById("info").value = "";
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
            //rIndex = this.rowIndex;
            $("#topbtn").html("Update");
            document.getElementById("pos").value = this.cells[0].innerHTML;
            document.getElementById("name").value = this.cells[1].innerHTML;
            document.getElementById("info").value = this.cells[2].innerHTML;
        };
    }

    var tableButton = document.getElementById('dataButton');
    for (var i = 1; i < tableButton.rows.length; i++) {
        tableButton.rows[i].onclick = function() {
            //rIndex = this.rowIndex;
            $("#buttonbtn").html("Update");
            $(".table_button_set").show("fast")
            document.getElementById("posButton").value = this.cells[0].innerHTML;
            document.getElementById("nameButton").value = this.cells[1].innerHTML;
        };
    }


    var tableSet = document.getElementById('dataSet');
    for (var i = 1; i < tableSet.rows.length; i++) {
        tableSet.rows[i].onclick = function() {
            //rIndex = this.rowIndex;
            document.getElementById("posSet").value = this.cells[0].innerHTML;
            document.getElementById("nameSet").value = this.cells[1].innerHTML;
            document.getElementById("typeSet").value = this.cells[2].innerHTML;
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

    //JavaScript for disabling form submissions if there are invalid fields
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
    $(function() {
        $("#typeSet").change(function() {
            if ($(this).val() == "line") {
                $("#linePro").show();
            } else {
                $("#linePro").hide();
            }
            if ($(this).val() == "bar") {
                $("#barPro").show();
            } else {
                $("#barPro").hide();
            }
            if ($(this).val() == "pie") {
                $("#piePro").show();
            } else {
                $("#piePro").hide();
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