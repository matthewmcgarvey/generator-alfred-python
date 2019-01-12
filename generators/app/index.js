'use strict';
const Generator = require('yeoman-generator');
const exec = require('child_process').exec;

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
      this.templatePath('requirements.txt'),
      this.destinationPath('requirements.txt'),
    );
    this.fs.copy(
      this.templatePath('setup.cfg'),
      this.destinationPath('setup.cfg'),
    );
    this.fs.copy(
      this.templatePath('install-requirements.sh'),
      this.destinationPath('install-requirements.sh'),
    );
  }

  install() {
    exec('./install-requirements.sh');
  }
};
