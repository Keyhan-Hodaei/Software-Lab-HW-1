# گزارش آزمایش Git، GitHub و GitHub Pages

## اطلاعات پروژه

| عنوان | مقدار |
|---|---|
| نام پروژه | Software-Lab-HW-1 |
| نوع پروژه | Frontend ایستا |
| فناوری‌ها | HTML5، CSS3، JavaScript |
| کنترل نسخه | Git |
| مخزن | https://github.com/Keyhan-Hodaei/Software-Lab-HW-1 |
| استقرار | GitHub Pages با GitHub Actions |
| اعضای تیم | سید کیهان هدایی — 401106696 |
| اعضای تیم | یاشار پیمایی — 401100325 |

---

## ۱. معرفی پروژه

این پروژه یک نرم‌افزار **Static Frontend** است که با استفاده از HTML5، CSS3 و JavaScript خام پیاده‌سازی شده است.

نکته اصلی پروژه این است که صفحه وب علاوه بر نقش frontend، خودِ گزارش آزمایش Git و GitHub نیز محسوب می‌شود. بنابراین فرآیند توسعه، ساختار branchها، تاریخچه commitها، سناریوهای رفع conflict، مفاهیم نظری Git و فرآیند CI/CD در همان سایت مستند شده‌اند.

پروژه کاملاً فارسی و راست‌به‌چپ طراحی شده و از:

```html
<html lang="fa" dir="rtl">
```

استفاده می‌کند.

برای typography فارسی نیز از فونت Vazirmatn استفاده شده است.

---

# ۲. اعضای تیم

### سید کیهان هدایی
شماره دانشجویی:

```text
401106696
```

### یاشار پیمایی
شماره دانشجویی:

```text
401100325
```

در فرآیند توسعه، برای شبیه‌سازی مشارکت چند توسعه‌دهنده از تنظیمات مختلف `git config user.name` و `git config user.email` استفاده شده است.

نمونه:

```bash
git config user.name "سید کیهان هدایی"
git config user.email "niyahodai@gmail.com"
```

و برای contributor دوم:

```bash
git config user.name "یاشار پیمایی"
git config user.email "yasharp1383@gmail.com"
```

در استفاده واقعی از GitHub، بهتر است هر commit با حساب و email مربوط به contributor واقعی ثبت شود.

---

# ۳. ساختار پروژه

```text
Software-Lab-HW-1/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
│   ├── style.css
│   └── script.js
├── .gitignore
├── index.html
└── README.md
```

### `index.html`

صفحه اصلی پروژه و گزارش آزمایش است.

### `assets/style.css`

مسئول ظاهر، RTL، typography، responsive layout، کارت‌ها، جدول‌ها و سایر اجزای رابط است.

### `assets/script.js`

شامل JavaScript ساده پروژه است؛ از جمله نمایش سال جاری و رفتار navigation.

### `.gitignore`

فایل‌های موقت، تنظیمات editor، خروجی build، فایل‌های محیطی و سایر موارد غیرضروری را از repository خارج می‌کند.

### `.github/workflows/deploy.yml`

فرآیند استقرار خودکار روی GitHub Pages را تعریف می‌کند.

---

# ۴. فناوری‌های استفاده‌شده

- HTML5
- CSS3
- Vanilla JavaScript
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- فونت فارسی Vazirmatn

پروژه build پیچیده‌ای ندارد و به‌صورت static قابل اجراست.

---

# ۵. Branching Strategy

برای مدیریت توسعه از شاخه‌های معنادار استفاده شده است.

## `main`

شاخه اصلی و پایدار پروژه است و تغییرات آن باید از طریق Pull Request وارد شوند.

## `develop`

شاخه اصلی توسعه و محل تجمیع تغییرات featureها است.

## `feature/git-theory`

برای توسعه بخش مفاهیم نظری Git و پاسخ به هفت پرسش اصلی آزمایش استفاده شده است.

## `feature/report-styling`

برای توسعه ظاهر گزارش، typography فارسی، کارت‌ها، جدول و responsive layout استفاده شده است.

## `feature/conflict-lab`

برای مستندسازی و نمایش سناریوهای Merge Conflict استفاده شده است.

## `feature/deployment`

برای GitHub Actions و GitHub Pages استفاده شده است.

## `hotfix/mobile-layout`

برای اصلاح مشکلات مربوط به نمایش پروژه روی صفحه‌های کوچک استفاده شده است.

---

# ۶. نمودار کلی Branchها

```text
main
  │
  └── develop
       │
       ├── feature/git-theory
       │
       ├── feature/report-styling
       │
       ├── feature/conflict-lab
       │
       ├── feature/deployment
       │
       └── hotfix/mobile-layout
```

فرآیند کلی توسعه:

```text
Feature Branch
      │
      ▼
Pull Request
      │
      ▼
develop
      │
      ▼
Pull Request
      │
      ▼
main
      │
      ▼
GitHub Actions
      │
      ▼
GitHub Pages
```

---

# ۷. تعداد و ساختار Commitها

در زمان تهیه این گزارش، صفحه repository در GitHub تعداد **۲۶ commit** را برای تاریخچه فعلی نشان می‌دهد؛ بنابراین شرط حداقل ۲۰ commit معنادار تأمین شده است.

تاریخچه پروژه از commitهای نوع Conventional Commits استفاده می‌کند، از جمله:

```text
feat:
docs:
fix:
chore:
```

نمونه‌ای از commitهای اصلی پروژه:

```text
chore: initialize static project
chore: add gitignore rules
docs: add assignment introduction
feat: add git theory section
docs: explain git directory
docs: explain atomic changes
docs: explain git synchronization commands
docs: explain history integration commands
docs: explain reset and revert
docs: explain restore switch checkout
docs: explain staging and stash
docs: explain snapshots and commits
docs: compare local and remote repositories
feat: add Persian typography
feat: add report cards
feat: add responsive report layout
feat: add commit history table
docs: document rebase conflict
docs: document pull request conflict
fix: improve mobile layout
chore: add github pages workflow
docs: add deployment instructions
fix: improve semantic html
docs: finalize laboratory report
```

برای بررسی تاریخچه واقعی repository:

```bash
git log --oneline --graph --decorate --all
```

و برای شمارش commitها:

```bash
git rev-list --count main
```

---

# ۸. فایل `.gitignore`

در پروژه از `.gitignore` استفاده شده است.

نمونه مواردی که نادیده گرفته می‌شوند:

```gitignore
.DS_Store
Thumbs.db
.vscode/
.idea/
*.tmp
*.bak
*.swp
*.log
dist/
build/
.env
.env.*
coverage/
```

این کار باعث می‌شود فایل‌های موقت، تنظیمات محیط توسعه و خروجی‌های غیرضروری وارد repository نشوند.

---

# ۹. شبیه‌سازی چند Contributor

برای نمایش مفهوم همکاری چندنفره، می‌توان هویت Git را برای contributorهای مختلف تنظیم کرد.

Contributor اول:

```bash
git config user.name "سید کیهان هدایی"
git config user.email "YOUR_EMAIL"
```

Contributor دوم:

```bash
git config user.name "یاشار پیمایی"
git config user.email "YOUR_EMAIL"
```

و برای مشاهده:

```bash
git config user.name
git config user.email
```

استفاده می‌شود.

در همکاری واقعی GitHub، بهتر است contributorها با حساب‌ها و هویت واقعی خود commit و Pull Request ایجاد کنند.

---

# ۱۰. Conflict اول — Rebase Conflict

در سناریوی اول، دو توسعه‌دهنده یک قسمت مشترک از `index.html` را در یک branch تغییر داده‌اند.

هنگام دریافت تغییرات remote و اجرای rebase:

```bash
git pull --rebase origin feature/report-styling
```

تعارض ایجاد می‌شود.

وضعیت با:

```bash
git status
```

بررسی می‌شود.

سپس conflict markerها:

```bash
grep -n -E '<<<<<<<|=======|>>>>>>>' index.html
```

بررسی می‌شوند.

نمونه ساختار marker:

```text
<<<<<<< HEAD
نسخه اول
=======
نسخه دوم
>>>>>>> commit
```

پس از بررسی و انتخاب نسخه نهایی:

```bash
git add index.html
git rebase --continue
```

و در صورت نیاز:

```bash
git push --force-with-lease origin feature/report-styling
```

استفاده می‌شود.

### دلیل اهمیت این conflict

این سناریو نشان می‌دهد که rebase در صورت برخورد با تغییرات هم‌زمان می‌تواند نیازمند حل دستی تعارض باشد و پس از حل آن باید فرآیند rebase ادامه داده شود.

---

# ۱۱. Conflict دوم — Pull Request Conflict

در سناریوی دوم، branch مربوط به deployment هم‌زمان با `develop` روی یک بخش مشترک از `README.md` تغییر داده است.

ابتدا وضعیت remote دریافت می‌شود:

```bash
git fetch origin
```

سپس branch مورد نظر:

```bash
git switch feature/deployment
```

و تغییرات `develop` ادغام می‌شوند:

```bash
git merge origin/develop
```

در صورت conflict:

```bash
git status
grep -n -E '<<<<<<<|=======|>>>>>>>' README.md
```

پس از رفع دستی:

```bash
git add README.md
git commit -m "fix: resolve deployment documentation conflict"
git push origin feature/deployment
```

پس از آن Pull Request دوباره قابل بررسی و merge خواهد بود.

---

# ۱۲. Atomic Commit و Atomic Pull Request

Atomic به معنای آن است که یک تغییر منطقی به‌صورت یک واحد مشخص و منسجم ارائه شود.

یک commit خوب:

```text
feat: add git stash section
```

فقط روی یک هدف مشخص تمرکز دارد.

در مقابل، commitی مانند:

```text
feat: update CSS, README, workflow and fix unrelated bug
```

چند تغییر مستقل را با یکدیگر ترکیب می‌کند و atomic نیست.

### Atomic Commit

ویژگی‌های اصلی:

- هدف مشخص
- تغییر منطقی و مستقل
- قابل بررسی
- قابل rollback یا revert
- قابل توضیح با یک commit message روشن

### Atomic Pull Request

Pull Request نیز بهتر است یک هدف واحد داشته باشد.

برای مثال:

```text
Add Git theory section
```

یک PR مناسب است، در حالی که PRای که هم‌زمان UI، workflow و چند باگ نامرتبط را تغییر دهد، atomic نیست.

---

# ۱۳. پرسش اول: `.git` چیست؟

پوشه `.git` هسته repository محلی Git است.

این پوشه با:

```bash
git init
```

ایجاد می‌شود.

مهم‌ترین بخش‌های آن:

### `HEAD`

مرجع فعلی repository را مشخص می‌کند.

### `objects/`

objectهای Git مانند blob، tree، commit و tag را نگهداری می‌کند.

### `refs/`

referenceهایی مانند branchها و tagها در این بخش نگهداری می‌شوند.

### `index`

همان staging area است.

### `config`

تنظیمات repository محلی را نگه می‌دارد.

### `logs/`

تغییرات و حرکت referenceها را ثبت می‌کند.

بنابراین `.git` شامل metadata و object model اصلی Git است و برای مدیریت تاریخچه repository ضروری است.

---

# ۱۴. پرسش دوم: Atomic در Atomic Commit و Atomic Pull Request

Atomic یعنی یک تغییر به‌عنوان یک واحد منطقی و کامل ارائه شود.

یک Atomic Commit:

- یک هدف مشخص دارد.
- تغییرات نامرتبط را ترکیب نمی‌کند.
- مستقل قابل بررسی است.
- در صورت نیاز می‌تواند revert شود.

یک Atomic Pull Request نیز یک هدف مشخص دارد و فرآیند code review، تست، merge و rollback را ساده‌تر می‌کند.

---

# ۱۵. پرسش سوم: تفاوت fetch، pull، merge، rebase و cherry-pick

## `git fetch`

اطلاعات جدید remote را دریافت می‌کند بدون اینکه branch فعلی را مستقیماً ادغام کند.

```bash
git fetch origin
```

## `git pull`

معمولاً شامل fetch و سپس یک عملیات integration مانند merge یا rebase است.

```bash
git pull origin develop
```

## `git merge`

دو تاریخچه را ادغام می‌کند.

```bash
git merge feature/example
```

در بعضی شرایط یک merge commit ایجاد می‌شود.

## `git rebase`

commitهای یک branch را روی پایه‌ای جدید بازنویسی می‌کند.

```bash
git rebase develop
```

مزیت آن می‌تواند ایجاد history خطی‌تر باشد، اما چون commitهای موجود بازنویسی می‌شوند، روی branchهای اشتراکی باید با احتیاط استفاده شود.

## `git cherry-pick`

یک commit مشخص را انتخاب کرده و اثر آن را روی branch فعلی اعمال می‌کند.

```bash
git cherry-pick <commit>
```

### خلاصه

```text
fetch        = دریافت اطلاعات remote
pull         = دریافت + integration
merge        = ادغام تاریخچه‌ها
rebase       = بازنویسی پایه تاریخچه
cherry-pick  = انتقال یک commit مشخص
```

---

# ۱۶. پرسش چهارم: تفاوت reset، revert، restore، switch و checkout

## `git reset`

می‌تواند reference فعلی و در حالت‌های مختلف index و working tree را جابه‌جا کند.

```bash
git reset HEAD~1
```

حالت‌های مهم:

```bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

`--hard` باید با احتیاط زیاد استفاده شود زیرا ممکن است تغییرات محلی را از بین ببرد.

## `git revert`

یک commit جدید می‌سازد که اثر commit قبلی را معکوس می‌کند.

```bash
git revert <commit>
```

در branchهای اشتراکی معمولاً از reset امن‌تر است زیرا تاریخچه را بازنویسی نمی‌کند.

## `git restore`

برای بازیابی فایل‌ها و index/working tree استفاده می‌شود.

```bash
git restore index.html
```

## `git switch`

برای جابه‌جایی branchها طراحی شده است.

```bash
git switch develop
```

ساخت branch:

```bash
git switch -c feature/example
```

## `git checkout`

دستور قدیمی‌تر و چندمنظوره‌ای است که هم برای branch و هم برای restore فایل‌ها استفاده می‌شد.

### خلاصه

```text
reset     = تغییر reference/index/worktree
revert    = ایجاد commit معکوس
restore   = بازیابی فایل
switch    = جابه‌جایی branch
checkout  = دستور قدیمی چندمنظوره
```

---

# ۱۷. پرسش پنجم: Stage یا Index و `git stash`

Staging Area یا Index بین Working Tree و Repository قرار دارد.

```text
Working Tree
     │
     │ git add
     ▼
Staging Area
     │
     │ git commit
     ▼
Repository
```

برای اضافه‌کردن فایل:

```bash
git add index.html
```

برای دیدن تغییرات Working Tree:

```bash
git diff
```

برای دیدن تغییرات Staged:

```bash
git diff --staged
```

### `git stash`

تغییرات محلی را به‌صورت موقت کنار می‌گذارد تا Working Tree تمیز شود.

```bash
git stash
git stash list
git stash pop
```

برای برگرداندن stash بدون حذف آن:

```bash
git stash apply
```

---

# ۱۸. پرسش ششم: Snapshot چیست؟

Snapshot نمایی از وضعیت پروژه در یک نقطه مشخص از تاریخچه است.

یک commit به یک snapshot مشخص اشاره می‌کند و علاوه بر آن اطلاعاتی مانند parent commit، author، committer، timestamp و commit message را در خود دارد.

به‌صورت مفهومی:

```text
Commit A
   │
   ▼
Snapshot A
   │
   ▼
Commit B
   │
   ▼
Snapshot B
```

Git این ساختار را با objectهایی مانند commit، tree و blob مدیریت می‌کند.

---

# ۱۹. پرسش هفتم: Local Repository و Remote Repository

## Local Repository

روی سیستم توسعه‌دهنده قرار دارد و شامل Working Tree، Staging Area و Local History است.

## Remote Repository

روی سرویسی مانند GitHub قرار دارد و برای همکاری تیمی، Pull Request، Code Review، Backup و CI/CD استفاده می‌شود.

ارتباط آن‌ها با دستورهایی مانند:

```bash
git push
git fetch
git pull
```

انجام می‌شود.

بنابراین Local و Remote دو repository مستقل هستند که می‌توانند با یکدیگر sync شوند.

---

# ۲۰. GitHub Actions و CI/CD

فایل workflow:

```text
.github/workflows/deploy.yml
```

است.

فرآیند deployment:

```text
Push to main
     │
     ▼
GitHub Actions
     │
     ▼
Checkout Repository
     │
     ▼
Configure GitHub Pages
     │
     ▼
Upload Pages Artifact
     │
     ▼
Deploy
     │
     ▼
GitHub Pages
```

Workflow با push به `main` فعال می‌شود.

---

# ۲۱. GitHub Pages

آدرس repository:

```text
https://github.com/Keyhan-Hodaei/Software-Lab-HW-1
```

آدرس GitHub Pages مورد انتظار برای این repository:

```text
https://keyhan-hodaei.github.io/Software-Lab-HW-1/
```

در GitHub باید در بخش:

```text
Settings
→ Pages
→ Build and deployment
```

منبع deployment روی:

```text
GitHub Actions
```

قرار گیرد.

---

# ۲۲. محافظت از `main`

هدف Branch Protection این است که push مستقیم به `main` مجاز نباشد.

```text
Direct Push
    ✗

Pull Request
    ✓
```

قوانین پیشنهادی/اعمال‌شده برای این فرآیند:

- Require a pull request before merging
- Require approvals
- Require status checks to pass
- Block force pushes
- Restrict deletion
- در صورت نیاز Require conversation resolution

فرآیند نهایی:

```text
feature branch
      │
      ▼
Pull Request
      │
      ▼
develop
      │
      ▼
Pull Request
      │
      ▼
main
```

---

# ۲۳. دستورات کلیدی استفاده‌شده در آزمایش

```bash
git init
git status
git add
git commit
git log
git branch
git switch
git fetch
git pull
git merge
git rebase
git cherry-pick
git reset
git revert
git restore
git stash
git diff
git remote
git push
```

---

# ۲۴. بررسی نهایی پروژه

برای بررسی وضعیت repository:

```bash
git status
```

برای مشاهده branchها:

```bash
git branch -a
```

برای مشاهده remote:

```bash
git remote -v
```

برای مشاهده graph تاریخچه:

```bash
git log --oneline --graph --decorate --all
```

برای شمارش commitها:

```bash
git rev-list --count main
```

برای اطمینان از نبود conflict marker:

```bash
grep -R -n -E '<<<<<<<|=======|>>>>>>>' .
```

نتیجه مطلوب:

- Working Tree تمیز باشد.
- حداقل ۲۰ commit معنادار وجود داشته باشد.
- حداقل ۳ branch معنادار وجود داشته باشد.
- دو conflict واقعی ایجاد و رفع شده باشد.
- `main` از طریق Pull Request مدیریت شود.
- GitHub Actions با موفقیت اجرا شود.
- سایت روی GitHub Pages در دسترس باشد.

---

# ۲۵. نتیجه‌گیری

در این پروژه یک frontend ایستای فارسی و راست‌به‌چپ با استفاده از HTML، CSS و JavaScript پیاده‌سازی شد.

در کنار توسعه frontend، مفاهیم اصلی Git نیز به‌صورت عملی استفاده شدند؛ از جمله:

- Repository
- Commit
- Branch
- Pull Request
- Merge
- Rebase
- Merge Conflict
- Staging Area
- Stash
- Reset
- Revert
- Restore
- Switch
- Checkout
- Snapshot
- Local Repository
- Remote Repository
- GitHub Actions
- GitHub Pages

به این ترتیب پروژه هم خروجی قابل مشاهده دارد و هم فرآیند کامل مدیریت نسخه و استقرار خودکار را نشان می‌دهد.

---

# ۲۶. استفاده از LLM در انجام آزمایش

در انجام این آزمایش از **LLM با نام ChatGPT** به‌عنوان ابزار کمکی برای یادگیری، طراحی مراحل Git/GitHub، تولید نمونه کد و تهیه مستندات استفاده شده است.

محتوای نهایی پروژه، تاریخچه واقعی Git، commitها، branchها، Pull Requestها، conflictها، تنظیمات GitHub و deployment توسط اعضای تیم اجرا و بررسی شده‌اند.

## پرامپت استفاده‌شده

```text
Role & Objective:
Act as a Senior DevOps Engineer and Git Instructor. Provide a comprehensive, step-by-step guide to complete a Git/GitHub laboratory assignment.

The deliverable is a lightweight static web application (Pure HTML/CSS/JS or Vanilla + Tailwind CDN) whose web page content is the assignment report itself—growing incrementally commit-by-commit. The static web page must be fully written in Persian with proper RTL (right-to-left) layout and Persian typography. The repository must be deployed to GitHub Pages via GitHub Actions.

---

### Core Assignment Requirements & Constraints

1. **Tech Stack & Localization:**
   - Simple static frontend (HTML5/CSS3/JS, zero-build or minimal build for fast GitHub Pages deployment).
   - **Language & Layout:** All UI text, report sections, and document content on the static web page must be in **Persian** (`dir="rtl"`, `lang="fa"`, Persian fonts/styling).
2. **Repository & Branching Strategy:**
   - At least 3 meaningful branches (e.g., `main`, `develop`, `feature/add-git-theory`, `feature/report-styling`, or `hotfix/...`).
   - Branch protection rule on `main`: direct pushes forbidden; merges allowed exclusively via Pull Requests (PRs).
   - Multi-contributor simulation: specify author configuration (`git config user.name`) where relevant.
3. **Commit History:**
   - Exactly/at least 20 distinct, meaningful commits following Conventional Commits format (`feat:`, `docs:`, `fix:`, `chore:`).
   - Include a proper `.gitignore` file.
4. **Merge Conflicts:**
   - Demonstrate at least 2 realistic merge conflict scenarios (one within a shared branch/rebase, one during a PR merge).
   - Show exact terminal commands to trigger, inspect (`git status`, conflict markers), resolve, and commit the resolution.
5. **CI/CD & Deployment:**
   - Provide a complete GitHub Actions workflow file (`.github/workflows/deploy.yml`) to automatically deploy the static site to GitHub Pages.
6. **Documentation & Deliverables (`README.md`):
   - Project overview, branch graph explanation, commit history summary, and live GitHub Pages URL placeholder.
   - Comprehensive, technically rigorous answers to the following 7 Git questions:
     1. What is the `.git` directory? What data does it store, and how is it initialized?
     2. What does "atomic" mean in the context of atomic commits and atomic pull requests?
     3. What are the differences between `git fetch`, `git pull`, `git merge`, `git rebase`, and `git cherry-pick`?
     4. What are the differences between `git reset`, `git revert`, `git restore`, `git switch`, and `git checkout`?
     5. What is the staging area (index), and what does `git stash` do?
     6. What is the Git concept of a "snapshot," and how does it relate to a commit?
     7. What are the core differences between a local repository and a remote repository?

---

### Required Output Structure

Provide the guide broken down into the following distinct execution phases:

1. **Phase 1: Local Setup & Initial Scaffolding**
   - Terminal commands to initialize git, create `.gitignore`, configure branch names, and create the baseline RTL Persian `index.html` and `README.md`.
2. **Phase 2: Step-by-Step Commit & Branch Roadmap (20+ Commits)**
   - A sequential checklist/table listing Commit #, Branch, Exact Bash Commands, File Changes (with Persian HTML content snippets), and Commit Message.
3. **Phase 3: Conflict Scenarios & Step-by-Step Resolutions**
   - Exact simulation for Conflict 1 and Conflict 2 with terminal output, diff resolution, and merge completion.
4. **Phase 4: GitHub Remote Setup, Branch Protection & CI/CD**
   - GitHub UI configuration instructions for branch protection rules and GitHub Pages settings.
   - Complete `.github/workflows/deploy.yml` file.
5. **Phase 5: Final `README.md` & Theory Q&A**
   - Complete, formatted Markdown text for `README.md` including all 7 question answers with clear technical depth.

---

### Original Assignment Text (Context & Reference)

> **فرانت‌اند ایستا با قابلیت استقرار خودکار**
>
> یک نرم‌افزار static frontend را به‌صورت pure یا با چارچوبی دلخواه (مانند ReactJS یا Angular یا Vue)، پیاده‌سازی کنید و در فرآیند پیاده‌سازی آن از git استفاده کنید. با کمک Github Actions نیز این نرم‌افزار static خود را به‌صورت خودکار، روی Github Pages مستقر (deploy) کنید.
>
> از اهداف آزمایش این است که در فرآیند پیاده‌سازی نرم‌افزار، ترجیحاً از همه‌ی دستوراتی که در فیلم آموزشی بیان شده، استفاده کنید تا نسبت به آن‌ها آشنایی و تسلط پیدا کنید؛ از این رو توصیه می‌کنیم دستورات git را بدون کمک IDE و به صورت دستی در ترمینال وارد کنید تا از نزدیک اتفاقاتی را که می‌افتد، ببینید؛ در این حالت یادگیری بیشتری دارید.
>
> برای انجام آزمایش به نکات زیر توجه کنید:
> - انتظار می‌رود که فرآیند ایجاد این نرم‌افزار، به صورت همزمان توسط همه‌ی اعضای تیم ایجاد، در یک مخزن کد (repository) در Github دنبال شود.
> - در پروژه‌ی خود از فایل `.gitignore` استفاده کنید.
> - نیاز است تا حداقل ۲۰ commit معنا‌دار در فرآیند پیاده‌سازی نرم‌افزار وجود داشته باشد. منظور از معناداری commit ها، این است که اتفاق مشخصی در فرآیند پیاده‌سازی رخ داده باشد.
> - لازم است برای مدیریت بهتر فرآیند پیاده‌سازی نرم‌افزار، از حداقل سه شاخه‌ی معنا‌دار استفاده کنید. منظور از معناداری شاخه‌ها، نام‌گذاری مناسب شاخه و هم‌چنین، مرتبط‌بودن شاخه‌ها با فرآیند پیاده‌سازی نرم‌افزار است؛ برای مثال شاخه `dev` و یا `feature` هر کدام با غرض‌های متفاوتی ایجاد می‌شوند و یا `hotfix` برای برطرف‌کردن بعضی باگ‌های خاص در نرم‌افزار به‌کار می‌رود.
> - حداقل دو conflict را در فرآیند پیاده‌سازی برطرف کنید. این conflict ها می‌تواند در یک شاخه یا هنگام ادغام دو شاخه رخ دهد.
> - با اعمال محدودیت در مخزن خود در Github، شاخه‌ی `main` پروژه را محافظت کنید؛ به صورتی که تنها از طریق pull request امکان ادغام شاخه‌ای دیگر با شاخه‌ی `main` را داشته باشید.
> - ضروری است شاخه‌ها را به درستی با شاخه‌ی `main` و یا دیگر شاخه‌های مرتبط ادغام (merge) کنید. این کار را از طریق pull request انجام دهید.
> - برای استقرار مستمر می‌توانید از Github Actions و workflow های آماده استفاده کنید.
> - گزارشی از جزئیات پیاده‌سازی مراحل فوق شامل توضیح در خصوص برنچ ها و همچنین کامیت ها و آدرس github page مربوطه برای لانچ فرانت را با فرمت markdown در فایل `README` پروژه بنویسید.
> - *شایان ذکر است که ضبط فیلم برای این آزمایش ضروری بوده و جزئی از نمره خواهد بود. توضیحات و الزامات ضبط ویدئو، در بخش مربوطه آورده شده‌است.*
>
> **پرسش‌ها:**
> علاوه بر گزارش آزمایش، پاسخ سوالات زیر را هم داخل فایل `README` بنویسید:
> 1. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟
> 2. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟
> 3. تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick را بیان کنید.
> 4. تفاوت دستورهای reset و revert و restore و switch و checkout را بیان کنید.
> 5. منظور از stage یا همان index چیست؟ دستور stash چه کاری را انجام می‌دهد؟
> 6. مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟
> 7. تفاوت‌های local repository و remote repository
```

### Session Link : 

```text
https://chatgpt.com/share/6a807e7f-5c5c-83eb-b24f-383b4b697749
```

---

# ۲۷. لینک‌های پروژه

### Repository

```text
https://github.com/Keyhan-Hodaei/Software-Lab-HW-1
```

### GitHub Pages

```text
https://keyhan-hodaei.github.io/Software-Lab-HW-1/
```

---

