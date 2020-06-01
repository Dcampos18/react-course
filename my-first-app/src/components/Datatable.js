import React, { Component } from 'react'
import DataTable from 'react-data-table-component';

export default class Datatables extends Component {

    state = {
        posts : []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        this.setState({
            posts: data
        })
    }

    render() {
        const data = this.state.posts
        const columns = [
            {
              name: 'id',
              selector: 'id',
              sortable: true,
              maxWidth: '50px'
            },
            {
              name: 'Title',
              selector: 'title',
              sortable: true,
            },
            {
              name: 'Body',
              selector: 'body',
              sortable: true,
            }
        ];

        return (
            <DataTable
                title="Posts"
                columns={columns}
                data={data}
                pagination
            />
        )
    }
}

