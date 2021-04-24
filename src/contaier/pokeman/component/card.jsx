import React from 'react';
import {get} from '../../../http';
import {indexArray} from '../conf';

export default class  Card extends  React.Component {
      constructor(props){
          super(props)
          this.state={item:[]}
      }

      componentDidMount(){    
            const {baseUrl}  = this.props;
            this.fetchData(baseUrl);
      }

      fetchData = url => {
        get(url).then(res => {
            if(res)
            this.setState({item:res})
            else
            console.warn('请求失败')            
         })
      }

      handleClick =  () => this.fetchData(`https://pokeapi.co/api/v2/pokemon/${indexArray[Math.floor(Math.random() *2)]}/`);
      
      render(){
          const {isRandom} = this.props;
          const {item} = this.state;
          return(
            <div style={{display:'flex',flex:'1'}}>
            <div>
            <ul style={{listStyleType:'none'}}>
                <li>姓名： {item.name}</li>
                <li>体重： {item.weight}</li>
                <li>身高：{item.height}</li>
                <li>经验：<input type='range' value={item.base_experience}  disabled min={0} max={100} /> </li>
                {isRandom  && <li><button onClick={this.handleClick}>随机pokemon</button></li>}
            </ul>
            </div>
            <div>
                <img src={item.sprites && item.sprites.front_default} alt="图片加载失败"/>
            </div>
        </div>
          )
      }
}