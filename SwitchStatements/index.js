let dayOfWeek = prompt("Enter a Day of Week (In Standard Form):");
switch(dayOfWeek) {
    case "Monday" :
        document.write("Today is Monday!\u{1F600}")
        break;
        case "Tuesday" :
        document.write("Today is Tuesday!\u{1F601}")
        break;
        case "Wednesday" :
        document.write("Today is Wednesday!\u{1F644}")
        break;
        case "Thursday" :
        document.write("Today is Thursday!\u{1F44D}")
        break;
        case "Friday" :
        document.write("Today is Friday!\u{2764}\u{FE0F}")
        break;
        case "Saturday" :
        document.write("Today is Saturday!\u{1F602}")
        break;
        case "Sunday" :
        document.write("Today is Sunday!\u{1F609}")
        break;
        default:
            document.write("Enter the correct dayyyyyyyy!!!!!!!!" )
}
document.write("<br>");

function getMonth(monthNumber){
    switch(monthNumber){
        case 1:
            document.write("January")
            break;
            case 2:
            document.write("Feburary")
            break;
            case 3:
            document.write("March")
            break;
            case 4:
            document.write("April")
            break;
            case 5:
            document.write("May")
            break;
            case 6:
            document.write("June")
            break;
            case 7:
            document.write("July")
            break;
            case 8:
            document.write("August")
            break;
            case 9:
            document.write("September")
            break;
            case 10:
            document.write("October")
            break;
            case 11:
            document.write("November")
            break;
            case 12:
            document.write("December")
            break;
    }
}
getMonth(11);

function calculateDiscount(prpductType,price) {
    let discount;

switch(prpductType){
    case "Electronics":
        discount = price * 0.01;
        break;
        case "Clothing":
        discount = price * 0.2;
        break;
        case "Book":
        discount = price * 0.5;
        break;
        default:
            console.log("Original price");
            break;
}

let dicountPrice = (price - discount).toFixed(2);

return dicountPrice;
}
console.log(calculateDiscount("Eletronics",80));
console.log(calculateDiscount("Clothing",350));
console.log();(calculateDiscount("Books",120));
