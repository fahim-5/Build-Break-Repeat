Got it 👍
Here’s a **well-organized, corrected, and formatted version** of your Linux commands note:

---

# Basic Linux Commands

### Check System Information

* **Check current directory:**

  ```bash
  pwd
  ```

* **Check current user:**

  ```bash
  whoami
  ```

* **Check date and time:**

  ```bash
  date
  ```

* **Show only date:**

  ```bash
  date +%D
  ```

* **Format date, hours, and seconds:**

  ```bash
  date +"%Y-%m-%d %H:%M:%S"
  ```

  *(Example output: 2025-08-25 16:45:12)*

---

### Working with Files and Directories

* **List all files in the current folder:**

  ```bash
  ls
  ```

* **List files with details (sorted by modification time):**

  ```bash
  ls -lt
  ```

* **List files with details, sorted by size (smallest last):**

  ```bash
  ls -lts
  ```

* **List files in human-readable format (sizes like KB, MB):**

  ```bash
  ls -lh
  ```

* **Clear terminal screen:**

  ```bash
  clear
  ```

  *(Shortcut: `Ctrl + L`)*

---

### Creating, Deleting, and Editing Files

* **Create a new empty file:**

  ```bash
  touch newfile
  ```

* **Delete a file:**

  ```bash
  rm newfile
  ```

* **View file content (entire content at once):**

  ```bash
  cat filename
  ```

* **View file content page by page:**

  ```bash
  more filename
  ```

  *(Press `q` to quit)*

* **View file with navigation and search support:**

  ```bash
  less filename
  ```

  **Inside `less`:**

  * `/word` → search forward (top → bottom)
  * `?word` → search backward (bottom → top)
  * `n` → jump to next search result
  * `Shift + G` → go to bottom of file
  * `g` → go to top of file
  * `q` → quit and return to terminal

---

Got it 👍 here’s the **short version (only editing files part):**

---

# Editing Files in Linux (Short)

### Using **nano** (easy editor)

```bash
nano filename
```

* Save → `Ctrl + O`
* Exit → `Ctrl + X`
* Search → `Ctrl + W`
* Cut line → `Ctrl + K`, Paste → `Ctrl + U`
* Undo → `Alt + U`, Redo → `Alt + E`

---

### Using **vi / vim** (advanced editor)

```bash
vi filename
```

* Insert mode → `i` (start typing), `Esc` (stop)
* Save → `:w`, Quit → `:q`, Save & quit → `:wq`, Quit w/o save → `:q!`
* Search → `/word` (next: `n`)
* Delete line → `dd`
* Copy line → `yy`, Paste → `p`
* Undo → `u`, Redo → `Ctrl + r`

---


mkdir to crete directory in mac
rmdir to delete directory
to chage folder we use cd

