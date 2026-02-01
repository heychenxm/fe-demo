// 1. 接收主线程发送的消息
self.onmessage = (e) => {
  // e.data：获取主线程传递过来的数据
  const { num, taskName } = e.data;
  console.log(`Worker 接收到任务：${taskName}，参数：${num}`);

  // 2. 执行耗时计算（模拟：从 1 加到 num，同步阻塞操作）
  const startTime = Date.now();
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  const endTime = Date.now();

  // 3. 给主线程返回结果（可传任意可序列化数据）
  self.postMessage({
    result: sum,
    costTime: endTime - startTime,
    taskName: taskName
  });

  // 4. Worker 自身可主动关闭（可选，发送结果后关闭，释放资源）
  self.close();
};

// 注意：Worker 中无法访问 DOM/BOM，以下代码会报错！
// console.log(window); // 报错：window is not defined
// console.log(document); // 报错：document is not defined