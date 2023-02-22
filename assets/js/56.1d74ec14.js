(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{736:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dockerfile-最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-最佳实践"}},[s._v("#")]),s._v(" Dockerfile 最佳实践")]),s._v(" "),a("h2",{attrs:{id:"一般性的指南和建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般性的指南和建议"}},[s._v("#")]),s._v(" 一般性的指南和建议")]),s._v(" "),a("h3",{attrs:{id:"容器应该是短暂的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器应该是短暂的"}},[s._v("#")]),s._v(" 容器应该是短暂的")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("Dockerfile")]),s._v(" 构建的镜像所启动的容器应该尽可能短暂（生命周期短）。「短暂」意味着可以停止和销毁容器，并且创建一个新容器并部署好所需的设置和配置工作量应该是极小的。")]),s._v(" "),a("h3",{attrs:{id:"使用-dockerignore-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-dockerignore-文件"}},[s._v("#")]),s._v(" 使用 "),a("code",[s._v(".dockerignore")]),s._v(" 文件")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("Dockerfile")]),s._v(" 构建镜像时最好是将 "),a("code",[s._v("Dockerfile")]),s._v(" 放置在一个新建的空目录下。然后将构建镜像所需要的文件添加到该目录中。为了提高构建镜像的效率，你可以在目录下新建一个 "),a("code",[s._v(".dockerignore")]),s._v(" 文件来指定要忽略的文件和目录。"),a("code",[s._v(".dockerignore")]),s._v(" 文件的排除模式语法和 Git 的 "),a("code",[s._v(".gitignore")]),s._v(" 文件相似。")]),s._v(" "),a("h3",{attrs:{id:"使用多阶段构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用多阶段构建"}},[s._v("#")]),s._v(" 使用多阶段构建")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("Docker 17.05")]),s._v(" 以上版本中，你可以使用 "),a("code",[s._v("多阶段构建")]),s._v(" 来减少所构建镜像的大小。")]),s._v(" "),a("h3",{attrs:{id:"避免安装不必要的包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免安装不必要的包"}},[s._v("#")]),s._v(" 避免安装不必要的包")]),s._v(" "),a("p",[s._v("为了降低复杂性、减少依赖、减小文件大小、节约构建时间，你应该避免安装任何不必要的包。例如，不要在数据库镜像中包含一个文本编辑器。")]),s._v(" "),a("h3",{attrs:{id:"一个容器只运行一个进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个容器只运行一个进程"}},[s._v("#")]),s._v(" 一个容器只运行一个进程")]),s._v(" "),a("p",[s._v("应该保证在一个容器中只运行一个进程。将多个应用解耦到不同容器中，保证了容器的横向扩展和复用。例如 web 应用应该包含三个容器：web应用、数据库、缓存。")]),s._v(" "),a("p",[s._v("如果容器互相依赖，你可以使用 "),a("code",[s._v("Docker 自定义网络")]),s._v(" 来把这些容器连接起来。")]),s._v(" "),a("h3",{attrs:{id:"镜像层数尽可能少"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像层数尽可能少"}},[s._v("#")]),s._v(" 镜像层数尽可能少")]),s._v(" "),a("p",[s._v("你需要在 "),a("code",[s._v("Dockerfile")]),s._v(" 可读性（也包括长期的可维护性）和减少层数之间做一个平衡。")]),s._v(" "),a("h3",{attrs:{id:"将多行参数排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将多行参数排序"}},[s._v("#")]),s._v(" 将多行参数排序")]),s._v(" "),a("p",[s._v("将多行参数按字母顺序排序（比如要安装多个包时）。这可以帮助你避免重复包含同一个包，更新包列表时也更容易。也便于 "),a("code",[s._v("PRs")]),s._v(" 阅读和审查。建议在反斜杠符号 "),a("code",[s._v("\\")]),s._v(" 之前添加一个空格，以增加可读性。")]),s._v(" "),a("p",[s._v("下面是来自 "),a("code",[s._v("buildpack-deps")]),s._v(" 镜像的例子：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update && apt-get install -y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  bzr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  cvs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  git "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  mercurial "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  subversion")]),s._v("\n")])])]),a("h3",{attrs:{id:"构建缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建缓存"}},[s._v("#")]),s._v(" 构建缓存")]),s._v(" "),a("p",[s._v("在镜像的构建过程中，Docker 会遍历 "),a("code",[s._v("Dockerfile")]),s._v(" 文件中的指令，然后按顺序执行。在执行每条指令之前，Docker 都会在缓存中查找是否已经存在可重用的镜像，如果有就使用现存的镜像，不再重复创建。如果你不想在构建过程中使用缓存，你可以在 "),a("code",[s._v("docker build")]),s._v(" 命令中使用 "),a("code",[s._v("--no-cache=true")]),s._v(" 选项。")]),s._v(" "),a("p",[s._v("但是，如果你想在构建的过程中使用缓存，你得明白什么时候会，什么时候不会找到匹配的镜像，遵循的基本规则如下：")]),s._v(" "),a("ul",[a("li",[s._v("从一个基础镜像开始（"),a("code",[s._v("FROM")]),s._v(" 指令指定），下一条指令将和该基础镜像的所有子镜像进行匹配，检查这些子镜像被创建时使用的指令是否和被检查的指令完全一样。如果不是，则缓存失效。")]),s._v(" "),a("li",[s._v("在大多数情况下，只需要简单地对比 "),a("code",[s._v("Dockerfile")]),s._v(" 中的指令和子镜像。然而，有些指令需要更多的检查和解释。")]),s._v(" "),a("li",[s._v("对于 "),a("code",[s._v("ADD")]),s._v(" 和 "),a("code",[s._v("COPY")]),s._v(" 指令，镜像中对应文件的内容也会被检查，每个文件都会计算出一个校验和。文件的最后修改时间和最后访问时间不会纳入校验。在缓存的查找过程中，会将这些校验和和已存在镜像中的文件校验和进行对比。如果文件有任何改变，比如内容和元数据，则缓存失效。")]),s._v(" "),a("li",[s._v("除了 "),a("code",[s._v("ADD")]),s._v(" 和 "),a("code",[s._v("COPY")]),s._v(" 指令，缓存匹配过程不会查看临时容器中的文件来决定缓存是否匹配。例如，当执行完 "),a("code",[s._v("RUN apt-get -y update")]),s._v(" 指令后，容器中一些文件被更新，但 Docker 不会检查这些文件。这种情况下，只有指令字符串本身被用来匹配缓存。")])]),s._v(" "),a("p",[s._v("一旦缓存失效，所有后续的 "),a("code",[s._v("Dockerfile")]),s._v(" 指令都将产生新的镜像，缓存不会被使用。")]),s._v(" "),a("h2",{attrs:{id:"dockerfile-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-指令"}},[s._v("#")]),s._v(" Dockerfile 指令")]),s._v(" "),a("p",[s._v("下面针对 "),a("code",[s._v("Dockerfile")]),s._v(" 中各种指令的最佳编写方式给出建议。")]),s._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[s._v("#")]),s._v(" FROM")]),s._v(" "),a("p",[s._v("尽可能使用当前官方仓库作为你构建镜像的基础。推荐使用 "),a("a",{attrs:{href:"https://hub.docker.com/_/alpine/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Alpine"),a("OutboundLink")],1),s._v(" 镜像，因为它被严格控制并保持最小尺寸（目前小于 5 MB），但它仍然是一个完整的发行版。")]),s._v(" "),a("h3",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[s._v("#")]),s._v(" LABEL")]),s._v(" "),a("p",[s._v("你可以给镜像添加标签来帮助组织镜像、记录许可信息、辅助自动化构建等。每个标签一行，由 "),a("code",[s._v("LABEL")]),s._v(" 开头加上一个或多个标签对。下面的示例展示了各种不同的可能格式。"),a("code",[s._v("#")]),s._v(" 开头的行是注释内容。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：如果你的字符串中包含空格，必须将字符串放入引号中或者对空格使用转义。如果字符串内容本身就包含引号，必须对引号使用转义。")])]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set one or more individual labels")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" com.example.version="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1-beta"')])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" vendor="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ACME Incorporated"')])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" com.example.release-date="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2015-02-12"')])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" com.example.version.is-production="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')])]),s._v("\n")])])]),a("p",[s._v("一个镜像可以包含多个标签，但建议将多个标签放入到一个 "),a("code",[s._v("LABEL")]),s._v(" 指令中。")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set multiple labels at once, using line-continuation characters to break long lines")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" vendor=ACME\\ Incorporated "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n      com.example.is-beta= "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n      com.example.is-production="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n      com.example.version="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1-beta"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n      com.example.release-date="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2015-02-12"')])]),s._v("\n")])])]),a("p",[s._v("关于标签可以接受的键值对，参考 "),a("a",{attrs:{href:"https://docs.docker.com/engine/userguide/labels-custom-metadata/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Understanding object labels"),a("OutboundLink")],1),s._v("。关于查询标签信息，参考 "),a("a",{attrs:{href:"https://docs.docker.com/engine/userguide/labels-custom-metadata/#managing-labels-on-objects",target:"_blank",rel:"noopener noreferrer"}},[s._v("Managing labels on objects"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" RUN")]),s._v(" "),a("p",[s._v("为了保持 "),a("code",[s._v("Dockerfile")]),s._v(" 文件的可读性，可理解性，以及可维护性，建议将长的或复杂的 "),a("code",[s._v("RUN")]),s._v(" 指令用反斜杠 "),a("code",[s._v("\\")]),s._v(" 分割成多行。")]),s._v(" "),a("h4",{attrs:{id:"apt-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apt-get"}},[s._v("#")]),s._v(" apt-get")]),s._v(" "),a("p",[a("code",[s._v("RUN")]),s._v(" 指令最常见的用法是安装包用的 "),a("code",[s._v("apt-get")]),s._v("。因为 "),a("code",[s._v("RUN apt-get")]),s._v(" 指令会安装包，所以有几个问题需要注意。")]),s._v(" "),a("p",[s._v("不要使用 "),a("code",[s._v("RUN apt-get upgrade")]),s._v(" 或 "),a("code",[s._v("dist-upgrade")]),s._v("，因为许多基础镜像中的「必须」包不会在一个非特权容器中升级。如果基础镜像中的某个包过时了，你应该联系它的维护者。如果你确定某个特定的包，比如 "),a("code",[s._v("foo")]),s._v("，需要升级，使用 "),a("code",[s._v("apt-get install -y foo")]),s._v(" 就行，该指令会自动升级 "),a("code",[s._v("foo")]),s._v(" 包。")]),s._v(" "),a("p",[s._v("永远将 "),a("code",[s._v("RUN apt-get update")]),s._v(" 和 "),a("code",[s._v("apt-get install")]),s._v(" 组合成一条 "),a("code",[s._v("RUN")]),s._v(" 声明，例如：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update && apt-get install -y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        package-bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        package-baz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        package-foo")]),s._v("\n")])])]),a("p",[s._v("将 "),a("code",[s._v("apt-get update")]),s._v(" 放在一条单独的 "),a("code",[s._v("RUN")]),s._v(" 声明中会导致缓存问题以及后续的 "),a("code",[s._v("apt-get install")]),s._v(" 失败。比如，假设你有一个 "),a("code",[s._v("Dockerfile")]),s._v(" 文件：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu:14.04")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get install -y curl")]),s._v("\n")])])]),a("p",[s._v("构建镜像后，所有的层都在 Docker 的缓存中。假设你后来又修改了其中的 "),a("code",[s._v("apt-get install")]),s._v(" 添加了一个包：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu:14.04")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get install -y curl nginx")]),s._v("\n")])])]),a("p",[s._v("Docker 发现修改后的 "),a("code",[s._v("RUN apt-get update")]),s._v(" 指令和之前的完全一样。所以，"),a("code",[s._v("apt-get update")]),s._v(" 不会执行，而是使用之前的缓存镜像。因为 "),a("code",[s._v("apt-get update")]),s._v(" 没有运行，后面的 "),a("code",[s._v("apt-get install")]),s._v(" 可能安装的是过时的 "),a("code",[s._v("curl")]),s._v(" 和 "),a("code",[s._v("nginx")]),s._v(" 版本。")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("RUN apt-get update && apt-get install -y")]),s._v(" 可以确保你的 Dockerfiles 每次安装的都是包的最新的版本，而且这个过程不需要进一步的编码或额外干预。这项技术叫作 "),a("code",[s._v("cache busting")]),s._v("。你也可以显示指定一个包的版本号来达到 "),a("code",[s._v("cache-busting")]),s._v("，这就是所谓的固定版本，例如：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update && apt-get install -y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    package-bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    package-baz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    package-foo=1.3.*")]),s._v("\n")])])]),a("p",[s._v("固定版本会迫使构建过程检索特定的版本，而不管缓存中有什么。这项技术也可以减少因所需包中未预料到的变化而导致的失败。")]),s._v(" "),a("p",[s._v("下面是一个 "),a("code",[s._v("RUN")]),s._v(" 指令的示例模板，展示了所有关于 "),a("code",[s._v("apt-get")]),s._v(" 的建议。")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update && apt-get install -y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    aufs-tools "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    automake "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    build-essential "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    dpkg-sig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    libcap-dev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    libsqlite3-dev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    mercurial "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    reprepro "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    ruby1.9.1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    ruby1.9.1-dev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    s3cmd=1.1.* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n && rm -rf /var/lib/apt/lists/*")]),s._v("\n")])])]),a("p",[s._v("其中 "),a("code",[s._v("s3cmd")]),s._v(" 指令指定了一个版本号 "),a("code",[s._v("1.1.*")]),s._v("。如果之前的镜像使用的是更旧的版本，指定新的版本会导致 "),a("code",[s._v("apt-get udpate")]),s._v(" 缓存失效并确保安装的是新版本。")]),s._v(" "),a("p",[s._v("另外，清理掉 apt 缓存 "),a("code",[s._v("var/lib/apt/lists")]),s._v(" 可以减小镜像大小。因为 "),a("code",[s._v("RUN")]),s._v(" 指令的开头为 "),a("code",[s._v("apt-get udpate")]),s._v("，包缓存总是会在 "),a("code",[s._v("apt-get install")]),s._v(" 之前刷新。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：官方的 Debian 和 Ubuntu 镜像会自动运行 apt-get clean，所以不需要显式的调用 apt-get clean。")])]),s._v(" "),a("h3",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[s._v("#")]),s._v(" CMD")]),s._v(" "),a("p",[a("code",[s._v("CMD")]),s._v(" 指令用于执行目标镜像中包含的软件，可以包含参数。"),a("code",[s._v("CMD")]),s._v(" 大多数情况下都应该以 "),a("code",[s._v('CMD ["executable", "param1", "param2"...]')]),s._v(" 的形式使用。因此，如果创建镜像的目的是为了部署某个服务(比如 "),a("code",[s._v("Apache")]),s._v(")，你可能会执行类似于 "),a("code",[s._v('CMD ["apache2", "-DFOREGROUND"]')]),s._v(" 形式的命令。我们建议任何服务镜像都使用这种形式的命令。")]),s._v(" "),a("p",[s._v("多数情况下，"),a("code",[s._v("CMD")]),s._v(" 都需要一个交互式的 "),a("code",[s._v("shell")]),s._v(" (bash, Python, perl 等)，例如 "),a("code",[s._v('CMD ["perl", "-de0"]')]),s._v("，或者 "),a("code",[s._v('CMD ["PHP", "-a"]')]),s._v("。使用这种形式意味着，当你执行类似 "),a("code",[s._v("docker run -it python")]),s._v(" 时，你会进入一个准备好的 "),a("code",[s._v("shell")]),s._v(" 中。"),a("code",[s._v("CMD")]),s._v(" 应该在极少的情况下才能以 "),a("code",[s._v('CMD ["param", "param"]')]),s._v(" 的形式与 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 协同使用，除非你和你的镜像使用者都对 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 的工作方式十分熟悉。")]),s._v(" "),a("h3",{attrs:{id:"expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[s._v("#")]),s._v(" EXPOSE")]),s._v(" "),a("p",[a("code",[s._v("EXPOSE")]),s._v(" 指令用于指定容器将要监听的端口。因此，你应该为你的应用程序使用常见的端口。例如，提供 "),a("code",[s._v("Apache")]),s._v(" web 服务的镜像应该使用 "),a("code",[s._v("EXPOSE 80")]),s._v("，而提供 "),a("code",[s._v("MongoDB")]),s._v(" 服务的镜像使用 "),a("code",[s._v("EXPOSE 27017")]),s._v("。")]),s._v(" "),a("p",[s._v("对于外部访问，用户可以在执行 "),a("code",[s._v("docker run")]),s._v(" 时使用一个标志来指示如何将指定的端口映射到所选择的端口。")]),s._v(" "),a("h3",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[s._v("#")]),s._v(" ENV")]),s._v(" "),a("p",[s._v("为了方便新程序运行，你可以使用 "),a("code",[s._v("ENV")]),s._v(" 来为容器中安装的程序更新 "),a("code",[s._v("PATH")]),s._v(" 环境变量。例如使用 "),a("code",[s._v("ENV PATH /usr/local/nginx/bin:$PATH")]),s._v(" 来确保 "),a("code",[s._v('CMD ["nginx"]')]),s._v(" 能正确运行。")]),s._v(" "),a("p",[a("code",[s._v("ENV")]),s._v(" 指令也可用于为你想要容器化的服务提供必要的环境变量，比如 Postgres 需要的 "),a("code",[s._v("PGDATA")]),s._v("。")]),s._v(" "),a("p",[s._v("最后，"),a("code",[s._v("ENV")]),s._v(" 也能用于设置常见的版本号，比如下面的示例：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PG_MAJOR 9.3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PG_VERSION 9.3.4")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" curl -SL http://example.com/postgres-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PG_VERSION")]),s._v(".tar.xz | tar -xJC /usr/src/postgress && …")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PATH /usr/local/postgres-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PG_MAJOR")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")])]),s._v("\n")])])]),a("p",[s._v("类似于程序中的常量，这种方法可以让你只需改变 "),a("code",[s._v("ENV")]),s._v(" 指令来自动的改变容器中的软件版本。")]),s._v(" "),a("h3",{attrs:{id:"add-和-copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-和-copy"}},[s._v("#")]),s._v(" ADD 和 COPY")]),s._v(" "),a("p",[s._v("虽然 "),a("code",[s._v("ADD")]),s._v(" 和 "),a("code",[s._v("COPY")]),s._v(" 功能类似，但一般优先使用 "),a("code",[s._v("COPY")]),s._v("。因为它比 "),a("code",[s._v("ADD")]),s._v(" 更透明。"),a("code",[s._v("COPY")]),s._v(" 只支持简单将本地文件拷贝到容器中，而 "),a("code",[s._v("ADD")]),s._v(" 有一些并不明显的功能（比如本地 tar 提取和远程 URL 支持）。因此，"),a("code",[s._v("ADD")]),s._v(" 的最佳用例是将本地 tar 文件自动提取到镜像中，例如 "),a("code",[s._v("ADD rootfs.tar.xz")]),s._v("。")]),s._v(" "),a("p",[s._v("如果你的 "),a("code",[s._v("Dockerfile")]),s._v(" 有多个步骤需要使用上下文中不同的文件。单独 "),a("code",[s._v("COPY")]),s._v(" 每个文件，而不是一次性的 "),a("code",[s._v("COPY")]),s._v(" 所有文件，这将保证每个步骤的构建缓存只在特定的文件变化时失效。例如：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" requirements.txt /tmp/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pip install --requirement /tmp/requirements.txt")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /tmp/")]),s._v("\n")])])]),a("p",[s._v("如果将 "),a("code",[s._v("COPY . /tmp/")]),s._v(" 放置在 "),a("code",[s._v("RUN")]),s._v(" 指令之前，只要 "),a("code",[s._v(".")]),s._v(" 目录中任何一个文件变化，都会导致后续指令的缓存失效。")]),s._v(" "),a("p",[s._v("为了让镜像尽量小，最好不要使用 "),a("code",[s._v("ADD")]),s._v(" 指令从远程 URL 获取包，而是使用 "),a("code",[s._v("curl")]),s._v(" 和 "),a("code",[s._v("wget")]),s._v("。这样你可以在文件提取完之后删掉不再需要的文件来避免在镜像中额外添加一层。比如尽量避免下面的用法：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" http://example.com/big.tar.xz /usr/src/things/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" tar -xJf /usr/src/things/big.tar.xz -C /usr/src/things")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" make -C /usr/src/things all")]),s._v("\n")])])]),a("p",[s._v("而是应该使用下面这种方法：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir -p /usr/src/things "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && curl -SL http://example.com/big.tar.xz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    | tar -xJC /usr/src/things "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && make -C /usr/src/things all")]),s._v("\n")])])]),a("p",[s._v("上面使用的管道操作，所以没有中间文件需要删除。")]),s._v(" "),a("p",[s._v("对于其他不需要 "),a("code",[s._v("ADD")]),s._v(" 的自动提取功能的文件或目录，你应该使用 "),a("code",[s._v("COPY")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[s._v("#")]),s._v(" ENTRYPOINT")]),s._v(" "),a("p",[a("code",[s._v("ENTRYPOINT")]),s._v(" 的最佳用处是设置镜像的主命令，允许将镜像当成命令本身来运行（用 "),a("code",[s._v("CMD")]),s._v(" 提供默认选项）。")]),s._v(" "),a("p",[s._v("例如，下面的示例镜像提供了命令行工具 "),a("code",[s._v("s3cmd")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s3cmd"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--help"')]),s._v("]")]),s._v("\n")])])]),a("p",[s._v("现在直接运行该镜像创建的容器会显示命令帮助：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run s3cmd\n")])])]),a("p",[s._v("或者提供正确的参数来执行某个命令：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run s3cmd "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" s3://mybucket\n")])])]),a("p",[s._v("这样镜像名可以当成命令行的参考。")]),s._v(" "),a("p",[a("code",[s._v("ENTRYPOINT")]),s._v(" 指令也可以结合一个辅助脚本使用，和前面命令行风格类似，即使启动工具需要不止一个步骤。")]),s._v(" "),a("p",[s._v("例如，"),a("code",[s._v("Postgres")]),s._v(" 官方镜像使用下面的脚本作为 "),a("code",[s._v("ENTRYPOINT")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R postgres "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PGDATA")]),s._v('"')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -A "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PGDATA")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        gosu postgres initdb\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" gosu postgres "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("注意：该脚本使用了 Bash 的内置命令 exec，所以最后运行的进程就是容器的 PID 为 1 的进程。这样，进程就可以接收到任何发送给容器的 Unix 信号了。")])]),s._v(" "),a("p",[s._v("该辅助脚本被拷贝到容器，并在容器启动时通过 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 执行：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./docker-entrypoint.sh /")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/docker-entrypoint.sh"')]),s._v("]")]),s._v("\n")])])]),a("p",[s._v("该脚本可以让用户用几种不同的方式和 "),a("code",[s._v("Postgres")]),s._v(" 交互。")]),s._v(" "),a("p",[s._v("你可以很简单地启动 "),a("code",[s._v("Postgres")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run postgres\n")])])]),a("p",[s._v("也可以执行 "),a("code",[s._v("Postgres")]),s._v(" 并传递参数：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run postgres postgres --help\n")])])]),a("p",[s._v("最后，你还可以启动另外一个完全不同的工具，比如 "),a("code",[s._v("Bash")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --rm -it postgres "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("h3",{attrs:{id:"volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[s._v("#")]),s._v(" VOLUME")]),s._v(" "),a("p",[a("code",[s._v("VOLUME")]),s._v(" 指令用于暴露任何数据库存储文件，配置文件，或容器创建的文件和目录。强烈建议使用 "),a("code",[s._v("VOLUME")]),s._v(" 来管理镜像中的可变部分和用户可以改变的部分。")]),s._v(" "),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[s._v("#")]),s._v(" USER")]),s._v(" "),a("p",[s._v("如果某个服务不需要特权执行，建议使用 "),a("code",[s._v("USER")]),s._v(" 指令切换到非 root 用户。先在 "),a("code",[s._v("Dockerfile")]),s._v(" 中使用类似 "),a("code",[s._v("RUN groupadd -r postgres && useradd -r -g postgres postgres")]),s._v(" 的指令创建用户和用户组。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：在镜像中，用户和用户组每次被分配的 UID/GID 都是不确定的，下次重新构建镜像时被分配到的 UID/GID 可能会不一样。如果要依赖确定的 UID/GID，你应该显示的指定一个 UID/GID。")])]),s._v(" "),a("p",[s._v("你应该避免使用 "),a("code",[s._v("sudo")]),s._v("，因为它不可预期的 TTY 和信号转发行为可能造成的问题比它能解决的问题还多。如果你真的需要和 "),a("code",[s._v("sudo")]),s._v(" 类似的功能（例如，以 root 权限初始化某个守护进程，以非 root 权限执行它），你可以使用 "),a("a",{attrs:{href:"https://github.com/tianon/gosu",target:"_blank",rel:"noopener noreferrer"}},[s._v("gosu"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("最后，为了减少层数和复杂度，避免频繁地使用 "),a("code",[s._v("USER")]),s._v(" 来回切换用户。")]),s._v(" "),a("h3",{attrs:{id:"workdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[s._v("#")]),s._v(" WORKDIR")]),s._v(" "),a("p",[s._v("为了清晰性和可靠性，你应该总是在 "),a("code",[s._v("WORKDIR")]),s._v(" 中使用绝对路径。另外，你应该使用 "),a("code",[s._v("WORKDIR")]),s._v(" 来替代类似于 "),a("code",[s._v("RUN cd ... && do-something")]),s._v(" 的指令，后者难以阅读、排错和维护。")]),s._v(" "),a("h2",{attrs:{id:"官方仓库示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方仓库示例"}},[s._v("#")]),s._v(" 官方仓库示例")]),s._v(" "),a("p",[s._v("这些官方仓库的 Dockerfile 都是参考典范：https://github.com/docker-library/docs")])])}),[],!1,null,null,null);t.default=r.exports}}]);