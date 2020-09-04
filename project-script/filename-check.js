/**
 * 检查文件名 是否符合要求 短横线
 * */

const { execSync } = require("child_process")
const res = execSync("git diff --staged --name-only").toString().trim()
// 文件中包含大写字母的不符合规范
// 两个及以上连续的短横线不符合规范
const test = res.split(/\//).filter((v) => v.match(/[^-][A-Z]+[^-]/) || v.match(/-{2,}/))
if(test.length > 0) {
    console.log('以下文件命名不规范')
    test.forEach(i => console.log(i))
}
