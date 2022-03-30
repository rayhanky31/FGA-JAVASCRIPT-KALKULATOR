       //fungsi aritmatika
       function valuecal(result) {
        kalkulatorform.evalresult.value = kalkulatorform.evalresult.value + result;
    }
    //Besihin texarea
    function clean() {
        kalkulatorform.evalresult.value = "";
    }

    // Delete satu-satu
    function back() {
        var hasil = kalkulatorform.evalresult.value;
        kalkulatorform.evalresult.value = hasil.substring(0, hasil.length - 1);
    }