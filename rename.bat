#!/bin/bash

# script_full_path=%(dirname "$0")
# # script_full_path=$(cd "$(dirname "$0")" && pwd)
# echo %script_full_path

# # echo "node $script_full_path/index.js" 
# node %script_full_path\index.js.
# # node "C:\Users\HP\Html-css-react-sql\Javascript\Rename-X\index.js"

@echo off
setlocal

REM Get the directory path of the script
for %%I in (%0) do set "script_full_path=%%~dpI"

echo %script_full_path%

echo "node %script_full_path%\index.js"
node "%script_full_path%\index.js"
read -p "Press any key to continue"