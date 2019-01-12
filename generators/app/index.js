'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.props = await this.prompt([
      {
        type: 'string',
        name: 'name',
        message: 'What would you like to name your workflow?',
        default: 'hacker-news'
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('info.plist'),
      this.destinationPath('info.plist'),
      {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('foo.py'),
      this.destinationPath(`${this.props.name}.py`)
    );
    this.fs.copy(
      this.templatePath('workflow/'),
      this.destinationPath('workflow/'),
    );
  }
};
