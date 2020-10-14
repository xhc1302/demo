import React, { Component, Fragment } from 'react';
import Item from './Item';
import './style.css';
import axios from 'axios';

class Xiao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['服务1','服务2']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="input">加入服务：</label>
                    <input id="input" className="input" 
                            value={this.state.inputValue} 
                            onChange={this.inputChange.bind(this)}
                            ref={(input)=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div key={index+item}>
                                    <Item content={item} index={index} deleteItem={this.deleteItem.bind(this)} />
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    componentDidMount() {
        // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        // .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        // .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    inputChange() {
        this.setState({
            inputValue: this.input.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list,this.state.inputValue]
        })
    }
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list: this.state.list
        })
    }
}

export default Xiao;