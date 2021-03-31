import { Button, Modal } from 'antd';
import React, { useState } from 'react';

function AppWorks(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div id="work" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                    <Button onClick={showModal}>
                        <i className="fas fa-play"></i>
                    </Button>
                </div>
                <Modal title="Tutorial" visible={isModalVisible} footer={null} onCancel={handleCancel}>

                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/YFnO8zOwifE" title="YouTube video player" ></iframe>
                </Modal>
            </div>

        </div>
    );
}

export default AppWorks;