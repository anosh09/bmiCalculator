
// connect click function when user clicks sends

$(".send").click(function () {

    // inside the click function get information about user, name, age etc

    var fornavn = $("#fornavn").val();
    console.log("fornavn:", fornavn);

    var etternavn = $("#etternavn").val();
    console.log("etternavn:", etternavn);

    var alder = $("#alder").val();
    console.log("alder:", alder);

    var høyde = $("#høyde").val();
    console.log("høyde:", høyde);

    var vekt = $("#vekt").val();
    console.log("vekt:", vekt);


    // check if any of the variable is empty so show an alert to user to fill all information

    var error = "";

    if (fornavn === "") {
        error = error + "Fyll ut fornavnet ditt\n";
    }
    if (etternavn === "") {
        error = error + "Fyll ut etternavnet ditt\n";
    }
    if (alder === "") {
        error = error + "Fyll ut alderen din\n";
    }
    if (høyde === "") {
        error = error + "Fyll ut høyden din\n";
    }
    if (vekt === "") {
        error = error + "Fyll ut vekten din\n";
    }

    // alert(error);



    // calculate full name and store in a variable

    var fullName = concate(fornavn, etternavn, " ");
    console.log("fult navn:", fullName);

    // calculate bmi and store it in a variable

    var bmi = calculateBmi(vekt, høyde);
    console.log(bmi);


    // show name and bmi in html

    var str = fullName + "´s" + " BMI er " + bmi;
    console.log(str);

    $(".resultat").html(str);

});

function concate(param1, param2, concatOption) {
    return param1 + concatOption + param2;
}

function calculateBmi(vekt, høyde) {
    return Math.round(vekt / (høyde * høyde));
}


