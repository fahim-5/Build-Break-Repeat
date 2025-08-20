<p align="center">
  <strong>Fahim Faysal</strong><br>
  <sub>20-08-2025</sub>
</p>



## Git and GitHub

- Intorduction
- Why we need Git and GitHUB
- Basic Terminal Commands
- Table of differences between Git and GitHub
- Git Configuration
- Generate SSH Key & Connect GitHub


---

<br>
<br>


## **Introduction**

Git and GitHub are like the **backbone of modern software development**.

* **Git** → a **version control system (VCS)** that lets developers track changes in code, collaborate, and roll back to older versions if needed.
* **GitHub** → a **cloud-based platform** built on top of Git, where you can host your repositories, collaborate with others, and showcase your projects to the world.

Think of Git as your **local diary of code changes**, and GitHub as the **public library** where you store, share, and collaborate.

---

## **Why We Need Git and GitHub**

1. **Version Control** → Every change you make in your project is tracked. If something breaks, you can go back to a stable version.
2. **Collaboration** → Multiple developers can work on the same project without messing up each other’s code.
3. **Backup & Safety** → With GitHub, your code lives in the cloud. Even if your laptop dies, your code is safe.
4. **Open Source & Networking** → GitHub allows you to share your work, contribute to others’ projects, and build your developer profile.
5. **Industry Standard** → Every tech company uses Git/GitHub or similar tools. Knowing it is **essential** for teamwork in real-world software engineering.
6. **Continuous Deployment/Integration (CI/CD)** → GitHub integrates with tools that help in testing, deployment, and automation.

---

Here’s a clear **table of differences between Git and GitHub** 👇

| Feature                     | **Git**                                                                        | **GitHub**                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Definition**              | A **distributed version control system** used to track changes in source code. | A **cloud-based hosting platform** for Git repositories.                                         |
| **Type**                    | Software/tool installed locally on your computer.                              | Service/website running on the internet.                                                         |
| **Function**                | Manages version history, branching, merging, and local repository operations.  | Provides remote repository hosting, collaboration tools, issue tracking, CI/CD integration, etc. |
| **Usage Scope**             | Used by individual developers or teams to manage code versions locally.        | Used for **sharing repositories**, collaborating with others, and managing open-source projects. |
| **Works Without Internet?** | Yes ✅ (can be fully used offline).                                             | No ❌ (requires internet for repository access, collaboration, and syncing).                      |
| **Installation**            | Must be installed on your machine (e.g., via `git-scm.com`).                   | No installation required, just an account on [github.com](https://github.com).                   |
| **Commands**                | Uses CLI commands like `git init`, `git commit`, `git push`.                   | Provides GUI, web interface, and integrates with Git commands.                                   |
| **Ownership**               | Open-source project maintained by the Git community.                           | Owned by Microsoft (acquired in 2018).                                                           |
| **Alternatives**            | Mercurial, Subversion (SVN).                                                   | GitLab, Bitbucket.                                                                               |

👉 In short:

* **Git = the tool** (version control system).
* **GitHub = the platform** (cloud service to host Git repositories).


Ah got it ✅ — you mean **basic terminal commands** (Windows CMD/PowerShell vs Linux/Mac Bash) that you should know **before** starting Git & GitHub.
These are the *foundational commands* for navigating, managing files, and working in the terminal.

Here’s the **side-by-side table** 👇

---

# 📌 Basic Terminal Commands (Windows vs Linux/Mac)

| Purpose                                  | **Windows (CMD / PowerShell)** | **Linux / Mac (Bash/Zsh)**        |
| ---------------------------------------- | ------------------------------ | --------------------------------- |
| **Show current directory (where am I?)** | `cd`                           | `pwd`                             |
| **List files & folders**                 | `dir`                          | `ls`                              |
| **List with details**                    | `dir`                          | `ls -l`                           |
| **List including hidden files**          | `dir /a`                       | `ls -a`                           |
| **Change directory**                     | `cd foldername`                | `cd foldername`                   |
| **Go up one folder**                     | `cd ..`                        | `cd ..`                           |
| **Go to home directory**                 | `cd %HOMEPATH%`                | `cd ~`                            |
| **Clear screen**                         | `cls`                          | `clear`                           |
| **Make new folder**                      | `mkdir foldername`             | `mkdir foldername`                |
| **Create new file**                      | `type nul > file.txt`          | `touch file.txt`                  |
| **View file content**                    | `type file.txt`                | `cat file.txt`                    |
| **Edit file (simple)**                   | `notepad file.txt`             | `nano file.txt` or `vim file.txt` |
| **Copy file**                            | `copy file.txt D:\backup\`     | `cp file.txt ~/backup/`           |
| **Move / rename file**                   | `move old.txt new.txt`         | `mv old.txt new.txt`              |
| **Delete file**                          | `del file.txt`                 | `rm file.txt`                     |
| **Delete folder**                        | `rmdir /s foldername`          | `rm -r foldername`                |
| **Check running processes**              | `tasklist`                     | `ps aux`                          |
| **Kill a process**                       | `taskkill /PID <id>`           | `kill <pid>`                      |
| **Show network config**                  | `ipconfig`                     | `ifconfig` or `ip addr`           |
| **Check internet (ping)**                | `ping google.com`              | `ping google.com`                 |
| **Show current user**                    | `echo %USERNAME%`              | `whoami`                          |
| **Show system info**                     | `systeminfo`                   | `uname -a`                        |
| **Exit terminal**                        | `exit`                         | `exit`                            |

---

⚡ Key Takeaway:

* **Windows** → `dir`, `copy`, `move`, `del`, `cls`.
* **Linux/Mac** → `ls`, `cp`, `mv`, `rm`, `clear`.
* Git works the same on both, but these basics help you **navigate the terminal smoothly**.



# 🔹 1. Global vs Local Git Configuration

| Type              | Scope                                                     | Where it’s saved                                                        | When used                                                  |
| ----------------- | --------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Global Config** | Applies to **all repositories** for your user account.    | `~/.gitconfig` (Linux/Mac) or `C:\Users\YourName\.gitconfig` (Windows). | Default for every repo unless a local config overrides it. |
| **Local Config**  | Applies to **only one repository** (inside that project). | Stored in `.git/config` inside that repo folder.                        | Overrides global config for that repo.                     |

👉 Think of it like this:

* **Global** = your personal identity across your computer.
* **Local** = special identity/settings just for one project.

---

# 🔹 2. Configure Git (Global)

Run these commands **once after installing Git**:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --global core.editor "code --wait"   # optional (set VS Code as default editor)
git config --global init.defaultBranch main     # set default branch to main instead of master
```

---

# 🔹 3. Configure Git (Local for a project)

Inside your project folder:

```bash
git config --local user.name "Project Specific Name"
git config --local user.email "project@email.com"
```

👉 Now this project will use these details instead of global ones.

---

# 🔹 4. Listing Git Config

Check what’s configured:

```bash
git config --list            # shows all configs (global + local + system)
git config --list --global   # only global settings
git config --list --local    # only local (must be inside a repo)
git config --list --system   # system-wide (rarely used)
```

Check a single value:

```bash
git config user.name
git config user.email
```

---


# 🔹 1. Unset Global Configuration

If you set a config globally (applies to all repos):

```bash
git config --global --unset user.name
git config --global --unset user.email
```

Example:

```bash
git config --global --unset core.editor
git config --global --unset init.defaultBranch
```

---

# 🔹 2. Unset Local Configuration

If you only want to remove config from **one project**:

```bash
git config --local --unset user.name
git config --local --unset user.email
```

Or any other local setting:

```bash
git config --local --unset core.editor
```

---


# 🔹 Generate SSH Key & Connect GitHub (Windows CMD/PowerShell)

## ✅ Step 1: Open Terminal

* Press **Windows Key** → type **PowerShell** → open it.
  (You can also use CMD if you like.)

---

## ✅ Step 2: Check if SSH keys already exist

Run:

```powershell
dir C:\Users\Fahim\.ssh
```

* If you see files like `id_ed25519` and `id_ed25519.pub`, you already have a key.
* If nothing is there → continue to generate a new one.

---

## ✅ Step 3: Generate a new SSH key

Run:

```powershell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

* Replace `"your_email@example.com"` with the email you use on GitHub.
* When it asks for **file location**, just press **Enter** (default is fine).
* When it asks for **passphrase**, press **Enter** again (or type one if you want extra security).

👉 This creates two files in `C:\Users\Fahim\.ssh\`:

* `id_ed25519` → private key (keep secret 🚫)
* `id_ed25519.pub` → public key (share with GitHub ✅)

---

## ✅ Step 4: Start SSH agent and add your key

Run these commands:

```powershell
Set-Service ssh-agent -StartupType Automatic
Start-Service ssh-agent
ssh-add ~\.ssh\id_ed25519
```

👉 This makes Windows remember your key, so you don’t enter passphrase every time.

---

## ✅ Step 5: Copy the public key

Run:

```powershell
Get-Content ~\.ssh\id_ed25519.pub | Set-Clipboard
```

👉 Now your key is copied to your clipboard (ready to paste).

---

## ✅ Step 6: Add key to GitHub

1. Go to [GitHub → Settings → SSH and GPG Keys](https://github.com/settings/keys)
2. Click **New SSH Key**
3. Paste the key from clipboard → Save

---

## ✅ Step 7: Test the connection

Run:

```powershell
ssh -T git@github.com
```

* First time: type **yes** when asked about authenticity.
* Success looks like this:

  ```
  Hi Fahim! You've successfully authenticated, but GitHub does not provide shell access.
  ```
--- 

<br>
<br>

1. Create a working directory
2. Create a file inside it
3. Do modification
4. Add to the **staging area**
5. Commit to the **local repository**

And I’ll also create a sample **.txt file example** for you.

---

# 🔹 Step 1: Create a working directory

```bash
mkdir my-git-project
cd my-git-project
```

👉 This creates a folder `my-git-project` and moves inside it.

---

# 🔹 Step 2: Initialize a Git repository

```bash
git init
```

👉 This creates a new empty **local repository** inside `.git` folder.

---

# 🔹 Step 3: Create a new file

```bash
echo "Hello, this is my first Git file." > example.txt
```

👉 This creates a file `example.txt` with one line of text.

You can check it:

```bash
cat example.txt
```

---

# 🔹 Step 4: Check repository status

```bash
git status
```

👉 Shows that `example.txt` is **untracked**.

---

# 🔹 Step 5: Add file to staging area

```bash
git add example.txt
```

👉 Moves the file from **working directory** → **staging area**.

---

# 🔹 Step 6: Commit file to local repository

```bash
git commit -m "Add first example.txt file"
```

👉 Now the file is saved inside the local Git repository.

---

# 🔹 Step 7: Modify the file

```bash
echo "This is my second line in the file." >> example.txt
```

👉 Adds another line to `example.txt`.

Check it:

```bash
cat example.txt
```

---

# 🔹 Step 8: Stage the modified file

```bash
git add example.txt
```

---

# 🔹 Step 9: Commit the changes

```bash
git commit -m "Update example.txt with a second line"
```

---

✅ Now your `example.txt` went through the full cycle:

* Working directory → `git add` → Staging area
* Staging area → `git commit` → Local repository

---

### 📄 Example `example.txt` content:

After step 3:

```
Hello, this is my first Git file.
```

After step 7:

```
Hello, this is my first Git file.
This is my second line in the file.
```

---


# 🔹 1. Make a Commit

After staging (`git add`):

```bash
git commit -m "Your commit message"
```

👉 This saves your changes in the **local repo** with a unique **commit ID** (hash).

---

# 🔹 2. Show All Commits

```bash
git log
```

👉 Shows full history (commit id, author, date, message).

Compact view:

```bash
git log --oneline
```

Example:

```
a3c1b2e Update example.txt with a second line
b7d9f4a Add first example.txt file
```

---

# 🔹 3. Resetting Commits (Types of Reset)

Reset moves **HEAD pointer** to another commit.

### (a) `--soft` reset

```bash
git reset --soft <commit-id>
```

👉 Moves HEAD to commit but keeps **changes staged**.
Useful if you want to change your commit message.

---

### (b) `--mixed` reset (default)

```bash
git reset --mixed <commit-id>
# or simply
git reset <commit-id>
```

👉 Moves HEAD to commit, **keeps changes in working directory** but unstaged.
Useful if you want to redo staging.

---

### (c) `--hard` reset

```bash
git reset --hard <commit-id>
```

👉 Moves HEAD to commit and **deletes everything after that** (staged + working directory changes).
⚠️ Be careful, this permanently removes changes.

---

# 🔹 4. Remove a Particular Commit by Commit ID

### (a) If it’s the **latest commit**

Undo last commit but keep changes in working directory:

```bash
git reset --soft HEAD~1
```

Completely remove last commit and changes:

```bash
git reset --hard HEAD~1
```

---

### (b) If it’s an **older commit**

Use **interactive rebase**:

```bash
git rebase -i <commit-id>^
```

Example:

```bash
git rebase -i a3c1b2e^
```

It opens an editor:

```
pick a3c1b2e Update example.txt with a second line
pick b7d9f4a Add first example.txt file
```

Change `pick` → `drop` for the commit you want to remove, then save.

---

### (c) Use `git revert` (safer, history intact)

```bash
git revert <commit-id>
```

👉 Creates a new commit that **undoes** the changes of that commit (does not delete history).

---

# 🔹 5. Back to a Particular Commit

If you just want to **temporarily check out an old commit**:

```bash
git checkout <commit-id>
```

👉 Now you’re in **detached HEAD** (not on a branch).

If you want to create a branch from there:

```bash
git checkout -b new-branch-name <commit-id>
```

If you want to make your branch **permanently point to that commit**:

```bash
git reset --hard <commit-id>
```

---

# 🔹 Quick Example

Let’s say we have 3 commits:

```
c1 → Add file
c2 → Update file
c3 → Fix typo
```

* Remove **last commit (c3)**:

  ```bash
  git reset --hard HEAD~1
  ```
* Remove a **middle commit (c2)** but keep others:

  ```bash
  git rebase -i c1
  ```
* Undo changes of commit c2 but keep history:

  ```bash
  git revert c2
  ```
* Go back to commit c1 completely:

  ```bash
  git reset --hard c1
  ```

---


# 🚀 Writing Great Git Commit Messages

A clean commit history = easier debugging, reviews, and collaboration.

---

## 🔹 Rules for Good Commits

* Keep commits **small & focused** (one logical change).
* Use **present tense** → “Add feature” not “Added feature”.
* First line: **≤ 50 chars summary**.
* Add details in body (wrap at 72 chars).
* Explain **what** and **why**, not just how.

---

## 🔹 Structure (Conventional Commits)

```
<type>(<scope>): <summary>

<body>

<footer>
```

**Types:**

* `feat:` new feature
* `fix:` bug fix
* `docs:` docs only
* `style:` formatting/no code change
* `refactor:` code improvement
* `perf:` performance boost
* `test:` tests added/updated
* `chore:` maintenance/configs

---

## 🔹 Examples

✅ Simple

```
fix(auth): handle invalid login token
```

✅ With body

```
feat(profile): add avatar upload

Users can now upload/update avatars.
Added validation for image size & format.
```

✅ With issue ref

```
fix(payment): correct rounding in invoice

Switched to decimal to prevent float errors.

Closes #231
```

❌ Bad

```
update stuff
```

✅ Good

```
refactor(db): optimize user lookup query

Replaced subquery with indexed join for faster performance.
```

---

## 🔹 Pro Tips

* `git commit -m "..."` → short commits.
* `git commit` → detailed commits.
* Fix last message: `git commit --amend`.
* Teams often enforce style with **commitlint + husky**.

---


# 🔹 What is `HEAD` in Git?

* `HEAD` = a **pointer** to your current commit in the repo.
* Normally, `HEAD` points to the **latest commit on the current branch** (e.g., `main`).
* If you move around history (older commits), `HEAD` moves too.

Think of `HEAD` as **"where you currently are"** in Git.

---

# 🔹 Using `git checkout`

### 1) Checkout a branch

```bash
git checkout main
```

👉 Moves `HEAD` to the `main` branch (latest commit of `main`).

### 2) Checkout a specific commit

```bash
git checkout <commit-id>
```

👉 Moves `HEAD` directly to that commit (**detached HEAD state**).

* Detached HEAD means you’re not on any branch, just viewing history.
* Any new commits here won’t belong to your branch unless you create a new one.

---

# 🔹 Undo with `git checkout`

### Undo changes in a file (before staging):

```bash
git checkout -- filename.txt
```

👉 Discards changes in the working directory and resets the file to last commit.

### Undo staged changes (after `git add` but before commit):

```bash
git reset HEAD filename.txt
```

👉 Removes file from staging area, but keeps changes in working directory.

---

# 🔹 Coming Back to the Latest Commit

If you checked out an old commit (`detached HEAD`):

```bash
git checkout main
```

👉 Brings you back to the latest commit on the `main` branch.

If your branch is different (e.g., `dev`):

```bash
git checkout dev
```

---

# 🔹 What is `.gitignore`?

`.gitignore` is a file where you tell Git which files or folders it should **ignore** (not track).
Useful for:

* Temporary files (`*.log`, `*.tmp`)
* Build artifacts (`/dist/`, `/bin/`)
* Secrets (`.env`)
* System files (`.DS_Store`, `Thumbs.db`)

---

# 🔹 How to Use

1. Create a file named `.gitignore` in your repo root.
2. Add patterns of files/folders you want Git to ignore.

---

# 🔹 Example `.gitignore`

```
# Ignore node_modules folder
node_modules/

# Ignore environment file
.env

# Ignore all .log files
*.log

# Ignore build folder
/dist/
```

---

# 🔹 Create a Git Alias

You add aliases using:

```bash
git config --global alias.<shortcut> "<command>"
```

* `--global` → applies to all repos on your machine.
* `<shortcut>` → the short name you want.
* `<command>` → the full git command.

---

# 🔹 Examples

### 1) Shorter `status`

```bash
git config --global alias.st status
```

Now run:

```bash
git st
```

### 2) Shorter `checkout`

```bash
git config --global alias.co checkout
```

Now:

```bash
git co main
```

### 3) Shorter `commit`

```bash
git config --global alias.ci commit
```

### 4) Log with one line

```bash
git config --global alias.lg "log --oneline --graph --decorate --all"
```

Now:

```bash
git lg
```

👉 Shows a nice branch/commit history.

---

# 🔹 View All Aliases

```bash
git config --global --get-regexp alias
```

# 🔹 Remove an Alias

```bash
git config --global --unset alias.st
```

---



## A) Local repo → connect to remote (GitHub)

```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin <REMOTE_URL>   # HTTPS or SSH
git push -u origin main              # set upstream (only first time)
```

## B) Remote repo → clone to local

```bash
git clone <REMOTE_URL>
cd <repo-name>
git remote -v
```

## Handy checks/edits

```bash
git remote -v                       # list remotes
git remote set-url origin <URL>     # change URL (e.g., HTTPS → SSH)
git remote remove origin            # remove remote
git remote rename origin upstream   # rename
```



---

# 🔹 `git push`

* **Definition:** Uploads your local commits to the remote repository.
* **Use case:** After committing locally, share changes with others.

### Example:

```bash
git push origin main
```

👉 Push your local `main` branch → remote `origin/main`.

First push (set upstream):

```bash
git push -u origin main
```

Then just:

```bash
git push
```

# 🔹 `git pull`

* **Definition:** Fetches changes from the remote repo **and merges** them into your current branch.
* **Use case:** Update your branch with the latest changes before coding or after others pushed.

### Example:

```bash
git pull origin main
```

👉 Get remote `main` and merge into your local `main`.

---

# 🔹 In Simple Terms

* `git push` → **Send** my commits → remote repo.
* `git pull` → **Get** latest commits from remote → merge into my branch.

---

⚡Pro tip:
Sometimes `git pull` may cause **merge conflicts** if you and someone else changed the same file → you’ll need to resolve them before committing.

---




### 🖥️ Local Repository

* Lives **on your computer**.
* It’s where you write code, commit changes, and keep versions locally.
* Example: a folder with a hidden `.git` directory on your Ubuntu machine.
* Commands you do here: `git add`, `git commit`, `git log`.

### ☁️ Remote Repository

* Lives **on a server / cloud platform** like GitHub, GitLab, Bitbucket.
* Shared version of your repo where you push/pull code.
* Allows collaboration with others.
* Commands you do here: `git push`, `git pull`, `git clone`, `git fetch`.

👉 Think of it like this:

* **Local = your personal notebook.**
* **Remote = a shared Google Doc where everyone can sync their changes.**

---