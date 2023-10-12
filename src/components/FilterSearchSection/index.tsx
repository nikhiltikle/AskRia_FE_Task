import { Flex, Input } from 'antd';
import SearchIcon from '../../icons/SearchIcon';
import WarningCircleIcon from '../../icons/WarningCircleIcon';
import Filters from '../Filters';
import './index.css';

export default function FilterSearchSection() {
  return (
    <Flex gap={'large'} vertical>
      <Input
        className='input-container'
        placeholder={'Serach by name, edu, exp or #tag'}
        bordered={false}
        size={'middle'}
        prefix={<SearchIcon />}
        suffix={<WarningCircleIcon />}
      />
      <Filters />
    </Flex>
  );
}
