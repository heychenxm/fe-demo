// 1. 导入依赖
const Koa = require('koa');
const Router = require('koa-router');

// 2. 实例化对象
const app = new Koa();
const router = new Router(); // 实例化路由

// 3. 配置路由（不同接口地址和请求方法）
// 3.1 GET 请求 - 首页默认接口
router.get('/', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '欢迎访问 Koa2 首页',
    data: null
  };
  await next();
});

// 3.2 GET 请求 - 用户列表接口
router.get('/api/user', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '获取用户列表成功',
    data: [
      { id: 1, name: '张三', age: 20 },
      { id: 2, name: '李四', age: 22 }
    ]
  };
  await next();
});

// 3.3 POST 请求 - 创建用户接口
router.post('/api/user', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '创建用户成功',
    data: { id: 3, name: '王五', age: 21 }
  };
  await next();
});

// 4. 注册路由中间件（让 Koa 应用识别路由配置）
app.use(router.routes()).use(router.allowedMethods());

// 5. 监听端口
const port = 3000;
app.listen(port, () => {
  console.log(`Koa2 服务已启动，正在监听端口：${port}`);
  console.log(`首页：http://localhost:${port}`);
  console.log(`用户列表：http://localhost:${port}/api/user`);
});