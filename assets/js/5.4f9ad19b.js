(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{375:function(t,s,a){t.exports=a.p+"assets/img/qrcode.c5d5575d.gif"},428:function(t,s,a){t.exports=a.p+"assets/img/cover.b9b46ef7.jpeg"},429:function(t,s,a){t.exports=a.p+"assets/img/bad-translation.3834aa97.png"},430:function(t,s,a){t.exports=a.p+"assets/img/kentcdodds.495b14fe.png"},474:function(t,s,a){"use strict";a.r(s);var e=a(34),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"小书介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小书介绍"}},[t._v("#")]),t._v(" 小书介绍")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://coveralls.io/github/haixiangyan/jest-tutorial?branch=main",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://coveralls.io/repos/github/haixiangyan/jest-tutorial-example/badge.svg?branch=main",alt:"Coverage Status"}}),e("OutboundLink")],1),t._v(" "),e("img",{attrs:{src:"https://visitor-badge.glitch.me/badge?page_id=jest-tutorial",alt:""}})]),t._v(" "),e("img",{attrs:{src:a(428),width:"300"}}),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.yanhaixiang.com/jest-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Jest 实践指南》访问链接"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/haixiangyan/jest-tutorial-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Jest 实践指南》配套项目"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"测试难点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试难点"}},[t._v("#")]),t._v(" 测试难点")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest"),e("OutboundLink")],1),t._v(" 看似很简单，就像很多博客写的那样：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toEqual")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("然而在真实业务中，写出一个好测试的难度并没有大家想的那么低。我总结了一下写测试的几个难点：")]),t._v(" "),e("p",[e("strong",[t._v("不会配置。")]),t._v(" Jest 的上手文档非常简单，甚至不需要配置。但真实情况是只要一个配置没配好，所有测试都跑不起来。测试不像开发，代码有问题可以慢慢调。\n测试是一个 0 - 1 游戏，不是成功就是失败，挫败感非常强。")]),t._v(" "),e("p",[e("strong",[t._v("不知道要怎么 Mock。")]),t._v(" 这个绝对是经典中的经典。虽然官方文档有教程，但是真实的业务往往不是那么理想，远比文档要复杂的多。")]),t._v(" "),e("p",[e("strong",[t._v("不会构造测试用例。")]),t._v(" 刚接触测试时，很容易把做业务那套 “实现 XXX 功能” 的想法代入测试。但测试的重点不在于实现功能，而是构造用例。")]),t._v(" "),e("p",[e("strong",[t._v("没有测试策略。")]),t._v(" 上面是 “技” 的难点，测试还有 “术” 的难点。闷着头一通肝测试代码并不高效，使用合适的测试策略远比写 10 个测试用例重要。")]),t._v(" "),e("p",[t._v("上面这些问题很容易让人写出难以维护和复杂的测试。只要业务一改，不仅要维护业务代码还要维护测试代码。\n这时，你不禁感叹：“测试真浪费时间”，最终放弃写测试，直接开摆。")]),t._v(" "),e("p",[e("strong",[t._v("好的测试会让你获得很高的代码信心，而不好的测试则会严重拖垮项目开发。所以，大家所厌恶的不应该是测试本身，而是那些维护性差的测试。")])]),t._v(" "),e("h2",{attrs:{id:"目的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),e("p",[t._v("我在网上翻找关于前端测试的资料时，我发现真的太少了，几乎可以分为几类：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("入门类。")]),t._v(" 安装 Jest，外加 "),e("code",[t._v("expect(1 + 1).toEqual(2)")]),t._v(" 小例子")]),t._v(" "),e("li",[e("strong",[t._v("API 说明书类。")]),t._v(" 类似于把 Jest 官网抄了一遍")]),t._v(" "),e("li",[e("strong",[t._v("理论类。")]),t._v(" 是什么、为什么、测试分类等，但最重要的 “怎么做” 没有说")])]),t._v(" "),e("p",[t._v("并不是说这些文章不好，只是，这些文章大多数停留在最初级，很不利于其它同学来学习一门新技术。")]),t._v(" "),e("p",[t._v("同时，我还拜访了一下 "),e("a",{attrs:{href:"https://jestjs.io/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest 的官网"),e("OutboundLink")],1),t._v(" 。没想到，都 2022 年了，中文翻译依然这么难看：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(429),alt:""}})]),t._v(" "),e("p",[t._v("先不说翻译的正确性如何，单看这中文的内容就让人没有想看下去的欲望，真希望 Jest 能找稍微专业一点的人来做翻译。\n由于官网的中文翻译做的实在太烂，遇到问题几乎在中文社区是找不到的。")]),t._v(" "),e("p",[t._v("终于，我看到了 React Testing Library 作者 Kent C. Dodds 的 "),e("a",{attrs:{href:"https://kentcdodds.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),e("OutboundLink")],1),t._v(" 。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(430),alt:""}})]),t._v(" "),e("p",[t._v("他写了很多关于测试思路的文章，每一篇都非常精彩。"),e("strong",[t._v("受他的启发，我觉得有必要把这些思想和技巧分享出来，最终形成了这本小书。")])]),t._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("此次教程主要分享测试的思路为主，虽然以 React 为主要技术栈，但使用其它技术栈的读者依然可以流畅阅读。")])]),t._v(" "),e("p",[e("strong",[t._v("本教程是我结合了自身实践、Kent C. Dodds 文章、StackOverflow、Github Issue 以及别的博客最终总结出来的一套实践指南。")])]),t._v(" "),e("p",[t._v("小书包含 3 部分：")]),t._v(" "),e("p",[e("strong",[t._v("基础实践。")]),t._v(" 从 0 到 1 写项目和测试，每一章会通过一个业务例子来分享测试难点、解法和思路。")]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://github.com/haixiangyan/jest-tutorial-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("配套项目"),e("OutboundLink")],1),t._v("。")]),t._v(" 如果你在某一步卡壳了，也可以参考这个项目。")]),t._v(" "),e("p",[e("strong",[t._v("测试思路。")]),t._v(" 分享一些 Kent 的文章（中文翻译）以及测试总结。")]),t._v(" "),e("h2",{attrs:{id:"求关注"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#求关注"}},[t._v("#")]),t._v(" 求关注")]),t._v(" "),e("p",[e("strong",[t._v("这教程 + 配套项目写了 3 周，说实话挺累的。原创不易，打赏就不必了，观众老爷省着吧。只求大家多关注一下我的新公众号【写代码的海怪】。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(375),alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);