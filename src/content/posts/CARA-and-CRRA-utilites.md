---
title: CARA 和 CRRA 效用的推导
description: 效用函数怎么能抽象成这样。
published: 2025-05-12
tags: 
    - 经济学
    - 理论
---



在学习高级宏观经济学中 RBC 模型的时候，上来就是这样一个消费者效用函数
$$
U_t=\gamma\frac{C_t^{1-\eta_C}-1}{1-\eta_C}+\psi\frac{(1-L_t)^{1-\eta_L}-1}{1-\eta_L}
$$
这个函数直接把我看懵了，我从来没有看到过这样的效用函数。在学范里安《微观经济学：现代观点》的时候，我以为效用函数都是这样的：

- 线性效用函数：$U(x_1,x_2,...,x_n)=a_1x_1+a_2x_2+...+a_nx_n$
- 完全互补品效用函数：$U(x_1,x_2)=\min \{ax_1, bx_2\}$
- CD 效用函数：$U(x_1,x_2)=x_1^a x_2^b $
- 拟线性效用函数：$U(x_1,x_2)=v(x_1)+x_2$

但长这样的确实没有见过。搜了一下这个实际上就是常相对风险厌恶效用 (Constant Relative Risk Aversion, CRRA)，与之相对应的还有常绝对风险厌恶效用 (Constant Absolute Risk Aversion, CARA)。但是我此前并没有影响在我的经济学教科书中找到过这两个形式的函数，也不明白这两个函数是怎么来的，结果最终在徐高老师的《经济金融学二十五讲》中找到了这两个函数及其推导。



## 绝对风险厌恶



我们都知道投资的风险与收益同方向变动，但有的投资者就会倾向于选择高风险高回报；但有的投资者会倾向于低风险低回报，为什么会这样？一种常见的观点是：不同人的财富水平不一样，财富水平越高，就越愿意承担风险换取高回报。虽然这个观点过于绝对，但是它提供了一个起点，就是人对于风险的厌恶程度与其财富水平有关。

那么现在可以构建一个情景：投资者的财富水平为 $y$，现在有一个投资机会，有$\pi$的概率能赢得$h$的财富，有$(1-\pi)$的概率会让其损失$h$的财富。

如果没有财富水平 $y$，这大概是一个求期望收益的问题，但恰恰相反，这里关心的是在$\pi$为多少的时候，投资者会愿意尝试这一投资：如果一个投资者即使是很小的$\pi$也愿意尝试这一投资，说明这位投资者没有那么厌恶风险；反之如果一个投资者只有在$\pi$很大的时候才愿意尝试这一投资，说明这位投资者没有那么厌恶风险。那么实际上我们可以构造一个决策门槛$\pi^\ast$，然后设投资者在不同财富水平下的效用为$u(y)$来刻画投资者在这一投资机会上的“期望效用”
$$
u(y)=\pi^\ast u(y+h) +(1-\pi^\ast)(y-h)
$$
为了衡量投资者的风险厌恶程度，我们需要解出决策门槛$\pi^\ast$。解法为把$u(y+h)$和$u(y-h)$在$y$处进行泰勒展开：
$$
u(y+h)=u(y)+hu^{\prime}(y)+\frac{h^2}{2}u^{\prime\prime}(y)+o_1(h^2)
$$

$$
u(y-h)=u(y)-hu^{\prime}(y)+\frac{h^2}{2}u^{\prime\prime}(y)+o_1(h^2)
$$

代入前面的“期望效用”式：
$$
u(y)=\pi^*\left[u(y)+hu^{\prime}(y)+\frac{h^2}{2}u^{\prime\prime}(y)\right]+(1-\pi^*)\left[u(y)-hu^{\prime}(y)+\frac{h^2}{2}u^{\prime\prime}(y)\right]
$$
移项调整后可解得
$$
\pi^*=\frac{1}{2}+\frac{h}{4}\left[-\frac{u^{\prime\prime}(y)}{u^{\prime}(y)}\right]
$$
忽略常数和外生的$h$，实际影响决策门槛的，属于投资者个体化的部分就是$\left[-\frac{u^{\prime\prime}(y)}{u^{\prime}(y)}\right]$，因此将其命名为绝对风险厌恶系数（Coefficient of Absolute Risk Aversion, ARA）。
$$
R_A(y)=\left[-\frac{u^{\prime\prime}(y)}{u^{\prime}(y)}\right]
$$
显然，ARA 越大，投资者作出决策的门槛越高，也就越厌恶风险。现在令其为常数$\alpha$，用解微分方程的形式反求$u(y)$的形式
$$
\alpha = -\frac{u^{\prime\prime}(y)}{u^{\prime}(y)}
$$
解法为代换降阶法，令$z=u^\prime$，那么$z^\prime=u^{\prime\prime}$
$$
\frac{z^{\prime}}{z} = -\alpha
$$
两边同时积分
$$
\int \frac{1}{z} dz = \int -\alpha dy
$$

$$
z=C_1\cdot e^{-\alpha y}
$$

其中$C_1 = \pm e^{C}$。代回$z=u^\prime$可解得
$$
u(y)=-C_2\cdot e^{-\alpha y} + C_3
$$
其中$C_2=\frac{C_1}{\alpha}$。

这就是 CARA 效用的函数形式。一般会忽略常数项，写为
$$
u(c)=-e^{-\alpha c}
$$
因为这个函数满足 $R_A(c)=\alpha$，因此可以反映个体在特定风险厌恶水平下不同财富水平带来的的效用。



## 相对风险厌恶



相对风险厌恶和绝对风险厌恶的区别在于，注意上面的情景我们设定无论是获利还是损失，都是相同的金额，但相同的金额在不同财富水平的投资者看来是不同的。如何用一种更具有「普遍」性的方式来衡量风险厌恶？答案是让获利或损失固定金额改为获利或损失自己财富的固定比例，这里设为$\theta$，那么期望效用为
$$
u(y)=\pi^*u(y+\theta y)+(1-\pi^*)u(y-\theta y)
$$
同样进行泰勒展开并代入
$$
u(y)=\pi^*\left[u(y)+\theta yu^{\prime}(y)+\frac{\theta^2}{2}y^2u^{\prime\prime}(y)\right]+(1-\pi^*)\left[u(y)-\theta yu^{\prime}(y)+\frac{\theta^2}{2}y^2u^{\prime\prime}(y)\right]
$$
解得
$$
\pi^*=\frac{1}{2}+\frac{\theta}{4}\left[-\frac{yu^{\prime\prime}(y)}{u^{\prime}(y)}\right]
$$
定义
$$
R_R(y)=\left[-\frac{yu^{\prime\prime}(y)}{u^{\prime}(y)}\right]
$$
$R_R(y)$为相对风险厌恶指数（Coefficient of Relative Risk Aversion, RRA）

同样，接下来通过求解微分方程
$$
\gamma=-\frac{yu^{\prime\prime}(y)}{u^{\prime}(y)}
$$


获得 CRRA 效用函数形式。首先两边同时除以$-y$
$$
-\frac{\gamma}{y} = \frac{u^{\prime\prime}(y)}{u^{\prime}(y)}
$$
这是一个二阶常微分方程。我们可以通过设 $v(y) = u^{\prime}(y)$ 来降阶。那么，$v^{\prime}(y) = u^{\prime\prime}(y)$。
代入上述方程，我们得到一个关于 $v(y)$ 的一阶微分方程：
$$
-\frac{\gamma}{y} = \frac{v^{\prime}(y)}{v(y)}
$$
上述方程是一个可分离变量的方程。我们可以将其写成：
$$
\frac{dv}{v} = -\frac{\gamma}{y} dy
$$
现在对两边进行积分：
$$
\int \frac{1}{v} dv = \int -\frac{\gamma}{y} dy
$$
得到：
$$
|v(y)| = e^{\ln|y^{-\gamma}| + C_1} = e^{C_1} e^{\ln|y^{-\gamma}|} = e^{C_1} |y^{-\gamma}|
$$
其中$A = \pm e^{C_1}$。因此
$$
u^{\prime}(y) = A y^{-\gamma}
$$
现在，我们对上式再次积分以求得 $u(y)$。这里一般需要分类讨论，但回到

当 $\gamma \neq 1$ 时，积分 $A y^{-\gamma}$ 得到：
$$
u(y) = \int A y^{-\gamma} dy = A \frac{y^{-\gamma+1}}{-\gamma+1} + B
$$
因此
$$
u(y) = \frac{A}{1-\gamma} y^{1-\gamma} + B
$$
其中 $B$ 是另一个积分常数。

因此一种常用的 CRRA 效用函数为
$$
u(c)=\frac{c^{1-\gamma}}{1-\gamma}
$$
但很多情况下会使用这样的 CRRA 函数形式
$$
u(c)=\frac{c^{1-\gamma}-1}{1-\gamma}
$$

目的是在$c=1$时$u(c)=0$，这一前提假设比较常用。

注意还有一种情况，就是 $\gamma = 1$ ，此时微分方程解为
$$
u(y) = A \ln|y| + B
$$
这实际上就回到了对数效用形式。