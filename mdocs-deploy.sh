#!/bin/bash
set -e

WORK_DIR="/var/www/frontend"
PKG="mdocs_output.tar.gz"
SRC="${WORK_DIR}/${PKG}"
UNZIP_DIR="${WORK_DIR}/mdocs_output"
TARGET="${WORK_DIR}/mdocs"

cd $WORK_DIR
rm -rf "$UNZIP_DIR"
mkdir -p "$UNZIP_DIR"

mv "$SRC" "$UNZIP_DIR/"
cd "$UNZIP_DIR"
tar -zxf "$PKG"

# 覆盖部署（docs/.vitepress/dist）
rm -rf ${TARGET}/*
cp -r docs/.vitepress/dist/* ${TARGET}/

# 删除临时目录
cd $WORK_DIR
rm -rf "$UNZIP_DIR"

echo "Deployment success!"
