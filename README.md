# گزارش آزمایش Git، GitHub و GitHub Pages

## ۱. معرفی پروژه

این پروژه یک frontend ایستا با HTML5، CSS3 و JavaScript خام است که هم‌زمان به‌عنوان گزارش آزمایش Git و GitHub عمل می‌کند.

اهداف اصلی:

- تمرین repository و `.git`
- ساخت commitهای معنادار با Conventional Commits
- کار با چند branch
- شبیه‌سازی چند contributor
- ایجاد و رفع حداقل دو conflict
- استفاده از Pull Request
- محافظت از `main`
- استقرار خودکار روی GitHub Pages با GitHub Actions

## ۲. ساختار فایل‌ها

```text
git-github-lab/
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

## ۳. اجرای محلی

```bash
git init
git switch -c main
python3 -m http.server 8000
```

سپس در مرورگر:

```text
http://localhost:8000
```

## ۴. ساختار branchها

- `main`: نسخه‌ی پایدار و قابل انتشار؛ فقط از طریق Pull Request.
- `develop`: شاخه‌ی تجمیع توسعه.
- `feature/git-theory`: بخش نظریه Git.
- `feature/report-styling`: ظاهر، RTL و typography.
- `feature/conflict-lab`: سناریوهای conflict.
- `feature/deployment`: GitHub Actions و Pages.
- `hotfix/mobile-layout`: اصلاح مشکلات نمایش موبایل.

نمودار پیشنهادی:

```text
main
  │
  └── develop
       ├── feature/git-theory
       ├── feature/report-styling
       ├── feature/conflict-lab
       ├── feature/deployment
       └── hotfix/mobile-layout
```

## ۵. استراتژی commit

حداقل ۲۰ commit معنادار باید در تاریخچه‌ی واقعی پروژه ایجاد شود. نمونه‌ی roadmap:

```text
1.  chore: initialize static project
2.  chore: add gitignore rules
3.  docs: add assignment introduction
4.  feat: add git theory section
5.  docs: explain git directory
6.  docs: explain atomic changes
7.  docs: explain git synchronization commands
8.  docs: explain history integration commands
9.  docs: explain reset and revert
10. docs: explain restore switch checkout
11. docs: explain staging and stash
12. docs: explain snapshots and commits
13. docs: compare local and remote repositories
14. feat: add Persian typography
15. feat: add report cards
16. feat: add responsive report layout
17. feat: add commit history table
18. docs: document rebase conflict
19. docs: document pull request conflict
20. fix: improve mobile layout
21. chore: add github pages workflow
22. docs: add deployment instructions
23. fix: improve semantic html
24. docs: finalize laboratory report
```

## ۶. شبیه‌سازی چند contributor

Contributor اول:

```bash
git config user.name "توسعه‌دهنده اول"
git config user.email "developer1@example.com"
```

Contributor دوم:

```bash
git config user.name "توسعه‌دهنده دوم"
git config user.email "developer2@example.com"
```

در یک پروژه‌ی واقعی بهتر است هر contributor با هویت GitHub واقعی خودش commit کند.

## ۷. Conflict اول: rebase

سناریو: دو توسعه‌دهنده یک بخش مشترک از `index.html` را در یک branch تغییر می‌دهند.

در توسعه‌دهنده‌ای که commit محلی دارد:

```bash
git pull --rebase origin feature/report-styling
```

سپس:

```bash
git status
grep -n -E '<<<<<<<|=======|>>>>>>>' index.html
```

پس از اصلاح فایل:

```bash
git add index.html
git rebase --continue
```

در صورت نیاز به push تاریخچه‌ی بازنویسی‌شده:

```bash
git push --force-with-lease origin feature/report-styling
```

## ۸. Conflict دوم: Pull Request

سناریو: `feature/deployment` پس از تغییر `develop` قابل merge نیست.

محلی:

```bash
git fetch origin
git switch feature/deployment
git merge origin/develop
```

بررسی:

```bash
git status
grep -n -E '<<<<<<<|=======|>>>>>>>' README.md
```

رفع دستی سپس:

```bash
git add README.md
git commit -m "fix: resolve deployment documentation conflict"
git push origin feature/deployment
```

## ۹. محافظت از main

در GitHub:

```text
Settings
→ Rules / Branches
→ Branch protection rules یا Rulesets
```

برای `main`:

- الزام Pull Request
- حداقل یک approval در صورت نیاز
- الزام موفقیت status checkها در صورت فعال‌بودن CI
- جلوگیری از force push
- جلوگیری از حذف branch
- در صورت نیاز جلوگیری از bypass قوانین

هدف: هیچ push مستقیم به `main` انجام نشود و تغییرات فقط از مسیر Pull Request وارد شوند.

## ۱۰. GitHub Pages

در GitHub:

```text
Settings
→ Pages
→ Build and deployment
→ Source: GitHub Actions
```

workflow پروژه در:

```text
.github/workflows/deploy.yml
```

قرار دارد.

با هر push به `main` workflow اجرا می‌شود.

## ۱۱. آدرس نهایی GitHub Pages

پس از ساخت repository:

```text
https://USERNAME.github.io/REPOSITORY/
```

مثلاً:

```text
https://USERNAME.github.io/git-github-lab/
```

---

# پرسش‌های نظری

## پرسش ۱: `.git` چیست؟

`.git` هسته‌ی repository محلی Git است و با دستور زیر ساخته می‌شود:

```bash
git init
```

اجزای مهم:

- `HEAD`: مرجع فعلی
- `objects/`: objectهای Git مانند commit، tree و blob
- `refs/`: branchها و tagها
- `index`: staging area
- `config`: تنظیمات repository
- `logs/`: سوابق حرکت referenceها

فایل‌های پروژه در working tree هستند، ولی metadata و object model اصلی Git در `.git` نگهداری می‌شود.

## پرسش ۲: Atomic commit و Atomic Pull Request

Atomic یعنی یک تغییر منطقی به‌صورت یک واحد کامل و مشخص ارائه شود.

نمونه‌ی خوب:

```text
feat: add git stash section
```

بهتر است commitهای مستقل در یک commit ترکیب نشوند. Pull Request نیز بهتر است فقط یک هدف مشخص داشته باشد تا review، تست و rollback ساده شود.

## پرسش ۳: تفاوت fetch، pull، merge، rebase و cherry-pick

### fetch

اطلاعات remote را دریافت می‌کند، بدون اینکه branch فعلی را ادغام کند.

```bash
git fetch origin
```

### pull

معمولاً fetch و سپس merge یا rebase است.

```bash
git pull origin develop
```

### merge

دو تاریخچه را ادغام می‌کند.

```bash
git merge feature/example
```

### rebase

commitها را روی پایه‌ی جدید بازنویسی می‌کند.

```bash
git rebase develop
```

### cherry-pick

فقط یک commit مشخص را روی branch فعلی اعمال می‌کند.

```bash
git cherry-pick <commit>
```

خلاصه:

```text
fetch       = دریافت
pull        = دریافت + integration
merge       = ادغام تاریخچه
rebase      = بازنویسی پایه‌ی تاریخچه
cherry-pick = انتقال یک commit مشخص
```

## پرسش ۴: تفاوت reset، revert، restore، switch و checkout

### reset

می‌تواند branch pointer و در حالت‌های مختلف index و working tree را تغییر دهد.

```bash
git reset HEAD~1
```

### revert

یک commit جدید برای معکوس‌کردن اثر commit قبلی ایجاد می‌کند.

```bash
git revert <commit>
```

### restore

برای بازیابی فایل‌ها یا index استفاده می‌شود.

```bash
git restore index.html
```

### switch

برای جابه‌جایی branchها طراحی شده است.

```bash
git switch develop
```

### checkout

دستور قدیمی‌تر و چندمنظوره است و هم برای branch و هم برای restore فایل‌ها استفاده می‌شد.

```text
reset   = تغییر reference/index/worktree
revert  = commit معکوس
restore = بازیابی فایل
switch  = جابه‌جایی branch
checkout = دستور قدیمی چندمنظوره
```

## پرسش ۵: Stage یا Index و stash

Stage یا Index بین working tree و repository قرار دارد.

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

نمایش اختلاف working tree:

```bash
git diff
```

نمایش اختلاف staged:

```bash
git diff --staged
```

`git stash` تغییرات محلی را موقتاً کنار می‌گذارد:

```bash
git stash
git stash list
git stash pop
```

`stash pop` تغییر را برمی‌گرداند و stash را معمولاً حذف می‌کند؛ `stash apply` آن را برمی‌گرداند ولی stash را نگه می‌دارد.

## پرسش ۶: Snapshot چیست؟

Snapshot نمایی از وضعیت پروژه در یک نقطه‌ی مشخص از تاریخچه است.

یک commit به یک snapshot مشخص اشاره می‌کند و همچنین parent، author، committer، زمان و message را در خود دارد.

می‌توان ساختار مفهومی را چنین دید:

```text
Commit A → Snapshot A
     │
     ▼
Commit B → Snapshot B
```

Git این ساختار را با objectهای خود مانند commit، tree و blob مدیریت می‌کند.

## پرسش ۷: Local repository و Remote repository

### Local repository

روی سیستم توسعه‌دهنده قرار دارد و شامل working tree، index و history محلی است.

### Remote repository

روی سرویسی مانند GitHub قرار دارد و برای collaboration، code review، backup و CI/CD استفاده می‌شود.

همگام‌سازی با دستورهایی مانند:

```bash
git push
git fetch
git pull
```

انجام می‌شود.

Local و remote دو repository مجزا هستند و الزاماً همیشه همگام نیستند.

---

## ۱۲. دستورات کلیدی آزمایش

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

## ۱۳. بررسی نهایی

```bash
git status
git branch -a
git remote -v
git log --oneline --graph --decorate --all
git rev-list --count main
```

تعداد commitها باید حداقل ۲۰ باشد.

همچنین نباید conflict marker باقی مانده باشد:

```bash
grep -R -n -E '<<<<<<<|=======|>>>>>>>' .
```

و اجرای workflow در GitHub Actions باید موفق باشد.

## ۱۴. نتیجه‌گیری

این پروژه یک نمونه‌ی کامل از frontend ایستا با RTL فارسی است که فرآیند توسعه‌ی Git را نیز به‌عنوان بخشی از خود محصول مستند می‌کند. مهم‌ترین خروجی‌های آزمایش عبارت‌اند از مدیریت نسخه، شاخه‌بندی، commitهای معنادار، Pull Request، رفع conflict، محافظت از `main` و deployment خودکار روی GitHub Pages.
