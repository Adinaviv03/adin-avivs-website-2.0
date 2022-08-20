
function a(url, name) {
  return `<a href="https://${url}">${name}</a>`
}

function timeDiff(date, lang) {
  // use this function to convert a date into a time ago string (i.e. 04/20/2022 --> 42 days ago)
  const dict =
  {
    y: "year",
    ys: "years",
    m: "month",
    ms: "months",
    hf: "and a half"
  }
  const today = new Date();
  const yearDiff = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  const total = yearDiff * 12 + monthDiff;
  const fullYears = Math.floor(total / 12);
  const semesters = Math.floor((total % 12) / 6);
  if (fullYears > 0) {
    return semesters == 0
      ? `${fullYears} ${fullYears == 1 ? dict.y : dict.ys}`
      : `${fullYears} ${fullYears == 1 ? dict.y : dict.ys} ${dict.hf}`;
  } else {
    return semesters == 0
      ? `${fullYears} ${fullYears == 1 ? dict.y : dict.ys}`
      : `${total} ${total == 1 ? dict.m : dict.ms}`;
  }
}

export const skills = {
  "en": [
    {
      "title": "Education",
      "icon": "./svg/education.svg",
      "content": `I am awesome. You are not.`
    },
    {
      "title": "Languages",
      "icon": "./svg/languages.svg",
      "content": ``
    }
  ],
}