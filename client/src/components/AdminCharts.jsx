import React, { useEffect } from 'react'
import { Bar, Pie } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { getbooksaction } from '../Redux/actions/booksaction';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const AdminCharts = () => {
    const distapch = useDispatch();
    const bookdata = useSelector(store => store.getAllBooks)
    const bdata = bookdata.books
    // console.log(bookdata.books)
    const data = []
    let obj = {}
    for (let i = 0; i < bdata.length; i++) {
        let ch = bdata[i]['genres']
        if (obj[ch] === undefined) {
            obj[ch] = 1
        } else {
            obj[ch]++
        }
    }
    for (let i in obj) {
        data.push({
            type: i,
            value: obj[i]
        })
    }
    // console.log(obj)
    // console.log(data)

    useEffect(() => {
        distapch(getbooksaction())
    }, [distapch])

    const config = {
        data,
        xField: 'value',
        yField: 'type',
        seriesField: 'type',
        legend: {
            position: 'top-left',
        },
    };

    const pconfig = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        label: {
            type: 'spider',
            labelHeight: 28,
            content: '{name}\n{percentage}',
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <div>
            <Container>
                <Row className='m-auto mt-5'>
                    <h4 className='mb-5'>Data Based On Genres</h4>
                    <Col>
                        <Bar {...config} />
                    </Col>

                    <Col>
                        <Pie {...pconfig} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AdminCharts