/**
 * 检查文件名 是否符合要求 短横线
 * */

const execSync = require("child process")
const res = execSync("git diff --staged --name-only")
console.log(res)
