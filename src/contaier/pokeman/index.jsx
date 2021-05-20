import React from 'react';
import { baseURLs } from './conf';
import Card from './component/card';

class Contaier extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>测试改变部署</p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 200 }}>
          {baseURLs.map((item, index) => <Card baseUrl={item} isRandom={index === 3} key={index} />)}
        </div>
      </React.Fragment>
    )
  }

}

export default Contaier;