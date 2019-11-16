$(document).ready(function () {
    //search
    $('.seacrch-customer').keyup(function () {
        let value = $(this).val();

        $.ajax({
            url: "http://127.0.0.1:8000/customers/search",
            type: "GET",
            dataType: "json",
            data: {keyword: value},
            success: function (result) {
                let printTable = "";
                $.each(result, function (index, value) {
                    printTable +=  `<tr  class="customer-${value.id}">
                <th class="text-center index" data-index="${(index !== undefined) ? (index + 1) : 1}" scope="row">${(index !== undefined) ? (index + 1) : 1}</th>
                <td class="text-center nameCustomer-${value.id}">${(value.name !== null) ? value.name : ""}</td>
                <td class="text-center ageCustomer-${value.id}">${(value.age !== null) ? value.age : ""}</td>
                <td class="text-center">
                    <button class="btn btn-outline-warning edit" data-id=${value.id} data-toggle="modal"
                            data-target="#exampleModal">Edit</button>
                    <button class="btn btn-outline-danger delete" data-id=${value.id}>Delete</button>
                </td></tr>`;
                });
                $('#list-customers').html(printTable);
            },
            errors: function () {
            },
        });
    });
    //End searcgh

    //delete
    $('tbody').on("click", ".delete", function () {
        if (confirm("Are you sure?")) {
            let idCustomerDelete = $(this).data("id");
            $.ajax({
                url: 'http://127.0.0.1:8000/customers/' + idCustomerDelete + '/delete',
                type: 'GET',
                dataType: 'JSON',
                success: function (result) {
                    $('.customer-' + idCustomerDelete).remove();
                }
            })
        }
    });
    //End delete

    //add
    $("body").on('click', "#btn-create", function () {
        $("#add-customer").show();
        $('#update-customer').hide();
        $('#new-name-customer').val("");
        $('#new-age-customer').val("")
        $("#add-customer").on("click", function () {
            if (confirm("Add Customer?")) {
                let indexNewCustomer = $(".index:last").data('index');
                let name = $('#new-name-customer').val();
                let age = $('#new-age-customer').val();
                $.ajax({
                    url: "http://127.0.0.1:8000/customers/create",
                    type: "POST",
                    dataType: 'json',
                    data: {
                        nameCustomer: name,
                        ageCustomer: age
                    },
                    success: function (result) {
                        let printTable = "";
                        printTable += `<tr  class="customer-${result.id}">
                <th class="text-center index" data-index="${(indexNewCustomer !== undefined) ? (indexNewCustomer + 1) : 1}" scope="row">${(indexNewCustomer !== undefined) ? (indexNewCustomer + 1) : 1}</th>
                <td class="text-center nameCustomer-${result.id}">${(result.name !== null) ? result.name : ""}</td>
                <td class="text-center ageCustomer-${result.id}">${(result.age !== null) ? result.age : ""}</td>
                <td class="text-center">
                    <button class="btn btn-outline-warning edit" data-id=${result.id} data-toggle="modal"
                            data-target="#exampleModal">Edit</button>
                    <button class="btn btn-outline-danger delete" data-id=${result.id}>Delete</button>
                </td></tr>`;
                        $('#list-customers').append(printTable);
                    },
                    errors: function () {
                    },
                })
            }
        });
    });
//    End Add

//edit
    $('body').on("click", ".edit", function () {
        $("#add-customer").hide();
        $('#update-customer').show();

        let id = $(this).data('id');
        let name = $(this).parent("td").prev("td").prev("td").text();
        let age = $(this).parent("td").prev("td").text();

        $('#new-name-customer').val(name);
        $('#new-age-customer').val(age);
        $("#id-edit-customer").val(id);

        $("#update-customer").on("click", function () {
            let newNameCustomer = $('#new-name-customer').val();
            let newAgeCustomer = $('#new-age-customer').val();
            let id = $("#id-edit-customer").val();
            $.ajax({
                url: "http://127.0.0.1:8000/customers/" + id + "/edit",
                type: "POST",
                dataType: 'json',
                data: {
                    nameCustomer: newNameCustomer,
                    ageCustomer: newAgeCustomer,
                },
                success: function (result) {
                    $('.nameCustomer-' + id).text(result.name);
                    $('.ageCustomer-' + id).text(result.age);
                }
            });
        })
    });
//    end Edit

});
