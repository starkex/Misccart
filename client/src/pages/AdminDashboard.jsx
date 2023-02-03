import React, { useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getbooksaction } from '../Redux/actions/booksaction'
import { useEffect } from 'react'
import { Table, Tooltip, Button, Space} from 'antd'
import Container from 'react-bootstrap/esm/Container'

const AdminDashboard = () => {
    const dispatch = useDispatch()
    const allbooks = useSelector(store => store.getAllBooks)
    console.log(allbooks.books)

    useEffect(() => {
        dispatch(getbooksaction())
    }, [dispatch])


    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        // console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
      };
    const clearFilters = () => {
        setFilteredInfo({});
      };
    
      const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
      };
      const setAgeSort = () => {
        setSortedInfo({
          order: 'descend',
          columnKey: 'genre',
        });
      };
    const columns = [
        {
            title: 'S No.',
            dataIndex: 'countstrip',
            key: 'stripno',
            width:90,
        },
        {
            title: 'Book Title',
            dataIndex: 'booktitle',
            key: 'title',
            ellipsis: true,
            render: (text) => (
                <Tooltip placement="topLeft" title={text}>
                  {text}
                </Tooltip>
              ),
        },
        Table.EXPAND_COLUMN,
        {
            title: 'Book Author',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Genres',
            dataIndex: 'genres',
            key: 'genre',
            filters: [
                {
                  text: 'Romantic',
                  value: 'Romantic',
                },
                {
                  text: 'Education',
                  value: 'Education',
                },
                {
                  text: 'Fiction',
                  value: 'Fiction',
                },
                {
                  text: 'Life',
                  value: 'Life',
                },
                {
                  text: 'Spiritual',
                  value: 'Spiritual',
                },
                {
                  text: 'Routine',
                  value: 'Routine',
                },
              ],
              filteredValue: filteredInfo.genre || null,
              onFilter: (value, record) => record.genres.includes(value),
              
              ellipsis: true,
        },
        {
            title: 'Price ( INR )',
            dataIndex: 'actualprice',
            key: 'actualprice',
            sorter: (a, b) => a.actualprice - b.actualprice,
            sortOrder: sortedInfo.columnKey === 'actualprice' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Edit Books',
            key: 'editbooks',
            width:150,
            render: (_, record) => (
              <Space size="middle">
                <a href='-'>Update</a>
                <a href='-'>Delete</a>
              </Space>
            ),
          },

    ];

    return (
        <div>
            <AdminNavbar />
            <Container className='mt-5 mb-5'>
            <Space
                style={{
                marginBottom: 16,
                }}
            >
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
                <Table columns={columns} dataSource={allbooks.books} onChange={handleChange} />
            </Container>
        </div>
    )
}

export default AdminDashboard