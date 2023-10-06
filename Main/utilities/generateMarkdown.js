// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") return "";
  return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return `## License \n${licenseBadge}(${licenseLink})`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Features
  ${data.features}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## GitHub
  ${data.GitHub}

  ## email
  ${data.email}
`;
}

module.exports = generateMarkdown;
