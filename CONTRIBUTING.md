# Contributing

Thanks for considering contributing to the Lost Type Co-op blog!

1. [Opening issues](#opening-issues)
2. [Fixing bugs](#fixing-bugs)
3. [Writing CSS](#writing-css)

## Opening issues

If you find a bug, please feel free to [open an issue](https://github.com/losttype/blog.losttype.com/issues).

Taking the time to describe a problem, even a seemingly small one, is appreciated, and a totally valid contribution to this project. Thank you!

## Fixing bugs

The CSS is all documented and shown in use in [the Lost Type blog styleguide](http://blog.losttype.com/styleguide). If you’d like to build it locally, run the following command:

```sh
npm run styleguide
```

This uses the Node.js version of [KSS](https://github.com/kss-node/kss-node) to parse the CSS for comments and generate a static documentation site.


***

We love pull requests. Here’s a quick guide:

1. [Fork this repository](https://github.com/losttype/blog.losttype.com/fork) and then clone it locally:

  ```bash
  git clone https://github.com/losttype/blog.losttype.com
  ```

2. Create a topic branch for your changes:

  ```bash
  git checkout -b fix-for-that-thing
  ```
3. Commit a failing test for the bug:

  ```bash
  git commit -am "Adds a failing test to demonstrate that thing"
  ```

4. Commit a fix that makes the test pass:

  ```bash
  git commit -am "Adds a fix for that thing!"
  ```

5. Run the tests:

  ```bash
  npm test
  ```

6. If everything looks good, push to your fork:

  ```bash
  git push origin fix-for-that-thing
  ```

7. [Submit a pull request.](https://help.github.com/articles/creating-a-pull-request)

8. Enjoy being the wonderful person you are

  After you’ve opened your pull request, [you should email me](mailto:hello@kennethormandy.com) your mailing address so I can mail you a personal thank you note. Seriously!

## Adding new features

Thinking of adding a new feature? Cool! [Open an issue](https://github.com/losttype/blog.losttype.com/issues) and let’s design it together.
