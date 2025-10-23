import puppeteer from "puppeteer";
import fs from "fs/promises";

async function run() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const fileData = await fs.readFile("clubs.txt", "utf-8");
    const clubs = fileData.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    clubs.splice(0, 1);

    await page.goto("https://orgs.studentinvolvement.ufl.edu/organizations", {
        waitUntil: "networkidle2",
    });

    const results = [];

    for (let club of clubs) {
        
        await page.evaluate(() => document.querySelector(".form-control").value = "");
        await page.type(".form-control", club);
        await page.keyboard.press("Enter");

        await page.waitForSelector(".box-body");

        const data = await page.$$eval(".box-body", (boxes, clubName) => {
            
            const box = Array.from(boxes).find(b =>
                b.querySelector(".box-title a")?.textContent.trim().toLowerCase() === clubName.toLowerCase()
            );

            if (!box) {
                return { description: "" };
            }

            const desc = box.querySelector("p.ng-binding");
            return { description: desc ? desc.textContent.trim() : "" };

        }, club);

        results.push({
            name: club,
            description: data.description
        });

    }

    console.log(results);

    await browser.close();
}

run();
