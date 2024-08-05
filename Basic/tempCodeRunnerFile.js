let season
let month = "august"

switch (month) {
    case "january":
    case "february":
    case "march":
        season = "winter"
    break
    case "april":
    case "may":
    case "june":
        season = "spring"
    break
    case "july":
    case "august":
    case "september":
        season = "summer"
    break
    case "october":
    case "november":
    case "december":
        season = "autumn"
    break
    default:
        season = "Invalid month"
}
console.log(season)