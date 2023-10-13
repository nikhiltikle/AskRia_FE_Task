import './index.css';

import { Flex, Typography, Upload } from 'antd';
import Card from '../Card';
import UploadIcon from '../../assets/icons/upload.svg';

interface FormProps {
  label: string;
  value?: string;
}

const ImageUpload: React.FC<FormProps> = ({ label, value }) => {
  return (
    <div id='image-upload'>
      <Card title={label}>
        <Upload
          name='avatar'
          listType='picture-card'
          showUploadList={false}
          action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
          // beforeUpload={beforeUpload}
          // onChange={handleChange}
        >
          {value ? (
            <img src={value} alt={label} className='image-upload-styles' />
          ) : (
            <Flex
              vertical
              gap='6px'
              className='image-upload-container'
              justify='center'
              align='center'
            >
              <img src={UploadIcon} alt='upload file' />
              <Typography className='image-upload-text'>
                Upload cover image
              </Typography>
              <Typography className='image-text'>
                16:9 ratio is recommended. Max image size 1mb
              </Typography>
            </Flex>
          )}
        </Upload>
      </Card>
    </div>
  );
};

export default ImageUpload;
