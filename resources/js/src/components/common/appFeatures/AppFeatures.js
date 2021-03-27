import React from 'react';
import { Card, Col, Row } from 'antd';

import image1 from '../../../assets/images/advanced-option.jpg'
import image2 from '../../../assets/images/clean-design.jpg'
import image3 from '../../../assets/images/easy-customise.jpg'
import image4 from '../../../assets/images/great-support.jpg'
import image5 from '../../../assets/images/modern-design.jpg'
import image6 from '../../../assets/images/unlimited-features.jpg'

const items = [
    {
        key: '1',
        img: image1,
        title: 'Advanced Options'
    },
    {
        key: '2',
        img: image2,
        title: 'Clean and Elegant'
    },
    {
        key: '3',
        img: image3,
        title: 'Easy to customise'
    },
    {
        key: '4',
        img: image4,
        title: 'Great Support'
    },
    {
        key: '5',
        img: image5,
        title: 'Modern Design'
    },
    {
        key: '6',
        img: image6,
        title: 'Unlimited Features'
    },
]

const { Meta } = Card;

function AppFeatures(props) {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col span={8} key={item.key}>
                                <Card
                                    hoverable
                                    cover={<img alt={item.title} src={item.img} />}
                                >
                                    <Meta title={item.title} />
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </div>
        </div>

    );
}

export default AppFeatures;