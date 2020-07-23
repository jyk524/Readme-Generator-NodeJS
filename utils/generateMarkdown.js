// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

  ### Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contribute](#contribute)
  6. [Test](#test)
  7. [Questions](#questions)
  8. [Links and Email](#linksandemail)
  
  ### Description
  * ${data.description}
  ### Installation
  * ${data.installation}
  ### Usage
  * ${data.usage}
  ### License
  * ${data.license}
  ### Contribute
  * ${data.contribute}
  ### Test
  * ${data.test}
  ### Questions
  * ${data.questions}
  ### Links and Email
  * (https://github.com/${data.github})
  * ${data.email}
`;
}

module.exports = generateMarkdown;
