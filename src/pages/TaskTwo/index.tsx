import './index.css';

import { Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import CandidateSection from '../../components/CandidateSection';
import FilterSearchSection from '../../components/FilterSearchSection';

export default function TaskTwo() {
  return (
    <Content id='filter-candidate' className='filter-candidate-container'>
      <Row gutter={32}>
        <Col span={8}>
          <FilterSearchSection />
        </Col>
        <Col span={16}>
          <CandidateSection />
        </Col>
      </Row>
    </Content>
  );
}
