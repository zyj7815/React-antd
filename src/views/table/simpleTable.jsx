import React, { Component } from 'react';
import { Table, Tag, Button, Popconfirm } from 'antd';

class SimpleTable extends Component {

    columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
            </span>
        ),
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Popconfirm placement="top" title='确认删除吗？' onConfirm={() => this.handleDelete(text, record)} okText="Yes" cancelText="No">
                <Button size="small">删除</Button>
            </Popconfirm>
        ),
    }];

    state = {
        data: [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }]
    }


    handleDelete = (text, record) => {
        let data = this.state.data

        data.forEach((el, i) => {
            if(el.key === text.key) {
                data.splice(i, 1)
                return
            }
        })

        this.setState({
            data: data
        })
    }


    render() {
        return <Table columns={this.columns} dataSource={this.state.data} />;
    }
}

export default SimpleTable;