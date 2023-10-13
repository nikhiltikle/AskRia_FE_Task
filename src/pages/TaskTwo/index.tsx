import './index.css';

import { Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import CandidateSection from '../../components/CandidateSection';
import HomePageFilter from '../../components/HomePageFilter';
import HomePageHeader from '../../components/HomePageHeader';

export default function TaskTwo() {
  return (
    <Content className='tasktwo-layout-container'>
      <HomePageHeader />

      <Row gutter={32} style={{ paddingTop: '32px' }}>
        <Col span={7}>
          <HomePageFilter />
        </Col>
        <Col span={17}>
          <CandidateSection />
        </Col>
      </Row>
    </Content>
  );
}
