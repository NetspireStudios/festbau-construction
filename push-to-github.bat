@echo off
echo Pushing Vugar Construction website to GitHub...
echo.

echo Checking git status...
git status
echo.

echo Pushing to GitHub...
git push -u origin master

echo.
if %ERRORLEVEL% == 0 (
    echo ✅ Successfully pushed to GitHub!
    echo Repository URL: https://github.com/NetspireStudios/festbau-construction
    echo.
    echo Next steps:
    echo 1. Go to https://vercel.com
    echo 2. Import this repository
    echo 3. Deploy with one click!
) else (
    echo ❌ Push failed. Make sure:
    echo 1. Repository exists on GitHub
    echo 2. You have push permissions
    echo 3. Check your internet connection
)

pause 