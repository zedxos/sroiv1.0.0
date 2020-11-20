const Fetch = require("node-fetch")
const Joker = require('one-liner-joke');
const crypto = require("crypto");

module.exports = {
  DiscordSpoiler: async function (String, EmbedColor) {
        if (!String) throw new Error(`Please Give Something As Data!`);
        if (String.length > 1500) throw new Error(`String Length Limit - 1500`)

        let Result = `||${String}||`;

        if (!Result) throw new Error(`Something Went Wrong, Try Again Later!`);

        let Data = {
            embed: {
                color: EmbedColor || "RANDOM",
                description: Result,
                timestamp: new Date()
            }
        };

        return Data;
    },
  GetMeme: async function (EmbedColor) {
        let res = await Fetch(`https://apis.duncte123.me/meme`);

        let { data } = await res.json();

        if (!data || !data.title || !data.url || !data.image) throw new Error("Something Went Wrong, Try Again Later!");

        let Data = {
            embed: {
                color: EmbedColor || "GREEN",
                title: data.title,
                url: data.url,
                image: {
                    url: data.image
                },
                timestamp: new Date()
            }
        };

        return Data;
    }
}
