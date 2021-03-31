
const generateMarkdown = (userinput) =>
`
# ${userinput.title}

![GitHub License](https://img.shields.io/badge/license-${userinput.license}-blue.svg)

---

## Table of Contents


* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)
* [Testing](#testing)



---

## Description
${userinput.description}

---

## Installation

${userinput.installation}


---

## Usage

${userinput.usage}

---

## Contributing

${userinput.contributing}

---

## License

This project is licensed under ${userinput.license}.

---

## Questions
If you have any questions or would like to contribute, head to my [GitHub Profile](https://github.com/${userinput.github})
Or shoot me an email at <${userinput.email}>.

---

 ## Testing
 
 ${userinput.test}
 
 `;

 module.exports = generateMarkdown;