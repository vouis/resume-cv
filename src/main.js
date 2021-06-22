import trans from './images/trans.png';
import contact from './images/contact.png';
import educate from './images/educate.png';
import skill from './images/skill.png';

let isEn = localStorage.getItem('isEn')||'0'

console.log(isEn,typeof (isEn))

let pageCn = `<article>
    <div class="language"> 
    <img src=${trans} alt="">
    中英切换
    </div>
    <section class="bio">
      <h1 class='mid'>丁宁</h1>
      <p class="mid1">
        女 | 23岁 | 前端开发工程师 | 深圳
      </p >
    </section>

    <section class="contact">
      <br>
      <h2>
        <img src=${contact} alt="">
        联系方式
      </h2>
        <p>
          手机：<a class="ab" href="tel:13267790335">13267790335</a> | 微信：nding16 | 邮箱：<a class="ab" href="mailto:16nding@stu.edu.cn">16nding@gmail.com</a>
        </p>

        <p>简历地址：<a class='ab' href="https://vouis.github.io/resume-cv/dist/index.html">https://vouis.github.io/resume-cv/dist/index.html</a></p>

        <div class="page">
          <p class="github">
            <span>Github：</span>
            <a class='ab' href="https://github.com/vouis">https://github.com/vouis</a>
          </p>
          <p class="juejin">
            <span>博客：</span>
            <a class='ab'
               href="https://juejin.im/user/5e6766836fb9a07ca90c3d0d">https://juejin.im/user/5e6766836fb9a07ca90c3d0d</a>
          </p>
        </div>
      </h2>


    </section>

    <section class="education">
      <br>
      <h2>
        <img src=${educate} alt="">
        教育经历
      </h2>
      <p>
      <div>
        <h3>汕头大学（2016年~2020年）</h3>
      </div>
      计算机系 本科</p>
        英语能力： CET-6
    </section>

    <section class="skills">
      <br />
      <h2>
        <img src=${skill} alt="">
        技能
      </h2>
      <p>
        熟悉HTML5和CSS页面布局技巧，Flex布局，能将设计稿<strong>完美还原</strong>
      </p>
      <p>
        熟悉<strong>JavaScript</strong>技术，掌握闭包，原型，继承，DOM等特性,熟悉 ES6， 包括 let / Promise / await / 析构赋值等
      </p>
      <p>
        熟悉<strong>前后端分离</strong>技术，包括 AJAX、跨域、前端路由、Cookie、Session 等
      </p>
      <p>熟练掌握 <strong>React</strong>的使用，包括 Hooks、相关组件 antd等</p>
      <p>熟悉 <strong>git</strong> 代码发布部署流程</p>
      <p>良好的人际关系和<strong>团队合作</strong>精神，我可以与来自不同背景的人成功互动，促进并确保项目进展 </p>
      <br>
      <br>
    </section>

    <section class="projects">
      <h2>
        <img src="./images/work.png" alt="">
        工作经历
      </h2>
      <ol>
        <li>
          <header>
            <h3>从实习开始至今的公司--QTrade</h3>
            <br>
          </header>
          <p><strong>2020.06--至今 </strong></p>

          <h4>工作描述</h4>
          <p>
            该公司率先开发出基于腾讯企点互动平台，方便快捷的语义识别nlp的投标系统
          <p>负责公司<strong>页面需求</strong>开发 </p>
          </p>
          <h4>参与以下项目：</h4>
          <li><em>运营活动</em></li>
          <p>开发H5抽奖活动页面，并兼容IE浏览器，成功推广新功能并为新功能增加日活。</p><strong>技术栈：vue</strong>
        <div class="page2"></div>
          <li><em>一创展业平台合作的联合平台</em></li>
          <p>开发我司和一创展业平台的合作页面，使得用户可以在我司平台上投一创的标。</p><strong>技术栈：flex+react+ant design组件</strong>
          <li><em>前端组件库网页部署</em></li>
          <p>组件库官网页面优化与Jenkins构建，使组件库官网可以在开发环境展示，加强前端开发与UI的沟通效率。</p><strong>技术栈：webpack+Jenkins+gatsby+react</strong>
          <li><em>企点首页债券推荐优化</em></li>
          <p>用户首页推荐的债券支持查看该投标的历史投标数据，进行新建和修改，并实时同步数据更新。</p><strong>技术栈：flex+react+ant design组件+websocket</strong>
          <li><em>配适并优化nlp识别弹窗</em></li>
          <p>与同事合作，展示nlp识别的多条投标内容弹窗，使用户可以通过语义对多条投标进行新建与修改，该功能作为公司业务核心功能广受好评。</p><strong>技术栈：flex+react+ant design组件</strong>
          <li><em>nlp手动录入弹窗</em></li>
          <p>用户手动录入语料，展示nlp识别后语料。</p><strong>技术栈：flex+react+ant design组件</strong>

        </li>

      </ol>
    </section>


    <section class="projects">
      <br>
      <br>
      <h2>
        <img src="./images/project.png" alt="">
        项目经历</h2>
      <ol>
        <li>
          <header>
            <h3>Js读取json数据实现动态气泡图</h3>
            <span>
              <a href="https://github.com/vouis/D3-project-motion-chart">源码链接</a>
              <a href="https://vouis.github.io/D3-project-motion-chart/motion_chart.html">项目预览</a>
            </span>
          </header>
          <img src="./images/motion.png" alt="" height="200" class="mimg">
          <p>请下载<strong>data1.json</strong>作为数据源进行预览</p>
          <p>
            一款基于 <strong>JavaScript</strong> 的/ <strong>D3库</strong> / 的数据可视化展示。

          </p>
          <p>
            主要功能有按照年份时间顺序，<strong>动态显示气泡图</strong>。

          </p>
          <p>
            该图包括<strong>气泡半径，x，y轴，时间及气泡名称</strong>等需要从json文件获取的内容，通过SVG渲染到HTML

          </p>
          <p>
            可<strong>额外配置</strong>气泡运行速度，图形比例大小，坐标内容等
          </p>
          <p><strong>技术栈： JavaScript+HTML5+CSS3+D3+json</strong></p>
        </li>
        <li>
          <br>
          <br>

<!--          <header>-->
<!--            <h3>盒子导航</h3>-->
<!--            <span>-->
<!--              <a href="https://github.com/vouis/box-nav" target="_blank">源码链接</a>-->
<!--              <a href="https://vouis.github.io/box-nav/dist/index.html" target="_blank">项目预览</a>-->
<!--            </span>-->
<!--          </header>-->
<!--          <img src="./images/box-nav.png" alt="" height="200" class="mimg">-->
<!--          <p>-->
<!--            这是一个基于 <strong>原生JavaScript</strong> 页面导航。-->
<!--          </p>-->
<!--          <p>-->
<!--            加入了百度的<strong>搜索功能</strong>-->
<!--          </p>-->
<!--          <p>-->
<!--            该系统通过浏览器<strong>Storage</strong>，本地<strong>保存网址数据</strong>。-->
<!--          </p>-->
<!--          <p><strong>技术栈： JavaScript+HTML5+LocalStorage+CSS3</strong></p>-->
        </li>

      </ol>
    </section>

    <br>
    <br>

  </article>`
let pageEn = `<article>
    <div class="language"> 
    <img src=${trans} alt="">
    中英切换
    </div>
    <section class="bio">
      <h1 class='mid'>丁宁</h1>
      <p class="mid1">
        女 | 23岁 | 前端开发工程师 | 深圳
      </p >
    </section>

    <section class="contact">
      <br>
      <h2>
        <img src=${contact} alt="">
        联系方式
      </h2>
        <p>
          手机：<a class="ab" href="tel:13267790335">13267790335</a> | 微信：nding16 | 邮箱：<a class="ab" href="mailto:16nding@stu.edu.cn">16nding@gmail.com</a>
        </p>

        <p>简历地址：<a class='ab' href="https://vouis.github.io/resume-cv/dist/index.html">https://vouis.github.io/resume-cv/dist/index.html</a></p>

        <div class="page">
          <p class="github">
            <span>Github：</span>
            <a class='ab' href="https://github.com/vouis">https://github.com/vouis</a>
          </p>
          <p class="juejin">
            <span>博客：</span>
            <a class='ab'
               href="https://juejin.im/user/5e6766836fb9a07ca90c3d0d">https://juejin.im/user/5e6766836fb9a07ca90c3d0d</a>
          </p>
        </div>
      </h2>


    </section>

    <section class="education">
      <br>
      <h2>
        <img src=${educate} alt="">
        教育经历
      </h2>
      <p>
      <div>
        <h3>汕头大学（2016年~2020年）</h3>
      </div>
      计算机系 本科</p>
        英语能力： CET-6
    </section>

    <section class="skills">
      <br />
      <h2>
        <img src=${skill} alt="">
        技能
      </h2>
      <p>
        熟悉HTML5和CSS页面布局技巧，Flex布局，能将设计稿<strong>完美还原</strong>
      </p>
      <p>
        熟悉<strong>JavaScript</strong>技术，掌握闭包，原型，继承，DOM等特性,熟悉 ES6， 包括 let / Promise / await / 析构赋值等
      </p>
      <p>
        熟悉<strong>前后端分离</strong>技术，包括 AJAX、跨域、前端路由、Cookie、Session 等
      </p>
      <p>熟练掌握 <strong>React</strong>的使用，包括 Hooks、相关组件 antd等</p>
      <p>熟悉 <strong>git</strong> 代码发布部署流程</p>
      <p>良好的人际关系和<strong>团队合作</strong>精神，我可以与来自不同背景的人成功互动，促进并确保项目进展 </p>
      <br>
      <br>
    </section>

    <section class="projects">
      <h2>
        <img src="./images/work.png" alt="">
        工作经历
      </h2>
      <ol>
        <li>
          <header>
            <h3>从实习开始至今的公司--QTrade</h3>
            <br>
          </header>
          <p><strong>2020.06--至今 </strong></p>

          <h4>工作描述</h4>
          <p>
            该公司率先开发出基于腾讯企点互动平台，方便快捷的语义识别nlp的投标系统
          <p>负责公司<strong>页面需求</strong>开发 </p>
          </p>
          <h4>参与以下项目：</h4>
          <li><em>运营活动</em></li>
          <p>开发H5抽奖活动页面，并兼容IE浏览器，成功推广新功能并为新功能增加日活。</p><strong>技术栈：vue</strong>
        <div class="page2"></div>
          <li><em>一创展业平台合作的联合平台</em></li>
          <p>开发我司和一创展业平台的合作页面，使得用户可以在我司平台上投一创的标。</p><strong>技术栈：flex+react+ant design组件</strong>
          <li><em>前端组件库网页部署</em></li>
          <p>组件库官网页面优化与Jenkins构建，使组件库官网可以在开发环境展示，加强前端开发与UI的沟通效率。</p><strong>技术栈：webpack+Jenkins+gatsby+react</strong>
          <li><em>企点首页债券推荐优化</em></li>
          <p>用户首页推荐的债券支持查看该投标的历史投标数据，进行新建和修改，并实时同步数据更新。</p><strong>技术栈：flex+react+ant design组件+websocket</strong>
          <li><em>配适并优化nlp识别弹窗</em></li>
          <p>与同事合作，展示nlp识别的多条投标内容弹窗，使用户可以通过语义对多条投标进行新建与修改，该功能作为公司业务核心功能广受好评。</p><strong>技术栈：flex+react+ant design组件</strong>
          <li><em>nlp手动录入弹窗</em></li>
          <p>用户手动录入语料，展示nlp识别后语料。</p><strong>技术栈：flex+react+ant design组件</strong>

        </li>

      </ol>
    </section>


    <section class="projects">
      <br>
      <br>
      <h2>
        <img src="./images/project.png" alt="">
        项目经历</h2>
      <ol>
        <li>
          <header>
            <h3>Js读取json数据实现动态气泡图</h3>
            <span>
              <a href="https://github.com/vouis/D3-project-motion-chart">源码链接</a>
              <a href="https://vouis.github.io/D3-project-motion-chart/motion_chart.html">项目预览</a>
            </span>
          </header>
          <img src="./images/motion.png" alt="" height="200" class="mimg">
          <p>请下载<strong>data1.json</strong>作为数据源进行预览</p>
          <p>
            一款基于 <strong>JavaScript</strong> 的/ <strong>D3库</strong> / 的数据可视化展示。

          </p>
          <p>
            主要功能有按照年份时间顺序，<strong>动态显示气泡图</strong>。

          </p>
          <p>
            该图包括<strong>气泡半径，x，y轴，时间及气泡名称</strong>等需要从json文件获取的内容，通过SVG渲染到HTML

          </p>
          <p>
            可<strong>额外配置</strong>气泡运行速度，图形比例大小，坐标内容等
          </p>
          <p><strong>技术栈： JavaScript+HTML5+CSS3+D3+json</strong></p>
        </li>
        <li>
          <br>
          <br>

<!--          <header>-->
<!--            <h3>盒子导航</h3>-->
<!--            <span>-->
<!--              <a href="https://github.com/vouis/box-nav" target="_blank">源码链接</a>-->
<!--              <a href="https://vouis.github.io/box-nav/dist/index.html" target="_blank">项目预览</a>-->
<!--            </span>-->
<!--          </header>-->
<!--          <img src="./images/box-nav.png" alt="" height="200" class="mimg">-->
<!--          <p>-->
<!--            这是一个基于 <strong>原生JavaScript</strong> 页面导航。-->
<!--          </p>-->
<!--          <p>-->
<!--            加入了百度的<strong>搜索功能</strong>-->
<!--          </p>-->
<!--          <p>-->
<!--            该系统通过浏览器<strong>Storage</strong>，本地<strong>保存网址数据</strong>。-->
<!--          </p>-->
<!--          <p><strong>技术栈： JavaScript+HTML5+LocalStorage+CSS3</strong></p>-->
        </li>

      </ol>
    </section>

    <br>
    <br>

  </article>`



document.getElementById('app').innerHTML=isEn==='0'?pageCn:pageEn;


$('.language')
    .on('click', () => {
        if(isEn==='0'){
            localStorage.setItem('isEn', '1')
        }else{
            localStorage.setItem('isEn', '0')
        }

        window.location.reload();
    })