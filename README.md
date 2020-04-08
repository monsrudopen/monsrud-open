## Welcome to Monsrud Open's repository

The `master` branch is automatically deployed to https://monsrudopen-15616.web.app/ and
the `dev` branch is automatically deployed to https://monsrudopendev.web.app/.

Create as many branches as you want and feel free to experiment in the `dev` branch. If we break the `dev` branch
we simply just reset it to the `master` branch.

In order to add a commit to the `master` branch you have to create a pull request from your branch and get it approved.
The `master` branch is protected so that direct pushes are not allowed. (If you really need to merge a PR without being able to getting it approved by another contributor you can log into monsrudopenuser. That github account has admin rights.

The domain https://www.monsrudopen.com/ should point to https://monsrudopen-15616.web.app/.
The domain https://dev.monsrudopen.com/ should point to https://monsrudopendev.web.app/.

#### Workflow:

1. Create a local branch by branching out of the master branch. Starting the branch name with `f-` for feature, `b-` for bugfix or `u-` for update is a great idea.
2. Merge into dev, push code and test your code on https://dev.monsrudopen.com/
3. Create a pull request from your branch into master. When it is approved and merged into master it will automatically be built and deployed to the production environment.
4. After merging the branch into master you should delete the branch from the github repo.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Git commands

(Picked the most important commands from https://github.com/joshnh/Git-Commands)

### Getting & Creating Projects

| Command                                                           | Description                                |
| ----------------------------------------------------------------- | ------------------------------------------ |
| `git init`                                                        | Initialize a local Git repository          |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |

### Basic commands

| Command      | Description                                           |
| ------------ | ----------------------------------------------------- |
| `git status` | Check status                                          |
| `git pull`   | Update local repository to the newest commit          |
| `git push`   | Push changes to remote repository (remembered branch) |
| `git diff`   | View changes                                          |
| `git log`    | View commit history                                   |

### Staging and committing

| Command                            | Description                       |
| ---------------------------------- | --------------------------------- |
| `git add [file-name.txt]`          | Add a file to the staging area    |
| `git add .`                        | Add all files to the staging area |
| `git commit -m "[commit message]"` | Commit staged files with message  |
| `git reset`                        | Unstage all files                 |
| `git checkout .`                   | Warning: Discard all changes      |

### Branching & Merging

| Command                       | Description                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| `git branch`                  | List branches (the asterisk denotes the current branch)                   |
| `git branch -a`               | List all branches (local and remote/github)                               |
| `git branch [branch name]`    | Create a new branch                                                       |
| `git branch -d [branch name]` | Delete a branch                                                           |
| `git checkout [branch name]`  | Switch to a branch                                                        |
| `git merge [branch name]`     | Merge a branch into the active branch                                     |
| `git merge --abort`           | Abort merge in case of merge conflict (instead of solving merge conflict) |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
