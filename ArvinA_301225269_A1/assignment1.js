
function imperialcalc() {

    var gender = document.getElementById("gender");
    var age = document.getElementById("age").value;
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;
    var stones = document.getElementById("stones").value;
    var pounds = document.getElementById("pounds").value;

    var convertedPound = (stones * 14) + +pounds;
    var convertedInch = (feet * 12) + +inches;

    if (gender.value === "female") {

        var BMRWimp = 655 + (4.35 * convertedPound) + (4.7 * convertedInch) - (4.7 * age);

        var rad1 = document.getElementById("act1");
        var rad2 = document.getElementById("act2");
        var rad3 = document.getElementById("act3");
        var rad4 = document.getElementById("act4");
        var rad5 = document.getElementById("act5");
        var dci = 0;

        if (rad1.checked == true) {
            dci += BMRWimp * 1.2;
            alert("BMR for women is: " + BMRWimp + " and Daily Calorie Intake is: " + dci);
        }
        else if (rad2.checked == true) {
            dci += BMRWimp * 1.375;
            alert("BMR for women i2s: " + BMRWimp + " and Daily Calorie Intake is: " + dci);
        }
        else if (rad3.checked == true) {
            dci += BMRWimp * 1.55;
            alert("BMR for women i3s: " + BMRWimp + " and Daily Calorie Intake is: " + dci);
        }
        else if (rad4.checked == true) {
            dci += BMRWimp * 1.725;
            alert("BMR for women i4s: " + BMRWimp + " and Daily Calorie Intake is: " + dci);
        }
        else if (rad5.checked == true) {
            dci += BMRWimp * 1.9;
            alert("BMR for women i5s: " + BMRWimp + " and Daily Calorie Intake is: " + dci);
        }
        else
            alert("BMR for women is: " + BMRWimp + " and ACTIVITY LEVEL NOT SELECTED, no DAILY CALORIE INTAKE result")

    }
    else if (gender.value === "male") {

        var BMRMimp = 66 + (6.23 * convertedPound) + (12.7 * convertedInch) - (6.8 * age);

        var rad1 = document.getElementById("act1");
        var rad2 = document.getElementById("act2");
        var rad3 = document.getElementById("act3");
        var rad4 = document.getElementById("act4");
        var rad5 = document.getElementById("act5");
        var dci = 0;

        if (rad1.checked == true) {
            dci += BMRMimp * 1.2;
            alert("BMR for men is: " + BMRMimp + " and Daily Calorie Intake is: " + dci);
        }
        else if (rad2.checked == true) {
            dci += BMRMimp * 1.375;
            alert("BMR for men is: " + BMRMimp + " and Daily Calorie Intake is: " + dci);
        }
        else if (rad3.checked == true) {
            dci += BMRMimp * 1.55;
            alert("BMR for men is: " + BMRMimp + " and Daily Calorie Intake is: " + dci);
        }
        else if (rad4.checked == true) {
            dci += BMRMimp * 1.725;
            alert("BMR for men is: " + BMRMimp + " and Daily Calorie Intake is: " + dci);
        }
        else if (rad5.checked == true) {
            dci += BMRMimp * 1.9;
            alert("BMR for men is: " + BMRMimp + " and Daily Calorie Intake is: " + dci);
        }
        else
            alert("BMR for men is: " + BMRMimp + " and ACTIVITY LEVEL NOT SELECTED, no DAILY CALORIE INTAKE result")
    }
    else
        alert("Select gender and try again");

}

document.getElementById("submit").addEventListener("click", imperialcalc, false)

function impResetFunction() {
    document.getElementById("impForm").reset();
}

function metricCalc() {

    var Mgender = document.getElementById("Mgender");
    var Mage = document.getElementById("Mage").value;
    var cent = document.getElementById("cm").value;
    var kilo = document.getElementById("kg").value;

    if (Mgender.value === "female") {

        var BMRWmetric = 655 + (9.6 * kilo) + (1.8 * cent) - (4.7 * Mage);

        var Mrad1 = document.getElementById("Mact1");
        var Mrad2 = document.getElementById("Mact2");
        var Mrad3 = document.getElementById("Mact3");
        var Mrad4 = document.getElementById("Mact4");
        var Mrad5 = document.getElementById("Mact5");
        var Mdci = 0;

        if (Mrad1.checked == true) {
            Mdci += BMRWmetric * 1.2;
            alert("BMR for women is: " + BMRWmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else if (Mrad2.checked == true) {
            Mdci += BMRWmetric * 1.375;
            alert("BMR for women is: " + BMRWmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else if (Mrad3.checked == true) {
            Mdci += BMRWmetric * 1.55;
            alert("BMR for women is: " + BMRWmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else if (Mrad4.checked == true) {
            Mdci += BMRWmetric * 1.725;
            alert("BMR for women is: " + BMRWmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else if (Mrad5.checked == true) {
            Mdci += BMRWmetric * 1.9;
            alert("BMR for women is: " + BMRWmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else
            alert("BMR for women is: " + BMRWmetric + " and ACTIVITY LEVEL NOT SELECTED, no DAILY CALORIE INTAKE result")

    }
    else if (Mgender.value === "male") {

        var BMRMmetric = 66 + (13.7 * kilo) + (5 * cent) - (6.8 * Mage);

        var Mrad1 = document.getElementById("Mact1");
        var Mrad2 = document.getElementById("Mact2");
        var Mrad3 = document.getElementById("Mact3");
        var Mrad4 = document.getElementById("Mact4");
        var Mrad5 = document.getElementById("Mact5");
        var Mdci = 0;

        if (Mrad1.checked == true) {
            Mdci += BMRMmetric * 1.2;
            alert("BMR for men is: " + BMRMmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else if (Mrad2.checked == true) {
            Mdci += BMRMmetric * 1.375;
            alert("BMR for men is: " + BMRMmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else if (Mrad3.checked == true) {
            Mdci += BMRMmetric * 1.55;
            alert("BMR for men is: " + BMRMmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else if (Mrad4.checked == true) {
            Mdci += BMRMmetric * 1.725;
            alert("BMR for men is: " + BMRMmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else if (Mrad5.checked == true) {
            Mdci += BMRMmetric * 1.9;
            alert("BMR for men is: " + BMRMmetric + " and Daily Calorie Intake is: " + Mdci);
        }
        else
            alert("BMR for men is: " + BMRMmetric + " and ACTIVITY LEVEL NOT SELECTED, no DAILY CALORIE INTAKE result")
    }
    else
        alert("Select gender and try again");

}

function metResetFunction() {
    document.getElementById("metricForm").reset();
}

document.getElementById("Msubmit").addEventListener("click", metricCalc, false)
