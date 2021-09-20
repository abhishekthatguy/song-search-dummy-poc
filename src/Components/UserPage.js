import React, {useEffect,useState} from 'react';
import { Input, Space, Card,  Row, Col,Layout, Spin } from 'antd';
import Highlighter from 'react-highlight-words';
import { userService } from '../services';

const UserPage = ()=>{
const [data,setData]=useState([]);
const [searchValue,setSearchValue]=useState('');
const [showLoader, setShowLoader]=useState(false);

const getData=(pattern)=>{
    setShowLoader(true);
    userService.get(`a/ra/songs.json?pattern=${pattern}`)
    .then((response)=>{
        setData(response.data);
        setShowLoader(false);
    });
}
useEffect(()=>{
    getData('Marley');
},[])

const { Search } = Input;
const { Header, Footer, Content } = Layout;

const onSearch = value => {
    getData(value);
    setSearchValue(value);
};
    return(
        <>
        <Layout className="layout">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%',padding: '0 50px' }}>
 <Row>
            <Col span={12} offset={6} >
            <Search size='large' placeholder="Search by song name..." onSearch={onSearch} enterButton style={{verticalAlign: 'middle'}}/>
            </Col>
        </Row>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
       
 <Row>
<Col span={24}>
    <Space direction="vertical" size='large'>
        {
            showLoader &&  <Spin size='large' tip="Loading..."/>
        }
       

{data && data.map((x)=>
<Card
style={{ width: '100%' }}
key={x.id}
       >
<p><Highlighter
    highlightClassName="text-warning"
    searchWords={[searchValue]}
    autoEscape={true}
    textToHighlight={x.title}
    />
    </p>
</Card>
        )}
</Space>
    </Col>
        </Row>
        </Content>
        <Footer><p>@ dummy POC</p></Footer>
        </Layout>
        </>
    )
}
export default UserPage;