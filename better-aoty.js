// ==UserScript==
// @name        Better AOTY
// @namespace   https://github.com/om3ga6400/better-aoty/
// @icon
// @version     1.1.2
//
// @match       *://www.albumoftheyear.org/*
// @run-at      document-end
// @grant       none
//
// @author      -
// @description QoL mod for AOTY
// ==/UserScript==

document.querySelectorAll(".ratingRow").forEach((row) => {
  if (row.querySelector(".ratingText")?.textContent.trim() === "critic score") row.remove();
});

document.querySelectorAll(".ratingText").forEach((text) => {
  if (text.textContent.trim() === "user score") text.remove();
});

document.querySelectorAll(".albumCriticScoreBox").forEach((el) => el.remove());
document.querySelectorAll(".artistCriticScoreBox").forEach((el) => el.remove());
document.querySelectorAll("#critics").forEach((el) => el.remove());

document.querySelectorAll("div.section").forEach((section) => {
  if (section.querySelector("form")) return;
  if (section.textContent.includes("Critic")) section.remove();
});

document.querySelectorAll("a").forEach((link) => {
  if (link.textContent.includes("Critic")) link.remove();
});

document.querySelectorAll('a.noUnderline[href="/subscribe/"]').forEach((link) => link.remove());
document.querySelectorAll('a[href="/subscribe/"]').forEach((link) => link.remove());

document.querySelectorAll(".rightContent").forEach((el) => {
  if (!el.textContent.includes("Featured Genres") && !el.textContent.includes("About") && !el.textContent.includes("Track List")) el.remove();
});

document.querySelectorAll(".rightBox").forEach((box) => {
  if (box.textContent.includes("LINKS")) box.remove();
});

document.querySelectorAll(".section").forEach((section) => {
  if (section.querySelector("form")) return;
  if (section.textContent.includes("You May Also Like")) section.remove();
});

document.querySelectorAll(".selectRow").forEach((row) => {
  if (row.children.length === 1) row.remove();
});

document.querySelectorAll(".adTagTwo").forEach((el) => el.remove());
document.querySelectorAll(".albumListLinks").forEach((el) => el.remove());
document.querySelectorAll(".footerButtons").forEach((el) => el.remove());
document.querySelectorAll("i.fa-light.fa-users").forEach((el) => el.remove());
document.querySelectorAll(".sectionDonors").forEach((el) => el.remove());

document.querySelector('div.navBlock a[href="/lists.php"]')?.setAttribute("href", "/lists/users/");

document.head.insertAdjacentHTML("beforeend", "<style>.albumUserScoreBox,.artistUserScoreBox{border-top-left-radius:10px;border-top-right-radius:10px;}.albumTopBox .albumHeadline{text-align:center;}</style>");

document.querySelector(".action.showMoreStats")?.click();

document.querySelector(".albumTopBox:not(.cover):not(.info)")?.insertBefore(document.querySelector(".albumHeadline"), document.querySelector(".albumTopBox:not(.cover):not(.info)")?.firstChild);

document.querySelectorAll('a[href*="/genre/"]').forEach((link) => {
  const match = link.href.match(/\/genre\/\d+-([^/]+)\/(\d+)\//);
  if (match) link.href = `/ratings/user-highest-rated/${match[2]}/${match[1]}/`;
});

document.querySelectorAll("h1.headline").forEach((heading) => {
  heading.textContent = heading.textContent.replace("Users' ", "").replace(" by User Score", "");
});
