import puppeteer from "puppeteer";
import fs from "fs/promises";
import readline from 'readline';

async function run(){
    const browser = await puppeteer.launch({
        headless: true
    });


    const fileData = await fs.readFile("test.txt", "utf-8");
    const clubs = fileData.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    clubs.splice(0, 1);
    console.log(clubs);
   
    const page = await browser.newPage();

    await page.goto("https://orgs.studentinvolvement.ufl.edu/organizations", {
        waitUntil: "networkidle2",
    });
    
    await browser.close();
}

run();