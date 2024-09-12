import { buildUrl } from "./functions.js";

chrome.omnibox.onInputEntered.addListener(function (text) {
  chrome.tabs.update({ url: buildUrl(text) });
});
