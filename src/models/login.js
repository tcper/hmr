import { observable, action, configure } from 'mobx';
// import { HashHistory as history } from 'react-router';
//import { message } from 'antd';

configure({
  enforceActions: 'always'
});

class loginStore {

  loading;

  constructor(){
    this.loading = false;
  }

  @observable bbb = 888;

  @action handleLogin = (username, password, form) => {

    this.loading = true;

    setTimeout(()=>{

      action(()=>{this.loading = false;})();

      if(username == '111' && password == '111'){
        // hashHistory.push({
        //   pathname:'/nav2'
        // })
        // message.success('登陆成功！');

      }else{
        form.resetFields();
        // message.error('用户名或密码错误！');

      }

    },3000)

  }

  @action add = () => {
    this.bbb++;
  }

}

const login = new loginStore();

export default login;