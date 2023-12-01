function ajaxLogin() {

    var host = window.location.origin;
    var employee_id = $('#employee_id').val()
    var password = $('#password').val()

    console.log({host, employee_id, password})

    var obj = {
        employee_id: employee_id,
        password: password
    }
    $.ajax({
        type: "POST",
        url: host + "/web/v1/auth/login",
        data: obj,
        success: function(datas){
            if (datas.success == 200) {
                window.location.href = `${host}/web/v1/dashboard`

            }
            else if (datas.success == 400){
                var error = document.getElementById("info-error-login");
                error.style.display = "block";
                document.getElementById("text-error").innerHTML = datas.message
            }
        },
        error: function(errMsg) {
            console.log('New Error : '+errMsg);
        }
    });
}
