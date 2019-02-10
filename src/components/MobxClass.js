import React, { Component } from 'react'
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { Button } from 'antd';

@inject('login')
@observer
export default class MobxClass extends Component {
  render() {
    return <div>
    xxxx {this.props.login.bbb}

     <Button type="primary" onClick={() => {
      this.props.login.add();
     }}>Button</Button>
    </div>
  }
}