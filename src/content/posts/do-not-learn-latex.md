---
title: LaTeX 不需要学习
description: 勤勤恳恳学习 LaTeX 无异于驴学习拉磨力学。
published: 2024-10-15
tags: 
    - 语言特性
    - 杂谈
---
我第一次接触 LaTeX 是三年前本科写毕业论文的时候，学校其实是有 Word 模板的，但用过 Word 的人都知道，Word 图文混排的内容一多，后期修改可谓牵一发而动全身，这就已经带来足够多困难了，更别提还有著名的一换设备格式就乱的问题了。

LaTeX 我早有了解，但我对其的第一印象是这玩意花样太多了，我就想简单排个版，为什么有这么多东西要调整，而且最开始我安装的是 MacTeX，光是安装包都是 4GB 往上（现在已经接近 6GB 了），我真心觉得我这一两万字的破论文都配不上这么重量级的工具。

但是那会我也是闲，还真把环境配起来开始学着排自己的论文了，现在看来这简直是最好的入门 LaTeX 契机。最后我不仅把我的论文完美地按照要求排了版，而且因为 LaTeX 的特性，我不知不觉就完成了一套我校论文的 LaTeX 模板，然后顺手就开源了。

那会我并不觉得自己已经掌握 LaTeX 了，因为里面的代码部分 80% 都是我通过各路搜索直接照抄过来的，有时候你问我这行代码干了什么，我是答不出来的，看到自己的代码有种蒙混过关的感觉。但这两天我突然有一个需要排版的任务，用 Word 肯定会出问题的那种，于是我再次捡起了 LaTeX，结果我直接把我三年前写的代码拿出来用，稍微改一下居然就跑通了，这一次我还是不知道这些代码到底是什么意思。

不过这次我意识到我此前对于 LaTeX 的看法简直大错特错：LaTeX 不是编程语言那样是用来「创作」的东西，它纯粹是一个用来干活的工具。会用 LaTeX 不会让你有更好的研究思路，不会让你算出完美的模型数据，它只是能让你的最终工作成果更完善地呈现。

所以纯手搓一套 LaTeX 代码根本就是完全没有必要的事，甚至理解 LaTeX 代码本身都是没必要的事，编译没报错、显示正常就是最终工作的目标。程序员总是有各种各样的梗图自嘲不知道为什么但代码就是能跑，写 LaTeX 时完全就是这样的体验。

LaTeX 是一门完全没有所谓「美感」的语言。最初我觉得它比较像 HTML 和 CSS，但开始写了又觉得像 Markdown，结果到后面又觉得它什么都不像。

```tex
\begin{figure}
	%% 长得最像 HTML 的时候
\end{figure}

\geometry{a4paper,left=2.5cm,right=2cm,top=2.5cm,bottom=2cm} %% 长得最像 CSS 的时候

\section{This is a section.} %% 长得最像 Markdown 的时候

\noindent %% 啥都不像的时候
```

而且在编写 LaTeX 文件的时候不免是要调包的，这个东西奇葩就奇葩在如果你拿到别人的代码，如果不够熟悉，你是完全无法看出对方哪些代码是因为调用了哪个包才跑通的——这点又有点像 R 了。

但这种四不像反倒是 LaTeX 的一种优势：在正文用最像 Markdown 的命令和各种无参数命令保证简便性，在微调格式的时候用最复杂最乱的命令防止新手乱来。所以用 LaTeX 的流程就是很简单，上网搜别人的代码复制粘贴，遇到 bug 就搜索，特别是 LaTeX 其实是非常细碎的语言，所以再细节的问题去搜索引擎找，也估计能搜出个七七八八，不用担心「这个问题是不是太弱智」这样的问题。别的语言可能是「面向对象」或者「面向过程」，而 LaTeX 属于「面向结果」，编译出来的结果基本就是一锤定音。

总的来说我写这篇文章大概想说的是，使用 LaTeX 并没有很大的「心智负担」，如果有需求直接用就可以，不用纠结自己会不会、要不要学这事。要想成为一个不错的 LaTeX 使用者，只需要满足两个条件：

1. 配置一套你知道在哪点编译的 LaTeX 环境
2. 保存一套能跑通的基准模板代码（通常来说完成第一个 LaTeX 项目后稍微删掉内容和部分代码就是了）

实际上做到第一点，你的工作就完成一大半了，如果还能做到第二点，你几乎就已经超过 80% 的 LaTeX 使用者了。