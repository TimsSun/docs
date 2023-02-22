(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{799:function(t,e,n){"use strict";n.r(e);var a=n(2),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"docker-hub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub"}},[t._v("#")]),t._v(" Docker Hub")]),t._v(" "),n("p",[t._v("目前 Docker 官方维护了一个公共仓库 "),n("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),n("OutboundLink")],1),t._v("，其中已经包括了数量超过 15,000 的镜像。大部分需求都可以通过在 Docker Hub 中直接下载镜像来实现。")]),t._v(" "),n("h2",{attrs:{id:"注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[t._v("#")]),t._v(" 注册")]),t._v(" "),n("p",[t._v("你可以在 https://cloud.docker.com 免费注册一个 Docker 账号。")]),t._v(" "),n("h2",{attrs:{id:"登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[t._v("#")]),t._v(" 登录")]),t._v(" "),n("p",[t._v("可以通过执行 "),n("code",[t._v("docker login")]),t._v(" 命令交互式的输入用户名及密码来完成在命令行界面登录 Docker Hub。")]),t._v(" "),n("p",[t._v("你可以通过 "),n("code",[t._v("docker logout")]),t._v(" 退出登录。")]),t._v(" "),n("h2",{attrs:{id:"拉取镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),n("p",[t._v("你可以通过 "),n("code",[t._v("docker search")]),t._v(" 命令来查找官方仓库中的镜像，并利用 "),n("code",[t._v("docker pull")]),t._v(" 命令来将它下载到本地。")]),t._v(" "),n("p",[t._v("例如以 "),n("code",[t._v("centos")]),t._v(" 为关键词进行搜索：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" search centos\nNAME                                            DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\ncentos                                          The official build of CentOS.                   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("465")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntianon/centos                                   CentOS "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(", created using rinse instea"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v("\nblalor/centos                                   Bare-bones base CentOS "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.5")]),t._v(" image                "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsaltstack/centos-6-minimal                                                                      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntutum/centos-6.4                                DEPRECATED. Use tutum/centos:6.4 instead. "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("1\n2\n3\n4\n5\n6\n7")]),t._v(" "),n("p",[t._v("可以看到返回了很多包含关键字的镜像，其中包括镜像名字、描述、收藏数（表示该镜像的受关注程度）、是否官方创建、是否自动创建。")]),t._v(" "),n("p",[t._v("官方的镜像说明是官方项目组创建和维护的，automated 资源允许用户验证镜像的来源和内容。")]),t._v(" "),n("p",[t._v("根据是否是官方提供，可将镜像资源分为两类。")]),t._v(" "),n("p",[t._v("一种是类似 "),n("code",[t._v("centos")]),t._v(" 这样的镜像，被称为基础镜像或根镜像。这些基础镜像由 Docker 公司创建、验证、支持、提供。这样的镜像往往使用单个单词作为名字。")]),t._v(" "),n("p",[t._v("还有一种类型，比如 "),n("code",[t._v("tianon/centos")]),t._v(" 镜像，它是由 Docker 的用户创建并维护的，往往带有用户名称前缀。可以通过前缀 "),n("code",[t._v("username/")]),t._v(" 来指定使用某个用户提供的镜像，比如 tianon 用户。")]),t._v(" "),n("p",[t._v("另外，在查找的时候通过 "),n("code",[t._v("--filter=stars=N")]),t._v(" 参数可以指定仅显示收藏数量为 "),n("code",[t._v("N")]),t._v(" 以上的镜像。")]),t._v(" "),n("p",[t._v("下载官方 "),n("code",[t._v("centos")]),t._v(" 镜像到本地。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull centos\nPulling repository centos\n0b443ba03958: Download complete\n539c0211cd76: Download complete\n511136ea3c5a: Download complete\n7064731afe90: Download complete\n")])])]),n("p",[t._v("1\n2\n3\n4\n5\n6")]),t._v(" "),n("h2",{attrs:{id:"推送镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#推送镜像"}},[t._v("#")]),t._v(" 推送镜像")]),t._v(" "),n("p",[t._v("用户也可以在登录后通过 "),n("code",[t._v("docker push")]),t._v(" 命令来将自己的镜像推送到 Docker Hub。")]),t._v(" "),n("p",[t._v("以下命令中的 "),n("code",[t._v("username")]),t._v(" 请替换为你的 Docker 账号用户名。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" tag ubuntu:17.10 username/ubuntu:17.10\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" image "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n\nREPOSITORY                                               TAG                    IMAGE ID            CREATED             SIZE\nubuntu                                                   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17.10")]),t._v("                  275d79972a86        "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" days ago          "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("94")]),t._v(".6MB\nusername/ubuntu                                          "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17.10")]),t._v("                  275d79972a86        "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" days ago          "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("94")]),t._v(".6MB\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" push username/ubuntu:17.10\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" search username\n\nNAME                      DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED\nusername/ubuntu\n")])])]),n("p",[t._v("1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14")]),t._v(" "),n("h2",{attrs:{id:"自动创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动创建"}},[t._v("#")]),t._v(" 自动创建")]),t._v(" "),n("p",[t._v("自动创建（Automated Builds）功能对于需要经常升级镜像内程序来说，十分方便。")]),t._v(" "),n("p",[t._v("有时候，用户创建了镜像，安装了某个软件，如果软件发布新版本则需要手动更新镜像。")]),t._v(" "),n("p",[t._v("而自动创建允许用户通过 Docker Hub 指定跟踪一个目标网站（目前支持 "),n("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),n("OutboundLink")],1),t._v(" 或 "),n("a",{attrs:{href:"https://bitbucket.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BitBucket"),n("OutboundLink")],1),t._v("）上的项目，一旦项目发生新的提交或者创建新的标签（tag），Docker Hub 会自动构建镜像并推送到 Docker Hub 中。")]),t._v(" "),n("p",[t._v("要配置自动创建，包括如下的步骤：")]),t._v(" "),n("ul",[n("li",[t._v("创建并登录 Docker Hub，以及目标网站；")]),t._v(" "),n("li",[t._v("在目标网站中连接帐户到 Docker Hub；")]),t._v(" "),n("li",[t._v("在 Docker Hub 中 "),n("a",{attrs:{href:"https://registry.hub.docker.com/builds/add/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置一个自动创建"),n("OutboundLink")],1),t._v("；")]),t._v(" "),n("li",[t._v("选取一个目标网站中的项目（需要含 "),n("code",[t._v("Dockerfile")]),t._v("）和分支；")]),t._v(" "),n("li",[t._v("指定 "),n("code",[t._v("Dockerfile")]),t._v(" 的位置，并提交创建。")])]),t._v(" "),n("p",[t._v("之后，可以在 Docker Hub 的 "),n("a",{attrs:{href:"https://registry.hub.docker.com/builds/",target:"_blank",rel:"noopener noreferrer"}},[t._v("自动创建页面"),n("OutboundLink")],1),t._v(" 中跟踪每次创建的状态。")])])}),[],!1,null,null,null);e.default=s.exports}}]);