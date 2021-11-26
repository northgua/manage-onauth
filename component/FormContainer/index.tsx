import React from 'react';

// import BaaS from 'minapp-sdk';

// BaaS.init('49c09fde6af540a7bc08', {})

import cloudbase from "@cloudbase/js-sdk";

const app = cloudbase.init({
  env: "hello-cloudbase-0gzo7p7pfa71cc09"
});

const db = app.database();

/**
  登录鉴权流程，此处代码略，请参考：
  https://cloud.tencent.com/document/product/876/41728
*/

const mockData = {
  value: "Computer",
  name: "Thinking in Java",
  onSale: true,
  sales: 100,
  tags: [],
  role: {
    name_en: 'daqiaoqiao',
    name: '大悄悄'
  },
};

const FormContainer = (props: any) => {
  const saveDocument = (data: Record<string, unknown>) => {
    
    db.collection("form_data").add(data)
    .then((res) => {
      console.log(res);
    });
  };

  const getDocument = () => {
    db.collection("form_data")
    .where({})
    .get()
    .then((res) => {
      // res.data 包含该记录的数据
      console.log(res.data);
    });
  };

  return (
    <div>
      <div>1</div>
      <div>2</div>
      <button onClick={() => saveDocument(mockData)}>创建</button>
      <button onClick={getDocument}>获取</button>
    </div>
  );
};

export default FormContainer;