### All the problems that I confront when using git

1. npm ERR! could not determine executable to run

   solution: 当我删除了项目中的node_modules之后，git commit会触发git hooks钩子，结果相应的钩子函数被删掉了，导致这个报错。

   最终将hooks钩子删除解决这个问题。对于git hooks后续会有对应的文档说明。