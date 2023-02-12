import trans from './images/trans.png';
import contact from './images/contact.png';
import educate from './images/educate.png';
import skill from './images/skill.png';
import work from './images/work.png';

let isEn = localStorage.getItem('isEn')||'0'

console.log(isEn,typeof (isEn))

let pageCn = `<article>
    <div class="language"> 
    <img src=${trans} alt="">
    English
    </div>
    <section class="bio">
      <h1 class='mid'>丁宁</h1>
      <p class="mid1">
        女 | 25岁 | 前端开发工程师 | 深圳
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
      <p>熟练掌握 <strong>React</strong> 和 <strong>React Native</strong>的使用，包括 Hooks、相关组件 antd等</p>
      <p>熟悉 <strong>git</strong> 代码发布部署流程</p>
      <p>良好的人际关系和<strong>团队合作</strong>精神，我可以与来自不同背景的人融洽互动，促进并确保项目进展 </p>
      <br>
      <br>
    </section>

    <section class="projects">
      <h2>
        <img src=${work} alt="">
        工作经历
      </h2>
      <ol>
        <li>
          <header>
            <h2>QTrade债券交易平台</h2>
            <br>
          </header>
          <p><strong>2020.06--2021.07 </strong></p>
          <br>
          <h4>工作描述</h4>
          <p>
            基于<strong>腾讯企点</strong>互动平台，开发二级债券交易系统。
          </p>
          <h4>参与以下项目：</h4>
          <li><em>运营活动</em></li>
          <p>开发H5抽奖活动页面，并兼容IE浏览器，成功推广新功能并为新功能增加日活。</p><strong>技术栈：vue</strong>
        <div class="page2"></div>
          <li><em>前端组件库网页部署</em></li>
          <p>组件库官网页面优化与Jenkins构建，使组件库官网可以在开发环境展示，加强前端开发与UI的沟通效率。</p><strong>技术栈：webpack+Jenkins+gatsby+react</strong>
          <li><em>企点首页债券推荐优化</em></li>
          <p>用户首页推荐的债券支持查看该投标的历史投标数据，进行新建和修改，并实时同步数据更新。</p><strong>技术栈：react+ant design组件</strong>
          <li><em>配适并优化nlp(自然语言算法处理)识别弹窗</em></li>
          <p>与同事合作，通过后台新接入的语言算法系统，可将自然语言转换成债券交易数据。
          为此，用户可通过该界面输入自然语言；内容弹窗会根据算法结果，展示多样的nlp识别的多条投标，使用户可以通过语义对多条投标进行新建与修改，该功能作为公司业务核心功能广受好评。</p><strong>技术栈：react+ant design组件</strong>
        </li>

      </ol>
      <ol>
        <li>
          <header>
            <h2>涂鸦智能</h2>
            <br>
          </header>
          <p><strong>2021.07--2022.10 </strong></p>
<br>
          <h4>工作描述</h4>
          <p>
            基于<strong>React Native</strong>和<strong>公司自研小程序</strong>，研发<strong>iot移动端</strong>信息控制系统，并完美配适安卓端和ios端。
          <p>负责公司<strong>iot设备移动端页面</strong>开发 </p>
         <p> 和安卓，ios，嵌入式，云端进行<strong>多端联调</strong></p>
          </p>
          <h4>参与以下项目：</h4>
          <li><em>双模蓝牙耳机</em></li>
          <p>研发<strong>控制耳机的app页面</strong>。</p>
          <p>可控制耳机音量，eq频率曲线调整，耳机地理位置展示，断链寻回，蓝牙改名，蓝牙配对，重置蓝牙等<strong>基础功能</strong>。</p>
          <p>并在以上基础功能上实现了传统深蓝，科技白，酷炫黑紫，<strong>三种版本UI</strong>。</p>
          <p>该项目从0开始开发，与安卓，ios，嵌入式，云端<strong>多端研发</strong>一起参与此项目的技术实现研讨。</p>
          <p>技术细节包括：使用<strong双模蓝牙</strong>控制Ble和BT蓝牙识别，及名字更改三方同步等逻辑。公司内部首次<strong>串口通信</strong>传输中文字符串给嵌入式，使用Unicode编码及十六进制转换传输。
          </p><strong>技术栈：React Native</strong>
       
          <li><em>定位器基础模板</em></li>
          <p>研发<strong>定位器app功能</strong>，扩展定位能力。</p>
          <p>该模板之后用于儿童/老人等寻人定位器，及宠物/物品定位器，和车载定位器，以及其它需要定位功能的iot设备，比如定位耳机。</p>
          <p>通过GPS，LBS（基站坐标），WIFI地址等多种方式获取<strong>经纬度</strong>。并提供搜索位置能力，并可跳转定位导航第三方，如高德，百度，谷歌导航，方便导航并寻回设备位置。</p>
          <p>通过<strong>cat1蜂窝网络和蓝牙</strong>两种通讯方式，与iot设备进行交互。并提供蓝牙信号强度，方便近距离设备位置定位。</p>
          <p>并提供设备断联和重连提醒铃声选取，安全区域内不会进行<strong>重联断联提醒</strong>。</p>
          <p>常用位置会通过智能计算，显示出来，提示用户可将该区域设为<strong>安全区域</strong>。</p>
          <p>可展示定位器历史位置数据，并提供地图上的<strong>行动轨迹回溯</strong>功能。</p>
          <p>儿童/老人/宠物等定位器提供生物独有的路程及卡路里等相关<strong>运动计算数据</strong>和相关运动建议，车载定位器独有过往里程计算及显示功能。</p>
          <p>整理<strong>定位的相关能力api</strong>，提供其余需要更多定位功能的iot项目参考。</p>
          </p><strong>技术栈：React Native</strong>
          <li><em>基于涂鸦自研小程序研发舒适空间小程序</em></li>
          <p>
          该小程序是公司，基于微信小程序基础，自研的涂鸦小程序。</p>
          <p>开发该小程序时，<strong>涂鸦小程序</strong>的语法模板刚建设好。
          作为2021年<strong>公司首次尝试自研小程序</strong>重点kpi实验性项目，受到重点关注。</p>
          <p>舒适空间小程序，可对公司旗下<strong>所有iot设备</strong>进行控制的小程序，入口在公司研发app最上方。</p>
          <p>小程序对账户内，具有<strong>传感器的iot设备</strong>，采集到的信息进行展示，如温湿度信息等。</p>
          <p>也提供<strong>账户设备的快捷操控</strong>，如开关关闭，灯光颜色切换，耳机音量调整，等多种不同设备不同需求的控制。</p>
          <p>并提供按照每日，每周，每月，每年等对设备的<strong>定时控制</strong>功能。</p>
          <p>由于是早期接入该小程序，没有任何可使用的模板，如ray；基础组对于<strong>相关组件开发</strong>也十分不完善。</p>
          <p>因此，该项目耗费了大量时间用于滚动条，日历组件相关<strong>基础组件开发</strong>。</p>
</p><strong>技术栈：涂鸦小程序</strong>
          <li><em>多列竖直滚动条RN组件整理</em></li>
          <p>将<strong>多列</strong>垂直滚动条<strong>组件整理</strong>输出，传到公司组件代码库，提供可复用的组件。
          该组件基于RN的<strong>单列</strong>竖直滚动条扩展，额外提供便捷配置列数，及横纵坐标数据，单位展示配置。并可基于滚动条位置<strong>生成背景曲线</strong>。
          并且提供更换滚动条样式（CSS或者图片），竖直滚动条间距，曲线颜色和渐变等相关<strong>样式配置</strong>。
         </p><strong>技术栈：React Native + svg</strong>
        </li>

      </ol>
    </section>


<!--    <section class="projects">-->
<!--      <br>-->
<!--      <br>-->
<!--      <h2>-->
<!--        <img src="./images/project.png" alt="">-->
<!--        项目经历</h2>-->
<!--      <ol>-->
<!--        <li>-->
<!--          <header>-->
<!--            <h3>Js读取json数据实现动态气泡图</h3>-->
<!--            <span>-->
<!--              <a href="https://github.com/vouis/D3-project-motion-chart">源码链接</a>-->
<!--              <a href="https://vouis.github.io/D3-project-motion-chart/motion_chart.html">项目预览</a>-->
<!--            </span>-->
<!--          </header>-->
<!--          <img src="./images/motion.png" alt="" height="200" class="mimg">-->
<!--          <p>请下载<strong>data1.json</strong>作为数据源进行预览</p>-->
<!--          <p>-->
<!--            一款基于 <strong>JavaScript</strong> 的/ <strong>D3库</strong> / 的数据可视化展示。-->

<!--          </p>-->
<!--          <p>-->
<!--            主要功能有按照年份时间顺序，<strong>动态显示气泡图</strong>。-->

<!--          </p>-->
<!--          <p>-->
<!--            该图包括<strong>气泡半径，x，y轴，时间及气泡名称</strong>等需要从json文件获取的内容，通过SVG渲染到HTML-->

<!--          </p>-->
<!--          <p>-->
<!--            可<strong>额外配置</strong>气泡运行速度，图形比例大小，坐标内容等-->
<!--          </p>-->
<!--          <p><strong>技术栈： JavaScript+HTML5+CSS3+D3+json</strong></p>-->
<!--        </li>-->
<!--        <li>-->
<!--          <br>-->
<!--          <br>-->

<!--&lt;!&ndash;          <header>&ndash;&gt;-->
<!--&lt;!&ndash;            <h3>盒子导航</h3>&ndash;&gt;-->
<!--&lt;!&ndash;            <span>&ndash;&gt;-->
<!--&lt;!&ndash;              <a href="https://github.com/vouis/box-nav" target="_blank">源码链接</a>&ndash;&gt;-->
<!--&lt;!&ndash;              <a href="https://vouis.github.io/box-nav/dist/index.html" target="_blank">项目预览</a>&ndash;&gt;-->
<!--&lt;!&ndash;            </span>&ndash;&gt;-->
<!--&lt;!&ndash;          </header>&ndash;&gt;-->
<!--&lt;!&ndash;          <img src="./images/box-nav.png" alt="" height="200" class="mimg">&ndash;&gt;-->
<!--&lt;!&ndash;          <p>&ndash;&gt;-->
<!--&lt;!&ndash;            这是一个基于 <strong>原生JavaScript</strong> 页面导航。&ndash;&gt;-->
<!--&lt;!&ndash;          </p>&ndash;&gt;-->
<!--&lt;!&ndash;          <p>&ndash;&gt;-->
<!--&lt;!&ndash;            加入了百度的<strong>搜索功能</strong>&ndash;&gt;-->
<!--&lt;!&ndash;          </p>&ndash;&gt;-->
<!--&lt;!&ndash;          <p>&ndash;&gt;-->
<!--&lt;!&ndash;            该系统通过浏览器<strong>Storage</strong>，本地<strong>保存网址数据</strong>。&ndash;&gt;-->
<!--&lt;!&ndash;          </p>&ndash;&gt;-->
<!--&lt;!&ndash;          <p><strong>技术栈： JavaScript+HTML5+LocalStorage+CSS3</strong></p>&ndash;&gt;-->
<!--        </li>-->

<!--      </ol>-->
<!--    </section>-->

    <br>
    <br>

  </article>`
let pageEn = `<article>
    <div class="language"> 
    <img src=${trans} alt="">
    中文
    </div>
    <section class="bio">
      <h1 class='mid'>ding ning</h1>
      <p class="mid1">
        female | 23 years | Front-end developer | shenzhen
      </p >
    </section>

    <section class="contact">
      <br>
      <h2>
        <img src=${contact} alt="">
        Contact
      </h2>
        <p>
          phone：<a class="ab" href="tel:13267790335">13267790335</a> | wechat：nding16 | mail：<a class="ab" href="mailto:16nding@stu.edu.cn">16nding@gmail.com</a>
        </p>

        <p>resume link：<a class='ab' href="https://vouis.github.io/resume-cv/dist/index.html">https://vouis.github.io/resume-cv/dist/index.html</a></p>

        <div class="page">
          <p class="github">
            <span>Github：</span>
            <a class='ab' href="https://github.com/vouis">https://github.com/vouis</a>
          </p>
          <p class="juejin">
            <span>blog：</span>
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
        education
      </h2>
      <p>
      <div>
        <h3>Shantou University（2016 ~ 2020）</h3>
      </div>
      computer science bachelor</p>
        english language ability： CET-6
    </section>

    <section class="skills">
      <br />
      <h2>
        <img src=${skill} alt="">
        Skill
      </h2>
      <p>
        Familiar with HTML5 and CSS page layout skills, Flex layout, can <strong>restore the design draft perfectly</strong> 
      </p>
      <p>
        Familiar with <strong>JavaScript</strong> technology, master closures, prototypes, inheritance, DOM and other features, familiar with ES6, including let / Promise / await / destructuring assignment, etc.
      </p>
      <p>
        Familiar with <strong>Front-end and back-end separation</strong> technology, including AJAX, cross-domain, front-end routing, Cookie, Session, etc.
      </p>
      <p>
      Familiar with the use of <strong>React</strong>, <strong>React Native</strong> including Hooks, related components antd, etc.
      </p>
      <p>
      Familiar with the <strong>git</strong> code release and deployment process
      </p>
      <p>
      With good interpersonal relationships and <strong>teamwork</strong> spirit, I can successfully interact with people from different backgrounds to promote and ensure the progress of the project
      </p>
      <br>
      <br>
    </section>

    <section class="projects">
      <h2>
        <img src="./images/work.png" alt="">
        work experience
      </h2>
      <ol>
        <li>
          <header>
            <h3>Companies since the internship--QTrade</h3>
            <br>
          </header>
          <p><strong>2020.06--to date </strong></p>

          <h4>work description</h4>
          <p>
            The company took the lead in developing a bidding system based on Tencent's enterprise point interactive platform, which is convenient and quick to identify nlp.
          <p>Responsible for the company's <strong>page requirements</strong> development </p>
          </p>
          <h4>Participate in the following projects:</h4>
          <li><em>Operational activities</em></li>
          <p>Developed the H5 lottery event page, compatible with IE browser, successfully promoted new features and added daily activities to the new features. </p><strong>Technology: vue</strong>
        <div class="page2"></div>
          <li><em>A joint platform for cooperation between Yichuang Exhibition Industry Platform</em></li>
          <p>Develop the cooperation page between our company and Yichuang Zhanye platform, so that users can invest in Yichuang's platform on our platform. </p><strong>Technology: flex+react+ant design component</strong>
          <li><em>Front-end component library web page deployment</em></li>
          <p>Component library official website page optimization and Jenkins construction, so that the component library official website can be displayed in the development environment, and enhance the communication efficiency between front-end development and UI.</p><strong>Technology：webpack+Jenkins+gatsby+react</strong>
          <li><em>Enterprise Point Homepage Bond Recommendation Optimization</em></li>
          <p>The bond recommended by the user homepage supports viewing the historical bid data of the bid, making new creation and modification, and real-time synchronization of data updates.</p><strong>Technology：flex+react+ant design+websocket</strong>
          <li><em>Adapt and optimize the nlp recognition pop-up window</em></li>
          <p>Cooperate with colleagues to display multiple bidding content pop-ups identified by nlp, so that users can create and modify multiple bids through semantics. This function is widely praised as the core function of the company's business.</p><strong>Technology：flex+react+ant design</strong>
          <li><em>nlp manual input pop-up window</em></li>
          <p>The user manually enters the corpus and displays the corpus after nlp recognition.</p><strong>Technology：flex+react+ant design</strong>

        </li>

      </ol>
    </section>


    <section class="projects">
      <br>
      <br>
      <h2>
        <img src="./images/project.png" alt="">
        Project experience</h2>
      <ol>
        <li>
          <header>
            <h3>Js reads json data to realize dynamic bubble chart</h3>
            <span>
              <a href="https://github.com/vouis/D3-project-motion-chart">Source link</a>
              <a href="https://vouis.github.io/D3-project-motion-chart/motion_chart.html">Project preview</a>
            </span>
          </header>
          <img src="./images/motion.png" alt="" height="200" class="mimg">
          <p>Please download<strong>data1.json</strong>Preview as a data source</p>
          <p>
           A data visualization display based on <strong>JavaScript</strong> / <strong>D3 library</strong> /.

          </p>
          <p>
            The main function is to <strong>dynamically display bubble graphs</strong> in the order of year and time.

          </p>
          <p>
            The graph includes content that needs to be obtained from the json file, such as <strong>bubble radius, x, y axis, time and bubble name</strong>, and rendered to HTML through SVG

          </p>
          <p>
            <strong>Additional configuration</strong> bubble running speed, graphic scale size, coordinate content, etc.
          </p>
          <p><strong>Technology： JavaScript+HTML5+CSS3+D3+json</strong></p>
        </li>
        <li>
          <br>
          <br>
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
