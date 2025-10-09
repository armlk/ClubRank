from pdfminer.high_level import extract_text
import re

text = extract_text("../OrganizationList.pdf")
print(text)

replaceDict = {
    '\n\n': '\n',
    "Department of Student Activities and Involvement\n": "",
    "Directory of Organizations\n": "",
    "Page \d+ of \d+\n": "",
    "Copyright \d{4} The University of Florida\n": "",
    "Department of Student Activities and Involvement\n": "",
    "Correct as of \d{2}\/\d{2}\/\d{4} \d{2}:\d{2} (PM|AM)\n": "",
    "Number of Organizations: \d+\n": "",
    "": "",
    "�" :"'",
    "\nOrganization\n": "",

}

for key, value in replaceDict.items():
    text = re.sub(key, value,text)



with open("test.txt", 'w') as test:
    test.write(text)