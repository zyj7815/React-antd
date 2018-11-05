import React, { Component } from 'react';
import { Table, Button } from 'antd'

const column = [
    {
        title: 'name',
        dataIndex: 'name'
    },
    {
        title: 'age',
        dataIndex: 'age'
    },
    {
        title: 'address',
        dataIndex: 'address'
    }
]

class SelectTable extends Component {

    constructor(props) {
        super(props);
        
        let data = []
        for (let i = 0; i < 50; i++) {
            data.push({
                key: i,
                name: `${i}号人员`,
                age: 32,
                address: '成都市'
            })
        }

        this.state = {
            data: data,
            selectedRowKeys: []
        }
    }

    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys: selectedRowKeys });
    }

    handleDetele = () => {
        console.log(this.state.selectedRowKeys)
        console.log(this.state.selectedRowKeys.includes(1))

        let arr = this.state.data.filter((el, i) => {
                if(this.state.selectedRowKeys.includes(el.key)) {
                    return false
                }
                return true
            })

        this.setState({
            data: arr
        })
    }

    
    render() {

        let rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'odd',
                text: '奇数列',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((key, i) => {
                        if (i % 2 !== 0) {
                            return false
                        }
                        return true
                    })
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                }
            }, {
                key: 'even',
                text: '偶数列',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((key, i) => {
                        if (i % 2 === 0) {
                            return false
                        }
                        return true
                    })
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                } 
            }]
        }

        return (
            <div>
                <Button type="danger" size="small" onClick={this.handleDetele}>删除</Button>
                <Table rowSelection={rowSelection} columns={column} dataSource={this.state.data} />
            </div>
        )
    }
}


export default SelectTable;