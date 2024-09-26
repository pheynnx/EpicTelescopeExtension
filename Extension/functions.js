function trimAlligators(searchText) {
  if (searchText.slice(0, 1) == "<" && searchText.slice(-1) == ">") {
    return searchText.slice(1, -1);
  } else {
    return searchText;
  }
}

function prepSearchString(searchText) {
  return encodeURIComponent(trimAlligators(searchText));
}

export function buildUrl(text) {
  // use a constant if the URL is getting reused
  const galaxyInitialURL = "https://galaxy.epic.com/?#Search/searchWord=";
  const dhInitialURL = "https://datahandbook.epic.com/Search/Index?SearchWord=";
  const novaInitialURL = "https://nova.epic.com/";
  const sherlockInitialURL = "https://sherlock.epic.com/default.aspx?";
  const communityLibraryURL = "https://comlib.epic.com";
  const systemPulseURL = "https://systempulse.epic.com";

  // if user enters a keyword after the omnibox keyword, redirect search to different destination
  const splitText = text.split(" ");
  const firstWord = splitText[0];
  const secondWord = splitText[1];

  // initalize newURL constructor variable
  let newURL;

  switch (firstWord.toLowerCase()) {
    case "sherlock":
    case "slg":
      if (secondWord.toLowerCase() === "new") {
        newURL = sherlockInitialURL + "view=slg/create";
      } else if (isNaN(secondWord)) {
        newURL =
          sherlockInitialURL +
          "view=slg/search#txt=" +
          prepSearchString(text.substring(firstWord.length + 1));
      } else {
        newURL =
          sherlockInitialURL + "view=slg/home#id=" + secondWord + "&view=1";
      }
      break;
    case "ra":
      newURL =
        sherlockInitialURL +
        "view=ra/search#txt=" +
        prepSearchString(text.substring(firstWord.length + 1));
      break;
    case "nova":
      if (isNaN(secondWord)) {
        newURL =
          novaInitialURL +
          "Search.aspx#addPt1&SearchTerm=" +
          prepSearchString(text.substring(firstWord.length + 1));
      } else {
        newURL = novaInitialURL + "Select.aspx?RnID=" + secondWord;
      }
      break;
    case "topic":
      newURL =
        "https://userweb.epic.com/Search?Query=" +
        prepSearchString(text.substring(firstWord.length + 1));
      break;
    case "galaxy":
      newURL =
        galaxyInitialURL +
        prepSearchString(text.substring(firstWord.length + 1));
      break;
    case "dh":
      newURL =
        dhInitialURL +
        prepSearchString(text.substring(firstWord.length + 1)) +
        "&type=1&scf=1,2,3&auf=1";
      break;
    case "cdd":
      newURL =
        dhInitialURL +
        prepSearchString(text.substring(firstWord.length + 1)) +
        "&type=6";
      break;
    case "webserv":
      newURL =
        dhInitialURL +
        prepSearchString(text.substring(firstWord.length + 1)) +
        "&type=5&def=0";
      break;
    case "pg":
      newURL =
        dhInitialURL +
        prepSearchString(text.substring(firstWord.length + 1)) +
        "&type=2";
      break;
    case "metric":
      newURL = dhInitialURL + prepSearchString(text.substring(7)) + "&type=4";
      break;
    case "cl":
      newURL =
        communityLibraryURL +
        "/#?query=" +
        prepSearchString(text.substring(firstWord.length + 1));
      break;
    case "sp":
      newURL = systemPulseURL;
      break;
    default:
      newURL = galaxyInitialURL + prepSearchString(text);
  }
  return newURL;
}
