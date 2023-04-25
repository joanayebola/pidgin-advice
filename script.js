var quotes = ['"Na from Clap dem dey enter dance"', '"If you no get money, no hide your face. Show your face make person help you"',
    '"Jollof Rice wey dey for bottom of pot today go dey for top of cooler tomorrow"', '"Wetin dey hot dey cold, no rush life"',
    '"Loyalty wey never see money, fear am oo"', '"Na cooperation dey make rice full pot"', '"E go beta!"',
    '"No matter how hot your tempa be, e no fit boil beans"', '"Because of those wey never make am today na why tomorrow dey"',
    '"If giver no dey careful, beggar go first am build house"', '"Say Lion dey sick no mean say im wit cat na mate"', '"First class no be who collect extra sheet"',
    '"Na only you waka come"', '"Instead make you find beef, find money"', '"No criticise wetin you no know"'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('advice').innerText = quotes[randomNumber]
}

