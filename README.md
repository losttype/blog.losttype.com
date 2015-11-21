# blog.losttype.com

[The Lost Type Co-op blog.](http://blog.losttype.com)

## Getting started

The Lost Type Co-op blog is a static site, with [Prose](https://github.com/losttype/prose) connected to a GitHub repo as its content management system. When changes are made, the site is rebuilt using continuous integration and deployed to [Surge](https://surge.sh).

The blog is developed using a static site generator built in [Node.js](https://nodejs.org), so if you’d like to run the site locally, you’ll need to install that first. You don’t need to have any experience with Node.js to contribute to the site, it’s simply the tool used to run the tools that build the site.

Once you have Node.js installed, you’ll also have [npm](https://npmjs.org) available on your system. npm is the package manager for JavaScript, which will allow you to install all the components we use the build the site.

- [Install git](https://git-scm.com)
- [Install Node.js](https://nodejs.org)

Run the following commands:

```sh
# Clone the project
git clone https://github.com/losttype/blog.losttype.com.git

# Move into the project directory
cd blog.losttype.com

# Install dependencies using npm
npm install

# Start the project
npm start

# Now available in your browser at http://localhost:3000
```

## Adding categories

To add new categories to the site and expose them within the editor, add a new option to the `_prose.yml` file in the `"category"` section. Most likely, you’re adding a new Field Trip category, for example:

```yml
- "name": "Field Trip Vancouver"
  "value": "fieldtripvan"
```

You’ll also need to add it to the `metalsmith.json` file:

```json
"fieldtripvan": {
  "reverse": true,
  "sortBy": "date"
},
```

Finally, you’ll likely want to add a page that only shows the posts for this category. This is done with a Markdown file in the `src/` directory that has the same filename as the `value` you just set the category to in the Prose file. In this case, it would be `fieldtripvan.md`. If you’d like, you can add this file via the command line by running:

```sh
touch src/fieldtripvan.md
```

Now, “Field Trip Vancouver” will be the category name, and the URL will be at `http://blog.losttype.com/fieldtripvan`.
