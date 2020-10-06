$(function () {

    $('#contact_form').validator();

    $('#contact_form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact_form/contact_form.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact_form').find('.messages').html(alertBox);
                        $('#contact_form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
});
function palindrome() {
    let userStr = document.getElementById("str").value;
    let rev = userStr.split('').reverse().join('');
    if (userStr == rev) {
        let resultp = userStr + " is a palindrome";
        document.getElementById("resultp").innerHTML = `<b>${resultp}</b>`;
    }
    else {
        let resultp = userStr + " is not a palindrome";
        document.getElementById("resultp").innerHTML = `<b>${resultp}</b>`;
    }
}