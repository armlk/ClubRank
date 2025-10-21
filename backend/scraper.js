import puppeteer from "puppeteer";
import fs from "fs/promises";
import readline from 'readline';

async function run(){
    const browser = await puppeteer.launch({
        headless: true
    });


    const fileData = await fs.readFile("clubs.txt", "utf-8");
    const clubs = fileData.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    clubs.splice(0, 1);
   
    const page = await browser.newPage();

    await page.goto("https://orgs.studentinvolvement.ufl.edu/organizations", {
        waitUntil: "networkidle2",
    });

    let results = [];

for (let club of clubs) {
    
    await page.evaluate(() => document.querySelector(".form-control").value = "");
    await page.type(".form-control", club);
    await page.keyboard.press("Enter");
    await page.waitForSelector(".box-body");

    const data = await page.evaluate(() => {
        const clubBoxes = document.querySelectorAll(".box-body");
        if (clubBoxes.length === 0) return { description: "" };

        const description = clubBoxes[0].querySelector("p.ng-binding");
        const descVal = description ? description.textContent.trim() : "";
        return { description: descVal };
    });

    results.push({
        name: club,
        description: data.description
    });
}

console.log(results);

    
    await browser.close();
}

run();