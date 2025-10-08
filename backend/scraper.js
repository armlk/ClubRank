import puppeteer from "puppeteer";

async function run(){
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    await page.goto("https://orgs.studentinvolvement.ufl.edu/organizations");

    const clubs = await page.evaluate(() => {
        const clubBoxes = document.querySelectorAll(".box-body");
        const data = [];

        clubBoxes.forEach((item) => {
            const name = item.querySelector(".box-title")?.textContent || "";
            data.push(name.trim());
        });

        return data;
    });

    console.log(clubs)
    
    await browser.close();

}

run();