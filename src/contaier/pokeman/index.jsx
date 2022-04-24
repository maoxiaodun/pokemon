import React from 'react';
import { baseURLs } from './conf';
import Card from './component/card';
import Cropper from "react-cropper";
import 'cropperjs/dist/cropper.css';

class Contaier extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>测试改变部署</p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 200 }}>
          {baseURLs.map((item, index) => <Card baseUrl={item} isRandom={index === 3} key={index} />)}
        </div>
        <Cropper
          style={{ height: '100vh', width: 400, }}
          checkCrossOrigin={false}
          highlight={false}
          dragMode={'crop'}
          src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
        />
      </React.Fragment>
    )
  }

}

export default Contaier;