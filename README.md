# generator-alfred-python

> Generator to scaffold out a new Alfred workflow using python

This generator will generate a basic Alfred workflow with the Alfred-Workflow library.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-alfred-python using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-alfred-python
```

Create a new blank workflow in Alfred and open that workflow in terminal or navigate to it.

Then generate your new workflow in that directory:

```bash
yo alfred-python
```

You might notice there is a `setup.cfg` file.  I refer you to [this stackoverflow issue and answer](https://stackoverflow.com/a/44728772).  I have been having an issue installing pip libraries with the `--target` flag and this is to fix that.

## 3rd Party Dependencies

Would you like to use libaries other than Alfred-Workflow? Well it is pretty easy.  Just add them to `requirements.txt` and run:

```bash
./install-libraries.sh
```

and it will take care of everything for you!

Refer to [Alfred-Workflow](https://www.deanishe.net/alfred-workflow/index.html) documentation for how to continue developing your new workflow.
