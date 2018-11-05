import React from 'react'
import { Table } from 'antd'

const columns = [
    { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left'},
    { title: '年纪', width: 100, dataIndex: 'age', key: 'age', fixed: 'left'},
    { title: '电话', width: 150, dataIndex: 'phone', key: '1'},
    { title: 'Column 2', dataIndex: 'address', key: '2'},
    { title: 'Column 3', dataIndex: 'address', key: '3'},
    { title: 'Column 4', dataIndex: 'address', key: '4'},
    { title: 'Column 5', dataIndex: 'address', key: '5'},
    { title: 'Column 6', dataIndex: 'address', key: '6'},
    { title: 'Column 7', dataIndex: 'address', key: '7'},
    { title: 'Column 8', dataIndex: 'address', key: '8'},
    { 
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
    }
]


const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    phone: '13355556666',
    address: 'New York Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 40,
    phone: '13355556666',
    address: 'London Park',
}];


const FixedTable = () => (
    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
);

export default FixedTable;