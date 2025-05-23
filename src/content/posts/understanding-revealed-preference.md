---
title: 浅谈显示偏好
description: 显示偏好背后是人类的一致性
published: 2024-12-21
tags: 
    - 经济学
    - 理论
---
看范里安的微观经济学，第一只拦路虎恐怕就是显示偏好这一章，虽然在书本上这个概念和公理描述地非常简洁明了，但是看后面的分析和习题又会觉得一头雾水。显示偏好实际上是一个非常直观易理解的概念，在这里我试着详细地对这个概念进行解释，并结合一些习题来完善我的解释。

进入「显示偏好」这个概念前，首先来点形而上的东西。陈嘉映老师在《何为良好生活》里写到：

> 向善者不只是把各种道德律令刻录到自己身上，他要在伦理层面上过上一种整体的生活。惟为事能执之一贯，才算有性格。惟把种种本能、感觉、欲望加以协调，才称得上本性。

如果说「显示偏好」这个概念有什么基础假定的话，我会认为就是陈老师所述的这种「执之一贯」。显示偏好在教材上的原文定义是：**消费者在一定价格条件下的购买行为暴露了或者显示了他内在的偏好倾向。** 需要注意的是，「内在的偏好倾向」似乎是一个概括性的、相对「静止」的词汇，但前半句的「在一定价格条件下的购买行为」却更像一个瞬时的决策行为。所以大致可以理解「显示偏好」是一种后验的判断，也就是 **即使是在不同价格条件下，消费者对多种商品的相对偏好基本保持一致。**



## 直接显示偏好

假设共有两种商品，商品 1 和商品 2，价格分别为$p_1$和$p_2$。商品束$(x_1, x_2)$和$(y_1,y_2)$满足：
$$
p_1x_1+p_2x_2\geq p_1y_1+p_2y_2
$$
那么可以说$(x_1, x_2)\succ(y_1,y_2)$

教材上的理解大概是：由于$(x_1, x_2)$正好落在预算线上而$(y_1,y_2)$只是落在预算集内，所以$(x_1,x_2)\succ(y_1,y_2)$。我会更倾向于抛开预算约束来理解： **如果消费者选择的商品束相比其他商品束需要花费更多的钱，那么其对于他所选这个商品束必然有特别的偏好。** 当然这样做可能对推导无差异曲线造成一点障碍，但这实际上对理解后面的显示偏好弱公理（WARP）更有帮助。



## 显示偏好弱公理

显示偏好弱公理在直接显示偏好上加入了某种「平行世界」的假定，在平行世界中，价格发生了变动，消费者的选择也发生了变化，此时再与之前的显示偏好进行比较，考察消费者的偏好是否一致。

还是上面的两种商品，现在发生了价格的变化，商品 1 和商品 2 的价格变化成了$(q_1,q_2)$，此时选择的商品束为$(y_1,y_2)$。那么是否会出现这样一种情况： 
$$
q_1x_1+q_2x_2\leq q_1y_1+q_2y_2
$$
答案是 **不会**。在这种价格的情况下，选择$(x_1, x_2)$所花费的钱比$(y_1,y_2)$还少，前面我们判断了$(x_1, x_2)\succ(y_1,y_2)$，**消费者偏好这个商品束，在这种价格情况下消费该商品束价格还低于另一商品束**，此时就没有理由不选择$(x_1, x_2)$而选择$(y_1,y_2)$。因此这种情况下就可以判断为这种偏好不符合显示偏好弱公理。

所以我们可以总结判断显示偏好弱公理的步骤：

1. 用当期价格计算当期实际选择商品束的开销
2. 用其他期价格计算当期实际选择商品束的开销
3. 第二步得到的结果与第一步的结果进行比较，如果第二步得到的任何结果小于第一步，且在对应的价格时期没有选择都说明不满足显示偏好弱公理。



## 例题



| 观察期 | 价格$(p^{t}_1,p^{t}_2)$ | 商品束$(x^{t}_1,x^{t}_2)$ |
| ------ | ----------------------- | ------------------------- |
| t=0    | (1, 2)                  | (1, 2)                    |
| t=1    | (2, 1)                  | (2, 1)                    |
| t=2    | (1, 1)                  | (2, 2)                    |

该行为是否满足显示偏好弱公理？

三个价格水平和三个商品束，能得到九个开销

|           | t0时选的商品束 | t1时选的商品束 | t2时选的商品束 |
| --------- | -------------- | -------------- | -------------- |
| t0 的价格 | **5**          | 4              | 6              |
| t1的价格  | 4              | **5**          | 6              |
| t2的价格  | 3              | 3              | **4**          |

这个例子中，t0 时期选择了（1,2）商品束，这一商品束在t1的价格水平下是4，但t1水平下选择的商品束（2,1）所需价格却是5，在t1价格水平下没有理由不选择（1,2）但最后选择了(2,1)，说明不满足显示偏好弱公理。



## 补丁：每期预算约束

考虑这样一个行为：

| 观察期 | 价格$(p^{t}_1,p^{t}_2)$ | 商品束$(x^{t}_1,x^{t}_2)$ |
| ------ | ----------------------- | ------------------------- |
| t=0    | (1, 1, 2)               | (5, 19, 9)                |
| t=1    | (1, 1, 1)               | (12, 12, 12)              |
| t=2    | (1, 2, 1)               | (27, 11, 1)               |

用上面同样的方法计算：

|           | t0时选的商品束 | t1时选的商品束 | t2时选的商品束 |
| --------- | -------------- | -------------- | -------------- |
| t0 的价格 | **42**         | 48             | 40             |
| t1的价格  | 33             | **36**         | 39             |
| t2的价格  | 52             | 48             | **50**         |

如果按上面同样的方法分析：t0时选择的商品束在t1价格水平是33，但t1时选择的商品束所需价格却是36，因此不满足显示偏好公理。

如果这样分析的话就忽略了一个非常重要的前提，就是预算约束的问题，这也是前面我忽略预算约束最终容易导致的问题。在t1时期固然选择t0时的商品束的花费小于t0，但 **t0时期没有选择t1商品束是因为t0时的预算消费不了t1的商品束** 。在t0时期我们只能得到$(x^0_1,x^0_2)\succ(x^2_1,x^2_2)$，t0与t1时期的显示偏好是无法得出的。

所以 t1 时期预算只有 36，此时的价格水平无法消费t2的商品束，得到的显示偏好为$(x^1_1,x^1_2)\succ(x^0_1,x^0_2)$，这才是正确的t0商品束和t1商品束的显示偏好关系。

同样的，在t2时期，得到的显示偏好为$(x^2_1,x^2_2)\succ(x^1_1,x^1_2)$，因为此时的价格水平无法消费t0的商品束。

此时可以得到的结论是，虽然不满足传递性，但是得到的三个显示偏好并不互相矛盾，所以仍然是满足显示偏好弱公理的。



回到上面的题目：

|           | t0时选的商品束 | t1时选的商品束 | t2时选的商品束 |
| --------- | -------------- | -------------- | -------------- |
| t0 的价格 | **5**          | 4              | 6              |
| t1的价格  | 4              | **5**          | 6              |
| t2的价格  | 3              | 3              | **4**          |

我们用这个补丁来重新分析上面的结论：

- t0时期，无法消费t2时期的商品束，得到的显示偏好为$(x^0_1,x^0_2)\succ(x^1_1,x^1_2)$
- t1时期，无法消费t2时期的商品束，得到的显示偏好为$(x^1_1,x^1_2)\succ(x^0_1,x^0_2)$，与上一步矛盾。
- t2时期，得到的显示偏好为$(x^2_2,x^2_2)\succ(x^1_1,x^1_2)$和$(x^2_2,x^2_2)\succ(x^0_1,x^0_2)$