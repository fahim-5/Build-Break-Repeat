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

- **Git** → a **version control system (VCS)** that lets developers track changes in code, collaborate, and roll back to older versions if needed.
- **GitHub** → a **cloud-based platform** built on top of Git, where you can host your repositories, collaborate with others, and showcase your projects to the world.

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
| **Works Without Internet?** | Yes ✅ (can be fully used offline).                                            | No ❌ (requires internet for repository access, collaboration, and syncing).                     |
| **Installation**            | Must be installed on your machine (e.g., via `git-scm.com`).                   | No installation required, just an account on [github.com](https://github.com).                   |
| **Commands**                | Uses CLI commands like `git init`, `git commit`, `git push`.                   | Provides GUI, web interface, and integrates with Git commands.                                   |
| **Ownership**               | Open-source project maintained by the Git community.                           | Owned by Microsoft (acquired in 2018).                                                           |
| **Alternatives**            | Mercurial, Subversion (SVN).                                                   | GitLab, Bitbucket.                                                                               |

👉 In short:

- **Git = the tool** (version control system).
- **GitHub = the platform** (cloud service to host Git repositories).

Ah got it ✅ — you mean **basic terminal commands** (Windows CMD/PowerShell vs Linux/Mac Bash) that you should know **before** starting Git & GitHub.
These are the _foundational commands_ for navigating, managing files, and working in the terminal.

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

- **Windows** → `dir`, `copy`, `move`, `del`, `cls`.
- **Linux/Mac** → `ls`, `cp`, `mv`, `rm`, `clear`.
- Git works the same on both, but these basics help you **navigate the terminal smoothly**.

# 🔹 1. Global vs Local Git Configuration

| Type              | Scope                                                     | Where it’s saved                                                        | When used                                                  |
| ----------------- | --------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Global Config** | Applies to **all repositories** for your user account.    | `~/.gitconfig` (Linux/Mac) or `C:\Users\YourName\.gitconfig` (Windows). | Default for every repo unless a local config overrides it. |
| **Local Config**  | Applies to **only one repository** (inside that project). | Stored in `.git/config` inside that repo folder.                        | Overrides global config for that repo.                     |

👉 Think of it like this:

- **Global** = your personal identity across your computer.
- **Local** = special identity/settings just for one project.

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

- Press **Windows Key** → type **PowerShell** → open it.
  (You can also use CMD if you like.)

---

## ✅ Step 2: Check if SSH keys already exist

Run:

```powershell
dir C:\Users\Fahim\.ssh
```

- If you see files like `id_ed25519` and `id_ed25519.pub`, you already have a key.
- If nothing is there → continue to generate a new one.

---

## ✅ Step 3: Generate a new SSH key

Run:

```powershell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- Replace `"your_email@example.com"` with the email you use on GitHub.
- When it asks for **file location**, just press **Enter** (default is fine).
- When it asks for **passphrase**, press **Enter** again (or type one if you want extra security).

👉 This creates two files in `C:\Users\Fahim\.ssh\`:

- `id_ed25519` → private key (keep secret 🚫)
- `id_ed25519.pub` → public key (share with GitHub ✅)

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

- First time: type **yes** when asked about authenticity.
- Success looks like this:

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

- Working directory → `git add` → Staging area
- Staging area → `git commit` → Local repository

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

- Remove **last commit (c3)**:

  ```bash
  git reset --hard HEAD~1
  ```

- Remove a **middle commit (c2)** but keep others:

  ```bash
  git rebase -i c1
  ```

- Undo changes of commit c2 but keep history:

  ```bash
  git revert c2
  ```

- Go back to commit c1 completely:

  ```bash
  git reset --hard c1
  ```

---

# 🚀 Writing Great Git Commit Messages

A clean commit history = easier debugging, reviews, and collaboration.

---

## 🔹 Rules for Good Commits

- Keep commits **small & focused** (one logical change).
- Use **present tense** → “Add feature” not “Added feature”.
- First line: **≤ 50 chars summary**.
- Add details in body (wrap at 72 chars).
- Explain **what** and **why**, not just how.

---

## 🔹 Structure (Conventional Commits)

```
<type>(<scope>): <summary>

<body>

<footer>
```

**Types:**

- `feat:` new feature
- `fix:` bug fix
- `docs:` docs only
- `style:` formatting/no code change
- `refactor:` code improvement
- `perf:` performance boost
- `test:` tests added/updated
- `chore:` maintenance/configs

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

- `git commit -m "..."` → short commits.
- `git commit` → detailed commits.
- Fix last message: `git commit --amend`.
- Teams often enforce style with **commitlint + husky**.

---

# 🔹 What is `HEAD` in Git?

- `HEAD` = a **pointer** to your current commit in the repo.
- Normally, `HEAD` points to the **latest commit on the current branch** (e.g., `main`).
- If you move around history (older commits), `HEAD` moves too.

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

- Detached HEAD means you’re not on any branch, just viewing history.
- Any new commits here won’t belong to your branch unless you create a new one.

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

- Temporary files (`*.log`, `*.tmp`)
- Build artifacts (`/dist/`, `/bin/`)
- Secrets (`.env`)
- System files (`.DS_Store`, `Thumbs.db`)

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

- `--global` → applies to all repos on your machine.
- `<shortcut>` → the short name you want.
- `<command>` → the full git command.

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

- **Definition:** Uploads your local commits to the remote repository.
- **Use case:** After committing locally, share changes with others.

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

- **Definition:** Fetches changes from the remote repo **and merges** them into your current branch.
- **Use case:** Update your branch with the latest changes before coding or after others pushed.

### Example:

```bash
git pull origin main
```

👉 Get remote `main` and merge into your local `main`.

---

# 🔹 In Simple Terms

- `git push` → **Send** my commits → remote repo.
- `git pull` → **Get** latest commits from remote → merge into my branch.

---

⚡Pro tip:
Sometimes `git pull` may cause **merge conflicts** if you and someone else changed the same file → you’ll need to resolve them before committing.

---

### 🖥️ Local Repository

- Lives **on your computer**.
- It’s where you write code, commit changes, and keep versions locally.
- Example: a folder with a hidden `.git` directory on your Ubuntu machine.
- Commands you do here: `git add`, `git commit`, `git log`.

### ☁️ Remote Repository

- Lives **on a server / cloud platform** like GitHub, GitLab, Bitbucket.
- Shared version of your repo where you push/pull code.
- Allows collaboration with others.
- Commands you do here: `git push`, `git pull`, `git clone`, `git fetch`.

👉 Think of it like this:

- **Local = your personal notebook.**
- **Remote = a shared Google Doc where everyone can sync their changes.**

---

Here’s a **brief practical guide** for branching, merging, and pull requests:

---

### 1. **Branching**

```bash
# Create a new branch
git checkout -b feature-branch

# Switch between branches
git checkout main
git checkout feature-branch
```

_Use a branch to develop a new feature without affecting `main`._

---

### 2. **Merging**

```bash
# Merge feature branch into main
git checkout main
git merge feature-branch

# If conflicts appear, resolve them in files, then
git add .
git commit -m "Resolved merge conflicts"
```

_Merges changes from one branch into another._

---

### 3. **Pull Request (PR)**

1. Push your branch to remote:

```bash
git push origin feature-branch
```

2. Go to GitHub/GitLab → Compare & Pull Request → Add description → Create PR.
3. Teammates review → Approve → Merge.

_PR is basically a formal request to merge your branch after review._

---

## **1. What is a Git Issue?**

A **Git issue** is **not part of Git itself**, but part of platforms like **GitHub, GitLab, or Bitbucket**. It’s used to **track bugs, feature requests, tasks, or enhancements** in your project.

Think of it as a **to-do list for your code repository**, with extra tracking features.

---

## **2. Why Git Issues Are Important**

- Keeps track of **bugs** and **improvements**.
- Helps **collaboration** between team members.
- Allows you to **prioritize tasks**.
- Provides **history of changes** and decisions.

---

## **3. Creating an Issue (Example on GitHub)**

1. Go to your **repository** on GitHub.
2. Click on the **“Issues”** tab.
3. Click **“New Issue”**.
4. Add:

   - **Title:** Short summary of the problem or request.
   - **Description:** Explain the problem, steps to reproduce, screenshots if needed.

5. Optionally:

   - Assign to a team member.
   - Add labels (bug, enhancement, question).
   - Add milestones if part of a bigger project.

6. Click **“Submit new issue”**.

---

## **4. Working With Issues**

- **Commenting:** Discuss solutions with your team.

- **Closing Issues:** When resolved, click **“Close issue”**.

- **Linking Commits:** In your Git commit messages, you can reference an issue:

  ```
  git commit -m "Fix login bug #23"
  ```

  This links the commit to **Issue #23**.

- **Labels:** Use labels to filter issues quickly (bug, enhancement, question, etc.).

---

## **5. Good Practices**

- Make titles **clear and concise**.
- Add **steps to reproduce bugs**.
- Use **labels** to categorize.
- Link issues to **pull requests** for easier tracking.

---

✅ **Quick Example:**

Title: `Login page throws error when password is empty`
Description:

```
Steps to reproduce:
1. Go to login page
2. Leave password empty
3. Click login

Expected: Show error "Password required"
Actual: Page crashes
```

---

Got it! Let’s break down **two-way merge** and **fast-forward merge** in Git with clear explanations and examples.

---

## **1️⃣ Fast-Forward Merge**

A **fast-forward merge** happens when your **feature branch** is ahead of the **main branch**, and the main branch hasn’t progressed since you branched.
Git just moves the main branch pointer forward—**no new merge commit is created**.

**Example:**

```bash
# Assume you're on main branch
git checkout main

# Merge feature branch
git merge feature
```

If `main` has no new commits since `feature` branched, Git will do a **fast-forward merge**, simply updating `main` to point to the latest commit of `feature`.

- **No merge commit.**
- **History stays linear.**

---

### **Force non-fast-forward merge**

If you want a merge commit even for fast-forward:

```bash
git merge --no-ff feature
```

## **2️⃣ Two-Way Merge (Normal Merge)**

A **two-way merge** (or three-way merge in Git terms) happens when **both branches have new commits** since the branch point.

- Git looks at the **common ancestor**, then merges changes from both branches.
- If there are **conflicting changes**, Git stops and asks you to **resolve conflicts manually**.

**Example:**

```bash
# On main branch
git checkout main

# Merge feature branch
git merge feature
```

- Git creates a **merge commit**.
- If conflicts occur, you’ll see something like:

```
CONFLICT (content): Merge conflict in file.txt
```

Resolve conflicts:

```bash
# Edit the conflicted files manually
git add file.txt
git commit
```

---

### **Difference Summary**

| Merge Type       | When it happens                | Merge commit created? |
| ---------------- | ------------------------------ | --------------------- |
| Fast-Forward     | Main has no new commits        | ❌ No                 |
| Two-Way / Normal | Both branches have new commits | ✅ Yes                |

---

# 🔹 What is a **3-Way Merge** in Git?

A **3-way merge** happens when **both branches have diverged** (i.e., each branch has new commits after they split).
Git uses **three commits** to perform the merge:

1. **Base commit** → The common ancestor where the two branches split.
2. **Head commit of branch A** → Usually the branch you’re merging into (e.g., `main`).
3. **Head commit of branch B** → The branch you’re merging (e.g., `feature`).

Git compares these **three snapshots** and combines changes.

---

## **Example**

Imagine you branched off `main` into `feature`:

```
A --- B --- C   (main)
       \
        D --- E (feature)
```

- **A** = base commit (common ancestor).
- **C** = latest commit in `main`.
- **E** = latest commit in `feature`.

When you run:

```bash
git checkout main
git merge feature
```

Git does a **3-way merge**:

- Looks at changes between **A → C** and **A → E**.
- Combines them into a new **merge commit F**:

```
A --- B --- C -------- F (main)
       \             /
        D --- E ---- (feature)
```

---

## **When Does 3-Way Merge Happen?**

- Both branches have new commits since splitting.
- A fast-forward merge is **not possible**.

---

## **What About Conflicts?**

If the same line in a file was modified differently in both branches, Git cannot decide automatically → **merge conflict**.

Example conflict marker in file:

```txt
<<<<<<< HEAD
Code from main
=======
Code from feature
>>>>>>> feature
```

You must manually edit, then:

```bash
git add file.txt
git commit
```

---

✅ **Summary**

- **Fast-forward merge** = just moves branch pointer (no merge commit).
- **3-way merge** = uses base + branch A + branch B → creates a merge commit.
- Needed when branches **diverged**.

---

# 🔥 **How Merge Conflicts Happen**

A **merge conflict** occurs when **Git cannot automatically merge changes** from two branches because both changed the **same line** of a file or **one branch deleted a file while another modified it**.

### Example:

- **Branch A (main):**

```js
console.log("Hello World");
```

- **Branch B (feature):**

```js
console.log("Hello Git");
```

If you try to merge `feature` into `main`, Git won’t know which line to keep → **conflict**.

---

# ⚡ **Fixing Merge Conflicts Locally**

1. Try merging:

   ```bash
   git checkout main
   git merge feature
   ```

   If there’s a conflict, Git shows:

   ```
   CONFLICT (content): Merge conflict in file.js
   ```

2. Open the conflicted file, you’ll see markers:

   ```js
   <<<<<<< HEAD
   console.log("Hello World");
   =======
   console.log("Hello Git");
   >>>>>>> feature
   ```

3. **Manually edit** → decide what to keep:

   ```js
   console.log("Hello GitHub");
   ```

4. Mark conflict as resolved:

   ```bash
   git add file.js
   ```

5. Finish merge:

   ```bash
   git commit
   ```

---

# 🌍 **Fixing Merge Conflicts on GitHub**

1. When you open a **Pull Request (PR)**, GitHub will warn:

   > "This branch has conflicts that must be resolved."

2. Click **Resolve conflicts** button in the PR.

3. GitHub shows the same markers:

   ```js
   <<<<<<< main
   console.log("Hello World");
   =======
   console.log("Hello Git");
   >>>>>>> feature
   ```

4. Edit in the web editor → choose the correct version.

5. Click **Mark as resolved** → **Commit merge**.

---

# ✅ Best Practices

- Pull latest changes before starting work:

  ```bash
  git pull origin main
  ```

- Resolve conflicts **locally** if changes are big.
- Use GitHub UI for **small text/code conflicts**.
- Communicate with your team about what should stay.

---

## 🚀 Workflow: Fork → Clone → Contribute → Pull Request

### **1. Fork the repository**

- Go to the project’s GitHub page.
- On the top right, click **Fork**.
- This creates **your own copy** of that repo under your account.

---

### **2. Clone your fork to your computer**

Open terminal (or Git Bash/PowerShell) and run:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

Now you have the project locally.

---

### **3. Add the original repo as upstream (to stay updated)**

```bash
git remote add upstream https://github.com/<original-owner>/<repo-name>.git
```

Check remotes:

```bash
git remote -v
```

---

### **4. Create a new branch for your contribution**

Never work directly on `main`:

```bash
git checkout -b feature-new-idea
```

---

### **5. Make changes**

- Edit code, docs, or fix bugs.
- After editing:

```bash
git add .
git commit -m "Add new feature/fix bug"
```

---

### **6. Push changes to your fork**

```bash
git push origin feature-new-idea
```

---

### **7. Create a Pull Request (PR)**

- Go to **your fork on GitHub**.
- You’ll see a button: **Compare & pull request**.
- Click it → Write a clear description of what you changed.
- Submit the PR to the **original repo**.

---

### **8. Keep your fork updated (optional but important)**

If the original repo updates:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

✅ That’s it!
You fork → clone → make changes in a new branch → push → PR → contribute 🎉

## 🔹 1. What is GitHub Collaboration?

When two or more people want to build or improve the same project (like a website, app, or notes), GitHub provides tools to:

- Share the project code
- Make changes safely
- Review each other’s work
- Merge everything together without breaking the project

---

## 🔹 2. Common Ways to Collaborate

There are **two main ways** people collaborate:

### **(A) Direct Collaboration (Team Members)**

- If you own a repository (repo = project on GitHub), you can **add collaborators**.
- They can push code directly to the repo.

### **(B) Fork & Pull Request (Open Source Style)**

- If you want to contribute to someone else’s project (you’re not added as collaborator):

  1. You **fork** (make a copy) of their repo.
  2. Make changes in your fork.
  3. Send a **pull request (PR)** asking them to merge your changes.

---

## 🔹 3. How It Happens Step by Step

### **(1) Create a Repo**

- One person creates a repository (repo) on GitHub.
- Example: `my-cool-project`.

### **(2) Add Collaborators**

- Go to repo → **Settings → Collaborators → Add people** (enter their GitHub username).
- They accept the invite.

### **(3) Clone the Repo**

Each collaborator downloads the repo to their computer:

```bash
git clone https://github.com/username/my-cool-project.git
```

### **(4) Create a Branch**

Instead of directly editing the main code, you create a **branch** for your changes:

```bash
git checkout -b feature-login
```

### **(5) Make Changes & Commit**

- Modify the code
- Save the changes
- Commit them:

```bash
git add .
git commit -m "Added login page"
```

### **(6) Push to GitHub**

Upload your branch to GitHub:

```bash
git push origin feature-login
```

### **(7) Pull Request (PR)**

On GitHub website:

- You’ll see **Compare & pull request**
- Create a PR → describe what you changed
- Others review it

### **(8) Review & Merge**

- Collaborators review your PR
- If okay → they **merge** it into the main branch
- Everyone updates their repo with:

```bash
git pull origin main
```

---

## 🔹 4. Example Flow (Team of 2)

👩 Alice creates repo
👨 Bob is added as collaborator

- Alice works on branch `home-page`
- Bob works on branch `login-page`
- Both push → create PRs → review each other → merge into `main`

This way, no one overwrites each other’s code, and the project grows.

---

## 🔹 5. Extra Collaboration Features

- **Issues** → Track bugs, features, and discussions
- **Pull Request reviews** → Add comments before merging
- **Project boards** → Organize tasks like a to-do list
- **Actions** → Automate tests or deployment

---

👉 So, in short:
GitHub collaboration happens by sharing a repo, working on branches, pushing changes, reviewing with pull requests, and merging safely.

---
