const roomPrices = {
    single: 6000,
    double: 8000,
    master: 10000
};

let totalPrice = 0

function bookNow() {
    let quantity = $("#number").val();
    let number = $("#guests").val();
    let room = $("input[name='roomType']:checked").val();

    if (room == "single"){
        totalPrice = (roomPrices.single * quantity * number);
    }
    else if (room == "double"){
        totalPrice = (roomPrices.double * quantity * number);
    }
    else if (room == "master"){
        totalPrice = (roomPrices.master * quantity * number);
    }
    else {
        alert("please fill in the required information")
    }

    alert("Thank You for choosing us your total Booking Price is KSH" + totalPrice);
};