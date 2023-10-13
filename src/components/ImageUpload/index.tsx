import './index.css';
import { Button, Flex, Typography, Upload } from 'antd';
import Card from '../Card';
import UploadIcon from '../../assets/icons/upload.svg';
import CrossIcon from '../../icons/Cross';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload';
import { getBase64 } from '../../utils/helper';

interface FormProps {
  label: string;
  value?: string;
  onDelete?: () => void;
  onLoadImage: (url: string) => void;
}

const ImageUpload: React.FC<FormProps> = ({
  label,
  value,
  onDelete,
  onLoadImage,
}) => {
  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    getBase64(info.file as RcFile, (url) => {
      onLoadImage(url);
    });
  };

  return (
    <div id='image-upload'>
      <Card title={label}>
        {value ? (
          <>
            <img
              src={value}
              alt={label}
              className='image-preview'
            />
            <div className='image-preview-action'>
              <Button
                icon={<CrossIcon />}
                type='text'
                onClick={onDelete}
                className='action-button-delete-style'
              >
                Delete & re-upload
              </Button>
            </div>
          </>
        ) : (
          <Upload
            name='avatar'
            listType='picture-card'
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleChange}
          >
            <Flex
              vertical
              gap='6px'
              className='image-upload-container'
              justify='center'
              align='center'
            >
              <img
                src={UploadIcon}
                alt='upload file'
              />
              <Typography className='image-upload-text'>
                Upload cover image
              </Typography>
              <Typography className='image-text'>
                16:9 ratio is recommended. Max image size 1mb
              </Typography>
            </Flex>
          </Upload>
        )}
      </Card>
    </div>
  );
};

export default ImageUpload;
