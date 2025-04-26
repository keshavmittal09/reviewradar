@echo off
cd /d "%~dp0"

REM Start the backend server
cd backend
start cmd /k "uvicorn main:app --host 0.0.0.0 --port 8000 --reload"

REM Start the frontend server
cd ..
start cmd /k "npm run dev"