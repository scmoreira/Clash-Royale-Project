const mongoose = require('mongoose')

const Location = require('../models/location.model.js')

mongoose.connect('mongodb://localhost/Clash-royal-project', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

Location.collection.drop()

const locations = [{
        "id": 57000000,
        "name": "Europe",
        "isCountry": false
    },
    {
        "id": 57000001,
        "name": "North America",
        "isCountry": false
    },
    {
        "id": 57000002,
        "name": "South America",
        "isCountry": false
    },
    {
        "id": 57000003,
        "name": "Asia",
        "isCountry": false
    },
    {
        "id": 57000004,
        "name": "Oceania",
        "isCountry": false
    },
    {
        "id": 57000005,
        "name": "Africa",
        "isCountry": false
    },
    {
        "id": 57000006,
        "name": "International",
        "isCountry": false
    },
    {
        "id": 57000007,
        "name": "Afghanistan",
        "isCountry": true,
        "countryCode": "AF"
    },
    {
        "id": 57000008,
        "name": "Åland Islands",
        "isCountry": true,
        "countryCode": "AX"
    },
    {
        "id": 57000009,
        "name": "Albania",
        "isCountry": true,
        "countryCode": "AL"
    },
    {
        "id": 57000010,
        "name": "Algeria",
        "isCountry": true,
        "countryCode": "DZ"
    },
    {
        "id": 57000011,
        "name": "American Samoa",
        "isCountry": true,
        "countryCode": "AS"
    },
    {
        "id": 57000012,
        "name": "Andorra",
        "isCountry": true,
        "countryCode": "AD"
    },
    {
        "id": 57000013,
        "name": "Angola",
        "isCountry": true,
        "countryCode": "AO"
    },
    {
        "id": 57000014,
        "name": "Anguilla",
        "isCountry": true,
        "countryCode": "AI"
    },
    {
        "id": 57000015,
        "name": "Antarctica",
        "isCountry": true,
        "countryCode": "AQ"
    },
    {
        "id": 57000016,
        "name": "Antigua and Barbuda",
        "isCountry": true,
        "countryCode": "AG"
    },
    {
        "id": 57000017,
        "name": "Argentina",
        "isCountry": true,
        "countryCode": "AR"
    },
    {
        "id": 57000018,
        "name": "Armenia",
        "isCountry": true,
        "countryCode": "AM"
    },
    {
        "id": 57000019,
        "name": "Aruba",
        "isCountry": true,
        "countryCode": "AW"
    },
    {
        "id": 57000020,
        "name": "Ascension Island",
        "isCountry": true,
        "countryCode": "AC"
    },
    {
        "id": 57000021,
        "name": "Australia",
        "isCountry": true,
        "countryCode": "AU"
    },
    {
        "id": 57000022,
        "name": "Austria",
        "isCountry": true,
        "countryCode": "AT"
    },
    {
        "id": 57000023,
        "name": "Azerbaijan",
        "isCountry": true,
        "countryCode": "AZ"
    },
    {
        "id": 57000024,
        "name": "Bahamas",
        "isCountry": true,
        "countryCode": "BS"
    },
    {
        "id": 57000025,
        "name": "Bahrain",
        "isCountry": true,
        "countryCode": "BH"
    },
    {
        "id": 57000026,
        "name": "Bangladesh",
        "isCountry": true,
        "countryCode": "BD"
    },
    {
        "id": 57000027,
        "name": "Barbados",
        "isCountry": true,
        "countryCode": "BB"
    },
    {
        "id": 57000028,
        "name": "Belarus",
        "isCountry": true,
        "countryCode": "BY"
    },
    {
        "id": 57000029,
        "name": "Belgium",
        "isCountry": true,
        "countryCode": "BE"
    },
    {
        "id": 57000030,
        "name": "Belize",
        "isCountry": true,
        "countryCode": "BZ"
    },
    {
        "id": 57000031,
        "name": "Benin",
        "isCountry": true,
        "countryCode": "BJ"
    },
    {
        "id": 57000032,
        "name": "Bermuda",
        "isCountry": true,
        "countryCode": "BM"
    },
    {
        "id": 57000033,
        "name": "Bhutan",
        "isCountry": true,
        "countryCode": "BT"
    },
    {
        "id": 57000034,
        "name": "Bolivia",
        "isCountry": true,
        "countryCode": "BO"
    },
    {
        "id": 57000035,
        "name": "Bosnia and Herzegovina",
        "isCountry": true,
        "countryCode": "BA"
    },
    {
        "id": 57000036,
        "name": "Botswana",
        "isCountry": true,
        "countryCode": "BW"
    },
    {
        "id": 57000037,
        "name": "Bouvet Island",
        "isCountry": true,
        "countryCode": "BV"
    },
    {
        "id": 57000038,
        "name": "Brazil",
        "isCountry": true,
        "countryCode": "BR"
    },
    {
        "id": 57000039,
        "name": "British Indian Ocean Territory",
        "isCountry": true,
        "countryCode": "IO"
    },
    {
        "id": 57000040,
        "name": "British Virgin Islands",
        "isCountry": true,
        "countryCode": "VG"
    },
    {
        "id": 57000041,
        "name": "Brunei",
        "isCountry": true,
        "countryCode": "BN"
    },
    {
        "id": 57000042,
        "name": "Bulgaria",
        "isCountry": true,
        "countryCode": "BG"
    },
    {
        "id": 57000043,
        "name": "Burkina Faso",
        "isCountry": true,
        "countryCode": "BF"
    },
    {
        "id": 57000044,
        "name": "Burundi",
        "isCountry": true,
        "countryCode": "BI"
    },
    {
        "id": 57000045,
        "name": "Cambodia",
        "isCountry": true,
        "countryCode": "KH"
    },
    {
        "id": 57000046,
        "name": "Cameroon",
        "isCountry": true,
        "countryCode": "CM"
    },
    {
        "id": 57000047,
        "name": "Canada",
        "isCountry": true,
        "countryCode": "CA"
    },
    {
        "id": 57000048,
        "name": "Canary Islands",
        "isCountry": true,
        "countryCode": "IC"
    },
    {
        "id": 57000049,
        "name": "Cape Verde",
        "isCountry": true,
        "countryCode": "CV"
    },
    {
        "id": 57000050,
        "name": "Caribbean Netherlands",
        "isCountry": true,
        "countryCode": "BQ"
    },
    {
        "id": 57000051,
        "name": "Cayman Islands",
        "isCountry": true,
        "countryCode": "KY"
    },
    {
        "id": 57000052,
        "name": "Central African Republic",
        "isCountry": true,
        "countryCode": "CF"
    },
    {
        "id": 57000053,
        "name": "Ceuta and Melilla",
        "isCountry": true,
        "countryCode": "EA"
    },
    {
        "id": 57000054,
        "name": "Chad",
        "isCountry": true,
        "countryCode": "TD"
    },
    {
        "id": 57000055,
        "name": "Chile",
        "isCountry": true,
        "countryCode": "CL"
    },
    {
        "id": 57000056,
        "name": "China",
        "isCountry": true,
        "countryCode": "CN"
    },
    {
        "id": 57000057,
        "name": "Christmas Island",
        "isCountry": true,
        "countryCode": "CX"
    },
    {
        "id": 57000058,
        "name": "Cocos (Keeling) Islands",
        "isCountry": true,
        "countryCode": "CC"
    },
    {
        "id": 57000059,
        "name": "Colombia",
        "isCountry": true,
        "countryCode": "CO"
    },
    {
        "id": 57000060,
        "name": "Comoros",
        "isCountry": true,
        "countryCode": "KM"
    },
    {
        "id": 57000061,
        "name": "Congo (DRC)",
        "isCountry": true,
        "countryCode": "CG"
    },
    {
        "id": 57000062,
        "name": "Congo (Republic)",
        "isCountry": true,
        "countryCode": "CD"
    },
    {
        "id": 57000063,
        "name": "Cook Islands",
        "isCountry": true,
        "countryCode": "CK"
    },
    {
        "id": 57000064,
        "name": "Costa Rica",
        "isCountry": true,
        "countryCode": "CR"
    },
    {
        "id": 57000065,
        "name": "Côte d’Ivoire",
        "isCountry": true,
        "countryCode": "CI"
    },
    {
        "id": 57000066,
        "name": "Croatia",
        "isCountry": true,
        "countryCode": "HR"
    },
    {
        "id": 57000067,
        "name": "Cuba",
        "isCountry": true,
        "countryCode": "CU"
    },
    {
        "id": 57000068,
        "name": "Curaçao",
        "isCountry": true,
        "countryCode": "CW"
    },
    {
        "id": 57000069,
        "name": "Cyprus",
        "isCountry": true,
        "countryCode": "CY"
    },
    {
        "id": 57000070,
        "name": "Czech Republic",
        "isCountry": true,
        "countryCode": "CZ"
    },
    {
        "id": 57000071,
        "name": "Denmark",
        "isCountry": true,
        "countryCode": "DK"
    },
    {
        "id": 57000072,
        "name": "Diego Garcia",
        "isCountry": true,
        "countryCode": "DG"
    },
    {
        "id": 57000073,
        "name": "Djibouti",
        "isCountry": true,
        "countryCode": "DJ"
    },
    {
        "id": 57000074,
        "name": "Dominica",
        "isCountry": true,
        "countryCode": "DM"
    },
    {
        "id": 57000075,
        "name": "Dominican Republic",
        "isCountry": true,
        "countryCode": "DO"
    },
    {
        "id": 57000076,
        "name": "Ecuador",
        "isCountry": true,
        "countryCode": "EC"
    },
    {
        "id": 57000077,
        "name": "Egypt",
        "isCountry": true,
        "countryCode": "EG"
    },
    {
        "id": 57000078,
        "name": "El Salvador",
        "isCountry": true,
        "countryCode": "SV"
    },
    {
        "id": 57000079,
        "name": "Equatorial Guinea",
        "isCountry": true,
        "countryCode": "GQ"
    },
    {
        "id": 57000080,
        "name": "Eritrea",
        "isCountry": true,
        "countryCode": "ER"
    },
    {
        "id": 57000081,
        "name": "Estonia",
        "isCountry": true,
        "countryCode": "EE"
    },
    {
        "id": 57000082,
        "name": "Ethiopia",
        "isCountry": true,
        "countryCode": "ET"
    },
    {
        "id": 57000083,
        "name": "Falkland Islands",
        "isCountry": true,
        "countryCode": "FK"
    },
    {
        "id": 57000084,
        "name": "Faroe Islands",
        "isCountry": true,
        "countryCode": "FO"
    },
    {
        "id": 57000085,
        "name": "Fiji",
        "isCountry": true,
        "countryCode": "FJ"
    },
    {
        "id": 57000086,
        "name": "Finland",
        "isCountry": true,
        "countryCode": "FI"
    },
    {
        "id": 57000087,
        "name": "France",
        "isCountry": true,
        "countryCode": "FR"
    },
    {
        "id": 57000088,
        "name": "French Guiana",
        "isCountry": true,
        "countryCode": "GF"
    },
    {
        "id": 57000089,
        "name": "French Polynesia",
        "isCountry": true,
        "countryCode": "PF"
    },
    {
        "id": 57000090,
        "name": "French Southern Territories",
        "isCountry": true,
        "countryCode": "TF"
    },
    {
        "id": 57000091,
        "name": "Gabon",
        "isCountry": true,
        "countryCode": "GA"
    },
    {
        "id": 57000092,
        "name": "Gambia",
        "isCountry": true,
        "countryCode": "GM"
    },
    {
        "id": 57000093,
        "name": "Georgia",
        "isCountry": true,
        "countryCode": "GE"
    },
    {
        "id": 57000094,
        "name": "Germany",
        "isCountry": true,
        "countryCode": "DE"
    },
    {
        "id": 57000095,
        "name": "Ghana",
        "isCountry": true,
        "countryCode": "GH"
    },
    {
        "id": 57000096,
        "name": "Gibraltar",
        "isCountry": true,
        "countryCode": "GI"
    },
    {
        "id": 57000097,
        "name": "Greece",
        "isCountry": true,
        "countryCode": "GR"
    },
    {
        "id": 57000098,
        "name": "Greenland",
        "isCountry": true,
        "countryCode": "GL"
    },
    {
        "id": 57000099,
        "name": "Grenada",
        "isCountry": true,
        "countryCode": "GD"
    },
    {
        "id": 57000100,
        "name": "Guadeloupe",
        "isCountry": true,
        "countryCode": "GP"
    },
    {
        "id": 57000101,
        "name": "Guam",
        "isCountry": true,
        "countryCode": "GU"
    },
    {
        "id": 57000102,
        "name": "Guatemala",
        "isCountry": true,
        "countryCode": "GT"
    },
    {
        "id": 57000103,
        "name": "Guernsey",
        "isCountry": true,
        "countryCode": "GG"
    },
    {
        "id": 57000104,
        "name": "Guinea",
        "isCountry": true,
        "countryCode": "GN"
    },
    {
        "id": 57000105,
        "name": "Guinea-Bissau",
        "isCountry": true,
        "countryCode": "GW"
    },
    {
        "id": 57000106,
        "name": "Guyana",
        "isCountry": true,
        "countryCode": "GY"
    },
    {
        "id": 57000107,
        "name": "Haiti",
        "isCountry": true,
        "countryCode": "HT"
    },
    {
        "id": 57000108,
        "name": "Heard & McDonald Islands",
        "isCountry": true,
        "countryCode": "HM"
    },
    {
        "id": 57000109,
        "name": "Honduras",
        "isCountry": true,
        "countryCode": "HN"
    },
    {
        "id": 57000110,
        "name": "Hong Kong",
        "isCountry": true,
        "countryCode": "HK"
    },
    {
        "id": 57000111,
        "name": "Hungary",
        "isCountry": true,
        "countryCode": "HU"
    },
    {
        "id": 57000112,
        "name": "Iceland",
        "isCountry": true,
        "countryCode": "IS"
    },
    {
        "id": 57000113,
        "name": "India",
        "isCountry": true,
        "countryCode": "IN"
    },
    {
        "id": 57000114,
        "name": "Indonesia",
        "isCountry": true,
        "countryCode": "ID"
    },
    {
        "id": 57000115,
        "name": "Iran",
        "isCountry": true,
        "countryCode": "IR"
    },
    {
        "id": 57000116,
        "name": "Iraq",
        "isCountry": true,
        "countryCode": "IQ"
    },
    {
        "id": 57000117,
        "name": "Ireland",
        "isCountry": true,
        "countryCode": "IE"
    },
    {
        "id": 57000118,
        "name": "Isle of Man",
        "isCountry": true,
        "countryCode": "IM"
    },
    {
        "id": 57000119,
        "name": "Israel",
        "isCountry": true,
        "countryCode": "IL"
    },
    {
        "id": 57000120,
        "name": "Italy",
        "isCountry": true,
        "countryCode": "IT"
    },
    {
        "id": 57000121,
        "name": "Jamaica",
        "isCountry": true,
        "countryCode": "JM"
    },
    {
        "id": 57000122,
        "name": "Japan",
        "isCountry": true,
        "countryCode": "JP"
    },
    {
        "id": 57000123,
        "name": "Jersey",
        "isCountry": true,
        "countryCode": "JE"
    },
    {
        "id": 57000124,
        "name": "Jordan",
        "isCountry": true,
        "countryCode": "JO"
    },
    {
        "id": 57000125,
        "name": "Kazakhstan",
        "isCountry": true,
        "countryCode": "KZ"
    },
    {
        "id": 57000126,
        "name": "Kenya",
        "isCountry": true,
        "countryCode": "KE"
    },
    {
        "id": 57000127,
        "name": "Kiribati",
        "isCountry": true,
        "countryCode": "KI"
    },
    {
        "id": 57000128,
        "name": "Kosovo",
        "isCountry": true,
        "countryCode": "XK"
    },
    {
        "id": 57000129,
        "name": "Kuwait",
        "isCountry": true,
        "countryCode": "KW"
    },
    {
        "id": 57000130,
        "name": "Kyrgyzstan",
        "isCountry": true,
        "countryCode": "KG"
    },
    {
        "id": 57000131,
        "name": "Laos",
        "isCountry": true,
        "countryCode": "LA"
    },
    {
        "id": 57000132,
        "name": "Latvia",
        "isCountry": true,
        "countryCode": "LV"
    },
    {
        "id": 57000133,
        "name": "Lebanon",
        "isCountry": true,
        "countryCode": "LB"
    },
    {
        "id": 57000134,
        "name": "Lesotho",
        "isCountry": true,
        "countryCode": "LS"
    },
    {
        "id": 57000135,
        "name": "Liberia",
        "isCountry": true,
        "countryCode": "LR"
    },
    {
        "id": 57000136,
        "name": "Libya",
        "isCountry": true,
        "countryCode": "LY"
    },
    {
        "id": 57000137,
        "name": "Liechtenstein",
        "isCountry": true,
        "countryCode": "LI"
    },
    {
        "id": 57000138,
        "name": "Lithuania",
        "isCountry": true,
        "countryCode": "LT"
    },
    {
        "id": 57000139,
        "name": "Luxembourg",
        "isCountry": true,
        "countryCode": "LU"
    },
    {
        "id": 57000140,
        "name": "Macau",
        "isCountry": true,
        "countryCode": "MO"
    },
    {
        "id": 57000141,
        "name": "Macedonia (FYROM)",
        "isCountry": true,
        "countryCode": "MK"
    },
    {
        "id": 57000142,
        "name": "Madagascar",
        "isCountry": true,
        "countryCode": "MG"
    },
    {
        "id": 57000143,
        "name": "Malawi",
        "isCountry": true,
        "countryCode": "MW"
    },
    {
        "id": 57000144,
        "name": "Malaysia",
        "isCountry": true,
        "countryCode": "MY"
    },
    {
        "id": 57000145,
        "name": "Maldives",
        "isCountry": true,
        "countryCode": "MV"
    },
    {
        "id": 57000146,
        "name": "Mali",
        "isCountry": true,
        "countryCode": "ML"
    },
    {
        "id": 57000147,
        "name": "Malta",
        "isCountry": true,
        "countryCode": "MT"
    },
    {
        "id": 57000148,
        "name": "Marshall Islands",
        "isCountry": true,
        "countryCode": "MH"
    },
    {
        "id": 57000149,
        "name": "Martinique",
        "isCountry": true,
        "countryCode": "MQ"
    },
    {
        "id": 57000150,
        "name": "Mauritania",
        "isCountry": true,
        "countryCode": "MR"
    },
    {
        "id": 57000151,
        "name": "Mauritius",
        "isCountry": true,
        "countryCode": "MU"
    },
    {
        "id": 57000152,
        "name": "Mayotte",
        "isCountry": true,
        "countryCode": "YT"
    },
    {
        "id": 57000153,
        "name": "Mexico",
        "isCountry": true,
        "countryCode": "MX"
    },
    {
        "id": 57000154,
        "name": "Micronesia",
        "isCountry": true,
        "countryCode": "FM"
    },
    {
        "id": 57000155,
        "name": "Moldova",
        "isCountry": true,
        "countryCode": "MD"
    },
    {
        "id": 57000156,
        "name": "Monaco",
        "isCountry": true,
        "countryCode": "MC"
    },
    {
        "id": 57000157,
        "name": "Mongolia",
        "isCountry": true,
        "countryCode": "MN"
    },
    {
        "id": 57000158,
        "name": "Montenegro",
        "isCountry": true,
        "countryCode": "ME"
    },
    {
        "id": 57000159,
        "name": "Montserrat",
        "isCountry": true,
        "countryCode": "MS"
    },
    {
        "id": 57000160,
        "name": "Morocco",
        "isCountry": true,
        "countryCode": "MA"
    },
    {
        "id": 57000161,
        "name": "Mozambique",
        "isCountry": true,
        "countryCode": "MZ"
    },
    {
        "id": 57000162,
        "name": "Myanmar (Burma)",
        "isCountry": true,
        "countryCode": "MM"
    },
    {
        "id": 57000163,
        "name": "Namibia",
        "isCountry": true,
        "countryCode": "NA"
    },
    {
        "id": 57000164,
        "name": "Nauru",
        "isCountry": true,
        "countryCode": "NR"
    },
    {
        "id": 57000165,
        "name": "Nepal",
        "isCountry": true,
        "countryCode": "NP"
    },
    {
        "id": 57000166,
        "name": "Netherlands",
        "isCountry": true,
        "countryCode": "NL"
    },
    {
        "id": 57000167,
        "name": "New Caledonia",
        "isCountry": true,
        "countryCode": "NC"
    },
    {
        "id": 57000168,
        "name": "New Zealand",
        "isCountry": true,
        "countryCode": "NZ"
    },
    {
        "id": 57000169,
        "name": "Nicaragua",
        "isCountry": true,
        "countryCode": "NI"
    },
    {
        "id": 57000170,
        "name": "Niger",
        "isCountry": true,
        "countryCode": "NE"
    },
    {
        "id": 57000171,
        "name": "Nigeria",
        "isCountry": true,
        "countryCode": "NG"
    },
    {
        "id": 57000172,
        "name": "Niue",
        "isCountry": true,
        "countryCode": "NU"
    },
    {
        "id": 57000173,
        "name": "Norfolk Island",
        "isCountry": true,
        "countryCode": "NF"
    },
    {
        "id": 57000174,
        "name": "North Korea",
        "isCountry": true,
        "countryCode": "KP"
    },
    {
        "id": 57000175,
        "name": "Northern Mariana Islands",
        "isCountry": true,
        "countryCode": "MP"
    },
    {
        "id": 57000176,
        "name": "Norway",
        "isCountry": true,
        "countryCode": "NO"
    },
    {
        "id": 57000177,
        "name": "Oman",
        "isCountry": true,
        "countryCode": "OM"
    },
    {
        "id": 57000178,
        "name": "Pakistan",
        "isCountry": true,
        "countryCode": "PK"
    },
    {
        "id": 57000179,
        "name": "Palau",
        "isCountry": true,
        "countryCode": "PW"
    },
    {
        "id": 57000180,
        "name": "Palestine",
        "isCountry": true,
        "countryCode": "PS"
    },
    {
        "id": 57000181,
        "name": "Panama",
        "isCountry": true,
        "countryCode": "PA"
    },
    {
        "id": 57000182,
        "name": "Papua New Guinea",
        "isCountry": true,
        "countryCode": "PG"
    },
    {
        "id": 57000183,
        "name": "Paraguay",
        "isCountry": true,
        "countryCode": "PY"
    },
    {
        "id": 57000184,
        "name": "Peru",
        "isCountry": true,
        "countryCode": "PE"
    },
    {
        "id": 57000185,
        "name": "Philippines",
        "isCountry": true,
        "countryCode": "PH"
    },
    {
        "id": 57000186,
        "name": "Pitcairn Islands",
        "isCountry": true,
        "countryCode": "PN"
    },
    {
        "id": 57000187,
        "name": "Poland",
        "isCountry": true,
        "countryCode": "PL"
    },
    {
        "id": 57000188,
        "name": "Portugal",
        "isCountry": true,
        "countryCode": "PT"
    },
    {
        "id": 57000189,
        "name": "Puerto Rico",
        "isCountry": true,
        "countryCode": "PR"
    },
    {
        "id": 57000190,
        "name": "Qatar",
        "isCountry": true,
        "countryCode": "QA"
    },
    {
        "id": 57000191,
        "name": "Réunion",
        "isCountry": true,
        "countryCode": "RE"
    },
    {
        "id": 57000192,
        "name": "Romania",
        "isCountry": true,
        "countryCode": "RO"
    },
    {
        "id": 57000193,
        "name": "Russia",
        "isCountry": true,
        "countryCode": "RU"
    },
    {
        "id": 57000194,
        "name": "Rwanda",
        "isCountry": true,
        "countryCode": "RW"
    },
    {
        "id": 57000195,
        "name": "Saint Barthélemy",
        "isCountry": true,
        "countryCode": "BL"
    },
    {
        "id": 57000196,
        "name": "Saint Helena",
        "isCountry": true,
        "countryCode": "SH"
    },
    {
        "id": 57000197,
        "name": "Saint Kitts and Nevis",
        "isCountry": true,
        "countryCode": "KN"
    },
    {
        "id": 57000198,
        "name": "Saint Lucia",
        "isCountry": true,
        "countryCode": "LC"
    },
    {
        "id": 57000199,
        "name": "Saint Martin",
        "isCountry": true,
        "countryCode": "MF"
    },
    {
        "id": 57000200,
        "name": "Saint Pierre and Miquelon",
        "isCountry": true,
        "countryCode": "PM"
    },
    {
        "id": 57000201,
        "name": "Samoa",
        "isCountry": true,
        "countryCode": "WS"
    },
    {
        "id": 57000202,
        "name": "San Marino",
        "isCountry": true,
        "countryCode": "SM"
    },
    {
        "id": 57000203,
        "name": "São Tomé and Príncipe",
        "isCountry": true,
        "countryCode": "ST"
    },
    {
        "id": 57000204,
        "name": "Saudi Arabia",
        "isCountry": true,
        "countryCode": "SA"
    },
    {
        "id": 57000205,
        "name": "Senegal",
        "isCountry": true,
        "countryCode": "SN"
    },
    {
        "id": 57000206,
        "name": "Serbia",
        "isCountry": true,
        "countryCode": "RS"
    },
    {
        "id": 57000207,
        "name": "Seychelles",
        "isCountry": true,
        "countryCode": "SC"
    },
    {
        "id": 57000208,
        "name": "Sierra Leone",
        "isCountry": true,
        "countryCode": "SL"
    },
    {
        "id": 57000209,
        "name": "Singapore",
        "isCountry": true,
        "countryCode": "SG"
    },
    {
        "id": 57000210,
        "name": "Sint Maarten",
        "isCountry": true,
        "countryCode": "SX"
    },
    {
        "id": 57000211,
        "name": "Slovakia",
        "isCountry": true,
        "countryCode": "SK"
    },
    {
        "id": 57000212,
        "name": "Slovenia",
        "isCountry": true,
        "countryCode": "SI"
    },
    {
        "id": 57000213,
        "name": "Solomon Islands",
        "isCountry": true,
        "countryCode": "SB"
    },
    {
        "id": 57000214,
        "name": "Somalia",
        "isCountry": true,
        "countryCode": "SO"
    },
    {
        "id": 57000215,
        "name": "South Africa",
        "isCountry": true,
        "countryCode": "ZA"
    },
    {
        "id": 57000216,
        "name": "South Korea",
        "isCountry": true,
        "countryCode": "KR"
    },
    {
        "id": 57000217,
        "name": "South Sudan",
        "isCountry": true,
        "countryCode": "SS"
    },
    {
        "id": 57000218,
        "name": "Spain",
        "isCountry": true,
        "countryCode": "ES"
    },
    {
        "id": 57000219,
        "name": "Sri Lanka",
        "isCountry": true,
        "countryCode": "LK"
    },
    {
        "id": 57000220,
        "name": "St. Vincent & Grenadines",
        "isCountry": true,
        "countryCode": "VC"
    },
    {
        "id": 57000221,
        "name": "Sudan",
        "isCountry": true,
        "countryCode": "SD"
    },
    {
        "id": 57000222,
        "name": "Suriname",
        "isCountry": true,
        "countryCode": "SR"
    },
    {
        "id": 57000223,
        "name": "Svalbard and Jan Mayen",
        "isCountry": true,
        "countryCode": "SJ"
    },
    {
        "id": 57000224,
        "name": "Swaziland",
        "isCountry": true,
        "countryCode": "SZ"
    },
    {
        "id": 57000225,
        "name": "Sweden",
        "isCountry": true,
        "countryCode": "SE"
    },
    {
        "id": 57000226,
        "name": "Switzerland",
        "isCountry": true,
        "countryCode": "CH"
    },
    {
        "id": 57000227,
        "name": "Syria",
        "isCountry": true,
        "countryCode": "SY"
    },
    {
        "id": 57000228,
        "name": "Taiwan",
        "isCountry": true,
        "countryCode": "TW"
    },
    {
        "id": 57000229,
        "name": "Tajikistan",
        "isCountry": true,
        "countryCode": "TJ"
    },
    {
        "id": 57000230,
        "name": "Tanzania",
        "isCountry": true,
        "countryCode": "TZ"
    },
    {
        "id": 57000231,
        "name": "Thailand",
        "isCountry": true,
        "countryCode": "TH"
    },
    {
        "id": 57000232,
        "name": "Timor-Leste",
        "isCountry": true,
        "countryCode": "TL"
    },
    {
        "id": 57000233,
        "name": "Togo",
        "isCountry": true,
        "countryCode": "TG"
    },
    {
        "id": 57000234,
        "name": "Tokelau",
        "isCountry": true,
        "countryCode": "TK"
    },
    {
        "id": 57000235,
        "name": "Tonga",
        "isCountry": true,
        "countryCode": "TO"
    },
    {
        "id": 57000236,
        "name": "Trinidad and Tobago",
        "isCountry": true,
        "countryCode": "TT"
    },
    {
        "id": 57000237,
        "name": "Tristan da Cunha",
        "isCountry": true,
        "countryCode": "TA"
    },
    {
        "id": 57000238,
        "name": "Tunisia",
        "isCountry": true,
        "countryCode": "TN"
    },
    {
        "id": 57000239,
        "name": "Turkey",
        "isCountry": true,
        "countryCode": "TR"
    },
    {
        "id": 57000240,
        "name": "Turkmenistan",
        "isCountry": true,
        "countryCode": "TM"
    },
    {
        "id": 57000241,
        "name": "Turks and Caicos Islands",
        "isCountry": true,
        "countryCode": "TC"
    },
    {
        "id": 57000242,
        "name": "Tuvalu",
        "isCountry": true,
        "countryCode": "TV"
    },
    {
        "id": 57000243,
        "name": "U.S. Outlying Islands",
        "isCountry": true,
        "countryCode": "UM"
    },
    {
        "id": 57000244,
        "name": "U.S. Virgin Islands",
        "isCountry": true,
        "countryCode": "VI"
    },
    {
        "id": 57000245,
        "name": "Uganda",
        "isCountry": true,
        "countryCode": "UG"
    },
    {
        "id": 57000246,
        "name": "Ukraine",
        "isCountry": true,
        "countryCode": "UA"
    },
    {
        "id": 57000247,
        "name": "United Arab Emirates",
        "isCountry": true,
        "countryCode": "AE"
    },
    {
        "id": 57000248,
        "name": "United Kingdom",
        "isCountry": true,
        "countryCode": "GB"
    },
    {
        "id": 57000249,
        "name": "United States",
        "isCountry": true,
        "countryCode": "US"
    },
    {
        "id": 57000250,
        "name": "Uruguay",
        "isCountry": true,
        "countryCode": "UY"
    },
    {
        "id": 57000251,
        "name": "Uzbekistan",
        "isCountry": true,
        "countryCode": "UZ"
    },
    {
        "id": 57000252,
        "name": "Vanuatu",
        "isCountry": true,
        "countryCode": "VU"
    },
    {
        "id": 57000253,
        "name": "Vatican City",
        "isCountry": true,
        "countryCode": "VA"
    },
    {
        "id": 57000254,
        "name": "Venezuela",
        "isCountry": true,
        "countryCode": "VE"
    },
    {
        "id": 57000255,
        "name": "Vietnam",
        "isCountry": true,
        "countryCode": "VN"
    },
    {
        "id": 57000256,
        "name": "Wallis and Futuna",
        "isCountry": true,
        "countryCode": "WF"
    },
    {
        "id": 57000257,
        "name": "Western Sahara",
        "isCountry": true,
        "countryCode": "EH"
    },
    {
        "id": 57000258,
        "name": "Yemen",
        "isCountry": true,
        "countryCode": "YE"
    },
    {
        "id": 57000259,
        "name": "Zambia",
        "isCountry": true,
        "countryCode": "ZM"
    },
    {
        "id": 57000260,
        "name": "Zimbabwe",
        "isCountry": true,
        "countryCode": "ZW"
    }
]

Location.create(locations)
    .then(allLocations => console.log(allLocations.length, ' location have been created'))
    .catch(err => console.log(err))