import './index.css';

import { Divider } from 'antd';
import CandidateTableHeader from '../CandidateTableHeader';
import CandidateTable from '../CandidateTable';

export default function CandidateSection() {
  return (
    <div className='candidate-table-container'>
      <CandidateTableHeader />
      <Divider className='candidate-table-container-divider' />
      <CandidateTable />
    </div>
  );
}
