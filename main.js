myButton.addEventListener('click', (e) => {
  let request = new XMLHttpRequest()
  request.onreadystatechange = () => { // 监听状态
    if (request.readyState === 4) { // 判断状态是否完成
      if (request.status === 200) {
        let string = request.responseText
        let object = window.JSON.parse(string) // 把符合JSON语法的字符串转换成JS对象
        console.log(object)
      } else if (request.status >= 400) {
        console.log('fail')
      }
    }
  }
  request.open('GET', 'http://jack.com:8002/xxx') // 配置request
  request.send()
})
