const express = require("express");
const fs = require("fs");
const app = express()
const port = 80;
const path = require("path")
const fetch = require('node-fetch');
const { data } = require("jquery");

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


let url = "https://api.wazirx.com/api/v2/tickers";

let settings = { method: "Get" };

const list_10 = fetch(url, settings)
.then(res => res.json())
.then((json) => {
        raw_data = fs.readFileSync("D:/QuardB/tickers.json");
        let data = JSON.parse(raw_data);
        high_compare_dict = {}
        high_list = []
        for (x in data) {
            let name = data[x];
            let high = Number(data[x]["high"])
            high_list.push(high)
            high_compare_dict[x] = high;
        }


        var items = Object.keys(high_compare_dict).map(function (key) {
            return [key, high_compare_dict[key]];
        });

        items.sort(function (first, second) {
            return second[1] - first[1];
        });
        var top_10 = items.slice(0, 10);
        name1 = data[top_10[0][0]]["name"];
        name2 = data[top_10[1][0]]["name"];
        name3 = data[top_10[2][0]]["name"];
        name4 = data[top_10[3][0]]["name"];
        name5 = data[top_10[4][0]]["name"];
        name6 = data[top_10[5][0]]["name"];
        name7 = data[top_10[6][0]]["name"];
        name8 = data[top_10[7][0]]["name"];
        name9 = data[top_10[8][0]]["name"];
        name10 = data[top_10[9][0]]["name"];

        last1 = data[top_10[0][0]]["last"];
        last2 = data[top_10[1][0]]["last"];
        last3 = data[top_10[2][0]]["last"];
        last4 = data[top_10[3][0]]["last"];
        last5 = data[top_10[4][0]]["last"];
        last6 = data[top_10[5][0]]["last"];
        last7 = data[top_10[6][0]]["last"];
        last8 = data[top_10[7][0]]["last"];
        last9 = data[top_10[8][0]]["last"];
        last10 = data[top_10[9][0]]["last"];

        volume1= data[top_10[0][0]]["volume"];
        volume2= data[top_10[1][0]]["volume"];
        volume3= data[top_10[2][0]]["volume"];
        volume4= data[top_10[3][0]]["volume"];
        volume5= data[top_10[4][0]]["volume"];
        volume6= data[top_10[5][0]]["volume"];
        volume7= data[top_10[6][0]]["volume"];
        volume8= data[top_10[7][0]]["volume"];
        volume9= data[top_10[8][0]]["volume"];
        volume10= data[top_10[9][0]]["volume"];

        base_unit1= data[top_10[0][0]]["base_unit"];
        base_unit2= data[top_10[1][0]]["base_unit"];
        base_unit3= data[top_10[2][0]]["base_unit"];
        base_unit4= data[top_10[3][0]]["base_unit"];
        base_unit5= data[top_10[4][0]]["base_unit"];
        base_unit6= data[top_10[5][0]]["base_unit"];
        base_unit7= data[top_10[6][0]]["base_unit"];
        base_unit8= data[top_10[7][0]]["base_unit"];
        base_unit9= data[top_10[8][0]]["base_unit"];
        base_unit10= data[top_10[9][0]]["base_unit"];

        buy_sell1= `₹${data[top_10[0][0]]["buy"]} / ₹${data[top_10[0][0]]["sell"]}`;
        buy_sell2= `₹${data[top_10[1][0]]["buy"]} / ₹${data[top_10[1][0]]["sell"]}`;
        buy_sell3= `₹${data[top_10[2][0]]["buy"]} / ₹${data[top_10[2][0]]["sell"]}`;
        buy_sell4= `₹${data[top_10[3][0]]["buy"]} / ₹${data[top_10[3][0]]["sell"]}`;
        buy_sell5= `₹${data[top_10[4][0]]["buy"]} / ₹${data[top_10[4][0]]["sell"]}`;
        buy_sell6= `₹${data[top_10[5][0]]["buy"]} / ₹${data[top_10[5][0]]["sell"]}`;
        buy_sell7= `₹${data[top_10[6][0]]["buy"]} / ₹${data[top_10[6][0]]["sell"]}`;
        buy_sell8= `₹${data[top_10[7][0]]["buy"]} / ₹${data[top_10[7][0]]["sell"]}`;
        buy_sell9= `₹${data[top_10[8][0]]["buy"]} / ₹${data[top_10[8][0]]["sell"]}`;
        buy_sell10= `₹${data[top_10[9][0]]["buy"]} / ₹${data[top_10[9][0]]["sell"]}`;

        params = {
            name1:name1,
            last1:last1,
            buy_sell1:buy_sell1,
            volume1:volume1,
            base_unit1:base_unit1,
            name2:name2,
            name3:name3,
            name4:name4,
            name5:name5,
            name6:name6,
            name7:name7,
            name8:name8,
            name9:name9,
            name10:name10,
            volume2:volume2,
            volume3:volume3,
            volume4:volume4,
            volume5:volume5,
            volume6:volume6,
            volume7:volume7,
            volume8:volume8,
            volume9:volume9,
            volume10:volume10,
            last2:last2,
            last3:last3,
            last4:last4,
            last5:last5,
            last6:last6,
            last7:last7,
            last8:last8,
            last9:last9,
            last10:last10,
            base_unit2:base_unit2,
            base_unit3:base_unit3,
            base_unit4:base_unit4,
            base_unit5:base_unit5,
            base_unit6:base_unit6,
            base_unit7:base_unit7,
            base_unit8:base_unit8,
            base_unit9:base_unit9,
            base_unit10:base_unit10,
            buy_sell2:buy_sell2,
            buy_sell3:buy_sell3,
            buy_sell4:buy_sell4,
            buy_sell5:buy_sell5,
            buy_sell6:buy_sell6,
            buy_sell7:buy_sell7,
            buy_sell8:buy_sell8,
            buy_sell9:buy_sell9,
            buy_sell10:buy_sell10
        }
        
        app.get("/", (req, res) => {
            res.render("homepage",params)
        })

    
    })

app.listen(port, () => {
    console.log(`server started at 127.0.0.1::${port}`)
})
