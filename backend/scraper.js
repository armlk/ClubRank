import puppeteer from "puppeteer";

async function run(){
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    await page.goto("https://orgs.studentinvolvement.ufl.edu/organizations#!#searchresults", {
        waitUntil: "networkidle2",
    });

    const clubs = await page.evaluate(() => {
        const clubBoxes = document.querySelectorAll(".box-body");
        const data = [];

        clubBoxes.forEach((item) => {
            const name = item.querySelector(".box-title")
            const description = item.querySelector("p.ng-binding")

            nameVal = name ? name.textContent.trim() : "";
            descVal = description ? description.textContent.trim() : "";

            data.push({
                name: nameVal,
                description: descVal
            });
        });

        return data;
    });

    console.log(clubs)
    
    await browser.close();

}

run();