import fs from "fs-extra";

import axios from "axios";

const INITIAL_ID_XKCD_COMICS = 2500;
const MAX_ID_XKCD_COMICS = 2588;

let id;
for (id = INITIAL_ID_XKCD_COMICS; id < MAX_ID_XKCD_COMICS; id++) {
    const url = `https://xkcd.com/${id}/info.0.json`;
    const {data} = await axios.get(url);
    const {num, news, transcript, ...restOfComic} = data;
    const comicToStore = {id, ...restOfComic};
    await fs.writeJson(`./comics/${id}.json`, comicToStore, {spaces: 2});
    console.log(data);
}