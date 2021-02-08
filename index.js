
// connect click function when user clicks sends

$(".send").click(function () {

    // reset error values
    resetError();

    // inside the click function get information about user, name, age etc

    var fornavn = $("#fornavn").val();
    var etternavn = $("#etternavn").val();
    var alder = $("#alder").val();
    var høyde = $("#høyde").val();
    var vekt = $("#vekt").val();


    // check if any of the variable is empty so show an alert to user to fill all information

    var error = "";

    if (fornavn === "") {
        error = error + "Fyll ut fornavnet ditt<br>";
    }
    if (etternavn === "") {
        error = error + "Fyll ut etternavnet ditt<br>";
    }
    if (alder === "") {
        error = error + "Fyll ut alderen din<br>";
    }
    if (høyde === "") {
        error = error + "Fyll ut høyden din<br>";
    }
    if (vekt === "") {
        error = error + "Fyll ut vekten din<br>";
    }

    if (error === '') {

        // calculate full name and store in a variable
        var fullName = concate(fornavn, etternavn, " ");

        // calculate bmi and store it in a variable
        var bmi = calculateBmi(vekt, høyde);

        // show name and bmi in html
        var str = fullName + "´s" + " BMI er " + bmi + "<br>";

        $(".resultat").append(str);

        reset();
        $(".resultat-cointainer").removeClass('d-none');
    }
    else {
        $(".error-container").removeClass('d-none');
        $(".error").html(error);
    }

});


// connect reset click button

$(".reset").click(function () {
    reset();
    resetError();
})

function concate(param1, param2, concatOption) {
    return param1 + concatOption + param2;
}

function calculateBmi(vekt, høyde) {
    return Math.round(vekt / (høyde * høyde));
}

function reset() {
    $("#fornavn").val('');
    $("#etternavn").val('');
    $("#alder").val('');
    $("#høyde").val('');
    $("#vekt").val('');
}

function resetError() {
    $(".error").html("");
    $(".error-container").addClass('d-none');
}

